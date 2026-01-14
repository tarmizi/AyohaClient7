Ext.define('BuskartApp.model.LoyaltyPointRedeemPrizeHistoryLog.LoyaltyPointRedeemPrizeHistoryLogModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'ItemCode',
                 'RedeemHistoryCode',
                 'RedeemHistoryStatus',
                 'RedeemHistoryStatusBy',
                 'RedeemHistoryStatusDate',
                 'RedeemPoint',
                 'Remarks',
                 'RowStatus',                 
                 'EnterpriseAccNo',
                 'PointCampaignCode',                   
                 'RedeemHistoryApprovalStatusBy',
                 'AccountName'
        ]
    }
});







