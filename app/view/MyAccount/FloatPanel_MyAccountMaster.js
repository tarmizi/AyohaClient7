
Ext.define('BuskartApp.view.MyAccount.FloatPanel_MyAccountMaster', {

});

var _FloatPanel_MyAccountMaster = null;
var _FloatPanel_MyAccountMasterisOpen = 'N';

function FloatPanel_MyAccountMasterBackgroundStyle() {
    return "background:" +
        "radial-gradient(circle at 82% 24%, rgba(255,210,90,0.22), transparent 20%)," +
        "radial-gradient(circle at 18% 82%, rgba(255,72,176,0.18), transparent 25%)," +
        "linear-gradient(135deg, #3c0b78 0%, #5a189a 38%, #6f1dbe 68%, #4c0f88 100%);" +
        "box-shadow:" +
        "inset 0 -18px 40px rgba(255,255,255,0.04)," +
        "inset 0 12px 30px rgba(255,255,255,0.03);";
}

function FloatPanel_MyAccountMasterHeroHtml() {
    return '<div style="' + FloatPanel_MyAccountMasterBackgroundStyle() + 'width:100%;height:392px;border-radius:0;position:relative;overflow:hidden;">' +
        '<div style="position:absolute;top:-28px;right:28px;width:178px;height:178px;border-radius:50%;background:rgba(255,255,255,0.08);"></div>' +
        '<div style="position:absolute;bottom:24px;left:18px;width:124px;height:124px;border-radius:50%;background:rgba(255,255,255,0.07);"></div>' +
        '<div style="position:absolute;left:0;right:0;top:0;height:120px;background:linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 100%);"></div>' +
        '</div>';
}

function FloatPanel_MyAccountMasterSummaryCardStyle() {
    return 'background:rgba(255,255,255,0.92);backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,0.75);border-radius:30px;box-shadow:0 20px 40px rgba(76,15,136,0.12);';
}

function FloatPanel_MyAccountMasterBodyCardStyle() {
    return 'background:#f8f9fe;border-radius:34px 34px 0 0;box-shadow:none;';
}

function FloatPanel_MyAccountMasterSectionTitleHtml(title) {
    var accentColor = '#7c3aed';

    if (title === 'Rewarding') {
        accentColor = '#ec4899';
    } else if (title === 'Ayoha Store') {
        accentColor = '#6366f1';
    } else if (title === 'General') {
        accentColor = '#64748b';
    }

    return '<div style="display:flex;align-items:center;justify-content:space-between;width:100%;">' +
        '<span style="font-size:18px;font-weight:900;color:#0f172a;letter-spacing:-0.02em;">' + title + '</span>' +
        '<span style="display:inline-block;width:34px;height:4px;border-radius:999px;background:' + accentColor + ';"></span>' +
        '</div>';
}

function FloatPanel_MyAccountMasterChevronHtml() {
    return '<div style="width:30px;height:30px;border-radius:15px;background:linear-gradient(135deg,#f5eaff 0%,#eadfff 100%);color:#6420af;font-size:22px;font-weight:800;line-height:30px;text-align:center;box-shadow:0 8px 16px rgba(124,58,237,0.10);">&#8250;</div>';
}

function FloatPanel_MyAccountMasterProfileAvatarHtml(imageSource) {
    var photo = imageSource || 'resources/icons/founderWayang02.jpg';

    return '<div style="width:98px;height:98px;padding:4px;border-radius:999px;background:rgba(255,255,255,0.20);box-shadow:0 20px 36px rgba(33,5,64,0.20);backdrop-filter:blur(6px);">' +
        '<img src="' + photo + '" alt="Image" style="width:90px;height:90px;border-radius:999px;object-fit:cover;border:3px solid rgba(255,255,255,0.26);display:block;background:#f7c2e4;">' +
        '</div>';
}

function FloatPanel_MyAccountMasterVerifyBadgeHtml(iconPath, innerBackground) {
    return '<div style="width:30px;height:30px;background:#ffffff;border-radius:999px;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 20px rgba(33,5,64,0.18);">' +
        '<div style="width:22px;height:22px;background:' + innerBackground + ';border-radius:999px;display:flex;align-items:center;justify-content:center;overflow:hidden;">' +
        '<img src="' + iconPath + '" alt="Verify" style="width:14px;height:14px;">' +
        '</div>' +
        '</div>';
}

function FloatPanel_MyAccountMasterHeaderChipHtml() {
    return '<div style="display:flex;align-items:center;justify-content:flex-end;width:100%;font-size:22px;font-weight:900;color:#ffffff;letter-spacing:-0.03em;text-shadow:0 4px 14px rgba(41, 9, 78, 0.26);">My Account</div>';
}

function FloatPanel_MyAccountMasterMenuCardStyle() {
    return 'background:#ffffff;border:1px solid #eef2f7;border-radius:22px;box-shadow:0 8px 18px rgba(15,23,42,0.05);';
}

function FloatPanel_MyAccountMasterMenuCardMargin() {
    return '0 0 14 0';
}

function FloatPanel_MyAccountMasterMenuIconHtml(iconPath, backgroundStyle) {
    return '<div style="width:42px;height:42px;border-radius:14px;' + backgroundStyle + 'display:flex;align-items:center;justify-content:center;">' +
        '<img src="' + iconPath + '" alt="Icon" style="width:20px;height:20px;">' +
        '</div>';
}

function FloatPanel_MyAccountMasterMenuLabelHtml(label, color) {
    return '<div style="width:100%;background-color:transparent;text-align:left;font-size:14px;font-weight:700;color:' + color + ';line-height:20px;">' + label + '</div>';
}

function FloatPanel_MyAccountMasterCreateIfNeeded() {
    if (_FloatPanel_MyAccountMaster && !_FloatPanel_MyAccountMaster.destroyed) {
        return;
    }
    _FloatPanel_MyAccountMaster = Ext.create('Ext.Panel', {
        id: 'FloatPanel_MyAccountMasterID',
        floated: true,
        centered: false,
        fullscreen: true,
        closeAction: 'destroy',
        draggable: false,
        modal: false,
        styleHtmlContent: true,
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'stretch'
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
        style: FloatPanel_MyAccountMasterBackgroundStyle(),
        listeners: {
            beforehide: function () {
                return true;
            }
        },
        items: [
            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_MyAccountMasterBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
               style: ' background-color:transparent;',
              //  style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
               // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                flex: 1,
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'stretch'
                },
                scrollable: {
                    direction: 'vertical',
                    directionLock: true,
                    indicators: false
                },
          
                items: [



                    {
                        xtype: 'container',
                        width: '100%',
                        padding: '0 0 0 0',
                        style: FloatPanel_MyAccountMasterBackgroundStyle() + 'border-radius:0;overflow:hidden;',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'stretch'
                        },
                        items: [
                            // Decorative circles
                            {
                                xtype: 'component',
                                height: 0,
                                html: '<div style="position:absolute;top:-28px;right:28px;width:178px;height:178px;border-radius:50%;background:rgba(255,255,255,0.08);"></div><div style="position:absolute;bottom:24px;left:18px;width:124px;height:124px;border-radius:50%;background:rgba(255,255,255,0.07);"></div><div style="position:absolute;left:0;right:0;top:0;height:120px;background:linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 100%);"></div>'
                            },
                            // Header row: back + MY ACCOUNT chip
                            {
                                xtype: 'container',
                                width: '100%',
                                padding: '10 16 0 16',
                                layout: {
                                    type: 'hbox',
                                    pack: 'start',
                                    align: 'center'
                                },
                                items: [
                                     {
                                         xtype: 'button',
                                         id: 'btnFloatPanel_MyAccountMasterBack',
                                         height: 44,
                                         width: 44,
                                         margin: '0 0 0 0',
                                         html: '<div style="width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;"><img src="resources/icons/backwhite03Ori.png" width="22" height="16" alt="Back"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                             FloatPanel_MyAccountMasterHide(false);
                                         }
                                     },
                                    {
                                        xtype: 'spacer'
                                    },
                                    {
                                        id: 'htmlFloatPanel_MyAccountMaster_TitleHeaderTxt',
                                        html: '<div style="display:inline-flex;align-items:center;justify-content:center;padding:8px 22px;border-radius:999px;border:1.5px solid rgba(255,255,255,0.25);background:rgba(255,255,255,0.10);backdrop-filter:blur(8px);"><span style="font-size:11px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;color:#ffffff;">My Account</span></div>'
                                    }
                                ]
                            },
                            // Profile row: avatar + name/email
                            {
                                xtype: 'container',
                                width: '100%',
                                margin: '28 0 0 0',
                                padding: '0 22 0 22',
                                layout: {
                                    type: 'hbox',
                                    pack: 'start',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'container',
                                        width: 112,
                                        items: [
                                            {
                                                id: 'FloatPanel_MyAccountMaster_PicPicture',
                                                height: 98,
                                                width: 98,
                                                html: FloatPanel_MyAccountMasterProfileAvatarHtml(GetAyohaUserPicProfile())
                                            },
                                            {
                                                xtype: 'container',
                                                width: '100%',
                                                margin: '-22 0 0 62',
                                                items: [
                                                    {
                                                        id: 'FloatPanel_MyAccountMaster_VerifyIcon',
                                                        height: 34,
                                                        width: 34,
                                                        html: FloatPanel_MyAccountMasterVerifyBadgeHtml('resources/icons/NotVerify.png', '#7c3aed')
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'container',
                                        flex: 1,
                                        margin: '0 0 0 12',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'stretch'
                                        },
                                        items: [
                                            {
                                                id: 'FloatPanel_MyAccountMaster_AccountName',
                                                html: '<div style="width:100%;text-align:left;font-size:26px;font-weight:900;color:#ffffff;line-height:1.05;letter-spacing:-0.02em;text-shadow:0 2px 8px rgba(0,0,0,0.18);">SUBSCRIBER</div>'
                                            },
                                            {
                                                id: 'FloatPanel_MyAccountMaster_emailAddress',
                                                margin: '6 0 0 0',
                                                html: '<div style="width:100%;text-align:left;font-size:13px;font-weight:600;color:rgba(255,255,255,0.78);line-height:1.3;">email@example.com</div>'
                                            },
                                            // ── Status & Last Login pills (small, vertical) ──
                                            {
                                                xtype: 'container',
                                                margin: '10 0 0 0',
                                                layout: { type: 'vbox', pack: 'start', align: 'start' },
                                                items: [
                                                    {
                                                        xtype: 'container',
                                                        margin: '0 0 4 0',
                                                        layout: { type: 'hbox', pack: 'start', align: 'center' },
                                                        items: [
                                                            {
                                                                html: '<div style="width:7px;height:7px;border-radius:50%;background:#22c55e;box-shadow:0 0 6px rgba(34,197,94,0.5);margin-right:6px;"></div>'
                                                            },
                                                            {
                                                                html: '<span style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.50);letter-spacing:0.06em;">Status</span>'
                                                            },
                                                            {
                                                                id: 'FloatPanel_MyAccountMaster_StatusPill',
                                                                margin: '0 0 0 4',
                                                                html: '<span style="font-size:10px;font-weight:800;color:#ffffff;">Active</span>'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        layout: { type: 'hbox', pack: 'start', align: 'center' },
                                                        items: [
                                                            {
                                                                xtype: 'component',
                                                                html:
    '<div class="ayohaVerifyPill ayohaVerifyPillPremium">' +
        '<span class="ayohaVerifyPillShield">' +
            '<span class="ayohaVerifyPillShieldInner">⛨</span>' +
        '</span>' +
        '<span class="ayohaVerifyPillLabel">Account Not Verified Yet</span>' +
    '</div>'
                                                            },
                                                            // {
                                                            //     html: '<div style="width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,0.25);margin-right:6px;"></div>'
                                                            // },
                                                            // {
                                                            //     html: '<span style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.50);letter-spacing:0.06em;">Log Masuk</span>'
                                                            // },
                                                            // {
                                                            //     id: 'FloatPanel_MyAccountMaster_LastLoginPill',
                                                            //     margin: '0 0 0 4',
                                                            //     html: '<span style="font-size:10px;font-weight:800;color:rgba(255,255,255,0.75);">-</span>'
                                                            // }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            // ── Membership Card (inside hero) ──
                            {
                                xtype: 'container',
                                id:'FloatPanel_MyAccountMasterMembershipCardContainer',
                                width: '100%',
                                margin: '18 0 18 0',
                                padding: '0 18 0 18',
                                layout: { type: 'vbox', pack: 'start', align: 'stretch' },
                                items: [
                                    {
                                        xtype: 'component',
                                        html:
    '<div class="ayohaMembershipCard50">' +
        '<div class="ayohaMembershipCard50_inner">' +

            '<div class="ayohaMembershipCard50_header">' +
                '<div class="ayohaMembershipCard50_iconWrap">' +
                    '<div class="ayohaMembershipCard50_icon">★</div>' +
                '</div>' +

                '<div class="ayohaMembershipCard50_titleWrap">' +
                    '<div class="ayohaMembershipCard50_kicker">AYOHA MEMBERSHIP</div>' +
                    '<div class="ayohaMembershipCard50_title">Join the Elite</div>' +
                '</div>' +

                '<div class="ayohaMembershipCard50_badge">FREE TIER</div>' +
            '</div>' +

            '<div class="ayohaMembershipCard50_infoBox">' +
                '<div class="ayohaMembershipCard50_infoTitle">Unlock Exclusive Perks</div>' +
                '<div class="ayohaMembershipCard50_infoText">You’re missing out on daily rewards and premium member-only privileges.</div>' +
            '</div>' +

            '<div class="ayohaMembershipCard50_featureGrid">' +
                '<div class="ayohaMembershipCard50_featureItem">Special Prizes</div>' +
                '<div class="ayohaMembershipCard50_featureItem">Exclusive Perks</div>' +
                '<div class="ayohaMembershipCard50_featureItem">Priority Access</div>' +
                '<div class="ayohaMembershipCard50_featureItem">Points Multiplier</div>' +
            '</div>' +

            '<div class="ayohaMembershipCard50_btnWrap">' +
                '<div class="ayohaMembershipCard50_btn">UPGRADE TO PREMIUM <span>›</span></div>' +
            '</div>' +

            '<div class="ayohaMembershipCard50_footer">START YOUR REWARDING JOURNEY TODAY</div>' +

        '</div>' +
    '</div>'
                                    }
                                    // {
                                    //     xtype: 'container',
                                    //     width: '100%',
                                    //     padding: '20 20 20 20',
                                    //     style: 'background:linear-gradient(135deg,rgba(124,58,237,0.65) 0%,rgba(168,85,247,0.55) 100%);backdrop-filter:blur(24px);border:1.5px solid rgba(255,255,255,0.22);border-radius:26px;box-shadow:0 16px 40px rgba(76,15,136,0.25);',
                                    //     layout: { type: 'vbox', pack: 'start', align: 'stretch' },
                                    //     items: [
                                    //         // Top row: crown icon + membership info + upgrade button
                                    //         {
                                    //             xtype: 'container',
                                    //             width: '100%',
                                    //             layout: { type: 'hbox', pack: 'start', align: 'center' },
                                    //             items: [
                                    //                 {
                                    //                     xtype: 'container',
                                    //                     width: 52,
                                    //                     height: 52,
                                    //                     html: '<div style="width:52px;height:52px;border-radius:16px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;"><img src="resources/icons/Achievements01.png" width="28" height="28" style="filter:brightness(1.1);" alt="Crown"></div>'
                                    //                 },
                                    //                 {
                                    //                     xtype: 'container',
                                    //                     flex: 1,
                                    //                     margin: '0 0 0 14',
                                    //                     layout: { type: 'vbox', pack: 'center', align: 'stretch' },
                                    //                     items: [
                                    //                         {
                                    //                             html: '<div style="font-size:10px;font-weight:800;letter-spacing:0.16em;color:rgba(255,255,255,0.7);text-transform:uppercase;">Ayoha Membership</div>'
                                    //                         },
                                    //                         {
                                    //                             id: 'FloatPanel_MyAccountMaster_AccountNo',
                                    //                             margin: '4 0 0 0',
                                    //                             html: '<div style="font-size:17px;font-weight:900;color:#ffffff;line-height:1.2;">Not Ayoha Member</div>'
                                    //                         }
                                    //                     ]
                                    //                 },
                                    //                 {
                                    //                     xtype: 'container',
                                    //                     width: 110,
                                    //                     layout: { type: 'vbox', pack: 'center', align: 'end' },
                                    //                     items: [
                                    //                         {
                                    //                             id: 'FloatPanel_MyAccountMaster_VerificationStatusBox',
                                    //                             name: 'nameFloatPanel_MyAccountMaster_VerificationStatusBox',
                                    //                             html: '<div style="display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:0 18px;height:40px;background:#ffffff;border-radius:14px;box-shadow:0 8px 20px rgba(0,0,0,0.12);font-size:13px;font-weight:800;color:#1e293b;">Upgrade <span style="font-size:16px;">&#8594;</span></div>'
                                    //                         }
                                    //                     ]
                                    //                 }
                                    //             ]
                                    //         },
                                    //         // Verification alert banner
                                    //         {
                                    //             xtype: 'container',
                                    //             id: 'FloatPanel_MyAccountMaster_VerificationBanner',
                                    //             width: '100%',
                                    //             margin: '16 0 0 0',
                                    //             html: '<div style="display:flex;align-items:flex-start;gap:12px;padding:14px 16px;border-radius:16px;background:rgba(251,146,60,0.22);border:1.5px solid rgba(251,146,60,0.35);"><div style="min-width:28px;height:28px;border-radius:50%;background:rgba(251,146,60,0.25);display:flex;align-items:center;justify-content:center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fb923c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></div><div style="flex:1;"><div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;"><span style="color:#ffffff;font-size:13px;font-weight:800;line-height:1.3;">Join Ayoha Membership Now!</span><span style="font-size:10px;font-weight:800;letter-spacing:0.08em;color:#fb923c;text-transform:uppercase;">Join Premium Membership</span></div><div style="color:rgba(255,255,255,0.65);font-size:11px;font-weight:500;line-height:1.5;margin-top:4px;">Step into a new generation of rewarding with exclusive perks, premium privileges, and special prize opportunities reserved for Ayoharian members.</div></div></div>'
                                    //         }
                                    //     ]
                                    // }
                                ]
                            }
                        ]
                    },





                {


                    xtype: 'container',
                    width: '100%',
                    height: 630,
                    id:'containerFloatPanel_MyAccountMasterMaster',
                    margin: '18 0 0 0',
                    padding: '0 18 0 18',
                    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                    style: FloatPanel_MyAccountMasterBodyCardStyle(),
                    //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'stretch'
                    },
                    items: [

{
    xtype: 'container',
    width: '100%',
    height: 350,
    id:'containerFloatPanel_MyAccountMasterMaster_Profile',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'
    },
    items:[


        {
            xtype: 'container',
            width: '100%',
            margin: '20 0 0 0',
            height: 30,
           // id:'containerFloatPanel_MyAccountMasterMaster_General',
            layout: {
                type: 'hbox',
                pack: 'left',
                align: 'left'
            },
            items:[
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    html: FloatPanel_MyAccountMasterSectionTitleHtml('Profile')
                },
            ]
        },




{

    xtype: 'container',
    width: '95%',
    height: 60,
    margin: FloatPanel_MyAccountMasterMenuCardMargin(),
    name: 'nameContainerFloatPanel_MyAccountMaster_EditProfile',
    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
    style: FloatPanel_MyAccountMasterMenuCardStyle(),
    //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'
    },
    items: [
        {
            xtype: 'spacer',
            width: 20
        },
        {
            height: 42,
            width: 42,
            html: FloatPanel_MyAccountMasterMenuIconHtml('resources/icons/editProfile.png', 'background:#f3e8ff;'),
        },
        {
            xtype: 'spacer',
            width: 20
        },
        {
            id: 'FloatPanel_MyAccountMaster_Menu_EditProfile',
            margin: '5 0 0 0',
            height: 20,
            html: FloatPanel_MyAccountMasterMenuLabelHtml('Edit Profile', '#1e293b')
        },
         {
             xtype: 'spacer'
         },
        {
            id: 'FloatPanel_MyAccountMaster_Menu_EditProfileSign',
            margin: '0 0 0 0',
            height: 34,
            width: 34,
            html: FloatPanel_MyAccountMasterChevronHtml()
        },
    {
        xtype: 'spacer',
        width:20
},
    ]

},
{

    xtype: 'container',
    width: '95%',
    height: 60,
    margin: FloatPanel_MyAccountMasterMenuCardMargin(),
    name:'nameContainerFloatPanel_MyAccountMaster_ManagePassword',
    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
    style: FloatPanel_MyAccountMasterMenuCardStyle(),
    //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'
    },
    items: [
        {
            xtype: 'spacer',
            width: 20
        },
        {
            height: 42,
                width: 42,
            html: FloatPanel_MyAccountMasterMenuIconHtml('resources/icons/managepassword.png', 'background:#f3e8ff;'),
        },
        {
            xtype: 'spacer',
            width: 20
        },
        {
            id: 'FloatPanel_MyAccountMaster_Menu_ManagePassword',
            margin: '5 0 0 0',
            height: 20,
            html: FloatPanel_MyAccountMasterMenuLabelHtml('Change Password', '#1e293b')
        },
         {
             xtype: 'spacer'
         },
        {
            id: 'FloatPanel_MyAccountMaster_Menu_ManagePasswordSign',
            margin: '0 0 0 0',
            height: 34,
            width: 34,
            html: FloatPanel_MyAccountMasterChevronHtml()
        },
    {
        xtype: 'spacer',
        width: 20
    },
    ]

},

{

    xtype: 'container',
    width: '95%',
    height: 60,
    margin: FloatPanel_MyAccountMasterMenuCardMargin(),
    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
    style: FloatPanel_MyAccountMasterMenuCardStyle(),
    name: 'nameContainerFloatPanel_MyAccountMaster_AllTransactions',
    //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'
    },
    items: [
        {
            xtype: 'spacer',
            width: 20
        },
        {
            height: 42,
            width: 42,
            html: FloatPanel_MyAccountMasterMenuIconHtml('resources/icons/purchase01.png', 'background:#f3e8ff;'),
        },
        {
            xtype: 'spacer',
            width: 20
        },
        {
            id: 'FloatPanel_MyAccountMaster_Menu_Alltransactions',
            margin: '5 0 0 0',
            height: 20,
            html: FloatPanel_MyAccountMasterMenuLabelHtml('Transaction History', '#1e293b')
        },
         {
             xtype: 'spacer'
         },
        {
            id: 'FloatPanel_MyAccountMaster_Menu_AlltransactionsSign',
            margin: '0 0 0 0',
            height: 34,
            width: 34,
            html: FloatPanel_MyAccountMasterChevronHtml()
        },
    {
        xtype: 'spacer',
        width: 20
    },
    ]

},


{

    xtype: 'container',
    width: '95%',
    height: 60,
    margin: FloatPanel_MyAccountMasterMenuCardMargin(),
    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
    style: FloatPanel_MyAccountMasterMenuCardStyle(),
    name: 'nameContainerFloatPanel_MyAccountMaster_LogOut',
    //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'
    },
    items: [
        {
            xtype: 'spacer',
            width: 20
        },
        {
            height: 42,
            width: 42,
            html: FloatPanel_MyAccountMasterMenuIconHtml('resources/icons/logoutPurpleOne.png', 'background:#fee2e2;'),
        },
        {
            xtype: 'spacer',
            width: 20
        },
        {
            id: 'FloatPanel_MyAccountMaster_Menu_LogOut',
            margin: '5 0 0 0',
            height: 20,
            html: FloatPanel_MyAccountMasterMenuLabelHtml('Log Out', '#ef4444')
        },
         {
             xtype: 'spacer'
         },
        {
            id: 'FloatPanel_MyAccountMaster_Menu_LogOutSign',
            margin: FloatPanel_MyAccountMasterMenuCardMargin(),
            height: 34,
            width: 34,
            html: FloatPanel_MyAccountMasterChevronHtml()
        },
    {
        xtype: 'spacer',
        width: 20
    },
    ]

},
    ]
},



{
    xtype: 'container',
    width: '100%',
    height: 440,
    id:'containerFloatPanel_MyAccountMasterMaster_Rewards',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'
    },
    items:[

        {
            xtype: 'container',
            width: '100%',
            height: 30,
           // id:'containerFloatPanel_MyAccountMasterMaster_General',
            layout: {
                type: 'hbox',
                pack: 'left',
                align: 'left'
            },
            items:[
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    html: FloatPanel_MyAccountMasterSectionTitleHtml('Rewarding')
                },
            ]
        },
       
        
        {

            xtype: 'container',
            width: '95%',
            height: 60,
            margin: FloatPanel_MyAccountMasterMenuCardMargin(),
            name: 'nameContainerFloatPanel_MyAccountMaster_MyMerchantPerks',
            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
            style: FloatPanel_MyAccountMasterMenuCardStyle(),
            //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'
            },
            items: [
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    height: 42,
                    width: 42,
                    html: FloatPanel_MyAccountMasterMenuIconHtml('resources/icons/TermAndCondition.png', 'background:#f1f5f9;'),
                },
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_MyMerchantPerks',
                    margin: '5 0 0 0',
                    height: 20,
                    html: FloatPanel_MyAccountMasterMenuLabelHtml('My Merchant Perks', '#334155')
                },
                 {
                     xtype: 'spacer'
                 },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_MyMerchantPerksSign',
                    margin: '0 0 0 0',
                    height: 34,
                    width: 34,
                    html: FloatPanel_MyAccountMasterChevronHtml()
                },
            {
                xtype: 'spacer',
                width: 20
            },
            ]

        },


        {

            xtype: 'container',
            width: '95%',
            height: 60,
            margin: FloatPanel_MyAccountMasterMenuCardMargin(),
            name: 'nameContainerFloatPanel_MyAccountMaster_MyAyohaPointAndPrize',
            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
            style: FloatPanel_MyAccountMasterMenuCardStyle(),
            //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'
            },
            items: [
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    height: 42,
                    width: 42,
                    html: FloatPanel_MyAccountMasterMenuIconHtml('resources/icons/TermAndCondition.png', 'background:#f1f5f9;'),
                },
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_MyAyohaPointAndPrize',
                    margin: '5 0 0 0',
                    height: 20,
                    html: FloatPanel_MyAccountMasterMenuLabelHtml('My Ayoha Point & Prize', '#334155')
                },
                 {
                     xtype: 'spacer'
                 },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_MyAyohaPointAndPrizeSign',
                    margin: '0 0 0 0',
                    height: 34,
                    width: 34,
                    html: FloatPanel_MyAccountMasterChevronHtml()
                },
            {
                xtype: 'spacer',
                width: 20
            },
            ]

        },


        {

            xtype: 'container',
            width: '95%',
            height: 60,
            margin: '0 0 0 0',
            name: 'nameContainerFloatPanel_MyAccountMaster_PointHistoryAndTransaction',
            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
            style: FloatPanel_MyAccountMasterMenuCardStyle(),
            //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'
            },
            items: [
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    height: 42,
                    width: 42,
                    html: FloatPanel_MyAccountMasterMenuIconHtml('resources/icons/TermAndCondition.png', 'background:#f1f5f9;'),
                },
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_PointHistoryAndTransaction',
                    margin: '5 0 0 0',
                    height: 20,
                    html: FloatPanel_MyAccountMasterMenuLabelHtml('Point History & Transaction', '#334155')
                },
                 {
                     xtype: 'spacer'
                 },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_PointHistoryAndTransactionSign',
                    margin: '0 0 0 0',
                    height: 34,
                    width: 34,
                    html: FloatPanel_MyAccountMasterChevronHtml()
                },
            {
                xtype: 'spacer',
                width: 20
            },
            ]

        },






        
            {

                xtype: 'container',
                width: '95%',
                height: 60,
                margin: FloatPanel_MyAccountMasterMenuCardMargin(),
                //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                style: FloatPanel_MyAccountMasterMenuCardStyle(),
                name: 'nameContainerFloatPanel_MyAccountMaster_DoubleRewardTracker',
                //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'spacer',
                        width: 20
                    },
                    {
                        height: 42,
                        width: 42,
                        html: FloatPanel_MyAccountMasterMenuIconHtml('resources/icons/logoutPurpleOne.png', 'background:#f1f5f9;'),
                    },
                    {
                        xtype: 'spacer',
                        width: 20
                    },
                    {
                        id: 'FloatPanel_MyAccountMaster_Menu_DoubleRewardTracker',
                        margin: '5 0 0 0',
                        height: 20,
                        html: FloatPanel_MyAccountMasterMenuLabelHtml('Reward Tracker', '#334155')
                    },
                     {
                         xtype: 'spacer'
                     },
                    {
                        id: 'FloatPanel_MyAccountMaster_Menu_DoubleRewardTrackerSign',
                        margin: '0 0 0 0',
                        height: 34,
                        width: 34,
                        html: FloatPanel_MyAccountMasterChevronHtml()
                    },
                {
                    xtype: 'spacer',
                    width: 20
                },
                ]

            },

            {

                xtype: 'container',
                width: '95%',
                height: 60,
                margin: FloatPanel_MyAccountMasterMenuCardMargin(),
                //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                style: FloatPanel_MyAccountMasterMenuCardStyle(),
                name: 'nameContainerFloatPanel_MyAccountMaster_SpecialCampaign',
                //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'spacer',
                        width: 20
                    },
                    {
                        height: 42,
                        width: 42,
                        html: FloatPanel_MyAccountMasterMenuIconHtml('resources/icons/logoutPurpleOne.png', 'background:#f1f5f9;'),
                    },
                    {
                        xtype: 'spacer',
                        width: 20
                    },
                    {
                        id: 'FloatPanel_MyAccountMaster_Menu_SpecialCampaign',
                        margin: '5 0 0 0',
                        height: 20,
                        html: FloatPanel_MyAccountMasterMenuLabelHtml('Special Campaign', '#334155')
                    },
                     {
                         xtype: 'spacer'
                     },
                    {
                        id: 'FloatPanel_MyAccountMaster_Menu_SpecialCampaignSign',
                        margin: '0 0 0 0',
                        height: 34,
                        width: 34,
                        html: FloatPanel_MyAccountMasterChevronHtml()
                    },
                {
                    xtype: 'spacer',
                    width: 20
                },
                ]

            },
            {

                xtype: 'container',
                width: '95%',
                height: 60,
                margin: FloatPanel_MyAccountMasterMenuCardMargin(),
                //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                style: FloatPanel_MyAccountMasterMenuCardStyle(),
                name: 'nameContainerFloatPanel_MyAccountMaster_ReferAndEarn',
                //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'spacer',
                        width: 20
                    },
                    {
                        height: 42,
                        width: 42,
                        html: FloatPanel_MyAccountMasterMenuIconHtml('resources/icons/logoutPurpleOne.png', 'background:#f1f5f9;'),
                    },
                    {
                        xtype: 'spacer',
                        width: 20
                    },
                    {
                        id: 'FloatPanel_MyAccountMaster_Menu_ReferAndEarn',
                        margin: '5 0 0 0',
                        height: 20,
                        html: FloatPanel_MyAccountMasterMenuLabelHtml('Refer & Earn', '#334155')
                    },
                     {
                         xtype: 'spacer'
                     },
                    {
                        id: 'FloatPanel_MyAccountMaster_Menu_ReferAndEarnSign',
                        margin: '0 0 0 0',
                        height: 34,
                        width: 34,
                        html: FloatPanel_MyAccountMasterChevronHtml()
                    },
                {
                    xtype: 'spacer',
                    width: 20
                },
                ]

            },
    ]
},


{
    xtype: 'container',
    width: '100%',
    height: 260,
    id:'containerFloatPanel_MyAccountMasterMaster_AyohaStore',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'
    },
    items:[

        {
            xtype: 'container',
            width: '100%',
            height: 30,
           // id:'containerFloatPanel_MyAccountMasterMaster_General',
            layout: {
                type: 'hbox',
                pack: 'left',
                align: 'left'
            },
            items:[
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    html: FloatPanel_MyAccountMasterSectionTitleHtml('Ayoha Store')
                },
            ]
        },
       
        {

            xtype: 'container',
            width: '95%',
            height: 60,
            margin: FloatPanel_MyAccountMasterMenuCardMargin(),
            name: 'nameContainerFloatPanel_MyAccountMaster_PurchaseHistory',
            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
            style: FloatPanel_MyAccountMasterMenuCardStyle(),
            //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'
            },
            items: [
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    height: 42,
                        width: 42,
                    html: FloatPanel_MyAccountMasterMenuIconHtml('resources/icons/AccountVerification.png', 'background:#eef2ff;'),
                },
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_PurchaseHistory',
                    margin: '5 0 0 0',
                    height: 20,
                    html: FloatPanel_MyAccountMasterMenuLabelHtml('Purchase History', '#334155')
                },
                 {
                     xtype: 'spacer'
                 },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_PurchaseHistorySign',
                    margin: '0 0 0 0',
                    height: 34,
                    width: 34,
                    html: FloatPanel_MyAccountMasterChevronHtml()
                },
            {
                xtype: 'spacer',
                width: 20
            },
            ]

        },
        {

            xtype: 'container',
            width: '95%',
            height: 60,
            margin: FloatPanel_MyAccountMasterMenuCardMargin(),
            name: 'nameContainerFloatPanel_MyAccountMaster_AyohaStoreCart',
            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
            style: FloatPanel_MyAccountMasterMenuCardStyle(),
            //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'
            },
            items: [
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    height: 42,
                    width: 42,
                    html: FloatPanel_MyAccountMasterMenuIconHtml('resources/icons/TermAndCondition.png', 'background:#eef2ff;'),
                },
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_AyohaStoreCart',
                    margin: '5 0 0 0',
                    height: 20,
                    html: FloatPanel_MyAccountMasterMenuLabelHtml('Ayoha Store Cart', '#334155')
                },
                 {
                     xtype: 'spacer'
                 },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_AyohaStoreCartSign',
                    margin: '0 0 0 0',
                    height: 34,
                    width: 34,
                    html: FloatPanel_MyAccountMasterChevronHtml()
                },
            {
                xtype: 'spacer',
                width: 20
            },
            ]

        },
            {

                xtype: 'container',
                width: '95%',
                height: 60,
                margin: FloatPanel_MyAccountMasterMenuCardMargin(),
                //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                style: FloatPanel_MyAccountMasterMenuCardStyle(),
                name: 'nameContainerFloatPanel_MyAccountMaster_MyVoucher',
                //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'spacer',
                        width: 20
                    },
                    {
                        height: 42,
                        width: 42,
                        html: FloatPanel_MyAccountMasterMenuIconHtml('resources/icons/logoutPurpleOne.png', 'background:#eef2ff;'),
                    },
                    {
                        xtype: 'spacer',
                        width: 20
                    },
                    {
                        id: 'FloatPanel_MyAccountMaster_Menu_MyVoucher',
                        margin: '5 0 0 0',
                        height: 20,
                        html: FloatPanel_MyAccountMasterMenuLabelHtml('My Voucher', '#334155')
                    },
                     {
                         xtype: 'spacer'
                     },
                    {
                        id: 'FloatPanel_MyAccountMaster_Menu_MyVoucherSign',
                        margin: '0 0 0 0',
                        height: 34,
                        width: 34,
                        html: FloatPanel_MyAccountMasterChevronHtml()
                    },
                {
                    xtype: 'spacer',
                    width: 20
                },
                ]

            },
    ]
},
                       
{
    xtype: 'container',
    width: '100%',
    height: 300,
    id:'containerFloatPanel_MyAccountMasterMaster_General',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'
    },
    items:[

        {
            xtype: 'container',
            width: '100%',
            height: 30,
           // id:'containerFloatPanel_MyAccountMasterMaster_General',
            layout: {
                type: 'hbox',
                pack: 'left',
                align: 'left'
            },
            items:[
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    html: FloatPanel_MyAccountMasterSectionTitleHtml('General')
                },
            ]
        },
       
        {

            xtype: 'container',
            width: '95%',
            height: 60,
            margin: FloatPanel_MyAccountMasterMenuCardMargin(),
            name: 'nameContainerFloatPanel_MyAccountMaster_TermAndCondition',
            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
            style: FloatPanel_MyAccountMasterMenuCardStyle(),
            //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'
            },
            items: [
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    height: 42,
                        width: 42,
                    html: FloatPanel_MyAccountMasterMenuIconHtml('resources/icons/AccountVerification.png', 'background:#f1f5f9;'),
                },
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_TermAndCondition',
                    margin: '5 0 0 0',
                    height: 20,
                    html: FloatPanel_MyAccountMasterMenuLabelHtml('Term And Condition', '#334155')
                },
                 {
                     xtype: 'spacer'
                 },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_TermAndConditioSign',
                    margin: '0 0 0 0',
                    height: 34,
                    width: 34,
                    html: FloatPanel_MyAccountMasterChevronHtml()
                },
            {
                xtype: 'spacer',
                width: 20
            },
            ]

        },
        
            
    ]
},                   

                        {

                            xtype: 'container',
                            width: '100%',
                            height: 96,
                            hidden:false,
                            margin: '12 0 24 0',
                            docked:'bottom',
                            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px none #ECF0F1;border-top:2px none black ;background: transparent;',
                          //  style: 'background: transparent;',
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center'
                            },
                            items: [
                               
                                {
                                    height: 40,
                                    width: 40,
                                    margin:'0 0 0 -10',
                                    //html: '<img src="resources/icons/ayohaReward01.gif" alt="Image" style="width:110px;height:110px;">',
                                    html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" alt="Image" style="width:40px;height:40px;">',
                                },
                               
                                {
                                    id: 'FloatPanel_MyAccountMaster_Menu_AyohaRewardv',
                                    margin: '0 0 0 0',
                                   // height: 20,
                                    html: '<div style="display:inline-flex;align-items:center;justify-content:center;padding:10px 18px;border-radius:999px;background:linear-gradient(135deg,#ffffff 0%,#f4ecff 100%);box-shadow:0 10px 22px rgba(124,58,237,0.10);font-size:10px;font-weight:800;color:#7c3aed;letter-spacing:0.16em;text-transform:uppercase;">Ayoha App Version 1.1</div>'
                                },
                                {
                                    id: 'FloatPanel_MyAccountMaster_Menu_DevBy',
                                    margin: '8 0 0 0',
                                    // height: 20,
                                    html: '<div style="width:100%;background-color:transparent;text-align:center;font-size:11px;font-weight:600;color:#94a3b8;">Premium Member Experience</div>'
                                },
                                
                            ]

                        }

                    ]

                }



                ]


            },









             ]




       







     });
}


function FloatPanel_MyAccountMasterShow() {

    // Ext.Viewport.remove(_FloatPanel_MyAccountMaster);
    // this.overlay = Ext.Viewport.add(FloatPanel_MyAccountMaster());
    // this.overlay.show();



  //LoadingPanelShow(getLoadingIcon(), 'Loading....');

    FloatPanel_MyAccountMasterCreateIfNeeded();

    _FloatPanel_MyAccountMaster.show();

    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
        AyohaBrowserBack.push('FloatPanel_MyAccountMaster', function () {
            FloatPanel_MyAccountMasterHide(true);
        });
    }




    _FloatPanel_MyAccountMasterisOpen = 'Y';
    // ArrappRoute.length = 0;
    // ArrappRouteCheckVal.length = 0;
    // console.log(ArrappRoute);
   // AddRoutePages("FloatPanel_MyAccountMasterHide()");
   // FloatPanel_MyAccountMasterAdjustHeight();
    var containerView1 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_EditProfile]')[0];
    var containerViewEl1 = containerView1.element;
    containerViewEl1.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Open_EditProfile();

      }
    );


    var containerView2 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_ManagePassword]')[0];
    var containerViewEl2 = containerView2.element;
    containerViewEl2.on('tap',
      function (event, node, options, eOpts) {
        
      FloatPanel_SubscriberMaster_ChangePasswordShow();
       //   SingleTap_Open_ManagePassword();

      }
    );




    var containerView3 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_LogOut]')[0];
    var containerViewEl3 = containerView3.element;
    containerViewEl3.on('tap',
      function (event, node, options, eOpts) {
          //FloatPanel_MyAccountMasterHide();
          //Ext.getCmp('mainView').setActiveItem(0);
          //VIAAdvertismentAutoSlideReset();
          LogOuting();

      }
    );



    var containerViewnameContainerFloatPanel_MyAccountMaster_AllTransactions = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_AllTransactions]')[0];
    var containerViewElnameContainerFloatPanel_MyAccountMaster_AllTransactions = containerViewnameContainerFloatPanel_MyAccountMaster_AllTransactions.element;
    containerViewElnameContainerFloatPanel_MyAccountMaster_AllTransactions.on('tap',
      function (event, node, options, eOpts) {
          //FloatPanel_MyAccountMasterHide();
          //Ext.getCmp('mainView').setActiveItem(0);
          //VIAAdvertismentAutoSlideReset();
          MyAccount_AllTransactionHistoryShow();

      }
    );

    

    var containerViewnameContainerFloatPanel_MyAccountMaster_TermAndCondition = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_TermAndCondition]')[0];
    var containerViewElnameContainerFloatPanel_MyAccountMaster_TermAndCondition = containerViewnameContainerFloatPanel_MyAccountMaster_TermAndCondition.element;
    containerViewElnameContainerFloatPanel_MyAccountMaster_TermAndCondition.on('tap',
      function (event, node, options, eOpts) {
          getPlayerIDS();

      }
    );

    // var containerViewnameContainerFloatPanel_MyAccountMaster_AccountVerification = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_AccountVerification]')[0];
    // var containerViewElnameContainerFloatPanel_MyAccountMaster_AccountVerification = containerViewnameContainerFloatPanel_MyAccountMaster_AccountVerification.element;
    // containerViewElnameContainerFloatPanel_MyAccountMaster_AccountVerification.on('tap',
    //   function (event, node, options, eOpts) {
    //       setSubscription();

    //   }
    // );

    
    // var containerViewnameFloatPanel_MyAccountMaster_VerificationStatusBox = Ext.ComponentQuery.query('container[name=nameFloatPanel_MyAccountMaster_VerificationStatusBox]')[0];
    // var containerViewElnameFloatPanel_MyAccountMaster_VerificationStatusBox = containerViewnameFloatPanel_MyAccountMaster_VerificationStatusBox.element;
    // containerViewElnameFloatPanel_MyAccountMaster_VerificationStatusBox.on('tap',
    //   function (event, node, options, eOpts) {
    //       // FloatPanel_AccountVerifiedShow();
    //       if (GetAyohaUserisUserVerified() == "NO") {
    //           FloatPanel_AyohaMembershipAdvantagesShow();
    //       } else if (GetAyohaUserisUserVerified() == "YES") {
    //           FloatPanel_MyAccountRankDescriptionShow();
    //       }
          
    //   }
    // );

    
    

    var val = GetCurrAyohaUserAccountNo().split('-');
    var id = val[1] + '-' + val[2];
    var id_Ext = val[2];
    var isUserVerified = GetAyohaUserisUserVerified();


    Ext.getCmp('FloatPanel_MyAccountMaster_PicPicture').setHtml(FloatPanel_MyAccountMasterProfileAvatarHtml(GetAyohaUserPicProfile()));
    Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;text-align:left;font-size:26px;font-weight:900;color:#ffffff;line-height:1.05;letter-spacing:-0.02em;text-shadow:0 2px 8px rgba(0,0,0,0.18);">' + GetAyohaUserAccountNames() + '</div>');
    Ext.getCmp('FloatPanel_MyAccountMaster_emailAddress').setHtml('<div style="width:100%;text-align:left;font-size:13px;font-weight:600;color:rgba(255,255,255,0.78);line-height:1.3;">' + GetAyohaUserEmail() + '</div>');
   
    console.log(GetAyohaUserAccountNames().length);

    if (GetAyohaUserAccountNames().length > 24) {
        Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;text-align:left;font-size:22px;font-weight:900;color:#ffffff;line-height:1.1;letter-spacing:-0.02em;text-shadow:0 2px 8px rgba(0,0,0,0.18);">' + GetAyohaUserAccountNames() + '</div>');
    }

   
    Ext.getCmp('FloatPanel_MyAccountMaster_AccountNo').setHtml('<div style="font-size:17px;font-weight:900;color:#ffffff;line-height:1.2;">Standard Member</div>');



    if (isUserVerified == "NO") {
        Ext.getCmp('FloatPanel_MyAccountMaster_AccountNo').setHtml('<div style="font-size:17px;font-weight:900;color:#ffffff;line-height:1.2;">Not Ayoha Member</div>');
        Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml(FloatPanel_MyAccountMasterVerifyBadgeHtml('resources/icons/NotVerify.png', '#7c3aed'));
        Ext.getCmp('FloatPanel_MyAccountMaster_VerificationStatusBox').setHtml('<div class="blink_me" style="display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:0 18px;height:40px;background:#ffffff;border-radius:14px;box-shadow:0 8px 20px rgba(0,0,0,0.12);font-size:13px;font-weight:800;color:#1e293b;">Upgrade <span style="font-size:16px;">&#8594;</span></div>');
        var bannerCmp = Ext.getCmp('FloatPanel_MyAccountMaster_VerificationBanner');
        if (bannerCmp) { bannerCmp.setHidden(false); }
    }
    if (isUserVerified == "YES") {
        Ext.getCmp('FloatPanel_MyAccountMaster_AccountNo').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="font-size:17px;font-weight:900;color:#ffffff;line-height:1.2;">Ayoha Member</div>');
        Ext.getCmp('FloatPanel_MyAccountMaster_emailAddress').setHtml('<div style="width:100%;text-align:left;font-size:13px;font-weight:600;color:rgba(255,255,255,0.78);line-height:1.3;">' + GetAyohaUserEmail() + '</div>');
        Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;text-align:left;font-size:26px;font-weight:900;color:#ffffff;line-height:1.05;letter-spacing:-0.02em;text-shadow:0 2px 8px rgba(0,0,0,0.18);">' + GetAyohaUserAccountNames() + '</div>');
        if (GetAyohaUserAccountNames().length > 24) {
            Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;text-align:left;font-size:22px;font-weight:900;color:#ffffff;line-height:1.1;letter-spacing:-0.02em;text-shadow:0 2px 8px rgba(0,0,0,0.18);">' + GetAyohaUserAccountNames() + '</div>');
        }

        var bannerCmp = Ext.getCmp('FloatPanel_MyAccountMaster_VerificationBanner');
        if (bannerCmp) { bannerCmp.setHidden(true); }

        if (localStorage.getItem("AyohaMember_Rank") == "Black Iron") {
            Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml(FloatPanel_MyAccountMasterVerifyBadgeHtml('resources/icons/ayohaRankingIcon/blackIron.png', '#ffffff'));
        }
        if (localStorage.getItem("AyohaMember_Rank") == "Bronze") {
            Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml(FloatPanel_MyAccountMasterVerifyBadgeHtml('resources/icons/ayohaRankingIcon/Bronze.png', '#ffffff'));
        }
        if (localStorage.getItem("AyohaMember_Rank") == "Silver") {
            Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml(FloatPanel_MyAccountMasterVerifyBadgeHtml('resources/icons/ayohaRankingIcon/Silver.png', '#ffffff'));
        }
        if (localStorage.getItem("AyohaMember_Rank") == "Gold") {
            Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml(FloatPanel_MyAccountMasterVerifyBadgeHtml('resources/icons/ayohaRankingIcon/Gold.png', '#ffffff'));
        }
        if (localStorage.getItem("AyohaMember_Rank") == "Platinum") {
            Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml(FloatPanel_MyAccountMasterVerifyBadgeHtml('resources/icons/ayohaRankingIcon/Platinum.png', '#ffffff'));
        }
        if (localStorage.getItem("AyohaMember_Rank") == "King Club") {
            Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml(FloatPanel_MyAccountMasterVerifyBadgeHtml('resources/icons/ayohaRankingIcon/kingclubIcon.png', '#ffffff'));
        }

        Ext.getCmp('FloatPanel_MyAccountMaster_VerificationStatusBox').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:0 18px;height:40px;background:#ffffff;border-radius:14px;box-shadow:0 8px 20px rgba(0,0,0,0.12);font-size:13px;font-weight:800;color:#1e293b;">Tier ' + localStorage.getItem("AyohaMember_Rank") + ' &#8594;</div>');
       
    }
}


function FloatPanel_MyAccountMasterHide(fromBack, animCfg) {

    // if (_FloatPanel_MyAccountMasterisOpen == 'Y') {
    //     _FloatPanel_MyAccountMaster.hide(); _FloatPanel_MyAccountMasterisOpen = 'N';
    //   //  FloatPanel_AyohaeWallet_IconHide();
    //     RemovePages("FloatPanel_MyAccountMasterHide()");
    // }





       if (_FloatPanel_MyAccountMasterisOpen == 'Y') {
        if (animCfg) {
            _FloatPanel_MyAccountMaster.hide(Ext.fx.Animation(animCfg));
        } else {
            _FloatPanel_MyAccountMaster.hide();
        }

        isFloatPanel_MyAccountMasterOpen = 'N';

        if (fromBack !== true && typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.close) {
            AyohaBrowserBack.close('FloatPanel_MyAccountMaster');
        }

        _FloatPanel_MyAccountMaster.destroy();
        _FloatPanel_MyAccountMaster = null;
    }
   
}


function LogOuting() {
    FloatPanel_MyAccountMasterHide();
    localStorage.clear();
   
    // window.location.reload();
    Ext.getCmp('mainView').setActiveItem(0);
    // Ext.getCmp('mainView').setActive(0);
}

function SingleTap_Open_EditProfile() {
FloatPanel_SubscriberMasterUpgradeShow()
   //FloatPanel_SubscriberMasterShow();
   // Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=black><b>Edit Profile</b></font>');
   // Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(1);
}

function SingleTap_Open_ManagePassword() {

    FloatPanel_SubscriberMasterShow();

   
    Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=black><b>Change Password</b></font>');
    Ext.getCmp('btnFloatPanel_SubscriberMaster_TitleHeaderIcon').setHtml('<div ><img src="resources/icons/changePasswordWhite01.png" width="25" height="20" alt="Company Name"></div>');
    Ext.getCmp('tabpanelFloatPanel_SubscriberMaster_inner').setActiveItem(2);
    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_Save').setHidden(false);
    Ext.getCmp('btnFloatPanel_SubscriberMaster_Edit').setHidden(true);
    
}

function FloatPanel_MyAccountMasterAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);

    var adjust = x - 212;
    //var headerHeight = parseInt(251);
    ////alert(y);
    ////alert(x);
   
    //var adjustedHeight = x - headerHeight;
    ////var newHeight = adjustedHeight - 99;
    //var newHeight = adjustedHeight - 83;

    //alert(newHeight)

    Ext.getCmp('containerFloatPanel_MyAccountMasterMaster').setHeight(adjust);
    //Ext.getCmp('containerFloatLoyaltyCardPointMaster').setHeight(newHeight);






}

















// Ext.define('BuskartApp.view.MyAccount.FloatPanel_MyAccountMaster', {

// });

// var _FloatPanel_MyAccountMaster;


// var _FloatPanel_MyAccountMasterisOpen = 'N';











// function FloatPanel_MyAccountMaster() {

//     _FloatPanel_MyAccountMaster =
//      Ext.create('Ext.Container', {

      
//          id: 'FloatPanel_MyAccountMasterID',
//          xtype: 'container',
//          //height: 475,
//          height: '100%',
//          //  height: '60%',
//          width: '100%',
//          draggable: false,

//          // styleHtmlContent: true,

//          centered: true,
//          //bottom: 64,
//          // zIndex: 100,
//          // modal: true,
//          //   hideOnMaskTap: true,
//          //left: 10,
//          //top:10,
//          layout: {
//              type: 'fit'
//          },
//          showAnimation: {
//              type: 'popIn',
//              duration: 250,
//              easing: 'ease-out'
//              //type: 'slideIn',
//              //direction:'down',
//              //duration: 1000,
//              //easing: 'ease-in'
//          },
//          hideAnimation: {
//              type: 'popOut',
//              duration: 250,
//              easing: 'ease-out'
//              //type: 'slideOut',
//              //direction: 'down',
//              //duration: 3000,
//              //easing: 'ease-in'
//          },
//          //  style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
//          // style: 'background-image: url("resources/icons/LatestConfetiTwo.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
//         // style: ' background-color:white;',
//         style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
//          listeners: {
//              initialize: function (c) {
//                  this.element.on({
//                      swipe: function (e, node, options) {

//                          if (e.direction == "left") {
//                              _FloatPanel_MyAccountMaster.hide(Ext.fx.Animation({
//                                  type: 'slideOut',
//                                  direction: 'left',
//                                  easing: 'cubic-bezier(.7,0,.7,1)',
//                                  duration: 250

//                              }));
//                              _FloatPanel_MyAccountMasterisOpen = 'N';
//                              RemovePages("FloatPanel_MyAccountMasterHide()");
//                          } if (e.direction == "right") {
//                              _FloatPanel_MyAccountMaster.hide(Ext.fx.Animation({
//                                  type: 'slideOut',
//                                  direction: 'right',
//                                  easing: 'cubic-bezier(.7,0,.7,1)',
//                                  duration: 250

//                              }));
//                              _FloatPanel_MyAccountMasterisOpen = 'N';
//                              RemovePages("FloatPanel_MyAccountMasterHide()");
//                          }
                       
//                      }
//                  });
//              }
//          },
      
//          //  style: "background-color: #D25959;",
        

//              items: [


// {
//     xtype: 'container',
//                 // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
//                 style: "background-color: transparent;",
//                 layout: {
//                     type: 'vbox',
//                     pack: 'start',
//                     align: 'center'

//                 },
//                 width: '100%',
//                 height:'100%',
//                 items:[
//                     {
       
       
//                         xtype: 'container',
//                         width: '100%',
//                         height:'100%',
//                         id:'containerFloatPanel_MyAccountMasterMaster',
//                         //margin: '-200 0 0 0',
//                         title: 'DashboardMerchantRewardxxx',
//                         scrollable: {
//                             direction: 'vertical',
//                             directionLock: true,
//                             indicators: false
//                         },
//                         layout: {
//                             type: 'vbox',
//                             //pack: 'start',
//                             //align: 'center'

//                         },
//                         items: [
//                             {

//                                 xtype: 'container',
//                                 width: '100%',
//                                 docked:'top',
//                                // height:40,
//                                 //  hidden:true,
//                                 // width: 40,
                
//                                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
//                                 //hidden: true,
                
//                                 id: 'containerFloatPanel_MyAccountMasterHeader',
//                                 style: {
//                                     // background: '#D25959',
//                                     background: 'transparent',
//                                     // border: '2px'
//                                 },
//                                 //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                 // style: 'border-bottom:2px solid #D25959;background-color:transparent',
//                                 layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center',
//                                 },
//                                 // hidden:true,
//                                 items:
//                                        [
                
                
//                                                      {
//                                                          xtype: 'button',
//                                                          id: 'btnFloatPanel_MyAccountMasterBack',
//                                                          height: 30,
//                                                          width: 35,
//                                                          // iconCls: 'list',
//                                                          html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
//                                                          ui: 'plain',
//                                                          handler: function () {
//                                                              _FloatPanel_MyAccountMaster.hide(Ext.fx.Animation({
//                                                                  type: 'slideOut',
//                                                                  direction: 'left',
//                                                                  easing: 'cubic-bezier(.7,0,.7,1)',
//                                                                  duration: 250
                
//                                                              }));
//                                                              _FloatPanel_MyAccountMasterisOpen = 'N';
//                                                              RemovePages("FloatPanel_MyAccountMasterHide()");
                
//                                                          }
//                                                      },
                
//                                                       {
//                                                           xtype: 'spacer',
                
//                                                       },
                
//                                                        {
//                                                            margin: '0 -5 0 0',
//                                                            id: 'htmlFloatPanel_MyAccountMaster_TitleHeaderTxt',
//                                                            html: '<font size=2 color=white><b>My Account</b></font>'
//                                                        },
                                                        
//                                                          {
//                                                              xtype: 'button',
//                                                              id: 'btnFloatPanel_MyAccountMaster_TitleHeaderIcon',
//                                                              height: 30,
//                                                              width: 35,
//                                                              // iconCls: 'list',
//                                                              html: '<div ><img src="resources/icons/myaccountwhite01.png" width="25" height="20" alt="Company Name"></div>',
//                                                              ui: 'plain',
//                                                              handler: function () {
//                                                                  _FloatPanel_MyAccountMaster.hide(Ext.fx.Animation({
//                                                                      type: 'slideOut',
//                                                                      direction: 'right',
//                                                                      easing: 'cubic-bezier(.7,0,.7,1)',
//                                                                      duration: 250
                
//                                                                  }));
//                                                                  _FloatPanel_MyAccountMasterisOpen = 'N';
                
//                                                                  RemovePages("FloatPanel_MyAccountMasterHide()");
                
//                                                              }
//                                                          },
                
                
                
                
                
                
                
                
                
                
                
//                                        ]
                
//                             },  

//                             {
//                                 xtype: 'container',
//                              id: 'containerFloatPanel_MyAccountMasterAyohaRewardInner',
//                         //hidden: true,
//                         style: "background-color: transparent;",
//                         margin: '0 0 0 0',
//                         height: 93, 
//                         // margin: '50 0 0 0',
//                         width: '100%',
//                                 layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
                        
//                                 },
//                                 items:[
//                                     {
//                                         xtype: 'container',
//                                         width: '15%',
//                                     },
//                                     {
//                                         xtype: 'container',
//                                         width: '25%',
//                                         layout: {
//                                             type: 'vbox',
//                                             pack: 'center',
//                                             align: 'center'
//                                         },
//                                         items:[
//                                             {
//                                                 id: 'FloatPanel_MyAccountMaster_PicPicture',
//                                                 // height: 65,
//                                                 // width: 65,
//                                                 html: '<img src="resources/icons/founderWayang02.jpg" alt="Image" style="width:95px;height:95px;border-radius: 50%;border: 2px solid #ECF0F1;zIndex:400px;margin:0px 0px 0px -10px;">',
                        
                        
//                                             },
//                                             {
//                                                 id: 'FloatPanel_MyAccountMaster_VerifyIcon',
//                                                // margin: '-25 -10 0 0',
//                                                 margin: '-15 -10 0 0',
//                                                 height: 32,
//                                                 width: 32,
//                                                 html: '<img src="resources/icons/NotVerify.png" alt="Image" style="width:32px;height:32px;zIndex:400px;margin:0px 0px 0px 0px;">',
                        
                        
//                                             }
//                                         ]
//                                     },
//                                     {
//                                         xtype: 'container',
//                                         width: '60%',
//                                         height: 65,
//                                         layout: {
//                                             type: 'vbox',
//                                             pack: 'start',
//                                             align: 'left'
//                                         },
//                                         items:[
                                          
                                          
//                                             {
//                                                 id: 'FloatPanel_MyAccountMaster_AccountName',
//                                                 margin: '0 0 0 0',
//                                                // height: 20,
//                                                 html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:white;height:20px">TARMIZI BIN RAHIM</div>'
                        
                        
//                                             },
//                                               {
//                                                   id: 'FloatPanel_MyAccountMaster_emailAddress',
//                                                   margin: '0 0 0 0',
//                                                  // height: 20,
//                                                   html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:white;height:20px">asfa@map2u.com.my</div>'
                        
                        
//                                               },
//                                         ]
//                                     },
                                    
//                                 ]
//                             },
//                             {
//                                 xtype: 'container',
//                                 //  style: 'background-color:#f7347a;border-radius: 50%;',
//                                 // style: 'background-color:#C72CB4;border-radius: 50%;border:2px solid purple',
                    
                    
//                                 style: "background-color: transparent;",
//                                 //  style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac',
                    
                    
//                                 margin: '-20 0 0 0',
//                                 id: 'htmlFloatPanel_MyAccountMaster_AyohaRewardLogos',
//                                 name: 'nameContainerFloatPanel_MyAccountMasterAyohaRewards',
//                                // zIndex: 200,
//                              //    width: 240,
//                              height: 180,
//                                 layout: {
//                                     type: 'vbox',
//                                     pack: 'start',
//                                     align: 'center'
                    
//                                 },
//                                 items: [
                    
                    
                    
                    
//                                     {
//                                      id: 'FloatPanel_MyAccountMaster_AyohaRewardPanel',
                             
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
//                                            html: '<div style="width: min(75vw, 350px); max-width: 400px; margin: 14px auto; padding:10px 16px;'+
//                     ' box-sizing:border-box; color:#fff; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial;'+
//                     ' background: rgba(255,255,255,0.12);'+
//                     ' backdrop-filter: blur(14px) saturate(120%); -webkit-backdrop-filter: blur(14px) saturate(120%);'+
//                     ' border:1.5px solid #fac; border-radius: 18px; box-shadow: 0 12px 28px rgba(0,0,0,.28);">'+
                    
//                     // Header
//                     '<div style="display:flex; align-items:flex-end; justify-content:space-between; gap:12px; margin-bottom:5px;">'+
//                     '<div style="min-width:0;padding:0px 8px">'+
//                     '<div style="font-size:clamp(10px, 2.7vw, 12px); opacity:.9; font-weight:700; white-space:nowrap;">Membership No</div>'+
//                     '<div id="txtFloatPanel_MyAccountMaster_MembershipNo" style="font-size:clamp(12px, 3.4vw, 14px); font-weight:1000; overflow:hidden; text-overflow:ellipsis;">12323</div>'+
//                     '</div>'+
//                     '<div style="text-align:right; min-width:0;padding:0px 6px">'+
//                     '<div style="font-size:clamp(10px, 2.7vw, 12px); opacity:.9; font-weight:700; white-space:nowrap;">Membership Since:</div>'+
//                     '<div id="txtFloatPanel_MyAccountMaster_MembershipSince" style="font-size:clamp(12px, 3.4vw, 14px); font-weight:1000; overflow:hidden; text-overflow:ellipsis;">Jan 2023</div>'+
//                     '</div>'+
//                     '</div>'+
                    
//                     // Two columns side by side
//                     '<div style="display:flex; justify-content:space-between; gap:12px; flex-wrap:nowrap;">'+
                    
//                     // Left box
//                     '<div onclick="FloatPanel_AyohaReward_PointTransactionsShow();" '+
//                     'style="flex:1; text-align:center; padding:10px 10px; border-radius:14px; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.25);">'+
//                     //  '<div id="txtDashboard_AyohaPoint" style="font-size:clamp(22px, 6.4vw, 28px); font-weight:800; margin:8px 0 0 0;">2353</div>'+
//                     '<div id="FloatPanel_MyAccountMaster_AyohaRewardPoint" class="odometer" style="font-size:clamp(18px, 6.4vw, 24px); font-weight:800; margin:8px 0 0 0;">2353</div>'+
//                     '<div style="font-size:clamp(12px, 2.7vw, 10px); opacity:.9; margin:-2px 0 0 0; font-weight:800;">Ayoha Point</div>'+
//                     '</div>'+
                    
//                     // Right box
//                     '<div onclick="FloatPanel_MyAccountRankDescriptionShow();" '+
//                     'style="flex:1; text-align:center; padding:10px 10px; border-radius:14px; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.25);">'+
//                     '<div style="margin-bottom:6px;">'+
//                     '<img id="imgFloatPanel_MyAccountMaster_RankingIcon" src="resources/icons/Logo/LogoWhiteSimplifed.png" alt="Gold Tier" '+
//                     'style="width:44px; height:44px; display:block; margin:0 auto; object-fit:contain;">'+
//                     '</div>'+
//                     '<div id="txtFloatPanel_MyAccountMaster_RankingIcon" style="font-size:clamp(12px, 2.7vw, 10px); font-weight:800; margin:-6px 0 0 0; white-space:wrap; overflow:hidden; text-overflow:ellipsis;">Non Ayoha Member</div>'+
//                     // '<div id="txtDashboard_RankingIcon" style="font-size:clamp(11px, 3.2vw, 13px); font-weight:800; margin:-6px 0 0 0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Non Ayoha Member</div>'+
//                     '<div id="txtFloatPanel_MyAccountMaster_MembershipTier" style="font-size:clamp(10px, 2.7vw, 12px); opacity:.9; margin:-2px 0 0 0; font-weight:700;">Membership Tier</div>'+
//                     '</div>'+
                    
//                     '</div>'+
//                     '</div>'
                    
//                                  },
                                 
                                 
                                  
                                    
//                                 ]
//                                 // html: '<img src="resources/icons/ayohaReward01.gif" style="width: 230px; height: 230px;" />',
//                             },
                    
                    
                    
                    
//                     {
//                         xtype: 'container',
//                         width: '100%',
//                         height:1400,
//                         style: "background-color: white;",
//                         layout: {
//                             type: 'vbox',
//                             pack: 'start',
//                             align: 'center'
//                             },
//                             items:[
//                                 {
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 350,
//                                     style: "background-color: transparent;",
//                                     id:'containerFloatPanel_MyAccountMasterMaster_Profile',
//                                     layout: {
//                                     type: 'vbox',
//                                     pack: 'start',
//                                     align: 'center'
//                                     },
//                                     items:[
                                    
                                    
                                       
                                    
                                    
//                                     {
//                                     xtype: 'container',
//                                     width: '100%',
//                                     margin: '20 0 0 0',
//                                     height: 30,
//                                     // id:'containerFloatPanel_MyAccountMasterMaster_General',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'left',
//                                     align: 'left'
//                                     },
//                                     items:[
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:black;height:23px">Profile</div>'
//                                     },
//                                     ]
//                                     },
                                    
                                    
                                    
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_EditProfile',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: transparent;',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     {
//                                     height: 22,
//                                     width: 22,
//                                     html: '<img src="resources/icons/editProfile.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     {
//                                     id: 'FloatPanel_MyAccountMaster_Menu_EditProfile',
//                                     margin: '5 0 0 0',
//                                     height: 20,
//                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Edit Profile</div>'
//                                     },
//                                     {
//                                     xtype: 'spacer'
//                                     },
//                                     {
//                                     id: 'FloatPanel_MyAccountMaster_Menu_EditProfileSign',
//                                     margin: '0 0 0 0',
//                                     height: 20,
//                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width:20
//                                     },
//                                     ]
                                    
//                                     },
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     name:'nameContainerFloatPanel_MyAccountMaster_ManagePassword',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     {
//                                     height: 22,
//                                     width: 22,
//                                     html: '<img src="resources/icons/managepassword.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     {
//                                     id: 'FloatPanel_MyAccountMaster_Menu_ManagePassword',
//                                     margin: '5 0 0 0',
//                                     height: 20,
//                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Change Password</div>'
//                                     },
//                                     {
//                                     xtype: 'spacer'
//                                     },
//                                     {
//                                     id: 'FloatPanel_MyAccountMaster_Menu_ManagePasswordSign',
//                                     margin: '0 0 0 0',
//                                     height: 20,
//                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     ]
                                    
//                                     },
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_AllTransactions',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     {
//                                     height: 22,
//                                     width: 22,
//                                     html: '<img src="resources/icons/purchase01.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     {
//                                     id: 'FloatPanel_MyAccountMaster_Menu_Alltransactions',
//                                     margin: '5 0 0 0',
//                                     height: 20,
//                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Transaction History</div>'
//                                     },
//                                     {
//                                     xtype: 'spacer'
//                                     },
//                                     {
//                                     id: 'FloatPanel_MyAccountMaster_Menu_AlltransactionsSign',
//                                     margin: '0 0 0 0',
//                                     height: 20,
//                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     ]
                                    
//                                     },
                                    
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_LogOut',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     {
//                                     height: 22,
//                                     width: 22,
//                                     html: '<img src="resources/icons/logoutPurpleOne.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     {
//                                     id: 'FloatPanel_MyAccountMaster_Menu_LogOut',
//                                     margin: '5 0 0 0',
//                                     height: 20,
//                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Log Out</div>'
//                                     },
//                                     {
//                                     xtype: 'spacer'
//                                     },
//                                     {
//                                     id: 'FloatPanel_MyAccountMaster_Menu_MyVoucherSign',
//                                     margin: '0 0 0 0',
//                                     height: 20,
//                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     ]
                                    
//                                     },
//                                     ]
//                                     },
                                    
                                    
                                    
//                                     {
//                                     xtype: 'container',
//                                     width: '100%',
//                                     height: 440,
//                                     id:'containerFloatPanel_MyAccountMasterMaster_Rewards',
//                                     layout: {
//                                     type: 'vbox',
//                                     pack: 'start',
//                                     align: 'center'
//                                     },
//                                     items:[
                                    
//                                     {
//                                     xtype: 'container',
//                                     width: '100%',
//                                     height: 30,
//                                     // id:'containerFloatPanel_MyAccountMasterMaster_General',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'left',
//                                     align: 'left'
//                                     },
//                                     items:[
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:black;height:23px">Rewarding</div>'
//                                     },
//                                     ]
//                                     },
                                    
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_MyMerchantPerks',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: transparent;',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         height: 22,
//                                         width: 22,
//                                         html: '<img src="resources/icons/TermAndCondition.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_MyMerchantPerks',
//                                         margin: '5 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">My Merchant Perks</div>'
//                                     },
//                                      {
//                                          xtype: 'spacer'
//                                      },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_MyMerchantPerksSign',
//                                         margin: '0 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     ]
                                    
//                                     },
                                    
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_MyAyohaPointAndPrize',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: transparent;',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         height: 22,
//                                         width: 22,
//                                         html: '<img src="resources/icons/TermAndCondition.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_MyAyohaPointAndPrize',
//                                         margin: '5 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">My Ayoha Point & Prize</div>'
//                                     },
//                                      {
//                                          xtype: 'spacer'
//                                      },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_MyAyohaPointAndPrizeSign',
//                                         margin: '0 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     ]
                                    
//                                     },
                                    
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_PointHistoryAndTransaction',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: transparent;',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         height: 22,
//                                         width: 22,
//                                         html: '<img src="resources/icons/TermAndCondition.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_PointHistoryAndTransaction',
//                                         margin: '5 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Point History & Transaction</div>'
//                                     },
//                                      {
//                                          xtype: 'spacer'
//                                      },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_PointHistoryAndTransactionSign',
//                                         margin: '0 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     ]
                                    
//                                     },
                                    
                                    
                                    
                                    
                                    
                                    
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_DoubleRewardTracker',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                         type: 'hbox',
//                                         pack: 'center',
//                                         align: 'center'
//                                     },
//                                     items: [
//                                         {
//                                             xtype: 'spacer',
//                                             width: 20
//                                         },
//                                         {
//                                             height: 22,
//                                             width: 22,
//                                             html: '<img src="resources/icons/logoutPurpleOne.png" alt="Image" style="width:22px;height:22px;">',
//                                         },
//                                         {
//                                             xtype: 'spacer',
//                                             width: 20
//                                         },
//                                         {
//                                             id: 'FloatPanel_MyAccountMaster_Menu_DoubleRewardTracker',
//                                             margin: '5 0 0 0',
//                                             height: 20,
//                                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Reward Tracker</div>'
//                                         },
//                                          {
//                                              xtype: 'spacer'
//                                          },
//                                         {
//                                             id: 'FloatPanel_MyAccountMaster_Menu_DoubleRewardTrackerSign',
//                                             margin: '0 0 0 0',
//                                             height: 20,
//                                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                         },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     ]
                                    
//                                     },
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_SpecialCampaign',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                         type: 'hbox',
//                                         pack: 'center',
//                                         align: 'center'
//                                     },
//                                     items: [
//                                         {
//                                             xtype: 'spacer',
//                                             width: 20
//                                         },
//                                         {
//                                             height: 22,
//                                             width: 22,
//                                             html: '<img src="resources/icons/logoutPurpleOne.png" alt="Image" style="width:22px;height:22px;">',
//                                         },
//                                         {
//                                             xtype: 'spacer',
//                                             width: 20
//                                         },
//                                         {
//                                             id: 'FloatPanel_MyAccountMaster_Menu_SpecialCampaign',
//                                             margin: '5 0 0 0',
//                                             height: 20,
//                                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Special Campaign</div>'
//                                         },
//                                          {
//                                              xtype: 'spacer'
//                                          },
//                                         {
//                                             id: 'FloatPanel_MyAccountMaster_Menu_SpecialCampaignSign',
//                                             margin: '0 0 0 0',
//                                             height: 20,
//                                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                         },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     ]
                                    
//                                     },
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_ReferAndEarn',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                         type: 'hbox',
//                                         pack: 'center',
//                                         align: 'center'
//                                     },
//                                     items: [
//                                         {
//                                             xtype: 'spacer',
//                                             width: 20
//                                         },
//                                         {
//                                             height: 22,
//                                             width: 22,
//                                             html: '<img src="resources/icons/logoutPurpleOne.png" alt="Image" style="width:22px;height:22px;">',
//                                         },
//                                         {
//                                             xtype: 'spacer',
//                                             width: 20
//                                         },
//                                         {
//                                             id: 'FloatPanel_MyAccountMaster_Menu_ReferAndEarn',
//                                             margin: '5 0 0 0',
//                                             height: 20,
//                                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Refer & Earn</div>'
//                                         },
//                                          {
//                                              xtype: 'spacer'
//                                          },
//                                         {
//                                             id: 'FloatPanel_MyAccountMaster_Menu_ReferAndEarnSign',
//                                             margin: '0 0 0 0',
//                                             height: 20,
//                                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                         },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     ]
                                    
//                                     },
//                                     ]
//                                     },
                                    
                                    
//                                     {
//                                     xtype: 'container',
//                                     width: '100%',
//                                     height: 260,
//                                     id:'containerFloatPanel_MyAccountMasterMaster_AyohaStore',
//                                     layout: {
//                                     type: 'vbox',
//                                     pack: 'start',
//                                     align: 'center'
//                                     },
//                                     items:[
                                    
//                                     {
//                                     xtype: 'container',
//                                     width: '100%',
//                                     height: 30,
//                                     // id:'containerFloatPanel_MyAccountMasterMaster_General',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'left',
//                                     align: 'left'
//                                     },
//                                     items:[
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:black;height:23px">Ayoha Store</div>'
//                                     },
//                                     ]
//                                     },
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_PurchaseHistory',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: transparent;',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         height: 22,
//                                             width: 22,
//                                         html: '<img src="resources/icons/AccountVerification.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_PurchaseHistory',
//                                         margin: '5 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Purchase History</div>'
//                                     },
//                                      {
//                                          xtype: 'spacer'
//                                      },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_PurchaseHistorySign',
//                                         margin: '0 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     ]
                                    
//                                     },
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_AyohaStoreCart',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px none #ECF0F1 ;background: transparent;',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         height: 22,
//                                         width: 22,
//                                         html: '<img src="resources/icons/TermAndCondition.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_AyohaStoreCart',
//                                         margin: '5 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Ayoha Store Cart</div>'
//                                     },
//                                      {
//                                          xtype: 'spacer'
//                                      },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_AyohaStoreCartSign',
//                                         margin: '0 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     ]
                                    
//                                     },
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_MyVoucher',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                         type: 'hbox',
//                                         pack: 'center',
//                                         align: 'center'
//                                     },
//                                     items: [
//                                         {
//                                             xtype: 'spacer',
//                                             width: 20
//                                         },
//                                         {
//                                             height: 22,
//                                             width: 22,
//                                             html: '<img src="resources/icons/logoutPurpleOne.png" alt="Image" style="width:22px;height:22px;">',
//                                         },
//                                         {
//                                             xtype: 'spacer',
//                                             width: 20
//                                         },
//                                         {
//                                             id: 'FloatPanel_MyAccountMaster_Menu_MyVoucher',
//                                             margin: '5 0 0 0',
//                                             height: 20,
//                                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">My Voucher</div>'
//                                         },
//                                          {
//                                              xtype: 'spacer'
//                                          },
//                                         {
//                                             id: 'FloatPanel_MyAccountMaster_Menu_MyVoucherSign',
//                                             margin: '0 0 0 0',
//                                             height: 20,
//                                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                         },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     ]
                                    
//                                     },
//                                     ]
//                                     },
                                           
//                                     {
//                                     xtype: 'container',
//                                     width: '100%',
//                                     height: 300,
//                                     id:'containerFloatPanel_MyAccountMasterMaster_General',
//                                     layout: {
//                                     type: 'vbox',
//                                     pack: 'start',
//                                     align: 'center'
//                                     },
//                                     items:[
                                    
//                                     {
//                                     xtype: 'container',
//                                     width: '100%',
//                                     height: 30,
//                                     // id:'containerFloatPanel_MyAccountMasterMaster_General',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'left',
//                                     align: 'left'
//                                     },
//                                     items:[
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:black;height:23px">General</div>'
//                                     },
//                                     ]
//                                     },
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_TermAndCondition',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: transparent;',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         height: 22,
//                                             width: 22,
//                                         html: '<img src="resources/icons/AccountVerification.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_TermAndCondition',
//                                         margin: '5 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Term And Condition</div>'
//                                     },
//                                      {
//                                          xtype: 'spacer'
//                                      },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_TermAndConditioSign',
//                                         margin: '0 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     ]
                                    
//                                     },
                                    
                                    
//                                     ]
//                                     },  
//                             ]
//                     },
                    
                   
                        
                                        
                    
                           
                    
//                         ]
                    
//                     },

//                 ]
// },
                
              
            
                












//              ]




       







//      });
//     return _FloatPanel_MyAccountMaster;





// }

// function FloatPanel_MyAccountMasterShow() {

//     Ext.Viewport.remove(_FloatPanel_MyAccountMaster);
//     this.overlay = Ext.Viewport.add(FloatPanel_MyAccountMaster());
//     this.overlay.show();
//     _FloatPanel_MyAccountMasterisOpen = 'Y';
//     ArrappRoute.length = 0;
//     ArrappRouteCheckVal.length = 0;
//     console.log(ArrappRoute);
//     AddRoutePages("FloatPanel_MyAccountMasterHide()");
//    // FloatPanel_MyAccountMasterAdjustHeight();
//     var containerView1 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_EditProfile]')[0];
//     var containerViewEl1 = containerView1.element;
//     containerViewEl1.on('tap',
//       function (event, node, options, eOpts) {

//           SingleTap_Open_EditProfile();

//       }
//     );


//     var containerView2 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_ManagePassword]')[0];
//     var containerViewEl2 = containerView2.element;
//     containerViewEl2.on('tap',
//       function (event, node, options, eOpts) {
        
      
//           SingleTap_Open_ManagePassword();

//       }
//     );




//     var containerView3 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_LogOut]')[0];
//     var containerViewEl3 = containerView3.element;
//     containerViewEl3.on('tap',
//       function (event, node, options, eOpts) {
//           //FloatPanel_MyAccountMasterHide();
//           //Ext.getCmp('mainView').setActiveItem(0);
//           //VIAAdvertismentAutoSlideReset();
//           LogOuting();

//       }
//     );



//     var containerViewnameContainerFloatPanel_MyAccountMaster_AllTransactions = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_AllTransactions]')[0];
//     var containerViewElnameContainerFloatPanel_MyAccountMaster_AllTransactions = containerViewnameContainerFloatPanel_MyAccountMaster_AllTransactions.element;
//     containerViewElnameContainerFloatPanel_MyAccountMaster_AllTransactions.on('tap',
//       function (event, node, options, eOpts) {
//           //FloatPanel_MyAccountMasterHide();
//           //Ext.getCmp('mainView').setActiveItem(0);
//           //VIAAdvertismentAutoSlideReset();
//           MyAccount_AllTransactionHistoryShow();

//       }
//     );

    

//     var containerViewnameContainerFloatPanel_MyAccountMaster_TermAndCondition = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_TermAndCondition]')[0];
//     var containerViewElnameContainerFloatPanel_MyAccountMaster_TermAndCondition = containerViewnameContainerFloatPanel_MyAccountMaster_TermAndCondition.element;
//     containerViewElnameContainerFloatPanel_MyAccountMaster_TermAndCondition.on('tap',
//       function (event, node, options, eOpts) {
//           getPlayerIDS();

//       }
//     );

//     // var containerViewnameContainerFloatPanel_MyAccountMaster_AccountVerification = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_AccountVerification]')[0];
//     // var containerViewElnameContainerFloatPanel_MyAccountMaster_AccountVerification = containerViewnameContainerFloatPanel_MyAccountMaster_AccountVerification.element;
//     // containerViewElnameContainerFloatPanel_MyAccountMaster_AccountVerification.on('tap',
//     //   function (event, node, options, eOpts) {
//     //       setSubscription();

//     //   }
//     // );

    
//     // var containerViewnameFloatPanel_MyAccountMaster_VerificationStatusBox = Ext.ComponentQuery.query('container[name=nameFloatPanel_MyAccountMaster_VerificationStatusBox]')[0];
//     // var containerViewElnameFloatPanel_MyAccountMaster_VerificationStatusBox = containerViewnameFloatPanel_MyAccountMaster_VerificationStatusBox.element;
//     // containerViewElnameFloatPanel_MyAccountMaster_VerificationStatusBox.on('tap',
//     //   function (event, node, options, eOpts) {
//     //       // FloatPanel_AccountVerifiedShow();
//     //       if (GetAyohaUserisUserVerified() == "NO") {
//     //           FloatPanel_AyohaMembershipAdvantagesShow();
//     //       } else if (GetAyohaUserisUserVerified() == "YES") {
//     //           FloatPanel_MyAccountRankDescriptionShow();
//     //       }
          
//     //   }
//     // );

    
    

//     var val = GetCurrAyohaUserAccountNo().split('-');
//     var id = val[1] + '-' + val[2];
//     var id_Ext = val[2];
//     var isUserVerified = GetAyohaUserisUserVerified();


//     Ext.getCmp('FloatPanel_MyAccountMaster_PicPicture').setHtml('<img src="' + GetAyohaUserPicProfile() + '" alt="Image" style="width:65px;height:65px;border-radius: 50%;border: 2px solid #ECF0F1;zIndex:400px;margin:0px 0px 0px -10px;">');
//     Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:white;">' + GetAyohaUserAccountNames() + '</div>');
//     Ext.getCmp('FloatPanel_MyAccountMaster_emailAddress').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:white;height:20px">'+GetAyohaUserEmail()+'</div>');
   
//     console.log(GetAyohaUserAccountNames().length);

//     if (GetAyohaUserAccountNames().length > 24) {

        
//       //  Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHeight(38);
//         Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:white;">' + GetAyohaUserAccountNames() + '</div>');
//     }

   
//     //Ext.getCmp('FloatPanel_MyAccountMaster_AccountNo').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:white;height:23px">' + id + '</div>');



//     if (isUserVerified == "NO") {
//       //  Ext.getCmp('FloatPanel_MyAccountMaster_AccountNo').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:orange;height:23px">Not Ayoha Member</div>');
//         Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<img src="resources/icons/NotVerify.png" alt="Image" style="width:22px;height:22px;zIndex:400px;margin:0px 0px 0px 0px;">');
//        // Ext.getCmp('FloatPanel_MyAccountMaster_VerificationStatusBox').setHtml('<div class="blink_me" style="width:auto;background-color: orange;text-align:center;border: 1px solid orange;font-size: 11px;font-weight:normal;color:white;height:21px;vertical-align:middle;border-radius: 5px 5px 5px 5px;padding:0px 15px;"><div style="margin:3px 0px 0px 0px;">Be Ayoha Member !</div></div>');
       



//     }
//     if (isUserVerified == "YES") {
//       //  Ext.getCmp('FloatPanel_MyAccountMaster_AccountNo').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:white;height:23px">' + localStorage.getItem("AccountNoDisplay") + '</div>');
//         Ext.getCmp('FloatPanel_MyAccountMaster_emailAddress').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:white;height:20px">'+GetAyohaUserEmail()+'</div>');
//         Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:white;">' + GetAyohaUserAccountNames() + '</div>');
//         if (GetAyohaUserAccountNames().length > 24) {
//             Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:white;">' + GetAyohaUserAccountNames() + '</div>');
//         }
       

//         if (localStorage.getItem("AyohaMember_Rank") == "Black Iron") {
//            // Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/Starter.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
//             Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/blackIron.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');


//         }
//         if (localStorage.getItem("AyohaMember_Rank") == "Bronze") {
//            // Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/nomembercard.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
//             Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Bronze.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

//         }
//         if (localStorage.getItem("AyohaMember_Rank") == "Silver") {
//            // Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/vip.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
//             Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Silver.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

//         }
//         if (localStorage.getItem("AyohaMember_Rank") == "Gold") {
//            // Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/vvip.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
//             Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Gold.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

//         }
//         if (localStorage.getItem("AyohaMember_Rank") == "Platinum") {
//             //Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/goldmember.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
//             Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Platinum.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

//         }

//         if (localStorage.getItem("AyohaMember_Rank") == "King Club") {
//             //Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/kingclubIcon.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
//             Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/kingclubIcon.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

//         }






       
//         //Ext.getCmp('FloatPanel_MyAccountMaster_VerificationStatusBox').setHtml('<div style="width:60%;background-image: linear-gradient(#c800ffc9,#ff00de75);background-color: #fac;text-align:center;border: 1px solid #fac;font-size: 11px;font-weight:bold;color:white;height:21px;vertical-align:middle;border-radius: 5px 5px 5px 5px;"><div style="margin:3px 0px 0px 0px;">Ayoha Member</div></div>');
      



//        // Ext.getCmp('FloatPanel_MyAccountMaster_VerificationStatusBox').setHtml('<div  onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:180px;height:40px;background-image: linear-gradient(#c800ffc9,#c800ffc9);background-color: #fac;border: 1px solid #fac;font-size: 12px;font-weight:bold;color:white;border-radius: 5px;display: flex;text-align: left;padding:5px 5px ">Tier :' + localStorage.getItem("AyohaMember_Rank") + ' <br> Ayoha Point:'+globalDashboard_AyohaPoint+'</div>');
       
//     }
// }


// function FloatPanel_MyAccountMasterHide() {

//     if (_FloatPanel_MyAccountMasterisOpen == 'Y') {
//         _FloatPanel_MyAccountMaster.hide(); _FloatPanel_MyAccountMasterisOpen = 'N';
//       //  FloatPanel_AyohaeWallet_IconHide();
//         RemovePages("FloatPanel_MyAccountMasterHide()");
//     }
   
// }


// function LogOuting() {
//     FloatPanel_MyAccountMasterHide();
//     localStorage.clear();
   
//     // window.location.reload();
//     Ext.getCmp('mainView').setActiveItem(0);
//     // Ext.getCmp('mainView').setActive(0);
// }

// function SingleTap_Open_EditProfile() {

//     FloatPanel_SubscriberMasterShow();
//     Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=black><b>Edit Profile</b></font>');
//    // Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(1);
// }

// function SingleTap_Open_ManagePassword() {

//     FloatPanel_SubscriberMasterShow();

   
//     Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=black><b>Change Password</b></font>');
//     Ext.getCmp('btnFloatPanel_SubscriberMaster_TitleHeaderIcon').setHtml('<div ><img src="resources/icons/changePasswordWhite01.png" width="25" height="20" alt="Company Name"></div>');
//     Ext.getCmp('tabpanelFloatPanel_SubscriberMaster_inner').setActiveItem(2);
//     Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_Save').setHidden(false);
//     Ext.getCmp('btnFloatPanel_SubscriberMaster_Edit').setHidden(true);
    
// }

// function FloatPanel_MyAccountMasterAdjustHeight() {
//     var y = parseInt(screen.height);
//     var x = parseInt(window.innerHeight);

//     var adjust = x - 212;
//     //var headerHeight = parseInt(251);
//     ////alert(y);
//     ////alert(x);
   
//     //var adjustedHeight = x - headerHeight;
//     ////var newHeight = adjustedHeight - 99;
//     //var newHeight = adjustedHeight - 83;

//     //alert(newHeight)

//   //  Ext.getCmp('containerFloatPanel_MyAccountMasterMaster').setHeight(adjust);
//     //Ext.getCmp('containerFloatLoyaltyCardPointMaster').setHeight(newHeight);






// }