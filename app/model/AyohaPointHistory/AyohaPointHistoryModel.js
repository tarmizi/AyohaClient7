Ext.define('BuskartApp.model.AyohaPointHistory.AyohaPointHistoryModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'CountsStamp',
                 'Batch',
                 'StampClaimStatus',
                 'StampedByDate',
                 'StampedBy',
                 'CampaignName',
                 'EnterpriseName',
                 'PointType',
                 'StampedByDate_DateOnly',
                 'StampedByDate_TimeOnly',
                 'StampedByDate_MonthYear'
        ]
    }
});







