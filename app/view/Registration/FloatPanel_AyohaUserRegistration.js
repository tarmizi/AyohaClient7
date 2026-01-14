
Ext.define('BuskartApp.view.Registration.FloatPanel_AyohaUserRegistration', {
    requires: [
            'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_AyohaUserRegistration;


var _FloatPanel_AyohaUserRegistrationisOpen = 'N';

var isFromUserEnterpriseDetails;

var isDeleteorSave;


function FloatPanel_AyohaUserRegistration() {

    _FloatPanel_AyohaUserRegistration =
    Ext.create('Ext.Panel', {
        //zIndex: 200,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaUserRegistrationID',
        draggable: false,

        styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
        modal: false,
        // hideOnMaskTap: true,
        requires: [
         'Ext.util.DelayedTask'
        ],
        layout: {
            type: 'fit'
        },
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
            //type: 'slideIn',
            //direction: 'up',
            //easing: 'cubic-bezier(.2,0,.2,1)',
            //duration: 250
        },
        hideAnimation: {
            //type: 'popOut',
            ////direction: 'up',
            ////easing: 'cubic-bezier(.7,0,.7,1)',
            //duration: 250

            type: 'slideOut',
            direction: 'down',
            easing: 'cubic-bezier(.2,0,.2,1)',
            duration: 250
        },

        //style: 'border-bottom:1px solid;background-color:#353839;',
          //style: 'border-bottom:1px solid;background-color:black;',
 style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
     
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_AyohaUserRegistration.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            RemovePages("FloatPanel_AyohaUserRegistrationHide()");
                            _FloatPanel_AyohaUserRegistrationisOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_AyohaUserRegistration.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            _FloatPanel_AyohaUserRegistrationisOpen = 'N';
                            RemovePages("FloatPanel_AyohaUserRegistrationHide()");
                        }
                      
                    }
                });
            }
        },

        items: [

         





                    {
                        xtype: 'container',
                        width: '100%',                        
                        style: 'background-color: white;',
                       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                      //  title: 'FloatPanel_AyohaUserRegistrationMaster',
                        id: 'containerFloatPanel_AyohaRegistrationID',
                      
                      //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                      //  style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
                      //  style: 'background-image: url("resources/icons/registerBackground.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },

                        items: [
                          
                             


                            {

                                xtype: 'container',
                                width: '100%',
                              //  docked:'top',
                                height: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_AyohaUserRegistrationHeader',
                                //style: {
                                //    // background: '#D25959',
                                //    background: 'transparent',
                                //    // border: '2px'
                                //},
                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                style: 'border-bottom:2px none #D25959;background-color:transparent',
                              //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
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
                                                         id: 'btnFloatPanel_AyohaUserRegistrationBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {

                                                             _FloatPanel_AyohaUserRegistration.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             _FloatPanel_AyohaUserRegistrationisOpen = 'N';
                                                             RemovePages("FloatPanel_AyohaUserRegistrationHide()");
                                                         }
                                                     },
                                                    
                                                      {
                                                          xtype: 'spacer',

                                                      },
                                                       {
                                                           margin: '0 0 0 -6',
                                                           id: 'htmlFloatPanel_AyohaUserRegistration_TitleHeaderTxt',
                                                          // html: '<font size=2 color=white><b>Create Ayoha Reward Account</b></font>'
                                                           html: '<div style="color:black;text-align: left;font-size:14px;width:100%;font-weight:bold;margin:0px 0px 0px 0px" >Create Ayoha Reward Account</div>',
                                                       },
                                                        {
                                                            xtype: 'spacer',

                                                        },
                                                       {
                                                           xtype: 'button',
                                                           hidden: true,
                                                           id: 'btnFloatPanel_AyohaUserRegistration_TitleHeaderIcon',
                                                           height: 45,
                                                           width: 45,
                                                           margin: '-4 0 0 0',
                                                           // iconCls: 'list',
                                                           html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmall.png" width="35" height="35" alt="Company Name"></div>',
                                                           ui: 'plain',
                                                           handler: function () {

                                                               _FloatPanel_AyohaUserRegistration.hide(Ext.fx.Animation({
                                                                   type: 'slideOut',
                                                                   direction: 'right',
                                                                   easing: 'cubic-bezier(.7,0,.7,1)',
                                                                   duration: 250

                                                               }));
                                                               _FloatPanel_AyohaUserRegistrationisOpen = 'N';
                                                           }
                                                       },
                                                      {
                                                          xtype: 'container',
                                                          margin: '5 0 0 0',
                                                          hidden: true,
                                                          //style: 'background-color: white;',
                                                          //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                          style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                                          height: 25,
                                                          width: 75,
                                                          // margin: '70 0 0 0',
                                                          id: 'containerFloatPanel_AyohaUserRegistrationHaiUser',
                                                          layout: {

                                                              type: 'vbox',
                                                              pack: 'center',
                                                              align: 'center'
                                                          },
                                                          items: [


                                                              {
                                                                  margin: '2 0 0 0',
                                                                  id: 'htmlFloatPanel_AyohaUserRegistrationHaiUser',
                                                                  html: '<font size=2 color=black><b>Hai User!</b></font>'
                                                              },
                                                              {
                                                                  xtype: 'container',
                                                                  //   margin: '0 0 0 5',
                                                                  hidden: true,
                                                                  style: 'background-color: transparent;',

                                                                  height: 25,
                                                                  width: 70,
                                                                  // margin: '70 0 0 0',
                                                                  id: 'containerFloatPanel_AyohaUserRegistrationeWallet',
                                                                  layout: {

                                                                      type: 'hbox',
                                                                      pack: 'left',
                                                                      align: 'left'
                                                                  },
                                                                  items: [
                                                                       {
                                                                           xtype: 'button',
                                                                           id: 'btnFloatPanel_AyohaUserRegistrationeWallet',
                                                                           margin: '4 0 0 8',
                                                                           height: 30,
                                                                           width: 35,
                                                                           // iconCls: 'list',
                                                                           html: '<div ><img src="resources/icons/ewalletTwo.png" width="25" height="20" alt="Company Name"></div>',
                                                                           ui: 'plain',
                                                                           handler: function () {
                                                                               Ayoha_eWallet();

                                                                           }
                                                                       },
                                                                       //{
                                                                       //    height: 30,
                                                                       //    margin: '10 0 0 0',
                                                                       //    width: 65,

                                                                       //    //html: '<button OnClick="Ayoha_eWallet()" class="buttonsHtmlBgTransparent"><div style="color:black;text-align: left;font-size:14px;width:100%;font-weight:bold" >RM00.00</div></button>',
                                                                       //},
                                                                       {
                                                                           xtype: 'button',
                                                                           hidden:true,
                                                                           id: 'btnFloatPanel_AyohaUserRegistrationeWalletValue',
                                                                           margin: '7 0 0 2',
                                                                           height: 30,
                                                                           width: 65,

                                                                           // iconCls: 'list',
                                                                           html: '<div style="color:black;text-align: left;font-size:14px;width:100%;font-weight:bold;margin:-1px 0px 0px -8px" >RM00.00</div>',
                                                                           ui: 'plain',
                                                                           handler: function () {
                                                                               Ayoha_eWallet();

                                                                           }
                                                                       },
                                                                       //{
                                                                       //    margin: '7 0 0 2',

                                                                       //}
                                                                  ]
                                                              },

                                                          ]
                                                      },
                                                   {
                                                       xtype: 'container',
                                                       margin: '0 0 0 -5',
                                                       hidden: true,
                                                       //style: 'background-color: white;',
                                                       style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                                       height: 35,
                                                       width: 35,
                                                       // margin: '70 0 0 0',
                                                       id: 'containerFloatPanel_AyohaUserRegistrationPictureUser',
                                                       layout: {

                                                           type: 'hbox',
                                                           pack: 'center',
                                                           align: 'center'
                                                       },
                                                       items: [
                                                           {
                                                               xtype: 'button',
                                                               height: 40,
                                                               width: 40,
                                                               margin: '0 0 0 -8',
                                                               id: 'btnFloatPanel_AyohaUserRegistrationPicProfile',
                                                               //badgeText: "2",
                                                              // html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: white;border-radius: 30px 30px 30px 30px;width:30px;height:30px" ><img src="resources/icons/myAccountBlack1.png"  style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%;  margin:-1px 0px 0px 2px"></div>',
                                                               ui: 'plain',
                                                               handler: function () {

                                                                   //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                   //  setupMovementMap(2);





                                                                   //Ext.getCmp('mainView').setActiveItem(16);
                                                                   //loadNotificationSummary();
                                                               }
                                                           },



                                                       ]
                                                   },



                                                   //{
                                                   //    xtype: 'panel',
                                                   //    width: 2
                                                   //}
                                                              
                                                           










                                       ]

                            },
                            {

                                xtype: 'container',
                                docked: 'bottom',
                                height: 68,
                                width: '100%',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center'

                                },

                                style: ' background-color: white;',
                                items: [
                                      {
                                          xtype: 'button',
                                          width: '90%',
                                         // hidden: true,
                                          //  align: 'stretch',

                                          ui: 'plain',
                                          //  width: '80%',
                                          height: 68,
                                          margin: '-5 0 0 0',
                                          id: 'btn_FloatPanel_AyohaUserRegistration_Save',
                                          // width: '80%',
                                          //style: {
                                          //    background: '#FA8072',
                                          //},
                                          // padding: '10px',
                                          //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                                          text: '<button class="buttonSignUp">Sign Up</button>',

                                          handler: function () {
                                              //  FloatPanel_AyohaUserRegistration_Save();




                                              var AccountName = document.getElementById('input-FloatPanel_AyohaUserRegistrationAccountName').value;
                                              var Email = document.getElementById('input-FloatPanel_AyohaUserRegistrationEmail').value;
                                              var PhoneNo = document.getElementById('input-FloatPanel_AyohaUserRegistrationPhoneNumber').value;
                                              var Password = document.getElementById('input-FloatPanel_AyohaUserRegistrationPassword').value;
                                              var ConfirmPassword = document.getElementById('input-FloatPanel_AyohaUserRegistrationConfirmPassword').value;

                                              if (!globalUserPicProfile64) {
                                                  swalFireFail("Picture Profile  required!");
                                                  return;
                                              }

                                              if (!AccountName) {
                                                  swalFireFail("Full Name required!");
                                                  return;
                                              }
                                              if (!Email) {
                                                  swalFireFail("Email required!");
                                                  return;
                                              }
                                              //if (!PhoneNo) {
                                              //    swalFireFail("Mobile Phone No required!");
                                              //    return;
                                              //}


                                              if (!Password) {
                                                  swalFireFail("Password required!");
                                                  return;
                                              }
                                              if (!ConfirmPassword) {
                                                  swalFireFail("Confirm Password required!");
                                                  return;
                                              }


                                              if (PasswordStatus == "Password is matched!") {
                                                  AyohaUserProfile_CheckExistingUser();
                                              } else {

                                                  swalFireFail(PasswordStatus);
                                              }
                                              





                                             
                                           
                                             

                                          },


                                      },
                                                  
                                ]
                            },



                            {
                                xtype: 'container',
                              
                                width: '100%',
                                height: '100%',
                               
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                              
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center'

                                },
                                scrollable: {
                                    direction: 'vertical',
                                    directionLock: true,
                                    indicators: false
                                },
                                //listeners: {
                                //    initialize: function (c) {

                                //        this.element.on({
                                //            swipe: function (e, node, options) {
                                //                if (e.direction == "left") {
                                //                    //  alert("Hey! I swipe left");
                                //                    Ext.getCmp('tabpanelFloatPanel_AyohaUserRegistration').setActiveItem(1);
                                //                } else {
                                //                    //  alert("Hey! I swipe right");

                                //                }
                                //            }
                                //        });
                                //    }
                                //},


                                items: [

                                    
                                      


                                    {
                                        xtype: 'container',
                                        width: '100%',
                                       // height: 712,
                                        //height: 800,
                                        //id:'containerFloatPanel_AyohaRegistrationID',
                                        id: 'containerFloatPanel_AyohaUserRegistration_Master',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'left'

                                        },
                                        items: [
                                             //{
                                             //    margin: '3 0 0 0',

                                             //    html: '<font size=3 color=black>User Profile</font>',

                                             //},



                                             




                                             {
                                                 xtype: 'container',
                                                 margin: '5 0 0 0',
                                                 width: '100%',
                                                 id: 'containerFloatPanel_AyohaUserRegistrationPicProfile',
                                                 name: 'namecontainerFloatPanel_AyohaUserRegistrationPicProfile',
                                                 height: 120,
                                                 style: ' background-color:transparent',
                                                 layout: {
                                                     type: 'vbox',
                                                     pack: 'start',
                                                     align: 'center'

                                                 },
                                                 items: [
  {
                                                  margin: '2 0 0 0',
                                                  height: 140,
                                                  width: 140,
                                                  id: 'FloatPanel_AyohaUserRegistrationPicProfile',
                                                  html: '<img src="resources/icons/createpicprofile01.png" style="width: 140px; height: 140px; border:2px solid white; border-radius: 50%; "/>',
                                              },


                                                 ]
                                             },
                                            




                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  style: ' background-color:transparent',
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'start',
                                                      align: 'center'

                                                  },
                                                  items: [

                                                           {
                                                               xtype: 'container',

                                                               width: '90%',
                                                               style: {

                                                                   background: 'transparent',

                                                               },
                                                               layout: {
                                                                   type: 'vbox',
                                                                   pack: 'left',
                                                                   align: 'left'

                                                               },
                                                               items: [


                                                                   {
                                                                       xtype: 'container',

                                                                       width: '100%',
                                                                       style: {

                                                                           background: 'transparent',

                                                                       },
                                                                       layout: {
                                                                           type: 'hbox',
                                                                           pack: 'start',
                                                                           align: 'center'

                                                                       },
                                                                       items: [
                                                                             {
                                                                                 margin: '3 0 0 0',
                                                                                 hidden: true,
                                                                                 html: '<font size=2 color=black>*Uploaded Image</font>',

                                                                             },


                                                                       ]
                                                                   },


                                                {
                                                    id: 'HtmlinputImgFloatPanel_AyohaUserRegistrationUploadedPhoto',
                                                    hidden: true,
                                                    margin: '0 0 0 0',
                                                    width: '100%',
                                                    html: '<input type="file" id="inputImg-FloatPanel_AyohaUserRegistrationUploadedPhoto" accept="image/*"  onchange="inputImgFloatPanel_AyohaUserRegistrationUploadedPhoto()"   capture="environment" style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

                                                    //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                                                },





                                                {
                                                    margin: '-2 0 0 0',
                                                    hidden: true,
                                                    id: 'FloatPanel_AyohaUserRegistrationPhotoName',
                                                    width: '100%',
                                                    height: 20,
                                                    html: '<input type="text" id="input-FloatPanel_AyohaUserRegistrationPhotoName"  readOnly style="border-color:black;color:#F2F2F2;width:100%;text-align: right;font-size:12px;">'


                                                },

                                                               ]

                                                           },


                                                            //{
                                                            //    xtype:'container'

                                                            //},
                                                              {
                                                                  xtype: 'button',
                                                                  id: 'btnFloatPanel_AyohaUserRegistrationUploadPhoto',
                                                                  name: 'clickablebtnFloatPanel_AyohaUserRegistrationUploadPhoto',
                                                                  hidden: true,
                                                                  //  badgeText: '1',
                                                                  margin: '0 0 -10 0',
                                                                  height: 35,
                                                                  width: 35,
                                                                 // html: '<img src="resources/icons/uploadWhite.png" width="25" height="25" alt="Company Name">',
                                                                  ui: 'plain',
                                                                  handler: function () {

                                                                  }
                                                              },

                                                  ]

                                              },




                                              //{
                                              //    xtype: 'container',
                                              //    hidden: true,
                                              //    width: '99%',
                                              //    height: 600,
                                              //    layout: {
                                              //        type: 'vbox',
                                              //        pack: 'left',
                                              //        align: 'left'

                                              //    },
                                              //    style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',
                                              //    items: [



                                              //    ]

                                              //},


                                             {
                                                 margin: '-2 0 0 0',
                                                 hidden: true,
                                                 id: 'FloatPanel_AyohaUserRegistrationPhoto',
                                                 width: '80%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaUserRegistrationPhoto"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'


                                             },
                                            {
                                                margin: '3 0 0 0',
                                                hidden: true,
                                                html: '<font size=2 color=black>ID</font>',

                                            },

                                             {
                                                 id: 'FloatPanel_AyohaUserRegistrationIDx',
                                                 hidden: true,
                                                 margin: '-2 0 0 0',
                                                 width: '80%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaUserRegistrationID"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'


                                             },



                                              {
                                                  margin: '3 0 0 0',
                                                  hidden: true,
                                                  html: '<font size=2 color=black>Account No</font>',

                                              },

                                             {
                                                 //margin: '-2 0 0 0',
                                                 //id: 'FloatPanel_AyohaUserRegistrationPhoneNumber',
                                                 //margin: '-2 0 0 0',
                                                 //width: '80%',
                                                 //height: 20,
                                                 //html: '<input type="textarea" id="input-FloatPanel_AyohaUserRegistrationPhoneNumber"  style="border-color:black;color:black;width:100%;height:35px;text-align: left;font-size:12px;">'

                                                 hidden: true,
                                                 id: 'FloatPanel_AyohaUserRegistrationAccountNo',
                                                 margin: '-2 0 0 0',
                                                 width: '80%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaUserRegistrationAccountNo"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'



                                             },

                                             {
                                                 margin: '25 0 0 35',
                                                 //hidden: true,
                                                 html: '<font size=3 color=red>*</font><font size=2 color=black>Full Name</font><font size=1 color=black>',

                                             },
 {
     margin: '-10 0 0 35',
     //hidden: true,
     html: '<font size=1 color=black>(Full Name Required for label purposes on Membership Card)</font>',

 },
                                             {
                                                 //hidden: true,
                                                 id: 'FloatPanel_AyohaUserRegistrationAccountName',
                                                 margin: '-2 0 0 35',
                                                 width: '80%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaUserRegistrationAccountName"  style="border-color:black;color:black;width:100%;text-align: left;font-size:20px;font-weight:bold;">'


                                             },


                                             ////////////////////
                                             {
                                                 xtype: 'container',
                                                 width: '100%',
                                                 margin: '0 0 0 0',
                                                 //   hidden: true,
                                                 style: ' background-color:transparent',
                                                 layout: {
                                                     type: 'hbox',
                                                     pack: 'start',
                                                     align: 'center'

                                                 },
                                                 items: [

                                                          {
                                                              xtype: 'container',

                                                              width: '90%',
                                                              style: {

                                                                  background: 'transparent',

                                                              },
                                                              layout: {
                                                                  type: 'vbox',
                                                                  pack: 'left',
                                                                  align: 'left'

                                                              },
                                                              items: [


                                                                  {
                                                                      xtype: 'container',

                                                                      width: '100%',
                                                                      style: {

                                                                          background: 'transparent',

                                                                      },
                                                                      layout: {
                                                                          type: 'hbox',
                                                                          pack: 'start',
                                                                          align: 'center'

                                                                      },
                                                                      items: [
                                                                    {
                                                                        margin: '30 0 0 35',

                                                                        html: '<font size=3 color=red>*</font><font size=2 color=black>Email</font>',

                                                                    },

                                           

                                                                      ]
                                                                  },
                                                                   {
                                                                       margin: '-10 0 0 35',
                                                                       hidden: true,
                                                                       html: '<font size=1 color=black>(Mobile Phone Number will be your Login ID)</font>',

                                                                   },


  {

      id: 'FloatPanel_AyohaUserRegistrationEmail',
      margin: '-2 0 0 35',
      width: '90%',
      height: 20,
      html: '<input type="text" id="input-FloatPanel_AyohaUserRegistrationEmail"  style="border-color:black;color:black;width:100%;text-align: left;font-size:20px;font-weight:bold;">'


  },


                                                              ]

                                                          },


                                                           //{
                                                           //    xtype:'container'

                                                           //},
                                                             {
                                                                 xtype: 'button',
                                                                 id: 'btnFloatPanel_AyohaUserRegistrationUserEmail',
                                                                 //  badgeText: '1',
                                                                 hidden:true,
                                                                 margin: '0 0 -10 -30',
                                                                 height: 35,
                                                                 width: 35,
                                                                 html: '<img src="resources/icons/informationPurple1.png" width="25" height="25" alt="Company Name">',
                                                                 ui: 'plain',
                                                                 handler: function () {
                                                                     // swalFireInformationMsg('Please provide real mobile phone number,verification code will be send thru SMS using this mobile phone no');
                                                                     swalFireInfo('Please provide real email for password forgotten retrival and product update.')
                                                                 }
                                                             },

                                                 ]

                                             },
                                             
                                             
                                             ////////////////////////
                                             //{
                                             //    margin: '30 0 0 35',

                                             //    html: '<font size=2 color=black>Email</font>',

                                             //},

                                             //{

                                             //    id: 'FloatPanel_AyohaUserRegistrationEmail',
                                             //    margin: '-2 0 0 35',
                                             //    width: '80%',
                                             //    height: 20,
                                             //    html: '<input type="text" id="input-FloatPanel_AyohaUserRegistrationEmail"  style="border-color:black;color:black;width:100%;text-align: left;font-size:20px;font-weight:bold;">'


                                             //},






                                             {
                                                 xtype: 'container',
                                                 width: '100%',
                                                 margin: '30 0 0 0',
                                                 hidden: true,
                                                 style: ' background-color:transparent',
                                                 layout: {
                                                     type: 'hbox',
                                                     pack: 'start',
                                                     align: 'center'

                                                 },
                                                 items: [

                                                          {
                                                              xtype: 'container',

                                                              width: '90%',
                                                              style: {

                                                                  background: 'transparent',

                                                              },
                                                              layout: {
                                                                  type: 'vbox',
                                                                  pack: 'left',
                                                                  align: 'left'

                                                              },
                                                              items: [


                                                                  {
                                                                      xtype: 'container',

                                                                      width: '100%',
                                                                      style: {

                                                                          background: 'transparent',

                                                                      },
                                                                      layout: {
                                                                          type: 'hbox',
                                                                          pack: 'start',
                                                                          align: 'center'

                                                                      },
                                                                      items: [
                                                                      {
                                                                          margin: '0 0 0 35',

                                                                          html: '<font size=3 color=red>*</font><font size=2 color=black>Mobile Phone Number</font>',

                                                                      },



                                                                      ]
                                                                  },
                                                                   {
                                                                       margin: '-10 0 0 35',
                                                                     //  hidden: true,
                                                                       html: '<font size=1 color=black>(Mobile Phone Number will be your Login ID)</font>',

                                                                   },



                                            {
                                                margin: '-2 0 0 35',
                                                id: 'FloatPanel_AyohaUserRegistrationUserPhoneNo',
                                                width: '90%',
                                                height: 20,
                                                html: '<input type="tel" id="input-FloatPanel_AyohaUserRegistrationPhoneNumber"  style="border-color:black;color:black;width:100%;text-align: left;font-size:20px;font-weight:bold;">'

                                            },


                                                              ]

                                                          },


                                                           //{
                                                           //    xtype:'container'

                                                           //},
                                                             {
                                                                 xtype: 'button',
                                                                 id: 'btnFloatPanel_AyohaUserRegistrationUserPhoneNo',
                                                                 //  badgeText: '1',
                                                                 margin: '0 0 -10 -30',
                                                                 height: 35,
                                                                 width: 35,
                                                                 html: '<img src="resources/icons/informationPurple1.png" width="25" height="25" alt="Company Name">',
                                                                 ui: 'plain',
                                                                 handler: function () {
                                                                    // swalFireInformationMsg('Please provide real mobile phone number,verification code will be send thru SMS using this mobile phone no');
                                                                     swalFireInfo('Please provide mobile phone number,A verification code  will be send to this phone number via SMS.');
                                                                 }
                                                             },

                                                 ]

                                             },









                                             {
                                                 xtype: 'container',
                                                 width: '100%',
                                                 margin: '30 0 0 0',
                                                 //   hidden: true,
                                                 style: ' background-color:transparent',
                                                 layout: {
                                                     type: 'hbox',
                                                     pack: 'start',
                                                     align: 'center'

                                                 },
                                                 items: [

                                                          {
                                                              xtype: 'container',

                                                              width: '90%',
                                                              style: {

                                                                  background: 'transparent',

                                                              },
                                                              layout: {
                                                                  type: 'vbox',
                                                                  pack: 'left',
                                                                  align: 'left'

                                                              },
                                                              items: [


                                                                  {
                                                                      xtype: 'container',

                                                                      width: '100%',
                                                                      style: {

                                                                          background: 'transparent',

                                                                      },
                                                                      layout: {
                                                                          type: 'hbox',
                                                                          pack: 'start',
                                                                          align: 'center'

                                                                      },
                                                                      items: [
                                                                      {
                                                                          margin: '3 0 0 35',

                                                                          html: '<font size=3 color=red>*</font><font size=2 color=black>Password</font>',

                                                                      },



                                                                      ]
                                                                  },




                                            {
                                                margin: '-2 0 0 35',
                                                id: 'FloatPanel_AyohaUserRegistrationPassword',
                                                width: '90%',
                                                height: 20,
                                                html: '<input type="password" id="input-FloatPanel_AyohaUserRegistrationPassword"  style="border-color:black;color:black;width:100%;text-align: left;font-size:20px;font-weight:bold;">'

                                            },


                                                              ]

                                                          },


                                                           //{
                                                           //    xtype:'container'

                                                           //},

                                                           {
                                                               xtype: 'button',
                                                               id: 'btnFloatPanel_AyohaUserRegistrationShowPassword',
                                                               //  badgeText: '1',
                                                               //hidden: true,

                                                               margin: '0 0 -10 -30',
                                                               height: 35,
                                                               width: 35,
                                                               html: '<img src="resources/icons/hidepassword.png" style="width: 25px; height: 25px;">',
                                                               ui: 'plain',
                                                               handler: function () {
                                                                   var x = document.getElementById("input-FloatPanel_AyohaUserRegistrationPassword");
                                                                   if (x.type === "password") {
                                                                       x.type = "text";
                                                                   } else {
                                                                       x.type = "password";
                                                                   }

                                                                //   document.getElementById("input-FloatPanel_AyohaUserRegistrationPassword").focus();


                                                                   var btnImg = Ext.getCmp('btnFloatPanel_AyohaUserRegistrationShowPassword').getHtml();

                                                                   if (btnImg == '<img src="resources/icons/showpassword.png" style="width: 25px; height: 25px;">')
                                                                   {
                                                                       Ext.getCmp('btnFloatPanel_AyohaUserRegistrationShowPassword').setHtml('<img src="resources/icons/hidepassword.png" style="width: 25px; height: 25px;">');
                                                                      
                                                                   }
                                                                   if (btnImg == '<img src="resources/icons/hidepassword.png" style="width: 25px; height: 25px;">')
                                                                       {
                                                                       Ext.getCmp('btnFloatPanel_AyohaUserRegistrationShowPassword').setHtml('<img src="resources/icons/showpassword.png" style="width: 25px; height: 25px;">');
                                                                   }

                                                                  
                                                               }
                                                           },
                                                             {
                                                                 xtype: 'button',
                                                                 id: 'btnFloatPanel_AyohaUserRegistrationPassword',
                                                                 //  badgeText: '1',
                                                                 hidden:true,
                                                                 margin: '0 0 -10 0',
                                                                 height: 35,
                                                                 width: 35,
                                                                 html: '<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >',
                                                                 ui: 'plain',
                                                                 handler: function () {

                                                                 }
                                                             },

                                                 ]

                                             },
                                              
                                               {
                                                   margin: '4 0 0 0',
                                                   width: '90%',
                                                   hidden: true,
                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                   id: 'htmFloatPanel_AyohaUserRegistrationPasswordMessage',
                                                   html: '<div style="color:black;text-align: right;font-size:11px;width:100%;">Password cannot less than 6 charaters!</div>',
                                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                               },

                                               {
                                                   xtype: 'container',
                                                   width: '100%',
                                                   margin: '30 0 0 0',
                                                   id: 'container_FloatPanel_AyohaUserRegistrationPassword',
                                                   //   hidden: true,
                                                   style: ' background-color:transparent',
                                                   layout: {
                                                       type: 'hbox',
                                                       pack: 'start',
                                                       align: 'center'

                                                   },
                                                   items: [

                                                            {
                                                                xtype: 'container',

                                                                width: '90%',
                                                                style: {

                                                                    background: 'transparent',

                                                                },
                                                                layout: {
                                                                    type: 'vbox',
                                                                    pack: 'left',
                                                                    align: 'left'

                                                                },
                                                                items: [


                                                                    {
                                                                        xtype: 'container',

                                                                        width: '100%',
                                                                        style: {

                                                                            background: 'transparent',

                                                                        },
                                                                        layout: {
                                                                            type: 'hbox',
                                                                            pack: 'start',
                                                                            align: 'center'

                                                                        },
                                                                        items: [
                                                                        {
                                                                            margin: '3 0 0 35',

                                                                            html: '<font size=3 color=red>*</font><font size=2 color=black>Confirm Password</font>',

                                                                        },



                                                                        ]
                                                                    },




                                              {
                                                  margin: '-2 0 0 35',
                                                  id: 'FloatPanel_AyohaUserRegistrationConfirmPassword',
                                                  width: '90%',
                                                  height: 20,
                                                  html: '<input type="password" id="input-FloatPanel_AyohaUserRegistrationConfirmPassword"  style="border-color:black;color:black;width:100%;text-align: left;font-size:20px;font-weight:bold;">'

                                              },


                                                                ]

                                                            },


                                                             //{
                                                             //    xtype:'container'

                                                             //},
                                                                  {
                                                                      xtype: 'button',
                                                                      id: 'btnFloatPanel_AyohaUserRegistrationShowConfirmPassword',
                                                                      //  badgeText: '1',
                                                                      //hidden: true,

                                                                      margin: '0 0 -10 -30',
                                                                      height: 35,
                                                                      width: 35,
                                                                      html: '<img src="resources/icons/hidepassword.png" style="width: 25px; height: 25px;">',
                                                                      ui: 'plain',
                                                                      handler: function () {
                                                                          var x = document.getElementById("input-FloatPanel_AyohaUserRegistrationConfirmPassword");
                                                                          if (x.type === "password") {
                                                                              x.type = "text";
                                                                          } else {
                                                                              x.type = "password";
                                                                          }

                                                                       //   document.getElementById("input-FloatPanel_AyohaUserRegistrationConfirmPassword").focus();


                                                                          var btnImg = Ext.getCmp('btnFloatPanel_AyohaUserRegistrationShowConfirmPassword').getHtml();

                                                                          if (btnImg == '<img src="resources/icons/showpassword.png" style="width: 25px; height: 25px;">') {
                                                                              Ext.getCmp('btnFloatPanel_AyohaUserRegistrationShowConfirmPassword').setHtml('<img src="resources/icons/hidepassword.png" style="width: 25px; height: 25px;">');

                                                                          }
                                                                          if (btnImg == '<img src="resources/icons/hidepassword.png" style="width: 25px; height: 25px;">') {
                                                                              Ext.getCmp('btnFloatPanel_AyohaUserRegistrationShowConfirmPassword').setHtml('<img src="resources/icons/showpassword.png" style="width: 25px; height: 25px;">');
                                                                          }


                                                                      }
                                                                  },



                                                               {
                                                                   xtype: 'button',
                                                                   id: 'btnFloatPanel_AyohaUserRegistrationConfirmPassword',
                                                                   hidden: true,
                                                                   margin: '0 0 -10 0',
                                                                   height: 35,
                                                                   width: 35,
                                                                   html: '<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;" >',
                                                                   ui: 'plain',
                                                                   handler: function () {

                                                                   }
                                                               },

                                                   ]

                                               },
                                               {
                                                   margin: '4 0 0 0',
                                                   width: '90%',
                                                   hidden: true,
                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                   id: 'htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage',
                                                   html: '<div style="color:black;text-align: right;font-size:11px;width:100%;">Password is matched!</div>'
                                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                               },

                                             {
                                                 margin: '30 0 0 35',
                                                 hidden:true,
                                                 html: '<font size=2 color=black>Date Of Birth(Optional)</font>',

                                             },

                                             {
                                                 margin: '-2 0 0 35',
                                                 id: 'FloatPanel_AyohaUserRegistrationDOB',
                                                 hidden: true,
                                                 width: '80%',
                                                 height: 20,
                                                 html: '<input type="date" id="input-FloatPanel_AyohaUserRegistrationDOB"  style="border-color:black;color:black;width:100%;text-align: left;font-size:20px;font-weight:bold;">'


                                             },

                                         










                                                   {
                                                       xtype: 'container',
                                                       hidden:true,
                                                       width: '100%',
                                                       style: ' background-color:transparent',
                                                       margin: '30 0 0 0',
                                                       layout: {
                                                           type: 'hbox',
                                                           pack: 'start',
                                                           align: 'center'

                                                       },
                                                       items: [

                                                                {
                                                                    xtype: 'container',

                                                                    width: '90%',
                                                                    style: {

                                                                        background: 'transparent',

                                                                    },
                                                                    layout: {
                                                                        type: 'vbox',
                                                                        pack: 'left',
                                                                        align: 'left'

                                                                    },
                                                                    items: [


                                                                        {
                                                                            xtype: 'container',

                                                                            width: '100%',
                                                                            style: {

                                                                                background: 'transparent',

                                                                            },
                                                                            layout: {
                                                                                type: 'hbox',
                                                                                pack: 'start',
                                                                                align: 'center'

                                                                            },
                                                                            items: [
                                                                            {
                                                                                margin: '3 0 0 35',

                                                                                html: '<font size=2 color=black>Gender</font>',

                                                                            },



                                                                            ]
                                                                        },




                                                  {
                                                      margin: '-2 0 0 35',
                                                      id: 'FloatPanel_AyohaUserRegistrationUserGender',
                                                      width: '90%',
                                                      height: 20,
                                                      html: '<input type="text" id="input-FloatPanel_AyohaUserRegistrationUserGender" readOnly style="border-color:black;color:#F2F2F2;width:100%;text-align: left;font-size:20px;font-weight:bold;">'

                                                  },


                                                                    ]

                                                                },


                                                                 //{
                                                                 //    xtype:'container'

                                                                 //},
                                                                   {
                                                                       xtype: 'button',
                                                                       id: 'btnFloatPanel_AyohaUserRegistrationUserGender',
                                                                       //  badgeText: '1',
                                                                       margin: '0 0 -10 -30',
                                                                       height: 35,
                                                                       width: 35,
                                                                     //  html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                                                       ui: 'plain',
                                                                       handler: function () {
                                                                           //isFromUserEnterpriseDetails = 'Y';
                                                                           //FloatPanel_EnterprisesUserTypeListShow();
                                                                       }
                                                                   },

                                                       ]

                                                   },







                                             








                                     //{
                                     //    margin: '26 0 0 0',

                                     //    html: '<font size=3 color=black>Login</font>',

                                     //},


                                



                                             {
                                                 hidden: true,
                                                 margin: '-2 0 0 0',
                                                 id: 'FloatPanel_AyohaUserRegistrationPasswordTxt',
                                                 width: '100%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaUserRegistrationPasswordTxT"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

                                             },



                                             {
                                                 xtype: 'container',
                                                 margin: '17 0 0 0',
                                                 width: '100%',
                                                 style: {

                                                     background: 'transparent',

                                                 },
                                                 layout: {
                                                     type: 'hbox',
                                                     pack: 'right',
                                                     align: 'right'

                                                 },
                                                 items: [
                                             {
                                                 xtype: 'button',
                                                 hidden: true,
                                                 //  align: 'stretch',
                                                 flex: 1,
                                                 ui: 'plain',
                                                 // width: '80%',
                                                 height: 50,
                                                 margin: '7 0 0 0',
                                                 id: 'btn_FloatPanel_AyohaUserRegistration_Delete',
                                                 // width: '80%',
                                                 //style: {
                                                 //    background: '#FA8072',
                                                 //},
                                                 // padding: '10px',
                                                 //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                                                 text: '<button class="buttonStampCampaignCreate">Delete</button>',

                                                 handler: function () {


                                                     isDeleteorSave = 'Delete';

                                                     Swal.fire({
                                                         title: 'Are you sure want to delete?',
                                                         // text: "You won't be able to revert this!",
                                                         icon: 'warning',
                                                         showCancelButton: true,
                                                         confirmButtonColor: '#3085d6',
                                                         cancelButtonColor: '#d33',
                                                         confirmButtonText: 'Yes'
                                                     }).then(function (result) {
                                                         if (result.isConfirmed) {




                                                             FloatPanel_AyohaUserRegistration_SaveDelete("InActive")

                                                         }
                                                     })



                                                     //var valTextOne = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText1').value;
                                                     //if (valTextOne) {

                                                     //    SaveTextCardContent();

                                                     //} else {
                                                     //    Swal.fire({
                                                     //        position: 'center',
                                                     //        icon: 'error',
                                                     //        title: '<font size=5 color=red>Row Text 1 Cannot Empty!!</font>',
                                                     //        showConfirmButton: true,
                                                     //        // timer: 2500
                                                     //    });
                                                     //}






                                                 },


                                             },
                                                                                                 //  },
                                                      /////////////////////////////
                                                      {
                                                          xtype: 'container',
                                                          height: 45,
                                                          width: '100%',
                                                          layout: {
                                                              type: 'vbox',
                                                              pack: 'start',
                                                              align: 'center'

                                                          },

                                                          style: ' background-color: transparent;',
                                                          items: [
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
                                                                   //html: '<div ><img src="resources/icons/ayohaReward01.gif" width="55" height="55" alt="Company Name"></div>',
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
                                                        id: 'htmlFloatPanel_AyohaUserRegistration_bottomTxt',
                                                        html: '<font size=2 color=black><b>Ayoha Reward</b></font>'
                                                    },
                                                     {
                                                         margin: '-10 0 0 0',
                                                         id: 'htmlFloatPanel_AyohaUserRegistration_bottomTagLineTxt',
                                                         html: '<font size=1 color=black>We Double Your Reward!</font>'
                                                     },
                                                     {
                                                         margin: '10 0 0 0',
                                                         html: '<font size=1px color=black><center>By signing up you are agree to the term and condition of service.</center></font>',

                                                     },
                                                          ]
                                                      },

                                                         



                                                        






                                                 ]
                                             },













                                        ]
                                    },









                                ]

                            },


                           

                        ]
                    },


                                  

           
              









        ]


          

    });
    return _FloatPanel_AyohaUserRegistration;



}








//function FloatPanel_AyohaUserRegistrationShow(AccountNo) {

//    Ext.Viewport.remove(_FloatPanel_AyohaUserRegistration);
//    this.overlay = Ext.Viewport.add(FloatPanel_AyohaUserRegistration());
//    this.overlay.show();
//    _FloatPanel_AyohaUserRegistrationisOpen = 'Y';



//    alert(AccountNo);

//    var containerView = Ext.ComponentQuery.query('button[name=namecontainerFloatPanel_AyohaUserRegistrationPicProfile]')[0];
//    var containerViewEl = containerView.element;
//    containerViewEl.on('tap',
//      function (event, node, options, eOpts) {

//          FloatPanel_AyohaUserRegistration_UploadPhoto();
//      }
//    );


//    //Ext.getCmp('btn_FloatPanel_AyohaUserRegistration_Delete').setHidden(false);
//    //Ext.getCmp('btn_FloatPanel_AyohaUserRegistration_Save').setHidden(false);


//    Load_FloatPanel_AyohaUserRegistration_AyohaEnterprisesUserLoadByAccountNoStore(AccountNo);
//}



function FloatPanel_AyohaUserRegistrationAddNewShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaUserRegistration);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaUserRegistration());
    this.overlay.show();
    _FloatPanel_AyohaUserRegistrationisOpen = 'Y';
    AddRoutePages("FloatPanel_AyohaUserRegistrationHide()");
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    //document.getElementById('input-FloatPanel_AyohaUserRegistrationRegisterDate').value = date;
    //document.getElementById('input-FloatPanel_AyohaUserRegistrationLastLoginDate').value = date;

    FloatPanel_AyohaRegistration_AdjustHeight();
    var containerView = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaUserRegistrationPicProfile]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaUserRegistration_UploadPhoto();
      }
    );

    Ext.getCmp('btn_FloatPanel_AyohaUserRegistration_Delete').setHidden(true);
    Ext.getCmp('btn_FloatPanel_AyohaUserRegistration_Save').setHidden(false);
   // Ext.getCmp('htmlFloatPanel_AyohaUserRegistration_TitleHeaderTxt').setHtml('<font size=2 color=black><b>Sign Up</b></font>');
    document.getElementById("input-FloatPanel_AyohaUserRegistrationPassword").addEventListener("keyup", OnKeyUp_FloatPanel_AyohaUserRegistrationPassword);
    document.getElementById("input-FloatPanel_AyohaUserRegistrationConfirmPassword").addEventListener("keyup", OnKeyUp_FloatPanel_AyohaUserRegistrationConfirmPassword);
  //  document.getElementById("input-FloatPanel_AyohaUserRegistrationAccountName").addEventListener("keyup", OnKeyUp_FloatPanel_AyohaUserRegistrationAccountName);

}



var PasswordStatus;

function OnKeyUp_FloatPanel_AyohaUserRegistrationAccountName() {
    var AccountName = document.getElementById('input-FloatPanel_AyohaUserRegistrationAccountName').value.toLowerCase();
    if (AccountName.length <= 6)
    {
        Ext.getCmp('htmlFloatPanel_AyohaUserRegistrationHaiUser').setHtml('<font size=2 color=black><b>Hi ' + AccountName.charAt(0).toUpperCase() + AccountName.slice(1) + '</b></font>');
    }
   

}



function OnKeyUp_FloatPanel_AyohaUserRegistrationPassword() {


    var Password = document.getElementById('input-FloatPanel_AyohaUserRegistrationPassword').value;
    var ConfirmPassword = document.getElementById('input-FloatPanel_AyohaUserRegistrationConfirmPassword').value;


    if(Password.length < 6){
       
        Ext.getCmp('htmFloatPanel_AyohaUserRegistrationPasswordMessage').setHidden(false);
        Ext.getCmp('htmFloatPanel_AyohaUserRegistrationPasswordMessage').setHtml('<div class="blink_me" style="color:red;text-align: right;font-size:11px;width:100%;">Password cannot less than 6 charaters!</div>');
       // Ext.getCmp('btnFloatPanel_AyohaUserRegistrationPassword').setHidden(false);
      //  Ext.getCmp('btnFloatPanel_AyohaUserRegistrationPassword').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');
        Ext.getCmp('container_FloatPanel_AyohaUserRegistrationPassword').setMargin('20 0 0 0');
        

        if (ConfirmPassword) {
             if (Password != ConfirmPassword) {
            Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHidden(false);
            Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHtml('<div class="blink_me"  style="color:red;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');
            PasswordStatus = "Password Not is matched!";
           // Ext.getCmp('btnFloatPanel_AyohaUserRegistrationConfirmPassword').setHidden(false);
           // Ext.getCmp('btnFloatPanel_AyohaUserRegistrationConfirmPassword').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');
             }
        } else {
            Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHidden(true);
            Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHtml('<div class="blink_me"  style="color:red;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');
            PasswordStatus = "Password Not is matched!";
        }
       
        return;
    }

    if (Password.length >= 6) {

        Ext.getCmp('htmFloatPanel_AyohaUserRegistrationPasswordMessage').setHidden(true);
        Ext.getCmp('htmFloatPanel_AyohaUserRegistrationPasswordMessage').setHtml('<div class="blink_me" style="color:red;text-align: right;font-size:11px;width:100%;">Password cannot less than 6 charaters!</div>');
        PasswordStatus = "Password cannot less than 6 charaters!";
        // Ext.getCmp('btnFloatPanel_AyohaUserRegistrationPassword').setHidden(false);
        //  Ext.getCmp('btnFloatPanel_AyohaUserRegistrationPassword').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');
      //  Ext.getCmp('container_FloatPanel_AyohaUserRegistrationPassword').setMargin('20 0 0 0');


        if (ConfirmPassword) {
            if (Password != ConfirmPassword) {
                Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHidden(false);
                Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHtml('<div class="blink_me"  style="color:red;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');
                PasswordStatus = "Password Not is matched!";
                // Ext.getCmp('btnFloatPanel_AyohaUserRegistrationConfirmPassword').setHidden(false);
                // Ext.getCmp('btnFloatPanel_AyohaUserRegistrationConfirmPassword').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');
            }
            if (Password == ConfirmPassword) {
                Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHidden(false);
                Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHtml('<div class="blink_me" style="color:green;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');
                Ext.getCmp('htmFloatPanel_AyohaUserRegistrationPasswordMessage').setHidden(true);
                PasswordStatus = "Password is matched!";
            }
           
        } else {

            Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHidden(true);
            Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHtml('<div class="blink_me" style="color:red;text-align: right;font-size:11px;width:100%;">Confirm Password Not Valid!</div>');
            PasswordStatus = "Confirm Password Not Valid!";
        }

        return;
    }


    else {
        Ext.getCmp('htmFloatPanel_AyohaUserRegistrationPasswordMessage').setHidden(true);
      //  Ext.getCmp('btnFloatPanel_AyohaUserRegistrationPassword').setHidden(true);
        Ext.getCmp('container_FloatPanel_AyohaUserRegistrationPassword').setMargin('30 0 0 0');
    }


       
    }


function OnKeyUp_FloatPanel_AyohaUserRegistrationConfirmPassword() {
    var Password = document.getElementById('input-FloatPanel_AyohaUserRegistrationPassword').value;
    var ConfirmPassword = document.getElementById('input-FloatPanel_AyohaUserRegistrationConfirmPassword').value;






    if (ConfirmPassword.length < 6) {

        Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHtml('<div class="blink_me" style="color:red;text-align: right;font-size:11px;width:100%;">Password cannot less than 6 charaters!</div>');
        PasswordStatus = "Password cannot less than 6 charaters!";
        if (Password) {
            if (Password != ConfirmPassword) {
                Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHidden(false);
                Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHtml('<div class="blink_me" style="color:red;text-align: right;font-size:11px;width:100%;">Password cannot less than 6 charaters!</div>');
                PasswordStatus = "Password cannot less than 6 charaters!";
            }
        } else {
            Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHidden(false);
            Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHtml('<div class="blink_me" style="color:red;text-align: right;font-size:11px;width:100%;">Password cannot less than 6 charaters!</div>');
            PasswordStatus = "Password cannot less than 6 charaters!";
        }

        return;
    }

    console.log(ConfirmPassword.length);
    if (ConfirmPassword.length >= 6) {



        if (Password) {
            if (Password == ConfirmPassword) {
                Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHidden(false);
                Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHtml('<div class="blink_me" style="color:green;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');
                Ext.getCmp('htmFloatPanel_AyohaUserRegistrationPasswordMessage').setHidden(true);
                PasswordStatus = "Password is matched!";
            }
            if (Password != ConfirmPassword) {
                Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHidden(false);
                Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHtml('<div class="blink_me" style="color:red;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');
                PasswordStatus = "Password Not is matched!";
            }
        } else {
            Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHidden(false);
            Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHtml('<div class="blink_me" style="color:red;text-align: right;font-size:11px;width:100%;">Error Confirm Password!</div>');
            PasswordStatus = "Error Confirm Password!";
        }

        return;
    }






    //if (Password != ConfirmPassword) {
    //    Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHidden(false);
    //    Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHtml('<div class="blink_me" style="color:red;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');
    //}

    //if (Password == ConfirmPassword) {
    //    Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHidden(false);
    //    Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHtml('<div class="blink_me" style="color:green;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');
    //    Ext.getCmp('htmFloatPanel_AyohaUserRegistrationPasswordMessage').setHidden(true);
    //}


    //if ((Password == ConfirmPassword) && (Password.length >= 6)) {




    //    Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHidden(false);
    //    Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHtml('<div class="blink_me" style="color:green;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');

    //    //Ext.getCmp('btnFloatPanel_AyohaUserRegistrationPassword').setHidden(false);
    //    //Ext.getCmp('btnFloatPanel_AyohaUserRegistrationPassword').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');

    //    //Ext.getCmp('btnFloatPanel_AyohaUserRegistrationConfirmPassword').setHidden(false);
    //    //Ext.getCmp('btnFloatPanel_AyohaUserRegistrationConfirmPassword').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');
    //    Ext.getCmp('htmFloatPanel_AyohaUserRegistrationPasswordMessage').setHidden(true);


      
    //}else
    //{
    //    Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHidden(false);
    //    Ext.getCmp('htmFloatPanel_AyohaUserRegistrationConfirmPasswordMessage').setHtml('<div class="blink_me" style="color:red;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');

    //    //Ext.getCmp('btnFloatPanel_AyohaUserRegistrationPassword').setHidden(true);
    //    //Ext.getCmp('btnFloatPanel_AyohaUserRegistrationPassword').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');

    //    //Ext.getCmp('btnFloatPanel_AyohaUserRegistrationConfirmPassword').setHidden(false);
    //    //Ext.getCmp('btnFloatPanel_AyohaUserRegistrationConfirmPassword').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');




      
    //}
}


function FloatPanel_AyohaUserRegistrationHide() {
    _FloatPanel_AyohaUserRegistration.hide(); _FloatPanel_AyohaUserRegistrationisOpen = 'N';
    RemovePages("FloatPanel_AyohaUserRegistrationHide()");
}



//var StampCount;

function Load_FloatPanel_AyohaUserRegistration_AyohaEnterprisesUserLoadByAccountNoStore(AccountNo) {

    Ext.getStore('AyohaEnterprisesUserLoadByAccountNoStore').getProxy().setExtraParams({
        AccountNo: AccountNo,

    });
    Ext.StoreMgr.get('AyohaEnterprisesUserLoadByAccountNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaEnterprisesUserLoadByAccountNoStore').getProxy().setExtraParams({
            AccountNo: AccountNo
        });
        Ext.StoreMgr.get('AyohaEnterprisesUserLoadByAccountNoStore').load();
        var myStore = Ext.getStore('AyohaEnterprisesUserLoadByAccountNoStore');
        var modelRecord = myStore.getAt(0);




        Ext.getCmp('FloatPanel_AyohaUserRegistrationPicProfile').setHtml('<img src="' + modelRecord.get('Photo') + '" width="120" height="120"/>')

        globalFloatPanel_AyohaUserRegistration_ID = modelRecord.get('ID');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationPhotoName').value = modelRecord.get('PhotoName');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationID').value = modelRecord.get('AyohaEnterpriseUserID');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationAccountNo').value = modelRecord.get('AccountNo');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationAccountName').value = modelRecord.get('AccountName');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationEmail').value = modelRecord.get('Email');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationPhoneNumber').value = modelRecord.get('PhoneNumber');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationDOB').value = modelRecord.get('DOB');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationRegisterDate').value = modelRecord.get('RegisterDate');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationIsUserVerified').value = modelRecord.get('IsUserVerified');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationVerifyString').value = modelRecord.get('VerifyString');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationVeriyDate').value = modelRecord.get('VeriyDate');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationModifiedBy').value = modelRecord.get('ModifiedBy');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationModifiedDate').value = modelRecord.get('ModifiedDate');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationEnterpriseAccNo').value = modelRecord.get('EnterpriseAccNo');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationUserType').value = modelRecord.get('UserType');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationUserStatus').value = modelRecord.get('UserStatus');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationLastLoginDate').value = modelRecord.get('LastLoginDate');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationUserName').value = modelRecord.get('UseName');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationPassword').value = modelRecord.get('Password');
        document.getElementById('input-FloatPanel_AyohaUserRegistrationPasswordTxT').value = modelRecord.get('Password');

        Ext.Viewport.setMasked(false);








    });
    task.delay(1000);

}












var globalFloatPanel_AyohaUserRegistration_ID;
var globalUserPicProfile64;
var globalUserPicProfile64Resize;
function inputImgFloatPanel_AyohaUserRegistrationUploadedPhoto() {
    var file = document.getElementById('inputImg-FloatPanel_AyohaUserRegistrationUploadedPhoto').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_AyohaUserRegistrationUploadedPhoto').files[0].name;
    var AccountName = document.getElementById('input-FloatPanel_AyohaUserRegistrationAccountName').value;

    //var FileSize = file.size / 1024; // in MB
    //console.log(FileSize);
    //if (FileSize > 4096) {


    //    swalFireFail("Image size cannot exceeds 4 MB!");
    //    // CustomeMsgBoxShow('Image size exceeds 200 KB!');
    //    return;
    //    // $(file).val(''); //for clearing with Jquery
    //} else {

        if (file) {

            if (file.type.match("image.*")) {
                var reader = new FileReader();
                reader.readAsDataURL(file/*, "UTF-8"*/);
                reader.onload = function (event) {
                    globalUserPicProfile64 = event.target.result;
                    document.getElementById('input-FloatPanel_AyohaUserRegistrationPhotoName').value = fileName;
                   // console.log("Original Size:" + globalUserPicProfile64);






                    Ext.getCmp('FloatPanel_AyohaUserRegistrationPicProfile').setHtml('<img src="' + globalUserPicProfile64 + '"  style="width: 140px; height: 140px; border:2px solid purple; border-radius: 50%; "/>');

                    ResizeImage();
                   
                };


            }
            else {
                //  img64AccPicProfile = Picture;
            }
        }


       
    //}
}


function ResizeImage() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
       var filesToUploads = document.getElementById('inputImg-FloatPanel_AyohaUserRegistrationUploadedPhoto').files;
       // var filesToUploads = document.getElementById('inputImg-htmlFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage').files;
    
        var file = filesToUploads[0];
        if (file) {

            var reader = new FileReader();
            // Set the image once loaded into file reader
            reader.onload = function (e) {

                var img = document.createElement("img");
                img.src = e.target.result;

                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                var MAX_WIDTH = 1000;
                var MAX_HEIGHT = 1000;
                var width = img.width;
                var height = img.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);

                globalUserPicProfile64 = "";

                globalUserPicProfile64 = canvas.toDataURL(file.type);

               // document.getElementById('output').src = dataurl;

               // Ext.getCmp('FloatPanel_AyohaUserRegistrationPicProfile').setHtml('<img src="' + dataurl + '"  style="width: 140px; height: 140px; border:2px solid white; border-radius: 50%; "/>');

              // alert("Resize image:" + globalUserPicProfile64)
            }
            reader.readAsDataURL(file);

        }

    } else {
        alert('The File APIs are not fully supported.');
    }
}


function FloatPanel_AyohaUserRegistration_UploadPhoto() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_AyohaUserRegistrationUploadedPhoto").click();
    });
}

var isAddNewUserEnterprise;
function FloatPanel_AyohaUserRegistration_Save() {
    LoadingPanelShow(getLoadingIcon(), 'Processing..');

   
    var AccountName = document.getElementById('input-FloatPanel_AyohaUserRegistrationAccountName').value;
   
    var strEmail = document.getElementById('input-FloatPanel_AyohaUserRegistrationEmail').value;
    var TrimStrEmail = strEmail.replace(/\s/g, '');

    //var strPhoneNo = document.getElementById('input-FloatPanel_AyohaUserRegistrationPhoneNumber').value;
    //var TrimStrPhoneNo = strPhoneNo.replace(/\s/g, '');


    var imgbase64;

    if (globalUserPicProfile64) {
        imgbase64 = globalUserPicProfile64;
    } else {
        imgbase64 = "ExistingImage";
    }


    var date = new Date();
    var current_date = date.getFullYear() + '' + (date.getMonth() + 1) + '' + date.getDate();
    var current_time = date.getHours() + '' + date.getMinutes() + '' + date.getSeconds();
    var date_time = current_date + '' + current_time;

    var task = Ext.create('Ext.util.DelayedTask', function () {
    var objn = {
       
        //"AccountNo": AccountName.replace(/ /g, '') + '-' + TrimStrPhoneNo + '-' + GenerateRandomNo(),
        "AccountNo": AccountName.replace(/ /g, '') + '-' + date_time.replace(/ /g, '') + '-' + GenerateRandomNo(),
        "AccountName": document.getElementById('input-FloatPanel_AyohaUserRegistrationAccountName').value.toUpperCase(),
        "Email": TrimStrEmail,
        //"PhoneNo": TrimStrPhoneNo,
        "PhoneNo": '',
        "Photo": imgbase64,
       // "Email": document.getElementById('input-FloatPanel_AyohaUserRegistrationEmail').value,
        "UserName": TrimStrEmail,
        //"UserName": TrimStrPhoneNo,
        "Katalaluan": document.getElementById('input-FloatPanel_AyohaUserRegistrationPassword').value,        
        "PhotoName": document.getElementById('input-FloatPanel_AyohaUserRegistrationPhotoName').value,
        "PlayerID":  localStorage.getItem("player_id"),
        //"ContentCardImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value,
      
    };
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileInsert',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                //  swalFireSuccess("Save Succesfully!");
                var valKatatLalu=document.getElementById('input-FloatPanel_AyohaUserRegistrationPassword').value;
               
                FloatPanel_AyohaUserRegistrationHide();
                loadAyohaUserProfileLoginBodyAfterCreatedAccount(TrimStrEmail, valKatatLalu);

            }
            else {

                swalFireFail("Create Account Failed!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Create Account Failed!!");
        }

    });
    });
    Ext.Viewport.unmask();
    task.delay(500);
}






function FloatPanel_AyohaRegistration_AdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    //var newHeights = x - 232;
    var newHeights = x - 100;
    console.log(newHeights)

    //  480px 
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;

    Ext.getCmp('containerFloatPanel_AyohaRegistrationID').setHeight(x);
    Ext.getCmp('containerFloatPanel_AyohaUserRegistration_Master').setHeight(x + 50);
    
    // Ext.getCmp('containerFloatPanel_AyohaReward_ViewMyRankingList').setHeight(x);
    // Ext.getCmp('containerFloatPanel_RewardStore_List').setHeight(x - 180);




}







var globalCheckUserName;
var globalCheckEmail;

function AyohaUserProfile_CheckExistingUser() {


    LoadingPanelShow(getLoadingIcon(), 'Checking..');
   
   
    var strEmail = document.getElementById('input-FloatPanel_AyohaUserRegistrationEmail').value;
    var TrimStrEmail = strEmail.replace(/\s/g, '');

    //var strPhoneNo = document.getElementById('input-FloatPanel_AyohaUserRegistrationPhoneNumber').value;
    //var TrimStrPhoneNo = strPhoneNo.replace(/\s/g, '');




    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            //"UserName": TrimStrPhoneNo,
            //"Email": TrimStrEmail

            "UserName": TrimStrEmail,
            "Email": TrimStrEmail
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileCheckExistingUser',

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
                        globalCheckUserName = data.results[0].UserName;
                        globalCheckEmail = data.results[0].Email;

                      //  var RegUserName = TrimStrPhoneNo;
                        var RegEmail = TrimStrEmail;
                      

                        //if (RegUserName == globalCheckUserName) {
                        //    swalFireFail("(" + RegUserName + ") Already Registered!");
                            
                        //    return;
                        //}
                        if (RegEmail == globalCheckEmail) {
                            swalFireFail("(" + RegEmail + ") Already Registered!");
                            LoadingPanelHide();
                            return;
                        }
                        return;
                    }
                    if (data.total == 0) {
                        Ext.Viewport.unmask();
                        FloatPanel_AyohaUserRegistration_Save();
                    }





                }
                else {

                    swalFireFail("Cheking Failed!!!" + result.responseText.trim() + "</font>");
                    LoadingPanelHide();
                    Ext.Viewport.unmask();
                }
               

            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
                swalFireFail("Cheking Failed!!!</font>");
                LoadingPanelHide();
            }

        });



    });
  //  Ext.Viewport.unmask();
    task.delay(500);


  


}