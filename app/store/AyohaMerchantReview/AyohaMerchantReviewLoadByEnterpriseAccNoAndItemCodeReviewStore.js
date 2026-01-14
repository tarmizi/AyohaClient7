
Ext.define('BuskartApp.store.AyohaMerchantReview.AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore', {
});

var _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaMerchantReview.AyohaMerchantReviewModel',
    id: '_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReview',
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






var _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewMembershipCardSaleStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaMerchantReview.AyohaMerchantReviewModel',
    id: '_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewMembershipCardSaleStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewMembershipCardSale',
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



    //autoLoad: true

});