
Ext.define('BuskartApp.view.Dashboard.buskartMap', {});



function initializeMap() {

    // Create a LatLng object
    // We use this LatLng object to center the map and position the marker
    var center = new google.maps.LatLng(5.4445234, 101.91246603);

    // Declare your map options
    var mapOptions = {      
        zoom: 5,
        center: center,
        panControl: false,
        scaleControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,


        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.LEFT_CENTER
        },


        streetViewControl: false,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER,
            addressControlOptions: {
                position: google.maps.ControlPosition.BOTTOM_CENTER
            },
        },
        fullscreenControl: false,

        zoomControl: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },

    };

    // Create a map in the #map HTML element, using the declared options
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Create a marker and place it on the map
    var marker = new google.maps.Marker({
        position: center,
        map: map
    });


}



//Ext.define('BuskartApp.view.Dashboard.buskartMap', {


   

//    extend: 'Ext.Panel',
//    xtype: 'map-basic',

//    requires: [
//        'Ext.ux.google.Map'
//    ],




//      config: {
//            layout: {
//              type: 'fit',
            
//          },
//          items: [




//              {
//              xtype: 'map',            
//              mapOptions: {
//                  center: {
//                      latitude: 38.96,
//                      longitude: -95.26
//                  }
//              }
//          }]
//        },


    

  

//        //////extend: 'Ext.Panel',
        

//        //////requires: [
//        //////    'Ext.ux.google.Map'
//        //////],

      

//        //////config: {
//        //////    layout: {
//        //////        type: 'fit'
//        //////    }
//        //////},

//        //initialize: function () {

//        //    this.callParent();
//        //    map = this.add({
//        //        xtype: 'map',
//        //        useCurrentLocation: true,
//        //        mapOptions: {

//        //            center: new google.maps.LatLng(5.4445234, 101.91246603),
//        //            zoom: 6,
//        //            // mapTypeId: google.maps.MapTypeId.HYBRID,
//        //            mapTypeId: google.maps.MapTypeId.ROADMAP,
//        //            panControl: false,
//        //            scaleControl: false,
//        //            gestureHandling: 'greedy',
//        //            //overviewMapControl: true,
//        //            //overviewMapControlOptions: {opened: true},

//        //            mapTypeControl: false,
//        //            mapTypeControlOptions: {
//        //                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
//        //                position: google.maps.ControlPosition.LEFT_CENTER
//        //            },
//        //            // mapTypeId: google.maps.MapTypeId.ROADMAP,
//        //            //streetViewControl: false,
//        //            //streetViewControlOptions: {
//        //            //    position: google.maps.ControlPosition.LEFT_CENTER,
//        //            //    linksControl: false,
//        //            //    panControl: false,
//        //            //    addressControl: true,
//        //            //    enableCloseButton: false,
//        //            //    zoomControl: false,
//        //            //    enableCloseButton: true,
//        //            //},
//        //            streetViewControl: false,
//        //            streetViewControlOptions: {
//        //                position: google.maps.ControlPosition.LEFT_CENTER,
//        //                addressControlOptions: {
//        //                    position: google.maps.ControlPosition.BOTTOM_CENTER
//        //                },
//        //            },
//        //            fullscreenControl: false,

//        //            zoomControl: false,
//        //            zoomControlOptions: {
//        //                position: google.maps.ControlPosition.LEFT_BOTTOM
//        //            },


//        //        },






//        //        listeners: {
//        //            maprender: function (comp, map) {
//        //               // singleTrackingMap = map;
//        //                var me = this;
//        //                me.map = map;
//        //                //clickedsingleTrackingMap = false;
//        //                //singleTrackingMapsec = 0;
//        //                //maxSpeed = 0;
//        //                //singleTrackingMapchecklong = '000';
//        //                //geocoderLiveTracking = new google.maps.Geocoder();
//        //                //directionsService = new google.maps.DirectionsService;
//        //                //directionsDisplay = new google.maps.DirectionsRenderer;
//        //                //geocodeSingleTrackingMap = new google.maps.Geocoder();
//        //                //setOfficeMarker();

//        //                //directionsService = new google.maps.DirectionsService;
//        //                //directionsDisplay = new google.maps.DirectionsRenderer;                  
//        //                //   directionsDisplay.setMap(singleTrackingMap);




//        //                //var onChangeHandler = function() {
//        //                //    calculateAndDisplayRoute(directionsService, directionsDisplay);
//        //                //};
//        //                //document.getElementById('start').addEventListener('click', onStartClick);
//        //                //  document.getElementById('end').addEventListener('change', onChangeHandler);





//        //            },





//        //        }


//        //    });

//        //}



       
//        //initialize: function () {

//        //    //Ext.Viewport.add({
//        //    //    xtype: 'map',
//        //    //    useCurrentLocation: true
//        //    //});


//        ////    this.callParent(arguments);

//        ////    var backButton = {
//        ////        xtype: 'button',
//        ////        ui: 'back',
//        ////        text: 'Zurück',
//        ////        handler: this.onBackButtonTap,
//        ////        scope: this
//        ////    };

//        ////    var topToolbar = {
//        ////        xtype: 'toolbar',
//        ////        docked: 'top',
//        ////        title: 'Ort der Aktivität',
//        ////        items: [
//        ////            backButton,
//        ////            {
//        ////                xtype: 'spacer'
//        ////            }
//        ////        ]
//        ////    };

//        ////    var map = {
//        ////        xtype: 'google-map',
//        ////        useCurrentLocation: true
//        ////    };


           
//        ////    this.add([
//        ////       // topToolbar,
//        ////        map
//        ////    ]);
//        //},

     
//    });