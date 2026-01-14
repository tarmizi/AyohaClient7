Ext.define('BuskartApp.view.Master.FloatPanel_BankAccountName', {

});

var _FloatPanel_BankAccountName;


var isFloatPanel_BankAccountNameOpen = 'N';











function FloatPanel_BankAccountName() {

    _FloatPanel_BankAccountName =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: 460,
         width: '95%',
         id: 'LoadingFloatPanel_BankAccountNameID',
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
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'fadeOut',
             // direction: 'up',
             easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 400

         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         // style: 'border-bottom:1px solid;background-color:white;',
         style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_BankAccountName.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_BankAccountName.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_BankAccountNameOpen = 'N';
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             //  style: 'border-bottom:0px solid;background-color:white;',

             style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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

                     id: 'containerFloatPanel_BankAccountNameHeader',
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
                                              xtype: 'button',
                                              id: 'btnFloatPanel_BankAccountNameBack',
                                              height: 30,
                                              width: 35,
                                              // iconCls: 'list',
                                              html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {

                                                  _FloatPanel_BankAccountName.hide(Ext.fx.Animation({
                                                      type: 'slideOut',
                                                      direction: 'left',
                                                      easing: 'cubic-bezier(.7,0,.7,1)',
                                                      duration: 250

                                                  }));
                                                  isFloatPanel_BankAccountNameOpen = 'N';

                                              }
                                          },

                                           {
                                               xtype: 'spacer',

                                           },


                                             {
                                                 margin: '0 0 0 0',
                                                 html: '<font size=2 color=white><b>Bank Account List</b></font>'
                                             },












                            ]

                 },



            {


                // xtype: 'button',
                xtype: 'container',
                margin: '10 0 0 0',
                id: 'FloatPanel_BankAccountNameBorderBg',
                style: 'background-image: url("resources/icons/banklogo.png"); background-size: 100% 100%;background-repeat:no-repeat',
                //style: ' background-color:transparent;',
                height: 400,
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'hbox',
                    pack: 'start',
                    align: 'center'
                },
                items: [


                    {

                        xtype: 'container',
                        margin: '0 0 0 0',
                        id: 'FloatPanel_BankAccountNameLineOne',
                        // style: 'background-image: url("resources/icons/banklogo.png"); background-size: 100% 100%;background-repeat:no-repeat',
                        style: ' background-color:transparent;',
                        height: 400,
                        width: '33.6%',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'
                        },
                        items: [
                             {
                                 xtype: 'button',
                                 id: 'btnFloatPanel_BankAccountName_AffinBank',
                                 margin: '4 0 0 0',
                                 height: 46,
                                 width: '96%',
                                 ui: 'plain',
                                 handler: function () {
                                     // DrawerMenuShow();

                                     document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "AFFIN BANK";
                                     FloatPanel_BankAccountNameHide();

                                 }
                             },
                               {
                                   xtype: 'button',
                                   id: 'btnFloatPanel_BankAccountName_AllianceBank',
                                   margin: '4 0 0 0',
                                   height: 46,
                                   width: '96%',
                                   ui: 'plain',
                                   handler: function () {
                                       // DrawerMenuShow();                                     
                                       document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "ALLIANCE BANK";
                                       FloatPanel_BankAccountNameHide();
                                   }
                               },

                                 {
                                     xtype: 'button',
                                     id: 'btnFloatPanel_BankAccountName_BankIslam',
                                     margin: '4 0 0 0',
                                     height: 46,
                                     width: '96%',
                                     ui: 'plain',
                                     handler: function () {
                                         // DrawerMenuShow();

                                         document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "BANK ISLAM";
                                         FloatPanel_BankAccountNameHide();
                                     }
                                 },
                                  {
                                      xtype: 'button',
                                      id: 'btnFloatPanel_BankAccountName_CIMBIslam',
                                      margin: '4 0 0 0',
                                      height: 46,
                                      width: '96%',
                                      ui: 'plain',
                                      handler: function () {

                                          document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "CIMB ISLAMIC BANK";
                                          FloatPanel_BankAccountNameHide();
                                      }
                                  },
                                   {
                                       xtype: 'button',
                                       id: 'btnFloatPanel_BankAccountName_Maybank',
                                       margin: '4 0 0 0',
                                       height: 46,
                                       width: '96%',
                                       ui: 'plain',
                                       handler: function () {
                                           document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "MAYBANK";
                                           FloatPanel_BankAccountNameHide();
                                       }
                                   },
                                   {
                                       xtype: 'button',
                                       id: 'btnFloatPanel_BankAccountName_OCBCAlAminBank',
                                       margin: '4 0 0 0',
                                       height: 46,
                                       width: '96%',
                                       ui: 'plain',
                                       handler: function () {
                                           document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "OCBC AL AMIN BANK";
                                           FloatPanel_BankAccountNameHide();
                                       }
                                   },

                                   {
                                       xtype: 'button',
                                       id: 'btnFloatPanel_BankAccountName_RhbBank',
                                       margin: '4 0 0 0',
                                       height: 46,
                                       width: '96%',
                                       ui: 'plain',
                                       handler: function () {
                                           document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "RHB BANK";
                                           FloatPanel_BankAccountNameHide();
                                       }
                                   },
                                   {
                                       xtype: 'button',
                                       id: 'btnFloatPanel_BankAccountName_StandardCharteredSadiqBank',
                                       margin: '4 0 0 0',
                                       height: 46,
                                       width: '96%',
                                       ui: 'plain',
                                       handler: function () {
                                           // DrawerMenuShow();
                                           document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "STANDARD CHARTERED SAADIQ";
                                           FloatPanel_BankAccountNameHide();

                                       }
                                   },
                        ]
                    },
                         {

                             xtype: 'container',
                             margin: '0 0 0 0',
                             id: 'FloatPanel_BankAccountNameLineTwo',
                             // style: 'background-image: url("resources/icons/banklogo.png"); background-size: 100% 100%;background-repeat:no-repeat',
                             style: ' background-color:transparent;',
                             height: 400,
                             width: '33.6%',
                             layout: {
                                 type: 'vbox',
                                 pack: 'start',
                                 align: 'center'
                             },
                             items: [
                                 {
                                     xtype: 'button',
                                     id: 'btnFloatPanel_BankAccountName_AffinBankIslam',
                                     margin: '4 0 0 0',
                                     height: 46,
                                     width: '96%',
                                     ui: 'plain',
                                     handler: function () {

                                         document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "AFFIN ISLAMIC BANK";
                                         FloatPanel_BankAccountNameHide();
                                     }
                                 },
                               {
                                   xtype: 'button',
                                   id: 'btnFloatPanel_BankAccountName_AmBank',
                                   margin: '4 0 0 0',
                                   height: 46,
                                   width: '96%',
                                   ui: 'plain',
                                   handler: function () {
                                       document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "AM BANK";
                                       FloatPanel_BankAccountNameHide();
                                   }
                               },

                                 {
                                     xtype: 'button',
                                     id: 'btnFloatPanel_BankAccountName_BankMuamalat',
                                     margin: '4 0 0 0',
                                     height: 46,
                                     width: '96%',
                                     ui: 'plain',
                                     handler: function () {
                                         document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "BANK MUAMALAT";
                                         FloatPanel_BankAccountNameHide();
                                     }
                                 },
                                  {
                                      xtype: 'button',
                                      id: 'btnFloatPanel_BankAccountName_HongLeongBank',
                                      margin: '4 0 0 0',
                                      height: 46,
                                      width: '96%',
                                      ui: 'plain',
                                      handler: function () {
                                          document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "HONG LEONG BANK";
                                          FloatPanel_BankAccountNameHide();
                                      }
                                  },
                                   {
                                       xtype: 'button',
                                       id: 'btnFloatPanel_BankAccountName_MaybankIslamik',
                                       margin: '4 0 0 0',
                                       height: 46,
                                       width: '96%',
                                       ui: 'plain',
                                       handler: function () {
                                           // DrawerMenuShow();
                                           document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "MAYBANK ISLAMIC BANK";
                                           FloatPanel_BankAccountNameHide();
                                       }
                                   },
                                   {
                                       xtype: 'button',
                                       id: 'btnFloatPanel_BankAccountName_PublicBank',
                                       margin: '4 0 0 0',
                                       height: 46,
                                       width: '96%',
                                       ui: 'plain',
                                       handler: function () {
                                           document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "PUBLIC BANK";
                                           FloatPanel_BankAccountNameHide();
                                       }
                                   },

                                   {
                                       xtype: 'button',
                                       id: 'btnFloatPanel_BankAccountName_RhbIslamikBank',
                                       margin: '4 0 0 0',
                                       height: 46,
                                       width: '96%',
                                       ui: 'plain',
                                       handler: function () {
                                           document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "RHB ISLAMIC BANK";
                                           FloatPanel_BankAccountNameHide();
                                       }
                                   },
                                   {
                                       xtype: 'button',
                                       id: 'btnFloatPanel_BankAccountName_UOBBank',
                                       margin: '4 0 0 0',
                                       height: 46,
                                       width: '96%',
                                       ui: 'plain',
                                       handler: function () {
                                           document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "UOB BANK";
                                           FloatPanel_BankAccountNameHide();
                                       }
                                   },
                             ]
                         },
                              {

                                  xtype: 'container',
                                  margin: '0 0 0 0',
                                  id: 'FloatPanel_BankAccountNameLineThree',
                                  style: ' background-color:transparent;',
                                  height: 400,
                                  width: '33.6%',
                                  layout: {
                                      type: 'vbox',
                                      pack: 'start',
                                      align: 'center'
                                  },
                                  items: [
                                       {
                                           xtype: 'button',
                                           id: 'btnFloatPanel_BankAccountName_AllianceBank',
                                           margin: '4 0 0 0',
                                           height: 46,
                                           width: '96%',
                                           ui: 'plain',
                                           handler: function () {
                                               document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "ALLIANCE BANK";
                                               FloatPanel_BankAccountNameHide();
                                           }
                                       },
                               {
                                   xtype: 'button',
                                   id: 'btnFloatPanel_BankAccountName_AmIslamikBank',
                                   margin: '4 0 0 0',
                                   height: 46,
                                   width: '96%',
                                   ui: 'plain',
                                   handler: function () {
                                       document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "AM ISLAMIC BANK";
                                       FloatPanel_BankAccountNameHide();
                                   }
                               },

                                 {
                                     xtype: 'button',
                                     id: 'btnFloatPanel_BankAccountName_CIMBBank',
                                     margin: '4 0 0 0',
                                     height: 46,
                                     width: '96%',
                                     ui: 'plain',
                                     handler: function () {
                                         document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "CIMB BANK";
                                         FloatPanel_BankAccountNameHide();
                                     }
                                 },
                                  {
                                      xtype: 'button',
                                      id: 'btnFloatPanel_BankAccountName_HongLeongIslamikBank',
                                      margin: '4 0 0 0',
                                      height: 46,
                                      width: '96%',
                                      ui: 'plain',
                                      handler: function () {
                                          document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "HONG LEONG ISLAMIC BANK";
                                          FloatPanel_BankAccountNameHide();
                                      }
                                  },
                                   {
                                       xtype: 'button',
                                       id: 'btnFloatPanel_BankAccountName_OCBCBank',
                                       margin: '4 0 0 0',
                                       height: 46,
                                       width: '96%',
                                       ui: 'plain',
                                       handler: function () {
                                           document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "OCBC BANK";
                                           FloatPanel_BankAccountNameHide();
                                       }
                                   },
                                   {
                                       xtype: 'button',
                                       id: 'btnFloatPanel_BankAccountName_PublicIslamikBank',
                                       margin: '4 0 0 0',
                                       height: 46,
                                       width: '96%',
                                       ui: 'plain',
                                       handler: function () {
                                           document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "PUBLIC ISLAMIC BANK";
                                           FloatPanel_BankAccountNameHide();
                                       }
                                   },

                                   {
                                       xtype: 'button',
                                       id: 'btnFloatPanel_BankAccountName_StandardCharteretedBank',
                                       margin: '4 0 0 0',
                                       height: 46,
                                       width: '96%',
                                       ui: 'plain',
                                       handler: function () {
                                           document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = "STANDARD CHARETED BANK";
                                           FloatPanel_BankAccountNameHide();
                                       }
                                   },
                                  ]
                              }






                ]


            },









             ]




         }







     });
    return _FloatPanel_BankAccountName;





}

function FloatPanel_BankAccountNameShow() {

    Ext.Viewport.remove(_FloatPanel_BankAccountName);
    this.overlay = Ext.Viewport.add(FloatPanel_BankAccountName());
    this.overlay.show();
    isFloatPanel_BankAccountNameOpen = 'Y';
}


function FloatPanel_BankAccountNameHide() {
    _FloatPanel_BankAccountName.hide(); isFloatPanel_BankAccountNameOpen = 'N';
}








