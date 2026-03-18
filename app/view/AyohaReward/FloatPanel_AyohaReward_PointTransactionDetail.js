Ext.define('BuskartApp.view.AyohaReward.FloatPanel_AyohaReward_PointTransactionDetail', {

});
var _FloatPanel_AyohaReward_PointTransactionDetail = null; 
var isFloatPanel_AyohaReward_PointTransactionDetailOpen = 'N';





function Ayoha_PointDetailSafe(val) {
    if (val === null || val === undefined || val === '' || val === 'null' || val === 'undefined') {
        return '-';
    }
    return Ext.String.htmlEncode(String(val));
}

function Ayoha_PointDetailCleanText(val) {
    var raw = val || '';
    raw = String(raw);
    raw = raw.replace(/<br\s*\/?>/gi, ' ');
    raw = raw.replace(/&nbsp;/gi, ' ');
    raw = Ext.String.htmlDecode(raw);
    raw = raw.replace(/<[^>]*>/g, '');
    raw = raw.replace(/\s+/g, ' ').trim();
    return raw;
}

function Ayoha_PointDetailRow(label, value) {
    return ''
        + '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;'
        + 'padding:11px 0;border-bottom:1px solid #F1F5F9;">'
            + '<div style="width:40%;font-size:12px;color:#6B7280;font-family:Arial,sans-serif;">'
                + Ayoha_PointDetailSafe(label)
            + '</div>'
            + '<div style="width:60%;font-size:12px;color:#111827;font-family:Arial,sans-serif;'
            + 'font-weight:700;text-align:right;word-break:break-word;">'
                + Ayoha_PointDetailSafe(value)
            + '</div>'
        + '</div>';
}

// function Ayoha_PointDetailGetPointBadge(pointText, pointType) {
//     var raw = Ayoha_PointDetailCleanText(pointText || '0 Point');
//     if (!raw) raw = '0 Point';

//     var detectText = (raw + ' ' + (pointType || '')).toLowerCase();

//     var isRedeem =
//         raw.indexOf('-') === 0 ||
//         detectText.indexOf('redeem') !== -1 ||
//         detectText.indexOf('redemption') !== -1 ||
//         detectText.indexOf('debit') !== -1 ||
//         detectText.indexOf('spent') !== -1 ||
//         detectText.indexOf('use point') !== -1;

//     var isEarn =
//         raw.indexOf('+') === 0 ||
//         detectText.indexOf('earn') !== -1 ||
//         detectText.indexOf('credit') !== -1 ||
//         detectText.indexOf('check-in') !== -1 ||
//         detectText.indexOf('reward') !== -1 ||
//         detectText.indexOf('bonus') !== -1 ||
//         detectText.indexOf('complimentary') !== -1;

//     var bg = 'linear-gradient(180deg,#F9FAFB 0%,#F3F4F6 100%)';
//     var border = '#E5E7EB';
//     var color = '#374151';
//     var dot = '#9CA3AF';

//     if (isEarn) {
//         bg = 'linear-gradient(180deg,#F0FDF4 0%,#DCFCE7 100%)';
//         border = '#BBF7D0';
//         color = '#15803D';
//         dot = '#22C55E';
//     }

//     if (isRedeem) {
//         bg = 'linear-gradient(180deg,#FEF2F2 0%,#FEE2E2 100%)';
//         border = '#FECACA';
//         color = '#DC2626';
//         dot = '#EF4444';
//     }

//     return ''
//         + '<div style="display:inline-flex;align-items:center;justify-content:center;gap:6px;'
//         + 'padding:8px 12px;border-radius:999px;'
//         + 'background:' + bg + ';'
//         + 'border:1px solid ' + border + ';'
//         + 'box-shadow:inset 0 1px 0 rgba(255,255,255,0.55);'
//         + 'font-family:Arial,sans-serif;font-size:12px;font-weight:800;'
//         + 'color:' + color + ';line-height:14px;white-space:nowrap;text-align:center;">'
//             + '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:' + dot + ';flex-shrink:0;"></span>'
//             + '<span>' + Ext.String.htmlEncode(raw) + '</span>'
//         + '</div>';
// }







function Ayoha_PointDetailNormalizeAmount(value) {
    var raw = value || '0';
    raw = String(raw);

    raw = raw.replace(/<br\s*\/?>/gi, ' ');
    raw = raw.replace(/&nbsp;/gi, ' ');
    raw = Ext.String.htmlDecode(raw);
    raw = raw.replace(/<[^>]*>/g, '');
    raw = raw.replace(/\s+/g, ' ').trim();

    raw = raw.replace(/^[+-]/, '').trim();
    raw = raw.replace(/\s*Point\s*$/i, '').trim();

    if (!raw) raw = '0';

    return raw;
}

function Ayoha_PointDetailGetPointBadge(data) {
    data = data || {};

    var str = (data.TypeCRDB || '').toString();
    var campaignCode = (data.CampaignCode || '').toString();
    var ayohaPoint = Ayoha_PointDetailNormalizeAmount(data.AyohaPoint);
    var raw = '0 Point';

    var bg = 'linear-gradient(180deg,#F9FAFB 0%,#F3F4F6 100%)';
    var border = '#E5E7EB';
    var color = '#374151';
    var dot = '#9CA3AF';

    // =========================
    // FOLLOW ORIGINAL RULE
    // =========================
    if (str === 'Credit') {
        raw = '+' + ayohaPoint + ' Point';

        if (campaignCode === 'AyohaPointRedemptionCancel') {
            raw = '+' + ayohaPoint + ' Point';
        }

        if (campaignCode === '001-AP_CheckIn') {
            raw = '+' + ayohaPoint + ' Point';
        }

        bg = 'linear-gradient(180deg,#F0FDF4 0%,#DCFCE7 100%)';
        border = '#BBF7D0';
        color = '#15803D';
        dot = '#22C55E';
    }
    else if (str === 'Debit') {
        raw = '-' + ayohaPoint + ' Point';

        if (campaignCode === 'AyohaPointRedemption') {
            raw = '-' + ayohaPoint + ' Point';
        }

        bg = 'linear-gradient(180deg,#FEF2F2 0%,#FEE2E2 100%)';
        border = '#FECACA';
        color = '#DC2626';
        dot = '#EF4444';
    }
    else {
        // fallback
        raw = Ayoha_PointDetailCleanText(data.PointAmountEquation || data.ModifiedTypeCRDB || '0 Point');

        if (raw.indexOf('+') === 0) {
            bg = 'linear-gradient(180deg,#F0FDF4 0%,#DCFCE7 100%)';
            border = '#BBF7D0';
            color = '#15803D';
            dot = '#22C55E';
        }

        if (raw.indexOf('-') === 0) {
            bg = 'linear-gradient(180deg,#FEF2F2 0%,#FEE2E2 100%)';
            border = '#FECACA';
            color = '#DC2626';
            dot = '#EF4444';
        }
    }

    return ''
        + '<div style="display:inline-flex;align-items:center;justify-content:center;gap:6px;'
        + 'padding:8px 12px;border-radius:999px;'
        + 'background:' + bg + ';'
        + 'border:1px solid ' + border + ';'
        + 'box-shadow:inset 0 1px 0 rgba(255,255,255,0.55);'
        + 'font-family:Arial,sans-serif;font-size:12px;font-weight:800;'
        + 'color:' + color + ';line-height:14px;white-space:nowrap;text-align:center;">'
            + '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:' + dot + ';flex-shrink:0;"></span>'
            + '<span>' + Ext.String.htmlEncode(raw) + '</span>'
        + '</div>';
}








function buildAyohaPointTransactionDetailHtmlPremium(data) {
    data = data || {};

    var topImg = data.MembershipCardImg || data.EnterpriseLogo || '';
    var topImgHtml = '';

    if (topImg && topImg !== '-' && topImg !== 'null' && topImg !== 'undefined') {
        topImgHtml =
            '<div style="width:56px;height:56px;border-radius:16px;background:#fff;padding:4px;'
            + 'box-sizing:border-box;box-shadow:0 10px 20px rgba(0,0,0,0.12);overflow:hidden;flex-shrink:0;">'
                + '<img src="' + Ext.String.htmlEncode(String(topImg)) + '" '
                + 'style="width:100%;height:100%;object-fit:cover;border-radius:12px;" />'
            + '</div>';
    } else {
        topImgHtml =
            '<div style="width:56px;height:56px;border-radius:16px;'
            + 'background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.22);'
            + 'display:flex;align-items:center;justify-content:center;'
            + 'color:#fff;font-size:22px;font-weight:800;flex-shrink:0;">✦</div>';
    }

    return ''
        + '<div style="padding:14px;box-sizing:border-box;">'

            // HERO CARD
            + '<div style="background:linear-gradient(135deg,#7C3AED 0%,#A855F7 100%);'
            + 'border-radius:20px;padding:16px;box-shadow:0 14px 30px rgba(88,28,135,0.22);'
            + 'margin-bottom:14px;">'

                + '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;">'
                    + '<div style="display:flex;align-items:center;gap:12px;min-width:0;">'
                        + topImgHtml
                        + '<div style="min-width:0;">'
                            + '<div style="font-family:Arial,sans-serif;font-size:15px;font-weight:800;'
                            + 'color:#fff;line-height:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'
                                + Ayoha_PointDetailSafe(data.MembershipCardName)
                            + '</div>'
                            + '<div style="font-family:Arial,sans-serif;font-size:11px;color:rgba(255,255,255,0.90);margin-top:4px;">'
                                + Ayoha_PointDetailSafe(data.EnterpriseName)
                            + '</div>'
                            + '<div style="font-family:Arial,sans-serif;font-size:10px;color:rgba(255,255,255,0.72);margin-top:4px;">'
                                + Ayoha_PointDetailSafe(data.CreatedDate)
                            + '</div>'
                        + '</div>'
                    + '</div>'
                    + '<div style="flex-shrink:0;">'
                      //  + Ayoha_PointDetailGetPointBadge(data.PointAmountEquation, data.AyohaPointType)
                           + Ayoha_PointDetailGetPointBadge(data)
                    + '</div>'
                + '</div>'

                + '<div style="margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.18);'
                + 'font-family:Arial,sans-serif;font-size:12px;color:rgba(255,255,255,0.92);line-height:18px;">'
                    + 'This screen shows a quick summary of the selected point transaction.'
                + '</div>'

            + '</div>'

            // SUMMARY CARD
            + '<div style="background:#fff;border-radius:18px;padding:14px 14px 4px 14px;'
            + 'box-shadow:0 8px 24px rgba(15,23,42,0.07);margin-bottom:12px;">'
                + '<div style="font-family:Arial,sans-serif;font-size:14px;font-weight:800;color:#311B4B;margin-bottom:4px;">'
                    + 'Transaction Summary'
                + '</div>'
                + Ayoha_PointDetailRow('Transaction Type', data.AyohaPointType)
                + Ayoha_PointDetailRow('Campaign Name', data.ModifiedMembershipCardName)
                + Ayoha_PointDetailRow('Merchant', data.EnterpriseName)
                + Ayoha_PointDetailRow('Created Date', data.CreatedDate)
                + Ayoha_PointDetailRow('Created By', data.CreatedBy)
            + '</div>'

            // POINT INFO CARD
            + '<div style="background:#fff;border-radius:18px;padding:14px 14px 4px 14px;'
            + 'box-shadow:0 8px 24px rgba(15,23,42,0.07);margin-bottom:12px;">'
                + '<div style="font-family:Arial,sans-serif;font-size:14px;font-weight:800;color:#311B4B;margin-bottom:4px;">'
                    + 'Point Information'
                + '</div>'             
              //  + Ayoha_PointDetailRow('Point Amount',Ayoha_PointDetailGetPointBadge(data))
                + Ayoha_PointDetailRowHtml('Point Collected', Ayoha_PointDetailGetPointBadge(data))
                + Ayoha_PointDetailRow('Current Total Point', AppState.MainDashboard.AyohaPoint)
                + Ayoha_PointDetailRow('Payment Amount', data.PaymentAmount)
                + Ayoha_PointDetailRow('Point Code', data.PaymentNoDisplay || data.PaymentNo)
            + '</div>'

            // REFERENCE CARD
            + '<div style="background:#fff;border-radius:18px;padding:14px 14px 4px 14px;'
            + 'box-shadow:0 8px 24px rgba(15,23,42,0.07);margin-bottom:12px;">'
                + '<div style="font-family:Arial,sans-serif;font-size:14px;font-weight:800;color:#311B4B;margin-bottom:4px;">'
                    + 'Reference'
                + '</div>'
                + Ayoha_PointDetailRow('Order No', data.OrderNo)
                + Ayoha_PointDetailRow('GUID', data.GUIDRow)
                + Ayoha_PointDetailRow('Item Cart Code', data.ItemCartCode)
                + Ayoha_PointDetailRow('Membership Card Code', data.MembershipCardCode_AyohaStore_Order)
                + Ayoha_PointDetailRow('Enterprise Acc No', data.EnterpriseAccNo)
            + '</div>'

            // EXTRA CARD
            + '<div style="background:#fff;border-radius:18px;padding:14px 14px 4px 14px;'
            + 'box-shadow:0 8px 24px rgba(15,23,42,0.07);margin-bottom:4px;">'
                + '<div style="font-family:Arial,sans-serif;font-size:14px;font-weight:800;color:#311B4B;margin-bottom:4px;">'
                    + 'Additional Info'
                + '</div>'
                + Ayoha_PointDetailRow('Merchant Address', data.EnterpriseAddress)
                + Ayoha_PointDetailRow('Merchant Tagline', data.EnterpriseTagLine)
                + Ayoha_PointDetailRow('Payment Note', data.PaymentNote)
            + '</div>'

        + '</div>';
}

function FloatPanel_AyohaReward_PointTransactionDetail_ViewDetail() {
    if (!_AyohaReward_PointTransactionDetail_CurrentData) return;

    var d = _AyohaReward_PointTransactionDetail_CurrentData;


FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(d.TotalStampEarn
    ,d.ItemCartCode, d.MembershipCardCode_AyohaStore_Order, d.OrderNo, d.EnterpriseName, d.EnterpriseLogo);

//alert('View Detail for Order No: ' + Ayoha_PointDetailSafe(d.OrderNo) + ', Payment No: ' + Ayoha_PointDetailSafe(d.PaymentNoDisplay || d.PaymentNo));




    // Ext.Msg.alert(
    //     'Transaction Detail',
    //     'Order No: ' + Ayoha_PointDetailSafe(d.OrderNo) + '<br>' +
    //     'Payment No: ' + Ayoha_PointDetailSafe(d.PaymentNoDisplay || d.PaymentNo) + '<br>' +
    //     'Campaign: ' + Ayoha_PointDetailSafe(d.CampaignName) + '<br>' +
    //     'Point: ' + Ayoha_PointDetailSafe(Ayoha_PointDetailCleanText(d.PointAmountEquation))
    // );
}





function Ayoha_PointDetailRowHtml(label, htmlValue) {
    return ''
        + '<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;'
        + 'padding:11px 0;border-bottom:1px solid #F1F5F9;">'
            + '<div style="width:40%;font-size:12px;color:#6B7280;font-family:Arial,sans-serif;">'
                + Ayoha_PointDetailSafe(label)
            + '</div>'
            + '<div style="width:60%;display:flex;justify-content:flex-end;align-items:center;">'
                + (htmlValue || '-')
            + '</div>'
        + '</div>';
}



function FloatPanel_AyohaReward_PointTransactionDetailCreateIfNeeded() {
    if (_FloatPanel_AyohaReward_PointTransactionDetail && !_FloatPanel_AyohaReward_PointTransactionDetail.destroyed) return;

    _FloatPanel_AyohaReward_PointTransactionDetail =
        Ext.create('Ext.Container', {
            id: 'FloatPanel_AyohaReward_PointTransactionDetailID',
            floated: true,
            centered: true,
            fullscreen: true,
            closeAction: 'destroy',
            draggable: false,
            modal: false,
            styleHtmlContent: true,
            layout: 'fit',
            showAnimation: {
                type: 'popIn',
                duration: 250,
                easing: 'ease-out'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250
            },
            style: ayohaThemeColor_Hero(),

            items: [
                {
                    xtype: 'container',
                    width: '100%',
                    height: '100%',
                    style: 'background-color: transparent;',
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center'
                    },
                    items: [

                        // ======================================================
                        // OUTER HEADER
                        // ======================================================
                        {
                            xtype: 'container',
                            width: '100%',
                            height: ayoha_HeaderHeight(),
                            style: 'background-color: transparent;',
                            docked: 'top',
                            id: 'containerFloatPanel_AyohaReward_PointTransactionDetailHeader1',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'btnFloatPanel_AyohaReward_PointTransactionDetailBack',
                                    height: 30,
                                    width: 65,
                                    margin: '0 0 0 10',
                                    html: '<div><img src="resources/icons/backwhite03Ori.png" width="25" height="20"></div>',
                                    ui: 'plain',
                                    handler: function () {
                                        FloatPanel_AyohaReward_PointTransactionDetailHide(false);
                                    }
                                },
                                {
                                    xtype: 'spacer'
                                },
                                {
                                    xtype: 'button',
                                    margin: '-10 -13 0 0',
                                    html: ayohaTheme_HeaderText('Transaction Detail'),
                                    ui: 'plain',
                                    handler: function () {
                                        FloatPanel_AyohaReward_PointTransactionDetailHide(false);
                                    }
                                },
                                {
                                    xtype: 'button',
                                    id: 'btnFloatPanel_AyohaReward_PointTransactionDetailLogo',
                                    height: 35,
                                    width: 65,
                                    margin: '-5 3 0 0',
                                    html: '<div><img src="resources/icons/Logo/LogoWhiteSimplifed.png" width="25" height="25"></div>',
                                    ui: 'plain',
                                    handler: function () {
                                        FloatPanel_AyohaReward_PointTransactionDetailHide(false);
                                    }
                                }
                            ]
                        },

                        // ======================================================
                        // MAIN CARD
                        // ======================================================
                        {
                            xtype: 'container',
                            width: '95%',
                            flex: 1,
                            margin: '4 0 10 0',
                            id: 'containerFloatPanel_AyohaReward_PointTransactionDetailMainCard',
                            style:
                                'background:linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(249,247,252,0.97) 100%);' +
                                'border-radius:22px;' +
                                'box-shadow:0 14px 30px rgba(44,0,90,0.14);',
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'stretch'
                            },
                            items: [

                                // ==================================================
                                // CARD HEADER
                                // ==================================================
                                {
                                    xtype: 'container',
                                    id: 'containerFloatPanel_AyohaReward_PointTransactionDetailCardHeader',
                                    height: 58,
                                    style:
                                        'background:transparent;' +
                                        'border-bottom:1px solid rgba(123,84,170,0.10);',
                                    html:
                                        '<div style="height:58px;display:flex;align-items:center;justify-content:space-between;padding:0 14px;box-sizing:border-box;">' +
                                            '<div style="display:flex;align-items:center;gap:10px;">' +
                                                '<div style="width:36px;height:36px;border-radius:12px;background:linear-gradient(180deg,#FFE9A3 0%,#FFC94F 100%);display:flex;align-items:center;justify-content:center;box-shadow:0 6px 14px rgba(255,194,45,0.22);">' +
                                                    '<img src="resources/icons/transaction01.png" width="16" height="16">' +
                                                '</div>' +
                                                '<div>' +
                                                    '<div style="font-family:Arial,sans-serif;font-size:13px;font-weight:800;color:#3A125D;">Point Transaction</div>' +
                                                    '<div style="font-family:Arial,sans-serif;font-size:10px;color:#8C7AA5;margin-top:2px;">Summary of selected transaction</div>' +
                                                '</div>' +
                                            '</div>' +
                                            '<div style="font-size:10px;color:rgba(136,102,177,0.55);">✦</div>' +
                                        '</div>'
                                },

                                // ==================================================
                                // CARD BODY
                                // ==================================================
                                {
                                    xtype: 'container',
                                    id: 'containerFloatPanel_AyohaReward_PointTransactionDetailCardBody',
                                    flex: 1,
                                    scrollable: {
                                        direction: 'vertical',
                                        indicators: {
                                            y: { autoHide: true },
                                            x: { autoHide: true }
                                        }
                                    },
                                    style: 'background-color: transparent;',
                                    items: [
                                        {
                                            xtype: 'component',
                                            id: 'htmlFloatPanel_AyohaReward_PointTransactionDetailContent',
                                            width: '100%',
                                            html: ''
                                        }
                                    ]
                                },

                                // ==================================================
                                // CARD FOOTER
                                // ==================================================
                                {
                                    xtype: 'container',
                                    id: 'containerFloatPanel_AyohaReward_PointTransactionDetailCardFooter',
                                    width: '100%',
                                    height: 84,
                                    padding: '12 14 14 14',
                                    style:
                                        'background:transparent;' +
                                        'border-top:1px solid rgba(123,84,170,0.08);',
                                    layout: {
                                        type: 'hbox',
                                        pack: 'center',
                                        align: 'center'
                                    },
                                    items: [
                                        {
                                            xtype: 'button',
                                            id: 'btnFloatPanel_AyohaReward_PointTransactionDetailClose',
                                            height: 44,
                                           // width: 110,
                                            flex: 1,
                                           margin: '0 10 0 0',
                                            ui: 'plain',
                                            style:
                                                'border-radius:14px;' +
                                                'background:linear-gradient(180deg,#FFFFFF 0%,#F3ECFB 100%);' +
                                                'border:1px solid rgba(136,102,177,0.18);' +
                                                'box-shadow:0 6px 14px rgba(72,20,130,0.10);',
                                            html:
                                                '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif;font-size:13px;font-weight:800;color:#5B3B84;">Close</div>',
                                            handler: function () {
                                                FloatPanel_AyohaReward_PointTransactionDetailHide(false);
                                            }
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'btnFloatPanel_AyohaReward_PointTransactionDetailViewDetail',
                                            hidden: true,
                                            flex: 1,
                                            height: 44,
                                            ui: 'plain',
                                            style:
                                                'border-radius:14px;' +
                                                'background:linear-gradient(135deg,#7C3AED 0%,#A855F7 100%);' +
                                                'box-shadow:0 10px 22px rgba(124,58,237,0.24);',
                                            html:
                                                '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif;font-size:14px;font-weight:800;color:white;">View Detail</div>',
                                            handler: function () {
                                                FloatPanel_AyohaReward_PointTransactionDetail_ViewDetail();
                                            }
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




var _AyohaReward_PointTransactionDetail_CurrentData = null;

function FloatPanel_AyohaReward_PointTransaction_ShowTransactionDetail(
    TotalStampEarn,
    ItemCartCode,
    MembershipCardCode_AyohaStore_Order,
    AyohaPointType,
    GUIDRow,
    PaymentNo,
    EnterpriseLogo,
    PointAmountEquation,
    PaymentAmount,
    PaymentNoDisplay,
    MembershipCardImg,
    MembershipCardName,
    PaymentNote,
    EnterpriseName,
    EnterpriseAccNo,
    CreatedDate,
    OrderNo,
    CreatedBy,
    EnterpriseAddress,
    EnterpriseTagLine,
    CampaignName,
    TypeCRDB,
CampaignCode,
AyohaPoint,
ModifiedTypeCRDB,
ModifiedMembershipCardName  
) {
   
   




    FloatPanel_AyohaReward_PointTransactionDetailCreateIfNeeded();



    _AyohaReward_PointTransactionDetail_CurrentData = {
        TotalStampEarn: TotalStampEarn,
        ItemCartCode: ItemCartCode,
        MembershipCardCode_AyohaStore_Order: MembershipCardCode_AyohaStore_Order,
        AyohaPointType: CleanAyohaPointType(AyohaPointType),
        GUIDRow: GUIDRow,
        PaymentNo: PaymentNo,
        EnterpriseLogo: EnterpriseLogo,
        PointAmountEquation: PointAmountEquation,
        PaymentAmount: PaymentAmount,
        PaymentNoDisplay: PaymentNoDisplay,
        MembershipCardImg: MembershipCardImg,
        MembershipCardName: MembershipCardName,
        PaymentNote: PaymentNote,
        EnterpriseName: EnterpriseName,
        EnterpriseAccNo: EnterpriseAccNo,
        CreatedDate: CreatedDate,
        OrderNo: OrderNo,
        CreatedBy: CreatedBy,
        EnterpriseAddress: EnterpriseAddress,
        EnterpriseTagLine: EnterpriseTagLine,
         CampaignName: CleanAyohaPointType(AyohaPointType),
         TypeCRDB: TypeCRDB,
CampaignCode: CampaignCode,
AyohaPoint: AyohaPoint,
ModifiedTypeCRDB: ModifiedTypeCRDB,      
ModifiedMembershipCardName: ModifiedMembershipCardName
    };

    Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionDetailContent')
        .setHtml(buildAyohaPointTransactionDetailHtmlPremium(_AyohaReward_PointTransactionDetail_CurrentData));



    _FloatPanel_AyohaReward_PointTransactionDetail.show();
    // ✅ push browser back (ikut style kau)
    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
      AyohaBrowserBack.push('FloatPanel_AyohaReward_PointTransactionDetail', function () {
     
        FloatPanel_AyohaReward_PointTransactionDetailHide(true);
      });
    }





    isFloatPanel_AyohaReward_PointTransactionDetailOpen = 'Y';
//alert('FloatPanel_AyohaReward_PointTransactionDetailShowTransactionDetail called with Order No: ' + _AyohaReward_PointTransactionDetail_CurrentData.PaymentNo);   

   // alert('Showing transaction detail for Order No: ' + PaymentNoDisplay(OrderNo) + ', Payment No: ' + Ayoha_PointDetailSafe(PaymentNoDisplay || PaymentNo));

var _value = _AyohaReward_PointTransactionDetail_CurrentData.PaymentNo;
//alert('Payment No: ' + _value);
if (_value){
if (_value.indexOf('PN') === 0) {
   // Ext.Msg.alert('Info', 'Text start dengan PN');
  //   id: 'btnFloatPanel_AyohaReward_PointTransactionDetailViewDetail',
    
      Ext.getCmp('btnFloatPanel_AyohaReward_PointTransactionDetailViewDetail').setHidden(false);
}
}



}




function FloatPanel_AyohaReward_PointTransactionDetailHide(fromBack,animCfg) {

  



    
    if (isFloatPanel_AyohaReward_PointTransactionDetailOpen == 'Y') {
       
      

        if (animCfg) {
            _FloatPanel_AyohaReward_PointTransactionDetail.hide(Ext.fx.Animation(animCfg));
          } else {
            _FloatPanel_AyohaReward_PointTransactionDetail.hide();
          }
         isFloatPanel_AyohaReward_PointTransactionDetailOpen = 'N';
        
        
          // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
          if (fromBack !== true) {
            AyohaBrowserBack.close('FloatPanel_AyohaReward_PointTransactionDetail');
          }
          _FloatPanel_AyohaReward_PointTransactionDetail.destroy();
          _FloatPanel_AyohaReward_PointTransactionDetail = null;
    }
 

 
}





function CleanAyohaPointType(value) {
    var raw = value || '';

    raw = String(raw);

    // tukar <br> jadi space dulu
    raw = raw.replace(/<br\s*\/?>/gi, ' ');

    // decode html entity kalau ada
    raw = Ext.String.htmlDecode(raw);

    // buang semua html tag
    raw = raw.replace(/<[^>]*>/g, '');

    // kemaskan spacing
    raw = raw.replace(/\s+/g, ' ').trim();

    return raw;
}