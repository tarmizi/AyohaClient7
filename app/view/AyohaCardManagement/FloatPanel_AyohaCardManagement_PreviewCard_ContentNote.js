Ext.define('BuskartApp.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_PreviewCard_ContentNote', {

});



var _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote=null;





function FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteCreateIfNeeded() {

    if (_FloatPanel_AyohaCardManagement_PreviewCard_ContentNote && !_FloatPanel_AyohaCardManagement_PreviewCard_ContentNote.destroyed) return;

    _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote = Ext.create('Ext.Container',


    {
        id: 'FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteID',
       // xtype: 'panel',
        zIndex: 250,
        height: '100%',
        width: '100%',

        styleHtmlContent: true,

        floated: true,
        centered: true,
        fullscreen: true,        // ✅ ganti height/width 100%
        closeAction: 'hide',
        modal: true,
        hideOnMaskTap: true,
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'

        },
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },
        listeners: {
    
 
            // ✅ kalau user tap mask, close macam standard
            beforehide: function () {
              // kalau hide dipanggil bukan dari function kita, block dulu
              // (optional: boleh allow kalau kau nak)
              return true;
            }
          },
       // style: 'background: linear-gradient(135deg, #1A1E7F 0%, #491A7F 45%, #7B1A7F 100%);',
      //  style: 'background: linear-gradient(135deg, #280E46 0%, #491A7F 45%, #6323AB 100%);',
      //  style:'background: linear-gradient(135deg, #121787 0%, #491A7F 50%, #651287 100%);',
      style: 'background: rgba(20,10,30,0.75);',
      //  style: 'background: rgba(20,10,30,.45); backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);',
        //style: 'background: rgba(20,10,30,.30); backdrop-filter: blur(8px) saturate(110%); -webkit-backdrop-filter: blur(8px) saturate(110%);',

        
        // listeners: {
        //     initialize: function (c) {
        //         this.element.on({
        //             swipe: function (e, node, options) {
        //                 //if (e.direction == "up") {
        //                 //    LoyaltyCardRedeemListHide();
        //                 //}
        //                 if (e.direction == "left") {
        //                     _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote.hide(Ext.fx.Animation({
        //                         type: 'slideOut',
        //                         direction: 'left',
        //                         easing: 'cubic-bezier(.7,0,.7,1)',
        //                         duration: 250

        //                     }));

                           
        //                 } if (e.direction == "right") {
        //                     _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote.hide(Ext.fx.Animation({
        //                         type: 'slideOut',
        //                         direction: 'right',
        //                         easing: 'cubic-bezier(.7,0,.7,1)',
        //                         duration: 250

        //                     }));
                         
        //                 }
        //                 if (e.direction == "up") {
        //                     _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote.hide(Ext.fx.Animation({
        //                         type: 'slideOut',
        //                         direction: 'up',
        //                         easing: 'cubic-bezier(.7,0,.7,1)',
        //                         duration: 250

        //                     }));
                        
        //                 }
        //                 if (e.direction == "down") {
        //                     _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote.hide(Ext.fx.Animation({
        //                         type: 'slideOut',
        //                         direction: 'down',
        //                         easing: 'cubic-bezier(.7,0,.7,1)',
        //                         duration: 250

        //                     }));
                           
        //                 }
        //                 is_FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide = 'N';
        //                 RemovePages("FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide()");
        //             }
        //         });
        //     }
        // },


        items: {
            //zIndex: 40,
            xtype: 'container',
           // style: 'background-color:transparent',
            style:ayohaThemeColor_Card(),
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center'
            },
            height: 340,
        //  height: '60%',
        width: '90%',
            items: [


{

xtype: 'container',
width: '100%',
docked: 'top',
// width: 40,

//  title: '<font size="3" color="white">Live Tracking Map</font>',
//hidden: true,

id: 'containerFloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHeader',
style: {
    // background: '#D25959',
    background: 'transparent',
    // border: '2px'
},
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
                         xtype: 'button',
                         id: 'btnFloatPanel_AyohaCardManagement_PreviewCard_ContentNoteBack',
                         height: 30,
                         width: 65,
                         margin:'15 0 0 0',
                         // iconCls: 'list',
                         html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                         ui: 'plain',
                         handler: function () {
                            FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide(false);
                            
                         }
                     },
                     {
                        xtype: 'spacer',

                    },
                     {
                         margin: '10 0 0 0',
                         html: '<font size=4 color=white><b>The Perk!</b></font>'
                     },
                      

                     {
                        xtype: 'spacer',
width:14
                    },

                              
                           









       ]

},




                {
                    xtype: 'container',
                    style: ' background-color:transparent',
                    margin: '20 0 0 0',
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'center'
                    },
                    items: [
                        {

                            id: 'FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteImg',
                            //width: 250,
                            //height: 250,
                            //// iconCls: 'list',
                            html: '<div ><img src="resources/icons/addNewCard.png" width="50" height="50" alt="Company Name"></div>',

                        },
                       
                    ]
                },

                 {
                     margin: '10 0 0 0',
                     id:'FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteTxt',
                     html: '<font size=2 color=white>Note</font>',

                 },

                


            ]

        },






    });
}






// function FloatPanel_AyohaCardManagement_PreviewCard_ContentNote() {

//     _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote = Ext.create('Ext.Panel',


//         {
//             id: 'FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteID',
//             xtype: 'panel',
//             zIndex: 400,
//             xtype: 'container',
//             height: 340,
//             //  height: '60%',
//             width: '90%',

//             styleHtmlContent: true,

//             floated: true,
//             centered: true,
//             fullscreen: true,        // ✅ ganti height/width 100%
//             closeAction: 'hide',
//             modal: true,
//             hideOnMaskTap: true,
//             layout: {
//                 type: 'fit'
//             },
//             showAnimation: {
//                 type: 'popIn',
//                 duration: 250,
//                 easing: 'ease-out'
//             },
//             hideAnimation: {
//                 type: 'popOut',
//                 duration: 250,
//                 easing: 'ease-out'
//             },

//             style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
//             listeners: {
//                 initialize: function (c) {
//                     this.element.on({
//                         swipe: function (e, node, options) {
//                             //if (e.direction == "up") {
//                             //    LoyaltyCardRedeemListHide();
//                             //}
//                             if (e.direction == "left") {
//                                 _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote.hide(Ext.fx.Animation({
//                                     type: 'slideOut',
//                                     direction: 'left',
//                                     easing: 'cubic-bezier(.7,0,.7,1)',
//                                     duration: 250

//                                 }));

                               
//                             } if (e.direction == "right") {
//                                 _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote.hide(Ext.fx.Animation({
//                                     type: 'slideOut',
//                                     direction: 'right',
//                                     easing: 'cubic-bezier(.7,0,.7,1)',
//                                     duration: 250

//                                 }));
                             
//                             }
//                             if (e.direction == "up") {
//                                 _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote.hide(Ext.fx.Animation({
//                                     type: 'slideOut',
//                                     direction: 'up',
//                                     easing: 'cubic-bezier(.7,0,.7,1)',
//                                     duration: 250

//                                 }));
                            
//                             }
//                             if (e.direction == "down") {
//                                 _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote.hide(Ext.fx.Animation({
//                                     type: 'slideOut',
//                                     direction: 'down',
//                                     easing: 'cubic-bezier(.7,0,.7,1)',
//                                     duration: 250

//                                 }));
                               
//                             }
//                             is_FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide = 'N';
//                             RemovePages("FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide()");
//                         }
//                     });
//                 }
//             },


//             items: {
//                 //zIndex: 40,
//                 xtype: 'container',
//                 style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
//                 layout: {
//                     type: 'vbox',
//                     pack: 'start',
//                     align: 'center'
//                 },
//                 width: '100%',
//                 height: '100%',
//                 items: [


// {

//     xtype: 'container',
//     width: '100%',
//     docked: 'top',
//     // width: 40,

//     //  title: '<font size="3" color="white">Live Tracking Map</font>',
//     //hidden: true,

//     id: 'containerFloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHeader',
//     style: {
//         // background: '#D25959',
//         background: 'transparent',
//         // border: '2px'
//     },
//     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//     // style: 'border-bottom:2px solid #D25959;background-color:transparent',
//     layout: {
//         type: 'hbox',
//         pack: 'center',
//         align: 'center',
//     },
//     // hidden:true,
//     items:
//            [


//                          {
//                              xtype: 'button',
//                              id: 'btnFloatPanel_AyohaCardManagement_PreviewCard_ContentNoteBack',
//                              height: 30,
//                              width: 35,
//                              // iconCls: 'list',
//                              html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
//                              ui: 'plain',
//                              handler: function () {

//                                  _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote.hide(Ext.fx.Animation({
//                                      type: 'slideOut',
//                                      direction: 'left',
//                                      easing: 'cubic-bezier(.7,0,.7,1)',
//                                      duration: 250

//                                  }));
//                                  is_FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide = 'N';
//                                  RemovePages("FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide()");
//                              }
//                          },
//                          {
//                             xtype: 'spacer',

//                         },
//                          {
//                              margin: '0 0 0 0',
//                              html: '<font size=2 color=white><b>Card Content Note</b></font>'
//                          },
//                           {
//                               xtype: 'spacer',
//                               width:'3%',

//                           },



                                  
                               









//            ]

// },




//                     {
//                         xtype: 'container',
//                         style: ' background-color:transparent',
//                         margin: '30 0 0 0',
//                         layout: {
//                             type: 'vbox',
//                             pack: 'center',
//                             align: 'center'
//                         },
//                         items: [
//                             {

//                                 id: 'FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteImg',
//                                 //width: 250,
//                                 //height: 250,
//                                 //// iconCls: 'list',
//                                 html: '<div ><img src="resources/icons/addNewCard.png" width="50" height="50" alt="Company Name"></div>',

//                             },
                           
//                         ]
//                     },

//                      {
//                          margin: '10 0 0 0',
//                          id:'FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteTxt',
//                          html: '<font size=2 color=white>Note</font>',

//                      },

                    


//                 ]

//             },






//         });

//     return _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote;
// }






function FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(ContentNotes,TextNote) {
    // Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_PreviewCard_ContentNote);
    // this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_PreviewCard_ContentNote());
    // this.overlay.show();
    // AddRoutePages("FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide()");



    FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteCreateIfNeeded();


    _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote.show();
    // ✅ push browser back (ikut style kau)
    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
      AyohaBrowserBack.push('FloatPanel_AyohaCardManagement_PreviewCard_ContentNote', function () {
     
        FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide(true);
      });
    }




    is_FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide = 'Y';
  
    var width = ContentNotes.replace("width:70px", "width:170px");
    var whreplace = width.replace("height:70px", "height:170px");
    var fontsize=whreplace.replace("35px","85px");
    var radius = fontsize.replace("50px", "350px");

    var str = radius;
    var n = str.includes("font size=2");

    var Firsttext;
    if (n) {
         Firsttext = radius.replace("23px", "0px");
    } else
    {
        Firsttext = radius.replace("23px", "22px");
    }



    
    var Secondtext = Firsttext.replace("-20px", "-210px");
    var Final = Secondtext.replace("size=2", "size=8");
   // var htmlcontent = '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard3">1</div></div>';
    Ext.getCmp('FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteImg').setHtml(Final);
    Ext.getCmp('FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteTxt').setHtml("<font size=4 color=white>" + TextNote + "</font>")
    

}
var is_FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide = 'N';

function FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide(fromBack, animCfg) {
    // if (is_FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide == 'Y') {
    //     _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote.hide();
    //     is_FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide = 'N';
    //     RemovePages("FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide()");
    // }



    

    if (is_FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide == 'Y') {
       
        _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote.hide();


      

        if (animCfg) {
            _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote.hide(Ext.fx.Animation(animCfg));
          } else {
            _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote.hide();
          }
          is_FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide = 'N';
                                          
       
         // RemovePages("FloatPanel_ForgotPasswordHide()");
        
          // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
          if (fromBack !== true) {
            AyohaBrowserBack.close('FloatPanel_AyohaCardManagement_PreviewCard_ContentNote');
          }
    }

}



