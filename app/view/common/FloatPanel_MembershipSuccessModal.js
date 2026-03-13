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

        floated: true,
        fullscreen: true,
        modal: true,
        hideOnMaskTap: true,
        //zIndex: 999,

        cls: 'ayohaMembershipSuccessModal',
      //  style: 'background: rgba(20,10,30,.50);backdrop-filter: blur(3px);-webkit-backdrop-filter: blur(3px);',
        style: 'background: rgba(20,10,30,.45); backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);',

        showAnimation: { type: 'popIn', duration: 180, easing: 'ease-out' },
        hideAnimation: { type: 'popOut', duration: 250, easing: 'ease-out' },

        _data: {
            logoUrl: '',
            brandTitle: 'AYOHA REWARD',
            brandTagline: 'We Double Your Reward',
            title: 'Welcome to Ayoha Reward! 🎉',
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
            padding: 18,
            style: 'background:transparent;',
            items: [{
                xtype: 'container',
                cls: 'ayohaMembershipSuccessShell',
                items: [

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
                        cls: 'ayohaMembershipSuccessIconTop',
                        html:
                            '<div class="ayohaMembershipSuccessGiftAura">' +
                                '<div class="ayohaMembershipSuccessSpark spark1">✦</div>' +
                                '<div class="ayohaMembershipSuccessSpark spark2">✦</div>' +
                                '<div class="ayohaMembershipSuccessGift">🎁</div>' +
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
                                html: 'Welcome to Ayoha Reward! 🎉'
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
                                html: 'A world of rewards, perks, and exclusive privileges is now yours to enjoy.'
                            },

                            {
                                xtype: 'component',
                                cls: 'ayohaMembershipSuccessBtn',
                                itemId: 'cmpMembershipSuccessBtn',
                                html: 'Start Exploring',
                                listeners: {
                                    element: 'element',
                                    tap: function (e) {
                                        if (e && e.stopEvent) e.stopEvent();

                                        var cmp = Ext.Component.from(this);
                                        var view = cmp.up('#FloatPanel_MembershipSuccessModalID');

                                        if (!view) return;

                                        FloatPanel_MembershipSuccessModalHide(false);

                                        if (view._data && Ext.isFunction(view._data.onConfirmFn)) {
                                            view._data.onConfirmFn();
                                        }
                                    }
                                }
                            },

                            {
                                xtype: 'component',
                                cls: 'ayohaMembershipSuccessMaybeLater',
                                html: 'Maybe Later',
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
                                xtype: 'container',
                                cls: 'ayohaMembershipSuccessFooter',
                                items: [
                                    {
                                        xtype: 'component',
                                        itemId: 'cmpMembershipSuccessLogo',
                                        cls: 'ayohaMembershipSuccessLogo',
                                        html: ''
                                    },
                                    {
                                        xtype: 'component',
                                        itemId: 'cmpMembershipSuccessBrandTitle',
                                        cls: 'ayohaMembershipSuccessBrandTitle',
                                        html: 'AYOHA REWARD'
                                    },
                                    {
                                        xtype: 'component',
                                        itemId: 'cmpMembershipSuccessBrandTagline',
                                        cls: 'ayohaMembershipSuccessBrandTagline',
                                        html: 'We Double Your Reward'
                                    }
                                ]
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
function FloatPanel_MembershipSuccessModalShow(cfg) {
    _FloatPanel_MembershipSuccessModalisOpen = 'Y';
    FloatPanel_MembershipSuccessModalCreateIfNeeded();

    cfg = cfg || {};

    _FloatPanel_MembershipSuccessModal._data.logoUrl       = cfg.logoUrl || '';
    _FloatPanel_MembershipSuccessModal._data.brandTitle    = cfg.brandTitle || 'AYOHA REWARD';
    _FloatPanel_MembershipSuccessModal._data.brandTagline  = cfg.brandTagline || 'We Double Your Reward';
    _FloatPanel_MembershipSuccessModal._data.title         = cfg.title || 'Welcome to Ayoha Reward! 🎉';
    _FloatPanel_MembershipSuccessModal._data.subtitle      = cfg.subtitle || 'Your membership is now active';
    _FloatPanel_MembershipSuccessModal._data.badgeText     = cfg.badgeText || 'Membership Activated';
    _FloatPanel_MembershipSuccessModal._data.message       = cfg.message || 'A world of rewards, perks, and exclusive privileges is now yours to enjoy.';
    _FloatPanel_MembershipSuccessModal._data.buttonText    = cfg.buttonText || 'Start Exploring';
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

        if (_FloatPanel_MembershipSuccessModal._data.logoUrl) {
            _FloatPanel_MembershipSuccessModal.down('#cmpMembershipSuccessLogo').setHtml(
                '<img src="' + _FloatPanel_MembershipSuccessModal._data.logoUrl + '" />'
            );
        } else {
            _FloatPanel_MembershipSuccessModal.down('#cmpMembershipSuccessLogo').setHtml('');
        }
    } catch (e) {}

    _FloatPanel_MembershipSuccessModal.show();
    _FloatPanel_MembershipSuccessModalisOpen = 'Y';

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

    if (!_FloatPanel_MembershipSuccessModal || _FloatPanel_MembershipSuccessModal.destroyed) {
        _FloatPanel_MembershipSuccessModalisOpen = 'N';
        return;
    }

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