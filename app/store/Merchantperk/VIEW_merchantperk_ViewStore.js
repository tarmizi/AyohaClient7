Ext.define('BuskartApp.store.Merchantperk.VIEW_merchantperk_ViewStore', {
});

var _DataStore_VIEW_merchantperk_ViewStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Merchantperk.Merchantperk_ViewModel',
    id: '_VIEW_merchantperk_ViewStoreID',
    proxy: {
        type: 'ajax',
       url: GetAPIurl() + '/VIEW_merchantperk_View/VIEW_merchantperk_View',
      //  url: GetAPIurl() + '/AyohaStore_Cart/'+AyohaStoreCartRouteFunction,
        actionMethods: {
            read: 'POST'
          //  read: AyohaStoreCartRouteMethod
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





var _DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Merchantperk.Merchantperk_ViewModel',
    id: '_VIEW_merchantperk_View_LoadbySubscriberAccNoStoreID',
    proxy: {
        type: 'ajax',
       url: GetAPIurl() + '/VIEW_merchantperk_View/VIEW_merchantperk_View_LoadbySubscriberAccNo',
      //  url: GetAPIurl() + '/AyohaStore_Cart/'+AyohaStoreCartRouteFunction,
        actionMethods: {
            read: 'POST'
          //  read: AyohaStoreCartRouteMethod
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




var _DataStore_VIEW_merchantperk_View_DashboardInitialLoadStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Merchantperk.Merchantperk_ViewModel',
    id: '_VIEW_merchantperk_View_DashboardInitialLoadStoreID',
    proxy: {
        type: 'ajax',
       url: GetAPIurl() + '/VIEW_merchantperk_View/VIEW_merchantperk_View_DashboardInitialLoad',
      //  url: GetAPIurl() + '/AyohaStore_Cart/'+AyohaStoreCartRouteFunction,
        actionMethods: {
            read: 'POST'
          //  read: AyohaStoreCartRouteMethod
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





var _DataStore_VIEW_merchantperk_View_DashboardLoadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Merchantperk.Merchantperk_ViewModel',
    id: '_VIEW_merchantperk_View_DashboardLoadByEnterpriseAccNoStore',
    proxy: {
        type: 'ajax',
       url: GetAPIurl() + '/VIEW_merchantperk_View/VIEW_merchantperk_View_DashboardLoadByEnterpriseAccNo',
      //  url: GetAPIurl() + '/AyohaStore_Cart/'+AyohaStoreCartRouteFunction,
        actionMethods: {
            read: 'POST'
          //  read: AyohaStoreCartRouteMethod
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