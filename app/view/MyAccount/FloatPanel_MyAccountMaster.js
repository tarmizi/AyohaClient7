
Ext.define('BuskartApp.view.MyAccount.FloatPanel_MyAccountMaster', {

});

var _FloatPanel_MyAccountMaster;


var _FloatPanel_MyAccountMasterisOpen = 'N';











function FloatPanel_MyAccountMaster() {

    _FloatPanel_MyAccountMaster =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: '100%',
         width: '100%',
         id: 'FloatPanel_MyAccountMasterID',
         draggable: false,

         indicators: false,

         centered: true,
         //bottom: 64,
         zIndex: 50,
         modal: true,
         hideOnMaskTap: true,
         layout: {
             type: 'fit'
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
         // style: 'border-bottom:1px solid;background-color:white;',
       // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_MyAccountMaster.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             _FloatPanel_MyAccountMasterisOpen = 'N';
                             RemovePages("FloatPanel_MyAccountMasterHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_MyAccountMaster.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             _FloatPanel_MyAccountMasterisOpen = 'N';
                             RemovePages("FloatPanel_MyAccountMasterHide()");
                         }
                       
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",
        

             items: [

                 {

                     xtype: 'container',
                     width: '100%',
                     docked:'top',
                     //  hidden:true,
                     // width: 40,

                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_MyAccountMasterHeader',
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
                                              id: 'btnFloatPanel_MyAccountMasterBack',
                                              height: 30,
                                              width: 35,
                                              // iconCls: 'list',
                                              html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {
                                                  _FloatPanel_MyAccountMaster.hide(Ext.fx.Animation({
                                                      type: 'slideOut',
                                                      direction: 'left',
                                                      easing: 'cubic-bezier(.7,0,.7,1)',
                                                      duration: 250

                                                  }));
                                                  _FloatPanel_MyAccountMasterisOpen = 'N';
                                                  RemovePages("FloatPanel_MyAccountMasterHide()");

                                              }
                                          },

                                           {
                                               xtype: 'spacer',

                                           },

                                            {
                                                margin: '0 -5 0 0',
                                                id: 'htmlFloatPanel_MyAccountMaster_TitleHeaderTxt',
                                                html: '<font size=2 color=white><b>My Account</b></font>'
                                            },
                                             
                                              {
                                                  xtype: 'button',
                                                  id: 'btnFloatPanel_MyAccountMaster_TitleHeaderIcon',
                                                  height: 30,
                                                  width: 35,
                                                  // iconCls: 'list',
                                                  html: '<div ><img src="resources/icons/myaccountwhite01.png" width="25" height="20" alt="Company Name"></div>',
                                                  ui: 'plain',
                                                  handler: function () {
                                                      _FloatPanel_MyAccountMaster.hide(Ext.fx.Animation({
                                                          type: 'slideOut',
                                                          direction: 'right',
                                                          easing: 'cubic-bezier(.7,0,.7,1)',
                                                          duration: 250

                                                      }));
                                                      _FloatPanel_MyAccountMasterisOpen = 'N';

                                                      RemovePages("FloatPanel_MyAccountMasterHide()");
                                                     
                                                    

                                                  }
                                              },











                            ]

                 },




            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_MyAccountMasterBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
               style: ' background-color:transparent;',
              //  style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
               // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                height: '100%',
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
          
                items: [



                    {
                        width: '120%',
                        margin:'0 0 0 -40',
                        height:250,
                        // height: 300,
                        
    //html: '<div style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);width:100%;height:300px; border-radius: 0px 0px  140px 150px;"/>'
                        html: '<div style="background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);width:100%;height:300px; border-radius: 0px 0px  140px 150px;"/>'
                    },



                {
 
             xtype: 'container',
      width: '95%',
                    height: 350,  
      margin: '-240 0 0 0',   
     style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 20px 20px 0px 0px;',
      //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
      layout: {
          type: 'hbox',
          pack: 'start',
          align: 'center'
      },

      items: [



          {
              xtype: 'container',
              width: '100%',
             // height: 350,
              margin: '-70 0 0 30',
              style: 'background-color:transparent;',
              //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
              layout: {
                  type: 'hbox',
                  pack: 'start',
                  align: 'center'
              },
              items: [

                  {
                      xtype: 'container',
                      width: '20%',

                      margin: '-140 0 0 0',
                      style: 'background-color:transparent;',
                      //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                      layout: {
                          type: 'vbox',
                          pack: 'start',
                          align: 'left'
                      },
                      items: [
                          {
                              id: 'FloatPanel_MyAccountMaster_PicPicture',
                              height: 95,
                              width: 95,
                              html: '<img src="resources/icons/founderWayang02.jpg" alt="Image" style="width:95px;height:95px;border-radius: 50%;border: 2px solid #ECF0F1;zIndex:400px;margin:0px 0px 0px -10px;">',


                          },

                          {
                              xtype: 'container',
                              width: '100%',
                              style: 'background-color:transparent;',
                              layout: {
                                  type: 'vbox',
                                  pack: 'start',
                                  align: 'right'
                              },
                              items: [
                                    {
                                        id: 'FloatPanel_MyAccountMaster_VerifyIcon',
                                        margin: '-25 -10 0 0',
                                        height: 32,
                                        width: 32,
                                        html: '<img src="resources/icons/NotVerify.png" alt="Image" style="width:32px;height:32px;zIndex:400px;margin:0px 0px 0px 0px;">',


                                    }
                              ]
                          },
                        
                      
                      ]

                  },
                  {
                      xtype: 'container',
                      width: '90%',
                      heigt: 350,

                      margin: '-140 0 0 0',
                      style: 'background-color:transparent;',
                      //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                      layout: {
                          type: 'vbox',
                          pack: 'start',
                          align: 'left'
                      },
                      items: [
                        {
                            id: 'FloatPanel_MyAccountMaster_AccountName',
                            margin: '0 0 0 30',
                           // height: 20,
                            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:white;height:20px">TARMIZI BIN RAHIM</div>'
  
  
                        },
                          {
                              id: 'FloatPanel_MyAccountMaster_emailAddress',
                              margin: '0 0 0 30',
                             // height: 20,
                              html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:white;height:20px">asfa@map2u.com.my</div>'


                          },
                          {
                            xtype: 'container',
                            width: '60%',
                            margin: '0 0 0 30',
                            height: 0.5,
                            style: 'background-color:white;',
                          },

                     
                          {
                            xtype: 'container',
                            width: '100%',
                            height: 5,
                            margin: '0 0 0 30',
                            style: 'background-color:transparent;',
                          },

                      //{
                      //    id: 'FloatPanel_MyAccountMaster_AyohaPoint',
                      //    margin: '-1 0 0 30',
                      //    height: 20,
                      //    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:white;height:20px">Tarmizi.Rahim@BuskartApp.com</div>'


                      //},
                      {
                        margin: '0 0 0 10',
                        width: '100%',
                        html: '<div  style="color:white;text-align: left;font-size:10px;width:100%;margin:0px 0px 0px 20px;font-weight:bold"> Ayoha Membership:</div>'
                       // html: '<div style="color:black;text-align: left;font-size:16px;width:100%;margin:0px 0px 0px 20px"><b>Membership Cards Hubs</b></div><br><br><div  style="color:black;text-align: left;font-size:12px;width:100%;margin:-25px 0px 0px 20px;font-weight:bold"> 👑 Paid Membership</div>'
                       // html: '<div  style="color:white;text-align: left;font-size:10px;width:100%;margin:0px 0px 0px 20px;font-weight:bold"> 👑 Ayoha Membership No:</div>'
                       
                    },
                      {
                          id: 'FloatPanel_MyAccountMaster_AccountNo',
                          margin: '5 0 0 30',
                         // height: 23,
                          html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 11px;font-weight:bold;color:white;height:23px">0133376958-986574</div>'
                          // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:white;height:20px">0133376958-56884548</div>'


                      },

                     
                    //   {
                    //     xtype: 'container',
                    //     width: '100%',
                    //     height: 5,
                    //     margin: '0 0 0 30',
                    //     style: 'background-color:transparent;',
                    //   },
                      //{
                      //    id: 'FloatPanel_MyAccountMaster_VerificationStatusBox',
                      //   name:'nameFloatPanel_MyAccountMaster_VerificationStatusBox',
                      //    margin: '-7 0 0 30',
                      //    width:'70%',
                      //   // height: 20,
                      //    html: '<div  style="width:70%;background-color: orange;text-align:center;border: 1px solid orange;font-size: 11px;font-weight:normal;color:white;height:21px;vertical-align:middle;border-radius: 5px 5px 5px 5px;"><div style="margin:3px 0px 0px 0px;">Not Ayoha Member</div></div>',
                      //},


                       {
                           id: 'FloatPanel_MyAccountMaster_VerificationStatusBox',
                           name: 'nameFloatPanel_MyAccountMaster_VerificationStatusBox',
                           margin: '-5 0 0 30',
                          // width: 'auto',
                          // height: 20,
                           html: '<div  style="width:70%;background-color: orange;text-align:center;border: 1px solid orange;font-size: 11px;font-weight:normal;color:white;height:21px;vertical-align:middle;border-radius: 5px 5px 5px 5px;"><div style="margin:3px 0px 0px 0px;">Not Ayoha Member</div></div>',
                       },

                      ]

                  },



              ]
          },


                      
           



      


          
      ]




                },
                {


                    xtype: 'container',
                    width: '95%',
                    height: 630,
                    id:'containerFloatPanel_MyAccountMasterMaster',
                    margin: '-200 0 0 0',
                    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 0px 0px 0px;',
                    //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
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
                    items: [

{
    xtype: 'container',
    width: '100%',
    height: 350,
    id:'containerFloatPanel_MyAccountMasterMaster_Profile',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'
    },
    items:[


        {
            xtype: 'container',
            width: '100%',
            margin: '20 0 0 0',
            height: 30,
           // id:'containerFloatPanel_MyAccountMasterMaster_General',
            layout: {
                type: 'hbox',
                pack: 'left',
                align: 'left'
            },
            items:[
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:black;height:23px">Profile</div>'
                },
            ]
        },




{

    xtype: 'container',
    width: '95%',
    height: 60,
    margin: '0 0 0 0',
    name: 'nameContainerFloatPanel_MyAccountMaster_EditProfile',
    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: transparent;',
    //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'
    },
    items: [
        {
            xtype: 'spacer',
            width: 20
        },
        {
            height: 22,
            width: 22,
            html: '<img src="resources/icons/editProfile.png" alt="Image" style="width:22px;height:22px;">',
        },
        {
            xtype: 'spacer',
            width: 20
        },
        {
            id: 'FloatPanel_MyAccountMaster_Menu_EditProfile',
            margin: '5 0 0 0',
            height: 20,
            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Edit Profile</div>'
        },
         {
             xtype: 'spacer'
         },
        {
            id: 'FloatPanel_MyAccountMaster_Menu_EditProfileSign',
            margin: '0 0 0 0',
            height: 20,
            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
        },
    {
        xtype: 'spacer',
        width:20
},
    ]

},
{

    xtype: 'container',
    width: '95%',
    height: 60,
    margin: '0 0 0 0',
    name:'nameContainerFloatPanel_MyAccountMaster_ManagePassword',
    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
    //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'
    },
    items: [
        {
            xtype: 'spacer',
            width: 20
        },
        {
            height: 22,
                width: 22,
            html: '<img src="resources/icons/managepassword.png" alt="Image" style="width:22px;height:22px;">',
        },
        {
            xtype: 'spacer',
            width: 20
        },
        {
            id: 'FloatPanel_MyAccountMaster_Menu_ManagePassword',
            margin: '5 0 0 0',
            height: 20,
            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Change Password</div>'
        },
         {
             xtype: 'spacer'
         },
        {
            id: 'FloatPanel_MyAccountMaster_Menu_ManagePasswordSign',
            margin: '0 0 0 0',
            height: 20,
            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
        },
    {
        xtype: 'spacer',
        width: 20
    },
    ]

},

{

    xtype: 'container',
    width: '95%',
    height: 60,
    margin: '0 0 0 0',
    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
    name: 'nameContainerFloatPanel_MyAccountMaster_AllTransactions',
    //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'
    },
    items: [
        {
            xtype: 'spacer',
            width: 20
        },
        {
            height: 22,
            width: 22,
            html: '<img src="resources/icons/purchase01.png" alt="Image" style="width:22px;height:22px;">',
        },
        {
            xtype: 'spacer',
            width: 20
        },
        {
            id: 'FloatPanel_MyAccountMaster_Menu_Alltransactions',
            margin: '5 0 0 0',
            height: 20,
            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Transaction History</div>'
        },
         {
             xtype: 'spacer'
         },
        {
            id: 'FloatPanel_MyAccountMaster_Menu_AlltransactionsSign',
            margin: '0 0 0 0',
            height: 20,
            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
        },
    {
        xtype: 'spacer',
        width: 20
    },
    ]

},


{

    xtype: 'container',
    width: '95%',
    height: 60,
    margin: '0 0 0 0',
    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
    name: 'nameContainerFloatPanel_MyAccountMaster_LogOut',
    //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'
    },
    items: [
        {
            xtype: 'spacer',
            width: 20
        },
        {
            height: 22,
            width: 22,
            html: '<img src="resources/icons/logoutPurpleOne.png" alt="Image" style="width:22px;height:22px;">',
        },
        {
            xtype: 'spacer',
            width: 20
        },
        {
            id: 'FloatPanel_MyAccountMaster_Menu_LogOut',
            margin: '5 0 0 0',
            height: 20,
            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Log Out</div>'
        },
         {
             xtype: 'spacer'
         },
        {
            id: 'FloatPanel_MyAccountMaster_Menu_MyVoucherSign',
            margin: '0 0 0 0',
            height: 20,
            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
        },
    {
        xtype: 'spacer',
        width: 20
    },
    ]

},
    ]
},



{
    xtype: 'container',
    width: '100%',
    height: 440,
    id:'containerFloatPanel_MyAccountMasterMaster_Rewards',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'
    },
    items:[

        {
            xtype: 'container',
            width: '100%',
            height: 30,
           // id:'containerFloatPanel_MyAccountMasterMaster_General',
            layout: {
                type: 'hbox',
                pack: 'left',
                align: 'left'
            },
            items:[
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:black;height:23px">Rewarding</div>'
                },
            ]
        },
       
        
        {

            xtype: 'container',
            width: '95%',
            height: 60,
            margin: '0 0 0 0',
            name: 'nameContainerFloatPanel_MyAccountMaster_MyMerchantPerks',
            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: transparent;',
            //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'
            },
            items: [
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    height: 22,
                    width: 22,
                    html: '<img src="resources/icons/TermAndCondition.png" alt="Image" style="width:22px;height:22px;">',
                },
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_MyMerchantPerks',
                    margin: '5 0 0 0',
                    height: 20,
                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">My Merchant Perks</div>'
                },
                 {
                     xtype: 'spacer'
                 },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_MyMerchantPerksSign',
                    margin: '0 0 0 0',
                    height: 20,
                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                },
            {
                xtype: 'spacer',
                width: 20
            },
            ]

        },


        {

            xtype: 'container',
            width: '95%',
            height: 60,
            margin: '0 0 0 0',
            name: 'nameContainerFloatPanel_MyAccountMaster_MyAyohaPointAndPrize',
            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: transparent;',
            //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'
            },
            items: [
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    height: 22,
                    width: 22,
                    html: '<img src="resources/icons/TermAndCondition.png" alt="Image" style="width:22px;height:22px;">',
                },
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_MyAyohaPointAndPrize',
                    margin: '5 0 0 0',
                    height: 20,
                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">My Ayoha Point & Prize</div>'
                },
                 {
                     xtype: 'spacer'
                 },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_MyAyohaPointAndPrizeSign',
                    margin: '0 0 0 0',
                    height: 20,
                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                },
            {
                xtype: 'spacer',
                width: 20
            },
            ]

        },


        {

            xtype: 'container',
            width: '95%',
            height: 60,
            margin: '0 0 0 0',
            name: 'nameContainerFloatPanel_MyAccountMaster_PointHistoryAndTransaction',
            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: transparent;',
            //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'
            },
            items: [
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    height: 22,
                    width: 22,
                    html: '<img src="resources/icons/TermAndCondition.png" alt="Image" style="width:22px;height:22px;">',
                },
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_PointHistoryAndTransaction',
                    margin: '5 0 0 0',
                    height: 20,
                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Point History & Transaction</div>'
                },
                 {
                     xtype: 'spacer'
                 },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_PointHistoryAndTransactionSign',
                    margin: '0 0 0 0',
                    height: 20,
                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                },
            {
                xtype: 'spacer',
                width: 20
            },
            ]

        },






        
            {

                xtype: 'container',
                width: '95%',
                height: 60,
                margin: '0 0 0 0',
                //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                name: 'nameContainerFloatPanel_MyAccountMaster_DoubleRewardTracker',
                //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'spacer',
                        width: 20
                    },
                    {
                        height: 22,
                        width: 22,
                        html: '<img src="resources/icons/logoutPurpleOne.png" alt="Image" style="width:22px;height:22px;">',
                    },
                    {
                        xtype: 'spacer',
                        width: 20
                    },
                    {
                        id: 'FloatPanel_MyAccountMaster_Menu_DoubleRewardTracker',
                        margin: '5 0 0 0',
                        height: 20,
                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Reward Tracker</div>'
                    },
                     {
                         xtype: 'spacer'
                     },
                    {
                        id: 'FloatPanel_MyAccountMaster_Menu_DoubleRewardTrackerSign',
                        margin: '0 0 0 0',
                        height: 20,
                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                    },
                {
                    xtype: 'spacer',
                    width: 20
                },
                ]

            },

            {

                xtype: 'container',
                width: '95%',
                height: 60,
                margin: '0 0 0 0',
                //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                name: 'nameContainerFloatPanel_MyAccountMaster_SpecialCampaign',
                //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'spacer',
                        width: 20
                    },
                    {
                        height: 22,
                        width: 22,
                        html: '<img src="resources/icons/logoutPurpleOne.png" alt="Image" style="width:22px;height:22px;">',
                    },
                    {
                        xtype: 'spacer',
                        width: 20
                    },
                    {
                        id: 'FloatPanel_MyAccountMaster_Menu_SpecialCampaign',
                        margin: '5 0 0 0',
                        height: 20,
                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Special Campaign</div>'
                    },
                     {
                         xtype: 'spacer'
                     },
                    {
                        id: 'FloatPanel_MyAccountMaster_Menu_SpecialCampaignSign',
                        margin: '0 0 0 0',
                        height: 20,
                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                    },
                {
                    xtype: 'spacer',
                    width: 20
                },
                ]

            },
            {

                xtype: 'container',
                width: '95%',
                height: 60,
                margin: '0 0 0 0',
                //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                name: 'nameContainerFloatPanel_MyAccountMaster_ReferAndEarn',
                //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'spacer',
                        width: 20
                    },
                    {
                        height: 22,
                        width: 22,
                        html: '<img src="resources/icons/logoutPurpleOne.png" alt="Image" style="width:22px;height:22px;">',
                    },
                    {
                        xtype: 'spacer',
                        width: 20
                    },
                    {
                        id: 'FloatPanel_MyAccountMaster_Menu_ReferAndEarn',
                        margin: '5 0 0 0',
                        height: 20,
                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Refer & Earn</div>'
                    },
                     {
                         xtype: 'spacer'
                     },
                    {
                        id: 'FloatPanel_MyAccountMaster_Menu_ReferAndEarnSign',
                        margin: '0 0 0 0',
                        height: 20,
                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                    },
                {
                    xtype: 'spacer',
                    width: 20
                },
                ]

            },
    ]
},


{
    xtype: 'container',
    width: '100%',
    height: 260,
    id:'containerFloatPanel_MyAccountMasterMaster_AyohaStore',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'
    },
    items:[

        {
            xtype: 'container',
            width: '100%',
            height: 30,
           // id:'containerFloatPanel_MyAccountMasterMaster_General',
            layout: {
                type: 'hbox',
                pack: 'left',
                align: 'left'
            },
            items:[
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:black;height:23px">Ayoha Store</div>'
                },
            ]
        },
       
        {

            xtype: 'container',
            width: '95%',
            height: 60,
            margin: '0 0 0 0',
            name: 'nameContainerFloatPanel_MyAccountMaster_PurchaseHistory',
            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: transparent;',
            //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'
            },
            items: [
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    height: 22,
                        width: 22,
                    html: '<img src="resources/icons/AccountVerification.png" alt="Image" style="width:22px;height:22px;">',
                },
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_PurchaseHistory',
                    margin: '5 0 0 0',
                    height: 20,
                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Purchase History</div>'
                },
                 {
                     xtype: 'spacer'
                 },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_PurchaseHistorySign',
                    margin: '0 0 0 0',
                    height: 20,
                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                },
            {
                xtype: 'spacer',
                width: 20
            },
            ]

        },
        {

            xtype: 'container',
            width: '95%',
            height: 60,
            margin: '0 0 0 0',
            name: 'nameContainerFloatPanel_MyAccountMaster_AyohaStoreCart',
            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px none #ECF0F1 ;background: transparent;',
            //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'
            },
            items: [
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    height: 22,
                    width: 22,
                    html: '<img src="resources/icons/TermAndCondition.png" alt="Image" style="width:22px;height:22px;">',
                },
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_AyohaStoreCart',
                    margin: '5 0 0 0',
                    height: 20,
                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Ayoha Store Cart</div>'
                },
                 {
                     xtype: 'spacer'
                 },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_AyohaStoreCartSign',
                    margin: '0 0 0 0',
                    height: 20,
                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                },
            {
                xtype: 'spacer',
                width: 20
            },
            ]

        },
            {

                xtype: 'container',
                width: '95%',
                height: 60,
                margin: '0 0 0 0',
                //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                name: 'nameContainerFloatPanel_MyAccountMaster_MyVoucher',
                //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'spacer',
                        width: 20
                    },
                    {
                        height: 22,
                        width: 22,
                        html: '<img src="resources/icons/logoutPurpleOne.png" alt="Image" style="width:22px;height:22px;">',
                    },
                    {
                        xtype: 'spacer',
                        width: 20
                    },
                    {
                        id: 'FloatPanel_MyAccountMaster_Menu_MyVoucher',
                        margin: '5 0 0 0',
                        height: 20,
                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">My Voucher</div>'
                    },
                     {
                         xtype: 'spacer'
                     },
                    {
                        id: 'FloatPanel_MyAccountMaster_Menu_MyVoucherSign',
                        margin: '0 0 0 0',
                        height: 20,
                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                    },
                {
                    xtype: 'spacer',
                    width: 20
                },
                ]

            },
    ]
},
                       
{
    xtype: 'container',
    width: '100%',
    height: 300,
    id:'containerFloatPanel_MyAccountMasterMaster_General',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'
    },
    items:[

        {
            xtype: 'container',
            width: '100%',
            height: 30,
           // id:'containerFloatPanel_MyAccountMasterMaster_General',
            layout: {
                type: 'hbox',
                pack: 'left',
                align: 'left'
            },
            items:[
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:black;height:23px">General</div>'
                },
            ]
        },
       
        {

            xtype: 'container',
            width: '95%',
            height: 60,
            margin: '0 0 0 0',
            name: 'nameContainerFloatPanel_MyAccountMaster_TermAndCondition',
            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: transparent;',
            //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'
            },
            items: [
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    height: 22,
                        width: 22,
                    html: '<img src="resources/icons/AccountVerification.png" alt="Image" style="width:22px;height:22px;">',
                },
                {
                    xtype: 'spacer',
                    width: 20
                },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_TermAndCondition',
                    margin: '5 0 0 0',
                    height: 20,
                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Term And Condition</div>'
                },
                 {
                     xtype: 'spacer'
                 },
                {
                    id: 'FloatPanel_MyAccountMaster_Menu_TermAndConditioSign',
                    margin: '0 0 0 0',
                    height: 20,
                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                },
            {
                xtype: 'spacer',
                width: 20
            },
            ]

        },
        
            
    ]
},                   

                        {

                            xtype: 'container',
                            width: '100%',
                            height: 70,
                            hidden:true,
                            margin: '0 0 0 0',
                            docked:'bottom',
                            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px none #ECF0F1;border-top:2px none black ;background: transparent;',
                          //  style: 'background: transparent;',
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center'
                            },
                            items: [
                               
                                {
                                    height: 40,
                                    width: 40,
                                    margin:'0 0 0 -10',
                                    //html: '<img src="resources/icons/ayohaReward01.gif" alt="Image" style="width:110px;height:110px;">',
                                    html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" alt="Image" style="width:40px;height:40px;">',
                                },
                               
                                {
                                    id: 'FloatPanel_MyAccountMaster_Menu_AyohaRewardv',
                                    margin: '0 0 0 0',
                                   // height: 20,
                                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;">Ayoha Reward v 1.0</div>'
                                },
                                {
                                    id: 'FloatPanel_MyAccountMaster_Menu_DevBy',
                                    margin: '0 0 0 0',
                                    // height: 20,
                                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 9px;font-weight:normal;color:black;">One Hub, Double Reward!</div>'
                                },
                                
                            ]

                        }

                    ]

                }



                ]


            },









             ]




       







     });
    return _FloatPanel_MyAccountMaster;





}

function FloatPanel_MyAccountMasterShow() {

    Ext.Viewport.remove(_FloatPanel_MyAccountMaster);
    this.overlay = Ext.Viewport.add(FloatPanel_MyAccountMaster());
    this.overlay.show();
    _FloatPanel_MyAccountMasterisOpen = 'Y';
    ArrappRoute.length = 0;
    ArrappRouteCheckVal.length = 0;
    console.log(ArrappRoute);
    AddRoutePages("FloatPanel_MyAccountMasterHide()");
    FloatPanel_MyAccountMasterAdjustHeight();
    var containerView1 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_EditProfile]')[0];
    var containerViewEl1 = containerView1.element;
    containerViewEl1.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Open_EditProfile();

      }
    );


    var containerView2 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_ManagePassword]')[0];
    var containerViewEl2 = containerView2.element;
    containerViewEl2.on('tap',
      function (event, node, options, eOpts) {
        
      
          SingleTap_Open_ManagePassword();

      }
    );




    var containerView3 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_LogOut]')[0];
    var containerViewEl3 = containerView3.element;
    containerViewEl3.on('tap',
      function (event, node, options, eOpts) {
          //FloatPanel_MyAccountMasterHide();
          //Ext.getCmp('mainView').setActiveItem(0);
          //VIAAdvertismentAutoSlideReset();
          LogOuting();

      }
    );



    var containerViewnameContainerFloatPanel_MyAccountMaster_AllTransactions = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_AllTransactions]')[0];
    var containerViewElnameContainerFloatPanel_MyAccountMaster_AllTransactions = containerViewnameContainerFloatPanel_MyAccountMaster_AllTransactions.element;
    containerViewElnameContainerFloatPanel_MyAccountMaster_AllTransactions.on('tap',
      function (event, node, options, eOpts) {
          //FloatPanel_MyAccountMasterHide();
          //Ext.getCmp('mainView').setActiveItem(0);
          //VIAAdvertismentAutoSlideReset();
          MyAccount_AllTransactionHistoryShow();

      }
    );

    

    var containerViewnameContainerFloatPanel_MyAccountMaster_TermAndCondition = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_TermAndCondition]')[0];
    var containerViewElnameContainerFloatPanel_MyAccountMaster_TermAndCondition = containerViewnameContainerFloatPanel_MyAccountMaster_TermAndCondition.element;
    containerViewElnameContainerFloatPanel_MyAccountMaster_TermAndCondition.on('tap',
      function (event, node, options, eOpts) {
          getPlayerIDS();

      }
    );

    // var containerViewnameContainerFloatPanel_MyAccountMaster_AccountVerification = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_AccountVerification]')[0];
    // var containerViewElnameContainerFloatPanel_MyAccountMaster_AccountVerification = containerViewnameContainerFloatPanel_MyAccountMaster_AccountVerification.element;
    // containerViewElnameContainerFloatPanel_MyAccountMaster_AccountVerification.on('tap',
    //   function (event, node, options, eOpts) {
    //       setSubscription();

    //   }
    // );

    
    var containerViewnameFloatPanel_MyAccountMaster_VerificationStatusBox = Ext.ComponentQuery.query('container[name=nameFloatPanel_MyAccountMaster_VerificationStatusBox]')[0];
    var containerViewElnameFloatPanel_MyAccountMaster_VerificationStatusBox = containerViewnameFloatPanel_MyAccountMaster_VerificationStatusBox.element;
    containerViewElnameFloatPanel_MyAccountMaster_VerificationStatusBox.on('tap',
      function (event, node, options, eOpts) {
          // FloatPanel_AccountVerifiedShow();
          if (GetAyohaUserisUserVerified() == "NO") {
              FloatPanel_AyohaMembershipAdvantagesShow();
          } else if (GetAyohaUserisUserVerified() == "YES") {
              FloatPanel_MyAccountRankDescriptionShow();
          }
          
      }
    );

    
    

    var val = GetCurrAyohaUserAccountNo().split('-');
    var id = val[1] + '-' + val[2];
    var id_Ext = val[2];
    var isUserVerified = GetAyohaUserisUserVerified();


    Ext.getCmp('FloatPanel_MyAccountMaster_PicPicture').setHtml('<img src="' + GetAyohaUserPicProfile() + '" alt="Image" style="width:95px;height:95px;border-radius: 50%;border: 2px solid #ECF0F1;zIndex:400px;margin:0px 0px 0px -10px;">');
    Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:white;">' + GetAyohaUserAccountNames() + '</div>');
    Ext.getCmp('FloatPanel_MyAccountMaster_emailAddress').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:white;height:20px">'+GetAyohaUserEmail()+'</div>');
   
    console.log(GetAyohaUserAccountNames().length);

    if (GetAyohaUserAccountNames().length > 24) {

        
      //  Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHeight(38);
        Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:white;">' + GetAyohaUserAccountNames() + '</div>');
    }

   
    Ext.getCmp('FloatPanel_MyAccountMaster_AccountNo').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:white;height:23px">' + id + '</div>');



    if (isUserVerified == "NO") {
        Ext.getCmp('FloatPanel_MyAccountMaster_AccountNo').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:orange;height:23px">Not Ayoha Member</div>');
        Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<img src="resources/icons/NotVerify.png" alt="Image" style="width:32px;height:32px;zIndex:400px;margin:0px 0px 0px 0px;">');
        Ext.getCmp('FloatPanel_MyAccountMaster_VerificationStatusBox').setHtml('<div class="blink_me" style="width:auto;background-color: orange;text-align:center;border: 1px solid orange;font-size: 11px;font-weight:normal;color:white;height:21px;vertical-align:middle;border-radius: 5px 5px 5px 5px;padding:0px 15px;"><div style="margin:3px 0px 0px 0px;">Be Ayoha Member !</div></div>');
       



    }
    if (isUserVerified == "YES") {
        Ext.getCmp('FloatPanel_MyAccountMaster_AccountNo').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:white;height:23px">' + localStorage.getItem("AccountNoDisplay") + '</div>');
        Ext.getCmp('FloatPanel_MyAccountMaster_emailAddress').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:white;height:20px">'+GetAyohaUserEmail()+'</div>');
        Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:white;">' + GetAyohaUserAccountNames() + '</div>');
        if (GetAyohaUserAccountNames().length > 24) {
            Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:white;">' + GetAyohaUserAccountNames() + '</div>');
        }
       

        if (localStorage.getItem("AyohaMember_Rank") == "Black Iron") {
           // Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/Starter.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
            Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/blackIron.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');


        }
        if (localStorage.getItem("AyohaMember_Rank") == "Bronze") {
           // Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/nomembercard.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
            Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Bronze.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

        }
        if (localStorage.getItem("AyohaMember_Rank") == "Silver") {
           // Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/vip.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
            Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Silver.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

        }
        if (localStorage.getItem("AyohaMember_Rank") == "Gold") {
           // Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/vvip.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
            Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Gold.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

        }
        if (localStorage.getItem("AyohaMember_Rank") == "Platinum") {
            //Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/goldmember.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
            Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Platinum.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

        }

        if (localStorage.getItem("AyohaMember_Rank") == "King Club") {
            //Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/kingclubIcon.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
            Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/kingclubIcon.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

        }






       
        //Ext.getCmp('FloatPanel_MyAccountMaster_VerificationStatusBox').setHtml('<div style="width:60%;background-image: linear-gradient(#c800ffc9,#ff00de75);background-color: #fac;text-align:center;border: 1px solid #fac;font-size: 11px;font-weight:bold;color:white;height:21px;vertical-align:middle;border-radius: 5px 5px 5px 5px;"><div style="margin:3px 0px 0px 0px;">Ayoha Member</div></div>');
      



        Ext.getCmp('FloatPanel_MyAccountMaster_VerificationStatusBox').setHtml('<div  onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:180px;height:40px;background-image: linear-gradient(#c800ffc9,#c800ffc9);background-color: #fac;border: 1px solid #fac;font-size: 12px;font-weight:bold;color:white;border-radius: 5px;display: flex;text-align: left;padding:5px 5px ">Tier :' + localStorage.getItem("AyohaMember_Rank") + ' <br> Ayoha Point:'+globalDashboard_AyohaPoint+'</div>');
       
    }
}


function FloatPanel_MyAccountMasterHide() {

    if (_FloatPanel_MyAccountMasterisOpen == 'Y') {
        _FloatPanel_MyAccountMaster.hide(); _FloatPanel_MyAccountMasterisOpen = 'N';
      //  FloatPanel_AyohaeWallet_IconHide();
        RemovePages("FloatPanel_MyAccountMasterHide()");
    }
   
}


function LogOuting() {
    FloatPanel_MyAccountMasterHide();
    localStorage.clear();
   
    // window.location.reload();
    Ext.getCmp('mainView').setActiveItem(0);
    // Ext.getCmp('mainView').setActive(0);
}

function SingleTap_Open_EditProfile() {

    FloatPanel_SubscriberMasterShow();
    Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=black><b>Edit Profile</b></font>');
   // Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(1);
}

function SingleTap_Open_ManagePassword() {

    FloatPanel_SubscriberMasterShow();

   
    Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=black><b>Change Password</b></font>');
    Ext.getCmp('btnFloatPanel_SubscriberMaster_TitleHeaderIcon').setHtml('<div ><img src="resources/icons/changePasswordWhite01.png" width="25" height="20" alt="Company Name"></div>');
    Ext.getCmp('tabpanelFloatPanel_SubscriberMaster_inner').setActiveItem(2);
    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_Save').setHidden(false);
    Ext.getCmp('btnFloatPanel_SubscriberMaster_Edit').setHidden(true);
    
}

function FloatPanel_MyAccountMasterAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);

    var adjust = x - 212;
    //var headerHeight = parseInt(251);
    ////alert(y);
    ////alert(x);
   
    //var adjustedHeight = x - headerHeight;
    ////var newHeight = adjustedHeight - 99;
    //var newHeight = adjustedHeight - 83;

    //alert(newHeight)

    Ext.getCmp('containerFloatPanel_MyAccountMasterMaster').setHeight(adjust);
    //Ext.getCmp('containerFloatLoyaltyCardPointMaster').setHeight(newHeight);






}

















// Ext.define('BuskartApp.view.MyAccount.FloatPanel_MyAccountMaster', {

// });

// var _FloatPanel_MyAccountMaster;


// var _FloatPanel_MyAccountMasterisOpen = 'N';











// function FloatPanel_MyAccountMaster() {

//     _FloatPanel_MyAccountMaster =
//      Ext.create('Ext.Container', {

      
//          id: 'FloatPanel_MyAccountMasterID',
//          xtype: 'container',
//          //height: 475,
//          height: '100%',
//          //  height: '60%',
//          width: '100%',
//          draggable: false,

//          // styleHtmlContent: true,

//          centered: true,
//          //bottom: 64,
//          // zIndex: 100,
//          // modal: true,
//          //   hideOnMaskTap: true,
//          //left: 10,
//          //top:10,
//          layout: {
//              type: 'fit'
//          },
//          showAnimation: {
//              type: 'popIn',
//              duration: 250,
//              easing: 'ease-out'
//              //type: 'slideIn',
//              //direction:'down',
//              //duration: 1000,
//              //easing: 'ease-in'
//          },
//          hideAnimation: {
//              type: 'popOut',
//              duration: 250,
//              easing: 'ease-out'
//              //type: 'slideOut',
//              //direction: 'down',
//              //duration: 3000,
//              //easing: 'ease-in'
//          },
//          //  style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
//          // style: 'background-image: url("resources/icons/LatestConfetiTwo.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
//         // style: ' background-color:white;',
//         style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
//          listeners: {
//              initialize: function (c) {
//                  this.element.on({
//                      swipe: function (e, node, options) {

//                          if (e.direction == "left") {
//                              _FloatPanel_MyAccountMaster.hide(Ext.fx.Animation({
//                                  type: 'slideOut',
//                                  direction: 'left',
//                                  easing: 'cubic-bezier(.7,0,.7,1)',
//                                  duration: 250

//                              }));
//                              _FloatPanel_MyAccountMasterisOpen = 'N';
//                              RemovePages("FloatPanel_MyAccountMasterHide()");
//                          } if (e.direction == "right") {
//                              _FloatPanel_MyAccountMaster.hide(Ext.fx.Animation({
//                                  type: 'slideOut',
//                                  direction: 'right',
//                                  easing: 'cubic-bezier(.7,0,.7,1)',
//                                  duration: 250

//                              }));
//                              _FloatPanel_MyAccountMasterisOpen = 'N';
//                              RemovePages("FloatPanel_MyAccountMasterHide()");
//                          }
                       
//                      }
//                  });
//              }
//          },
      
//          //  style: "background-color: #D25959;",
        

//              items: [


// {
//     xtype: 'container',
//                 // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
//                 style: "background-color: transparent;",
//                 layout: {
//                     type: 'vbox',
//                     pack: 'start',
//                     align: 'center'

//                 },
//                 width: '100%',
//                 height:'100%',
//                 items:[
//                     {
       
       
//                         xtype: 'container',
//                         width: '100%',
//                         height:'100%',
//                         id:'containerFloatPanel_MyAccountMasterMaster',
//                         //margin: '-200 0 0 0',
//                         title: 'DashboardMerchantRewardxxx',
//                         scrollable: {
//                             direction: 'vertical',
//                             directionLock: true,
//                             indicators: false
//                         },
//                         layout: {
//                             type: 'vbox',
//                             //pack: 'start',
//                             //align: 'center'

//                         },
//                         items: [
//                             {

//                                 xtype: 'container',
//                                 width: '100%',
//                                 docked:'top',
//                                // height:40,
//                                 //  hidden:true,
//                                 // width: 40,
                
//                                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
//                                 //hidden: true,
                
//                                 id: 'containerFloatPanel_MyAccountMasterHeader',
//                                 style: {
//                                     // background: '#D25959',
//                                     background: 'transparent',
//                                     // border: '2px'
//                                 },
//                                 //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                 // style: 'border-bottom:2px solid #D25959;background-color:transparent',
//                                 layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center',
//                                 },
//                                 // hidden:true,
//                                 items:
//                                        [
                
                
//                                                      {
//                                                          xtype: 'button',
//                                                          id: 'btnFloatPanel_MyAccountMasterBack',
//                                                          height: 30,
//                                                          width: 35,
//                                                          // iconCls: 'list',
//                                                          html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
//                                                          ui: 'plain',
//                                                          handler: function () {
//                                                              _FloatPanel_MyAccountMaster.hide(Ext.fx.Animation({
//                                                                  type: 'slideOut',
//                                                                  direction: 'left',
//                                                                  easing: 'cubic-bezier(.7,0,.7,1)',
//                                                                  duration: 250
                
//                                                              }));
//                                                              _FloatPanel_MyAccountMasterisOpen = 'N';
//                                                              RemovePages("FloatPanel_MyAccountMasterHide()");
                
//                                                          }
//                                                      },
                
//                                                       {
//                                                           xtype: 'spacer',
                
//                                                       },
                
//                                                        {
//                                                            margin: '0 -5 0 0',
//                                                            id: 'htmlFloatPanel_MyAccountMaster_TitleHeaderTxt',
//                                                            html: '<font size=2 color=white><b>My Account</b></font>'
//                                                        },
                                                        
//                                                          {
//                                                              xtype: 'button',
//                                                              id: 'btnFloatPanel_MyAccountMaster_TitleHeaderIcon',
//                                                              height: 30,
//                                                              width: 35,
//                                                              // iconCls: 'list',
//                                                              html: '<div ><img src="resources/icons/myaccountwhite01.png" width="25" height="20" alt="Company Name"></div>',
//                                                              ui: 'plain',
//                                                              handler: function () {
//                                                                  _FloatPanel_MyAccountMaster.hide(Ext.fx.Animation({
//                                                                      type: 'slideOut',
//                                                                      direction: 'right',
//                                                                      easing: 'cubic-bezier(.7,0,.7,1)',
//                                                                      duration: 250
                
//                                                                  }));
//                                                                  _FloatPanel_MyAccountMasterisOpen = 'N';
                
//                                                                  RemovePages("FloatPanel_MyAccountMasterHide()");
                
//                                                              }
//                                                          },
                
                
                
                
                
                
                
                
                
                
                
//                                        ]
                
//                             },  

//                             {
//                                 xtype: 'container',
//                              id: 'containerFloatPanel_MyAccountMasterAyohaRewardInner',
//                         //hidden: true,
//                         style: "background-color: transparent;",
//                         margin: '0 0 0 0',
//                         height: 93, 
//                         // margin: '50 0 0 0',
//                         width: '100%',
//                                 layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
                        
//                                 },
//                                 items:[
//                                     {
//                                         xtype: 'container',
//                                         width: '15%',
//                                     },
//                                     {
//                                         xtype: 'container',
//                                         width: '25%',
//                                         layout: {
//                                             type: 'vbox',
//                                             pack: 'center',
//                                             align: 'center'
//                                         },
//                                         items:[
//                                             {
//                                                 id: 'FloatPanel_MyAccountMaster_PicPicture',
//                                                 // height: 65,
//                                                 // width: 65,
//                                                 html: '<img src="resources/icons/founderWayang02.jpg" alt="Image" style="width:95px;height:95px;border-radius: 50%;border: 2px solid #ECF0F1;zIndex:400px;margin:0px 0px 0px -10px;">',
                        
                        
//                                             },
//                                             {
//                                                 id: 'FloatPanel_MyAccountMaster_VerifyIcon',
//                                                // margin: '-25 -10 0 0',
//                                                 margin: '-15 -10 0 0',
//                                                 height: 32,
//                                                 width: 32,
//                                                 html: '<img src="resources/icons/NotVerify.png" alt="Image" style="width:32px;height:32px;zIndex:400px;margin:0px 0px 0px 0px;">',
                        
                        
//                                             }
//                                         ]
//                                     },
//                                     {
//                                         xtype: 'container',
//                                         width: '60%',
//                                         height: 65,
//                                         layout: {
//                                             type: 'vbox',
//                                             pack: 'start',
//                                             align: 'left'
//                                         },
//                                         items:[
                                          
                                          
//                                             {
//                                                 id: 'FloatPanel_MyAccountMaster_AccountName',
//                                                 margin: '0 0 0 0',
//                                                // height: 20,
//                                                 html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:white;height:20px">TARMIZI BIN RAHIM</div>'
                        
                        
//                                             },
//                                               {
//                                                   id: 'FloatPanel_MyAccountMaster_emailAddress',
//                                                   margin: '0 0 0 0',
//                                                  // height: 20,
//                                                   html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:white;height:20px">asfa@map2u.com.my</div>'
                        
                        
//                                               },
//                                         ]
//                                     },
                                    
//                                 ]
//                             },
//                             {
//                                 xtype: 'container',
//                                 //  style: 'background-color:#f7347a;border-radius: 50%;',
//                                 // style: 'background-color:#C72CB4;border-radius: 50%;border:2px solid purple',
                    
                    
//                                 style: "background-color: transparent;",
//                                 //  style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac',
                    
                    
//                                 margin: '-20 0 0 0',
//                                 id: 'htmlFloatPanel_MyAccountMaster_AyohaRewardLogos',
//                                 name: 'nameContainerFloatPanel_MyAccountMasterAyohaRewards',
//                                // zIndex: 200,
//                              //    width: 240,
//                              height: 180,
//                                 layout: {
//                                     type: 'vbox',
//                                     pack: 'start',
//                                     align: 'center'
                    
//                                 },
//                                 items: [
                    
                    
                    
                    
//                                     {
//                                      id: 'FloatPanel_MyAccountMaster_AyohaRewardPanel',
                             
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
//                                            html: '<div style="width: min(75vw, 350px); max-width: 400px; margin: 14px auto; padding:10px 16px;'+
//                     ' box-sizing:border-box; color:#fff; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial;'+
//                     ' background: rgba(255,255,255,0.12);'+
//                     ' backdrop-filter: blur(14px) saturate(120%); -webkit-backdrop-filter: blur(14px) saturate(120%);'+
//                     ' border:1.5px solid #fac; border-radius: 18px; box-shadow: 0 12px 28px rgba(0,0,0,.28);">'+
                    
//                     // Header
//                     '<div style="display:flex; align-items:flex-end; justify-content:space-between; gap:12px; margin-bottom:5px;">'+
//                     '<div style="min-width:0;padding:0px 8px">'+
//                     '<div style="font-size:clamp(10px, 2.7vw, 12px); opacity:.9; font-weight:700; white-space:nowrap;">Membership No</div>'+
//                     '<div id="txtFloatPanel_MyAccountMaster_MembershipNo" style="font-size:clamp(12px, 3.4vw, 14px); font-weight:1000; overflow:hidden; text-overflow:ellipsis;">12323</div>'+
//                     '</div>'+
//                     '<div style="text-align:right; min-width:0;padding:0px 6px">'+
//                     '<div style="font-size:clamp(10px, 2.7vw, 12px); opacity:.9; font-weight:700; white-space:nowrap;">Membership Since:</div>'+
//                     '<div id="txtFloatPanel_MyAccountMaster_MembershipSince" style="font-size:clamp(12px, 3.4vw, 14px); font-weight:1000; overflow:hidden; text-overflow:ellipsis;">Jan 2023</div>'+
//                     '</div>'+
//                     '</div>'+
                    
//                     // Two columns side by side
//                     '<div style="display:flex; justify-content:space-between; gap:12px; flex-wrap:nowrap;">'+
                    
//                     // Left box
//                     '<div onclick="FloatPanel_AyohaReward_PointTransactionsShow();" '+
//                     'style="flex:1; text-align:center; padding:10px 10px; border-radius:14px; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.25);">'+
//                     //  '<div id="txtDashboard_AyohaPoint" style="font-size:clamp(22px, 6.4vw, 28px); font-weight:800; margin:8px 0 0 0;">2353</div>'+
//                     '<div id="FloatPanel_MyAccountMaster_AyohaRewardPoint" class="odometer" style="font-size:clamp(18px, 6.4vw, 24px); font-weight:800; margin:8px 0 0 0;">2353</div>'+
//                     '<div style="font-size:clamp(12px, 2.7vw, 10px); opacity:.9; margin:-2px 0 0 0; font-weight:800;">Ayoha Point</div>'+
//                     '</div>'+
                    
//                     // Right box
//                     '<div onclick="FloatPanel_MyAccountRankDescriptionShow();" '+
//                     'style="flex:1; text-align:center; padding:10px 10px; border-radius:14px; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.25);">'+
//                     '<div style="margin-bottom:6px;">'+
//                     '<img id="imgFloatPanel_MyAccountMaster_RankingIcon" src="resources/icons/Logo/LogoWhiteSimplifed.png" alt="Gold Tier" '+
//                     'style="width:44px; height:44px; display:block; margin:0 auto; object-fit:contain;">'+
//                     '</div>'+
//                     '<div id="txtFloatPanel_MyAccountMaster_RankingIcon" style="font-size:clamp(12px, 2.7vw, 10px); font-weight:800; margin:-6px 0 0 0; white-space:wrap; overflow:hidden; text-overflow:ellipsis;">Non Ayoha Member</div>'+
//                     // '<div id="txtDashboard_RankingIcon" style="font-size:clamp(11px, 3.2vw, 13px); font-weight:800; margin:-6px 0 0 0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Non Ayoha Member</div>'+
//                     '<div id="txtFloatPanel_MyAccountMaster_MembershipTier" style="font-size:clamp(10px, 2.7vw, 12px); opacity:.9; margin:-2px 0 0 0; font-weight:700;">Membership Tier</div>'+
//                     '</div>'+
                    
//                     '</div>'+
//                     '</div>'
                    
//                                  },
                                 
                                 
                                  
                                    
//                                 ]
//                                 // html: '<img src="resources/icons/ayohaReward01.gif" style="width: 230px; height: 230px;" />',
//                             },
                    
                    
                    
                    
//                     {
//                         xtype: 'container',
//                         width: '100%',
//                         height:1400,
//                         style: "background-color: white;",
//                         layout: {
//                             type: 'vbox',
//                             pack: 'start',
//                             align: 'center'
//                             },
//                             items:[
//                                 {
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 350,
//                                     style: "background-color: transparent;",
//                                     id:'containerFloatPanel_MyAccountMasterMaster_Profile',
//                                     layout: {
//                                     type: 'vbox',
//                                     pack: 'start',
//                                     align: 'center'
//                                     },
//                                     items:[
                                    
                                    
                                       
                                    
                                    
//                                     {
//                                     xtype: 'container',
//                                     width: '100%',
//                                     margin: '20 0 0 0',
//                                     height: 30,
//                                     // id:'containerFloatPanel_MyAccountMasterMaster_General',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'left',
//                                     align: 'left'
//                                     },
//                                     items:[
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:black;height:23px">Profile</div>'
//                                     },
//                                     ]
//                                     },
                                    
                                    
                                    
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_EditProfile',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: transparent;',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     {
//                                     height: 22,
//                                     width: 22,
//                                     html: '<img src="resources/icons/editProfile.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     {
//                                     id: 'FloatPanel_MyAccountMaster_Menu_EditProfile',
//                                     margin: '5 0 0 0',
//                                     height: 20,
//                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Edit Profile</div>'
//                                     },
//                                     {
//                                     xtype: 'spacer'
//                                     },
//                                     {
//                                     id: 'FloatPanel_MyAccountMaster_Menu_EditProfileSign',
//                                     margin: '0 0 0 0',
//                                     height: 20,
//                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width:20
//                                     },
//                                     ]
                                    
//                                     },
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     name:'nameContainerFloatPanel_MyAccountMaster_ManagePassword',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     {
//                                     height: 22,
//                                     width: 22,
//                                     html: '<img src="resources/icons/managepassword.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     {
//                                     id: 'FloatPanel_MyAccountMaster_Menu_ManagePassword',
//                                     margin: '5 0 0 0',
//                                     height: 20,
//                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Change Password</div>'
//                                     },
//                                     {
//                                     xtype: 'spacer'
//                                     },
//                                     {
//                                     id: 'FloatPanel_MyAccountMaster_Menu_ManagePasswordSign',
//                                     margin: '0 0 0 0',
//                                     height: 20,
//                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     ]
                                    
//                                     },
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_AllTransactions',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     {
//                                     height: 22,
//                                     width: 22,
//                                     html: '<img src="resources/icons/purchase01.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     {
//                                     id: 'FloatPanel_MyAccountMaster_Menu_Alltransactions',
//                                     margin: '5 0 0 0',
//                                     height: 20,
//                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Transaction History</div>'
//                                     },
//                                     {
//                                     xtype: 'spacer'
//                                     },
//                                     {
//                                     id: 'FloatPanel_MyAccountMaster_Menu_AlltransactionsSign',
//                                     margin: '0 0 0 0',
//                                     height: 20,
//                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     ]
                                    
//                                     },
                                    
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_LogOut',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     {
//                                     height: 22,
//                                     width: 22,
//                                     html: '<img src="resources/icons/logoutPurpleOne.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     {
//                                     id: 'FloatPanel_MyAccountMaster_Menu_LogOut',
//                                     margin: '5 0 0 0',
//                                     height: 20,
//                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Log Out</div>'
//                                     },
//                                     {
//                                     xtype: 'spacer'
//                                     },
//                                     {
//                                     id: 'FloatPanel_MyAccountMaster_Menu_MyVoucherSign',
//                                     margin: '0 0 0 0',
//                                     height: 20,
//                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     ]
                                    
//                                     },
//                                     ]
//                                     },
                                    
                                    
                                    
//                                     {
//                                     xtype: 'container',
//                                     width: '100%',
//                                     height: 440,
//                                     id:'containerFloatPanel_MyAccountMasterMaster_Rewards',
//                                     layout: {
//                                     type: 'vbox',
//                                     pack: 'start',
//                                     align: 'center'
//                                     },
//                                     items:[
                                    
//                                     {
//                                     xtype: 'container',
//                                     width: '100%',
//                                     height: 30,
//                                     // id:'containerFloatPanel_MyAccountMasterMaster_General',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'left',
//                                     align: 'left'
//                                     },
//                                     items:[
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:black;height:23px">Rewarding</div>'
//                                     },
//                                     ]
//                                     },
                                    
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_MyMerchantPerks',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: transparent;',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         height: 22,
//                                         width: 22,
//                                         html: '<img src="resources/icons/TermAndCondition.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_MyMerchantPerks',
//                                         margin: '5 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">My Merchant Perks</div>'
//                                     },
//                                      {
//                                          xtype: 'spacer'
//                                      },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_MyMerchantPerksSign',
//                                         margin: '0 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     ]
                                    
//                                     },
                                    
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_MyAyohaPointAndPrize',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: transparent;',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         height: 22,
//                                         width: 22,
//                                         html: '<img src="resources/icons/TermAndCondition.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_MyAyohaPointAndPrize',
//                                         margin: '5 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">My Ayoha Point & Prize</div>'
//                                     },
//                                      {
//                                          xtype: 'spacer'
//                                      },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_MyAyohaPointAndPrizeSign',
//                                         margin: '0 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     ]
                                    
//                                     },
                                    
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_PointHistoryAndTransaction',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: transparent;',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         height: 22,
//                                         width: 22,
//                                         html: '<img src="resources/icons/TermAndCondition.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_PointHistoryAndTransaction',
//                                         margin: '5 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Point History & Transaction</div>'
//                                     },
//                                      {
//                                          xtype: 'spacer'
//                                      },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_PointHistoryAndTransactionSign',
//                                         margin: '0 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     ]
                                    
//                                     },
                                    
                                    
                                    
                                    
                                    
                                    
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_DoubleRewardTracker',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                         type: 'hbox',
//                                         pack: 'center',
//                                         align: 'center'
//                                     },
//                                     items: [
//                                         {
//                                             xtype: 'spacer',
//                                             width: 20
//                                         },
//                                         {
//                                             height: 22,
//                                             width: 22,
//                                             html: '<img src="resources/icons/logoutPurpleOne.png" alt="Image" style="width:22px;height:22px;">',
//                                         },
//                                         {
//                                             xtype: 'spacer',
//                                             width: 20
//                                         },
//                                         {
//                                             id: 'FloatPanel_MyAccountMaster_Menu_DoubleRewardTracker',
//                                             margin: '5 0 0 0',
//                                             height: 20,
//                                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Reward Tracker</div>'
//                                         },
//                                          {
//                                              xtype: 'spacer'
//                                          },
//                                         {
//                                             id: 'FloatPanel_MyAccountMaster_Menu_DoubleRewardTrackerSign',
//                                             margin: '0 0 0 0',
//                                             height: 20,
//                                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                         },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     ]
                                    
//                                     },
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_SpecialCampaign',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                         type: 'hbox',
//                                         pack: 'center',
//                                         align: 'center'
//                                     },
//                                     items: [
//                                         {
//                                             xtype: 'spacer',
//                                             width: 20
//                                         },
//                                         {
//                                             height: 22,
//                                             width: 22,
//                                             html: '<img src="resources/icons/logoutPurpleOne.png" alt="Image" style="width:22px;height:22px;">',
//                                         },
//                                         {
//                                             xtype: 'spacer',
//                                             width: 20
//                                         },
//                                         {
//                                             id: 'FloatPanel_MyAccountMaster_Menu_SpecialCampaign',
//                                             margin: '5 0 0 0',
//                                             height: 20,
//                                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Special Campaign</div>'
//                                         },
//                                          {
//                                              xtype: 'spacer'
//                                          },
//                                         {
//                                             id: 'FloatPanel_MyAccountMaster_Menu_SpecialCampaignSign',
//                                             margin: '0 0 0 0',
//                                             height: 20,
//                                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                         },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     ]
                                    
//                                     },
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_ReferAndEarn',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                         type: 'hbox',
//                                         pack: 'center',
//                                         align: 'center'
//                                     },
//                                     items: [
//                                         {
//                                             xtype: 'spacer',
//                                             width: 20
//                                         },
//                                         {
//                                             height: 22,
//                                             width: 22,
//                                             html: '<img src="resources/icons/logoutPurpleOne.png" alt="Image" style="width:22px;height:22px;">',
//                                         },
//                                         {
//                                             xtype: 'spacer',
//                                             width: 20
//                                         },
//                                         {
//                                             id: 'FloatPanel_MyAccountMaster_Menu_ReferAndEarn',
//                                             margin: '5 0 0 0',
//                                             height: 20,
//                                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Refer & Earn</div>'
//                                         },
//                                          {
//                                              xtype: 'spacer'
//                                          },
//                                         {
//                                             id: 'FloatPanel_MyAccountMaster_Menu_ReferAndEarnSign',
//                                             margin: '0 0 0 0',
//                                             height: 20,
//                                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                         },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     ]
                                    
//                                     },
//                                     ]
//                                     },
                                    
                                    
//                                     {
//                                     xtype: 'container',
//                                     width: '100%',
//                                     height: 260,
//                                     id:'containerFloatPanel_MyAccountMasterMaster_AyohaStore',
//                                     layout: {
//                                     type: 'vbox',
//                                     pack: 'start',
//                                     align: 'center'
//                                     },
//                                     items:[
                                    
//                                     {
//                                     xtype: 'container',
//                                     width: '100%',
//                                     height: 30,
//                                     // id:'containerFloatPanel_MyAccountMasterMaster_General',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'left',
//                                     align: 'left'
//                                     },
//                                     items:[
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:black;height:23px">Ayoha Store</div>'
//                                     },
//                                     ]
//                                     },
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_PurchaseHistory',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: transparent;',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         height: 22,
//                                             width: 22,
//                                         html: '<img src="resources/icons/AccountVerification.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_PurchaseHistory',
//                                         margin: '5 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Purchase History</div>'
//                                     },
//                                      {
//                                          xtype: 'spacer'
//                                      },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_PurchaseHistorySign',
//                                         margin: '0 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     ]
                                    
//                                     },
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_AyohaStoreCart',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px none #ECF0F1 ;background: transparent;',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         height: 22,
//                                         width: 22,
//                                         html: '<img src="resources/icons/TermAndCondition.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_AyohaStoreCart',
//                                         margin: '5 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Ayoha Store Cart</div>'
//                                     },
//                                      {
//                                          xtype: 'spacer'
//                                      },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_AyohaStoreCartSign',
//                                         margin: '0 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     ]
                                    
//                                     },
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_MyVoucher',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                         type: 'hbox',
//                                         pack: 'center',
//                                         align: 'center'
//                                     },
//                                     items: [
//                                         {
//                                             xtype: 'spacer',
//                                             width: 20
//                                         },
//                                         {
//                                             height: 22,
//                                             width: 22,
//                                             html: '<img src="resources/icons/logoutPurpleOne.png" alt="Image" style="width:22px;height:22px;">',
//                                         },
//                                         {
//                                             xtype: 'spacer',
//                                             width: 20
//                                         },
//                                         {
//                                             id: 'FloatPanel_MyAccountMaster_Menu_MyVoucher',
//                                             margin: '5 0 0 0',
//                                             height: 20,
//                                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">My Voucher</div>'
//                                         },
//                                          {
//                                              xtype: 'spacer'
//                                          },
//                                         {
//                                             id: 'FloatPanel_MyAccountMaster_Menu_MyVoucherSign',
//                                             margin: '0 0 0 0',
//                                             height: 20,
//                                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                         },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     ]
                                    
//                                     },
//                                     ]
//                                     },
                                           
//                                     {
//                                     xtype: 'container',
//                                     width: '100%',
//                                     height: 300,
//                                     id:'containerFloatPanel_MyAccountMasterMaster_General',
//                                     layout: {
//                                     type: 'vbox',
//                                     pack: 'start',
//                                     align: 'center'
//                                     },
//                                     items:[
                                    
//                                     {
//                                     xtype: 'container',
//                                     width: '100%',
//                                     height: 30,
//                                     // id:'containerFloatPanel_MyAccountMasterMaster_General',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'left',
//                                     align: 'left'
//                                     },
//                                     items:[
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:black;height:23px">General</div>'
//                                     },
//                                     ]
//                                     },
                                    
//                                     {
                                    
//                                     xtype: 'container',
//                                     width: '95%',
//                                     height: 60,
//                                     margin: '0 0 0 0',
//                                     name: 'nameContainerFloatPanel_MyAccountMaster_TermAndCondition',
//                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
//                                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: transparent;',
//                                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                     type: 'hbox',
//                                     pack: 'center',
//                                     align: 'center'
//                                     },
//                                     items: [
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         height: 22,
//                                             width: 22,
//                                         html: '<img src="resources/icons/AccountVerification.png" alt="Image" style="width:22px;height:22px;">',
//                                     },
//                                     {
//                                         xtype: 'spacer',
//                                         width: 20
//                                     },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_TermAndCondition',
//                                         margin: '5 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Term And Condition</div>'
//                                     },
//                                      {
//                                          xtype: 'spacer'
//                                      },
//                                     {
//                                         id: 'FloatPanel_MyAccountMaster_Menu_TermAndConditioSign',
//                                         margin: '0 0 0 0',
//                                         height: 20,
//                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
//                                     },
//                                     {
//                                     xtype: 'spacer',
//                                     width: 20
//                                     },
//                                     ]
                                    
//                                     },
                                    
                                    
//                                     ]
//                                     },  
//                             ]
//                     },
                    
                   
                        
                                        
                    
                           
                    
//                         ]
                    
//                     },

//                 ]
// },
                
              
            
                












//              ]




       







//      });
//     return _FloatPanel_MyAccountMaster;





// }

// function FloatPanel_MyAccountMasterShow() {

//     Ext.Viewport.remove(_FloatPanel_MyAccountMaster);
//     this.overlay = Ext.Viewport.add(FloatPanel_MyAccountMaster());
//     this.overlay.show();
//     _FloatPanel_MyAccountMasterisOpen = 'Y';
//     ArrappRoute.length = 0;
//     ArrappRouteCheckVal.length = 0;
//     console.log(ArrappRoute);
//     AddRoutePages("FloatPanel_MyAccountMasterHide()");
//    // FloatPanel_MyAccountMasterAdjustHeight();
//     var containerView1 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_EditProfile]')[0];
//     var containerViewEl1 = containerView1.element;
//     containerViewEl1.on('tap',
//       function (event, node, options, eOpts) {

//           SingleTap_Open_EditProfile();

//       }
//     );


//     var containerView2 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_ManagePassword]')[0];
//     var containerViewEl2 = containerView2.element;
//     containerViewEl2.on('tap',
//       function (event, node, options, eOpts) {
        
      
//           SingleTap_Open_ManagePassword();

//       }
//     );




//     var containerView3 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_LogOut]')[0];
//     var containerViewEl3 = containerView3.element;
//     containerViewEl3.on('tap',
//       function (event, node, options, eOpts) {
//           //FloatPanel_MyAccountMasterHide();
//           //Ext.getCmp('mainView').setActiveItem(0);
//           //VIAAdvertismentAutoSlideReset();
//           LogOuting();

//       }
//     );



//     var containerViewnameContainerFloatPanel_MyAccountMaster_AllTransactions = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_AllTransactions]')[0];
//     var containerViewElnameContainerFloatPanel_MyAccountMaster_AllTransactions = containerViewnameContainerFloatPanel_MyAccountMaster_AllTransactions.element;
//     containerViewElnameContainerFloatPanel_MyAccountMaster_AllTransactions.on('tap',
//       function (event, node, options, eOpts) {
//           //FloatPanel_MyAccountMasterHide();
//           //Ext.getCmp('mainView').setActiveItem(0);
//           //VIAAdvertismentAutoSlideReset();
//           MyAccount_AllTransactionHistoryShow();

//       }
//     );

    

//     var containerViewnameContainerFloatPanel_MyAccountMaster_TermAndCondition = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_TermAndCondition]')[0];
//     var containerViewElnameContainerFloatPanel_MyAccountMaster_TermAndCondition = containerViewnameContainerFloatPanel_MyAccountMaster_TermAndCondition.element;
//     containerViewElnameContainerFloatPanel_MyAccountMaster_TermAndCondition.on('tap',
//       function (event, node, options, eOpts) {
//           getPlayerIDS();

//       }
//     );

//     // var containerViewnameContainerFloatPanel_MyAccountMaster_AccountVerification = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_AccountVerification]')[0];
//     // var containerViewElnameContainerFloatPanel_MyAccountMaster_AccountVerification = containerViewnameContainerFloatPanel_MyAccountMaster_AccountVerification.element;
//     // containerViewElnameContainerFloatPanel_MyAccountMaster_AccountVerification.on('tap',
//     //   function (event, node, options, eOpts) {
//     //       setSubscription();

//     //   }
//     // );

    
//     // var containerViewnameFloatPanel_MyAccountMaster_VerificationStatusBox = Ext.ComponentQuery.query('container[name=nameFloatPanel_MyAccountMaster_VerificationStatusBox]')[0];
//     // var containerViewElnameFloatPanel_MyAccountMaster_VerificationStatusBox = containerViewnameFloatPanel_MyAccountMaster_VerificationStatusBox.element;
//     // containerViewElnameFloatPanel_MyAccountMaster_VerificationStatusBox.on('tap',
//     //   function (event, node, options, eOpts) {
//     //       // FloatPanel_AccountVerifiedShow();
//     //       if (GetAyohaUserisUserVerified() == "NO") {
//     //           FloatPanel_AyohaMembershipAdvantagesShow();
//     //       } else if (GetAyohaUserisUserVerified() == "YES") {
//     //           FloatPanel_MyAccountRankDescriptionShow();
//     //       }
          
//     //   }
//     // );

    
    

//     var val = GetCurrAyohaUserAccountNo().split('-');
//     var id = val[1] + '-' + val[2];
//     var id_Ext = val[2];
//     var isUserVerified = GetAyohaUserisUserVerified();


//     Ext.getCmp('FloatPanel_MyAccountMaster_PicPicture').setHtml('<img src="' + GetAyohaUserPicProfile() + '" alt="Image" style="width:65px;height:65px;border-radius: 50%;border: 2px solid #ECF0F1;zIndex:400px;margin:0px 0px 0px -10px;">');
//     Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:white;">' + GetAyohaUserAccountNames() + '</div>');
//     Ext.getCmp('FloatPanel_MyAccountMaster_emailAddress').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:white;height:20px">'+GetAyohaUserEmail()+'</div>');
   
//     console.log(GetAyohaUserAccountNames().length);

//     if (GetAyohaUserAccountNames().length > 24) {

        
//       //  Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHeight(38);
//         Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:white;">' + GetAyohaUserAccountNames() + '</div>');
//     }

   
//     //Ext.getCmp('FloatPanel_MyAccountMaster_AccountNo').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:white;height:23px">' + id + '</div>');



//     if (isUserVerified == "NO") {
//       //  Ext.getCmp('FloatPanel_MyAccountMaster_AccountNo').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:orange;height:23px">Not Ayoha Member</div>');
//         Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<img src="resources/icons/NotVerify.png" alt="Image" style="width:22px;height:22px;zIndex:400px;margin:0px 0px 0px 0px;">');
//        // Ext.getCmp('FloatPanel_MyAccountMaster_VerificationStatusBox').setHtml('<div class="blink_me" style="width:auto;background-color: orange;text-align:center;border: 1px solid orange;font-size: 11px;font-weight:normal;color:white;height:21px;vertical-align:middle;border-radius: 5px 5px 5px 5px;padding:0px 15px;"><div style="margin:3px 0px 0px 0px;">Be Ayoha Member !</div></div>');
       



//     }
//     if (isUserVerified == "YES") {
//       //  Ext.getCmp('FloatPanel_MyAccountMaster_AccountNo').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:white;height:23px">' + localStorage.getItem("AccountNoDisplay") + '</div>');
//         Ext.getCmp('FloatPanel_MyAccountMaster_emailAddress').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:white;height:20px">'+GetAyohaUserEmail()+'</div>');
//         Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:white;">' + GetAyohaUserAccountNames() + '</div>');
//         if (GetAyohaUserAccountNames().length > 24) {
//             Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:white;">' + GetAyohaUserAccountNames() + '</div>');
//         }
       

//         if (localStorage.getItem("AyohaMember_Rank") == "Black Iron") {
//            // Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/Starter.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
//             Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/blackIron.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');


//         }
//         if (localStorage.getItem("AyohaMember_Rank") == "Bronze") {
//            // Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/nomembercard.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
//             Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Bronze.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

//         }
//         if (localStorage.getItem("AyohaMember_Rank") == "Silver") {
//            // Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/vip.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
//             Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Silver.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

//         }
//         if (localStorage.getItem("AyohaMember_Rank") == "Gold") {
//            // Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/vvip.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
//             Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Gold.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

//         }
//         if (localStorage.getItem("AyohaMember_Rank") == "Platinum") {
//             //Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/goldmember.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
//             Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Platinum.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

//         }

//         if (localStorage.getItem("AyohaMember_Rank") == "King Club") {
//             //Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/kingclubIcon.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
//             Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/kingclubIcon.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

//         }






       
//         //Ext.getCmp('FloatPanel_MyAccountMaster_VerificationStatusBox').setHtml('<div style="width:60%;background-image: linear-gradient(#c800ffc9,#ff00de75);background-color: #fac;text-align:center;border: 1px solid #fac;font-size: 11px;font-weight:bold;color:white;height:21px;vertical-align:middle;border-radius: 5px 5px 5px 5px;"><div style="margin:3px 0px 0px 0px;">Ayoha Member</div></div>');
      



//        // Ext.getCmp('FloatPanel_MyAccountMaster_VerificationStatusBox').setHtml('<div  onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:180px;height:40px;background-image: linear-gradient(#c800ffc9,#c800ffc9);background-color: #fac;border: 1px solid #fac;font-size: 12px;font-weight:bold;color:white;border-radius: 5px;display: flex;text-align: left;padding:5px 5px ">Tier :' + localStorage.getItem("AyohaMember_Rank") + ' <br> Ayoha Point:'+globalDashboard_AyohaPoint+'</div>');
       
//     }
// }


// function FloatPanel_MyAccountMasterHide() {

//     if (_FloatPanel_MyAccountMasterisOpen == 'Y') {
//         _FloatPanel_MyAccountMaster.hide(); _FloatPanel_MyAccountMasterisOpen = 'N';
//       //  FloatPanel_AyohaeWallet_IconHide();
//         RemovePages("FloatPanel_MyAccountMasterHide()");
//     }
   
// }


// function LogOuting() {
//     FloatPanel_MyAccountMasterHide();
//     localStorage.clear();
   
//     // window.location.reload();
//     Ext.getCmp('mainView').setActiveItem(0);
//     // Ext.getCmp('mainView').setActive(0);
// }

// function SingleTap_Open_EditProfile() {

//     FloatPanel_SubscriberMasterShow();
//     Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=black><b>Edit Profile</b></font>');
//    // Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(1);
// }

// function SingleTap_Open_ManagePassword() {

//     FloatPanel_SubscriberMasterShow();

   
//     Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=black><b>Change Password</b></font>');
//     Ext.getCmp('btnFloatPanel_SubscriberMaster_TitleHeaderIcon').setHtml('<div ><img src="resources/icons/changePasswordWhite01.png" width="25" height="20" alt="Company Name"></div>');
//     Ext.getCmp('tabpanelFloatPanel_SubscriberMaster_inner').setActiveItem(2);
//     Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_Save').setHidden(false);
//     Ext.getCmp('btnFloatPanel_SubscriberMaster_Edit').setHidden(true);
    
// }

// function FloatPanel_MyAccountMasterAdjustHeight() {
//     var y = parseInt(screen.height);
//     var x = parseInt(window.innerHeight);

//     var adjust = x - 212;
//     //var headerHeight = parseInt(251);
//     ////alert(y);
//     ////alert(x);
   
//     //var adjustedHeight = x - headerHeight;
//     ////var newHeight = adjustedHeight - 99;
//     //var newHeight = adjustedHeight - 83;

//     //alert(newHeight)

//   //  Ext.getCmp('containerFloatPanel_MyAccountMasterMaster').setHeight(adjust);
//     //Ext.getCmp('containerFloatLoyaltyCardPointMaster').setHeight(newHeight);






// }