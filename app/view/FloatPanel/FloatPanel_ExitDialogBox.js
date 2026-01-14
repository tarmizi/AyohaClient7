Ext.define('BuskartApp.view.FloatPanel.FloatPanel_ExitDialogBox', {

});

var _FloatPanel_ExitDialogBox;


var isFloatPanel_ExitDialogBoxOpen = 'N';









function FloatPanel_ExitDialogBox() {

    _FloatPanel_ExitDialogBox =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: 230,
         width: '90%',
         id: 'LoadingFloatPanel_ExitDialogBoxID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 500,
         modal: true,
         hideOnMaskTap: false,
         layout: {
             type: 'vbox'
         },
         showAnimation: {
             type: 'popIn',
             duration: 150,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'popOut',
             duration: 250,
             easing: 'ease-out'
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px solid;background-color:white;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //listeners: {
         //    initialize: function (c) {
         //        this.element.on({
         //            swipe: function (e, node, options) {

         //                if (e.direction == "left") {
         //                    _FloatPanel_ExitDialogBox.hide(Ext.fx.Animation({
         //                        type: 'slideOut',
         //                        direction: 'left',
         //                        easing: 'cubic-bezier(.7,0,.7,1)',
         //                        duration: 250

         //                    }));
         //                } if (e.direction == "right") {
         //                    _FloatPanel_ExitDialogBox.hide(Ext.fx.Animation({
         //                        type: 'slideOut',
         //                        direction: 'right',
         //                        easing: 'cubic-bezier(.7,0,.7,1)',
         //                        duration: 250

         //                    }));
         //                }
         //                isFloatPanel_ExitDialogBoxOpen = 'N';
         //            }
         //        });
         //    }
         //},

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             style: 'border-bottom:0px solid;background-color:white;',

             // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center'

             },

             items: [





                 {

                     xtype: 'container',
                     width: '100%',
                     // docked: 'top',
                     // width: 40,
                     style: ' background-color:transparent;',
                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_ExitDialogBoxHeader',
                     //style: {
                     //    // background: '#D25959',
                     //    background: 'transparent',
                     //    // border: '2px'
                     //},
                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                     // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                     layout: {
                         type: 'hbox',
                         pack: 'center',
                         align: 'center',
                     },
                     // hidden:true,
                     items:
                            [




                                           {
                                               xtype: 'spacer',

                                           },


                                            {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_ExitDialogBoxBack',
                                                height: 30,
                                                width: 30,
                                                margin: '10 0 0 0',
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/xcloseblack01.png" width="20" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    AddRoutePages("FloatPanel_ExitDialogBoxHide()");
                                                    _FloatPanel_ExitDialogBox.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                        duration: 250,
                                                        easing: 'ease-out'

                                                    }));
                                                    isFloatPanel_ExitDialogBoxOpen = 'N';                                                   
                                                }
                                            },

                                            {
                                                xtype: 'panel',
                                                width: 15
                                            }









                            ]

                 },



            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_ExitDialogBoxBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: '100%',
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },
                items: [


                    {
                        xtype: 'container',
                        margin: '0 0 0 0',
                        id: 'FloatPanel_ExitDialogBoxBorderBgInner',
                        //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                        style: ' background-color:transparent;',
                        height: '100%',
                        width: '90%',
                        // style: 'border:2px solid #D25959;',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'left'
                        },
                        items: [

                            {
                                margin: '5 0 0 28',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Exit Application</div>',

                            },
                            {
                                margin: '10 0 0 28',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Are you sure you want to exit?</div>',

                            }

                        ]


                    },


                    {
                        xtype: 'container',
                        width: '100%',
                        margin: '70 0 0 0',
                        height: 30,
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'
                        },
                        items: [
                             {
                                 id: 'htmlFloatPanel_ExitDialogBox_No',
                                 //margin: '-27 0 0 0',
                                 //width: 80,
                                 //height: 30,
                                 margin: '0 0 0 0',
                                 html: '<button OnClick="FloatPanel_ExitDialogBoxHide()" class="buttonNoWhite">No</button>'



                             },
                                   {
                                       xtype: 'panel',
                                       width: 20
                                   },
                                   {
                                       id: 'htmlFloatPanel_ExitDialogBox_Yes',
                                       //margin: '-27 0 0 0',
                                       margin: '0 0 0 0',
                                       html: '<button OnClick="FloatPanel_ExitDialogBox_Yes()" class="buttonYesPurple">Yes</button>'



                                   },
                        ]
                    }





                ]


            },









             ]




         }







     });
    return _FloatPanel_ExitDialogBox;





}

function FloatPanel_ExitDialogBoxShow() {
    AddRoutePages("FloatPanel_ExitDialogBoxHide()");
    Ext.Viewport.remove(_FloatPanel_ExitDialogBox);
    this.overlay = Ext.Viewport.add(FloatPanel_ExitDialogBox());
    this.overlay.show();
    isFloatPanel_ExitDialogBoxOpen = 'Y';
    
   
}


function FloatPanel_ExitDialogBoxHide() {
    _FloatPanel_ExitDialogBox.hide(); isFloatPanel_ExitDialogBoxOpen = 'N';
    RemovePages("FloatPanel_ExitDialogBoxHide()");  
}

var openedWindow = "NoOut";
var openedApp;

function FloatPanel_ExitDialogBox_Yes() {
   /// open_a_window();
    AddRoutePages("FloatPanel_ExitDialogBoxHide()");
    openedWindow = "YesOut";
    closeAyoha('quit')
  //  openedWindow = window.open('https://ayoha-reward.com', "_self");
    //openedApp = window.open('https://setkita.com/termandcondition.html', '_self', '');
   // openedApp.close();
   // window.close()
  //  setTimeout("window.close()", 3000)
   // setTimeout(alert("adsadsa"), 3000)
   
    //window.close();
   // navigator.app.exitApp();
   
}