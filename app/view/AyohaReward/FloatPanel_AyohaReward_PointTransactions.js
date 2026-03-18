Ext.define('BuskartApp.view.AyohaReward.FloatPanel_AyohaReward_PointTransactions', {

});

var _FloatPanel_AyohaReward_PointTransactions= null;


var isFloatPanel_AyohaReward_PointTransactionsOpen = 'N';

var _FloatPanel_AyohaReward_PointTransactions_isFirstLoad = "N";




function FloatPanel_AyohaReward_PointTransactionsCreateIfNeeded() {
    if (_FloatPanel_AyohaReward_PointTransactions && !_FloatPanel_AyohaReward_PointTransactions.destroyed) return;


     _FloatPanel_AyohaReward_PointTransactions =
     Ext.create('Ext.Container', {
id: 'FloatPanel_AyohaReward_PointTransactionsID',
         floated: true,
        centered: true,
        fullscreen: true,
      //  closeAction: 'hide',
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
         //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
       
 style: ayohaThemeColor_Hero(),
           listeners: {
 

            // ✅ kalau user tap mask, close macam standard
            beforehide: function () {
              // kalau hide dipanggil bukan dari function kita, block dulu
              // (optional: boleh allow kalau kau nak)
              return true;
            }
          },


         items: [


          
             {
                 xtype: 'container',
                 width: '100%',
                 height: '100%',
                 style: "background-color: transparent;",            
                 layout: {
                     type: 'vbox',
                     pack: 'start',
                     align: 'center'
                 },
                 items: [
                    {

                        xtype: 'container',
                        width: '100%',
                       height: ayoha_HeaderHeight(),
                   style: "background-color: transparent;",
                        docked: 'top',
                      
                        id: 'containerFloatPanel_AyohaReward_PointTransactionsHeader1',
                        
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center',
                        },
                        // hidden:true,
                        items:
                               [
        
        
        
        
        
        
        
        
                                   {
                                       xtype: 'button',
                                       id: 'btnFloatPanel_AyohaReward_PointTransactionsBack',
                                       height: 30,
                                         width: 65,
                                         margin: '0 0 0 10',
                                         // iconCls: 'list',
                                         html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                       handler: function () {

                                        FloatPanel_AyohaReward_PointTransactionsHide(false)
                                        //    _FloatPanel_AyohaReward_PointTransactions.hide(Ext.fx.Animation({
                                        //        type: 'slideOut',
                                        //        direction: 'left',
                                        //        easing: 'cubic-bezier(.7,0,.7,1)',
                                        //        duration: 250
        
                                        //    }));
                                        //    isFloatPanel_AyohaReward_PointTransactionsOpen = 'N';
                                        //    _FloatPanel_AyohaReward_PointTransactions_isFirstLoad = "N";
                                        //    RemovePages("FloatPanel_AyohaReward_PointTransactionsHide()");
                                       }
                                   },
        
                                              {
                                                  xtype: 'spacer',
        
                                              },
        
                                              {
                                                  xtype: 'component',
                                                  margin: '0  0 0 0',
                                                 // zIndex: 100,
                                                 // html: '<font size=2 color=white><b>Ayoha Points(AP)</b></font>',
                                                   html:ayohaTheme_HeaderText('Ayoha Points(AP)'),
                                                //  ui: 'plain',
                                                  handler: function () {
                                                     FloatPanel_AyohaReward_PointTransactionsHide(false);
                                                    //   _FloatPanel_AyohaReward_PointTransactions.hide(Ext.fx.Animation({
                                                    //       type: 'slideOut',
                                                    //       direction: 'right',
                                                    //       easing: 'cubic-bezier(.7,0,.7,1)',
                                                    //       duration: 250
        
                                                    //   }));
                                                    //   isFloatPanel_AyohaReward_PointTransactionsOpen = 'N';
                                                    //   _FloatPanel_AyohaReward_PointTransactions_isFirstLoad = "N";
                                                    //   RemovePages("FloatPanel_AyohaReward_PointTransactionsHide()");
                                                  }
                                              },
         {
                                                  xtype: 'spacer',
                                                  width:20
        
                                              },
        
                                    {
                                        xtype: 'button',
                                        id: 'btnbtnFloatPanel_AyohaReward_PointTransactionsBacksLogo',
                                        height: 35,
                                        width: 65,
                                        hidden: true,
                                        // iconCls: 'list',
                                        margin: '-5 3 0 0',
                                        html: '<div><img src="resources/icons/Logo/LogoWhiteSimplifed.png" width="25" height="25" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {
                                              FloatPanel_AyohaReward_PointTransactionsHide(false);
                                            // _FloatPanel_AyohaReward_PointTransactions.hide(Ext.fx.Animation({
                                            //     type: 'slideOut',
                                            //     direction: 'right',
                                            //     easing: 'cubic-bezier(.7,0,.7,1)',
                                            //     duration: 250
        
                                            // }));
                                            // isFloatPanel_AyohaReward_PointTransactionsOpen = 'N';
                                            // _FloatPanel_AyohaReward_PointTransactions_isFirstLoad = "N";
                                            // RemovePages("FloatPanel_AyohaReward_PointTransactionsHide()");
                                        }
                                    },
        
                                                     
                                                   
        
        
        
        
        
        
        
        
        
                               ]
        
                    },
        
                  
{
    xtype: 'container',
    margin: '4 0 6 0',
    width: '100%',
    style: 'background-color: transparent;',
    height: 145,
    id: 'containerFloatPanel_AyohaReward_PointTransactionsPointsCollected',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
    },
    items: [
        {
            xtype: 'component',
            id: 'htmlFloatPanel_AyohaReward_PointTransactionsPointsCollected',
            width: '100%',
            height: 135,
            html: buildAyohaPointCollectedHtmlPremium(AppState.MainDashboard.AyohaPoint)
        }
    ]
},




{
    xtype: 'container',
    id: 'containerFloatPanel_AyohaReward_PointTransactionsMasterHeaderTop',
    width: '95%',
    height: 58,
    margin: ' 0 0 0 0',
    style: 'background-color: transparent;',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'
    },
    items: [
        {
            xtype: 'container',
            id: 'containerFloatPanel_AyohaReward_PointTransactionsMasterHeader',
            width: '100%',
            height: 58,
            style:
                'position:relative;' +
                'background:linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(248,245,252,0.94) 100%);' +
                'border:1px solid rgba(255,255,255,0.75);' +
                'border-radius:18px 18px 0 0;' +
                'box-shadow:0 10px 26px rgba(44,0,90,0.16), inset 0 1px 0 rgba(255,255,255,0.85);',
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'center'
            },
            items: [
                {
                    xtype: 'component',
                    width: 36,
                    height: 36,
                    margin: '0 0 0 10',
                    id: 'htmlFloatPanel_AyohaReward_PointTransactionsMasterHeaderIcon',
                    html:
                        '<div style="' +
                            'width:36px;height:36px;border-radius:12px;' +
                            'background:linear-gradient(180deg,#FFE9A3 0%,#FFC94F 100%);' +
                            'box-shadow:0 8px 18px rgba(255,194,45,0.24), inset 0 1px 0 rgba(255,255,255,0.60);' +
                            'display:flex;align-items:center;justify-content:center;position:relative;">' +
                                '<div style="position:absolute;top:6px;left:8px;width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,0.38);filter:blur(1px);"></div>' +
                                '<img src="resources/icons/transaction01.png" width="16" height="16" style="filter:drop-shadow(0 1px 0 rgba(255,255,255,0.35));">' +
                        '</div>'
                },
                {
                    xtype: 'component',
                    flex: 1,
                    margin: '0 0 0 10',
                    id: 'htmlFloatPanel_AyohaReward_PointTransactionsMasterHeaderTxt',
                    html:
                        '<div style="line-height:1.1;">' +
                            '<div style="font-size:13px;font-weight:800;color:#3A125D;letter-spacing:0.2px;">Ayoha Point Transaction</div>' +
                            '<div style="font-size:10px;color:#8C7AA5;margin-top:3px;">Track your earned & redeemed points</div>' +
                        '</div>'
                },
                {
                    xtype: 'component',
                    width: 26,
                    height: 26,
                    margin: '0 8 0 0',
                    html:
                        '<div style="text-align:center;color:rgba(136,102,177,0.55);font-size:10px;">✦</div>'
                },
                {
                    xtype: 'button',
                    id: 'btn_FloatPanel_AyohaReward_PointTransactionsMasterHeader_Maximize',
                    margin: '0 10 0 0',
                    height: 34,
                    width: 64,
                    ui: 'plain',
                    style:
                        'border-radius:12px;' +
                        'background:linear-gradient(180deg,#FFFFFF 0%,#F3ECFB 100%);' +
                        'border:1px solid rgba(136,102,177,0.18);' +
                        'box-shadow:0 6px 14px rgba(72,20,130,0.10);',
                    html:
                        '<div style="position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;">' +
                            '<div style="position:absolute;top:5px;right:6px;color:rgba(255,201,79,0.75);font-size:8px;">✦</div>' +
                            '<img src="resources/icons/filterPurpleThree.png" width="18" height="18">' +
                        '</div>',
                    handler: function () {
                        FloatPanel_YearOnlyShow();
                    }
                },
                {
                    xtype: 'button',
                    id: 'btn_FloatPanel_AyohaReward_PointTransactionsMasterHeader_Minimize',
                    hidden: true,
                    margin: '0 10 0 0',
                    height: 34,
                    width: 34,
                    ui: 'plain',
                    style:
                        'border-radius:12px;' +
                        'background:linear-gradient(180deg,#FFFFFF 0%,#F3ECFB 100%);' +
                        'border:1px solid rgba(136,102,177,0.18);' +
                        'box-shadow:0 6px 14px rgba(72,20,130,0.10);',
                    html: '<img src="resources/icons/minimizepurple.png" width="16" height="16">',
                    handler: function () {
                        Ext.getCmp('btn_FloatPanel_AyohaReward_PointTransactionsMasterHeader_Minimize').setHidden(true);
                        Ext.getCmp('btn_FloatPanel_AyohaReward_PointTransactionsMasterHeader_Maximize').setHidden(false);
                        Ext.getCmp('containerFloatPanel_AyohaReward_PointTransactionsCompanyLogoHeaderMaster').setHidden(false);
                        var a = adjustHeight();
                        Ext.getCmp('List_FloatPanel_AyohaReward_PointTransactions_AyohaRewardPointHistory').setHeight(a);
                    }
                }
            ]
        }
    ]
},



      {
          xtype: 'container',
    id: 'containerFloatPanel_AyohaReward_PointTransactions_AyohaPointHistory',
     style: 'background-color: transparent;',
    // style:
    //     'background:linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(250,248,252,0.96) 100%);' +
    //     'border-radius:0 0 18px 18px;' +
    //     'box-shadow:0 12px 28px rgba(44,0,90,0.12);',
    margin: '0 0 0 0',
    height: '100%',
    width: '95%',
          layout: {
              type: 'vbox',
              pack: 'start',
              align: 'center'

          },
          items: [
             


{
    xtype: 'list',
    store: _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore,
    id: 'List_FloatPanel_AyohaReward_PointTransactions_AyohaRewardPointHistory',
    mode: 'SINGLE',
    disableSelection: true,
    grouped: true,
    userCls: 'ayohaPointHistoryListPlain ayohaPointHistoryListPremium',
    style: 'background:transparent;',
    scrollable: {
        direction: 'vertical',
        indicators: {
            y: { autoHide: true },
            x: { autoHide: true }
        }
    },
    groupHeader: {
        tpl: [
            '{name:this.cleanGroup} ({count})',
            {
                cleanGroup: function (name) {
                    if (!name) {
                        return '';
                    }

                    return name.indexOf('|') !== -1 ? name.split('|')[1] : name;
                }
            }
        ]
    },
    listeners: {
        itemsingletap: function (dataview, index, target, record, e, eOpts) {

            FloatPanel_AyohaReward_PointTransaction_ShowTransactionDetail(
                record.get('TotalStampEarn'),
                record.get('ItemCartCode'),
                record.get('MembershipCardCode_AyohaStore_Order'),
                record.get('AyohaPointType'),
                record.get('GUIDRow'),
                record.get('PaymentNo'),
                record.get('EnterpriseLogo'),
                record.get('PointAmountEquation'),
                record.get('PaymentAmount'),
                record.get('PaymentNoDisplay'),
                record.get('MembershipCardImg'),
                record.get('MembershipCardName'),
                record.get('PaymentNote'),
                record.get('EnterpriseName'),
                record.get('EnterpriseAccNo'),
                record.get('CreatedDate'),
                record.get('OrderNo'),
                record.get('CreatedBy'),
                record.get('EnterpriseAddress'),
                record.get('EnterpriseTagLine'),
                record.get('CampaignName'),
                record.get('TypeCRDB'),
                record.get('CampaignCode'),
                record.get('AyohaPoint'),
                record.get('ModifiedTypeCRDB'),
                record.get('ModifiedMembershipCardName')
            );

        }
    },

    itemTpl: new Ext.XTemplate(

    '<div style="width:100%;box-sizing:border-box;padding:14px 0 14px 18px;'
    + 'border-bottom:1px solid rgba(123,84,170,0.10);background:transparent;">'

        + '<div style="position:relative;width:100%;min-height:58px;box-sizing:border-box;padding-right:116px;">'

            + '<div style="min-width:0;padding-right:8px;">'
                + '<div style="font-family:Arial,sans-serif;font-size:13px;font-weight:800;color:#1F2430;line-height:18px;">'
                    + '{ModifiedMembershipCardName}'
                + '</div>'

                + '<div style="font-family:Arial,sans-serif;font-size:12px;color:#111827;line-height:17px;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'
                    + '{ModifiedEnterpriseName}'
                + '</div>'

                + '<div style="font-family:Arial,sans-serif;font-size:11px;color:#6B7280;line-height:16px;margin-top:3px;">'
                    + '{ModifiedCreatedDate_DateOnly} {ModifiedCreatedDate_TimeOnly}'
                + '</div>'
            + '</div>'

            + '<div style="position:absolute;top:0;right:0;display:flex;justify-content:flex-end;align-items:flex-start;">'
                + '{[this.renderPointBadge(values)]}'
            + '</div>'

        + '</div>'

    + '</div>',

//    itemTpl: new Ext.XTemplate(

//     '<div style="width:100%;box-sizing:border-box;padding:14px 0px 14px 18px;'
//     + 'border-bottom:1px solid rgba(123,84,170,0.10);background:transparent;">'

//         + '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;width:100%;">'

//             + '<div style="flex:1;min-width:0;padding-right:10px;">'
//                 + '<div style="font-family:Arial,sans-serif;font-size:13px;font-weight:800;color:#1F2430;line-height:18px;">'
//                     + '{ModifiedMembershipCardName}'
//                 + '</div>'

//                 + '<div style="font-family:Arial,sans-serif;font-size:12px;color:#111827;line-height:17px;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'
//                     + '{ModifiedEnterpriseName}'
//                 + '</div>'

//                 + '<div style="font-family:Arial,sans-serif;font-size:11px;color:#6B7280;line-height:16px;margin-top:3px;">'
//                     + '{ModifiedCreatedDate_DateOnly} {ModifiedCreatedDate_TimeOnly}'
//                 + '</div>'
//             + '</div>'

//             + '<div style="width:auto;min-width:auto;margin-left:auto;display:flex;justify-content:flex-end;align-items:flex-start;flex-shrink:0;padding-right:0px;padding-top:2px;">'
//                 + '{[this.renderPointBadge(values)]}'
//             + '</div>'

//         + '</div>'

//     + '</div>',

        {
            renderPointBadge: function (values) {
                var meta = this.getPointBadgeMetaByOriginalRule(values);

                // return ''
                //     + '<div style="display:inline-flex;align-items:center;justify-content:center;gap:6px;'
                //     + 'min-width:96px;max-width:110px;padding:7px 10px;border-radius:999px;'
                //     + 'background:' + meta.bg + ';'
                //     + 'border:1px solid ' + meta.border + ';'
                //     + 'box-sizing:border-box;'
                //     + 'box-shadow:inset 0 1px 0 rgba(255,255,255,0.55);'
                //     + 'font-family:Arial,sans-serif;font-size:12px;font-weight:800;'
                //     + 'color:' + meta.color + ';line-height:14px;white-space:nowrap;text-align:center;">'
                //         + '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:' + meta.dot + ';flex-shrink:0;"></span>'
                //         + '<span style="display:inline-block;overflow:hidden;text-overflow:ellipsis;">' + Ext.String.htmlEncode(meta.raw) + '</span>'
                //     + '</div>';

return ''
    + '<div style="display:inline-flex;align-items:center;justify-content:center;gap:6px;'
    + 'padding:7px 12px;border-radius:999px;'
    + 'background:' + meta.bg + ';'
    + 'border:1px solid ' + meta.border + ';'
    + 'box-sizing:border-box;'
    + 'box-shadow:inset 0 1px 0 rgba(255,255,255,0.55);'
    + 'font-family:Arial,sans-serif;font-size:12px;font-weight:800;'
    + 'color:' + meta.color + ';line-height:14px;white-space:nowrap;text-align:center;">'
        + '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:' + meta.dot + ';flex-shrink:0;"></span>'
        + '<span style="display:inline-block;">' + Ext.String.htmlEncode(meta.raw) + '</span>'
    + '</div>';
            },

            getPointBadgeMetaByOriginalRule: function (values) {
                var str = (values.TypeCRDB || '').toString();
                var campaignCode = (values.CampaignCode || '').toString();
                var ayohaPoint = this.normalizePointAmount(values.AyohaPoint);
                var raw = '0 Point';

                var bg = 'linear-gradient(180deg,#F9FAFB 0%,#F3F4F6 100%)';
                var border = '#E5E7EB';
                var color = '#374151';
                var dot = '#9CA3AF';

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
                    raw = values.PointAmountEquation || values.ModifiedTypeCRDB || '';
                    raw = this.cleanPointText(raw);

                    if (!raw) {
                        raw = '0 Point';
                    }

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

                return {
                    raw: raw,
                    bg: bg,
                    border: border,
                    color: color,
                    dot: dot
                };
            },

            normalizePointAmount: function (value) {
                var raw = value || '0';
                raw = String(raw);
                raw = raw.replace(/<br\s*\/?>/gi, ' ');
                raw = raw.replace(/&nbsp;/gi, ' ');
                raw = Ext.String.htmlDecode(raw);
                raw = raw.replace(/<[^>]*>/g, '');
                raw = raw.replace(/\s+/g, ' ').trim();
                raw = raw.replace(/^[+-]/, '').trim();
                raw = raw.replace(/\s*Point\s*$/i, '').trim();

                if (!raw) {
                    raw = '0';
                }

                return raw;
            },

            cleanPointText: function (value) {
                var raw = value || '';
                raw = String(raw);
                raw = raw.replace(/<br\s*\/?>/gi, ' ');
                raw = raw.replace(/&nbsp;/gi, ' ');
                raw = Ext.String.htmlDecode(raw);
                raw = raw.replace(/<[^>]*>/g, '');
                raw = raw.replace(/\s+/g, ' ').trim();
                return raw;
            }
        }
    ),

    emptyText: '<div style="padding:20px;text-align:center;color:#6B7280;">No Transactions</div>',
    width: '100%',
    height: '100%'
}



//               {
//     xtype: 'list',
//     store: _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore,
//     id: 'List_FloatPanel_AyohaReward_PointTransactions_AyohaRewardPointHistory',
//     mode: 'SINGLE',
//     disableSelection: true,
//     grouped: true,
//     //cls: 'ayohaPointHistoryListPlain ayohaPointHistoryListPremium',
//     userCls: 'ayohaPointHistoryListPlain ayohaPointHistoryListPremium',
//     style: 'background:transparent;',
//     scrollable: {
//         direction: 'vertical',
//         indicators: {
//             y: { autoHide: true },
//             x: { autoHide: true }
//         }
//     },

//     itemTpl: new Ext.XTemplate(

//         '<div onclick="FloatPanel_AyohaReward_PointTransaction_ShowTransactionDetail({TotalStampEarn},'
//         + "'" + '{ItemCartCode}' + "'" + ','
//         + "'" + '{MembershipCardCode_AyohaStore_Order}' + "'" + ','
//         + "'" + '{AyohaPointType}' + "'" + ','
//         + "'" + '{GUIDRow}' + "'" + ','
//         + "'" + '{PaymentNo}' + "'" + ','
//         + "'" + '{EnterpriseLogo}' + "'" + ','
//         + "'" + '{PointAmountEquation}' + "'" + ','
//         + "'" + '{PaymentAmount}' + "'" + ','
//         + "'" + '{PaymentNoDisplay}' + "'" + ','
//         + "'" + '{MembershipCardImg}' + "'" + ','
//         + "'" + '{MembershipCardName}' + "'" + ','
//         + "'" + '{PaymentNote}' + "'" + ','
//         + "'" + '{EnterpriseName}' + "'" + ','
//         + "'" + '{EnterpriseAccNo}' + "'" + ','
//         + "'" + '{CreatedDate}' + "'" + ','
//         + "'" + '{OrderNo}' + "'" + ','
//         + "'" + '{CreatedBy}' + "'" + ','
//         + "'" + '{EnterpriseAddress}' + "'" + ','
//         + "'" + '{EnterpriseTagLine}' + "'" + ','
//         + "'" + '{CampaignName}' + "'" + ','
//         + "'" + '{TypeCRDB}' + "'" + ','
//         + "'" + '{CampaignCode}' + "'" + ','
//         + "'" + '{AyohaPoint}' + "'" + ','
//          + "'" + '{ModifiedTypeCRDB}' + "'" + ')" '
//         + 'style="width:100%;box-sizing:border-box;padding:14px 6px 14px 18px;'
//         + 'border-bottom:1px solid rgba(123,84,170,0.10);background:transparent;">'

//             + '<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;">'

//                 + '<div style="flex:1;min-width:0;padding-right:4px;">'
//                     + '<div style="font-family:Arial,sans-serif;font-size:13px;font-weight:800;color:#1F2430;line-height:18px;">'
//                         + '{ModifiedMembershipCardName}'
//                     + '</div>'

//                     + '<div style="font-family:Arial,sans-serif;font-size:12px;color:#111827;line-height:17px;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'
//                         + '{ModifiedEnterpriseName}'
//                     + '</div>'

//                     + '<div style="font-family:Arial,sans-serif;font-size:11px;color:#6B7280;line-height:16px;margin-top:3px;">'
//                         + '{ModifiedCreatedDate_DateOnly} {ModifiedCreatedDate_TimeOnly}'
//                     + '</div>'
//                 + '</div>'

//                 + '<div style="width:118px;min-width:118px;display:flex;justify-content:flex-end;align-items:center;flex-shrink:0;padding-right:2px;">'
//                     + '{[this.renderPointBadge(values)]}'
//                 + '</div>'

//             + '</div>'

//         + '</div>',

//         {
//             // cleanPointText: function (value) {
//             //     var raw = value || '';
//             //     raw = String(raw);

//             //     raw = raw.replace(/<br\s*\/?>/gi, ' ');
//             //     raw = raw.replace(/&nbsp;/gi, ' ');
//             //     raw = Ext.String.htmlDecode(raw);
//             //     raw = raw.replace(/<[^>]*>/g, '');
//             //     raw = raw.replace(/\s+/g, ' ').trim();

//             //     return raw;
//             // },

//             // renderPointBadge: function (values) {
//             //     var raw = values.PointAmountEquation || values.ModifiedTypeCRDB || '';
//             //     raw = this.cleanPointText(raw);

//             //     if (!raw) {
//             //         raw = '0 Point';
//             //     }

//             //     var pointType = (values.AyohaPointType || '').toString().toLowerCase();
//             //     var detectText = (raw + ' ' + pointType).toLowerCase();

//             //     var isRedeem =
//             //         raw.indexOf('-') === 0 ||
//             //         detectText.indexOf('redeem') !== -1 ||
//             //         detectText.indexOf('redemption') !== -1 ||
//             //         detectText.indexOf('debit') !== -1 ||
//             //         detectText.indexOf('use point') !== -1 ||
//             //         detectText.indexOf('spent') !== -1;

//             //     var isEarn =
//             //         raw.indexOf('+') === 0 ||
//             //         detectText.indexOf('earn') !== -1 ||
//             //         detectText.indexOf('credit') !== -1 ||
//             //         detectText.indexOf('check-in') !== -1 ||
//             //         detectText.indexOf('complimentary') !== -1 ||
//             //         detectText.indexOf('follower') !== -1 ||
//             //         detectText.indexOf('reward') !== -1 ||
//             //         detectText.indexOf('bonus') !== -1;

//             //     var bg = 'linear-gradient(180deg,#F9FAFB 0%,#F3F4F6 100%)';
//             //     var border = '#E5E7EB';
//             //     var color = '#374151';
//             //     var dot = '#9CA3AF';

//             //     if (isEarn) {
//             //         bg = 'linear-gradient(180deg,#F0FDF4 0%,#DCFCE7 100%)';
//             //         border = '#BBF7D0';
//             //         color = '#15803D';
//             //         dot = '#22C55E';
//             //     }

//             //     if (isRedeem) {
//             //         bg = 'linear-gradient(180deg,#FEF2F2 0%,#FEE2E2 100%)';
//             //         border = '#FECACA';
//             //         color = '#DC2626';
//             //         dot = '#EF4444';
//             //     }

//             //     return ''
//             //         + '<div style="display:inline-flex;align-items:center;justify-content:center;gap:6px;'
//             //         + 'min-width:96px;max-width:110px;padding:7px 10px;border-radius:999px;'
//             //         + 'background:' + bg + ';'
//             //         + 'border:1px solid ' + border + ';'
//             //         + 'box-sizing:border-box;'
//             //         + 'box-shadow:inset 0 1px 0 rgba(255,255,255,0.55);'
//             //         + 'font-family:Arial,sans-serif;font-size:12px;font-weight:800;'
//             //         + 'color:' + color + ';line-height:14px;white-space:nowrap;text-align:center;">'
//             //             + '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:' + dot + ';flex-shrink:0;"></span>'
//             //             + '<span style="display:inline-block;overflow:hidden;text-overflow:ellipsis;">' + Ext.String.htmlEncode(raw) + '</span>'
//             //         + '</div>';
//             // }




//             renderPointBadge: function (values) {
//     var meta = this.getPointBadgeMetaByOriginalRule(values);

//     return ''
//         + '<div style="display:inline-flex;align-items:center;justify-content:center;gap:6px;'
//         + 'min-width:96px;max-width:110px;padding:7px 10px;border-radius:999px;'
//         + 'background:' + meta.bg + ';'
//         + 'border:1px solid ' + meta.border + ';'
//         + 'box-sizing:border-box;'
//         + 'box-shadow:inset 0 1px 0 rgba(255,255,255,0.55);'
//         + 'font-family:Arial,sans-serif;font-size:12px;font-weight:800;'
//         + 'color:' + meta.color + ';line-height:14px;white-space:nowrap;text-align:center;">'
//             + '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:' + meta.dot + ';flex-shrink:0;"></span>'
//             + '<span style="display:inline-block;overflow:hidden;text-overflow:ellipsis;">' + Ext.String.htmlEncode(meta.raw) + '</span>'
//         + '</div>';
// },

// getPointBadgeMetaByOriginalRule: function (values) {
//     var str = (values.TypeCRDB || '').toString();
//     var campaignCode = (values.CampaignCode || '').toString();
//     var ayohaPoint = this.normalizePointAmount(values.AyohaPoint);
//     var raw = '0 Point';

//     // default neutral
//     var bg = 'linear-gradient(180deg,#F9FAFB 0%,#F3F4F6 100%)';
//     var border = '#E5E7EB';
//     var color = '#374151';
//     var dot = '#9CA3AF';

//     // =========================
//     // FOLLOW ORIGINAL RULE
//     // =========================
//     if (str === 'Credit') {
//         raw = '+' + ayohaPoint + ' Point';

//         // original special rules
//         if (campaignCode === 'AyohaPointRedemptionCancel') {
//             raw = '+' + ayohaPoint + ' Point';
//         }

//         if (campaignCode === '001-AP_CheckIn') {
//             raw = '+' + ayohaPoint + ' Point';
//         }

//         bg = 'linear-gradient(180deg,#F0FDF4 0%,#DCFCE7 100%)';
//         border = '#BBF7D0';
//         color = '#15803D';
//         dot = '#22C55E';
//     }
//     else if (str === 'Debit') {
//         raw = '-' + ayohaPoint + ' Point';

//         // original special rule
//         if (campaignCode === 'AyohaPointRedemption') {
//             raw = '-' + ayohaPoint + ' Point';
//         }

//         bg = 'linear-gradient(180deg,#FEF2F2 0%,#FEE2E2 100%)';
//         border = '#FECACA';
//         color = '#DC2626';
//         dot = '#EF4444';
//     }
//     else {
//         // fallback kalau data tak lengkap
//         raw = values.PointAmountEquation || values.ModifiedTypeCRDB || '';
//         raw = this.cleanPointText(raw);

//         if (!raw) {
//             raw = '0 Point';
//         }

//         if (raw.indexOf('+') === 0) {
//             bg = 'linear-gradient(180deg,#F0FDF4 0%,#DCFCE7 100%)';
//             border = '#BBF7D0';
//             color = '#15803D';
//             dot = '#22C55E';
//         }

//         if (raw.indexOf('-') === 0) {
//             bg = 'linear-gradient(180deg,#FEF2F2 0%,#FEE2E2 100%)';
//             border = '#FECACA';
//             color = '#DC2626';
//             dot = '#EF4444';
//         }
//     }

//     return {
//         raw: raw,
//         bg: bg,
//         border: border,
//         color: color,
//         dot: dot
//     };
// },

// normalizePointAmount: function (value) {
//     var raw = value || '0';
//     raw = String(raw);

//     raw = raw.replace(/<br\s*\/?>/gi, ' ');
//     raw = raw.replace(/&nbsp;/gi, ' ');
//     raw = Ext.String.htmlDecode(raw);
//     raw = raw.replace(/<[^>]*>/g, '');
//     raw = raw.replace(/\s+/g, ' ').trim();

//     // buang + / - depan kalau ada
//     raw = raw.replace(/^[+-]/, '').trim();

//     // buang perkataan Point kalau dah ada
//     raw = raw.replace(/\s*Point\s*$/i, '').trim();

//     if (!raw) {
//         raw = '0';
//     }

//     return raw;
// },

// cleanPointText: function (value) {
//     var raw = value || '';
//     raw = String(raw);

//     raw = raw.replace(/<br\s*\/?>/gi, ' ');
//     raw = raw.replace(/&nbsp;/gi, ' ');
//     raw = Ext.String.htmlDecode(raw);
//     raw = raw.replace(/<[^>]*>/g, '');
//     raw = raw.replace(/\s+/g, ' ').trim();

//     return raw;
// }
//         }
//     ),

//     emptyText: '<div style="padding:20px;text-align:center;color:#6B7280;">No Transactions</div>',
//     width: '100%',
//     height: '100%'
// }






          ]

      },









                 ]

             },




         ]















     });
}








function FloatPanel_AyohaReward_PointTransactionsShow() {
   
    // Ext.Viewport.remove(_FloatPanel_AyohaReward_PointTransactions);
    // this.overlay = Ext.Viewport.add(FloatPanel_AyohaReward_PointTransactions());
    // this.overlay.show();
    // AddRoutePages("FloatPanel_AyohaReward_PointTransactionsHide()");






    FloatPanel_AyohaReward_PointTransactionsCreateIfNeeded();


    _FloatPanel_AyohaReward_PointTransactions.show();
    // ✅ push browser back (ikut style kau)
    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
      AyohaBrowserBack.push('FloatPanel_AyohaReward_PointTransactions', function () {
     
        FloatPanel_AyohaReward_PointTransactionsHide(true);
      });
    }





    isFloatPanel_AyohaReward_PointTransactionsOpen = 'Y';





    FloatPanel_AyohaReward_PointTransactionsAdjustHeight();
   
    FloatPanel_AyohaReward_PointTransactions_AyohaRewardPointLoadBySubscriberAccNoStore();




if(isFloatPanel_AyohaStore_CheckOutOpen=="Y"){
    Ext.getCmp('FloatPanel_AyohaReward_PointTransactionsID').setZIndex(400);
}
Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsPointsCollected')
    .setHtml(buildAyohaPointCollectedHtmlPremium(AppState.MainDashboard.AyohaPoint));
}





function FloatPanel_AyohaReward_PointTransactionsHide(fromBack,animCfg) {

  



    
    if (isFloatPanel_AyohaReward_PointTransactionsOpen == 'Y') {
       
      

        if (animCfg) {
            _FloatPanel_AyohaReward_PointTransactions.hide(Ext.fx.Animation(animCfg));
          } else {
            _FloatPanel_AyohaReward_PointTransactions.hide();
          }
         isFloatPanel_AyohaReward_PointTransactionsOpen = 'N';
         _FloatPanel_AyohaReward_PointTransactions_isFirstLoad = "N";
        
        
          // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
          if (fromBack !== true) {
            AyohaBrowserBack.close('FloatPanel_AyohaReward_PointTransactions');
          }
          _FloatPanel_AyohaReward_PointTransactions.destroy();
          _FloatPanel_AyohaReward_PointTransactions = null;
    }
 

 
}





function FloatPanel_AyohaReward_PointTransactionsAdjustHeight() {

    return;
    var y = parseInt(screen.height);


    var x = parseInt(window.innerHeight);
    isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder='N';

    var newHeights = x - 196;
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;

    Ext.getCmp('FloatPanel_AyohaReward_PointTransactionsID').setHeight(x + 20);
    Ext.getCmp('List_FloatPanel_AyohaReward_PointTransactions_AyohaRewardPointHistory').setHeight(newHeights);


}











function FloatPanel_AyohaReward_PointTransactions_AyohaRewardPointLoadBySubscriberAccNoStore() {


    
   

     Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsMasterHeaderTxt').setHtml(' <div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-weight:bold;font-size:12px;color:black">Ayoha Point Transaction - Year ' + GetCurrentYear() + '</div>');
  
  
 
    //Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsMasterHeaderTxt').setHtml('<font size=1 color=black>Ayoha Point Transaction - Year ' + GetCurrentYear() + '</font>');

    _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getProxy().setExtraParam('Year', GetCurrentYear());
    _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardPoint/AyohaRewardPointLoadBySubscriberAccNo');
    _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
              //  alert('Store loaded successfully, total records: ' + records.length);
    
                var store = records[0]; // Access only the first record
                var count = _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getCount();
                if (count > 0) {
                  
                   // Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsPointsCollected').setHtml('<div  style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>' + store.get('AyohaPoint_Yearly') + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-40px 0px 0px 0px"><b>Ayoha Point</b></div>');
        
                } else {
                  //  Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsPointsCollected').setHtml('<div  style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>0</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-40px 0px 0px 0px"><b>Ayoha Point</b></div>');
        
                }
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide(false);
            }
        }
    });




    // var task = Ext.create('Ext.util.DelayedTask', function () {

    //     var count = _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getCount();
    //     if (count > 0) {
    //         var store = _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getAt(0);
    //         Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsPointsCollected').setHtml('<div  style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>' + store.get('AyohaPoint_Yearly') + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-40px 0px 0px 0px"><b>Ayoha Point</b></div>');

    //     } else {
    //         Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsPointsCollected').setHtml('<div  style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>0</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-40px 0px 0px 0px"><b>Ayoha Point</b></div>');

    //     }
      
    // });
    // task.delay(1000);


    // Ext.Viewport.setMasked(false);




}





function FloatPanel_AyohaReward_PointTransactions_AyohaRewardPointLoadBySubscriberAccNoStore_ByYear(Year) {



 
    //Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsMasterHeaderTxt').setHtml('<font size=1 color=black>Ayoha Point Transaction - Year ' + Year + '</font>');
  
  
     Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsMasterHeaderTxt').setHtml(' <div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-weight:bold;font-size:12px;color:black">Ayoha Point Transaction - Year ' + Year + '</div>');
  
  
 
  
  
  
    FloatPanel_YearOnlyHide(false);
    _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getProxy().setExtraParam('Year', Year);
    _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardPoint/AyohaRewardPointLoadBySubscriberAccNo');
   

  _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
             
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide(false);
            }
            Ext.Viewport.setMasked(false);
        }
    });


















    // var task = Ext.create('Ext.util.DelayedTask', function () {

    //     //_DataStore_EnterprisesLoadByMerchantCategory.load();
    //     var count = _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getCount();
    //     if (count > 0) {
    //         var store = _DataStore_AyohaRewardPointLoadBySubscriberAccNoStore.getAt(0);
    //      //   Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsPointsCollected').setHtml('<div style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>' + store.get('AyohaPoint_Yearly') + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-40px 0px 0px 0px"><b>Ayoha Point</b></div>');

    //     } else {
    //       //  Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransactionsPointsCollected').setHtml('<div style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>0</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-40px 0px 0px 0px"><b>Ayoha Point</b></div>');

    //     }
      
    // });
    // task.delay(500);


    // Ext.Viewport.setMasked(false);




}


function FloatPanel_AyohaReward_PointTransaction_ShowTransactionDetailX(TotalStampEarn,ItemCartCode, MembershipCardCode_AyohaStore_Order, AyohaPointType, GUIDRow, PaymentNo, EnterpriseLogo, PointAmountEquation, PaymentAmount, PaymentNoDisplay, MembershipCardImg, MembershipCardName, PaymentNote, EnterpriseName, EnterpriseAccNo, CreatedDate,OrderNo,CreatedBy,EnterpriseAddress,EnterpriseTagLine,ModifiedMembershipCardName) {
    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanel_AyohaStore_CheckOut";
  
    globalFloatPanel_AyohaStore_CheckOut_EnterpriseAccNo = EnterpriseAccNo;
    glonbalDashboard_SearchMerchantList_FullCompanyAddress=EnterpriseAddress;
    globalFloatPanel_AyohaStore_CheckOut_EnterpriseTagLine = EnterpriseTagLine;

   // localStorage.setItem("EnterpriseAccNo",EnterpriseAccNo);
  //  localStorage.setItem("PaymentNo",PaymentNo);




alert(ModifiedMembershipCardName)

if(AyohaPointType){
    if (AyohaPointType == "(Point Loyalty Card)") {


       // PN-370-152-0-0-72666-0134292934-NoEnterprise
        if (PaymentNo) {
            if (PaymentNo.startsWith('ePN')) {
                FloatPanel_AyohaReward_PointTransaction_eWalletShow(PaymentNo, EnterpriseLogo, PointAmountEquation, PaymentAmount, PaymentNoDisplay, MembershipCardImg, MembershipCardName, PaymentNote, EnterpriseName, EnterpriseAccNo, CreatedDate);
            } 
            if (PaymentNo.startsWith('PN')) {
               // FloatPanel_AyohaReward_PointTransaction_eWalletShow(PaymentNo, EnterpriseLogo, PointAmountEquation, PaymentAmount, PaymentNoDisplay, MembershipCardImg, MembershipCardName, PaymentNote, EnterpriseName, EnterpriseAccNo, CreatedDate);
                FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(TotalStampEarn,ItemCartCode, MembershipCardCode_AyohaStore_Order, OrderNo, EnterpriseName, EnterpriseLogo,CreatedDate);

            } 
            else {
                // FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore(ItemCartCode, MembershipCardCode_AyohaStore_Order);
               
               if(PaymentNo=="NotRequired"){

               }else{
                
                FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(TotalStampEarn,ItemCartCode, MembershipCardCode_AyohaStore_Order, OrderNo, EnterpriseName, EnterpriseLogo, CreatedDate);

               }
               
               
               
            }
        } else {
           
        }
     

       
   

        return;
    }

    if (AyohaPointType == "<font color=purple class=blink_me> <b>Ayoha eWallet Greeting Point! </b></font>") {

        swalFireStampInfo("Opening Account Point,Complementary Point from Ayoha Reward.Com!","resources/icons/Logo/LogoOrangeSimplifed.png");

       return;
    }

    if (AyohaPointType == "(Stamp Loyalty Card)") {
      //  FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore(ItemCartCode, MembershipCardCode_AyohaStore_Order);
       // FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(ItemCartCode, MembershipCardCode_AyohaStore_Order, OrderNo)


        if (PaymentNo) {
            if (PaymentNo.startsWith('PN')) {
                //FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(ItemCartCode, MembershipCardCode_AyohaStore_Order, OrderNo, EnterpriseName, EnterpriseLogo);
                FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(TotalStampEarn,ItemCartCode, MembershipCardCode_AyohaStore_Order, OrderNo, EnterpriseName, EnterpriseLogo);

            } else {

                //FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(ItemCartCode, MembershipCardCode_AyohaStore_Order, OrderNo, EnterpriseName, EnterpriseLogo);
                FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(TotalStampEarn,ItemCartCode, MembershipCardCode_AyohaStore_Order, OrderNo, EnterpriseName, EnterpriseLogo);


            }
        } else {
           
            if(CreatedBy=="Auto-PaidOnline"){
                swalFireStampInfo("Complementary Point from Ayoha Reward.Com!","resources/icons/Logo/LogoOrangeSimplifed.png");
                return;
            }
            if(CreatedBy=="AyohaAdmin"){
                swalFireStampInfo("Opening Account Point,Complementary Point from Ayoha Reward.Com!","resources/icons/Logo/LogoOrangeSimplifed.png");
                return;
            }
            else{
                swalFireStampInfo("Stamp Thru QR Code by Merchant!","resources/icons/stampAnimation.gif");
                return;
            }
            
        }
        
       
        //if (PaymentNo.startsWith('ePN')) {
        //    FloatPanel_AyohaReward_PointTransaction_eWalletShow(PaymentNo, EnterpriseLogo, PointAmountEquation, PaymentAmount, PaymentNoDisplay, MembershipCardImg, MembershipCardName, PaymentNote, EnterpriseName, EnterpriseAccNo, CreatedDate);
        //} else {
           
        //}

       
        return;
    }
    
}
else{
//alert(AyohaPointType)
//alert(ItemCartCode)
}
    var str = AyohaPointType;
    var boolAyohaPointType;
    boolAyohaPointType = str.includes("Ayoha Point Redemption");
    if (boolAyohaPointType) {
        FloatPanel_AyohaReward_RedemptionHistoryShow_FromFloatPanel_AyohaReward_PointTransaction(GUIDRow);
    }
    boolAyohaPointType = str.includes("Winner TAP And Win Contest Point");
    if (boolAyohaPointType) {
        //FloatPanel_AyohaReward_PointTransaction_eWalletShow(PaymentNo, EnterpriseLogo, PointAmountEquation, PaymentAmount, PaymentNoDisplay, MembershipCardImg, MembershipCardName, PaymentNote, EnterpriseName, EnterpriseAccNo, CreatedDate);
        // FloatPanel_AyohaeWallet_Transaction_DetailShow(CreatedDate, EnterpriseName, EnterpriseLogo, EnterpriseAccNo, PaymentNote, TransactionAmount, "AyohaRewardContest_TapAndWin", "NA", "NA", "NA", EnterpriseName, PaymentNo)
        var arrPayNote = PaymentNote.split(".");
        var strPayAmount1 = arrPayNote[1];
        var strPayAmount2 = arrPayNote[2];

        var last = strPayAmount1.charAt(strPayAmount1.length - 1);

      //  console.log(strPayAmount1);
        var modifiedPayAmount = last + '.' + strPayAmount2;

        FloatPanel_AyohaeWallet_Transaction_DetailShow(CreatedDate, EnterpriseName, EnterpriseLogo, EnterpriseAccNo, PaymentNote, modifiedPayAmount, "AyohaRewardContest_TapAndWin", "NA", "NA", "NA", EnterpriseName, PaymentNo)
    }
   
}




function buildAyohaPointCollectedHtmlPremium(totalPoint) {
    var pointValue = parseInt(totalPoint || 0, 10);
    if (isNaN(pointValue)) pointValue = 0;

    var pointDisplay = Ext.util.Format.number(pointValue, '0,000');

    return ''
    + '<div style="position:relative;width:100%;height:135px;overflow:hidden;pointer-events:none;">'

        // big ambient glow belakang
        + '<div style="position:absolute;left:50%;top:-58px;transform:translateX(-50%);'
        + 'width:300px;height:300px;border-radius:50%;'
        + 'background:radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 34%, rgba(255,255,255,0.00) 74%);"></div>'

        // gold reward glow kiri
        + '<div style="position:absolute;left:20px;top:52px;'
        + 'width:70px;height:70px;border-radius:50%;'
        + 'background:radial-gradient(circle, rgba(255,215,106,0.22) 0%, rgba(255,215,106,0.08) 45%, rgba(255,215,106,0) 78%);"></div>'

        // gold reward glow kanan
        + '<div style="position:absolute;right:18px;top:18px;'
        + 'width:84px;height:84px;border-radius:50%;'
        + 'background:radial-gradient(circle, rgba(255,201,79,0.22) 0%, rgba(255,201,79,0.07) 46%, rgba(255,201,79,0) 76%);"></div>'

        // blurred light dots
        + '<div style="position:absolute;left:38px;top:22px;width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,0.35);filter:blur(1px);"></div>'
        + '<div style="position:absolute;left:62px;top:42px;width:6px;height:6px;border-radius:50%;background:rgba(255,223,140,0.45);filter:blur(1px);"></div>'
        + '<div style="position:absolute;right:56px;top:26px;width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,0.32);filter:blur(1px);"></div>'
        + '<div style="position:absolute;right:32px;top:52px;width:6px;height:6px;border-radius:50%;background:rgba(255,223,140,0.42);filter:blur(1px);"></div>'

        // sparkle cluster kiri atas
        + '<div style="position:absolute;left:24px;top:14px;color:rgba(255,255,255,0.70);font-size:13px;text-shadow:0 0 10px rgba(255,255,255,0.25);">✦</div>'
        + '<div style="position:absolute;left:42px;top:26px;color:rgba(255,241,196,0.78);font-size:9px;text-shadow:0 0 8px rgba(255,215,106,0.30);">✧</div>'
        + '<div style="position:absolute;left:56px;top:10px;color:rgba(255,255,255,0.42);font-size:8px;">✦</div>'
        + '<div style="position:absolute;left:68px;top:34px;color:rgba(255,215,106,0.55);font-size:10px;">✶</div>'

        // sparkle cluster kiri bawah
        + '<div style="position:absolute;left:18px;top:88px;color:rgba(255,255,255,0.58);font-size:10px;">✦</div>'
        + '<div style="position:absolute;left:40px;top:102px;color:rgba(255,233,163,0.62);font-size:8px;">✧</div>'
        + '<div style="position:absolute;left:62px;top:92px;color:rgba(255,255,255,0.34);font-size:7px;">✦</div>'

        // sparkle cluster kanan atas
        + '<div style="position:absolute;right:26px;top:14px;color:rgba(255,255,255,0.72);font-size:12px;text-shadow:0 0 10px rgba(255,255,255,0.25);">✦</div>'
        + '<div style="position:absolute;right:46px;top:30px;color:rgba(255,233,163,0.78);font-size:9px;text-shadow:0 0 8px rgba(255,215,106,0.30);">✧</div>'
        + '<div style="position:absolute;right:60px;top:8px;color:rgba(255,255,255,0.40);font-size:7px;">✦</div>'
        + '<div style="position:absolute;right:74px;top:40px;color:rgba(255,215,106,0.52);font-size:10px;">✶</div>'

        // sparkle cluster kanan bawah
        + '<div style="position:absolute;right:22px;top:90px;color:rgba(255,255,255,0.56);font-size:10px;">✦</div>'
        + '<div style="position:absolute;right:44px;top:102px;color:rgba(255,233,163,0.60);font-size:8px;">✧</div>'
        + '<div style="position:absolute;right:68px;top:94px;color:rgba(255,255,255,0.32);font-size:7px;">✦</div>'

        // center tiny sparkles atas nombor
        + '<div style="position:absolute;left:50%;top:18px;transform:translateX(-78px);color:rgba(255,255,255,0.28);font-size:7px;">✦</div>'
        + '<div style="position:absolute;left:50%;top:14px;transform:translateX(74px);color:rgba(255,233,163,0.42);font-size:8px;">✧</div>'
        + '<div style="position:absolute;left:50%;top:94px;transform:translateX(-92px);color:rgba(255,255,255,0.24);font-size:6px;">✦</div>'
        + '<div style="position:absolute;left:50%;top:98px;transform:translateX(88px);color:rgba(255,215,106,0.36);font-size:7px;">✶</div>'

        // main premium card
        + '<div style="position:absolute;left:50%;top:8px;transform:translateX(-50%);'
        + 'width:90%;max-width:350px;height:112px;border-radius:28px;'
        + 'background:linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.07) 100%);'
        + 'border:1px solid rgba(255,255,255,0.24);'
        + 'box-shadow:0 18px 38px rgba(44,0,90,0.28), inset 0 1px 0 rgba(255,255,255,0.25);'
        + 'backdrop-filter:blur(6px);">'

            // highlight top line
            + '<div style="position:absolute;left:16px;right:16px;top:0;height:1px;'
            + 'background:linear-gradient(90deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.62) 50%, rgba(255,255,255,0.00) 100%);"></div>'

            // soft shimmer bawah
            + '<div style="position:absolute;left:22px;right:22px;bottom:10px;height:12px;'
            + 'border-radius:999px;background:linear-gradient(90deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.00) 100%);"></div>'

            // top row
            + '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px 0 14px;">'

                + '<div style="display:inline-block;padding:5px 12px;border-radius:999px;'
                + 'background:rgba(255,255,255,0.14);color:#F8EFFF;'
                + 'font-size:10px;font-weight:800;letter-spacing:1px;text-transform:uppercase;">'
                + 'AP Balance'
                + '</div>'

                + '<div style="position:relative;width:34px;height:34px;border-radius:50%;'
                + 'background:linear-gradient(180deg,#FFE9A3 0%,#FFC94F 100%);'
                + 'box-shadow:0 8px 18px rgba(255,194,45,0.28), inset 0 1px 0 rgba(255,255,255,0.65);'
                + 'text-align:center;line-height:34px;color:#6B4300;font-weight:900;font-size:11px;">'
                    + '<div style="position:absolute;left:7px;top:5px;width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,0.45);filter:blur(1px);"></div>'
                    + 'AP'
                + '</div>'

            + '</div>'

            // value
            + '<div style="width:100%;text-align:center;margin-top:-5px;'
            + 'font-size:54px;line-height:54px;font-weight:900;color:#FFFFFF;'
            + 'letter-spacing:0.5px;text-shadow:0 10px 24px rgba(0,0,0,0.20);">'
            + pointDisplay
            + '</div>'

            // subtitle
            + '<div style="width:100%;text-align:center;margin-top:4px;">'
                + '<span style="display:inline-block;padding:5px 12px;border-radius:999px;'
                + 'background:linear-gradient(180deg,#FFE9A3 0%,#FFC94F 100%);'
                + 'color:#6B4300;font-size:10px;font-weight:800;letter-spacing:0.6px;'
                + 'box-shadow:0 6px 14px rgba(255,194,45,0.22);">'
                + 'Ready to Redeem'
                + '</span>'
            + '</div>'

        + '</div>'

    + '</div>';
}

function buildAyohaPointCollectedHtmlPremiumX(totalPoint) {
    var pointValue = parseInt(totalPoint || 0, 10);
    if (isNaN(pointValue)) pointValue = 0;

    var pointDisplay = Ext.util.Format.number(pointValue, '0,000');

    return ''
    + '<div style="position:relative;width:100%;height:135px;overflow:hidden;">'

        // soft glow belakang
        + '<div style="position:absolute;left:50%;top:-55px;transform:translateX(-50%);'
        + 'width:280px;height:280px;border-radius:50%;'
        + 'background:radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.06) 32%, rgba(255,255,255,0.00) 72%);"></div>'

        // sparkle kiri
        + '<div style="position:absolute;left:26px;top:16px;color:rgba(255,255,255,0.55);font-size:12px;">✦</div>'
        + '<div style="position:absolute;left:42px;top:28px;color:rgba(255,255,255,0.35);font-size:9px;">✦</div>'

        // sparkle kanan
        + '<div style="position:absolute;right:34px;top:20px;color:rgba(255,255,255,0.52);font-size:11px;">✦</div>'
        + '<div style="position:absolute;right:22px;top:35px;color:rgba(255,255,255,0.32);font-size:8px;">✦</div>'

        // main premium card
        + '<div style="position:absolute;left:50%;top:8px;transform:translateX(-50%);'
        + 'width:90%;max-width:350px;height:112px;border-radius:28px;'
        + 'background:linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.07) 100%);'
        + 'border:1px solid rgba(255,255,255,0.24);'
        + 'box-shadow:0 18px 38px rgba(44,0,90,0.28), inset 0 1px 0 rgba(255,255,255,0.25);'
        + 'backdrop-filter:blur(6px);">'

            // highlight top line
            + '<div style="position:absolute;left:16px;right:16px;top:0;height:1px;'
            + 'background:linear-gradient(90deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.62) 50%, rgba(255,255,255,0.00) 100%);"></div>'

            // top row
            + '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px 0 14px;">'

                + '<div style="display:inline-block;padding:5px 12px;border-radius:999px;'
                + 'background:rgba(255,255,255,0.14);color:#F8EFFF;'
                + 'font-size:10px;font-weight:800;letter-spacing:1px;text-transform:uppercase;">'
                + 'AP Balance'
                + '</div>'

                + '<div style="width:34px;height:34px;border-radius:50%;'
                + 'background:linear-gradient(180deg,#FFE9A3 0%,#FFC94F 100%);'
                + 'box-shadow:0 8px 18px rgba(255,194,45,0.28), inset 0 1px 0 rgba(255,255,255,0.65);'
                + 'text-align:center;line-height:34px;color:#6B4300;font-weight:900;font-size:11px;">'
                + 'AP'
                + '</div>'

            + '</div>'

            // value
            + '<div style="width:100%;text-align:center;margin-top:2px;'
            + 'font-size:54px;line-height:54px;font-weight:900;color:#FFFFFF;'
            + 'letter-spacing:0.5px;text-shadow:0 10px 24px rgba(0,0,0,0.20);">'
            + pointDisplay
            + '</div>'

            // subtitle
            + '<div style="width:100%;text-align:center;margin-top:5px;">'
                + '<span style="display:inline-block;padding:5px 12px;border-radius:999px;'
                + 'background:linear-gradient(180deg,#FFE9A3 0%,#FFC94F 100%);'
                + 'color:#6B4300;font-size:10px;font-weight:800;letter-spacing:0.6px;'
                + 'box-shadow:0 6px 14px rgba(255,194,45,0.22);">'
                + 'Ready to Redeem'
                + '</span>'
            + '</div>'

        + '</div>'

    + '</div>';
}