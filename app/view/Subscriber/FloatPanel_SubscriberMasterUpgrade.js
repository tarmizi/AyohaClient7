Ext.define('BuskartApp.view.Subscriber.FloatPanel_SubscriberMasterUpgrade', {

});

var _FloatPanel_SubscriberMasterUpgrade = null;
var isFloatPanel_SubscriberMasterUpgradeOpen = 'N';
var isbtnFloatPanel_SubscriberMasterUpgrade_SaveEdit = 'Edit';

// ─── Helper: HTML generators (reused from original) ───

function FloatPanel_SubscriberMasterUpgradeAvatarHtml(imageSource) {
    var src = imageSource || 'resources/icons/profileIconWhiteOne.png';
    return [
        '<div style="position:relative;width:132px;height:132px;margin:0 auto;">',
            '<div style="width:132px;height:132px;padding:6px;border-radius:38px;background:#ffffff;box-shadow:0 16px 36px rgba(15,23,42,0.16);">',
                '<div style="width:120px;height:120px;border-radius:30px;overflow:hidden;background:#dbeafe;">',
                    '<img src="', src, '" style="width:100%;height:100%;object-fit:cover;"/>',
                '</div>',
            '</div>',
            '<div style="position:absolute;right:-4px;bottom:-4px;width:42px;height:42px;border-radius:18px;background:#4f46e5;border:3px solid #ffffff;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 22px rgba(79,70,229,0.28);">',
                '<img src="resources/icons/editProfileWhite02.png" style="width:18px;height:18px;filter:brightness(0) invert(1);"/>',
            '</div>',
        '</div>'
    ].join('');
}

function FloatPanel_SubscriberMasterUpgradeNameHtml(name, isVerified) {
    var safe = Ext.String.htmlEncode(name || 'Subscriber');
    var badge = isVerified ? '<img src="resources/icons/VerifiedUser.png" style="width:18px;height:18px;vertical-align:middle;margin-left:8px;"/>' : '';
    return '<div style="text-align:center;color:#0f172a;font-size:26px;font-weight:900;line-height:1.04;letter-spacing:0.01em;">' + safe + badge + '</div>';
}

function FloatPanel_SubscriberMasterUpgradeRoleHtml(role) {
    return '<div style="text-align:center;color:#5f799d;font-size:12px;font-weight:600;line-height:1.4;">' + Ext.String.htmlEncode(role || 'Profile Member') + '</div>';
}

function FloatPanel_SubscriberMasterUpgradeSectionHtml(title) {
    return '<div style="display:flex;align-items:center;gap:10px;margin:0 0 14px 0;">' +
        '<div style="width:5px;height:30px;border-radius:999px;background:#5a4de6;"></div>' +
        '<div style="color:#1e293b;font-size:17px;font-weight:800;line-height:1.2;">' + Ext.String.htmlEncode(title) + '</div></div>';
}

function FloatPanel_SubscriberMasterUpgradeTabIconHtml(iconPath, isActive) {
    var bg = isActive ? 'background:linear-gradient(135deg,#eef2ff 0%,#e0e7ff 100%);box-shadow:0 10px 24px rgba(79,70,229,0.18);' : 'background:transparent;';
    var flt = isActive ? '' : 'opacity:0.55;filter:grayscale(0.15);';
    return '<div style="width:48px;height:48px;border-radius:16px;display:flex;align-items:center;justify-content:center;' + bg + '"><img src="' + iconPath + '" style="width:24px;height:24px;' + flt + '"/></div>';
}

function FloatPanel_SubscriberMasterUpgradeTabTextHtml(l1, l2, isActive) {
    var c = isActive ? '#4338ca' : '#94a3b8';
    var w = isActive ? '800' : '700';
    return '<div style="text-align:center;line-height:1.12;letter-spacing:0.08em;text-transform:uppercase;color:' + c + ';font-size:10px;font-weight:' + w + ';"><div>' + Ext.String.htmlEncode(l1) + '</div><div style="margin-top:2px;">' + Ext.String.htmlEncode(l2) + '</div></div>';
}

// ─── Shared field style config ───

function FloatPanel_SubscriberMasterUpgradeFieldStyle() {
    return {
        borderRadius: '16px',
        backgroundColor: '#ffffff',
        color: '#1e3a5f',
        fontSize: '12px',
        fontWeight: '600',
        padding: '0 16px',
        border: '1px solid #dbe2ea',
        boxShadow: '0 1px 3px rgba(15,23,42,0.05)'
    };
}

function FloatPanel_SubscriberMasterUpgradeLabelStyle() {
    return {
        color: '#64748b',
        fontSize: '12px',
        fontWeight: '700',
        letterSpacing: '0.08em',
        textTransform: 'uppercase'
    };
}

// ─── Bottom tab refresh ───

function FloatPanel_SubscriberMasterUpgradeRefreshTabs(activeIndex) {
    // var ids = [
    //     { btn: 'btnUpgrade_MenuBottom_MyProfile', txt: 'containerUpgrade_MenuBottom_MyProfileTxt', icon: 'resources/icons/MyAccountPurpleOne.png', l1: 'My', l2: 'Profile' },
    //     { btn: 'btnUpgrade_MenuBottom_BankAccount', txt: 'containerUpgrade_MenuBottom_BankAccountTxt', icon: 'resources/icons/transferewallet.png', l1: 'Bank', l2: 'Info' },
    //     { btn: 'btnUpgrade_MenuBottom_ChangePassword', txt: 'containerUpgrade_MenuBottom_ChangePasswordTxt', icon: 'resources/icons/security.png', l1: 'Security', l2: 'Key' }
    // ];
    // for (var i = 0; i < ids.length; i++) {
    //     var active = (i === activeIndex);
    //     var b = Ext.getCmp(ids[i].btn);
    //     var t = Ext.getCmp(ids[i].txt);
    //     if (b) { b.setHtml(FloatPanel_SubscriberMasterUpgradeTabIconHtml(ids[i].icon, active)); }
    //     if (t) { t.setHtml(FloatPanel_SubscriberMasterUpgradeTabTextHtml(ids[i].l1, ids[i].l2, active)); }
    // }
}

// ─── Toggle profile edit / readonly ───

function FloatPanel_SubscriberMasterUpgradeSetEditing(editing) {
    var fields = [
        'upgradeFieldAccountName', 'upgradeFieldEmail', 'upgradeFieldPhoneNo',
        'upgradeFieldDOB', 'upgradeFieldGender',
        'upgradeFieldStreetAddress', 'upgradeFieldTown', 'upgradeFieldPostCode',
        'upgradeFieldState', 'upgradeFieldCountry', 'upgradeFieldProfession',
        'upgradeFieldHobby'
    ];
    for (var i = 0; i < fields.length; i++) {
        var f = Ext.getCmp(fields[i]);
        if (f) {
            f.setReadOnly(!editing);
            f.setDisabled(!editing);
        }
    }
    var editBtn = Ext.getCmp('btnUpgrade_Edit');
    var saveBtn = Ext.getCmp('btnUpgrade_Save');
    if (editBtn) { editBtn.setHidden(editing); }
    if (saveBtn) { saveBtn.setHidden(!editing); }
    isbtnFloatPanel_SubscriberMasterUpgrade_SaveEdit = editing ? 'Save' : 'Edit';
}

// ─── Save Handlers ───

function FloatPanel_SubscriberMasterUpgradeCommitProfile() {
    FloatPanel_SubscriberMasterUpgradeSetEditing(false);
    FloatPanel_SubscriberMasterUpgrade_SaveProfile();
}

function FloatPanel_SubscriberMasterUpgradeSaveActiveSection() {
    FloatPanel_SubscriberMasterUpgradeCommitProfile();
}

// ─── Sync tab panel height ───

function FloatPanel_SubscriberMasterUpgradeSyncHeight() {
    var tp = Ext.getCmp('tabpanelUpgrade_inner');
    if (!tp || !tp.getActiveItem) { return; }
    var active = tp.getActiveItem();
    if (!active) { return; }

    var doSync = function () {
        var tpRef = Ext.getCmp('tabpanelUpgrade_inner');
        var cur = tpRef && tpRef.getActiveItem ? tpRef.getActiveItem() : null;
        var dom = cur && cur.element ? cur.element.dom : null;
        if (!dom) { return; }

        // Temporarily unconstrain height so browser reports real content height
        var prevH = dom.style.height;
        var prevMin = dom.style.minHeight;
        var prevOver = dom.style.overflow;
        dom.style.height = 'auto';
        dom.style.minHeight = 'auto';
        dom.style.overflow = 'visible';
        var h = dom.scrollHeight || dom.offsetHeight || 0;
        dom.style.height = prevH;
        dom.style.minHeight = prevMin;
        dom.style.overflow = prevOver;

        // Also sum child heights as a fallback measurement
        var children = dom.children;
        var childSum = 0;
        for (var i = 0; i < children.length; i++) {
            childSum += children[i].offsetHeight;
            var cs = window.getComputedStyle(children[i]);
            childSum += (parseInt(cs.marginTop) || 0) + (parseInt(cs.marginBottom) || 0);
        }
        h = Math.max(h, childSum);

        if (h > 100) { tpRef.setHeight(h + 10); }
    };

    Ext.defer(doSync, 100);
    Ext.defer(doSync, 400);
    Ext.defer(doSync, 900);
}

// ─── Get field value helper ───

function _uf(id) {
    var c = Ext.getCmp(id);
    return c ? (c.getValue ? c.getValue() : '') : '';
}

// ─── Create Panel ───

function FloatPanel_SubscriberMasterUpgradeCreateIfNeeded() {
    if (_FloatPanel_SubscriberMasterUpgrade && !_FloatPanel_SubscriberMasterUpgrade.destroyed) {
        return;
    }

    _FloatPanel_SubscriberMasterUpgrade = Ext.create('Ext.Container', {
        id: 'FloatPanel_SubscriberMasterUpgradeID',
        floated: true,
        centered: false,
        fullscreen: true,
        closeAction: 'destroy',
        draggable: false,
        modal: false,
        layout: 'fit',
        style: 'background-color:#f3f6fb;',
        showAnimation: { type: 'popIn', duration: 250, easing: 'ease-out' },
        hideAnimation: { type: 'popOut', duration: 250, easing: 'ease-out' },
        listeners: {
            beforehide: function () { return true; }
        },

        items: [

            // ─── TOP HEADER (docked) ───
            {
                xtype: 'container',
                docked: 'top',
                width: '100%',
                height: ayoha_HeaderHeight(),
                style: ayohaThemeColor_Header(),
                layout: { type: 'hbox', pack: 'center', align: 'center' },
                items: [
                    {
                        xtype: 'button',
                        height: 30,
                        width: 65,
                        margin: '0 0 0 10',
                        html: '<div><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Back"></div>',
                        ui: 'plain',
                        handler: function () {
                            FloatPanel_SubscriberMasterUpgradeHide(false);
                        }
                    },
                    { xtype: 'spacer' },
                    {
                        html: ayohaTheme_HeaderText('My Account'),
                        margin: '0 15 0 0'
                    }
                ]
            },

            // ─── BOTTOM TAB BAR (docked) ───
            // {
            //     xtype: 'container',
            //     docked: 'bottom',
            //     width: '100%',
            //     height: 88,
            //     id: 'containerUpgrade_MenuBottom',
            //     style: 'background-color:#ffffff;border-top:1px solid #e2e8f0;box-shadow:0 -8px 30px rgba(15,23,42,0.08);',
            //     layout: { type: 'hbox', pack: 'center', align: 'center' },
            //     items: [
            //         {
            //             xtype: 'container',
            //             width: '100%',
            //             height: 88,
            //             style: 'background-color:transparent;',
            //             layout: { type: 'hbox', pack: 'center', align: 'center' },
            //             scrollable: { direction: 'horizontal', directionLock: true },
            //             items: [
            //                 {
            //                     xtype: 'container',
            //                     width: '100%',
            //                     height: 72,
            //                     style: 'background-color:transparent;',
            //                     layout: { type: 'hbox', pack: 'center', align: 'center' },
            //                     items: [
            //                         // My Profile tab
            //                         {
            //                             xtype: 'container',
            //                             width: '100%',
            //                             style: 'background-color:transparent;',
            //                             layout: { type: 'vbox', pack: 'start', align: 'center' },
            //                             items: [
            //                                 {
            //                                     xtype: 'button',
            //                                     id: 'btnUpgrade_MenuBottom_MyProfile',
            //                                     margin: '0 0 6 0',
            //                                     height: 50, width: 54,
            //                                     html: FloatPanel_SubscriberMasterUpgradeTabIconHtml('resources/icons/MyAccountPurpleOne.png', true),
            //                                     ui: 'plain',
            //                                     handler: function () {
            //                                         if (isbtnFloatPanel_SubscriberMasterUpgrade_SaveEdit === 'Save') {
            //                                             Ext.getCmp('btnUpgrade_Edit').setHidden(true);
            //                                             Ext.getCmp('btnUpgrade_Save').setHidden(false);
            //                                         } else {
            //                                             Ext.getCmp('btnUpgrade_Edit').setHidden(false);
            //                                             Ext.getCmp('btnUpgrade_Save').setHidden(true);
            //                                         }
            //                                     }
            //                                 },
            //                                 {
            //                                     xtype: 'container',
            //                                     id: 'containerUpgrade_MenuBottom_MyProfileTxt',
            //                                     width: '100%',
            //                                     html: FloatPanel_SubscriberMasterUpgradeTabTextHtml('My', 'Profile', true)
            //                                 }
            //                             ]
            //                         }
            //                     ]
            //                 }
            //             ]
            //         }
            //     ]
            // },

            // ─── MAIN SCROLLABLE CONTENT ───
            {
                xtype: 'container',
                width: '100%',
                height: '100%',
                style: 'background-color:transparent;',
                layout: { type: 'vbox', pack: 'start', align: 'center' },
                items: [
                    {
                        xtype: 'container',
                        margin: '18 0 0 0',
                        width: '100%',
                        height: '100%',
                        padding: '0 12 0 12',
                        style: 'background-color:transparent;',
                        scrollable: { direction: 'vertical', directionLock: true, indicators: false },
                        layout: { type: 'vbox', pack: 'start', align: 'center' },
                        items: [

                            // ── Avatar ──
                            {
                                xtype: 'container',
                                height: 148,
                                width: '100%',
                                id: 'upgradeAvatarContainer',
                                name: 'nameUpgradeAvatarContainer',
                                style: 'background-color:transparent;position:relative;z-index:30;overflow:visible;',
                                layout: { type: 'hbox', pack: 'center', align: 'center' },
                                items: [
                                    {
                                        height: 148, width: 132,
                                        id: 'upgradeAvatarHtml',
                                        style: 'position:relative;z-index:31;overflow:visible;',
                                        html: FloatPanel_SubscriberMasterUpgradeAvatarHtml()
                                    }
                                ]
                            },

                            // ── Name / Role ──
                            {
                                xtype: 'container',
                                id: 'upgradeHeroName',
                                width: '100%',
                                margin: '20 0 0 0',
                                html: FloatPanel_SubscriberMasterUpgradeNameHtml('Subscriber', false)
                            },
                            {
                                xtype: 'container',
                                id: 'upgradeHeroRole',
                                width: '100%',
                                margin: '8 0 0 0',
                                html: FloatPanel_SubscriberMasterUpgradeRoleHtml('Profile Member')
                            },

                            // ── Hidden file input (kept as HTML for browser file-picker) ──
                            {
                                id: 'upgradeUploadPhotoInput',
                                hidden: true,
                                width: '100%',
                                html: '<input type="file" id="inputImg-UpgradeUploadedPhoto" accept="image/*" onchange="inputImgFloatPanel_SubscriberMasterUpgradePhoto()" style="border-color:#540575;color:black;width:268px;text-align:left;font-size:15px;">'
                            },

                            // ── Action buttons row ──
                            {
                                xtype: 'container',
                                margin: '18 0 0 0',
                                width: '100%',
                                layout: { type: 'hbox', pack: 'end', align: 'center' },
                                items: [
                                    {
                                        xtype: 'button',
                                        id: 'btnUpgrade_Save',
                                        hidden: true,
                                        margin: '0 4 0 0',
                                        height: 46, width: 46,
                                        html: '<div style="width:46px;height:46px;border-radius:16px;background:#111827;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 24px rgba(15,23,42,0.18);"><img src="resources/icons/saveWhiteOne.png" width="22" height="22"></div>',
                                        ui: 'plain',
                                        handler: function () { FloatPanel_SubscriberMasterUpgradeCommitProfile(); }
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'btnUpgrade_Edit',
                                        height: 46, width: 46,
                                        html: '<div style="width:46px;height:46px;border-radius:16px;background:#4f46e5;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 24px rgba(79,70,229,0.25);"><img src="resources/icons/editProfile.png" width="22" height="22"></div>',
                                        ui: 'plain',
                                        handler: function () { FloatPanel_SubscriberMasterUpgradeSetEditing(true); }
                                    }
                                ]
                            },

                            // ─── SINGLE CONTENT PANEL ───
                            {
                                xtype: 'container',
                                id: 'tabpanelUpgrade_inner',
                                width: '100%',
                                margin: '20 0 10 0',
                                padding: '18 14 14 14',
                                style: 'background-color:#ffffff;border-radius:30px;',
                                layout: { type: 'vbox', pack: 'start', align: 'stretch' },
                                items: [

                                    // Section: Personal Information
                                    { xtype: 'container', margin: '6 0 10 0', html: FloatPanel_SubscriberMasterUpgradeSectionHtml('Personal Information') },

                                    {
                                        xtype: 'textfield',
                                        id: 'upgradeFieldAccountName',
                                        label: 'Account Name',
                                        labelAlign: 'top',
                                        labelStyle: FloatPanel_SubscriberMasterUpgradeLabelStyle(),
                                        inputStyle: FloatPanel_SubscriberMasterUpgradeFieldStyle(),
                                        readOnly: true,
                                        disabled: true,
                                        margin: '0 0 8 0'
                                    },
                                    {
                                        xtype: 'emailfield',
                                        id: 'upgradeFieldEmail',
                                        label: 'Email',
                                        labelAlign: 'top',
                                        labelStyle: FloatPanel_SubscriberMasterUpgradeLabelStyle(),
                                        inputStyle: FloatPanel_SubscriberMasterUpgradeFieldStyle(),
                                        readOnly: true,
                                        disabled: true,
                                        margin: '0 0 8 0'
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'upgradeFieldPhoneNo',
                                        label: 'Phone No',
                                        labelAlign: 'top',
                                        labelStyle: FloatPanel_SubscriberMasterUpgradeLabelStyle(),
                                        inputStyle: FloatPanel_SubscriberMasterUpgradeFieldStyle(),
                                        readOnly: true,
                                        disabled: true,
                                        margin: '0 0 8 0'
                                    },
                                    {
                                        xtype: 'datefield',
                                        id: 'upgradeFieldDOB',
                                        label: 'DOB',
                                        labelAlign: 'top',
                                        labelStyle: FloatPanel_SubscriberMasterUpgradeLabelStyle(),
                                        inputStyle: FloatPanel_SubscriberMasterUpgradeFieldStyle(),
                                        dateFormat: 'Y-m-d',
                                        readOnly: true,
                                        disabled: true,
                                        margin: '0 0 8 0'
                                    },
                                    {
                                        xtype: 'selectfield',
                                        id: 'upgradeFieldGender',
                                        label: 'Gender',
                                        labelAlign: 'top',
                                        labelStyle: FloatPanel_SubscriberMasterUpgradeLabelStyle(),
                                        inputStyle: FloatPanel_SubscriberMasterUpgradeFieldStyle(),
                                        options: [
                                            { text: 'Male', value: 'male' },
                                            { text: 'Female', value: 'female' }
                                        ],
                                        readOnly: true,
                                        disabled: true,
                                        margin: '0 0 8 0'
                                    },

                                    // Section: Change Password (opens separate panel)
                                    { xtype: 'container', margin: '24 0 10 0', html: FloatPanel_SubscriberMasterUpgradeSectionHtml('Change Password') },
                                    {
                                        xtype: 'button',
                                        margin: '0 0 8 0',
                                        width: '100%',
                                        height: 50,
                                        ui: 'plain',
                                        html: '<div style="width:100%;height:50px;border-radius:16px;background:' + ayohaThemeColor_Header().replace('background-color:', '').replace(';', '') + ';color:#ffffff;display:flex;align-items:center;justify-content:center;gap:10px;font-size:15px;font-weight:800;box-shadow:0 10px 24px rgba(79,70,229,0.22);"><img src="resources/icons/security.png" width="20" height="20" alt="Password"><span>Change Password</span></div>',
                                        handler: function () { FloatPanel_SubscriberMaster_ChangePasswordShow(); }
                                    },

                                    // Section: Address Details
                                    { xtype: 'container', margin: '24 0 10 0', html: FloatPanel_SubscriberMasterUpgradeSectionHtml('Address Details') },

                                    {
                                        xtype: 'textfield',
                                        id: 'upgradeFieldStreetAddress',
                                        label: 'Street Address',
                                        labelAlign: 'top',
                                        labelStyle: FloatPanel_SubscriberMasterUpgradeLabelStyle(),
                                        inputStyle: FloatPanel_SubscriberMasterUpgradeFieldStyle(),
                                        readOnly: true,
                                        disabled: true,
                                        margin: '0 0 8 0'
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'upgradeFieldTown',
                                        label: 'Town/City',
                                        labelAlign: 'top',
                                        labelStyle: FloatPanel_SubscriberMasterUpgradeLabelStyle(),
                                        inputStyle: FloatPanel_SubscriberMasterUpgradeFieldStyle(),
                                        readOnly: true,
                                        disabled: true,
                                        margin: '0 0 8 0'
                                    },
                                    {
                                        xtype: 'numberfield',
                                        id: 'upgradeFieldPostCode',
                                        label: 'PostCode',
                                        labelAlign: 'top',
                                        labelStyle: FloatPanel_SubscriberMasterUpgradeLabelStyle(),
                                        inputStyle: FloatPanel_SubscriberMasterUpgradeFieldStyle(),
                                        readOnly: true,
                                        disabled: true,
                                        margin: '0 0 8 0'
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'upgradeFieldState',
                                        label: 'State',
                                        labelAlign: 'top',
                                        labelStyle: FloatPanel_SubscriberMasterUpgradeLabelStyle(),
                                        inputStyle: FloatPanel_SubscriberMasterUpgradeFieldStyle(),
                                        readOnly: true,
                                        disabled: true,
                                        margin: '0 0 8 0',
                                        listeners: {
                                            focus: function () {
                                                if (!this.getReadOnly()) {
                                                    FloatPanel_StateShow();
                                                }
                                            }
                                        }
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'upgradeFieldCountry',
                                        label: 'Country',
                                        labelAlign: 'top',
                                        labelStyle: FloatPanel_SubscriberMasterUpgradeLabelStyle(),
                                        inputStyle: FloatPanel_SubscriberMasterUpgradeFieldStyle(),
                                        readOnly: true,
                                        disabled: true,
                                        margin: '0 0 8 0',
                                        listeners: {
                                            focus: function () {
                                                if (!this.getReadOnly()) {
                                                    FloatPanel_CountryShow();
                                                }
                                            }
                                        }
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'upgradeFieldProfession',
                                        label: 'Profession',
                                        labelAlign: 'top',
                                        labelStyle: FloatPanel_SubscriberMasterUpgradeLabelStyle(),
                                        inputStyle: FloatPanel_SubscriberMasterUpgradeFieldStyle(),
                                        readOnly: true,
                                        disabled: true,
                                        margin: '0 0 8 0'
                                    },

                                    // Section: Account & Activity
                                    { xtype: 'container', margin: '14 0 4 0', html: FloatPanel_SubscriberMasterUpgradeSectionHtml('Account & Activity') },

                                    // Hobby
                                    {
                                        xtype: 'textfield',
                                        id: 'upgradeFieldHobby',
                                        label: 'Hobby/Interested',
                                        labelAlign: 'top',
                                        labelStyle: FloatPanel_SubscriberMasterUpgradeLabelStyle(),
                                        inputStyle: FloatPanel_SubscriberMasterUpgradeFieldStyle(),
                                        readOnly: true,
                                        disabled: true,
                                        margin: '0 0 6 0'
                                    },

                                    // Account Status
                                    { xtype: 'container', margin: '0 0 2 0', html: '<div style="color:#64748b;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">ACCOUNT STATUS</div>' },
                                    {
                                        xtype: 'container',
                                        id: 'upgradeActivityStatusCard',
                                        width: '100%',
                                        margin: '0 0 6 0',
                                        html: '<div style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:14px;background:#ecfdf5;border:1px solid #a7f3d0;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span style="color:#15803d;font-size:15px;font-weight:800;">Active</span></div>'
                                    },

                                    // Verification
                                    { xtype: 'container', margin: '0 0 2 0', html: '<div style="color:#64748b;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">VERIFICATION</div>' },
                                    {
                                        xtype: 'container',
                                        id: 'upgradeActivityVerificationCard',
                                        width: '100%',
                                        margin: '0 0 6 0',
                                        html: '<div style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:14px;background:#fff7ed;border:1px solid #fed7aa;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><span style="color:#c2410c;font-size:15px;font-weight:800;">Not Verified</span></div>'
                                    },

                                    // Verification banner
                                    {
                                        xtype: 'container',
                                        id: 'upgradeActivityVerificationBanner',
                                        width: '100%',
                                        margin: '0 0 8 0',
                                        html: '<div style="display:flex;align-items:flex-start;gap:12px;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,#1e293b 0%,#0f172a 100%);box-shadow:0 8px 24px rgba(15,23,42,0.18);"><div style="min-width:32px;height:32px;border-radius:50%;background:rgba(234,179,8,0.15);display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#eab308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></div><div><div style="color:#f8fafc;font-size:14px;font-weight:800;margin-bottom:4px;">Account Verification Required</div><div style="color:#94a3b8;font-size:12px;font-weight:500;line-height:1.5;">Please verify your account to unlock all features. Check your email for the verification link.</div></div></div>'
                                    },

                                    // Registered
                                    {
                                        xtype: 'container',
                                        id: 'upgradeActivityRegistered',
                                        width: '100%',
                                        margin: '0 0 4 0',
                                        html: '<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0;"><div style="display:flex;align-items:center;gap:10px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span style="color:#334155;font-size:13px;font-weight:600;">Registered</span></div><span style="color:#6d28d9;font-size:13px;font-weight:700;">-</span></div>'
                                    },
                                    // Last Login
                                    {
                                        xtype: 'container',
                                        id: 'upgradeActivityLastLogin',
                                        width: '100%',
                                        margin: '0 0 4 0',
                                        html: '<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0;"><div style="display:flex;align-items:center;gap:10px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span style="color:#334155;font-size:13px;font-weight:600;">Last Login</span></div><span style="color:#6d28d9;font-size:13px;font-weight:700;">-</span></div>'
                                    },
                                    // Version
                                    {
                                        xtype: 'container',
                                        id: 'upgradeActivityVersion',
                                        width: '100%',
                                        margin: '0 0 2 0',
                                        html: '<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0;"><div style="display:flex;align-items:center;gap:10px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg><span style="color:#334155;font-size:13px;font-weight:600;">Version</span></div><span style="display:inline-block;padding:5px 14px;border-radius:10px;background:#1e293b;color:#f8fafc;font-size:12px;font-weight:700;">-</span></div>'
                                    }
                                ]
                            },

                            // ─── Save All Changes button ───
                            {
                                xtype: 'button',
                                id: 'btnUpgrade_SaveAllChangesBottom',
                                margin: '0 0 18 0',
                                width: '100%',
                                height: 56,
                                ui: 'plain',
                                html: '<div style="width:100%;height:56px;border-radius:18px;background:#151d33;color:#ffffff;display:flex;align-items:center;justify-content:center;gap:12px;font-size:16px;font-weight:800;box-shadow:0 10px 24px rgba(21,29,51,0.18);"><img src="resources/icons/saveWhiteOne.png" width="22" height="22" alt="Save"><span>Save All Changes</span></div>',
                                handler: function () {
                                    FloatPanel_SubscriberMasterUpgradeSaveActiveSection();
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    });
}


// ─── Show / Hide ───

function FloatPanel_SubscriberMasterUpgradeShow() {
    FloatPanel_SubscriberMasterUpgradeCreateIfNeeded();
    _FloatPanel_SubscriberMasterUpgrade.show();

    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
        AyohaBrowserBack.push('FloatPanel_SubscriberMasterUpgrade', function () {
            FloatPanel_SubscriberMasterUpgradeHide(true);
        });
    }

    isFloatPanel_SubscriberMasterUpgradeOpen = 'Y';
   // Ext.getCmp('tabpanelUpgrade_inner').getTabBar().hide();
    isbtnFloatPanel_SubscriberMasterUpgrade_SaveEdit = 'Edit';
    FloatPanel_SubscriberMasterUpgradeRefreshTabs(0);
    // FloatPanel_SubscriberMasterUpgradeSyncHeight();
    // Ext.defer(function () { FloatPanel_SubscriberMasterUpgradeSyncHeight(); }, 300);

    // Avatar tap to upload
    var avatarView = Ext.ComponentQuery.query('container[name=nameUpgradeAvatarContainer]')[0];
    if (avatarView && avatarView.element) {
        avatarView.element.on('singletap', function () {
            FloatPanel_SubscriberMasterUpgrade_UploadPhoto();
        });
    }

    // Load profile data
    FloatPanel_SubscriberMasterUpgrade_LoadProfile();
}

function FloatPanel_SubscriberMasterUpgradeHide(fromBack, animCfg) {
    if (isFloatPanel_SubscriberMasterUpgradeOpen === 'Y') {
        if (animCfg) {
            _FloatPanel_SubscriberMasterUpgrade.hide(Ext.fx.Animation(animCfg));
        } else {
            _FloatPanel_SubscriberMasterUpgrade.hide();
        }
        isFloatPanel_SubscriberMasterUpgradeOpen = 'N';
        if (fromBack !== true && typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.close) {
            AyohaBrowserBack.close('FloatPanel_SubscriberMasterUpgrade');
        }
        _FloatPanel_SubscriberMasterUpgrade.destroy();
        _FloatPanel_SubscriberMasterUpgrade = null;
    }
}


// ─── Photo upload ───

var globalUpgradeImg64;

function FloatPanel_SubscriberMasterUpgrade_UploadPhoto() {
    var el = document.getElementById('inputImg-UpgradeUploadedPhoto');
    if (el) { el.click(); }
}

function inputImgFloatPanel_SubscriberMasterUpgradePhoto() {
    var fileInput = document.getElementById('inputImg-UpgradeUploadedPhoto');
    var file = fileInput.files[0];
    if (!file || !file.type.match('image.*')) { return; }

    var reader = new FileReader();
    reader.onload = function (e) {
        globalUpgradeImg64 = e.target.result;
        Ext.getCmp('upgradeAvatarHtml').setHtml(FloatPanel_SubscriberMasterUpgradeAvatarHtml(globalUpgradeImg64));
        FloatPanel_SubscriberMasterUpgrade_ResizeImage();
    };
    reader.readAsDataURL(file);
}

function FloatPanel_SubscriberMasterUpgrade_ResizeImage() {
    if (!(window.File && window.FileReader && window.FileList && window.Blob)) { return; }
    var file = document.getElementById('inputImg-UpgradeUploadedPhoto').files[0];
    if (!file) { return; }

    var reader = new FileReader();
    reader.onload = function (e) {
        var img = document.createElement('img');
        img.src = e.target.result;
        var canvas = document.createElement('canvas');
        var MAX = 1000;
        var w = img.width;
        var h = img.height;
        if (w > h) { if (w > MAX) { h *= MAX / w; w = MAX; } }
        else { if (h > MAX) { w *= MAX / h; h = MAX; } }
        canvas.width = w;
        canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        globalUpgradeImg64 = canvas.toDataURL(file.type);
    };
    reader.readAsDataURL(file);
}


// ─── API: Load Profile ───

function FloatPanel_SubscriberMasterUpgrade_LoadProfile() {
    _DataStore_AyohaUserProfileLoadProfileStore.getProxy().setExtraParam('AccountNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaUserProfileLoadProfileStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileLoadProfile');
    _DataStore_AyohaUserProfileLoadProfileStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                var r = records[0];

                // Avatar & hero
                Ext.getCmp('upgradeAvatarHtml').setHtml(FloatPanel_SubscriberMasterUpgradeAvatarHtml(r.get('Photo')));
                Ext.getCmp('upgradeHeroName').setHtml(FloatPanel_SubscriberMasterUpgradeNameHtml(r.get('AccountName'), r.get('isUserVerified') === 'YES'));
                Ext.getCmp('upgradeHeroRole').setHtml(FloatPanel_SubscriberMasterUpgradeRoleHtml(r.get('Profession')));

                localStorage.setItem('AyohaUserID', r.get('ID'));

                // Profile fields
                Ext.getCmp('upgradeFieldAccountName').setValue(r.get('AccountName'));
                Ext.getCmp('upgradeFieldEmail').setValue(r.get('Email'));
                Ext.getCmp('upgradeFieldPhoneNo').setValue(r.get('PhoneNo'));
                Ext.getCmp('upgradeFieldDOB').setValue(r.get('DOB'));
                Ext.getCmp('upgradeFieldGender').setValue(r.get('Gender'));
                Ext.getCmp('upgradeFieldStreetAddress').setValue(r.get('StreetAddress'));
                Ext.getCmp('upgradeFieldTown').setValue(r.get('Town'));
                Ext.getCmp('upgradeFieldPostCode').setValue(r.get('PostCode'));
                Ext.getCmp('upgradeFieldState').setValue(r.get('States'));
                Ext.getCmp('upgradeFieldCountry').setValue(r.get('Country'));
                Ext.getCmp('upgradeFieldProfession').setValue(r.get('Profession'));
                Ext.getCmp('upgradeFieldHobby').setValue(r.get('Hobby'));

                // Account & Activity styled cards
                var status = r.get('RowStatus') || 'Active';
                var statusSafe = Ext.String.htmlEncode(status);
                var isActive = (status.toLowerCase() === 'active');
                var statusBg = isActive ? '#ecfdf5' : '#fef2f2';
                var statusBorder = isActive ? '#a7f3d0' : '#fecaca';
                var statusColor = isActive ? '#15803d' : '#dc2626';
                var statusStroke = isActive ? '#16a34a' : '#dc2626';
                var statusIcon = isActive
                    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="' + statusStroke + '" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
                    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="' + statusStroke + '" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
                Ext.getCmp('upgradeActivityStatusCard').setHtml('<div style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:14px;background:' + statusBg + ';border:1px solid ' + statusBorder + ';">' + statusIcon + '<span style="color:' + statusColor + ';font-size:15px;font-weight:800;">' + statusSafe + '</span></div>');

                // Verification card
                var verified = r.get('isUserVerified');
                if (verified === 'YES') {
                    Ext.getCmp('upgradeActivityVerificationCard').setHtml('<div style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:14px;background:#ecfdf5;border:1px solid #a7f3d0;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span style="color:#15803d;font-size:15px;font-weight:800;">Verified</span></div>');
                    Ext.getCmp('upgradeActivityVerificationBanner').setHidden(true);
                } else {
                    Ext.getCmp('upgradeActivityVerificationCard').setHtml('<div style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:14px;background:#fff7ed;border:1px solid #fed7aa;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><span style="color:#c2410c;font-size:15px;font-weight:800;">Not Verified</span></div>');
                    Ext.getCmp('upgradeActivityVerificationBanner').setHidden(false);
                }

                // Registered / Last Login / Version rows
                var createdDate = Ext.String.htmlEncode(r.get('CreatedDate') || '-');
                var lastLogin = Ext.String.htmlEncode(r.get('LastLoginDate') || '-');
                var version = Ext.String.htmlEncode(r.get('AyohaVersion') || '-');
                Ext.getCmp('upgradeActivityRegistered').setHtml('<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0;"><div style="display:flex;align-items:center;gap:10px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span style="color:#334155;font-size:13px;font-weight:600;">Registered</span></div><span style="color:#6d28d9;font-size:13px;font-weight:700;">' + createdDate + '</span></div>');
                Ext.getCmp('upgradeActivityLastLogin').setHtml('<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0;"><div style="display:flex;align-items:center;gap:10px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span style="color:#334155;font-size:13px;font-weight:600;">Last Login</span></div><span style="color:#6d28d9;font-size:13px;font-weight:700;">' + lastLogin + '</span></div>');
                Ext.getCmp('upgradeActivityVersion').setHtml('<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0;"><div style="display:flex;align-items:center;gap:10px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg><span style="color:#334155;font-size:13px;font-weight:600;">Version</span></div><span style="display:inline-block;padding:5px 14px;border-radius:10px;background:#1e293b;color:#f8fafc;font-size:12px;font-weight:700;">' + version + '</span></div>');

                // Update MyAccount pic if open
                if (typeof _FloatPanel_MyAccountMasterisOpen !== 'undefined' && _FloatPanel_MyAccountMasterisOpen === 'Y') {
                    var picCmp = Ext.getCmp('FloatPanel_MyAccountMaster_PicPicture');
                    if (picCmp) {
                        picCmp.setHtml('<img src="' + Ext.String.htmlEncode(r.get('Photo')) + '" alt="Image" style="width:95px;height:95px;border-radius:50%;border:2px solid #ECF0F1;zIndex:400px;margin:0px 0px 0px -10px;">');
                    }
                }

             //   FloatPanel_SubscriberMasterUpgradeSyncHeight();
             //   Ext.defer(function () { FloatPanel_SubscriberMasterUpgradeSyncHeight(); }, 600);
                LoadingPanelHide(false);
            } else {
                LoadingPanelHide(false);
            }
        }
    });
}


// ─── API: Save Profile ───

function FloatPanel_SubscriberMasterUpgrade_SaveProfile() {
    var accountName = _uf('upgradeFieldAccountName');
    var email = _uf('upgradeFieldEmail');
    var phoneNo = _uf('upgradeFieldPhoneNo');
    var dob = _uf('upgradeFieldDOB');
    var gender = _uf('upgradeFieldGender');

    if (!accountName) { swalFireFail('Save Failed!!!<br><font size=2>Account Name required!</font>'); return; }
    if (!phoneNo) { swalFireFail('Save Failed!!!<br><font size=2>Phone No required!</font>'); return; }
    if (!email) { swalFireFail('Save Failed!!!<br><font size=2>Email required!</font>'); return; }
    if (!dob) { swalFireFail('Save Failed!!!<br><font size=2>DOB required!</font>'); return; }
    if (!gender) { swalFireFail('Save Failed!!!<br><font size=2>Gender required!</font>'); return; }

    var imgbase64 = globalUpgradeImg64 || 'ExistingImage';
    localStorage.setItem('CurrPhoneNumber', phoneNo);

    var objn = {
        'ID': GetCurrAyohaUserID(),
        'AccountNo': GetCurrAyohaUserAccountNo(),
        'AccountName': accountName,
        'Email': email,
        'PhoneNo': phoneNo,
        'Photo': imgbase64,
        'Gender': gender,
        'DOB': dob,
        'PhotoName': '',
        'StreetAddress': _uf('upgradeFieldStreetAddress'),
        'Town': _uf('upgradeFieldTown'),
        'PostCode': _uf('upgradeFieldPostCode'),
        'Country': _uf('upgradeFieldCountry'),
        'Profession': _uf('upgradeFieldProfession'),
        'Hobby': _uf('upgradeFieldHobby'),
        'States': _uf('upgradeFieldState')
    };

    Ext.Ajax.request({
        type: 'POST',
        url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileUpdate',
        dataType: 'json',
        data: JSON.stringify(objn),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        success: function (result) {
            var data = Ext.decode(result.responseText.trim());
            if (data.success === 'true') {
                swalFireSuccess('Save Succesfully!');
                FloatPanel_SubscriberMasterUpgrade_LoadProfile();
            } else {
                swalFireFail('Save Failed!!!<br><font size=1>' + Ext.String.htmlEncode(result.responseText.trim()) + '</font>');
            }
            Ext.Viewport.unmask();
        },
        failure: function () {
            Ext.Viewport.unmask();
            swalFireFail('Save Failed!!');
        }
    });
}


// ─── API: Save Bank Info ───

function FloatPanel_SubscriberMasterUpgrade_SaveBankInfo() {
    var bankName = _uf('upgradeFieldBankName');
    var bankType = _uf('upgradeFieldBankAccountType');
    var bankAccName = _uf('upgradeFieldBankAccountName');
    var bankAccNo = _uf('upgradeFieldBankAccountNo');

    if (!bankName) { swalFireFail('Save Failed!!!<br><font size=2>Bank Name required!</font>'); return; }
    if (!bankType) { swalFireFail('Save Failed!!!<br><font size=2>Bank Account Type required!</font>'); return; }
    if (!bankAccName) { swalFireFail('Save Failed!!!<br><font size=2>Bank Account Name required!</font>'); return; }
    if (!bankAccNo) { swalFireFail('Save Failed!!!<br><font size=2>Bank Account No required!</font>'); return; }

    var objn = {
        'SubscriberAccNo': GetCurrAyohaUserAccountNo(),
        'BankAccountNo': bankAccNo,
        'BankName': bankName,
        'BankAccountType': bankType,
        'BankAccountName': bankAccName
    };

    Ext.Ajax.request({
        type: 'POST',
        url: GetAPIurl() + '/AyohaUserProfileBankAccount/AyohaUserProfileBankAccountInsertUpdate',
        dataType: 'json',
        data: JSON.stringify(objn),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        success: function (result) {
            var data = Ext.decode(result.responseText.trim());
            if (data.success === 'true') {
                swalFireSuccess('Save Succesfully!');
            } else {
                swalFireFail('Save Failed!!!<br><font size=1>' + Ext.String.htmlEncode(result.responseText.trim()) + '</font>');
            }
            Ext.Viewport.unmask();
        },
        failure: function () {
            Ext.Viewport.unmask();
            swalFireFail('Save Failed!!');
        }
    });
}


// ─── API: Load Bank Info ───

function FloatPanel_SubscriberMasterUpgrade_BankInfo_Load() {
    _DataStore_AyohaeWalletAccountRequestCashOutStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaeWalletAccountRequestCashOutStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserProfileBankAccount/AyohaUserProfileBankAccountRequestCashOutLoadBySubscriberAccNo');
    _DataStore_AyohaeWalletAccountRequestCashOutStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {
        var count = parseInt(_DataStore_AyohaeWalletAccountRequestCashOutStore.getCount());
        if (count > 0) {
            var rec = _DataStore_AyohaeWalletAccountRequestCashOutStore.getAt(0);
            Ext.getCmp('upgradeFieldBankName').setValue(rec.get('BankName'));
            Ext.getCmp('upgradeFieldBankAccountType').setValue(rec.get('BankAccountType'));
            Ext.getCmp('upgradeFieldBankAccountName').setValue(rec.get('BankAccountName'));
            Ext.getCmp('upgradeFieldBankAccountNo').setValue(rec.get('BankAccountNo'));
        }
        Ext.Viewport.setMasked(false);
    });
    task.delay(500);
}
