
Ext.define('BuskartApp.store.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardVoucherHistoryStore', {
});

var _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardVoucherHistoryStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUser_VoucherHistoryModel',
    id: '_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardVoucherHistoryStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardVoucherHistory',
        actionMethods: {
            read: 'GET'
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },

    groupDir: "ASC",
    grouper: {
        groupFn: function (record) {
            // return '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:5px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal">' + record.get('EnterpriseName') + '</th><th style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:24px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal" rowspan="2">(' + record.get('CountLoyaltyStamped') + '/' + record.get('CountStampCardRowShow') + ')</th></tr><tr><td style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">' + record.get('StampCampaignName') + '</td></tr></thead></table>',
            // return '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:5px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal">' + record.get('EnterpriseNameUpperCase') + '<div style="display:none;">' + record.get('CampaignBatch') + '</div></th><th style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:26px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal" rowspan="3">(' + record.get('CountLoyaltyStamped') + '/' + record.get('CountStampCardRowShow') + ')</th></tr><tr><td style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">Campaign:' + record.get('StampCampaignNameLowerCase') + '-Batch(' + record.get('Batch') + ')</td></tr><tr><td style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">Expired:' + record.get('EndDate') + '</td></tr></thead></table>'
            // return '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="border-color:#000000;border-style:none;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal">' + record.get('EnterpriseName') + '</th><th style="border-color:#000000;border-style:solid;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:24px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal" rowspan="2">(' + record.get('CountLoyaltyStamped') + '/' + record.get('CountStampCardRowShow') + ')</th></tr><tr><td style="border-color:#000000;border-style:solid;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">' + record.get('StampCampaignName') + '</td></tr></thead></table>'
            return '<div style="color:white;text-align: left;font-size:15px;width:98%;margin:0px 0px 0px 0px;">' + record.get('Voucher_EnterpriseName') + '</div>'
        },
        sortProperty: 'Voucher_EnterpriseName'
    }

    //autoLoad: true

});

