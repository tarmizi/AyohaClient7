Ext.define('BuskartApp.view.FloatPanel.TestRoutePanel', {
});



//var _StatusDetailReceiptMenusIsShow = 'No';
var _TestRoutePanel;

function TestRoutePanel() {
    _TestRoutePanel =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: 1,
          width: 1,
          id: 'TestRoutePanelID',
          draggable: false,
          // dock:'bottom',
          //   left: -10,
          right: -5,
          //  margin:'0 0 -130 0',
          // top: 80,
          bottom: 180,
          //  right: -155,


          //  center:true,
          //bottom: 64,
          zIndex: 1000,
          showAnimation: {
              type: 'popIn',
              duration: 250,
              easing: 'ease-out'
          },
          hideAnimation: {
              type: null,
              duration: null,
              easing: null
          },
          style: 'background-color: transparent;',
          items: {

              xtype: 'container',
              style: 'background-color: transparent;',
              layout: {
                  type: 'vbox',
                  pack: 'right',
                  align: 'end'
              },

              items: [

                      {
                          xtype: 'button',
                          id: 'btnTestRoutePanel',
                          height: 75,
                          width: 75,
                          html: '<div class="blink_me"><img src="resources/icons/StatusMenu.png" width="65" height="65" alt="Company Name"></div>',
                          //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                          ui: 'plain',
                          handler: function () {


                              //RoutePages();
                              RouteBackPage();

                              // DetailReceiptMenuShow();
                          }
                      },


              ]

          },


      });
    return _TestRoutePanel;
}



function TestRoutePanelHide() {
 
        _TestRoutePanel.hide();
    



}


function RouteBackPage() {

    var a = swal.isVisible();
    if (a) {
        swal.close();
        return;
    }

    var ii = ArrappRouteisOpen.length - 1;
    var pagesRoute;
    if (ArrappRouteisOpen.length > 0) {
        pagesRoute = ArrappRouteisOpen[ii];


        console.log(pagesRoute);
      
        eval(pagesRoute);
       
        var indexss = ArrappRouteisOpen.indexOf(pagesRoute);
        if (indexss > -1) {

            ArrappRouteisOpen.splice(indexss, 1);
        }
        ii--;
      
    } else {
        FloatPanel_ExitDialogBoxShow();
    }
}

function TestRoutePanelShow() {
   
    Ext.Viewport.remove(_TestRoutePanel);
    this.overlay = Ext.Viewport.add(TestRoutePanel()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
  //  loadRememberMe();

}
