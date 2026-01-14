
Ext.define('BuskartApp.view.AyohaeWallet.FloatPanel_AyohaeWallet_Passcode', {

});


var _FloatPanel_AyohaeWallet_Passcode;


var isFloatPanel_AyohaeWallet_PasscodeOpen = 'N';



var _FloatPanel_GeneratePoint_isFirstLoad = "N";







function FloatPanel_AyohaeWallet_Passcode() {

    _FloatPanel_AyohaeWallet_Passcode =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaeWallet_PasscodeID',
         draggable: false,
         //  styleHtmlContent: true,
         zIndex: 450,

         centered: true,
         //bottom: 64,
         // zIndex: 100,
         modal: false,
         // hideOnMaskTap: true,
         layout: {
             type: 'fit'
             //type: 'vbox',
             //pack: 'start',
             //align: 'center',
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'popOut',
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         // style: 'border-bottom:1px solid;background-color:#353839;',
         // style: 'border-bottom:1px solid;background-color:white;',
         style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75 );',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaeWallet_Passcode.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaeWallet_PasscodeOpen = 'N';
                             _FloatPanel_GeneratePoint_isFirstLoad = "N";
                             a = "";

                             document.getElementById('input-FloatPanel_AyohaeWallet_Passcode_Amount').value = "";

                             RemovePages("FloatPanel_AyohaeWallet_PasscodeHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaeWallet_Passcode.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaeWallet_PasscodeOpen = 'N';
                             _FloatPanel_GeneratePoint_isFirstLoad = "N";
                             a = "";

                             document.getElementById('input-FloatPanel_AyohaeWallet_Passcode_Amount').value = "";

                             RemovePages("FloatPanel_AyohaeWallet_PasscodeHide()");
                         }

                     }
                 });
             }
         },


         items: [
        {

            xtype: 'container',
            width: '100%',
           // styleHtmlContent: true,
            // hidden:true,
            docked: 'top',
            height: 30,
            // width: 40,

            //  title: '<font size="3" color="white">Live Tracking Map</font>',
            //hidden: true,
            // style: ' background-color:transparent;',

            id: 'containerFloatPanel_AyohaeWallet_PasscodeHeader',
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
                           xtype: 'panel',
                           width:25,
                       },

                                 {
                                     xtype: 'button',
                                     id: 'btnFloatPanel_AyohaeWallet_PasscodeBack',
                                     height: 30,
                                     width: 35,
                                     margin: '20 0 0 0',
                                     // iconCls: 'list',
                                     html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                     ui: 'plain',
                                     handler: function () {

                                         _FloatPanel_AyohaeWallet_Passcode.hide(Ext.fx.Animation({
                                             type: 'slideOut',
                                             direction: 'left',
                                             easing: 'cubic-bezier(.7,0,.7,1)',
                                             duration: 250

                                         }));
                                         isFloatPanel_AyohaeWallet_PasscodeOpen = 'N';
                                         _FloatPanel_GeneratePoint_isFirstLoad = "N";
                                         a = "";

                                         document.getElementById('input-FloatPanel_AyohaeWallet_Passcode_Amount').value = "";

                                         RemovePages("FloatPanel_AyohaeWallet_PasscodeHide()");
                                     }
                                 },

                                  {
                                      xtype: 'spacer',

                                  },

                                  













                   ]

        },

             {
                 xtype: 'container',
                 width: '100%',
                 height: '100%',
                style: "background-color: transparent;",
                // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75 );',
                 layout: {
                     type: 'vbox',
                     pack: 'start',
                     align: 'center'

                 },
                 items: [


                        {
                            xtype: 'container',
                            width: '100%',
                            margin: '30 0 0 30',
                           // height: 50,
                            style: "background-color: transparent;",
                            // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75 );',
                            layout: {
                                type: 'vbox',
                                pack: 'left',
                                align: 'left'

                            },
                            items: [
                                  {
                                    
                                      html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-family:Arial, sans-serif;font-size: 22px;font-weight:bold;width:100%;" >Ayoha e-Wallet Passcode</div>',
                                  },
                                       {
                                           margin: '10 0 0 0',
                                           id: 'htmlFloatPanel_AyohaeWallet_Passcode_Label',
                                           html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-family:Arial, sans-serif;font-size: 11px;font-weight:normal;width:100%;" >Secure your payment with 6 digit Passcode</div>',
                                       },
                            ]

                        },

                     {
                         xtype: 'container',
                         width: '100%',
                         height: 200,
                         style: "background-color: transparent;",
                        // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75 );',
                         layout: {
                             type: 'vbox',
                             pack: 'center',
                             align: 'center'

                         },
                         items:[
                             
                                        {
                                            margin: '0 0 0 0',
                                            id: 'htmlFloatPanel_AyohaeWallet_passcodetxt',
                                            hidden:true,
                                            //  html: '<input type="number" div style="border-bottom:1px none #ECF0F1;background: transparent;color:black; text-align:center;font-size: 46px;font-weight:normal;width:100%;" >RM 0.00</div>',
                                            html: '<input type="password" id="input-FloatPanel_AyohaeWallet_Passcode_Amount" inputmode="none"  maxlength="6"  value="******" style="pointer-events:none;border: 1px none white;color:white;text-align: center;font-size:46px;background-color: transparent;width:100%;height:70px;font-weight:bold;">'
                                        },
                                        {
                                            margin: '0 0 0 0',                                                                                 
                                            xtype: 'container',
                                            width: '100%',                                           
                                            height: 70,
                                            id: 'containerFloatPanel_AyohaeWallet_PasscodeCursorAnim',
                                            style: {
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
                                            items: [
                                                {
                                                    html: '<div ><img src="resources/icons/passcodeCursorAnim.gif" width="42" height="71" alt="Company Name"></div>',
                                                }
                                            ]
                                        },


                         ]
                         
                     },

                     {
                         xtype: 'container',
                         //  id: 'containerlFloatPanel_AyohaeWallet_Passcode_MasterNumber',
                         id: 'containerFloatPanel_AyohaeWallet_PasscodeMaster',
                         style: ' background-color: transparent',
                         flex: 1,
                         // style: 'background-color: #fac;background-image: linear-gradient( #c800ffc9,#ff00de75);',
                       //  height: '100%',
                         width: '100%',
                         layout: {
                             type: 'vbox',
                             pack: 'center',
                             align: 'center'

                         },
                         items: [



                             {
                                 xtype: 'container',
                                 id: 'containerFloatPanel_AyohaeWallet_Passcode_MasterNumberRow01',
                                 style: ' background-color: transparent',
                                 flex: 1,
                                 width: '100%',
                                 // flex: 1,
                                 layout: {
                                     type: 'hbox',
                                     pack: 'center',
                                     align: 'center'

                                 },
                                 items: [
                                       {
                                           xtype: 'button',
                                           id: 'btnFloatPanel_AyohaeWallet_Passcode_Number1',
                                           flex: 1,
                                           // iconCls: 'list',
                                           //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                           html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >1</div>',
                                           ui: 'plain',
                                           handler: function () {
                                               sendNum(1);
                                           }
                                       },

                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_AyohaeWallet_Passcode_Number2',
                                             //height: 30,
                                             //width: 35,
                                             flex: 1,
                                             // iconCls:
                                             // iconCls: 'list',
                                             //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                             html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >2</div>',
                                             ui: 'plain',
                                             handler: function () {
                                                 sendNum(2);
                                             }
                                         },
                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_AyohaeWallet_Passcode_Number3',
                                             //height: 30,
                                             //width: 35,
                                             flex: 1,
                                             // iconCls:
                                             // iconCls: 'list',
                                             //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                             html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >3</div>',
                                             ui: 'plain',
                                             handler: function () {
                                                 sendNum(3);
                                             }
                                         },

                                 ]

                             },


                             //////////////////////////
                             {
                                 xtype: 'container',
                                 id: 'containerFloatPanel_AyohaeWallet_Passcode_MasterNumberRow02',
                                 style: ' background-color: transparent',
                                 flex: 1,
                                 width: '100%',
                                 // flex: 1,
                                 layout: {
                                     type: 'hbox',
                                     pack: 'center',
                                     align: 'center'

                                 },
                                 items: [
                                       {
                                           xtype: 'button',
                                           id: 'btnFloatPanel_AyohaeWallet_Passcode_Number4',
                                           flex: 1,
                                           // iconCls: 'list',
                                           //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                           html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >4</div>',
                                           ui: 'plain',
                                           handler: function () {
                                               sendNum(4);
                                           }
                                       },

                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_AyohaeWallet_Passcode_Number5',
                                             //height: 30,
                                             //width: 35,
                                             flex: 1,
                                             // iconCls:
                                             // iconCls: 'list',
                                             //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                             html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >5</div>',
                                             ui: 'plain',
                                             handler: function () {
                                                 sendNum(5);
                                             }
                                         },
                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_AyohaeWallet_Passcode_Number6',
                                             //height: 30,
                                             //width: 35,
                                             flex: 1,
                                             // iconCls:
                                             // iconCls: 'list',
                                             //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                             html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >6</div>',
                                             ui: 'plain',
                                             handler: function () {
                                                 sendNum(6);
                                             }
                                         },

                                 ]

                             },
                             /////////////

                             {
                                 xtype: 'container',
                                 id: 'containerFloatPanel_AyohaeWallet_Passcode_MasterNumberRow03',
                                 style: ' background-color: transparent',
                                 flex: 1,
                                 width: '100%',
                                 // flex: 1,
                                 layout: {
                                     type: 'hbox',
                                     pack: 'center',
                                     align: 'center'

                                 },
                                 items: [
                                       {
                                           xtype: 'button',
                                           id: 'btnFloatPanel_AyohaeWallet_Passcode_Number7',
                                           flex: 1,
                                           // iconCls: 'list',
                                           //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                           html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >7</div>',
                                           ui: 'plain',
                                           handler: function () {
                                               sendNum(7);
                                           }
                                       },

                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_AyohaeWallet_Passcode_Number8',
                                             //height: 30,
                                             //width: 35,
                                             flex: 1,
                                             // iconCls:
                                             // iconCls: 'list',
                                             //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                             html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >8</div>',
                                             ui: 'plain',
                                             handler: function () {
                                                 sendNum(8);
                                             }
                                         },
                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_AyohaeWallet_Passcode_Number9',
                                             //height: 30,
                                             //width: 35,
                                             flex: 1,
                                             // iconCls:
                                             // iconCls: 'list',
                                             //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                             html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >9</div>',
                                             ui: 'plain',
                                             handler: function () {
                                                 sendNum(9);
                                             }
                                         },

                                 ]

                             },



                             //////////////////////

                             {
                                 xtype: 'container',
                                 id: 'containerFloatPanel_AyohaeWallet_Passcode_MasterNumberRow04',
                                 style: ' background-color: transparent',
                                 flex: 1,
                                 width: '100%',
                                 // flex: 1,
                                 layout: {
                                     type: 'hbox',
                                     pack: 'center',
                                     align: 'center'

                                 },
                                 items: [
                                      
                                      {
                                          xtype: 'button',
                                          id: 'btnFloatPanel_AyohaeWallet_Passcode_Numberfront',
                                          //  hidden:true,
                                          //height: 30,
                                          //width: 35,
                                          flex: 1,
                                          // iconCls:
                                          // iconCls: 'list',
                                          //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                          html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:transparent; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >.</div>',
                                          ui: 'plain',
                                          handler: function () {
                                              //sendNum('.');
                                          }
                                      },
                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_AyohaeWallet_Passcode_Number0',
                                             //height: 30,
                                             //width: 35,
                                             flex: 1,
                                             // iconCls:
                                             // iconCls: 'list',
                                             //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                             html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" >0</div>',
                                             ui: 'plain',
                                             handler: function () {
                                                 sendNum(0);
                                             }
                                         },
                                        
                                          {
                                              xtype: 'button',
                                              id: 'btnFloatPanel_AyohaeWallet_Passcode_NumberBack',
                                              flex: 1,
                                              // iconCls: 'list',
                                              //  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                              html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 26px;font-weight:bold;width:100%;" ><</div>',
                                              ui: 'plain',
                                              handler: function () {
                                                  Backspace();
                                                  //document.getElementById('vakje').value;
                                                  //document.getElementById('vakje').value = rekensom.substring(0, rekensom.length - 1);
                                              }
                                          },

                                 ]

                             },




                         ]

                     },

                     
                     {
                         xtype: 'container',
                         width: '100%',
                         height: 100,
                         docked: 'bottom',
                         layout: {
                             type: 'vbox',
                             pack: 'center',
                             align: 'center',
                         },
                         items: [
                             {
                                 xtype: 'container',
                                 width: '100%',
                                 height: 40,
                                 docked: 'bottom',
                                 hidden:true,
                                 id:'containerFloatPanel_AyohaeWallet_Passcode_WrongPasscode',
                                 layout: {
                                     type: 'hbox',
                                     pack: 'center',
                                     align: 'center',
                                 },
                                 items: [
                                      {
                                          width: 42,
                                          height: 42,
                                          margin:'-5 0 0 0',
                                          html: '<img style="width:32px;height:32px;" src="resources/icons/errorPasscode01.png">',

                                      },
                                     {
                                         width:200,
                                         html: '<div class="blink_me" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Arial, sans-serif;font-size: 16px;font-weight:bold;color:white;">Wrong Passcode !</div>',

                                     },
                                     {
                                         xtpe:'spacer'
                                     },
                                     {
                                          

                                             margin: '-2 0 0 0',
                                             height: 30,
                                             //width: 100,
                                             html: '<div onclick="FloatPanel_AyohaeWallet_ForgotPasswordShow();FloatPanel_AyohaeWallet_PasscodeHide();" style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;"><button class="buttonForgotPasswordeWallet" style="margin:0px 0px 0px 0px;"><u>Forgot Password ?</u></button></div>'
                                       
                                     }
                                 ]
                             }
                         ]
                     }

                 ]

             },









                       













         ]















     });
    return _FloatPanel_AyohaeWallet_Passcode;



}





function FloatPanel_AyohaeWallet_PasscodeShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaeWallet_Passcode);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet_Passcode());
    this.overlay.show();
    isFloatPanel_AyohaeWallet_PasscodeOpen = 'Y';
    _FloatPanel_GeneratePoint_isFirstLoad = "Y";
    
    AddRoutePages("FloatPanel_AyohaeWallet_PasscodeHide()");
    FloatPanel_AyohaeWallet_TransferConfirmHide();



   
    //FloatPanel_AyohaeWallet_PasscodeAdjustHeight();

    //Ext.getCmp('htmlFloatPanel_AyohaeWallet_Passcode_Logo').setHtml('<img src="' + GetEnterpriseLogoPath() + '" width="130" height="130"/>');

    //Ext.getCmp('htmlFloatPanel_AyohaeWallet_Passcode_Logo').setHtml('<img src="' + GetAyohaUserPicProfile() + '" style = "width: 120px; height: 120px; border:2px solid grey; border-radius: 50%; max-width:250px;" />');


    //Ext.getCmp('htmlFloatPanel_AyohaeWallet_Passcode_EnterpriseName').setHtml('<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 16px;font-weight:bold;width:100%;" >' + GetAyohaUserAccountNames() + '</div>');



    //Ext.getCmp('htmlFloatPanel_AyohaeWallet_Passcode_CampaignName').setHtml('<font size=2 color=white><b>' + GetAyohaUserMembershipNo() + '</b></font>');
    // document.getElementById("input-FloatPanel_AyohaeWallet_Passcode_Amount").addEventListener("input", inputFloatPanel_AyohaeWallet_Passcode_Amount);

  //  PointCampaignLoadByPointCampaignCodeStore();

    //Load_FloatPanel_AyohaeWallet_Passcode_PointCampaignRedeemLoadByPointCampaignCodeStore(PointCampaignCode);

    //  Ext.getCmp('htmlFloatPanel_AyohaeWallet_PasscodePointsCollected').setHtml('<div style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>' + localStorage.getItem("AyohaPoint") + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Ayoha Point</b></div><br>');



    //  Ext.getCmp('containerRedeemListItems').setHeight(adjustHeight());
    // AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore();


 


}


function FloatPanel_AyohaeWallet_PasscodeShow_SettingeWallet() {

    Ext.Viewport.remove(_FloatPanel_AyohaeWallet_Passcode);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet_Passcode());
    this.overlay.show();
    isFloatPanel_AyohaeWallet_PasscodeOpen = 'Y';
    _FloatPanel_GeneratePoint_isFirstLoad = "Y";

    AddRoutePages("FloatPanel_AyohaeWallet_PasscodeHide()");
    FloatPanel_AyohaeWallet_TransferConfirmHide();
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_passcodetxt').setHidden(true);
    //FloatPanel_AyohaeWallet_PasscodeAdjustHeight();
   
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Passcode_Label').setHtml('<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-family:Arial, sans-serif;font-size: 11px;font-weight:normal;width:100%;" >Secure your eWallet Setting with 6 digit Passcode</div>');



   
    //Ext.getCmp('htmlFloatPanel_AyohaeWallet_Passcode_Logo').setHtml('<img src="' + GetAyohaUserPicProfile() + '" style = "width: 120px; height: 120px; border:2px solid grey; border-radius: 50%; max-width:250px;" />');


    //Ext.getCmp('htmlFloatPanel_AyohaeWallet_Passcode_EnterpriseName').setHtml('<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 16px;font-weight:bold;width:100%;" >' + GetAyohaUserAccountNames() + '</div>');



    //Ext.getCmp('htmlFloatPanel_AyohaeWallet_Passcode_CampaignName').setHtml('<font size=2 color=white><b>' + GetAyohaUserMembershipNo() + '</b></font>');
    // document.getElementById("input-FloatPanel_AyohaeWallet_Passcode_Amount").addEventListener("input", inputFloatPanel_AyohaeWallet_Passcode_Amount);

    //  PointCampaignLoadByPointCampaignCodeStore();

    //Load_FloatPanel_AyohaeWallet_Passcode_PointCampaignRedeemLoadByPointCampaignCodeStore(PointCampaignCode);

    //  Ext.getCmp('htmlFloatPanel_AyohaeWallet_PasscodePointsCollected').setHtml('<div style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>' + localStorage.getItem("AyohaPoint") + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Ayoha Point</b></div><br>');



    //  Ext.getCmp('containerRedeemListItems').setHeight(adjustHeight());
    // AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore();





}


function FloatPanel_AyohaeWallet_PasscodeHide() {
  

   

    if (isFloatPanel_AyohaeWallet_PasscodeOpen == 'Y') {
        _FloatPanel_AyohaeWallet_Passcode.hide();
        isFloatPanel_AyohaeWallet_PasscodeOpen = 'N';
        _FloatPanel_GeneratePoint_isFirstLoad = "N";
        a = "";

        document.getElementById('input-FloatPanel_AyohaeWallet_Passcode_Amount').value = "";

        RemovePages("FloatPanel_AyohaeWallet_PasscodeHide()");
        //  FloatPanel_RewardStoreHide();
    }
}












var a = '';
var b = '';
var num = [];
var ans;
var idx = 0;
var c = "";
var globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule;

function sendNum(digit) {

    
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_passcodetxt').setHidden(false);
    Ext.getCmp('containerFloatPanel_AyohaeWallet_PasscodeCursorAnim').setHidden(true);
    
    a += digit;

    document.getElementById('input-FloatPanel_AyohaeWallet_Passcode_Amount').value = a;






    //num.push(digit);


    //a = '';
    //document.getElementById('input-FloatPanel_AyohaeWallet_Passcode_Amount').value = a;		// clearing the screen.


    //for (i = 0; i < num.length ; i++) {

    //    a = a + num[i];

    //    // concatenate the elements of the array "num" into a single string, which will be displayed on the screen


    //    //1
    //    //0.01
    //    //0.12
    //    //1.23
    //    //12.34

    //}


    //document.getElementById('input-FloatPanel_AyohaeWallet_Passcode_Amount').value = a;
    document.getElementById("input-FloatPanel_AyohaeWallet_Passcode_Amount").focus();
    //document.getElementById('input-FloatPanel_AyohaeWallet_Passcode_Amount').readOnly = true;
    //document.getElementById("input-FloatPanel_AyohaeWallet_Passcode_Amount").focus();
    //document.getElementById('input-FloatPanel_AyohaeWallet_Passcode_Amount').readOnly = false;


   
    //var Amount = document.getElementById('input-FloatPanel_AyohaeWallet_Passcode_Amount').value;
    //var EarnPoint = parseFloat(Amount) * parseFloat(globalPointAmountEquation);
    //globalEarnPoint = EarnPoint.toFixed(2);
    //Ext.getCmp('HtmlFloatPanel_AyohaeWallet_Passcode_Points').setHtml('<div style="background: transparent;color:white; text-align:center;font-size:66px;font-weight:bold;width:100%;">' + EarnPoint.toFixed(2) + '</div>');
    Ext.getCmp('containerFloatPanel_AyohaeWallet_Passcode_WrongPasscode').setHidden(true);
    if (document.getElementById('input-FloatPanel_AyohaeWallet_Passcode_Amount').value.length == 6) {
        if (localStorage.getItem("AyohaeWalletPassCode") == document.getElementById('input-FloatPanel_AyohaeWallet_Passcode_Amount').value) {
         
          alert("globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule:"+globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule);
            FloatPanel_AyohaeWallet_PasscodeHide();
            if (globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule == "FloatPanel_AyohaStore_CheckOut_ConfirmPay") {
                // alert("success")
                FloatPanel_AyohaStore_CheckOut_ConfirmPay();
            }
            if (globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule == "FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert_ReOrder_MakePayment") {
                // alert("success")
                FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert_ReOrder_MakePayment();
            }
            if (globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule == "FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert") {
                // alert("success")
                FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert();
            }
            if (globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule == "FloatPanel_AyohaeWallet_Transfer_TransferNow_Validate") {
                FloatPanel_AyohaeWallet_Transfer_TransferNow();
            }

            if (globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule == "FloatPanel_AyohaeWallet_Payment_PayNow_Validate") {
                FloatPanel_AyohaeWallet_Payment_PayNow();
            }
            if (globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule == "FloatPanel_AyohaeWallet_PasscodeShow_SettingeWallet") {
                FloatPanel_AyohaeWallet_PasscodeHide();
                FloatPanel_AyohaeWallet_SettingShow_UpdateEwalletAccount();
                FloatPanel_AyohaeWallet_Setting_AyohaeWalletAccountSettingStore();
            } if (globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule == "FloatPanel_AyohaeWallet_CashOutConfirm") {
                FloatPanel_AyohaeWallet_PasscodeHide();
                FloatPanel_AyohaeWallet_CashOutConfirm_Confirm();
            }
            
        } else {
          

            Ext.getCmp('containerFloatPanel_AyohaeWallet_Passcode_WrongPasscode').setHidden(false);
            document.getElementById('input-FloatPanel_AyohaeWallet_Passcode_Amount').value = "";
            a = "";
            document.getElementById("input-FloatPanel_AyohaeWallet_Passcode_Amount").focus();
          
        }
    }
   
   



}


function Backspace() {

    // screenView.value = screenView.value.slice(0, -1);

    a = document.getElementById('input-FloatPanel_AyohaeWallet_Passcode_Amount').value;
    a = a.substring(0, a.length - 1);
    document.getElementById('input-FloatPanel_AyohaeWallet_Passcode_Amount').value = a;
    document.getElementById("input-FloatPanel_AyohaeWallet_Passcode_Amount").focus();
}

