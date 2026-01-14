
Ext.define('BuskartApp.store.Enterprises.EnterprisesLoadByMerchantCategoryStore', {
});

var _DataStore_EnterprisesLoadByMerchantCategory = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Enterprises.EnterprisesModel',
    id: '_EnterprisesLoadByMerchantCategory',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Enterprises/EnterprisesLoadByMerchantCategory',
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



var _DataStore_EnterprisesLoadByMerchantCategory_temp = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Enterprises.EnterprisesModel',
    id: '_EnterprisesLoadByMerchantCategory',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Enterprises/EnterprisesLoadByMerchantCategory',
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




var _DataStore_EnterprisesLoadByMerchantCategory_temp_front = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Enterprises.EnterprisesModel',
    id: '_EnterprisesLoadByMerchantCategoryX_front',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Enterprises/EnterprisesLoadByMerchantCategory',
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

    listeners: {
        load: function(store, records, successful, operation, eOpts) {
            if (successful && records.length > 0) { // Check if data loaded successfully
                // Check if a "Load More" item already exists to prevent duplicates
                var hasLoadMore = store.findRecord('isLoadMore', true);
                if (!hasLoadMore) {
                     // Add the special "Load More" record at the end of the list
                    store.add({
                        isLoadMore: true
                    });
                }
            }
        }
    }

    //autoLoad: true

});