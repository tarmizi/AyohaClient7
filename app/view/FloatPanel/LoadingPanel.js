Ext.define('BuskartApp.view.FloatPanel.LoadingPanel', {
});









var _LoadingPanel=null;





function LoadingPanelCreateIfNeeded() {
    if (_LoadingPanel && !_LoadingPanel.destroyed) return;
    _LoadingPanel = Ext.create('Ext.Container',


       {

           id: '_LoadingPanelID',
 height: '100%',
           width: '100%',
    floated: true,
        centered: true,
        fullscreen: true,
       // closeAction: 'hide',
        closeAction: 'destroy',
        draggable: false,
        modal: false,
        styleHtmlContent: true,
        layout: 'fit',
zIndex: 400,











        //    zIndex: 400,
        //    xtype: 'container',
        //    height: '100%',
        //    width: '100%',
        //    draggable: false,
        //    styleHtmlContent: true,
        //    centered: true,
        //    modal: false,

        //    layout: {
        //        type: 'fit'
        //    },
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
}




var isLoadingPanelOpen = 'N';
function LoadingPanelHide(fromBack,animCfg) {







    
     
    if (isLoadingPanelOpen == 'Y') {
      
          

        if (animCfg) {
            _LoadingPanel.hide(Ext.fx.Animation(animCfg));
          } else {
            _LoadingPanel.hide();
          }
          isLoadingPanelOpen = 'N';
         
        
          // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
          if (fromBack !== true) {
            AyohaBrowserBack.close('LoadingPanel');
          }
    }
}



function LoadingPanelShow(Icon,Msg) {
    // return;
    // Ext.Viewport.remove(_LoadingPanel);
    // this.overlay = Ext.Viewport.add(LoadingPanel()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // // }
    // this.overlay.show();







    LoadingPanelCreateIfNeeded();
  

    _LoadingPanel.show();
    // ✅ push browser back (ikut style kau)
    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
      AyohaBrowserBack.push('LoadingPanel', function () {
     
        LoadingPanelHide(true);
      });
    }
   








    isLoadingPanelOpen = 'Y';
    Ext.getCmp('htmlIcon').setHtml('<div style="width:100%;height:52px;text-align:center;"><img src="' + Icon + '" style="width:52px;height:52px;"/></div>');
    Ext.getCmp('htmlTxt').setHtml('<div style="width:100%;text-align:center;font-size:11px;color:black;font-weight:bold;">'+Msg+'</div>');

}
