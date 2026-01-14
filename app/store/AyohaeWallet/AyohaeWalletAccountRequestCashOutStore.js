Ext.define("BuskartApp.store.AyohaeWallet.AyohaeWalletAccountRequestCashOutStore", {
});




var _DataStore_AyohaeWalletAccountRequestCashOutStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaUserProfile.AyohaUserProfile_BankAccountModel',
    id: '_AyohaeWalletAccountRequestCashOutStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaUserProfileBankAccount/AyohaUserProfileBankAccountRequestCashOutLoadBySubscriberAccNo',
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
