Ext.define('BuskartApp.store.EnterprisesFavorite.EnterprisesFavoriteStore', {
});


var _DataStore_EnterprisesFavorite_LoadFavoriteStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.EnterprisesFavorite.EnterprisesFavoriteModel',
    id: '_EnterprisesFavorite_LoadFavoriteStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/EnterprisesFavorite/EnterprisesFavorite_LoadFavorite',
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