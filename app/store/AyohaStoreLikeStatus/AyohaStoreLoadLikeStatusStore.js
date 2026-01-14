
Ext.define('BuskartApp.store.AyohaStoreLikeStatus.AyohaStoreLoadLikeStatusStore', {
});

var _DataStore_AyohaStoreLoadLikeStatusStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaStoreLikeStatus.AyohaStoreLikeStatusModel',
    id: '_AyohaStoreLoadLikeStatusStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStore_LikeStatus/AyohaStoreLoadLikeStatus',
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