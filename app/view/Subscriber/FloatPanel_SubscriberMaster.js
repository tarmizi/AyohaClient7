
Ext.define('BuskartApp.view.Subscriber.FloatPanel_SubscriberMaster', {

});

var _FloatPanel_SubscriberMaster;


var isFloatPanel_SubscriberMasterOpen = 'N';
var isbtnFloatPanel_SubscriberMaster_SaveEdit = "Edit";





function FloatPanel_SubscriberMaster() {

    _FloatPanel_SubscriberMaster =
    Ext.create('Ext.Container', {
        zIndex: 350,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_SubscriberMasterID',
        draggable: false,
        indicators: false,
        styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
        modal: true,
        // hideOnMaskTap: true,
        layout: {
            type: 'fit'
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
        //style: 'border-bottom:1px solid;background-color:#353839;',
        style: 'background-color:white;',
        //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
       // style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
    

        items: [

            {

                xtype: 'container',
                width: '100%',
                height:40,
                docked:'top',
                // width: 40,

                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,

                id: 'containerFloatPanel_SubscriberMasterHeader',
                // style: {
                //     // background: '#D25959',
                //     background: 'transparent',
                //     // border: '2px'
                // },
                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
             style: 'border-bottom:1px solid #ccc;background-color:transparent',
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
                                         id: 'btnFloatPanel_SubscriberMasterBack',
                                         height: 30,
                                         width: 35,
                                         // iconCls: 'list',
                                         html: '<div ><img src="resources/icons/backwhite03.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {

                                             _FloatPanel_SubscriberMaster.hide(Ext.fx.Animation({
                                                 type: 'slideOut',
                                                 direction: 'left',
                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                 duration: 250

                                             }));
                                             isFloatPanel_SubscriberMasterOpen = 'N';
                                             RemovePages("FloatPanel_SubscriberMasterHide()");
                                         }
                                     },
                                    
                                      {
                                          xtype: 'spacer',

                                      },
                                       {
                                           margin: '0 0 0 0',
                                           id: 'htmlFloatPanel_SubscriberMaster_TitleHeaderTxt',
                                           html: '<font size=2 color=black><b>My Account</b></font>'
                                       },
                                          {
                                              xtype: 'button',
                                              id: 'btnFloatPanel_SubscriberMaster_TitleHeaderIcon',
                                              height: 30,
                                              width: 35,
                                              // iconCls: 'list',
                                              html: '<div ><img src="resources/icons/editProfileWhite02.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {
                                                  _FloatPanel_SubscriberMaster.hide(Ext.fx.Animation({
                                                      type: 'slideOut',
                                                      direction: 'right',
                                                      easing: 'cubic-bezier(.7,0,.7,1)',
                                                      duration: 250

                                                  }));
                                                  isFloatPanel_SubscriberMasterOpen = 'N';
                                                  RemovePages("FloatPanel_SubscriberMasterHide()");

                                              }
                                          },
                                     

                                           
                                   
                                           









                       ]

            },

            



                {

                    xtype: 'container',
                    width: '100%',
                    // hidden:true,
                    // width: 40,
                    docked: 'bottom',
                    margin: '0 0 0 0',
                    height: 65,
                    //  title: '<font size="3" color="white">Live Tracking Map</font>',
                    //hidden: true,

                    id: 'containerFloatPanel_SubscriberMaster_MenuBottom',
                    // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                    style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid grey;',
                    // style: "background-color: #EAEEF3;",

                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center'

                    },



                    // hidden:true,
                    items:
                           [
                               {
                                   xtype: 'container',
                                   width: '100%',
                                   style: "background-color: transparent",
                                   height: 65,
                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center',
                                   },
                                   scrollable: {
                                       direction: 'horizontal',
                                       directionLock: true
                                   },
                                   items: [


                                       {
                                           xtype: 'container',
                                           //width: 500,
                                           width: '100%',
                                           style: "background-color: transparent",
                                           height: 55,
                                           layout: {
                                               type: 'hbox',
                                               pack: 'center',
                                               align: 'center',
                                           },
                                           items: [




                                               {
                                                   xtype: 'container',
                                                   id: 'containerFloatPanel_SubscriberMaster_MenuBottom_MyProfile',
                                                   width: '33.3%',
                                                   //height: 30,
                                                   margin: '0 0 0 0',
                                                   //flex: 1,
                                                   style: "background-color: transparent",
                                                   //style: "background-color: #F35B57;",

                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'start',
                                                       align: 'center'

                                                   },
                                                   items: [

                                                        {
                                                            xtype: 'button',
                                                            id: 'btn_FloatPanel_SubscriberMaster_MenuBottom_MyProfile',
                                                            //  badgeText: '1',
                                                            margin: '0 0 0 0',

                                                            height: 36,
                                                            width: 36,
                                                            html: '<img src="resources/icons/MyAccountPurpleOne.png" width="26" height="26" alt="Company Name">',
                                                            ui: 'plain',
                                                            handler: function () {
                                                                Ext.getCmp('tabpanelFloatPanel_SubscriberMaster_inner').setActiveItem(0);
                                                                Ext.getCmp('btnFloatPanel_SubscriberMaster_SaveBankAccount').setHidden(true);
                                                                Ext.getCmp('FloatPanel_SubscriberMasterTitle').setHtml('<font size=4 color=black><b>My Profile </b></font>');
                                                                Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_Save').setHidden(true);
                                                              
                                                                if (isbtnFloatPanel_SubscriberMaster_SaveEdit == "Save") {
                                                                   

                                                                    Ext.getCmp('btnFloatPanel_SubscriberMaster_Edit').setHidden(true);
                                                                    Ext.getCmp('btnFloatPanel_SubscriberMaster_Save').setHidden(false);
                                                                } if (isbtnFloatPanel_SubscriberMaster_SaveEdit == "Edit") {


                                                                    Ext.getCmp('btnFloatPanel_SubscriberMaster_Edit').setHidden(false);
                                                                    Ext.getCmp('btnFloatPanel_SubscriberMaster_Save').setHidden(true);
                                                                }
                                                              
                                                            }
                                                        },
                                                        {
                                                            xtype: 'container',
                                                            id: 'containerFloatPanel_SubscriberMaster_MenuBottom_MyProfileTxt',
                                                            width: '100%',
                                                            layout: {
                                                                type: 'vbox',
                                                                pack: 'start',
                                                                align: 'center'

                                                            },
                                                            items: [
                                                                {
                                                                    margin: '-12 0 0 0',
                                                                    // id: 'htmlStampHistoryTxt',
                                                                    html: '<font size=1 color=grey>My</font>'
                                                                },
                                                                {
                                                                    margin: '-12 0 0 0',
                                                                    // id: 'htmlStampHistoryTxt',
                                                                    html: '<font size=1 color=grey>Profile</font>'
                                                                },
                                                            ]

                                                        },


                                                   ]
                                               },

                                         {
                                             xtype: 'container',
                                             id: 'containerFloatPanel_SubscriberMaster_MenuBottom_BankAccount',
                                             width: '33.3%',
                                             hidden:true,
                                             //height: 30,
                                             margin: '0 0 0 0',
                                             // flex: 1,
                                             style: "background-color: transparent",
                                             //style: "background-color: #F35B57;",

                                             layout: {
                                                 type: 'vbox',
                                                 pack: 'start',
                                                 align: 'center'

                                             },
                                             items: [

                                                  {
                                                      xtype: 'button',
                                                      id: 'btn_FloatPanel_SubscriberMaster_MenuBottom_BankAccount',
                                                      //  badgeText: '1',
                                                      margin: '0 0 0 0',

                                                      height: 36,
                                                      width: 36,
                                                      html: '<img src="resources/icons/transferewallet.png" width="26" height="26" alt="Company Name">',
                                                      ui: 'plain',
                                                      handler: function () {
                                                          Ext.getCmp('tabpanelFloatPanel_SubscriberMaster_inner').setActiveItem(1);
                                                          Ext.getCmp('btnFloatPanel_SubscriberMaster_SaveBankAccount').setHidden(false);
                                                          Ext.getCmp('FloatPanel_SubscriberMasterTitle').setHtml('<font size=4 color=black><b>My Bank Account Info </b></font>');

                                                          Ext.getCmp('btnFloatPanel_SubscriberMaster_Edit').setHidden(true);
                                                          Ext.getCmp('btnFloatPanel_SubscriberMaster_Save').setHidden(true);
                                                        //  Ext.getCmp('btnFloatPanel_SubscriberMaster_SaveBankAccount').setHidden(true);
                                                         // Ext.getCmp('FloatPanel_SubscriberMasterTitle').setHtml('<font size=4 color=black><b>My Profile </b></font>');
                                                          Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_Save').setHidden(true);
                                                        
                                                          FloatPanel_SubscriberMaster_BankInfo_LoadBySubscriberAccNo();

                                                        
                                                      }
                                                  },
                                                  {
                                                      xtype: 'container',
                                                      id: 'containerFloatPanel_SubscriberMaster_MenuBottom_BankAccountTxt',
                                                      width: '100%',
                                                      layout: {
                                                          type: 'vbox',
                                                          pack: 'start',
                                                          align: 'center'

                                                      },
                                                      items: [
                                                          {
                                                              margin: '-12 0 0 0',
                                                              // id: 'htmlStampHistoryTxt',
                                                              html: '<font size=1 color=grey>Bank Account</font>'
                                                          },
                                                          {
                                                              margin: '-12 0 0 0',
                                                              // id: 'htmlStampHistoryTxt',
                                                              html: '<font size=1 color=grey>Info</font>'
                                                          },
                                                      ]

                                                  },


                                             ]
                                         },


                                         {
                                            xtype: 'container',
                                            id: 'containerFloatPanel_SubscriberMaster_MenuBottom_ChangePassword',
                                            width: '33.3%',
                                            //height: 30,
                                            margin: '0 0 0 0',
                                            // flex: 1,
                                            style: "background-color: transparent",
                                            //style: "background-color: #F35B57;",

                                            layout: {
                                                type: 'vbox',
                                                pack: 'start',
                                                align: 'center'

                                            },
                                            items: [

                                                 {
                                                     xtype: 'button',
                                                     id: 'btn_FloatPanel_SubscriberMaster_MenuBottom_ChangePassword',
                                                     //  badgeText: '1',
                                                     margin: '0 0 0 0',

                                                     height: 36,
                                                     width: 36,
                                                     html: '<img src="resources/icons/security.png" width="26" height="26" alt="Company Name">',
                                                     ui: 'plain',
                                                     handler: function () {
                                                         Ext.getCmp('tabpanelFloatPanel_SubscriberMaster_inner').setActiveItem(2);
                                                        // Ext.getCmp('btnFloatPanel_SubscriberMaster_SaveBankAccount').setHidden(false);
                                                        // Ext.getCmp('FloatPanel_SubscriberMasterTitle').setHtml('<font size=4 color=black><b>My Bank Account Info </b></font>');

                                                         Ext.getCmp('btnFloatPanel_SubscriberMaster_Edit').setHidden(true);
                                                         Ext.getCmp('btnFloatPanel_SubscriberMaster_Save').setHidden(true);
                                                        // FloatPanel_SubscriberMaster_BankInfo_LoadBySubscriberAccNo();
                                                        Ext.getCmp('btnFloatPanel_SubscriberMaster_SaveBankAccount').setHidden(true);
                                                        Ext.getCmp('FloatPanel_SubscriberMasterTitle').setHtml('<font size=4 color=black><b>Change Password</b></font>');
                                                        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_Save').setHidden(false);
                                                      

                                                       
                                                     }
                                                 },
                                                 {
                                                     xtype: 'container',
                                                     id: 'containerFloatPanel_SubscriberMaster_MenuBottom_ChangePasswordTxt',
                                                     width: '100%',
                                                     layout: {
                                                         type: 'vbox',
                                                         pack: 'start',
                                                         align: 'center'

                                                     },
                                                     items: [
                                                         {
                                                             margin: '-12 0 0 0',
                                                             // id: 'htmlStampHistoryTxt',
                                                             html: '<font size=1 color=grey>Change</font>'
                                                         },
                                                         {
                                                             margin: '-12 0 0 0',
                                                             // id: 'htmlStampHistoryTxt',
                                                             html: '<font size=1 color=grey>Password</font>'
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


            {
                xtype: 'container',
             
                 width: '100%',
                 height: '100%', 
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'

                },
                items: [
                  /////////////////

                  {
                    xtype: 'container',
                    margin: '2 0 0 0',                                 
                    height: 160,
                    width: 160,
                    id: 'FloatPanel_SubscriberMasterPicProfile',
                    name: 'namecontainerFloatPanel_SubscriberMasterPicProfile',                                  
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center'
       
                    },
                    items: [
                        {
                            margin: '0 0 0 0',
                            height: 160,
                            width: 160,
                            id:'htmlFloatPanel_SubscriberMasterPicProfile',
                            html: '<img src="resources/icons/profileIconWhiteOne.png" width="160" height="160"/>',
                        },
       
                    ]
       
                },
       
                
       
       
                                 {
                                     id: 'HtmlinputImgFloatPanel_SubscriberMasterUploadedPhoto',
                                     hidden: true,
                                     margin: '0 0 0 0',
                                     width: '100%',
                                     html: '<input type="file" id="inputImg-FloatPanel_SubscriberMasterUploadedPhoto" accept="image/*"  onchange="inputImgFloatPanel_SubscriberMasterUploadedPhoto()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'
       
                                     //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',
       
       
       
       
       
                                 },
       
                                 {
                                    margin: '15 0 0 0',
                            id:'FloatPanel_SubscriberMasterTitle',
                                    html: '<font size=4 color=black><b>My Profile </b></font>',
                            
                                },
       
       
       
                                 {
                                     margin: '-2 0 0 0',
                                     hidden: true,
                                     id: 'FloatPanel_SubscriberMasterPhotoName',
                                     width: '100%',
                                     height: 20,
                                     html: '<input type="text" id="input-FloatPanel_SubscriberMasterPhotoName"  readOnly style="border-color:black;color:black;width:100%;text-align: right;font-size:12px;">'
       
       
                                 },
       
                                 {
                                     xtype: 'container',
                                     margin: '-12 0 0 0',
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
                               id: 'btnFloatPanel_SubscriberMaster_Delete',
                               hidden: true,
                               //  badgeText: '1',
                               margin: '0 0 0 0',
                               height: 40,
                               width: 40,
                              // html: '<img src="resources/icons/deleteWhiteTwo.png" width="30" height="30" alt="Company Name">',
                               ui: 'plain',
                               handler: function () {
                                  
                               }
                           },
       {
       xtype: 'button',
       id: 'btnFloatPanel_SubscriberMaster_Save',
       hidden: true,
       //  badgeText: '1',
       margin: '0 0 0 0',
       height: 40,
       width: 40,
       html: '<img src="resources/icons/saveWhiteOne.png" width="30" height="30" alt="Company Name">',
       ui: 'plain',
       handler: function () {
       Ext.getCmp('btnFloatPanel_SubscriberMaster_Edit').setHidden(false);
       Ext.getCmp('btnFloatPanel_SubscriberMaster_Save').setHidden(true);
       Ext.getCmp('btnFloatPanel_SubscriberMaster_Delete').setHidden(true);
       
       
       Ext.getCmp('FloatPanel_SubscriberMasterAccountName').setHidden(false);
       Ext.getCmp('FloatPanel_SubscriberMasterAccountName_edit').setHidden(true);
       
       
       Ext.getCmp('FloatPanel_SubscriberMasterEmail').setHidden(false);
       Ext.getCmp('FloatPanel_SubscriberMasterEmail_edit').setHidden(true);
       
       
       Ext.getCmp('FloatPanel_SubscriberMasterPhoneNo').setHidden(false);
       Ext.getCmp('FloatPanel_SubscriberMasterPhoneNo_edit').setHidden(true);
       
       Ext.getCmp('FloatPanel_SubscriberMasterDOB').setHidden(false);
       Ext.getCmp('FloatPanel_SubscriberMasterDOB_edit').setHidden(true);



       Ext.getCmp('FloatPanel_SubscriberMasterGender').setHidden(false);
       Ext.getCmp('FloatPanel_SubscriberMasterGender_edit').setHidden(true);

       Ext.getCmp('FloatPanel_SubscriberMasterStreetAddress').setHidden(false);
       Ext.getCmp('FloatPanel_SubscriberMasterStreetAddress_edit').setHidden(true);



       Ext.getCmp('FloatPanel_SubscriberMasterTown').setHidden(false);
       Ext.getCmp('FloatPanel_SubscriberMasterTown_edit').setHidden(true);


       Ext.getCmp('FloatPanel_SubscriberMasterPostCode').setHidden(false);
       Ext.getCmp('FloatPanel_SubscriberMasterPostCode_edit').setHidden(true);


       Ext.getCmp('FloatPanel_SubscriberMasterState').setHidden(false);
       Ext.getCmp('FloatPanel_SubscriberMasterState_edit').setHidden(true);


       Ext.getCmp('FloatPanel_SubscriberMasterCountry').setHidden(false);
       Ext.getCmp('FloatPanel_SubscriberMasterCountry_edit').setHidden(true);



       Ext.getCmp('FloatPanel_SubscriberMasterProfession').setHidden(false);
       Ext.getCmp('FloatPanel_SubscriberMasterProfession_edit').setHidden(true);


       Ext.getCmp('FloatPanel_SubscriberMasterHobby').setHidden(false);
       Ext.getCmp('FloatPanel_SubscriberMasterHobby_edit').setHidden(true);

       FloatPanel_SubscriberMaster_SaveMyAccount();
       isbtnFloatPanel_SubscriberMaster_SaveEdit = "Edit";
       }
       },
       
                             {
                                 xtype: 'button',
                                 id: 'btnFloatPanel_SubscriberMaster_Edit',
                                 //  badgeText: '1',
                                 margin: '0 0 0 0',
                                 height: 40,
                                 width: 40,
                                 html: '<div class="blink_me"><img src="resources/icons/editProfile.png" width="30" height="30" alt="Company Name"></div>',
                                 ui: 'plain',
                                 handler: function () {
       
       
       
                                     isbtnFloatPanel_SubscriberMaster_SaveEdit = "Save";
       
                                     Ext.getCmp('btnFloatPanel_SubscriberMaster_Edit').setHidden(true);
                                     Ext.getCmp('btnFloatPanel_SubscriberMaster_Save').setHidden(false);
                                     Ext.getCmp('btnFloatPanel_SubscriberMaster_Delete').setHidden(true);
       
       
                                     Ext.getCmp('FloatPanel_SubscriberMasterAccountName').setHidden(true);
                                     Ext.getCmp('FloatPanel_SubscriberMasterAccountName_edit').setHidden(false);
       
       
                                     Ext.getCmp('FloatPanel_SubscriberMasterEmail').setHidden(true);
                                     Ext.getCmp('FloatPanel_SubscriberMasterEmail_edit').setHidden(false);
       
       
                                     Ext.getCmp('FloatPanel_SubscriberMasterPhoneNo').setHidden(true);
                                     Ext.getCmp('FloatPanel_SubscriberMasterPhoneNo_edit').setHidden(false);
       
                                     Ext.getCmp('FloatPanel_SubscriberMasterDOB').setHidden(true);
                                     Ext.getCmp('FloatPanel_SubscriberMasterDOB_edit').setHidden(false);
       
       
                                 
                                     Ext.getCmp('FloatPanel_SubscriberMasterGender').setHidden(true);
                                     Ext.getCmp('FloatPanel_SubscriberMasterGender_edit').setHidden(false);
                              
                                     Ext.getCmp('FloatPanel_SubscriberMasterStreetAddress').setHidden(true);
                                     Ext.getCmp('FloatPanel_SubscriberMasterStreetAddress_edit').setHidden(false);
                              
                              
                              
                                     Ext.getCmp('FloatPanel_SubscriberMasterTown').setHidden(true);
                                     Ext.getCmp('FloatPanel_SubscriberMasterTown_edit').setHidden(false);
                              
                              
                                     Ext.getCmp('FloatPanel_SubscriberMasterPostCode').setHidden(true);
                                     Ext.getCmp('FloatPanel_SubscriberMasterPostCode_edit').setHidden(false);
                              
                              
                                     Ext.getCmp('FloatPanel_SubscriberMasterState').setHidden(true);
                                     Ext.getCmp('FloatPanel_SubscriberMasterState_edit').setHidden(false);
                              
                              
                                     Ext.getCmp('FloatPanel_SubscriberMasterCountry').setHidden(true);
                                     Ext.getCmp('FloatPanel_SubscriberMasterCountry_edit').setHidden(false);
                                     
       
                                     Ext.getCmp('FloatPanel_SubscriberMasterProfession').setHidden(true);
                                     Ext.getCmp('FloatPanel_SubscriberMasterProfession_edit').setHidden(false);
                              
                              
                                     Ext.getCmp('FloatPanel_SubscriberMasterHobby').setHidden(true);
                                     Ext.getCmp('FloatPanel_SubscriberMasterHobby_edit').setHidden(false);
       
       
       
                                 }
                             },
       
       
       
                             {
                                 xtype: 'button',
                                 id: 'btnFloatPanel_SubscriberMaster_SaveBankAccount',
                                 hidden: true,
                                 //  badgeText: '1',
                                 margin: '0 0 0 0',
                                 height: 40,
                                 width: 40,
                                 html: '<img src="resources/icons/saveWhiteOne.png" width="30" height="30" alt="Company Name">',
                                 ui: 'plain',
                                 handler: function () {
                                     FloatPanel_SubscriberMaster_SaveMyAccount_BankInfo();
       
                                 }
                             },
                             {
                                xtype: 'button',
                                id: 'btnFloatPanel_SubscriberMasterChangePassword_Save',
                                hidden: true,
                                margin: '0 0 0 0',
                                height: 40,
                                width: 40,
                                html: '<img src="resources/icons/saveWhiteOne.png" width="30" height="30" alt="Company Name">',
                                ui: 'plain',
                                handler: function () {
                                
                                FloatPanel_SubscriberMaster_UpdatePasswordMyAccount();
                                }
                                },
                                     ]
                                 },
//////////////////////////////////////////////
{
    xtype: 'tabpanel',
    // hidden: true,
    //  hidden:true,
    id: 'tabpanelFloatPanel_SubscriberMaster_inner',
    // style: 'border-top:2px solid #ECF0F1;background: white;',
  style: 'background-color: transparent;',
    // margin: '-20 0 0 -26',
    // margin: '25 0 0 0',
//flex:1,
    //width: 200,
    width: '95%',
    //height: '66%',
     height: 375,
   // height: '100%',
    //height: 50,
    //  zIndex: 200,
    //  docked: 'bottom',
    tabBarPosition: 'top',
    ui: 'plain',
    // docked: 'bottom',

    initialize: function (c) {
        //this.getTabBar().hide();


    },
    
    items: [
     
            

        

     {
         xtype: 'container',
         width: '100%',
         height:'100%',
         //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
         style: "background-color: transparent;",
         //style: "background-color: #F35B57;",
         title: 'FloatPanel_SubscriberMasterMaster_Profile',
         layout: {
             type: 'vbox',
             pack: 'start',
             align: 'left'

         }, 
        
        
         items: [


{
xtype: 'container',
width: '100%',
height:'100%',    
style: "background-color: transparent;",
layout: {
type: 'vbox',
pack: 'start',
align: 'left'

}, 
scrollable: {
    direction: 'vertical',
    directionLock: true,
    indicators: false
},
items:[
   
{
margin: '-5 0 0 0',
id: 'htmlAccountNameLabel',

html: '<font size=2 color=black>Account Name</font>',

},
{
//hidden: true,
id: 'FloatPanel_SubscriberMasterAccountName',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
//html: '<input type="text" id="input-FloatPanel_SubscriberMasterAccountName"  readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" value="TARMIZI BIN RAHIM">'
html: '<input type="text" id="input-FloatPanel_SubscriberMasterAccountName"  readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" value="TARMIZI BIN RAHIM">'




},
{
hidden: true,
id: 'FloatPanel_SubscriberMasterAccountName_edit',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterAccountName_edit"  style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" value="TARMIZI BIN RAHIM">'


},

{
margin: '5 0 0 0',

html: '<font size=2 color=black>Email</font>',

},
{
//hidden: true,
id: 'FloatPanel_SubscriberMasterEmail',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterEmail"  readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" value="BuskartApp09@gmail.com">'


},

{
hidden: true,
id: 'FloatPanel_SubscriberMasterEmail_edit',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterEmail_edit"  style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" value="BuskartApp09@gmail.com">'


},
{
margin: '5 0 0 0',

html: '<font size=2 color=black>Phone No</font>',

},
{
//hidden: true,
id: 'FloatPanel_SubscriberMasterPhoneNo',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterPhoneNo"  readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" value="+60133376958">'


},

{
hidden: true,
id: 'FloatPanel_SubscriberMasterPhoneNo_edit',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterPhoneNo_edit"  style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" value="+60133376958">'


},

{
margin: '5 0 0 0',

html: '<font size=2 color=black>DOB</font>',

},
{
//hidden: true,
id: 'FloatPanel_SubscriberMasterDOB',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="date" id="input-FloatPanel_SubscriberMasterDOB"  readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px">',


},



{
hidden: true,
id: 'FloatPanel_SubscriberMasterDOB_edit',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="date" id="input-FloatPanel_SubscriberMasterDOB_edit"  style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px">',


},




{
margin: '5 0 0 0',

html: '<font size=2 color=black>Gender</font>',

},
{
//hidden: true,
id: 'FloatPanel_SubscriberMasterGender',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterGender"  readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" value="select gender">'


},

{
hidden: true,
id: 'FloatPanel_SubscriberMasterGender_edit',
margin: '0 0 0 0',
width: '100%',
//  height: 20,
// html: '<input type="text" id="input-FloatPanel_SubscriberMasterGender_edit"  style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" value="+60133376958">'
html:'<select name="gender" id="input-FloatPanel_SubscriberMasterGender_edit" style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px"><option value="male">Male</option><option value="female">Female</option></select>'




},

{
margin: '5 0 0 0',

html: '<font size=2 color=black>Street Address</font>',

},
{
//hidden: true,
id: 'FloatPanel_SubscriberMasterStreetAddress',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterStreetAddress"  readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" value="+60133376958">'


},

{
hidden: true,
id: 'FloatPanel_SubscriberMasterStreetAddress_edit',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterStreetAddress_edit"  style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" value="+60133376958">'


},





{
margin: '5 0 0 0',

html: '<font size=2 color=black>Town/City</font>',

},
{
//hidden: true,
id: 'FloatPanel_SubscriberMasterTown',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterTown"  readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" >'


},

{
hidden: true,
id: 'FloatPanel_SubscriberMasterTown_edit',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterTown_edit"  style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" >'


},








{
margin: '5 0 0 0',

html: '<font size=2 color=black>PostCode</font>',

},
{
//hidden: true,
id: 'FloatPanel_SubscriberMasterPostCode',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="number" id="input-FloatPanel_SubscriberMasterPostCode"  readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px">'


},

{
hidden: true,
id: 'FloatPanel_SubscriberMasterPostCode_edit',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="number" id="input-FloatPanel_SubscriberMasterPostCode_edit"  style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px">'


},





{
margin: '5 0 0 0',

html: '<font size=2 color=black>State</font>',

},
{
//hidden: true,
id: 'FloatPanel_SubscriberMasterState',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterState"  readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px">'


},

{
hidden: true,
id: 'FloatPanel_SubscriberMasterState_edit',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterState_edit"  onclick="FloatPanel_StateShow()" style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px">'


},

{
    margin: '5 0 0 0',
    
    html: '<font size=2 color=black>Country</font>',
    
    },
{
//hidden: true,
id: 'FloatPanel_SubscriberMasterCountry',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterCountry"  readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px">'


},

{
hidden: true,
id: 'FloatPanel_SubscriberMasterCountry_edit',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterCountry_edit" onclick="FloatPanel_CountryShow()" style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px">'


},


{
    margin: '5 0 0 0',
    
    html: '<font size=2 color=black>Profession</font>',
    
    },
{
//hidden: true,
id: 'FloatPanel_SubscriberMasterProfession',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterProfession"  readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px">'


},

{
hidden: true,
id: 'FloatPanel_SubscriberMasterProfession_edit',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterProfession_edit"  style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px">'


},





{
    margin: '5 0 0 0',
    
    html: '<font size=2 color=black>Hobby/Interested</font>',
    
    },
{
//hidden: true,
id: 'FloatPanel_SubscriberMasterHobby',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterHobby"  readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px">'


},

{
hidden: true,
id: 'FloatPanel_SubscriberMasterHobby_edit',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterHobby_edit"  style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px">'


},

///////////////////////////////////////////////////////////////
{
margin: '5 0 0 0',

html: '<font size=2 color=black>Date Registered</font>',

},

{
//hidden: true,
id: 'FloatPanel_SubscriberMasterCreatedDate',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterCreatedDate"  readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" value="19/02/1983">'


},


{
margin: '5 0 0 0',

html: '<font size=2 color=black>Version</font>',

},

{
//hidden: true,
id: 'FloatPanel_SubscriberMasterVersion',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterVersion" readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" value="Ayoha Reward v 1.0">'


},


{
margin: '5 0 0 0',

html: '<font size=2 color=black>Status</font>',

},

{
//hidden: true,
id: 'FloatPanel_SubscriberMasterStatus',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterStatus"  readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" value="Active">'


},

{
margin: '5 0 0 0',

html: '<font size=2 color=black>Last Login Date</font>',

},

{
//hidden: true,
id: 'FloatPanel_SubscriberMasterLastLoginDate',
margin: '-5 0 0 0',
width: '100%',
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterLastLoginDate"  readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" value="Active">'


},




{
xtype: 'container',
width: '100%',
id: 'containerFloatPanel_SubscriberMaster_isUserverified',
style: ' background-color:transparent',
margin: '5 0 0 0',
layout: {
type: 'hbox',
pack: 'start',
align: 'center'

},
items: [

{
xtype: 'container',

width: '40%',
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
align: 'left'

},
items: [
{
margin: '3 0 0 0',

html: '<font size=2 color=black>Account Verifed?</font>',

},



]
},




{
margin: '-2 0 0 0',
id: 'FloatPanel_SubscriberMasterisUserVerified',
width: '25%',
height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterisUserVerified" readOnly style="border-color:transparent;color:black;width:100%;text-align: left;font-size:16px;font-weight:bold;">'

},


]

},


//{
//    xtype:'container'

//},
{
xtype: 'button',
hidden: true,
id: 'btnFloatPanel_SubscriberMasterisUserVerifiedMessage',
//  badgeText: '1',
margin: '0 0 -10 -30',
height: 35,
width: 35,
html: '<img src="resources/icons/errorklipklip.gif" width="25" height="25" alt="Company Name">',
ui: 'plain',
handler: function () {
FloatPanel_AccountVerifiedShow();
//isFromUserEnterpriseDetails = 'Y';
//FloatPanel_EnterprisesUserTypeListShow();
}
},
//{
//    xtype: 'button',
//    id: 'btnFloatPanel_SubscriberMasterisUserVerified',
//    //  badgeText: '1',
//    margin: '0 0 -10 -30',
//    height: 35,
//    width: 35,
//    html: '<img src="resources/icons/verifiedWhiteOne.png" width="25" height="25" alt="Company Name">',
//    ui: 'plain',
//    handler: function () {
//        //isFromUserEnterpriseDetails = 'Y';
//        //FloatPanel_EnterprisesUserTypeListShow();
//    }
//},

]

},



{
margin: '5 0 0 0',
id: 'htmlFloatPanel_SubscriberMasterVerifiedDateTxt',
hidden: true,

html: '<font size=2 color=black>Verified Date</font>',

},

{
//hidden: true,
id: 'FloatPanel_SubscriberMasterVerifiedDate',
margin: '-5 0 0 0',
width: '100%',
hidden: true,
//  height: 20,
html: '<input type="text" id="input-FloatPanel_SubscriberMasterVerifiedDate"  readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" >'


},

]
},






    //////////////////////////////////////////////////////////////////////////////



   
         ]
     },


   {
       xtype: 'container',
       width: '100%',
       height: '100%',
       //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
       style: "background-color: transparent;",
       //style: "background-color: #F35B57;",
       title: 'FloatPanel_SubscriberMasterMaster_BankInfo',
       layout: {
           type: 'vbox',
           pack: 'start',
           align: 'left'

       },
       
      //  scrollable: {
      //      direction: 'vertical',
      //      directionLock: true,
      //      indicators: false
      //  },
       items: [

                    

     {
         xtype: 'container',
         width: '95%',
         height:35,
        
         style: ' background-color:transparent',
         layout: {
             type: 'hbox',
             pack: 'start',
             align: 'center'

         },
         items: [

                  {
                      xtype: 'container',
                      width: '100%',
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

                                   html: '<font size=2 color=black>*Bank Name</font>',

                               },


                              ]
                          },




     {
         margin: '-2 0 0 0',
         //id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessMode',
         //width: '100%',
         //height: 20,
         //html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessMode"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

         id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName',
         width: '100%',
         height: 20,
         html: '<input  onclick="FloatPanel_BankAccountNameShow()" type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName"  readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

     },


                      ]

                  },


                   //{
                   //    xtype:'container'

                   //},
                     {
                         xtype: 'button',
                         id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankAccountNameList',
                         //  badgeText: '1',
                         zIndex:500,
                         margin: '0 0 0 0',
                         height: 35,
                         width: 35,
                         html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                         ui: 'plain',
                         handler: function () {
                             FloatPanel_BankAccountNameShow();
                         }
                     },

         ]

     },


                     {
                         xtype: 'container',
                         width: '95%',
                         margin:'15 0 0 0',
                         height:35,
                         style: ' background-color:transparent',
                         layout: {
                             type: 'hbox',
                             pack: 'start',
                             align: 'center'

                         },
                         items: [

                                  {
                                      xtype: 'container',

                                      width: '100%',
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

                                                   html: '<font size=2 color=black>*Bank Account Type</font>',

                                               },


                                              ]
                                          },




                     {
                         margin: '-2 0 0 0',
                         //id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessMode',
                         //width: '100%',
                         //height: 20,
                         //html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessMode"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

                         id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountType',
                         width: '100%',
                         height: 20,
                         html: '<input onclick="FloatPanel_BankAccountTypeShow()"  type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountType" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

                     },


                                      ]

                                  },


                                   //{
                                   //    xtype:'container'

                                   //},
                                     {
                                         xtype: 'button',
                                         id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankAccountType',
                                         //  badgeText: '1',
                                         zIndex: 500,
                                         margin: '0 0 -10 0',
                                         height: 35,
                                         width: 35,
                                         html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                         ui: 'plain',
                                         handler: function () {
                                             FloatPanel_BankAccountTypeShow();
                                         }
                                     },

                         ]

                     },
                       {
                        width: '90%',
                        margin:'15 0 0 0',
                       // height:35,
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountNameTxt',
                           html: '<font size=2 color=black>*Bank Account Name</font>',

                       },

                    {
                        
                        id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoBankAccountName',
                        width: '95%',
                        height: 20,
                        html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoBankAccountName"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

                    },

                        {
                           
                         margin:'15 0 0 0',
                         //height:35,
                            id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountNoTxt',
                            html: '<font size=2 color=black>*Bank Account No</font>',

                        },

                    {
                        margin: '-2 0 0 0',
                        id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountNo',
                        width: '95%',
                        height: 20,
                        html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountNo"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

                    },


       ]
   },
      {
                        xtype: 'container',
                        id: 'containerFloatPanel_SubscriberMasterChangePassword',
                       // hidden:true,
                        width: '100%',
                        height: '94%',
                        //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                        style: "background-color: transparent;",
                        //style: "background-color: #F35B57;",
                        title: 'FloatPanel_SubscriberMasterChangePassword',
                        listeners: {
                            initialize: function (c) {
                                this.element.on({
                                    swipe: function (e, node, options) {
                                        //if (e.direction == "up") {
                                        //    LoyaltyCardRedeemListHide();
                                        //}
                                        if (e.direction == "left") {
                                            _FloatPanel_SubscriberMaster.hide(Ext.fx.Animation({
                                                type: 'slideOut',
                                                direction: 'left',
                                                easing: 'cubic-bezier(.7,0,.7,1)',
                                                duration: 250
              
                                            }));
                                            isFloatPanel_SubscriberMasterOpen = 'N';
                                        } if (e.direction == "right") {
                                            _FloatPanel_SubscriberMaster.hide(Ext.fx.Animation({
                                                type: 'slideOut',
                                                direction: 'right',
                                                easing: 'cubic-bezier(.7,0,.7,1)',
                                                duration: 250
              
                                            }));
                                            isFloatPanel_SubscriberMasterOpen = 'N';
                                        }
              
                                    }
                                });
                            }
                        },
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
                        //                    Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(2);
                        //                } else {
                        //                    Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(0);
              
                        //                }
                        //            }
                        //        });
                        //    }
                        //},
              
              
                        items: [
              
              
              
              
              
                            {
                                xtype: 'container',
                                style: "background-color: transparent",
                                margin: '0 0 0 0',
                                width: '100%',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'
              
                                },
                                items: [
              
                              
              
              
              
                                                   
              
              
              
              
              
                                                      
              
              
              
               {
                   xtype: 'container',
              
                   width: '100%',
                   layout: {
                       type: 'vbox',
                       pack: 'center',
                       align: 'center'
              
                   },
                   items: [
              
                       
              
              
              
              
              {
              xtype: 'container',
              width: '100%',
              layout: {
              type: 'vbox',
              pack: 'start',
              align: 'center'
              
              },
              items: [
              //{
              //    margin: '-5 0 0 0',
              //    id: 'htmlCurrentPasswordLabel',
              //    width: '100%',
              //    html: '<div style="width:100%;text-align: left;font-size:16px;font-weight:bold;"><font size=2 color=black>Current Password</font></div',
              
              //},
              
              //{
                 
              //    id: 'FloatPanel_SubscriberMasterCurrenrPassword',
              //    margin: '-5 0 0 0',
              //    width: '100%',
              //    //  height: 20,
              //    html: '<input type="password" id="input-FloatPanel_SubscriberMasterCurrentPassword"  style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" >'
              
              
              //},
              
              
              
              
              
              
              
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
              
                               width: '100%',
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
                                           margin: '3 0 0 10',
              
                                           html: '<font size=2 color=black>Current Password</font>',
              
                                       },
              
              
              
                                       ]
                                   },
              
              
              
              
              {
                  margin: '-2 0 0 10',
                  id: 'FloatPanel_SubscriberMasterChangePassword_CurrentPassword',
                  width: '100%',
                  height: 20,
                  html: '<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_CurrentPassword"  style="border-color:black;color:black;width:100%;text-align: left;font-size:20px;font-weight:bold;">'
              
              },
              
              
                               ]
              
                           },
              
              
                            //{
                            //    xtype:'container'
              
                            //},
                              {
                                  xtype: 'button',
                                  id: 'btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon',
                                  //  badgeText: '1',
                                  hidden: true,
                                  margin: '0 0 -10 -30',
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
                                                         width: '100%',
                                                         hidden: true,
                                                         //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                         id: 'htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message',
                                                         html: '<div style="color:black;text-align: right;font-size:11px;width:100%;">Password Not Matched!</div>',
                                                         // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                                     },
              
              
              
              
              
              {
              xtype: 'container',
              width: '100%',
              margin: '60 0 0 0',
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
              
                       width: '100%',
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
                                   margin: '3 0 0 10',
                                   id:'htmlFloatPanel_SubscriberMasterChangePassword_NewPasswordLabel',
                                   html: '<font size=2 color=black>New Password</font>',
              
                               },
              
              
              
                               ]
                           },
              
              
              
              
              {
              margin: '-2 0 0 10',
              id: 'FloatPanel_SubscriberMasterChangePassword_NewPassword',
              width: '100%',
              height: 20,
              html: '<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_NewPassword"  style="border-color:black;color:black;width:100%;text-align: left;font-size:20px;font-weight:bold;">'
              
              },
              
              
                       ]
              
                   },
              
              
                    //{
                    //    xtype:'container'
              
                    //},
                      {
                          xtype: 'button',
                          id: 'btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon',
                          //  badgeText: '1',
                          hidden: true,
                          margin: '0 0 -10 -30',
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
                                                         width: '100%',
                                                         hidden: true,
                                                         //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                         id: 'htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt',
                                                         html: '<div style="color:black;text-align: right;font-size:11px;width:100%;">Password cannot less than 6 charaters!</div>',
                                                         // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                                     },
              
                                                     {
                                                         xtype: 'container',
                                                         width: '100%',
                                                         margin: '30 0 0 0',
                                                         id: 'container_FloatPanel_SubscriberMasterChangePassword_ConfirmPassword',
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
              
                                                                      width: '100%',
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
                                                                                  margin: '3 0 0 10',
                                                                                  id:'htmlFloatPanel_SubscriberMasterChangePassword_ConfirmPasswordLabel',
                                                                                  html: '<font size=2 color=black>*Confirm Password</font>',
              
                                                                              },
              
              
              
                                                                              ]
                                                                          },
              
              
              
              
                                                    {
                                                        margin: '-2 0 0 10',
                                                        id: 'FloatPanel_SubscriberMasterChangePassword_ConfirmPassword',
                                                        width: '100%',
                                                        height: 20,
                                                        html: '<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword"  style="border-color:black;color:black;width:100%;text-align: left;font-size:20px;font-weight:bold;">'
              
                                                    },
              
              
                                                                      ]
              
                                                                  },
              
              
                                                                   //{
                                                                   //    xtype:'container'
              
                                                                   //},
                                                                     {
                                                                         xtype: 'button',
                                                                         id: 'btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon',
                                                                         hidden: true,
                                                                         margin: '0 0 -10 -30',
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
                                                         width: '100%',
                                                         hidden: true,
                                                         //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                         id: 'htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt',
                                                         html: '<div style="color:black;text-align: right;font-size:11px;width:100%;">Password is matched!</div>'
                                                         // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                                     },
              
              
              
            
              
              
              
              
              
                
              
              
                {
                    xtype: 'container',
                    margin: '30 0 0 0',
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
              id: 'btnFloatPanel_SubscriberMasterChangePassword_Savex',
             hidden: true,
              margin: '0 0 0 0',
              height: 40,
              width: 40,
              html: '<img src="resources/icons/saveWhiteOne.png" width="30" height="30" alt="Company Name">',
              ui: 'plain',
              handler: function () {
              
              FloatPanel_SubscriberMaster_UpdatePasswordMyAccount();
              }
              },
              
              
                    ]
                },
              
              
              
              
              {
              xtype: 'container',
              height: 40,
              width: '100%',
              style: {
              
                background: 'transparent',
              
              },
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


                      //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                   





                      ////////////////////////
    //                   {
    //                       xtype: 'tabpanel',
    //                       // hidden: true,
    //                       //  hidden:true,
    //                       id: 'tabpanelFloatPanel_SubscriberMaster',
    //                       // style: 'border-top:2px solid #ECF0F1;background: white;',
    //                       // style: 'background-color: black;',
    //                       // margin: '-20 0 0 -26',
    //                       // margin: '25 0 0 0',

    //                       //width: 200,
    //                       width: '96%',
    //                       height: '100%',
    //                       //height: 120,
    //                       //height: 50,
    //                       //  zIndex: 200,
    //                       //  docked: 'bottom',
    //                       tabBarPosition: 'top',
    //                       ui: 'plain',
    //                       // docked: 'bottom',

    //                       initialize: function (c) {
    //                           //this.getTabBar().hide();

                             
    //                       },

                         

    //                       items: [



    // //   {
    // //       xtype: 'container',
    // //       id: 'containerFloatPanel_SubscriberMasterMaster',
    // //       width: '100%',
    // //       height: '94%',
    // //       //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
    // //       style: "background-color: transparent;",
    // //       //style: "background-color: #F35B57;",
    // //       title: 'FloatPanel_SubscriberMasterMaster',
        
    
    // //       layout: {
    // //           type: 'vbox',
    // //           pack: 'start',
    // //           align: 'center'

    // //       },
       

    // //       items: [




                
             












    // //       ]

    // //   },





     





    //                       ]

    //                       //}
    //                   },








                ]
            },











        ]





    });
    return _FloatPanel_SubscriberMaster;



}








function FloatPanel_SubscriberMasterShow() {

    Ext.Viewport.remove(_FloatPanel_SubscriberMaster);
    this.overlay = Ext.Viewport.add(FloatPanel_SubscriberMaster());
    this.overlay.show();
    isFloatPanel_SubscriberMasterOpen = 'Y';
    // AddRoutePages("FloatPanel_SubscriberMasterHide()");
    // Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').getTabBar().hide();
    Ext.getCmp('tabpanelFloatPanel_SubscriberMaster_inner').getTabBar().hide();
    FloatPanel_SubscriberMasterAdjustHeight();
    isbtnFloatPanel_SubscriberMaster_SaveEdit = "Edit";
    //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    //Ext.getCmp('htmlChangePasswordTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>My Account</u></b></font>');


    var containerView = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_SubscriberMasterPicProfile]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_SubscriberMaster_UploadPhoto();
      }
    );






    document.getElementById("input-FloatPanel_SubscriberMasterChangePassword_CurrentPassword").addEventListener("keyup", OnKeyUp_FloatPanel_SubscriberMasterChangePassword_CurrentPassword);
   

    FloatPanel_SubscriberMaster_AyohaUserProfileLoadProfileStore();
}

function FloatPanel_SubscriberMasterAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);
//     alert(y)
// alert(x)

 //   var newHeights = x - 80;
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;
    Ext.getCmp('tabpanelFloatPanel_SubscriberMaster_inner').setHeight(x-350);
    //Ext.getCmp('FloatPanel_MembershipCardList_MyMembershipCardID').setHeight(x + 40);
  //  Ext.getCmp('FloatPanel_MembershipCardList_MyMembershipCardListID').setHeight(newHeights);


}

function FloatPanel_SubscriberMasterHide() {
    // FloatPanel_MyAccountRankDescription_AddCardHide();
    if (isFloatPanel_SubscriberMasterOpen == "Y") {
        _FloatPanel_SubscriberMaster.hide(); isFloatPanel_SubscriberMasterOpen = 'N';
        RemovePages("FloatPanel_SubscriberMasterHide()");
    }

}


function OnKeyUp_FloatPanel_SubscriberMasterChangePassword_CurrentPassword() {


    var currKl = document.getElementById("input-FloatPanel_SubscriberMasterChangePassword_CurrentPassword").value;
    console.log(GetCurrAyohaUserKatalaluan());
    if ( currKl.length >= GetCurrAyohaUserKatalaluan().length-2 )  {
        if (currKl == GetCurrAyohaUserKatalaluan()) {

            Ext.getCmp('btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');
            Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHtml('<div style="color:black;text-align: right;font-size:11px;width:100%;">Password Matched!</div>');

            Ext.getCmp('htmlFloatPanel_SubscriberMasterChangePassword_NewPasswordLabel').setHtml('<font size=2 color=black>New Password</font>');
            Ext.getCmp('htmlFloatPanel_SubscriberMasterChangePassword_ConfirmPasswordLabel').setHtml('<font size=2 color=black>*Confirm Password</font>');
            Ext.getCmp('FloatPanel_SubscriberMasterChangePassword_NewPassword').setHtml('<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_NewPassword"  style="border-color:black;color:black;width:100%;text-align: left;font-size:20px;font-weight:bold;">');
            Ext.getCmp('FloatPanel_SubscriberMasterChangePassword_ConfirmPassword').setHtml('<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword"  style="border-color:black;color:black;width:100%;text-align: left;font-size:20px;font-weight:bold;">');

            Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_Save').setHidden(false);
            document.getElementById("input-FloatPanel_SubscriberMasterChangePassword_NewPassword").addEventListener("keyup", OnKeyUp_FloatPanel_SubscriberMasterChangePassword_NewPassword);
            document.getElementById("input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword").addEventListener("keyup", OnKeyUp_FloatPanel_SubscriberMasterChangePassword_ConfirmPassword);

            
            
        } else {

            Ext.getCmp('btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');
            Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHtml('<div style="color:black;text-align: right;font-size:11px;width:100%;">Password Not Matched!</div>');
            Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHidden(false);
            Ext.getCmp('htmlFloatPanel_SubscriberMasterChangePassword_NewPasswordLabel').setHtml('<font size=2 color=black>New Password</font>');
            Ext.getCmp('htmlFloatPanel_SubscriberMasterChangePassword_ConfirmPasswordLabel').setHtml('<font size=2 color=black>*Confirm Password</font>');
            Ext.getCmp('FloatPanel_SubscriberMasterChangePassword_NewPassword').setHtml('<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_NewPassword" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:20px;font-weight:bold;">');
            Ext.getCmp('FloatPanel_SubscriberMasterChangePassword_ConfirmPassword').setHtml('<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:20px;font-weight:bold;">');
          //  Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_Save').setHidden(true);
            document.getElementById("input-FloatPanel_SubscriberMasterChangePassword_NewPassword").removeEventListener("keyup", OnKeyUp_FloatPanel_SubscriberMasterChangePassword_NewPassword);
            document.getElementById("input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword").removeEventListener("keyup", OnKeyUp_FloatPanel_SubscriberMasterChangePassword_ConfirmPassword);
          
        }
        Ext.getCmp('btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon').setHidden(false);
    } else {


        Ext.getCmp('btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon').setHidden(true);
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHidden(false);
        Ext.getCmp('htmlFloatPanel_SubscriberMasterChangePassword_NewPasswordLabel').setHtml('<font size=2 color=black>New Password</font>');
        Ext.getCmp('htmlFloatPanel_SubscriberMasterChangePassword_ConfirmPasswordLabel').setHtml('<font size=2 color=black>*Confirm Password</font>');
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHtml('<div style="color:black;text-align: right;font-size:11px;width:100%;">Current Password is Required!</div>');
        Ext.getCmp('FloatPanel_SubscriberMasterChangePassword_NewPassword').setHtml('<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_NewPassword" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:20px;font-weight:bold;">');
        Ext.getCmp('FloatPanel_SubscriberMasterChangePassword_ConfirmPassword').setHtml('<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:20px;font-weight:bold;">');
        //Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_Save').setHidden(true);


    }


}








function OnKeyUp_FloatPanel_SubscriberMasterChangePassword_NewPassword() {
    Ext.getCmp('btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon').setHidden(true);
    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHidden(true);

    var Password = document.getElementById('input-FloatPanel_SubscriberMasterChangePassword_NewPassword').value;
    var ConfirmPassword = document.getElementById('input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword').value;


    if (Password.length < 6) {

        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(false);
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHtml('<div style="color:black;text-align: right;font-size:11px;width:100%;">Password cannot less than 6 charaters!</div>');
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(false);
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');
        //Ext.getCmp('container_FloatPanel_AyohaUserRegistrationPassword').setMargin('20 0 0 0');


        if (ConfirmPassword) {
            if (Password != ConfirmPassword) {
                Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHidden(false);
                Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHtml('<div style="color:black;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');

                Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHidden(false);
                Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');
                
            }


          
        }

       
    } else {
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(true);
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(true);



            if (ConfirmPassword) {
                if (Password == ConfirmPassword) {
                    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(false);
                    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHtml('<div style="color:black;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');

                    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(false);
                    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');

                    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHidden(false);
                    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');

                    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHidden(false);
                    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHtml('<div style="color:black;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');
                    //  Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(true);
                }
                if (Password != ConfirmPassword) {
                    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHidden(false);
                    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHtml('<div style="color:black;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');

                    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHidden(false);
                    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');

                }
            }





    }



    //if (Password.length > 6) {
    //    //Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(true);
    //    //Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(true);
    //    // Ext.getCmp('container_FloatPanel_AyohaUserRegistrationPassword').setMargin('30 0 0 0');

    //    if (ConfirmPassword) {
    //        if (Password == ConfirmPassword) {
    //            Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(false);
    //            Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHtml('<div style="color:black;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');

    //            Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(false);
    //            Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');

    //            Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHidden(false);
    //            Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');
    //            //  Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(true);
    //        }
    //    }
       
    //}

    
}


function OnKeyUp_FloatPanel_SubscriberMasterChangePassword_ConfirmPassword() {
    var Password = document.getElementById('input-FloatPanel_SubscriberMasterChangePassword_NewPassword').value;
    var ConfirmPassword = document.getElementById('input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword').value;
    Ext.getCmp('btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon').setHidden(true);
    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHidden(true);
    if ((Password == ConfirmPassword) && (Password.length >= 6)) {




        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHidden(false);
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHtml('<div style="color:black;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');

        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(false);
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');


        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHidden(false);
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');

        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(false);
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHtml('<div style="color:black;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');
      



    } else {

        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(true);

        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHidden(false);
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHtml('<div style="color:black;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');

        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(true);
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');

        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHidden(false);
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');





    }
}
















function FloatPanel_SubscriberMasterHide() {
    if (isFloatPanel_SubscriberMasterOpen == 'Y') {
        _FloatPanel_SubscriberMaster.hide(); isFloatPanel_SubscriberMasterOpen = 'N';
        RemovePages(_FloatPanel_SubscriberMaster, "isFloatPanel_SubscriberMasterOpen");
    }
    
}



var StampCount;
function Load_FloatPanel_SubscriberMaster_LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore() {

    Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore').getProxy().setExtraParams({
        SubscriberAccNo: GetCurrentAccountNo(),
        EnterpriseAccNo: GetEnterpriseAccNo()
    });
    Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore').getProxy().setExtraParams({
            SubscriberAccNo: GetCurrentAccountNo(),
            EnterpriseAccNo: GetEnterpriseAccNo()
        });
        Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore').load();
        var myStore = Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore');
        StampCount = myStore.getCount();
        Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:black;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');       
        // adjustHeight();
        Ext.Viewport.setMasked(false);

       






    });
    task.delay(2000);
}







function Load_FloatPanel_SubscriberMaster_LoyaltyStampLoadBySubscriberAccNoStore() {
    Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore').getProxy().setExtraParams({
        SubscriberAccNo: GetCurrAyohaUserAccountNo()
    });
    Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore').getProxy().setExtraParams({
            SubscriberAccNo: GetCurrAyohaUserAccountNo()
        });
        Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoStore').load();
        var myStore = Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore');
        StampCount = myStore.getCount();
        Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:black;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);








    });
    task.delay(2000);
}









function FloatPanel_SubscriberMaster_UploadPhoto() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_SubscriberMasterUploadedPhoto").click();
    });
}

var globalFloatPanel_SubscriberMasterImg64;
function inputImgFloatPanel_SubscriberMasterUploadedPhoto() {
    var file = document.getElementById('inputImg-FloatPanel_SubscriberMasterUploadedPhoto').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_SubscriberMasterUploadedPhoto').files[0].name;

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
                    globalFloatPanel_SubscriberMasterImg64 = event.target.result;
                    document.getElementById('input-FloatPanel_SubscriberMasterPhotoName').value = fileName;

                  
                    //  Ext.getCmp('htmlFloatPanel_SubscriberMasterPicProfile').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 20px 20px 20px 20px;width:33px;height:33px" ><img src="' + globalFloatPanel_SubscriberMasterImg64 + '"      style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%; max-width:32px; margin:-1px 0px 0px 2px"></div>');
                    Ext.getCmp('htmlFloatPanel_SubscriberMasterPicProfile').setHtml('<img src="' + globalFloatPanel_SubscriberMasterImg64 + '"  style="width: 200px; height: 200px; border:2px solid white; border-radius: 50%; "/>');
                    FloatPanel_SubscriberMasterUploadedPhoto_ResizeImage();

                    //html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:black;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1Inactive.png); background-size: 100% 100%;" id="divContentFloatLoyaltyCardStamp11" ></div>',


                    // Ext.getCmp('AccomodationReceiptPicture').setSrc(FuelReceiptsImg64);
                    //   localStorage.setItem('CurrReceiptsAttachmentPic', FuelReceiptsImg64);
                    // FuelReceiptsImg64 = ContentString;
                    // Ext.getCmp('btnMainMenuMyAccountImg').setHtml('<img src=' + img64AccPicProfile + '  style="width: 120px; height: 120px; border:2px solid white; border-radius: 50%; max-width:200px;" alt="Company Name">');

                    //    localStorage.setItem('EnterpriseLogo64', ContentString);
                    // console.log(FuelReceiptsImg64);
                };


            }
            else {
                //  img64AccPicProfile = Picture;
            }
        }
    //}
}



function FloatPanel_SubscriberMasterUploadedPhoto_ResizeImage() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var filesToUploads = document.getElementById('inputImg-FloatPanel_SubscriberMasterUploadedPhoto').files;
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

                globalFloatPanel_SubscriberMasterImg64 = "";

                globalFloatPanel_SubscriberMasterImg64 = canvas.toDataURL(file.type);

                // document.getElementById('output').src = dataurl;

                // Ext.getCmp('FloatPanel_AyohaUserRegistrationPicProfile').setHtml('<img src="' + dataurl + '"  style="width: 140px; height: 140px; border:2px solid white; border-radius: 50%; "/>');

                // console.log("Resize image:" + globalUserPicProfile64)
            }
            reader.readAsDataURL(file);

        }

    } else {
        alert('The File APIs are not fully supported.');
    }
}

function FloatPanel_SubscriberMaster_AyohaUserProfileLoadProfileStore() {

    Ext.getStore('AyohaUserProfileLoadProfileStore').getProxy().setExtraParams({
        AccountNo: GetCurrAyohaUserAccountNo()
    });
    Ext.StoreMgr.get('AyohaUserProfileLoadProfileStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaUserProfileLoadProfileStore').getProxy().setExtraParams({
            AccountNo: GetCurrAyohaUserAccountNo()
        });
        Ext.StoreMgr.get('AyohaUserProfileLoadProfileStore').load();
        var myStore = Ext.getStore('AyohaUserProfileLoadProfileStore');
        var modelRecord = myStore.getAt(0);
        

     //   'ID',
     //'AccountNo',
     //'AccountName',
     //'Email',
     //'PhoneNo',
     //'Photo',
     //'Gender',
     //'DOB',
     //'RowStatus',
     //'CreatedDate',
     //'ModifiedDate',
     //'UserName',
     //'Katalaluan',
     //'LastLoginDate',
     //'PhotoName',
     //'GUID',
     //'isUserVerified',
     //'VerifyString',
     //'AyohaVersion',

       // Ext.getCmp('btnFloatPanel_SubscriberMasterPicProfile').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 20px 20px 20px 20px;width:33px;height:33px" ><img src="' + modelRecord.get('Photo') + '"      style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%; max-width:32px; margin:-1px 0px 0px 2px"></div>');
        Ext.getCmp('htmlFloatPanel_SubscriberMasterPicProfile').setHtml('<img src="' + modelRecord.get('Photo') + '"  style="width: 160px; height: 160px; border:2px solid white; border-radius: 50%; "/>');
        //Ext.getCmp('htmlFloatPanel_SubscriberMasterHaiUser').setHtml('<font size=2 color=black><b>Hi '+modelRecord.get('AccountName')+'!</b></font>');



       
        localStorage.setItem('AyohaUserID', modelRecord.get('ID'));
        document.getElementById('input-FloatPanel_SubscriberMasterPhotoName').value = modelRecord.get('PhotoName');
        document.getElementById('input-FloatPanel_SubscriberMasterAccountName').value = modelRecord.get('AccountName');
        document.getElementById('input-FloatPanel_SubscriberMasterEmail').value = modelRecord.get('Email');
        document.getElementById('input-FloatPanel_SubscriberMasterPhoneNo').value = modelRecord.get('PhoneNo');
        document.getElementById('input-FloatPanel_SubscriberMasterDOB').value = modelRecord.get('DOB');


            
        document.getElementById('input-FloatPanel_SubscriberMasterAccountName_edit').value = modelRecord.get('AccountName');
        document.getElementById('input-FloatPanel_SubscriberMasterEmail_edit').value = modelRecord.get('Email');
        document.getElementById('input-FloatPanel_SubscriberMasterPhoneNo_edit').value = modelRecord.get('PhoneNo');
        document.getElementById('input-FloatPanel_SubscriberMasterDOB_edit').value = modelRecord.get('DOB');


        document.getElementById('input-FloatPanel_SubscriberMasterCreatedDate').value = modelRecord.get('CreatedDate');
        document.getElementById('input-FloatPanel_SubscriberMasterVersion').value = modelRecord.get('AyohaVersion');
        document.getElementById('input-FloatPanel_SubscriberMasterStatus').value = modelRecord.get('RowStatus');
        document.getElementById('input-FloatPanel_SubscriberMasterLastLoginDate').value = modelRecord.get('LastLoginDate');
        document.getElementById('input-FloatPanel_SubscriberMasterisUserVerified').value = modelRecord.get('isUserVerified');



        document.getElementById('input-FloatPanel_SubscriberMasterGender').value = modelRecord.get('Gender');
        document.getElementById('input-FloatPanel_SubscriberMasterStreetAddress').value = modelRecord.get('StreetAddress');
        document.getElementById('input-FloatPanel_SubscriberMasterTown').value = modelRecord.get('Town');
        document.getElementById('input-FloatPanel_SubscriberMasterPostCode').value = modelRecord.get('PostCode');
        document.getElementById('input-FloatPanel_SubscriberMasterState').value = modelRecord.get('States');
        document.getElementById('input-FloatPanel_SubscriberMasterCountry').value = modelRecord.get('Country');
        document.getElementById('input-FloatPanel_SubscriberMasterProfession').value = modelRecord.get('Profession');
        document.getElementById('input-FloatPanel_SubscriberMasterHobby').value = modelRecord.get('Hobby');


        document.getElementById('input-FloatPanel_SubscriberMasterGender_edit').value = modelRecord.get('Gender');
        document.getElementById('input-FloatPanel_SubscriberMasterStreetAddress_edit').value = modelRecord.get('StreetAddress');
        document.getElementById('input-FloatPanel_SubscriberMasterTown_edit').value = modelRecord.get('Town');
        document.getElementById('input-FloatPanel_SubscriberMasterPostCode_edit').value = modelRecord.get('PostCode');
        document.getElementById('input-FloatPanel_SubscriberMasterState_edit').value = modelRecord.get('States');
        document.getElementById('input-FloatPanel_SubscriberMasterCountry_edit').value = modelRecord.get('Country');
        document.getElementById('input-FloatPanel_SubscriberMasterProfession_edit').value = modelRecord.get('Profession');
        document.getElementById('input-FloatPanel_SubscriberMasterHobby_edit').value = modelRecord.get('Hobby');


        var isUserVerified = modelRecord.get('isUserVerified');
        Ext.getCmp('btnFloatPanel_SubscriberMasterisUserVerifiedMessage').setHidden(false);
        if (isUserVerified == "NO") {
            Ext.getCmp('btnFloatPanel_SubscriberMasterisUserVerifiedMessage').setHtml('<img src="resources/icons/errorklipklip.gif" width="25" height="25" alt="Company Name">');
        } if (isUserVerified == "YES") {
            Ext.getCmp('btnFloatPanel_SubscriberMasterisUserVerifiedMessage').setHtml('<img src="resources/icons/VerifiedUser.png" width="25" height="25" alt="Company Name">');
            Ext.getCmp('htmlFloatPanel_SubscriberMasterVerifiedDateTxt').setHidden(false);
            Ext.getCmp('FloatPanel_SubscriberMasterVerifiedDate').setHidden(false);
            document.getElementById("input-FloatPanel_SubscriberMasterVerifiedDate").value = modelRecord.get('UserVerifiedDate');
        }

        if(_FloatPanel_MyAccountMasterisOpen=='Y'){
            Ext.getCmp('FloatPanel_MyAccountMaster_PicPicture').setHtml('<img src="' + modelRecord.get('Photo') + '" alt="Image" style="width:95px;height:95px;border-radius: 50%;border: 2px solid #ECF0F1;zIndex:400px;margin:0px 0px 0px -10px;">');      
    
        }

       
      //  Ext.getCmp('btnMyAccount_DashboardPicProfile').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 20px 20px 20px 20px;width:33px;height:33px" ><img src="' + modelRecord.get('Photo') + '"      style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%; max-width:32px; margin:-1px 0px 0px 2px"></div>');
       

       
        Ext.Viewport.setMasked(false);








    });
    task.delay(800);

}

function FloatPanel_SubscriberMaster_SaveMyAccount_BankInfo() {

    var BankInfoAccountName = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value;
    var BankInfoAccountType = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountType').value;
    var BankInfoBankAccountName = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoBankAccountName').value;
    var BankInfoAccountNo = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountNo').value;



    if (!BankInfoAccountName) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Bank Name required!</font>");
        return;
    }
    if (!BankInfoAccountType) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Bank Account Type required!</font>");
        return;
    }
    if (!BankInfoBankAccountName) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Bank Account Name required!</font>");
        return;
    }
    if (!BankInfoAccountNo) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Bank Account No required!</font>");
        return;
    }


    //if (!globalFloatPanel_SubscriberMasterImg64) {
    //    swalFireFail("Save Failed!!!" + "<br><font size=2>Profile Picture required!</font>");
    //    return;
    //}





    //AP.ID, AP.AccountNo, AP.AccountName, AP.Email, AP.PhoneNo
    //  , AP.Photo, AP.Gender, AP.DOB, AP.PhotoName


    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var objn = {
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        "BankAccountNo": BankInfoAccountNo,
        "BankName": BankInfoAccountName,
        "BankAccountType": BankInfoAccountType,
        "BankAccountName": BankInfoBankAccountName

    };

    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaUserProfileBankAccount/AyohaUserProfileBankAccountInsertUpdate',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Save Succesfully!");
               
            }
            else {

                swalFireFail("Save Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Save Failed!!");
        }

    });
}

function FloatPanel_SubscriberMaster_SaveMyAccount() {

    var AccountName = document.getElementById('input-FloatPanel_SubscriberMasterAccountName_edit').value;
    var Email =  document.getElementById('input-FloatPanel_SubscriberMasterEmail_edit').value;
    var PhoneNo =document.getElementById('input-FloatPanel_SubscriberMasterPhoneNo_edit').value;
    var DOB =document.getElementById('input-FloatPanel_SubscriberMasterDOB_edit').value;
    var gender =document.getElementById('input-FloatPanel_SubscriberMasterGender_edit').value;


    if (!AccountName) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Account Name required!</font>");
        return;
    }
    if (!PhoneNo) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Phone No required!</font>");
        return;
    }
    if (!Email) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Email required!</font>");
        return;
    }
    if (!DOB) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>DOB required!</font>");
        return;
    }
    if (!gender) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Gender required!</font>");
        return;
    }
   

    //if (!globalFloatPanel_SubscriberMasterImg64) {
    //    swalFireFail("Save Failed!!!" + "<br><font size=2>Profile Picture required!</font>");
    //    return;
    //}


    

    var imgbase64;

    if (globalFloatPanel_SubscriberMasterImg64) {
        imgbase64 = globalFloatPanel_SubscriberMasterImg64;
    } else {
        imgbase64 = "ExistingImage";
    }
    localStorage.setItem('CurrPhoneNumber',PhoneNo);
    //AP.ID, AP.AccountNo, AP.AccountName, AP.Email, AP.PhoneNo
    //  , AP.Photo, AP.Gender, AP.DOB, AP.PhotoName

 
    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var objn = {
        "ID":GetCurrAyohaUserID(),
        "AccountNo": GetCurrAyohaUserAccountNo(),
        "AccountName": document.getElementById('input-FloatPanel_SubscriberMasterAccountName_edit').value,
        "Email": document.getElementById('input-FloatPanel_SubscriberMasterEmail_edit').value,
        "PhoneNo": document.getElementById('input-FloatPanel_SubscriberMasterPhoneNo_edit').value,
        "Photo": imgbase64,
        "Gender":  document.getElementById('input-FloatPanel_SubscriberMasterGender_edit').value,
        "DOB": document.getElementById('input-FloatPanel_SubscriberMasterDOB_edit').value,
        "PhotoName": document.getElementById('input-FloatPanel_SubscriberMasterPhotoName').value,
        "StreetAddress": document.getElementById('input-FloatPanel_SubscriberMasterStreetAddress_edit').value,
        "Town": document.getElementById('input-FloatPanel_SubscriberMasterTown_edit').value,
        "PostCode": document.getElementById('input-FloatPanel_SubscriberMasterPostCode_edit').value,
        "Country": document.getElementById('input-FloatPanel_SubscriberMasterCountry_edit').value,
        "Profession": document.getElementById('input-FloatPanel_SubscriberMasterProfession_edit').value,
        "Hobby": document.getElementById('input-FloatPanel_SubscriberMasterHobby_edit').value,
        "States": document.getElementById('input-FloatPanel_SubscriberMasterState_edit').value,
       
       
        //"ContentCardImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value,

    };
 
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileUpdate',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Save Succesfully!");
                FloatPanel_SubscriberMaster_AyohaUserProfileLoadProfileStore();
            }
            else {

                swalFireFail( "Save Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Save Failed!!");
        }

    });
}


function FloatPanel_SubscriberMaster_UpdatePasswordMyAccount() {
    var Password = document.getElementById('input-FloatPanel_SubscriberMasterChangePassword_NewPassword').value;
    var ConfirmPassword = document.getElementById('input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword').value;
  
    if (Password != ConfirmPassword)  {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Password Not Matched!</font>");
        return;

    } if (Password.length < 6) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Password Cannot less than 6 characters!</font>");
        return;
    }


    else {

        
        var objn = {
            "ID": GetCurrAyohaUserID(),
            "AccountNo": GetCurrAyohaUserAccountNo(),
            "Katalaluan": ConfirmPassword,
           

        };

        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileUpdateKataLaluan',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    swalFireSuccess("Change Password succeed!");
                    FloatPanel_SubscriberMasterHide();
                }
                else {

                    swalFireFail("Save Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
                }
                Ext.Viewport.unmask();

            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
                swalFireFail("Save Failed!!");
            }

        });

    }
}






function FloatPanel_SubscriberMaster_BankInfo_LoadBySubscriberAccNo() {


    _DataStore_AyohaeWalletAccountRequestCashOutStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaeWalletAccountRequestCashOutStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserProfileBankAccount/AyohaUserProfileBankAccountRequestCashOutLoadBySubscriberAccNo');
    _DataStore_AyohaeWalletAccountRequestCashOutStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = parseInt(_DataStore_AyohaeWalletAccountRequestCashOutStore.getCount());
        // alert(count);
        if (count > 0) {
            var Store = _DataStore_AyohaeWalletAccountRequestCashOutStore.getAt(0);
           document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = Store.get('BankName');
           document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountType').value = Store.get('BankAccountType');
           document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoBankAccountName').value = Store.get('BankAccountName');
           document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountNo').value = Store.get('BankAccountNo');
        }

        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(500);
}