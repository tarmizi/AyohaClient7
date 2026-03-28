Ext.define('BuskartApp.view.common.FloatPanel_NonMembershipWithJoin', {
    requires: [
        'Ext.util.DelayedTask'
    ]
});

var _FloatPanel_NonMembershipWithJoinisOpen = 'N';
var _FloatPanel_NonMembershipWithJoin = null;


/****************************************************
 * CREATE
 ****************************************************/
function FloatPanel_NonMembershipWithJoinCreateIfNeeded() {

    if (_FloatPanel_NonMembershipWithJoin && !_FloatPanel_NonMembershipWithJoin.destroyed) return;

    _FloatPanel_NonMembershipWithJoin = Ext.create('Ext.Container', {
        xtype: 'container',
        id: 'FloatPanel_NonMembershipWithJoinID',
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
                                var view = cmp.up('#FloatPanel_NonMembershipWithJoinID');

                                if (!view) return;

                                if (view._data && Ext.isFunction(view._data.onCancelFn)) {
                                    view._data.onCancelFn();
                                }

                                FloatPanel_NonMembershipWithJoinHide(false);
                            }
                        }
                    },

                    {
                        xtype: 'component',
                        itemId: 'cmpMembershipSuccessIconTop',
                        cls: 'ayohaMembershipSuccessIconTop',
                        html:
                            '<div class="ayohaMembershipGetmembershipCardAura">' +
                                '<div class="ayohaMembershipSuccessSpark spark1">✦</div>' +
                                '<div class="ayohaMembershipSuccessSpark spark2">✦</div>' +
                               // '<div class="ayohaMembershipSuccessGift">🎁</div>' +
                                '<div class="ayohaMembershipSuccessGift"><img src="'+AppState.MainDashboard_HomePage.EnterpriseLogo+'" style="width:90px;height:90px;border-radius:50%;margin:8px 0px 0px 0px;" alt="Company Name"/></div>' +
                            '</div>'
                    },

                    {
                        xtype: 'container',
                        cls: 'ayohaMembershipGetMembershipCard',
                        layout: { type: 'vbox', pack: 'start', align: 'stretch' },
                        items: [

                            {
                                xtype: 'component',
                                cls: 'ayohaMembershipSuccessHeader',
                                itemId: 'cmpMembershipSuccessTitle',
                                html: AppState.MainDashboard_HomePage.EnterpriseName // 'Congratulations!'
                            },
                            {
                                xtype: 'component',
                                cls: 'ayohaMembershipSuccessHeaderNotMember',
                                itemId: 'cmpMembershipSuccessTitleCongratulation',
                                html: 'Unlock Exclusive Member Rewards!' // 'Congratulations!'
                            },
                            {
                                xtype: 'component',
                                cls: 'ayohaMembershipSuccessSubTitle',
                                 // hidden:true,
                                itemId: 'cmpMembershipSuccessSubtitle',
                                html: ''
                            },

                            {
                                xtype: 'component',
                               // hidden:true,
                               cls: 'ayohaMembershipGetMembershipCardBadge',
                                itemId: 'cmpMembershipSuccessBadge',
                                html: '<span style="font-size:28px;">💳</span>'
                            },

                            {
                                xtype: 'component',
                                 
                                cls: 'ayohaMembershipSuccessMessage',
                                itemId: 'cmpMembershipSuccessMessage',
                                html:  'Join <b>' + AppState.MainDashboard_HomePage.EnterpriseName + '</b> Membership to enjoy exclusive discounts, loyalty rewards, and special member-only perks'
                            },

                            {
                                xtype: 'component',
                                cls: 'ayohaMembershipGetCardBtn',
                                itemId: 'cmpMembershipSuccessBtn',
                                html: 'Get Membership Card',
                                listeners: {
                                    element: 'element',
                                    tap: function (e) {

                                      //  LoadingPanelShow("resources/icons/loadingBlade01.gif", "Loading...");
                                        FloatPanel_NonMembershipWithJoinHide(false);
                                       
                                
                                            
                                      



                                         FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(AppState.MainDashboard_HomePage.MembershipCardCode
                                            ,AppState.MainDashboard_HomePage.EnterpriseAccNo
                                            ,'NO'
                                            ,AppState.MainDashboard.MembershipCardFeePaymentCycle
                                            ,AppState.MainDashboard.CountStar
                                            ,AppState.MainDashboard.CountReviewer);
                                          


                                       
                                      

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
                                        var view = cmp.up('#FloatPanel_NonMembershipWithJoinID');

                                        if (!view) return;

                                        if (view._data && Ext.isFunction(view._data.onCancelFn)) {
                                            view._data.onCancelFn();
                                        }
                                     //   LoadingPanelShow("resources/icons/loadingBlade01.gif", "Loading...");
                                       
                                        FloatPanel_NonMembershipWithJoinHide(false);
                                        // FloatPanel_CheckOut_MembershipCardHide(false);
                                        //               FloatPanel_MembershipCardList_NotYetSubscribedHide(false);
                                        //               FloatPanel_CheckOut_ConfirmedCheckOut_DashboardAyohaGoTop();
                                        //               Dashboard_LoadLastCheckIn();
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
function FloatPanel_NonMembershipWithJoinShow(cfg) {
    _FloatPanel_NonMembershipWithJoinisOpen = 'Y';
    FloatPanel_NonMembershipWithJoinCreateIfNeeded();

// globalStampCampaingName = StampCampaignName;
//     globalStampCampaignAdvertisementTitle = AdvertismentTitle;
//     globalStampCampaignEnterpriseLogo = EnterpriseLogo;
//     globalStampCampaignEnterpriseName = EnterpriseName;
//     globalStampCampaignEnterpriseAccNo = EnterpriseAccNo;



    // cfg = cfg || {};

    // _FloatPanel_NonMembershipWithJoin._data.logoUrl       = globalStampCampaignEnterpriseLogo;
    // _FloatPanel_NonMembershipWithJoin._data.brandTitle    =  'AYOHA REWARD';
    // _FloatPanel_NonMembershipWithJoin._data.brandTagline  =  'We Double Your Reward';
    // _FloatPanel_NonMembershipWithJoin._data.title         =  globalStampCampaignEnterpriseName;
    // _FloatPanel_NonMembershipWithJoin._data.subtitle      = 'You are not a member. Join now to enjoy exclusive benefits!';
    // _FloatPanel_NonMembershipWithJoin._data.badgeText     = 'Join Membership Now';
    // _FloatPanel_NonMembershipWithJoin._data.message       = 'A world of rewards, perks, and exclusive privileges is now yours to enjoy.';
    // _FloatPanel_NonMembershipWithJoin._data.buttonText    =  'Get Membership card and Join Now';
    // _FloatPanel_NonMembershipWithJoin._data.onConfirmFn   = 'OK';
    // _FloatPanel_NonMembershipWithJoin._data.onCancelFn    ='Maybe Later';

    // try {
    //     _FloatPanel_NonMembershipWithJoin.down('#cmpMembershipSuccessTitle').setHtml(_FloatPanel_NonMembershipWithJoin._data.title);
    //     _FloatPanel_NonMembershipWithJoin.down('#cmpMembershipSuccessSubtitle').setHtml(_FloatPanel_NonMembershipWithJoin._data.subtitle);
    //     _FloatPanel_NonMembershipWithJoin.down('#cmpMembershipSuccessBadge').setHtml('✓ ' + _FloatPanel_NonMembershipWithJoin._data.badgeText);
    //     _FloatPanel_NonMembershipWithJoin.down('#cmpMembershipSuccessMessage').setHtml(_FloatPanel_NonMembershipWithJoin._data.message);
    //     _FloatPanel_NonMembershipWithJoin.down('#cmpMembershipSuccessBtn').setHtml(_FloatPanel_NonMembershipWithJoin._data.buttonText);
    //     _FloatPanel_NonMembershipWithJoin.down('#cmpMembershipSuccessBrandTitle').setHtml(_FloatPanel_NonMembershipWithJoin._data.brandTitle);
    //     _FloatPanel_NonMembershipWithJoin.down('#cmpMembershipSuccessBrandTagline').setHtml(_FloatPanel_NonMembershipWithJoin._data.brandTagline);

    //     if (globalStampCampaignEnterpriseLogo) {
    //         _FloatPanel_NonMembershipWithJoin.down('#cmpMembershipSuccessLogo').setHtml(
    //             '<img src="' + globalStampCampaignEnterpriseLogo + '" />'
    //         );
    //     } else {
    //         _FloatPanel_NonMembershipWithJoin.down('#cmpMembershipSuccessLogo').setHtml('');
    //     }
    // } catch (e) {}

    _FloatPanel_NonMembershipWithJoin.show();
   // _FloatPanel_NonMembershipWithJoinisOpen = 'Y';
 

    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
        AyohaBrowserBack.push('FloatPanel_NonMembershipWithJoin', function () {
            FloatPanel_NonMembershipWithJoinHide(true);
        });
    }
}


/****************************************************
 * HIDE
 ****************************************************/
function FloatPanel_NonMembershipWithJoinHide(fromBack, animCfg) {

    if (_FloatPanel_NonMembershipWithJoinisOpen == 'N') {
        return;
    }

    // if (!_FloatPanel_NonMembershipWithJoin || _FloatPanel_NonMembershipWithJoin.destroyed) {
    //     _FloatPanel_NonMembershipWithJoinisOpen = 'N';
    //     return;
    // }

    if (animCfg) {
        _FloatPanel_NonMembershipWithJoin.hide(Ext.fx.Animation(animCfg));
    } else {
        _FloatPanel_NonMembershipWithJoin.hide(Ext.fx.Animation({
            type: 'popOut',
            easing: 'ease-out',
            duration: 250
        }));
    }

    _FloatPanel_NonMembershipWithJoinisOpen = 'N';

    if (fromBack !== true) {
        if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.close) {
            AyohaBrowserBack.close('FloatPanel_NonMembershipWithJoin');
        }
    }
   _FloatPanel_NonMembershipWithJoin.destroy();
   _FloatPanel_NonMembershipWithJoin = null;
   
}





