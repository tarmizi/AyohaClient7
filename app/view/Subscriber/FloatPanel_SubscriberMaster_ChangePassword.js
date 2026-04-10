Ext.define('BuskartApp.view.Subscriber.FloatPanel_SubscriberMaster_ChangePassword', {

});

var _FloatPanel_SubscriberMaster_ChangePassword = null;
var isFloatPanel_SubscriberMaster_ChangePasswordOpen = 'N';

// ─── Helper: Section HTML (reused style) ───

function FloatPanel_SubscriberMaster_ChangePasswordSectionHtml(title) {
    return '<div style="display:flex;align-items:center;gap:10px;margin:0 0 14px 0;">' +
        '<div style="width:5px;height:30px;border-radius:999px;background:#5a4de6;"></div>' +
        '<div style="color:#1e293b;font-size:17px;font-weight:800;line-height:1.2;">' + Ext.String.htmlEncode(title) + '</div></div>';
}

// ─── Shared field style config ───

function FloatPanel_SubscriberMaster_ChangePasswordFieldStyle() {
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

function FloatPanel_SubscriberMaster_ChangePasswordLabelStyle() {
    return {
        color: '#64748b',
        fontSize: '12px',
        fontWeight: '700',
        letterSpacing: '0.08em',
        textTransform: 'uppercase'
    };
}

// ─── Get field value helper ───

function _cpf(id) {
    var c = Ext.getCmp(id);
    return c ? (c.getValue ? c.getValue() : '') : '';
}

// ─── Create Panel ───

function FloatPanel_SubscriberMaster_ChangePasswordCreateIfNeeded() {
    if (_FloatPanel_SubscriberMaster_ChangePassword && !_FloatPanel_SubscriberMaster_ChangePassword.destroyed) {
        return;
    }

    _FloatPanel_SubscriberMaster_ChangePassword = Ext.create('Ext.Container', {
        id: 'FloatPanel_SubscriberMaster_ChangePasswordID',
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
                            FloatPanel_SubscriberMaster_ChangePasswordHide(false);
                        }
                    },
                    { xtype: 'spacer' },
                    {
                        html: ayohaTheme_HeaderText('Change Password'),
                        margin: '0 15 0 0'
                    }
                ]
            },

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

                            // ─── CHANGE PASSWORD CONTENT PANEL ───
                            {
                                xtype: 'container',
                                width: '100%',
                                margin: '20 0 10 0',
                                padding: '18 14 14 14',
                                style: 'background-color:#ffffff;border-radius:30px;',
                                layout: { type: 'vbox', pack: 'start', align: 'stretch' },
                                items: [

                                    // Section: Change Password
                                    { xtype: 'container', margin: '6 0 10 0', html: FloatPanel_SubscriberMaster_ChangePasswordSectionHtml('Change Password') },

                                    {
                                        xtype: 'passwordfield',
                                        id: 'cpFieldCurrentPassword',
                                        label: 'Current Password',
                                        labelAlign: 'top',
                                        labelStyle: FloatPanel_SubscriberMaster_ChangePasswordLabelStyle(),
                                        inputStyle: FloatPanel_SubscriberMaster_ChangePasswordFieldStyle(),
                                        margin: '0 0 8 0',
                                        listeners: {
                                            keyup: function () {
                                                FloatPanel_SubscriberMaster_ChangePassword_OnCurrentPasswordKeyUp();
                                            }
                                        }
                                    },
                                    {
                                        xtype: 'container',
                                        id: 'cpCurrentPasswordMsg',
                                        hidden: true,
                                        margin: '4 0 0 0',
                                        html: '<div style="color:black;text-align:right;font-size:11px;width:100%;">Password Not Matched!</div>'
                                    },
                                    {
                                        xtype: 'passwordfield',
                                        id: 'cpFieldNewPassword',
                                        label: 'New Password',
                                        labelAlign: 'top',
                                        labelStyle: FloatPanel_SubscriberMaster_ChangePasswordLabelStyle(),
                                        inputStyle: FloatPanel_SubscriberMaster_ChangePasswordFieldStyle(),
                                        margin: '10 0 8 0',
                                        readOnly: true,
                                        listeners: {
                                            keyup: function () {
                                                FloatPanel_SubscriberMaster_ChangePassword_OnNewPasswordKeyUp();
                                            }
                                        }
                                    },
                                    {
                                        xtype: 'container',
                                        id: 'cpNewPasswordMsg',
                                        hidden: true,
                                        margin: '4 0 0 0',
                                        html: '<div style="color:black;text-align:right;font-size:11px;width:100%;">Password cannot less than 6 characters!</div>'
                                    },
                                    {
                                        xtype: 'passwordfield',
                                        id: 'cpFieldConfirmPassword',
                                        label: '*Confirm Password',
                                        labelAlign: 'top',
                                        labelStyle: FloatPanel_SubscriberMaster_ChangePasswordLabelStyle(),
                                        inputStyle: FloatPanel_SubscriberMaster_ChangePasswordFieldStyle(),
                                        margin: '10 0 8 0',
                                        readOnly: true,
                                        listeners: {
                                            keyup: function () {
                                                FloatPanel_SubscriberMaster_ChangePassword_OnConfirmPasswordKeyUp();
                                            }
                                        }
                                    },
                                    {
                                        xtype: 'container',
                                        id: 'cpConfirmPasswordMsg',
                                        hidden: true,
                                        margin: '4 0 0 0',
                                        html: '<div style="color:black;text-align:right;font-size:11px;width:100%;">Password is matched!</div>'
                                    },
                                    {
                                        xtype: 'button',
                                        margin: '16 0 8 0',
                                        width: '100%',
                                        height: 50,
                                        ui: 'plain',
                                        html: '<div style="width:100%;height:50px;border-radius:16px;background:' + ayohaThemeColor_Header().replace('background-color:', '').replace(';', '') + ';color:#ffffff;display:flex;align-items:center;justify-content:center;gap:10px;font-size:15px;font-weight:800;box-shadow:0 10px 24px rgba(79,70,229,0.22);"><img src="resources/icons/saveWhiteOne.png" width="20" height="20" alt="Save"><span>Change Password</span></div>',
                                        handler: function () { FloatPanel_SubscriberMaster_ChangePassword_UpdatePassword(); }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    });
}


// ─── Show / Hide ───

function FloatPanel_SubscriberMaster_ChangePasswordShow() {
    FloatPanel_SubscriberMaster_ChangePasswordCreateIfNeeded();
    _FloatPanel_SubscriberMaster_ChangePassword.show();

    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
        AyohaBrowserBack.push('FloatPanel_SubscriberMaster_ChangePassword', function () {
            FloatPanel_SubscriberMaster_ChangePasswordHide(true);
        });
    }

    isFloatPanel_SubscriberMaster_ChangePasswordOpen = 'Y';
}

function FloatPanel_SubscriberMaster_ChangePasswordHide(fromBack, animCfg) {
    if (isFloatPanel_SubscriberMaster_ChangePasswordOpen === 'Y') {
        if (animCfg) {
            _FloatPanel_SubscriberMaster_ChangePassword.hide(Ext.fx.Animation(animCfg));
        } else {
            _FloatPanel_SubscriberMaster_ChangePassword.hide();
        }
        isFloatPanel_SubscriberMaster_ChangePasswordOpen = 'N';
        if (fromBack !== true && typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.close) {
            AyohaBrowserBack.close('FloatPanel_SubscriberMaster_ChangePassword');
        }
        _FloatPanel_SubscriberMaster_ChangePassword.destroy();
        _FloatPanel_SubscriberMaster_ChangePassword = null;
    }
}


// ─── Password validation ───

function FloatPanel_SubscriberMaster_ChangePassword_OnCurrentPasswordKeyUp() {
    var currVal = _cpf('cpFieldCurrentPassword');
    var stored = GetCurrAyohaUserKatalaluan();
    var msgCmp = Ext.getCmp('cpCurrentPasswordMsg');
    var newPwField = Ext.getCmp('cpFieldNewPassword');
    var confirmPwField = Ext.getCmp('cpFieldConfirmPassword');

    if (currVal.length >= stored.length - 2) {
        if (currVal === stored) {
            msgCmp.setHtml('<div style="color:green;text-align:right;font-size:11px;width:100%;">Password Matched!</div>');
            msgCmp.setHidden(false);
            newPwField.setReadOnly(false);
            confirmPwField.setReadOnly(false);
        } else {
            msgCmp.setHtml('<div style="color:red;text-align:right;font-size:11px;width:100%;">Password Not Matched!</div>');
            msgCmp.setHidden(false);
            newPwField.setReadOnly(true);
            confirmPwField.setReadOnly(true);
        }
    } else {
        msgCmp.setHtml('<div style="color:black;text-align:right;font-size:11px;width:100%;">Current Password is Required!</div>');
        msgCmp.setHidden(false);
        newPwField.setReadOnly(true);
        confirmPwField.setReadOnly(true);
    }
}

function FloatPanel_SubscriberMaster_ChangePassword_OnNewPasswordKeyUp() {
    var pw = _cpf('cpFieldNewPassword');
    var cpw = _cpf('cpFieldConfirmPassword');
    var msg = Ext.getCmp('cpNewPasswordMsg');

    if (pw.length < 6) {
        msg.setHtml('<div style="color:red;text-align:right;font-size:11px;width:100%;">Password cannot less than 6 characters!</div>');
        msg.setHidden(false);
    } else {
        msg.setHidden(true);
    }

    if (cpw) {
        FloatPanel_SubscriberMaster_ChangePassword_OnConfirmPasswordKeyUp();
    }
}

function FloatPanel_SubscriberMaster_ChangePassword_OnConfirmPasswordKeyUp() {
    var pw = _cpf('cpFieldNewPassword');
    var cpw = _cpf('cpFieldConfirmPassword');
    var msg = Ext.getCmp('cpConfirmPasswordMsg');

    if (pw === cpw && pw.length >= 6) {
        msg.setHtml('<div style="color:green;text-align:right;font-size:11px;width:100%;">Password is matched!</div>');
    } else {
        msg.setHtml('<div style="color:red;text-align:right;font-size:11px;width:100%;">Password Not matched!</div>');
    }
    msg.setHidden(false);
}


// ─── API: Update Password ───

function FloatPanel_SubscriberMaster_ChangePassword_UpdatePassword() {
    var pw = _cpf('cpFieldNewPassword');
    var cpw = _cpf('cpFieldConfirmPassword');

    if (pw !== cpw) {
        swalFireFail('Save Failed!!!<br><font size=2>Password Not Matched!</font>');
        return;
    }
    if (pw.length < 6) {
        swalFireFail('Save Failed!!!<br><font size=2>Password Cannot less than 6 characters!</font>');
        return;
    }

    var objn = {
        'ID': GetCurrAyohaUserID(),
        'AccountNo': GetCurrAyohaUserAccountNo(),
        'Katalaluan': cpw
    };

    Ext.Ajax.request({
        type: 'POST',
        url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileUpdateKataLaluan',
        dataType: 'json',
        data: JSON.stringify(objn),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        success: function (result) {
            var data = Ext.decode(result.responseText.trim());
            if (data.success === 'true') {
                swalFireSuccess('Change Password succeed!');
                FloatPanel_SubscriberMaster_ChangePasswordHide(false);
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
