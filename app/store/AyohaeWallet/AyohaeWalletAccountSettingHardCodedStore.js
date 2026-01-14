Ext.define("BuskartApp.store.AyohaeWallet.AyohaeWalletAccountSettingHardCodedStore", {
    extend: 'Ext.data.Store',
    // alias: 'store.List',
    id: 'AyohaeWalletAccountSettingHardCodedStoreID',
    config: {
        model: 'BuskartApp.model.AyohaeWallet.AyohaeWalletModel',
        //sorters: 'firstName',
        //grouper: function (record) {
        //    return record.get('firstName')[0];
        //},
        data: [
            { Icon: '<img src="resources/icons/securiti.png"  style="border:1px none white; width:25px;height:25px;">', AyohaeWalletAccountSettingName: 'Security', ID: 1 },
                { Icon: '<img src="resources/icons/kreditdebit.png"  style="border:1px none white; width:25px;height:25px;">', AyohaeWalletAccountSettingName: 'Credit and Debit Limit', ID: 1 },
        ]
    }
});
