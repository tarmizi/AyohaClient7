Ext.define('BuskartApp.view.Registration.FloatPanel_ForgotPassword', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});




var _FloatPanel_ForgotPasswordisOpen = 'N';













   var _FloatPanel_ForgotPassword =
     Ext.create('Ext.Container', {

          
         id: 'LoadingFloatPanel_ForgotPasswordID',
         floated: true,
    centered: true,
    height: '100%',
    width: '100%',
    closeAction: 'hide',
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 150,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'slideOut',
             direction: 'down',
             easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         style: ayohaThemeColor_Background_ForgotPassword(),       
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_ForgotPassword.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             _FloatPanel_ForgotPasswordisOpen = 'N';
                           //  RemovePages("FloatPanel_ForgotPasswordHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_ForgotPassword.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             _FloatPanel_ForgotPasswordisOpen = 'N';
                           //  RemovePages("FloatPanel_ForgotPasswordHide()");
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
                id: 'FloatPanel_ForgotPasswordBorderBg',
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

                             id: 'containerFloatPanel_ForgotPasswordHeader',
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
                                                      id: 'btnFloatPanel_ForgotPasswordBack',
                                                      height: 30,
                                                      width: 65,
                                                      // iconCls: 'list',
                                                      html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                      ui: 'plain',
                                                      handler: function () {

                                                          _FloatPanel_ForgotPassword.hide(Ext.fx.Animation({
                                                              type: 'slideOut',
                                                              direction: 'left',
                                                              easing: 'cubic-bezier(.7,0,.7,1)',
                                                              duration: 250

                                                          }));
                                                          _FloatPanel_ForgotPasswordisOpen = 'N';
                                                          //RemovePages("FloatPanel_ForgotPasswordHide()");

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
                                                        id: 'htmlFloatPanel_ForgotPasswordTxt',
                                                        html:AyohaLogoText('Ayoha-Reward')
                                                    },

                                                     {
                                                         margin: '-2 0 0 0',
                                                         id: 'htmlFloatPanel_ForgotPassword_bottomTagLineTxt',
                                                        html:AyohaSubLogoText('Two rewards. One spend')
                                                     },
                                                    {
                                                        xtype: 'panel',
                                                        height:100
                                                    },
                                                      {
                                                          html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 20px;font-weight:bold;color:black;">Forgot Password</div>',
                                                      },

                                                 {
                                                     xtype: 'panel',
                                                     height: 40
                                                 },

                                                  {
                                                      margin:'0 0 0 65',
                                                      html: '<div style="width:80%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:grey;">Enter your email address below to retrive password</div>',
                                                  },
                                                  {
                                                      xtype: 'container',
                                                      height: 20
                                                  },




                    {
                        xtype: 'emailfield',
                         id: 'htmlFloatPanel_ForgotPasswordEmail',
                        width: '70%',
                        placeholder: 'Email',
                        clearable: true
                    },
                    { xtype: 'container', height: 20 },







//                 {
//                 //hidden: true,
//                     id: 'htmlFloatPanel_ForgotPasswordEmail',
//     margin: '-2 0 0 0',
//     width: '70%',
//     height: 20,
//     html: '<input type="text" id="input-FloatPanel_ForgotEmail" placeHolder="Email"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;">'


// },
//  {
//      xtype: 'panel',
//      height: 20
//  },



                {
                    xtype: 'component',
                    cls: 'ayohaPrimaryBtn',
                    html: '<div class="btnText">Reset Password</div>',
                  
                    listeners: {
                      element: 'element',     // ✅ attach event pada DOM element
                      tap: function (e) {
                        // ✅ stop event supaya tak “kena” mask/parent
                        if (e.stopEvent) e.stopEvent();
                  
                        console.log('BTN TAP OK');
                  
                        // ✅ DOM yang betul
                        var dom = e.currentTarget || (this.dom || (this.el && this.el.dom));
                        if (!dom) return;
                  
                        // press effect
                        dom.classList.add('isPressed');
                        Ext.defer(function () {
                          dom.classList.remove('isPressed');
                        }, 120);
                  
                        // ripple
                        var rect = dom.getBoundingClientRect();
                        var size = Math.max(rect.width, rect.height);
                  
                        // Ext event: guna getX/getY (lebih reliable dari pageX)
                        var x = (e.getX ? e.getX() : e.pageX) - rect.left - (size / 2);
                        var y = (e.getY ? e.getY() : e.pageY) - rect.top - (size / 2);
                  
                        var ripple = document.createElement('span');
                        ripple.className = 'ripple';
                        ripple.style.width = ripple.style.height = size + 'px';
                        ripple.style.left = x + 'px';
                        ripple.style.top = y + 'px';
                        dom.appendChild(ripple);
                  
                        Ext.defer(function () {
                          if (ripple && ripple.parentNode) ripple.parentNode.removeChild(ripple);
                        }, 600);
                  
                        alert('bb');
                  
                        // action sebenar
                        // FloatPanel_ForgotPasswordSendEmail();
                      },
                  
                      // ✅ fallback desktop
                      click: function () {
                        console.log('BTN CLICK OK');
                      }
                    }
                  }




                // {
                // //     xtype: 'button',
                // //     width: '90%',
                // //     ui: 'plain',
                // //    height: 60,
                // //     margin: '0 0 0 0',
                // //     id: 'btnFloatPanel_ForgotPassword_SendPassword',
                //                       cls: 'ayohaPrimaryBtn',
                //     html: '<div class="btnText">Reset Password</div>',
                //  //   text: '<button class="buttonSendEmail">Send Password</button>',

                //     handler: function () {
                //         //  FloatPanel_AyohaUserRegistration_Save();



                //         FloatPanel_ForgotPasswordSendEmail();









                //     },


                // },

              

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
                    id: 'containerFloatPanel_ForgotPasswordbottom',
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
   




// function FloatPanel_ForgotPasswordShow() {

//     console.log(_FloatPanel_ForgotPasswordisOpen);
//     Ext.Viewport.remove(_FloatPanel_ForgotPassword);
//     this.overlay = Ext.Viewport.add(FloatPanel_ForgotPassword());
//     this.overlay.show();
//     _FloatPanel_ForgotPasswordisOpen = 'Y';
   
//     AddRoutePages("FloatPanel_ForgotPasswordHide()");
// }


// function FloatPanel_ForgotPasswordHide() {
//     _FloatPanel_ForgotPassword.hide(); _FloatPanel_ForgotPasswordisOpen = 'N';
//     RemovePages("FloatPanel_ForgotPasswordHide()");
   
// }




/****************************************************
 * SHOW / HIDE (KEKAL CARA ANDA)
 * + tambah support browser BACK
 ****************************************************/
function FloatPanel_ForgotPasswordShow() {

  _FloatPanel_ForgotPassword.show();
  _FloatPanel_ForgotPasswordisOpen = 'Y';

  //AddRoutePages("FloatPanel_ForgotPasswordHide()");

  // ✅ penting: push history state supaya BACK browser boleh close overlay
  AyohaBrowserBack.push('FloatPanel_ForgotPassword', function () {
    // bila user tekan BACK sebenar
    FloatPanel_ForgotPasswordHide(true);
  });
}


/**
 * @param {Boolean} fromBack  true bila dipanggil dari popstate (browser back)
 * @param {Object}  animCfg   optional animation config (untuk swipe left/right)
 */
function FloatPanel_ForgotPasswordHide(fromBack, animCfg) {

  // guard
  if (_FloatPanel_ForgotPasswordisOpen !== 'Y') return;

  // hide (optional custom animation)
  if (animCfg) {
    _FloatPanel_ForgotPassword.hide(Ext.fx.Animation(animCfg));
  } else {
    _FloatPanel_ForgotPassword.hide();
  }

  _FloatPanel_ForgotPasswordisOpen = 'N';
 // RemovePages("FloatPanel_ForgotPasswordHide()");

  // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
  if (fromBack !== true) {
    AyohaBrowserBack.close('FloatPanel_ForgotPassword');
  }
}






function FloatPanel_ForgotPassword_IsEmailExist() {
    var strEmail = document.getElementById('input-FloatPanel_ForgotEmail').value;
    var TrimStrEmail = strEmail.replace(/\s/g, '');


    if (TrimStrEmail) {
       // Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking User Email....' });
        LoadingPanelShow(getLoadingIcon(), 'Checking Email..');





        var task = Ext.create('Ext.util.DelayedTask', function () {

            var objn = {
                "Email": TrimStrEmail
            };
            // console.log(objn);
            var _value = Ext.Ajax.request({

                type: "POST",

                url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileCheckIsEmailExist',

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
                                FloatPanel_ForgotPasswordSendEmail_Sending();                             
                              

                            }

                            LoadingPanelHide();
                            
                          //  FloatPanel_ForgotPasswordSendEmail_Sending();
                         

                        }
                        if (data.total == 0) {
                          
                            swalFireFail("(" + TrimStrEmail + ") Not Exist!");
                            Ext.Viewport.unmask();
                            LoadingPanelHide();

                        }





                    }
                    else {

                        swalFireFail("Cheking Failed!!!" + result.responseText.trim() );
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
        //LoadingPanelHide();
        task.delay(500);
    } else {
        swalFireFail("No Email!");
        LoadingPanelHide();
    }


  





}



function FloatPanel_ForgotPasswordSendEmail() {
    FloatPanel_ForgotPassword_IsEmailExist();  
}







function FloatPanel_ForgotPasswordSendEmail_Sending() {


    var strEmail = document.getElementById('input-FloatPanel_ForgotEmail').value;
    var TrimStrEmail = strEmail.replace(/\s/g, '');

 

   Ext.Viewport.mask({ xtype: 'loadmask', message: 'Sending Email..' });


   // LoadingPanelShow(getLoadingIcon(), 'Sending Email..');


        var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.Ajax.request({
            url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileForgotPassword',
            params: {

                "Email":TrimStrEmail,
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
                
                swalFireSuccesSendEmail('Temporary password has been sent to your email.!');
                Ext.Viewport.unmask();
                FloatPanel_ForgotPasswordHide();
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