/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('BuskartApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

   

    requires: [
        'Ext.ux.google.Map',
        'Ext.MessageBox',
        'Ext.layout.Fit'
    ],
    id: 'tabPanelMain',
    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top',
        },


    },

    tabBarPosition: 'bottom',
    //initialize: function (c) {
    //    this.getTabBar().hide();
    //},

    items: [
        // TODO - Replace the content of this view to suit the needs of your application.
        {
            title: 'Users',
            iconCls: 'x-fa fa-user',
            items: [
                {
                    xtype: 'FanLogin'
                }
            ]

            
            //title: 'Map',
            //iconCls: 'x-fa fa-user',
            //layout: 'fit',
            //items: [{
            //    xtype: 'map',
            //    itemId: 'gmaps_viewer',
            //    mapOptions: {
            //        zoomControl: true,
            //        panControl: false,
            //        rotateControl: true,
            //        streetViewControl: true,
            //        mapTypeControl: true,
            //        zoom: 13,
            //       // center: new google.maps.LatLng(38.62452, -90.18514)
            //    }

            //}]

        
           
        },
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'Dashboard'
                /* xtype: 'mainlist'*/
            }]
        },

        {
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            bind: {
                html: '{loremIpsum}'
            }
        }, {
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        }
    ]
});
