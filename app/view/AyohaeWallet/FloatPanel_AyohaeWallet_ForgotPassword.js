Ext.define('BuskartApp.view.AyohaeWallet.FloatPanel_AyohaeWallet_ForgotPassword', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_AyohaeWallet_ForgotPassword;


var _FloatPanel_AyohaeWallet_ForgotPasswordisOpen = 'N';











function FloatPanel_AyohaeWallet_ForgotPassword() {

    _FloatPanel_AyohaeWallet_ForgotPassword =
     Ext.create('Ext.Panel', {
         zIndex:370,
         xtype: 'container',
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaeWallet_ForgotPasswordID',
         draggable: false,
         requires: [
      'Ext.util.DelayedTask'
         ],


         centered: true,
         //bottom: 64,         
         modal: true,
         hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             //type: 'slideOut',
             //direction: 'down',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250
             type: 'popOut',
             duration: 250,
             easing: 'ease-out'
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         // style: 'border-bottom:1px none;background-color:white;',
         style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaeWallet_ForgotPasswordisOpen = 'N';
                             RemovePages("FloatPanel_AyohaeWallet_ForgotPasswordHide()");
                             _FloatPanel_AyohaeWallet_ForgotPassword.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaeWallet_ForgotPasswordisOpen = 'N';
                             RemovePages("FloatPanel_AyohaeWallet_ForgotPasswordHide()");
                             _FloatPanel_AyohaeWallet_ForgotPassword.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                        
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,

             height: '100%',
             width: '100%',
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             style: 'border-bottom:0px solid;background-color:transparent;',

             // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'

             },

             items: [








            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_AyohaeWallet_ForgotPasswordBorderBg',
                docked: 'top',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: '70%',
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
                items: [

                         {

                             xtype: 'container',
                             width: '100%',
                             docked: 'top',
                             // width: 40,
                             style: ' background-color:transparent;',
                             //  title: '<font size="3" color="white">Live Tracking Map</font>',
                             //hidden: true,

                             id: 'containerFloatPanel_AyohaeWallet_ForgotPasswordHeader',
                             //style: {
                             //    // background: '#D25959',
                             //    background: 'transparent',
                             //    // border: '2px'
                             //},
                             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                             // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                             layout: {
                                 type: 'hbox',
                                 pack: 'left',
                                 align: 'left',
                             },
                             // hidden:true,
                             items:
                                    [


                                                  {
                                                      xtype: 'button',
                                                      id: 'btnFloatPanel_AyohaeWallet_ForgotPasswordBack',
                                                      height: 30,
                                                      width: 35,
                                                      // iconCls: 'list',
                                                      html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                      ui: 'plain',
                                                      handler: function () {

                                                          _FloatPanel_AyohaeWallet_ForgotPassword.hide(Ext.fx.Animation({
                                                              type: 'slideOut',
                                                              direction: 'left',
                                                              easing: 'cubic-bezier(.7,0,.7,1)',
                                                              duration: 250

                                                          }));
                                                          _FloatPanel_AyohaeWallet_ForgotPasswordisOpen = 'N';
                                                          RemovePages("FloatPanel_AyohaeWallet_ForgotPasswordHide()");

                                                      }
                                                  },
















                                    ]

                         },


                     {
                         //xtype: 'button',
                         //id: 'btnMyAccount_DashboardBack',
                         //height: 65,
                         //width: 65,
                         // iconCls: 'list',
                         // margin: '-180 0 0 0',
                         // hidden:true,
                         height: 55,
                         width: 55,
                         // html: '<div ><img src="resources/icons/ayohaReward01.gif" width="55" height="55" alt="Company Name"></div>',
                         html: '<div ><img src="resources/icons/Logo/LogoOrangeSimplifed.png" width="55" height="55" alt="Company Name"></div>',
                         //ui: 'plain',
                         //handler: function () {

                         //    //_FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
                         //    //    type: 'slideOut',
                         //    //    direction: 'left',
                         //    //    easing: 'cubic-bezier(.7,0,.7,1)',
                         //    //    duration: 250

                         //    //}));
                         //    //isLoyaltyCardRedeemListOpen = 'N';
                         //}
                     },
                                                    {
                                                        margin: '0 0 0 0',
                                                        id: 'htmlFloatPanel_AyohaeWallet_ForgotPasswordTxt',
                                                        html: '<font size=2 color=black><b>Ayoha-Reward</b></font>'
                                                    },

                                                     {
                                                         margin: '-10 0 0 0',
                                                         id: 'htmlFloatPanel_AyohaeWallet_ForgotPassword_bottomTagLineTxt',
                                                         html: '<font size=1 color=black>We Double Your Reward!</font>'
                                                     },
                                                    {
                                                        xtype: 'panel',
                                                        height: 100
                                                    },
                                                      {
                                                          html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 20px;font-weight:bold;color:black;">Forgot Ayoha eWallet Password</div>',
                                                      },

                                                 {
                                                     xtype: 'panel',
                                                     height: 40
                                                 },

                                                  {
                                                      margin: '0 0 0 65',
                                                      html: '<div style="width:80%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:grey;">Enter your email address below to retrive password</div>',
                                                  },
                                                  {
                                                      xtype: 'panel',
                                                      height: 40
                                                  },

                {
                    //hidden: true,
                    id: 'htmlFloatPanel_AyohaeWallet_ForgotPasswordEmail',
                    margin: '-2 0 0 0',
                    width: '70%',
                    height: 20,
                    html: '<input type="text" id="input-FloatPanel_ForgotEmail_eWallet" placeHolder="Email"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;">'


                },
 {
     xtype: 'panel',
     height: 20
 },
                {
                    xtype: 'button',
                    width: '90%',
                    // hidden: true,
                    //  align: 'stretch',

                    ui: 'plain',
                    //  width: '80%',
                    height: 60,
                    margin: '0 0 0 0',
                    id: 'btnFloatPanel_AyohaeWallet_ForgotPassword_SendPassword',
                    // width: '80%',
                    //style: {
                    //    background: '#FA8072',
                    //},
                    // padding: '10px',
                    //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                    text: '<button class="buttonSendEmail">Send Password</button>',

                    handler: function () {
                        //  FloatPanel_AyohaUserRegistration_Save();



                        FloatPanel_AyohaeWallet_ForgotPasswordSendEmail();









                    },


                },



                ]


            },



                {
                    xtype: 'container',
                    width: '100%',
                    height: '30%',
                    docked: 'bottom',
                    // height:'70%',
                    // width: 40,
                    // style: ' background-color:red;',
                    //  title: '<font size="3" color="white">Live Tracking Map</font>',
                    //hidden: true,
                    style: 'background-image: url("resources/icons/forgot03.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                    id: 'containerFloatPanel_AyohaeWallet_ForgotPasswordbottom',
                    //layout: {
                    //    type: 'vbox',
                    //    pack: 'start',
                    //    align: 'center',
                    //},
                    //items: [

                    //    //{
                    //    //    html: '<div ><img src="resources/icons/forgot03.png"  style="width:100%;height:100%;" alt="Company Name" ></div>',
                    //    //}
                    //]
                },



                //{
                //    //width: '100%',
                //    //height: '50%',

                //    xtype: 'container',
                //    width: '100%',
                //    docked: 'bottom',
                //    height:'30%',
                //    //  ui: 'confirm',
                //    style: ' background-color:transparent;',
                //     style: 'background-image: url("resources/icons/forgot03.png"); background-size: 100% 360px;background-repeat: no-repeat;',
                //    layout: {
                //        type: 'vbox',
                //        pack: 'end',
                //        align: 'center',
                //    },
                //    items: [
                //                    //{
                //                    //    html: '<div ><img src="resources/icons/forgot03.png"  style="width:100%;height:100%;" alt="Company Name" ></div>',
                //                    //}
                //    ]
                //    //style: 'background-image: url("resources/icons/forgot03.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                //    // html: '<div ><img src="resources/icons/forgot03.png"  style="width:100%;height:100%;" alt="Company Name" ></div>',
                //    //handler: function () {

                //    //}
                //},


             ]




         }







     });
    return _FloatPanel_AyohaeWallet_ForgotPassword;





}

function FloatPanel_AyohaeWallet_ForgotPasswordShow() {
  
   // console.log(_FloatPanel_AyohaeWallet_ForgotPasswordisOpen);
    Ext.Viewport.remove(_FloatPanel_AyohaeWallet_ForgotPassword);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet_ForgotPassword());
    this.overlay.show();
    _FloatPanel_AyohaeWallet_ForgotPasswordisOpen = 'Y';

    AddRoutePages("FloatPanel_AyohaeWallet_ForgotPasswordHide()");
    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
        Ext.getCmp('LoadingFloatPanel_AyohaeWallet_ForgotPasswordID').setZIndex(400);
    }
}


function FloatPanel_AyohaeWallet_ForgotPasswordHide() {
    _FloatPanel_AyohaeWallet_ForgotPassword.hide(); _FloatPanel_AyohaeWallet_ForgotPasswordisOpen = 'N';
    RemovePages("FloatPanel_AyohaeWallet_ForgotPasswordHide()");

}


function FloatPanel_AyohaeWallet_ForgotPassword_IsEmailExist() {
    var strEmail = document.getElementById('input-FloatPanel_ForgotEmail_eWallet').value;
    var TrimStrEmail = strEmail.replace(/\s/g, '');


    if (TrimStrEmail) {
        //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking User Email....' });

        LoadingPanelShow(getLoadingIcon(), 'Checking Email..');




        var task = Ext.create('Ext.util.DelayedTask', function () {

            var objn = {
                "Email": TrimStrEmail
            };
            // console.log(objn);
            var _value = Ext.Ajax.request({

                type: "POST",

                url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileCheckIsEmailExisteWallet',

                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },

                success: function (result, request) {

                    //console.log(result.responseText);


                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {
                        //var newData = JSON.parse(JSON.stringify(result.results.Email))
                        //console.log(result.results.Email);
                        //  //data.results[0];
                        // console.log(data.total);
                        if (data.total > 0) {
                            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Email Exist!..' });
                            var AllowToSendEmail = data.results[0].AllowToSendEmail;
                            if (AllowToSendEmail == "NotAllowed") {
                                swalFireFail("You have been exceeded maximum retrival password!");
                                Ext.Viewport.unmask();
                                return;

                            } if (AllowToSendEmail == "Allowed") {
                                Ext.Viewport.unmask();
                                FloatPanel_AyohaeWallet_ForgotPasswordSendEmail_Sending();


                            }

                            LoadingPanelHide();

                            //  FloatPanel_AyohaeWallet_ForgotPasswordSendEmail_Sending();


                        }
                        if (data.total == 0) {

                            swalFireFail("(" + TrimStrEmail + ") Not Exist!");
                            Ext.Viewport.unmask();
                            LoadingPanelHide();

                        }





                    }
                    else {

                        swalFireFail("Cheking Failed!!!" + result.responseText.trim());
                        Ext.Viewport.unmask();
                        LoadingPanelHide();
                    }


                },

                failure: function (result, request) {
                    Ext.Viewport.unmask();
                    swalFireFail("Cheking Failed!!!");
                    LoadingPanelHide();
                }

            });



        });
        //  Ext.Viewport.unmask();
        task.delay(500);
    } else {
        swalFireFail("No Email!");
    }








}



function FloatPanel_AyohaeWallet_ForgotPasswordSendEmail() {
    FloatPanel_AyohaeWallet_ForgotPassword_IsEmailExist();
}







function FloatPanel_AyohaeWallet_ForgotPasswordSendEmail_Sending() {


    var strEmail = document.getElementById('input-FloatPanel_ForgotEmail_eWallet').value;
    var TrimStrEmail = strEmail.replace(/\s/g, '');



  Ext.Viewport.mask({ xtype: 'loadmask', message: 'Sending Email..' });

   // LoadingPanelShow(getLoadingIcon(), 'Sending Email..');



    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.Ajax.request({
            url: GetAPIurl() + '/AyohaeWallet/AyohaeWalletForgotPassword',
            params: {

                "Email": TrimStrEmail,
                "AccountNo":GetCurrAyohaUserAccountNo(),
                "LoginOS": localStorage.getItem('device_platform'),
                "LoginIP": localStorage.getItem('device_ip'),
                "PhoneModel": localStorage.getItem('device_model'),
                "PhoneImeiNo": localStorage.getItem('device_uuid'),
                "PhoneVersion": localStorage.getItem('device_version'),
                "PhonePlatform": localStorage.getItem('device_platform'),
                "PhonePlatformVersion": localStorage.getItem('device_version'),
                "PhoneManufacturer": localStorage.getItem('device_manufacturer'),
                "PhoneSerial": GetCurrentdeviceserial(),
                "RawPhoneInfo": localStorage.getItem('SimInfo'),
                "PlayerID": localStorage.getItem('player_id'),

            },
            success: function (result, request) {
               
                swalFireSuccesSendEmail('Temporary password has been sent to your email!.');
                Ext.Viewport.unmask();
                FloatPanel_AyohaeWallet_ForgotPasswordHide();
                LoadingPanelHide();

            },
            failure: function (result, request) {
                swalFireFail("Send Email Fail!");
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }
        });



    });
    task.delay(1000);

}