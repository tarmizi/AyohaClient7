Ext.define('BuskartApp.model.DashboardAyohaUser.SuccessCheckInModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'CurrentStampCount',
                 'TotalStampCount',
                 'StampProgressDisplay',
                 'StampPerksCount',
                 'PointPerksCount',
                 'CurrentPointsBalance',
                 'VoucherUsed',
                  'VoucherEntitle',
                 'SubmittedContest',
                 'AvailableContest',
                 'JoinedEvent',
                 'AvailableEvent',
                 'AvailableDiscount',
                 'DiscountUsage',
        ]
    }
});