Ext.define('BuskartApp.view.FloatPanel.LoadingPanel', {
});









var _LoadingPanel;

function LoadingPanel() {
    //_LoadingPanel =
    //  Ext.create('Ext.Panel', {

    //      xtype: 'panel',
    //      height: 100,
    //      width: 145,
    //      id: 'LoadingPanelID',
    //      draggable: false,



    //      centered: true,
    //      //bottom: 64,
    //      zIndex: 500,
    //      modal: true,
    //      hideOnMaskTap: false,
    //      layout: {
    //          type: 'fit'
    //      },
    //      showAnimation: {
    //          type: 'popIn',
    //          duration: 300,
    //          easing: 'ease-out'
    //      },
    //      hideAnimation: {
    //          type: 'popOut',
    //          duration: 500,
    //          easing: 'ease-out'
    //      },
    //      style: 'background-color:white;',
    //      //    style: 'border-bottom:1px solid;background-color:#D25959;',
    //      items: {






    //          xtype: 'container',
    //          style: 'background-color:white;',

    //          layout: {
    //              type: 'vbox',
    //              pack: 'center',
    //              align: 'center'
    //          },

    //          items: [


    //              {

    //                  xtype: 'container',
    //                  style: 'border-bottom:1px solid white;border-top:1px solid white;border-left:1px solid white;border-right:1px solid white;background-color:white;border-radius:5px 5px 5px 5px;',
    //                  layout: {
    //                      type: 'vbox',
    //                      pack: 'center',
    //                      align: 'center'

    //                  },
    //                  height: 80,
    //                  width: 135,

    //                  items: [
    //                      {
    //                          id: 'htmlIcon',
    //                          height: 52,
    //                          width:'100%',
    //                          html: '<div style="width:100%;height:52px;text-align:center;"><img src="resources/icon/sendReceipt.png" style="width:52px;height:52px;"/></div>',
    //                      },
    //                   {
    //                       //xtype: 'button',
    //                       ////   align: 'stretch',
    //                       //height: 32,
    //                       //width: 92,
    //                       id: 'htmlTxt',
    //                       // ui: 'plain',
    //                       width: '100%',
    //                       margin:'10 0 0 0',
    //                       html: '<div style="width:100%;text-align:center;font-size:11px;color:black;font-weight:bold;"></div>',
    //                   }

    //                  ]

    //              },

                

    //          ]




    //      }





    _LoadingPanel = Ext.create('Ext.Container',


       {

           id: '_LoadingPanelID',
           // xtype: 'panel',
           zIndex: 400,
           xtype: 'container',
           //height: 475,
           height: '100%',
           //  height: '60%',
           width: '100%',
           draggable: false,

           styleHtmlContent: true,

           centered: true,
           //bottom: 64,
           // zIndex: 100,
           modal: false,
           // hideOnMaskTap: true,
           //left: 10,
           //top:10,
           layout: {
               type: 'fit'
           },
           showAnimation: {
               type: 'popIn',
               duration: 200,
               easing: 'ease-out'
               //type: 'slideIn',
               //direction:'down',
               //duration: 1000,
               //easing: 'ease-in'
           },
           hideAnimation: {
               type: 'popOut',
               duration: 250,
               easing: 'ease-out'
               //type: 'slideOut',
               //direction: 'down',
               //duration: 3000,
               //easing: 'ease-in'
           },

           //  style: ' background-color:transparent;',
           style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',








           items: [
               



               /////////////////

               {
                   xtype: 'container',
                   height: '100%',
                   width: '100%',
                   layout: {
                       type: 'vbox',
                       pack: 'center',
                       align: 'center'
                   },
                   // style: ' background-color:transparent;',
                   style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                   items: [






                                         {

                      xtype: 'container',
                      style: 'border-bottom:1px solid white;border-top:1px solid white;border-left:1px solid white;border-right:1px solid white;background-color:white;border-radius:5px 5px 5px 5px;',
                      layout: {
                          type: 'vbox',
                          pack: 'center',
                          align: 'center'

                      },
                      height: 90,
                      width: 120,

                      items: [
                          {
                              id: 'htmlIcon',
                              height: 52,
                              width: '100%',
                              margin: '5 0 0 0',
                              html: '<div style="width:100%;height:52px;text-align:center;"><img src="resources/icon/sendReceipt.png" style="width:52px;height:52px;"/></div>',
                          },
                       {
                           //xtype: 'button',
                           ////   align: 'stretch',
                           //height: 32,
                           //width: 92,
                           id: 'htmlTxt',
                           // ui: 'plain',
                           width: '100%',
                           margin:'5 0 0 0',
                           html: '<div style="width:100%;text-align:center;font-size:11px;color:black;font-weight:bold;"></div>',
                       }

                      ]

                  },




                   ]
               },



               //////////////////


                     {

                         xtype: 'container',
                         width: '100%',
                         hidden: true,
                         // width: 40,
                         docked: 'bottom',
                         height: 40,
                         // style: 'background-color:rgba(0, 0, 0, 0.1);border-radius: 0px 0px 0px 0px;',
                         style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                         layout: {
                             type: 'vbox',
                             pack: 'center',
                             align: 'center',
                         },
                         items: [

                              {
                                  html: '<div style="color:white;text-align: center;font-size:11px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;background-color:transparent" >Developed by Versilani Technology Sdn bhd. Kuala Lumpur ,MALAYSIA</div>',
                                  margin: '0 0 0 0',
                              },

                         ]

                     },











           ],














      });
    return _LoadingPanel;
}


var isLoadingPanelOpen = 'N';
function LoadingPanelHide() {


    if (isLoadingPanelOpen == 'Y') {
        _LoadingPanel.hide(); isLoadingPanelOpen = 'N';
        RemovePages(_LoadingPanel, "isLoadingPanelOpen");
    }
}



function LoadingPanelShow(Icon,Msg) {
    Ext.Viewport.remove(_LoadingPanel);
    this.overlay = Ext.Viewport.add(LoadingPanel()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
    isLoadingPanelOpen = 'Y';
    Ext.getCmp('htmlIcon').setHtml('<div style="width:100%;height:52px;text-align:center;"><img src="' + Icon + '" style="width:52px;height:52px;"/></div>');
    Ext.getCmp('htmlTxt').setHtml('<div style="width:100%;text-align:center;font-size:11px;color:black;font-weight:bold;">'+Msg+'</div>');

}
