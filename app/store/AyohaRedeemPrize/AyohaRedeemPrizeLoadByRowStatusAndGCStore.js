
Ext.define('BuskartApp.store.AyohaRedeemPrize.AyohaRedeemPrizeLoadByRowStatusAndGCStore', {
});

var _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCode = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRedeemPrize.AyohaRedeemPrizeModel',
    id: '_EnterprisesLoadByMerchantCategory',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRedeemPrize/AyohaRedeemPrizeLoadByAyohaUserGroupCode',
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



    //autoLoad: true

});