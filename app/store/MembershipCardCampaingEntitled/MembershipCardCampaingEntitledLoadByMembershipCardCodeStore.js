Ext.define('BuskartApp.store.MembershipCardCampaingEntitled.MembershipCardCampaingEntitledLoadByMembershipCardCodeStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'BuskartApp.model.MembershipCardCampaingEntitled.MembershipCardCampaingEntitledModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/MembershipCardCampaingEntitled/MembershipCardCampaingEntitledLoadByMembershipCardCode',
            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },



        }


    }
});




var _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.MembershipCardCampaingEntitled.MembershipCardCampaingEntitledModel',
    id: '_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipCardCampaingEntitled/MembershipCardCampaingEntitledLoadByMembershipCardCode',
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
});



var _DataStore_MembershipCardCampaingEntitledLoadByEnterpriseAccNoMerchantDetailPageStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.MembershipCardCampaingEntitled.MembershipCardCampaingEntitledModel',
    id: '_MembershipCardCampaingEntitledLoadByEnterpriseAccNoMerchantDetailPageStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipCardCampaingEntitled/MembershipCardCampaingEntitledLoadByEnterpriseAccNoMerchantDetailPage',
        actionMethods: {
            read: 'GET'
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        },
       
    
    },
    groupDir: "DESC",
    grouper: {
        groupFn: function (record) {
            // return '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:5px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal">' + record.get('EnterpriseName') + '</th><th style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:24px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal" rowspan="2">(' + record.get('CountLoyaltyStamped') + '/' + record.get('CountStampCardRowShow') + ')</th></tr><tr><td style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">' + record.get('StampCampaignName') + '</td></tr></thead></table>',
            // return '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:5px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal">' + record.get('EnterpriseNameUpperCase') + '<div style="display:none;">' + record.get('CampaignBatch') + '</div></th><th style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:26px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal" rowspan="3">(' + record.get('CountLoyaltyStamped') + '/' + record.get('CountStampCardRowShow') + ')</th></tr><tr><td style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">Campaign:' + record.get('StampCampaignNameLowerCase') + '-Batch(' + record.get('Batch') + ')</td></tr><tr><td style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">Expired:' + record.get('EndDate') + '</td></tr></thead></table>'
           // return '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><td style="border-color:transparent;border-style:none;border-width:1px;color:white;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;width:50%;">' + record.get('EnterpriseName') + '</td><td style="border-color:transparent;border-style:none;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal;width:50%;"><button onclick="FloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart(' + "'" + record.get('EnterpriseAccNo') + "'" + ',' + "'" + record.get('MembershipCardCode') + "'" + ',' + "'" + record.get('EnterpriseLogo') + "'" + ',' + "'" + record.get('EnterpriseName') + "'" + ');" class="buttonCheckOutAyohaShoppingCart" style="margin:0px 0px 0px 0px;">Check Out >></button></td></tr></thead></table>'
            return '<div style="color:white;text-align: right;font-size:15px;width:100%;margin:-5px 0px 0px 10px;float:left;width:85%">' + record.get('MembershipCardName') + '<br><div style="color:white;text-align: right;font-size:8px;width:100%;margin:-6px 0px 0px 0px;padding:0px 0px">Membership Card Name</div></div><div style="color:white;text-align: center;font-size:15px;width:100%;margin:3px 0px 0px 0px;float:left:width:15%;padding:0px 0px"><img src="' + record.get('MembershipcardImg') + '" style="width:26px;height:20px;border-radius:25%;"/></div>'
        },
        // sortProperty: 'CreatedDate'
    }
});