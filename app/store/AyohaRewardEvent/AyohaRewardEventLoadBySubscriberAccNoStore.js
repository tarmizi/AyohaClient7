
Ext.define('BuskartApp.store.AyohaRewardEvent.AyohaRewardEventLoadBySubscriberAccNoStore', {
});

var _DataStore_AyohaRewardEventLoadBySubscriberAccNoStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardEvent.AyohaRewardEventModel',
    id: '_AyohaRewardEventLoadBySubscriberAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardEvent/AyohaRewardEventLoadBySubscriberAccNo',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },

    //groupDir: "DESC",
    //grouper: {
    //    groupFn: function (record) {
    //        // return '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:5px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal">' + record.get('EnterpriseName') + '</th><th style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:24px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal" rowspan="2">(' + record.get('CountLoyaltyStamped') + '/' + record.get('CountStampCardRowShow') + ')</th></tr><tr><td style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">' + record.get('StampCampaignName') + '</td></tr></thead></table>',
    //        // return '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:5px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal">' + record.get('EnterpriseNameUpperCase') + '<div style="display:none;">' + record.get('CampaignBatch') + '</div></th><th style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:26px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal" rowspan="3">(' + record.get('CountLoyaltyStamped') + '/' + record.get('CountStampCardRowShow') + ')</th></tr><tr><td style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">Campaign:' + record.get('StampCampaignNameLowerCase') + '-Batch(' + record.get('Batch') + ')</td></tr><tr><td style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">Expired:' + record.get('EndDate') + '</td></tr></thead></table>'
    //        return '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><td style="border-color:transparent;border-style:none;border-width:1px;color:white;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;width:50%;">' + record.get('EnterpriseName') + '</td><td style="border-color:transparent;border-style:none;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal;width:50%;"><button onclick="FloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart(' + "'" + record.get('EnterpriseAccNo') + "'" + ',' + "'" + record.get('MembershipCardCode') + "'" + ',' + "'" + record.get('EnterpriseLogo') + "'" + ',' + "'" + record.get('EnterpriseName') + "'" + ');" class="buttonCheckOutAyohaShoppingCart" style="margin:0px 0px 0px 0px;">Check Out >></button></td></tr></thead></table>'
    //        //return '<div style="color:white;text-align: left;font-size:15px;width:100%;margin:0px 0px 0px 10px;">' + record.get('EnterpriseName') + '</div>'
    //    },
    //    // sortProperty: 'CreatedDate'
    //}

    //autoLoad: true

});

//' + "'" + '{EnterpriseLogo}' + "'" + '






var _DataStore_EventCampaignRedeemLoadByEventRedeemStatusStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardEvent.AyohaRewardEventModel',
    id: '_EventCampaignRedeemLoadByEventRedeemStatusStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardEvent/EventCampaignRedeemLoadByEventRedeemStatus',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },

    //groupDir: "DESC",
    //grouper: {
    //    groupFn: function (record) {
    //        // return '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:5px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal">' + record.get('EnterpriseName') + '</th><th style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:24px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal" rowspan="2">(' + record.get('CountLoyaltyStamped') + '/' + record.get('CountStampCardRowShow') + ')</th></tr><tr><td style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">' + record.get('StampCampaignName') + '</td></tr></thead></table>',
    //        // return '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:5px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal">' + record.get('EnterpriseNameUpperCase') + '<div style="display:none;">' + record.get('CampaignBatch') + '</div></th><th style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:26px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal" rowspan="3">(' + record.get('CountLoyaltyStamped') + '/' + record.get('CountStampCardRowShow') + ')</th></tr><tr><td style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">Campaign:' + record.get('StampCampaignNameLowerCase') + '-Batch(' + record.get('Batch') + ')</td></tr><tr><td style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">Expired:' + record.get('EndDate') + '</td></tr></thead></table>'
    //        return '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><td style="border-color:transparent;border-style:none;border-width:1px;color:white;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;width:50%;">' + record.get('EnterpriseName') + '</td><td style="border-color:transparent;border-style:none;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal;width:50%;"><button onclick="FloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart(' + "'" + record.get('EnterpriseAccNo') + "'" + ',' + "'" + record.get('MembershipCardCode') + "'" + ',' + "'" + record.get('EnterpriseLogo') + "'" + ',' + "'" + record.get('EnterpriseName') + "'" + ');" class="buttonCheckOutAyohaShoppingCart" style="margin:0px 0px 0px 0px;">Check Out >></button></td></tr></thead></table>'
    //        //return '<div style="color:white;text-align: left;font-size:15px;width:100%;margin:0px 0px 0px 10px;">' + record.get('EnterpriseName') + '</div>'
    //    },
    //    // sortProperty: 'CreatedDate'
    //}

    //autoLoad: true

});






var _DataStore_Event_SuccessCheckIn_Load_EventPerkStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardEvent.AyohaRewardEventModel',
    id: '_Event_SuccessCheckIn_Load_EventPerkStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/DashboardAyohaUser/DashboardEvent_SuccessCheckIn_Load_EventPerk',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },

 

});