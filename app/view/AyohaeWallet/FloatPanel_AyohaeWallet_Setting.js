Ext.define('BuskartApp.view.AyohaeWallet.FloatPanel_AyohaeWallet_Setting', {

});

var _FloatPanel_AyohaeWallet_Setting;


var isFloatPanel_AyohaeWallet_SettingOpen = 'N';


var FloatPanel_AyohaeWallet_Setting_tabpanelFloatPanel_AyohaeWallet_Setting_MasterContent_Index = 0;








function FloatPanel_AyohaeWallet_Setting() {

    _FloatPanel_AyohaeWallet_Setting =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 485,
         //width: '95%',
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaeWallet_SettingID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 360,
         // modal: true,
         //  hideOnMaskTap: true,
         layout: {
             type: 'vbox'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             //type: 'slideOut',
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250
             type: 'popOut',
             duration: 250,
             easing: 'ease-out'
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px none;background-color:white;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //listeners: {
         //    initialize: function (c) {
         //        this.element.on({
         //            swipe: function (e, node, options) {

         //                if (e.direction == "left") {
         //                    _FloatPanel_AyohaeWallet_Setting.hide(Ext.fx.Animation({
         //                        type: 'slideOut',
         //                        direction: 'left',
         //                        easing: 'cubic-bezier(.7,0,.7,1)',
         //                        duration: 250

         //                    }));
         //                } if (e.direction == "right") {
         //                    _FloatPanel_AyohaeWallet_Setting.hide(Ext.fx.Animation({
         //                        type: 'slideOut',
         //                        direction: 'right',
         //                        easing: 'cubic-bezier(.7,0,.7,1)',
         //                        duration: 250

         //                    }));
         //                }
         //                isFloatPanel_AyohaeWallet_SettingOpen = 'N';
         //                RemovePages(_FloatPanel_AyohaeWallet_Setting, "isFloatPanel_AyohaeWallet_SettingOpen");
         //            }
         //        });
         //    }
         //},

         //  style: "background-color: #D25959;",



         items: [
             {

                 xtype: 'container',
                 width: '100%',
                 height: 40,
                 docked: 'top',
                 // width: 40,
                 style: ' background-color: white;',
                 //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
                 //hidden: true,

                 id: 'containerFloatPanel_AyohaeWallet_SettingHeader',
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
                 //style: 'background-color:white;border-top:1px none #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)',
                 // hidden:true,
                 items:
                        [
                            {
                                xtype: 'panel',
                                width: 10,
                            },

                                      {
                                          xtype: 'button',
                                          id: 'btnFloatPanel_AyohaeWallet_SettingBack',
                                          height: 30,
                                          width: 35,
                                          // iconCls: 'list',
                                          html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                          ui: 'plain',
                                          handler: function () {

                                              if(FloatPanel_AyohaeWallet_Setting_tabpanelFloatPanel_AyohaeWallet_Setting_MasterContent_Index==0)
                                              {
                                               RemovePages("FloatPanel_AyohaeWallet_SettingHide()");
                                              _FloatPanel_AyohaeWallet_Setting.hide(Ext.fx.Animation({
                                                  type: 'slideOut',
                                                  direction: 'left',
                                                  easing: 'cubic-bezier(.7,0,.7,1)',
                                                  duration: 250

                                              }));
                                              isFloatPanel_AyohaeWallet_SettingOpen = 'N';
                                              FloatPanel_RewardStoreHide();
                                              } else {
                                                  Ext.getCmp('tabpanelFloatPanel_AyohaeWallet_Setting_MasterContent').setActiveItem(0);
                                                  FloatPanel_AyohaeWallet_Setting_tabpanelFloatPanel_AyohaeWallet_Setting_MasterContent_Index = 0;
                                              }
                                            
                                           

                                             

                                          }
                                      },
                                      {
                                          xtype: 'spacer',

                                      },

                                      //{
                                      //    margin: '10 0 0 0',
                                      //    id: 'htmlFloatPanel_AyohaeWallet_Setting_Icon',
                                      //    html: '<img src="resources/icons/income01.png" width=26px; height=26px"/>'
                                      //},
                                      //{
                                      //    xtype: 'panel',
                                      //    width: 5
                                      //},
                                       {
                                           margin: '0 10 0 0',
                                           id: 'htmlFloatPanel_AyohaeWallet_Setting_TitleHeaderTxt',
                                          // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:10px 0px 0px 0px">eWallet Transaction History </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-23px 0px 0px 0px">YEAR 2021</div>',
                                          html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;">Ayoha eWallet Settings</div>',

                                           //html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                       },
                                           {
                                               xtype: 'panel',
                                               width: 10,
                                           }
















                        ]

             },
              
              {
                  xtype: 'tabpanel',
                  // hidden: true,
                  //  hidden:true,
                  id: 'tabpanelFloatPanel_AyohaeWallet_Setting_MasterContent',
                  // style: 'border-top:2px solid #ECF0F1;background: white;',
                  // style: 'background-color: black;',
                  // margin: '-20 0 0 -26',
                  // margin: '25 0 0 0',

                  //width: 200,
                  width: '100%',
                  height: '100%',
                  //height: 120,
                  //height: 50,
                  //  zIndex: 200,
                  //  docked: 'bottom',
                  tabBarPosition: 'top',
                  ui: 'plain',
                  initialize: function (c) {
                      //this.getTabBar().hide();


                  },

                  items: [
                      /////////////
                      {
                          xtype: 'container',
                          width: '100%',
                          //height: 300,
                          height: '95%',
                          style: 'background-color:white',
                          title: 'titleFloatPanel_AyohaeWallet_Setting_Security',
                          layout: {
                              type: 'vbox',
                              pack: 'start',
                              align: 'center',
                          },
                          scrollable: {
                              direction: 'vertical',
                              indicators:false,
                          },
                          items: [

                              {

                                  xtype: 'container',
                                  width: '90%',
                                  height: 60,
                                  //margin: '10 0 0 0',
                                 // zIndex:200,
                                  id: 'containerFloatPanel_AyohaeWallet_Setting_Security',
                                  name: 'containerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Security',
                                  //style: 'border-bottom:2px solid #fac;border-top:2px solid #fac ;background-color: #FAD6DE;',
                                  style: 'border-bottom:1px solid #dddddd;border-top:2px none #fac ;background-color:transparent;',
                                  layout: {
                                      type: 'hbox',
                                      pack: 'center',
                                      align: 'center'
                                  },
                                  items: [


                                      {
                                          xtype: 'container',
                                          id: 'containerFloatPanel_AyohaeWallet_Setting_Security_tap',
                                          width: 10,
                                          height: 56,
                                          margin: '-1 0 0 0',
                                          // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                                          style: 'background-color:transparent;',
                                      },
                                       {
                                           xtype: 'spacer',
                                           width: 10
                                       },


                                       {
                                           xtype: 'container',
                                           width: '100%',
                                           height: 40,
                                           margin: '4 0 0 0',
                                           id: 'containerFloatPanel_AyohaeWallet_Setting_Securityinner',
                                           name: 'nameFloatPanel_AyohaeWallet_Setting_Securityinner',
                                           //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                           // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid pink;border-top:2px solid pink ;background: transparent;',
                                           style: 'background-color:transparent',
                                           layout: {
                                               type: 'hbox',
                                               pack: 'center',
                                               align: 'center'
                                           },
                                           items: [

                                                {
                                                    //height: 28,
                                                    //width: 28,
                                                    id: 'htmlFloatPanel_AyohaeWallet_Setting_Security_Image',
                                                    //badgeText: "2",
                                                    html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/securiti.png"  style="width: 40px; height: 40px; border:2px none white;  margin:0px 0px 0px 0px"></div>',
                                                },
                                      {
                                          xtype: 'spacer',
                                          width: 10
                                      },
                                       {
                                           //height: 28,
                                           //width: 28,
                                           id: 'htmlFloatPanel_AyohaeWallet_Setting_Security_Name',
                                           //badgeText: "2",
                                           html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:15px">Security</div>',
                                       },

                                       {
                                           xtype: 'spacer'
                                       },
                                      {
                                          id: 'htmlFloatPanel_AyohaeWallet_Setting_Security_arrow',
                                          margin: '0 0 0 0',
                                          html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:15px;font-size: 12px;font-weight:bold;color:black;" >></div>',
                                          //  height: 20,
                                          //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                      },
                                      {
                                          id: 'htmlFloatPanel_AyohaeWallet_Setting_Security_Spacer',
                                          xtype: 'spacer',
                                          width: 33
                                      },

                                           ]
                                       },


                                  ]

                              },



                              {

                                  xtype: 'container',
                                  width: '90%',
                                  height: 60,
                                  //margin: '10 0 0 0',
                                  id: 'containerFloatPanel_AyohaeWallet_Setting_Credit_and_Debit_Limit',
                                  name: 'containerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Credit_and_Debit_Limit',
                                  style: 'border-bottom:1px solid #dddddd;border-top:2px none #fac ;background-color:transparent;',
                                  layout: {
                                      type: 'hbox',
                                      pack: 'center',
                                      align: 'center'
                                  },
                                  items: [


                                      {
                                          xtype: 'container',
                                          id: 'containerFloatPanel_AyohaeWallet_Setting_Credit_and_Debit_Limit_tap',
                                          width: 10,
                                          height: 56,
                                          margin: '-1 0 0 0',
                                          // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                                          style: 'background-color:transparent;',
                                      },
                                       {
                                           xtype: 'spacer',
                                           width: 10
                                       },


                                       {
                                           xtype: 'container',
                                           width: '100%',
                                           height: 40,
                                           margin: '4 0 0 0',
                                           id: 'containerFloatPanel_AyohaeWallet_Credit_and_Debit_Limit_inner',
                                           name: 'nameFloatPanel_AyohaeWallet_Credit_and_Debit_Limit_inner',
                                           //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                           // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid pink;border-top:2px solid pink ;background: transparent;',
                                           style: 'background-color:transparent',
                                           layout: {
                                               type: 'hbox',
                                               pack: 'center',
                                               align: 'center'
                                           },
                                           items: [

                                                {
                                                    //height: 28,
                                                    //width: 28,
                                                    id: 'htmlFloatPanel_AyohaeWallet_Setting_Credit_and_Debit_Limit_Image',
                                                    //badgeText: "2",
                                                    html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/kreditdebit.png"  style="width: 40px; height: 40px; border:2px none white;  margin:0px 0px 0px 0px"></div>',
                                                },
                                      {
                                          xtype: 'spacer',
                                          width: 10
                                      },
                                       {
                                           //height: 28,
                                           //width: 28,
                                           id: 'htmlFloatPanel_AyohaeWallet_Setting_Credit_and_Debit_Limit_Name',
                                           //badgeText: "2",
                                           html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:15px">Credit and Debit Limit</div>',
                                       },

                                       {
                                           xtype: 'spacer'
                                       },
                                      {
                                          id: 'htmlFloatPanel_AyohaeWallet_Setting__Credit_and_Debit_Limit_arrow',
                                          margin: '0 0 0 0',
                                          html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:15px;font-size: 12px;font-weight:bold;color:black;" >></div>',
                                          //  height: 20,
                                          //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                      },
                                      {
                                          id: 'htmlFloatPanel_AyohaeWallet_Setting_Credit_and_Debit_Limit_Spacer',
                                          xtype: 'spacer',
                                          width: 33
                                      },

                                           ]
                                       },


                                  ]

                              },
                              {
                                  xtype: 'list',
                                  // store: _DataStore_AyohaeWalletAccountSettingStore,
                                  store:'AyohaeWalletAccountSettingHardCodedStore',
                                  id: 'FloatPanel_AyohaeWallet_SettingIDListID',
                                  hidden:true,
                                  mode: 'SINGLE',
                                  disableSelection: true,
                                
                                 
                                  scrollable: {
                                      direction: 'vertical',
                                      indicators: {
                                          y: {
                                              autoHide: true
                                          },
                                          x: {
                                              autoHide: true
                                          }
                                      }
                                  },
                            
                                 
                                  style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                  //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                               //   itemTpl: '<div class="myContent" style="background-color:white;width:100%">' +
                               //'<table onclick="FloatPanel_AyohaeWallet_SettingMenu({ID})" style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:0px 0px 0px 0px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:15%;vertical-align:center;text-align:center;"><img src="{Icon}" style="border:1px none black; width:25px;height:25px;" /></td><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:72%;vertical-align:center;text-align:left;"><b>{AyohaeWalletAccountSettingName}</b></td><td style="font-family:Arial, sans-serif;font-size:24px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:10%;vertical-align:center;text-align:left">></td></tr></table></div>',                                 


                                  ////itemTpl: '<div onclick="FloatPanel_AyohaeWallet_SettingMenu({IDs})" class="myContent" style="background-color:white;width:104%">' +
                                  ////    '<div onclick="FloatPanel_AyohaeWallet_SettingMenu({IDs})" style="overflow:auto;width:104%;margin:-2px 0px 0px 0px;background-color:white;height:35px;"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:20%;margin:5px 0px 0px 20px;background-color:white;"><img src="{Icons}" style="border:1px none white; width:25px;height:25px;" /></div><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;float:left;width:70%;margin:15px 0px 0px -20px;background-color:white;color:black"><b>{AyohaeWalletAccountSettingNames}</b></div><div style="font-family:Arial, sans-serif;font-size:24px;font-weight:normal;float:left;width:10%;margin:5px 0px 0px 0px;background-color:white;color:black"><b> > </b></div></div>' ,

                                  itemTpl: '<div class="myContent">' +
                                  '<div onclick="FloatPanel_AyohaeWallet_SettingMenu({ID})" class="myContent" style="background-color:white;width:104%">' +
                                      '<div onclick="FloatPanel_AyohaeWallet_SettingMenu({ID})" style="overflow:auto;width:104%;margin:-2px 0px 0px 0px;background-color:white;height:35px;"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:20%;margin:5px 0px 0px 20px;background-color:white;">{Icon}</div><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;float:left;width:70%;margin:15px 0px 0px -20px;background-color:white;color:black"><b>{AyohaeWalletAccountSettingName}</b></div><div style="font-family:Arial, sans-serif;font-size:24px;font-weight:normal;float:left;width:10%;margin:5px 0px 0px 0px;background-color:white;color:black"><b> > </b></div></div></div>',


                               

                                  width: '90%',
                                 // height: 300,
                                 height: '100%',
                                 

                                  emptyText: '<div class="myContent">No Setting!</div>',

                                 


                              },

                          ]

                      },

                      //////
                          {
                              xtype: 'container',
                              width: '100%',
                              //height: 300,
                              height: '100%',
                              style: 'background-color:white',
                              title: 'titleFloatPanel_AyohaeWallet_Setting_Security_CreateNewAccount',

                              layout: {
                                  type: 'vbox',
                                  pack: 'start',
                                  align: 'center',
                              },
                              scrollable: {
                                  directionLock: true,
                                  indicators: false
                              },
                              items: [
                                  {
                                      xtype: 'container',
                                      width: '100%',
                                      docked: 'bottom',
                                      margin: '0 0 0 0',
                                      height: 50,
                                      //style: 'background-color:white;border-top:2px none #f0f2f5;',
                                      // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:2px solid black;',
                                      //  style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #f0f2f5;',
                                      //style: 'background-color:white;border-top:2px solid #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);border-radius:20px 20px 0px 0px;',
                                      style: 'background-color:white;border-top:2px solid #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
                                      layout: {
                                          type: 'hbox',
                                          pack: 'center',
                                          align: 'center'

                                      },
                                      items: [
                                            {
                                                id: 'htmlFloatPanel_AyohaeWallet_Setting_Security_CreateNewAccount_Save',
                                                //margin: '-27 0 0 0',
                                                hidden: true,
                                                width:'90%',
                                                margin: '0 0 0 0',
                                                html: '<button OnClick="FloatPanel_AyohaeWallet_Setting_Insert()" class="buttonCreateAyohaEwalletAccount">Create Ayoha eWallet Account</button>'



                                            },

                                             {
                                                 id: 'htmlFloatPanel_AyohaeWallet_Setting_Security_Update',
                                                 //margin: '-27 0 0 0',
                                                 hidden: true,
                                                 width: '90%',
                                                 margin: '0 0 0 0',
                                                 html: '<button OnClick="FloatPanel_AyohaeWallet_Setting_Update()" class="buttonCreateAyohaEwalletAccount">Save</button>'



                                             },
                                              {
                                                  id: 'htmlFloatPanel_AyohaeWallet_Setting_Security_UpdateDebitLimit',
                                                  //margin: '-27 0 0 0',
                                                  hidden:true,
                                                  width: '90%',
                                                  margin: '0 0 0 0',
                                                  html: '<button OnClick="FloatPanel_AyohaeWallet_Setting_UpdateDebitLimit()" class="buttonCreateAyohaEwalletAccount">Save</button>'



                                              },
                                      ]
                                  },









                                  













                                  {
                                      xtype: 'container',
                                      width: '95%',
                                      //height: 300,
                                      height: 250,
                                     // style: 'background-color:red',
                                      style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 10px 10px 10px 10px;',
                                      id: 'ContainerFloatPanel_AyohaeWallet_Setting_Security_SetPassword',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center',
                                      },
                                      items: [

                                  {
                                      xtype: 'container',
                                      id: 'containerFloatPanel_AyohaeWallet_Setting_Security_SetPassword_TextDescription',
                                      width: '100%',
                                      margin:'15 0 0 0',
                                     // height: 80,
                                      layout: {
                                          type: 'hbox',
                                          pack: 'center',
                                          align: 'left',
                                      },
                                      items: [
                                          {
                                              xtype: 'panel',
                                              width: 22
                                          },
                                          {
                                              html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Arial, sans-serif;font-size: 16px;font-weight:bold;color:black;">Set eWallet Password</div><br><div style="width:90%;background-color: transparent;text-align:left;border: 1px none white;font-family:Arial, sans-serif;font-size: 12px;font-weight:bold;color:black;margin:-15px 0px 0px 0px;">Create a password to keep your ewallet account safe and protected. therefore, make sure your password is unpredictable and unique</div>',

                                          }
                                      ]
                                  },
                                  {
                                      xtype: 'container',
                                      id: 'containerFloatPanel_AyohaeWallet_Setting_Security_SetPassword_CreatePassword',
                                      width: '100%',
                                      height: 220,
                                      margin: '20 0 0 0',
                                      style: ' background-color:transparent',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'left',
                                      },
                                      items: [
                                          {
                                              xtype: 'container',
                                              width: '100%',
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
                                                                       align: 'left'

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
                                             id: 'htmlFloatPanel_AyohaeWallet_SettingPassword',
                                             width: '90%',
                                             height: 20,
                                             html: '<input type="password" id="input-FloatPanel_AyohaeWallet_SettingPassword"  style="border-color:black;color:black;width:100%;text-align: right;font-size:20px;font-weight:bold;padding:0 25px" maxlength="6"  placeHolder="Number Only">'

                                         },


                                                           ]

                                                       },


                                                        //{
                                                        //    xtype:'container'

                                                        //},

                                                        {
                                                            xtype: 'button',
                                                            id: 'btnFloatPanel_AyohaeWallet_SettingShowPassword',
                                                            //  badgeText: '1',
                                                            //hidden: true,

                                                            margin: '0 0 -10 -30',
                                                            height: 35,
                                                            width: 35,
                                                            html: '<img src="resources/icons/hidepassword.png" style="width: 25px; height: 25px;">',
                                                            ui: 'plain',
                                                            handler: function () {
                                                                var x = document.getElementById("input-FloatPanel_AyohaeWallet_SettingPassword");
                                                                if (x.type === "password") {
                                                                    x.type = "text";
                                                                } else {
                                                                    x.type = "password";
                                                                }
                                                                document.getElementById("input-FloatPanel_AyohaeWallet_SettingPassword").focus();
                                                                //   document.getElementById("input-FloatPanel_AyohaUserRegistrationPassword").focus();


                                                                var btnImg = Ext.getCmp('btnFloatPanel_AyohaeWallet_SettingShowPassword').getHtml();

                                                                if (btnImg == '<img src="resources/icons/showpassword.png" style="width: 25px; height: 25px;">') {
                                                                    Ext.getCmp('btnFloatPanel_AyohaeWallet_SettingShowPassword').setHtml('<img src="resources/icons/hidepassword.png" style="width: 25px; height: 25px;">');

                                                                }
                                                                if (btnImg == '<img src="resources/icons/hidepassword.png" style="width: 25px; height: 25px;">') {
                                                                    Ext.getCmp('btnFloatPanel_AyohaeWallet_SettingShowPassword').setHtml('<img src="resources/icons/showpassword.png" style="width: 25px; height: 25px;">');
                                                                }


                                                            }
                                                        },
                                                          {
                                                              xtype: 'button',
                                                              id: 'btnFloatPanel_AyohaeWallet_SettingPassword',
                                                              //  badgeText: '1',
                                                              hidden: true,
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
                                               id: 'htmFloatPanel_AyohaeWallet_SettingPasswordMessage',
                                               html: '<div style="color:black;text-align: right;font-size:11px;width:100%;">Password cannot less than 6 charaters!</div>',
                                               // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                           },
                                          ////////////////////////

                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              margin: '30 0 0 0',
                                              id: 'container_FloatPanel_AyohaeWallet_SettingPassword',
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
                                             id: 'htmlFloatPanel_AyohaeWallet_SettingConfirmPassword',
                                             width: '90%',
                                             height: 20,
                                             html: '<input type="password" id="input-FloatPanel_AyohaeWallet_SettingConfirmPassword"   style="border-color:black;color:black;width:100%;text-align: right;font-size:20px;font-weight:bold;padding:0 25px" maxlength="6"  placeHolder="Number Only">'

                                         },


                                                           ]

                                                       },


                                                        //{
                                                        //    xtype:'container'

                                                        //},
                                                             {
                                                                 xtype: 'button',
                                                                 id: 'btnFloatPanel_AyohaeWallet_SettingShowConfirmPassword',
                                                                 //  badgeText: '1',
                                                                 //hidden: true,

                                                                 margin: '0 0 -10 -30',
                                                                 height: 35,
                                                                 width: 35,
                                                                 html: '<img src="resources/icons/hidepassword.png" style="width: 25px; height: 25px;">',
                                                                 ui: 'plain',
                                                                 handler: function () {
                                                                     var x = document.getElementById("input-FloatPanel_AyohaeWallet_SettingConfirmPassword");
                                                                     if (x.type === "password") {
                                                                         x.type = "text";
                                                                     } else {
                                                                         x.type = "password";
                                                                     }

                                                                     //   document.getElementById("input-FloatPanel_AyohaUserRegistrationConfirmPassword").focus();
                                                                     document.getElementById("input-FloatPanel_AyohaeWallet_SettingConfirmPassword").focus();

                                                                     var btnImg = Ext.getCmp('btnFloatPanel_AyohaeWallet_SettingShowConfirmPassword').getHtml();

                                                                     if (btnImg == '<img src="resources/icons/showpassword.png" style="width: 25px; height: 25px;">') {
                                                                         Ext.getCmp('btnFloatPanel_AyohaeWallet_SettingShowConfirmPassword').setHtml('<img src="resources/icons/hidepassword.png" style="width: 25px; height: 25px;">');

                                                                     }
                                                                     if (btnImg == '<img src="resources/icons/hidepassword.png" style="width: 25px; height: 25px;">') {
                                                                         Ext.getCmp('btnFloatPanel_AyohaeWallet_SettingShowConfirmPassword').setHtml('<img src="resources/icons/showpassword.png" style="width: 25px; height: 25px;">');
                                                                     }


                                                                 }
                                                             },



                                                          {
                                                              xtype: 'button',
                                                              id: 'btnFloatPanel_AyohaeWallet_SettingConfirmPassword_error',
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
                                                   id: 'htmFloatPanel_AyohaeWallet_SettingConfirmPasswordMessage',
                                                   html: '<div style="color:black;text-align: right;font-size:11px;width:100%;">Password is matched!</div>'
                                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                               },
                 


                                      ]
                                  }

                                      ]

                                  },

                                  ////////////////////////////////
                                   {
                                       xtype: 'container',
                                       width: '95%',
                                       margin: '25 0 0 0',
                                       //height: 300,
                                       height: 185,
                                       // style: 'background-color:red',
                                       style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 10px 10px 10px 10px;',
                                       id: 'ContainerFloatPanel_AyohaeWallet_Setting_Security_SeteWalletSecurity',
                                       layout: {
                                           type: 'vbox',
                                           pack: 'start',
                                           align: 'left',
                                       },
                                       items: [
                                           {
                                               margin: '15 0 0 25',
                                               html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Arial, sans-serif;font-size: 16px;font-weight:bold;color:black;">Password Security Extended(Optional) - NA</div>',

                                           },
                                   {
                                       xtype: 'container',
                                       id: 'containerFloatPanel_AyohaeWallet_Setting_Security_SeteWalletSecurity_EnableDeviceID',
                                       width: '100%',
                                       margin: '15 0 0 0',
                                       // height: 80,
                                       layout: {
                                           type: 'hbox',
                                           pack: 'left',
                                           align: 'left',
                                       },
                                       items: [
                                           {
                                               xtype: 'checkboxfield',
                                               margin: '0 0 0 15',
                                               width: '63%',
                                               id: 'checkboxFloatPanel_AyohaeWallet_Setting_Security_SeteWalletSecurity_EnableDeviceID',
                                               labelWidth: '100%',
                                               name: 'DeviceIDDetection',
                                               label: 'Device ID Detection',
                                             
                                           },
                                            {
                                                xtype: 'panel',
                                                width: '20%'
                                            },
                                           {
                                               xtype: 'button',
                                               hidden:true,
                                               id: 'btnFloatPanel_AyohaeWallet_Setting_Security_SeteWalletSecurity_EnableDeviceIDInfo',
                                               //  badgeText: '1',
                                              margin: '5 0 0 0',
                                               height: 35,
                                               width: 35,
                                               html: '<img src="resources/icons/infopurple01.png" width="25" height="25" alt="Company Name">',
                                               ui: 'plain',
                                               handler: function () {
                                                  // swalFireGeneralMsg("A Rule Stamp Message will be pop up to remind mechandiser before card stamped")
                                                   //FloatPanel_AyohaStore_AyohaPointCollectedAnimShow();
                                                  
                                               }
                                           },
                                           
                                       ]
                                   },


                                   {
                                       xtype: 'container',
                                       id: 'containerFloatPanel_AyohaeWallet_Setting_Security_SeteWalletSecurity_EnableTAC',
                                       width: '100%',
                                       margin: '15 0 0 0',
                                       // height: 80,
                                       layout: {
                                           type: 'hbox',
                                           pack: 'left',
                                           align: 'left',
                                       },
                                       items: [
                                           {
                                               xtype: 'checkboxfield',
                                               width: '63%',
                                               id: 'checkboxFloatPanel_AyohaeWallet_Setting_Security_SeteWalletSecurity_EnableTAC',
                                               margin: '0 0 0 15',
                                               labelWidth: '100%',
                                               name: 'EnableTAC',
                                               label: 'Enable TAC Code&nbsp;&nbsp;&nbsp;',
                                             //  style: 'float: left'
                                           },
                                           {
                                               xtype: 'panel',
                                               width:'20%'
                                           },
                                           {
                                               xtype: 'button',
                                               id: 'btnFloatPanel_AyohaeWallet_Setting_Security_SeteWalletSecurity_EnableTACCodeInfo',
                                               //  badgeText: '1',
                                               hidden: true,
                                               margin: '5 0 0 0',
                                               height: 35,
                                               width: 35,
                                               html: '<img src="resources/icons/infopurple01.png" width="25" height="25" alt="Company Name">',
                                               ui: 'plain',
                                               handler: function () {
                                                   swalFireGeneralMsg("A Rule Stamp Message will be pop up to remind mechandiser before card stamped")
                                                   //FloatPanel_AyohaStore_AyohaPointCollectedAnimShow();
                                               }
                                           },

                                       ]
                                   },

                                       ]
                                   },
                                  




                                  ///////////////////////////


                                  {
                                      xtype: 'container',
                                      width: '95%',
                                      margin: '25 0 0 0',
                                      //height: 300,
                                      height: 165,
                                      // style: 'background-color:red',
                                      style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 10px 10px 10px 10px;',
                                      id: 'ContainerFloatPanel_AyohaeWallet_Setting_Security_SetDebitCreditLimit',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'left',
                                      },
                                      items: [
                                         {
                                             xtype: 'container',
                                             id: 'containerFloatPanel_AyohaeWallet_Setting_Security_SetDebitCreditLimit_TextDescription',
                                             width: '100%',
                                             margin: '15 0 0 0',
                                             // height: 80,
                                             layout: {
                                                 type: 'hbox',
                                                 pack: 'center',
                                                 align: 'left',
                                             },
                                             items: [
                                                 {
                                                     xtype: 'panel',
                                                     width: 22
                                                 },
                                                 {
                                                     html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Arial, sans-serif;font-size: 16px;font-weight:bold;color:black;">Set Spent Amount Limit</div><br><div style="width:90%;background-color: transparent;text-align:left;border: 1px none white;font-family:Arial, sans-serif;font-size: 12px;font-weight:bold;color:black;margin:-15px 0px 0px 0px;">Set Limit amount of your spent when purchase thing using this eWallet.Set 0 for unlimited amount.This amount can be adjusted at anytime</div>',

                                                 }
                                             ]
                                         },
                                          {
                                              margin: '10 0 0 25',
                                              html: '<font size=2 color=black>Spent Limit Amount(RM)</font>',
                                            //  html: '<div style="width:80%;background-color: transparent;text-align:center;border: 1px none white;font-family:Arial, sans-serif;font-size: 12px;font-weight:bold;color:black;">Spent Limit Amount(RM)</div>',
                                          },
                                                  {
                                                      xtype: 'panel',
                                                      height: 10
                                                  },

                {
                    //hidden: true,
                    id: 'htmlFloatPanel_AyohaeWallet_DebitLimitPerDay',
                    margin: '-5 0 0 25',
                    width: '82%',
                   // height: 20,
                    html: '<input type="number" id="input-FloatPanel_AyohaeWallet_DebitLimitPerDay" value="0"  style="border-color:black;color:black;width:100%;text-align: right;font-size:18px;font-weight:bold;">'


                },

                                  

                                      ]
                                  },


                                  //{
                                  //    xtype: 'list',
                                  //    width: '90%',
                                  //    //height: 300,
                                  //    height: '100%',
                                  //    // flex: 1,
                                  //    disableSelection: true,
                                  //    scrollable: {
                                  //        direction: 'vertical',
                                  //        indicators: {
                                  //            y: {
                                  //                autoHide: true
                                  //            },
                                  //            x: {
                                  //                autoHide: true
                                  //            }
                                  //        }
                                  //    },
                                  //    store: 'AyohaeWalletAccountSettingStore',
                                  //    id: 'FloatPanel_AyohaeWallet_SettingID',
                                  //    mode: 'SINGLE',
                                  //    style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                  //    itemTpl: '<div class="myContent" style="background-color:white;width:100%">' +
                                  // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:0px 0px 0px 0px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:15%;vertical-align:center;text-align:center;"><img src="{Icon}" style="border:1px none black; width:25px;height:25px;" /></td><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:72%;vertical-align:center;text-align:left;"><b>{AyohaeWalletAccountSettingName}</b></td><td style="font-family:Arial, sans-serif;font-size:24px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:10%;vertical-align:center;text-align:left">></td></tr></table>',
                                  //    //'<br>' +
                                  //    //    '<div style="width:104%;text-align:left;margin:-60px 0px 0px 10px;background-color:transparent;"><button  class="buttonsHtmlBgTransparent"><img src="resources/icons/backgroundTransparent.png" style="width: 23px; height: 23px; margin:0px 0px 0px 40px;" /></button></div>',
                                  //    emptyText: '<div class="myContent">Be the first to love this Merchant!</div>',
                                  //},

                              ]

                          },

                  ]

              },
             


                    ///////


                    








         ]







     });
    return _FloatPanel_AyohaeWallet_Setting;





}

function FloatPanel_AyohaeWallet_SettingShow() {


   
  

    if (localStorage.getItem("isUserHasEwalletAccount") == "Y") {
        FloatPanel_AyohaeWallet_PasscodeShow_SettingeWallet();
        globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule = "FloatPanel_AyohaeWallet_PasscodeShow_SettingeWallet";





       

        return;
    }


    Ext.Viewport.remove(_FloatPanel_AyohaeWallet_Setting);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet_Setting());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaeWallet_SettingHide()");
    isFloatPanel_AyohaeWallet_SettingOpen = 'Y';
    Ext.getCmp('tabpanelFloatPanel_AyohaeWallet_Setting_MasterContent').getTabBar().hide();
    FloatPanel_AyohaeWallet_Setting_tabpanelFloatPanel_AyohaeWallet_Setting_MasterContent_Index = 0;

   

    document.getElementById("input-FloatPanel_AyohaeWallet_SettingPassword").addEventListener("keyup", OnKeyUp_FloatPanel_AyohaeWallet_SettingPassword);
    document.getElementById("input-FloatPanel_AyohaeWallet_SettingConfirmPassword").addEventListener("keyup", OnKeyUp_FloatPanel_AyohaeWallet_SettingConfirmPassword);
    // var FloatPanel_AyohaeWallet_isUserHasEwalletAccount = localStorage.getItem("isUserHasEwalletAccount");

   

    


    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
        Ext.getCmp('LoadingFloatPanel_AyohaeWallet_SettingID').setZIndex(400);
    }

    var containerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Security = Ext.ComponentQuery.query('container[name=containerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Security]')[0];
    var containerViewElcontainerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Security = containerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Security.element;
    containerViewElcontainerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Security.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaeWallet_SettingMenu(1);
      }
    );



    var containerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Credit_and_Debit_Limit = Ext.ComponentQuery.query('container[name=containerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Credit_and_Debit_Limit]')[0];
    var containerViewElcontainerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Credit_and_Debit_Limit = containerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Credit_and_Debit_Limit.element;
    containerViewElcontainerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Credit_and_Debit_Limit.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaeWallet_SettingMenu(2);
      }
    );


    
   
}








function FloatPanel_AyohaeWallet_Setting_AyohaeWalletAccountSettingStore() {



    return;


   
    _DataStore_AyohaeWalletAccountSettingStore.getProxy().setUrl(GetAPIurl() + '/AyohaeWalletAccountSetting/AyohaeWalletAccountSettingload');
  




    var task = Ext.create('Ext.util.DelayedTask', function () {
       
        _DataStore_AyohaeWalletAccountSettingStore.load();


        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_AyohaeWalletAccountSettingStore.getCount();
        var Stores = _DataStore_AyohaeWalletAccountSettingStore.getAt(0);
        var icon = Stores.get('Icons');
        var txt = Stores.get('AyohaeWalletAccountSettingNames');
        console.log(icon);
        console.log(txt);

    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}














function FloatPanel_AyohaeWallet_SettingShow_UpdateEwalletAccount() {


   
   

    Ext.Viewport.remove(_FloatPanel_AyohaeWallet_Setting);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet_Setting());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaeWallet_SettingHide()");
    isFloatPanel_AyohaeWallet_SettingOpen = 'Y';
    Ext.getCmp('tabpanelFloatPanel_AyohaeWallet_Setting_MasterContent').getTabBar().hide();
    FloatPanel_AyohaeWallet_Setting_tabpanelFloatPanel_AyohaeWallet_Setting_MasterContent_Index = 0;
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Setting_Security_CreateNewAccount_Save').setHidden(true);
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Setting_Security_Update').setHidden(false);
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Setting_Security_UpdateDebitLimit').setHidden(true);



    document.getElementById("input-FloatPanel_AyohaeWallet_SettingPassword").addEventListener("keyup", OnKeyUp_FloatPanel_AyohaeWallet_SettingPassword);
    document.getElementById("input-FloatPanel_AyohaeWallet_SettingConfirmPassword").addEventListener("keyup", OnKeyUp_FloatPanel_AyohaeWallet_SettingConfirmPassword);
    // var FloatPanel_AyohaeWallet_isUserHasEwalletAccount = localStorage.getItem("isUserHasEwalletAccount");


    var containerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Security = Ext.ComponentQuery.query('container[name=containerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Security]')[0];
    var containerViewElcontainerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Security = containerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Security.element;
    containerViewElcontainerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Security.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaeWallet_SettingMenu(1);
      }
    );




    var containerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Credit_and_Debit_Limit = Ext.ComponentQuery.query('container[name=containerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Credit_and_Debit_Limit]')[0];
    var containerViewElcontainerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Credit_and_Debit_Limit = containerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Credit_and_Debit_Limit.element;
    containerViewElcontainerViewnamecontainerFloatPanel_AyohaeWallet_Setting_Credit_and_Debit_Limit.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaeWallet_SettingMenu(2);
      }
    );


}
function FloatPanel_AyohaeWallet_SettingShow_CreateNewAccount() {

    Ext.Viewport.remove(_FloatPanel_AyohaeWallet_Setting);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet_Setting());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaeWallet_SettingHide()");
    isFloatPanel_AyohaeWallet_SettingOpen = 'Y';
    Ext.getCmp('tabpanelFloatPanel_AyohaeWallet_Setting_MasterContent').getTabBar().hide();
    FloatPanel_AyohaeWallet_Setting_tabpanelFloatPanel_AyohaeWallet_Setting_MasterContent_Index = 0;
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Setting_Security_CreateNewAccount_Save').setHidden(false);
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Setting_Security_Update').setHidden(true);
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Setting_Security_UpdateDebitLimit').setHidden(true);
    



    document.getElementById("input-FloatPanel_AyohaeWallet_SettingPassword").addEventListener("keyup", OnKeyUp_FloatPanel_AyohaeWallet_SettingPassword);
    document.getElementById("input-FloatPanel_AyohaeWallet_SettingConfirmPassword").addEventListener("keyup", OnKeyUp_FloatPanel_AyohaeWallet_SettingConfirmPassword);
    Ext.getCmp('tabpanelFloatPanel_AyohaeWallet_Setting_MasterContent').setActiveItem(1);

}

function FloatPanel_AyohaeWallet_SettingHide() {
    if (isFloatPanel_AyohaeWallet_SettingOpen == 'Y') {
        _FloatPanel_AyohaeWallet_Setting.hide(); isFloatPanel_AyohaeWallet_SettingOpen = 'N';
        RemovePages("FloatPanel_AyohaeWallet_SettingHide()");
        FloatPanel_AyohaeWallet_Setting_tabpanelFloatPanel_AyohaeWallet_Setting_MasterContent_Index = 0;
        //  FloatPanel_RewardStoreHide();
    }

}




function FloatPanel_AyohaeWallet_SettingMenu(ID) {
    FloatPanel_AyohaeWallet_Setting_tabpanelFloatPanel_AyohaeWallet_Setting_MasterContent_Index = 1;
    if (ID == 1) {
        Ext.getCmp('tabpanelFloatPanel_AyohaeWallet_Setting_MasterContent').setActiveItem(1);
       
        Ext.getCmp('ContainerFloatPanel_AyohaeWallet_Setting_Security_SetDebitCreditLimit').setHidden(true);
        Ext.getCmp('ContainerFloatPanel_AyohaeWallet_Setting_Security_SeteWalletSecurity').setHidden(false);
        Ext.getCmp('ContainerFloatPanel_AyohaeWallet_Setting_Security_SetPassword').setHidden(false);
       
    }
    if (ID == 2) {
        Ext.getCmp('tabpanelFloatPanel_AyohaeWallet_Setting_MasterContent').setActiveItem(1);
        Ext.getCmp('ContainerFloatPanel_AyohaeWallet_Setting_Security_SetDebitCreditLimit').setHidden(false);
        Ext.getCmp('ContainerFloatPanel_AyohaeWallet_Setting_Security_SeteWalletSecurity').setHidden(true);
        Ext.getCmp('ContainerFloatPanel_AyohaeWallet_Setting_Security_SetPassword').setHidden(true);

    }
}


function onlyNumberKey(evt) {

    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

function OnKeyUp_FloatPanel_AyohaeWallet_SettingPassword() {
    var Password = document.getElementById('input-FloatPanel_AyohaeWallet_SettingPassword').value;
    var ConfirmPassword = document.getElementById('input-FloatPanel_AyohaeWallet_SettingConfirmPassword').value;

    //var x = document.getElementById("input-FloatPanel_AyohaeWallet_SettingPassword");
    //if (x.type === "number") {
    //    x.type = "password";
    //} if (x.type === "text") {
    //    x.type = "password";
    //}



    var numbers = /^[0-9]+$/;
    if (Password.match(numbers)) {
      
        console.log(Password)
        console.log(ConfirmPassword)


        if (Password) {

            if (Password.length < 6) {
                Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingPasswordMessage').setHidden(false);
                Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingPasswordMessage').setHtml('<div style="color:red;text-align: right;font-size:11px;width:100%;">Password cannot less than 6 charaters!</div>');
                return;

            }
            if (Password.length == 12) {
                Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingPasswordMessage').setHidden(false);
                Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingPasswordMessage').setHtml('<div style="color:red;text-align: right;font-size:11px;width:100%;">Password cannot more than 12 charaters!</div>');
                return;

            }

            else {
                Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingPasswordMessage').setHidden(true);
                if (Password != ConfirmPassword) {

                    if (ConfirmPassword) {
                        Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingConfirmPasswordMessage').setHidden(false);
                        Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingConfirmPasswordMessage').setHtml('<div class="blink_me"  style="color:red;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');
                        PasswordStatus = "Password Not is matched!";
                    }

                    // Ext.getCmp('btnFloatPanel_AyohaUserRegistrationConfirmPassword').setHidden(false);
                    // Ext.getCmp('btnFloatPanel_AyohaUserRegistrationConfirmPassword').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');
                }
                if (Password == ConfirmPassword) {
                    Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingConfirmPasswordMessage').setHidden(false);
                    Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingConfirmPasswordMessage').setHtml('<div class="blink_me" style="color:green;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');
                    // Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingConfirmPasswordMessage').setHidden(true);
                    PasswordStatus = "Password is matched!";
                }

            }
        }


    }
    else {
      //  alert('Please input numeric characters only');
        //  document.form1.text1.focus();
        swalFireFail('numeric characters only');
        var str = Password;
        str = str.slice(0, -1);
        document.getElementById('input-FloatPanel_AyohaeWallet_SettingPassword').value = str;
        document.getElementById("input-FloatPanel_AyohaeWallet_SettingPassword").focus();
        return false;
    }
   

   

    //    if (Password) {
           
    //    }
       

    //} else {
    //    Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingPasswordMessage').setHidden(true);
    //    Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingConfirmPasswordMessage').setHidden(true);
    //    Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingConfirmPasswordMessage').setHtml('<div class="blink_me" style="color:red;text-align: right;font-size:11px;width:100%;">Confirm Password Not Valid!</div>');
    //    PasswordStatus = "Confirm Password Not Valid!";
    //}

}

function OnKeyUp_FloatPanel_AyohaeWallet_SettingConfirmPassword() {
    var Password = document.getElementById('input-FloatPanel_AyohaeWallet_SettingPassword').value;
    var ConfirmPassword = document.getElementById('input-FloatPanel_AyohaeWallet_SettingConfirmPassword').value;


  

    if (ConfirmPassword) {
        if (Password != ConfirmPassword) {
            
            Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingConfirmPasswordMessage').setHidden(false);
            Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingConfirmPasswordMessage').setHtml('<div class="blink_me"  style="color:red;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');
            PasswordStatus = "Password Not is matched!";
            // Ext.getCmp('btnFloatPanel_AyohaUserRegistrationConfirmPassword').setHidden(false);
            // Ext.getCmp('btnFloatPanel_AyohaUserRegistrationConfirmPassword').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');
        }
        if (Password == ConfirmPassword) {
            Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingConfirmPasswordMessage').setHidden(false);
            Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingConfirmPasswordMessage').setHtml('<div class="blink_me" style="color:green;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');
          //  Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingConfirmPasswordMessage').setHidden(true);
            PasswordStatus = "Password is matched!";
        }

    } else {

        Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingConfirmPasswordMessage').setHidden(true);
        Ext.getCmp('htmFloatPanel_AyohaeWallet_SettingConfirmPasswordMessage').setHtml('<div class="blink_me" style="color:red;text-align: right;font-size:11px;width:100%;">Confirm Password Not Valid!</div>');
        PasswordStatus = "Confirm Password Not Valid!";
    }

}


var globalFloatPanel_AyohaeWallet_Setting_DeviceIDDetection = "N";
var globalFloatPanel_AyohaeWallet_Setting_EnableTACCode = "N";

function FloatPanel_AyohaeWallet_Setting_Insert() {
   
    var Passcode = document.getElementById('input-FloatPanel_AyohaeWallet_SettingPassword').value;
    var ConfirmPasscode = document.getElementById('input-FloatPanel_AyohaeWallet_SettingConfirmPassword').value;
    var DebitLimitPerDay = document.getElementById('input-FloatPanel_AyohaeWallet_DebitLimitPerDay').value;

    var cc = Ext.getCmp('checkboxFloatPanel_AyohaeWallet_Setting_Security_SeteWalletSecurity_EnableDeviceID').getChecked();
    if (cc == true) {
        globalFloatPanel_AyohaeWallet_Setting_DeviceIDDetection = "Y";
    } else {
        globalFloatPanel_AyohaeWallet_Setting_DeviceIDDetection = "N";
    }


    var bb = Ext.getCmp('checkboxFloatPanel_AyohaeWallet_Setting_Security_SeteWalletSecurity_EnableTAC').getChecked();
    if (bb == true) {
        globalFloatPanel_AyohaeWallet_Setting_EnableTACCode = "Y";
    } else {
        globalFloatPanel_AyohaeWallet_Setting_EnableTACCode = "N";
    }

    //globalFloatPanel_AyohaeWallet_Setting_DeviceIDDetection = Ext.getCmp('checkboxFloatPanel_AyohaeWallet_Setting_Security_SeteWalletSecurity_EnableDeviceID').getChecked();
    //globalFloatPanel_AyohaeWallet_Setting_EnableTACCode = Ext.getCmp('checkboxFloatPanel_AyohaeWallet_Setting_Security_SeteWalletSecurity_EnableTAC').getChecked();
    

  
    if (DebitLimitPerDay) {
        DebitLimitPerDay = DebitLimitPerDay;
    } else {
        DebitLimitPerDay = 0;
    }



    if (Passcode) {

    } else {
        swalFireFail("Password Not Valid !");
        return;
    }


    if (ConfirmPasscode) {

    } else {
        swalFireFail("Password Not Valid !");
        return;
    }
   
    LoadingPanelShow("resources/icons/ewalletprocess.gif", "Creating eWallet...");
    var task = Ext.create('Ext.util.DelayedTask', function () {
        var objn = {
            "eWalletAccNo": GetCurrAyohaUserAccountNo(),
            "eWalletType": 'Client',
            "DebitLimitPerDay": DebitLimitPerDay,
            "PassCode": Passcode,
            "isUsedDeviceID_Detection": globalFloatPanel_AyohaeWallet_Setting_DeviceIDDetection,
            "isUsedTAC_Code": globalFloatPanel_AyohaeWallet_Setting_EnableTACCode,
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaeWallet/AyohaeWalletInsert',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                   
                    FloatPanel_AyohaeWallet_SettingHide();
                    FloatPanel_AyohaStore_CheckOut_PlayAyohaPointSound();
                    FloatPanel_AyohaStore_CartHide();
                    FloatPanel_AyohaStore_CheckOutHide();
                    FloatPanel_AyohaStore_SaleItemDetailHide();
                    FloatPanel_AyohaStoreHide();
                    // swalFireSuccesDynamicIconWithMessage("resources/icons/orderplacedAnim.gif", "Order has been submit successfully!");
                   
                    FloatPanel_AyohaeWallet_Setting_LoadAyohaEwallet();


                  
                    //if (isFloatPanel_AyohaeWalletOpen == 'N') {
                    //    FloatPanel_AyohaeWalletShow();
                    //}
                }
                else {

                    swalFireFail("Fail!-->" + result.responseText.trim());
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail!." + result.responseText.trim());
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });
        LoadingPanelHide();
        Ext.Viewport.unmask();
    });
    task.delay(1000);
}

function FloatPanel_AyohaeWallet_Setting_Update() {

    var Passcode = document.getElementById('input-FloatPanel_AyohaeWallet_SettingPassword').value;
    var ConfirmPasscode = document.getElementById('input-FloatPanel_AyohaeWallet_SettingConfirmPassword').value;

    var cc = Ext.getCmp('checkboxFloatPanel_AyohaeWallet_Setting_Security_SeteWalletSecurity_EnableDeviceID').getChecked();
    if (cc == true) {
        globalFloatPanel_AyohaeWallet_Setting_DeviceIDDetection = "Y";
    } else {
        globalFloatPanel_AyohaeWallet_Setting_DeviceIDDetection = "N";
    }


    var bb = Ext.getCmp('checkboxFloatPanel_AyohaeWallet_Setting_Security_SeteWalletSecurity_EnableTAC').getChecked();
    if (bb == true) {
        globalFloatPanel_AyohaeWallet_Setting_EnableTACCode = "Y";
    } else {
        globalFloatPanel_AyohaeWallet_Setting_EnableTACCode = "N";
    }

    //globalFloatPanel_AyohaeWallet_Setting_DeviceIDDetection = Ext.getCmp('checkboxFloatPanel_AyohaeWallet_Setting_Security_SeteWalletSecurity_EnableDeviceID').getChecked();
    //globalFloatPanel_AyohaeWallet_Setting_EnableTACCode = Ext.getCmp('checkboxFloatPanel_AyohaeWallet_Setting_Security_SeteWalletSecurity_EnableTAC').getChecked();



    



    if (Passcode) {

    } else {
        swalFireFail("Password Not Valid !");
        return;
    }


    if (ConfirmPasscode) {

    } else {
        swalFireFail("Password Not Valid !");
        return;
    }
  
    LoadingPanelShow("resources/icons/ewalletprocess.gif", "Updating...");
    var task = Ext.create('Ext.util.DelayedTask', function () {
        var objn = {
            "eWalletAccNo": GetCurrAyohaUserAccountNo(),
            "PassCode": Passcode,
            "isUsedDeviceID_Detection": globalFloatPanel_AyohaeWallet_Setting_DeviceIDDetection,
            "isUsedTAC_Code": globalFloatPanel_AyohaeWallet_Setting_EnableTACCode,
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaeWallet/AyohaeWalletUpdate',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    FloatPanel_AyohaeWallet_SettingHide();
                   // FloatPanel_AyohaStore_CheckOut_PlayAyohaPointSound();
                    FloatPanel_AyohaStore_CartHide();
                    FloatPanel_AyohaStore_CheckOutHide();
                    FloatPanel_AyohaStore_SaleItemDetailHide();
                    FloatPanel_AyohaStoreHide();
                    // swalFireSuccesDynamicIconWithMessage("resources/icons/orderplacedAnim.gif", "Order has been submit successfully!");

                   // FloatPanel_AyohaeWallet_Setting_LoadAyohaEwallet();

                    FloatPanel_AyohaeWallet_Setting_LoadAyohaEwallet_AfterUpdate();

                    //if (isFloatPanel_AyohaeWalletOpen == 'N') {
                    //    FloatPanel_AyohaeWalletShow();
                    //}
                }
                else {

                    swalFireFail("Fail!-->" + result.responseText.trim());
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail!." + result.responseText.trim());
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });
        LoadingPanelHide();
        Ext.Viewport.unmask();
    });
    task.delay(1000);
}

function FloatPanel_AyohaeWallet_Setting_UpdateDebitLimit() {

   
    var DebitLimitPerDay = document.getElementById('input-FloatPanel_AyohaeWallet_DebitLimitPerDay').value;

   


    if (DebitLimitPerDay) {
        DebitLimitPerDay = DebitLimitPerDay;
    } else {
        DebitLimitPerDay = 0;
    }



    if (Passcode) {

    } else {
        swalFireFail("Password Not Valid !");
        return;
    }


    if (ConfirmPasscode) {

    } else {
        swalFireFail("Password Not Valid !");
        return;
    }

    LoadingPanelShow("resources/icons/ewalletprocess.gif", "Update eWallet...");
    var task = Ext.create('Ext.util.DelayedTask', function () {
        var objn = {
            "eWalletAccNo": GetCurrAyohaUserAccountNo(),
            "DebitLimitPerDay": DebitLimitPerDay
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaeWallet/AyohaeWalletUpdateDebitLimit',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    FloatPanel_AyohaeWallet_SettingHide();
                   // FloatPanel_AyohaStore_CheckOut_PlayAyohaPointSound();
                    FloatPanel_AyohaStore_CartHide();
                    FloatPanel_AyohaStore_CheckOutHide();
                    FloatPanel_AyohaStore_SaleItemDetailHide();
                    FloatPanel_AyohaStoreHide();
                    // swalFireSuccesDynamicIconWithMessage("resources/icons/orderplacedAnim.gif", "Order has been submit successfully!");

                   // FloatPanel_AyohaeWallet_Setting_LoadAyohaEwallet();

                    FloatPanel_AyohaeWallet_Setting_LoadAyohaEwallet_AfterUpdate();

                    //if (isFloatPanel_AyohaeWalletOpen == 'N') {
                    //    FloatPanel_AyohaeWalletShow();
                    //}
                }
                else {

                    swalFireFail("Fail!-->" + result.responseText.trim());
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail!." + result.responseText.trim());
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });
        LoadingPanelHide();
        Ext.Viewport.unmask();
    });
    task.delay(1000);
}
















function FloatPanel_AyohaeWallet_Setting_LoadAyohaEwallet() {
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "eWalletAccNo": GetCurrAyohaUserAccountNo()
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaeWallet/AyohaeWalletLoadeWallet',

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
                        globalDashboardeWalletType = data.results[0].eWalletType;
                        globalDashboardeWalletStatus = data.results[0].eWalletStatus;
                        globalDashboardCreditLimitPerDay = data.results[0].CreditLimitPerDay;
                        globalDashboardDebitLimitPerDay = data.results[0].DebitLimitPerDay;
                        globalDashboardeWalletCurrentBalance = data.results[0].eWalletCurrentBalance;
                        localStorage.setItem("DashboardeWalletCurrentBalance", data.results[0].eWalletCurrentBalance);
                        localStorage.setItem("isUserHasEwalletAccount", "Y");                      
                        localStorage.setItem("AyohaeWalletDeviceID", data.results[0].DeviceID);
                        localStorage.setItem("AyohaeWalletisUsedDeviceID_Detection", data.results[0].isUsedDeviceID_Detection);
                        localStorage.setItem("AyohaeWalletisUsedTAC_Code", data.results[0].isUsedTAC_Code);
                        localStorage.setItem("AyohaeWalletPassCode", data.results[0].PassCode);
                        globalDashboardisUserHasEwalletAccount = "Y";
                        swalFireDynamicIconWithMessage("resources/icons/ayohaewallet01.png", "Ayoha eWallet created successfully!.RM " + data.results[0].eWalletCurrentBalance + " has been credited into your account.", "black", "#9932cc");
                        if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
                            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet_CurrentBalanceAmount').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 30px;font-weight:bold;color:#c800ffc9;margin:0px 0px 0px 0px">RM ' + globalDashboardeWalletCurrentBalance + '</div>');

                        }

                        if (isFloatPanel_AyohaStoreOpen == 'Y') {
                            Ext.getCmp('htmlFloatPanel_AyohaStore_TitleHeaderTxtAyohaEwallet').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:black;margin:-3px 0px 0px 0px">Ayoha e-Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-24px 0px 0px 0px">RM ' + globalDashboardeWalletCurrentBalance + '</div>');

                        }
                        Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwallet').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha e-Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">RM' + globalDashboardeWalletCurrentBalance + '</div>');


                        // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'
                        var task = Ext.create('Ext.util.DelayedTask', function () {



                            FloatPanel_AyohaStore_AyohaPointCollectedAnimShow();
                            Ext.Viewport.setMasked(false);



                        });
                        task.delay(500);


                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {
                        globalDashboardisUserHasEwalletAccount = "N";
                        localStorage.setItem("isUserHasEwalletAccount", "N");
                        Ext.Viewport.unmask();

                    }





                }
                else {


                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
            }

        });



    });

    //  Ext.Viewport.unmask();

    //   setDashBoardMerchantReviewRate(FiveStar, FourStar, ThreeStar, TwoStar, OneStar);
    task.delay(500);
}






function FloatPanel_AyohaeWallet_Setting_LoadAyohaEwallet_AfterUpdate() {
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "eWalletAccNo": GetCurrAyohaUserAccountNo()
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaeWallet/AyohaeWalletLoadeWallet',

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
                        globalDashboardeWalletType = data.results[0].eWalletType;
                        globalDashboardeWalletStatus = data.results[0].eWalletStatus;
                        globalDashboardCreditLimitPerDay = data.results[0].CreditLimitPerDay;
                        globalDashboardDebitLimitPerDay = data.results[0].DebitLimitPerDay;
                        globalDashboardeWalletCurrentBalance = data.results[0].eWalletCurrentBalance;
                        localStorage.setItem("DashboardeWalletCurrentBalance", data.results[0].eWalletCurrentBalance);
                        localStorage.setItem("isUserHasEwalletAccount", "Y");
                        localStorage.setItem("AyohaeWalletDeviceID", data.results[0].DeviceID);
                        localStorage.setItem("AyohaeWalletisUsedDeviceID_Detection", data.results[0].isUsedDeviceID_Detection);
                        localStorage.setItem("AyohaeWalletisUsedTAC_Code", data.results[0].isUsedTAC_Code);
                        localStorage.setItem("AyohaeWalletPassCode", data.results[0].PassCode);
                        globalDashboardisUserHasEwalletAccount = "Y";
                       // swalFireDynamicIconWithMessage("resources/icons/ayohaewallet01.png", "Ayoha eWallet created successfully!.RM " + data.results[0].eWalletCurrentBalance + " has been credited into your account.", "black", "#9932cc");
                        if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
                            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet_CurrentBalanceAmount').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 30px;font-weight:bold;color:#c800ffc9;margin:0px 0px 0px 0px">RM ' + globalDashboardeWalletCurrentBalance + '</div>');

                        }

                        if (isFloatPanel_AyohaStoreOpen == 'Y') {
                            Ext.getCmp('htmlFloatPanel_AyohaStore_TitleHeaderTxtAyohaEwallet').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:black;margin:-3px 0px 0px 0px">Ayoha e-Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-24px 0px 0px 0px">RM ' + globalDashboardeWalletCurrentBalance + '</div>');

                        }
                        Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwallet').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha e-Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">RM' + globalDashboardeWalletCurrentBalance + '</div>');


                        // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'
                      


                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {
                        globalDashboardisUserHasEwalletAccount = "N";
                        localStorage.setItem("isUserHasEwalletAccount", "N");
                        Ext.Viewport.unmask();

                    }





                }
                else {


                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
            }

        });



    });

    //  Ext.Viewport.unmask();

    //   setDashBoardMerchantReviewRate(FiveStar, FourStar, ThreeStar, TwoStar, OneStar);
    task.delay(500);
}