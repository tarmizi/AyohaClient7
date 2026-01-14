Ext.define('BuskartApp.view.MyAccount.FloatPanel_MyAccountRankDescription', {

});

var _FloatPanel_MyAccountRankDescription;


var isFloatPanel_MyAccountRankDescriptionOpen = 'N';





function FloatPanel_MyAccountRankDescription() {

    _FloatPanel_MyAccountRankDescription =
    Ext.create('Ext.Panel', {
        zIndex: 115,
        xtype: 'container',
        //height: 465,
        //  height: '100%',
        width: '100%',
        id: 'FloatPanel_MyAccountRankDescriptionID',
        draggable: false,

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
            //type: 'slideOut',
            //direction: 'left',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            //duration: 250


            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        // style: 'border-bottom:1px solid;background-color:white;',
        //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
        style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            RemovePages("FloatPanel_MyAccountRankDescriptionHide()");
                            isFloatPanel_MyAccountRankDescriptionOpen = 'N';
                            _FloatPanel_MyAccountRankDescription.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                        } if (e.direction == "right") {
                            isFloatPanel_MyAccountRankDescriptionOpen = 'N';
                            RemovePages("FloatPanel_MyAccountRankDescriptionHide()");
                            _FloatPanel_MyAccountRankDescription.hide(Ext.fx.Animation({
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

        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
                //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                layout: {
                    type: 'fit',

                },
                items: [
                    {
                        xtype: 'container',


                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        items: [
                            {

                                xtype: 'container',
                                width: '100%',
                                margin: '10 0 0 0',
                                //  docked: 'top',
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_MyAccountRankDescriptionHeader',
                                //style: {
                                //    // background: '#D25959',
                                //    background: 'transparent',
                                //    // border: '2px'
                                //},
                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                style: 'border-bottom:2px none #D25959;background-color:transparent',
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
                                                         id: 'btnFloatPanel_MyAccountRankDescriptionBack',
                                                         margin: '0 0 0 10',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             // FloatPanel_MyAccountRankDescriptionHide();
                                                             // FloatPanel_MyAccountRankDescription_AddCardHide();
                                                             isFloatPanel_MyAccountRankDescriptionOpen = 'N';
                                                             _FloatPanel_MyAccountRankDescription.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             RemovePages("FloatPanel_MyAccountRankDescriptionHide()");
                                                             //  FloatPanel_MyAccountRankDescription_AddCardHide();

                                                         }
                                                     },

                                                      {
                                                          xtype: 'spacer',

                                                      },


                                                      {
                                                          margin: '0 10 0 0',
                                                          id: 'htmlFloatPanel_MyAccountRankDescription_TitleHeaderTxt',
                                                          html: '<font size=2 color=white><b>Ayoha Membership Tier</b></font>'
                                                      },


                                                            {
                                                                xtype: 'button',
                                                                id: 'btnFloatPanel_MyAccountRankDescription_CardIcon',
                                                                height: 30,
                                                                hidden:true,
                                                                width: 35,
                                                                margin: '-4 0 0',
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/ranking03.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                    isFloatPanel_MyAccountRankDescriptionOpen = 'N';

                                                                    _FloatPanel_MyAccountRankDescription.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    RemovePages("FloatPanel_MyAccountRankDescriptionHide()");
                                                                    //FloatPanel_MyAccountRankDescription_AddCardHide();
                                                                }
                                                            },









                                       ]

                            },
                            {
                                xtype: 'container',
                                width: '100%',
                                height: 10,
                                //  docked: 'top',
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_MyAccountRankDescriptionHeader01',
                                //style: {
                                //    // background: '#D25959',
                                //    background: 'transparent',
                                //    // border: '2px'
                                //},
                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                style: 'border-bottom:2px none #D25959;background-color:transparent',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'right',
                                },
                                items: [
                                     {
                                         margin: '-5 0 0 0',
                                         hidden: true,
                                         id: 'htmlFloatPanel_MyAccountRankDescriptionHeaderJoinedDate',
                                         html: '<div style="color:#FDFEFE;text-align: center;font-size:9px;width:100%;">Joined Date:22/5/2021</div>'
                                     },

                                ]

                            },

                              {
                                  xtype: 'container',
                                  width: '100%',
                                  height: 1,
                                  zIndex: 200,
                                  hidden:true,
                                  //  docked: 'top',
                                  // width: 40,

                                  //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                  //hidden: true,
                                  name: 'containerFloatPanel_MyAccountRankDescriptionHeader02_name',
                                  id: 'containerFloatPanel_MyAccountRankDescriptionHeader02',
                                  //style: {
                                  //    // background: '#D25959',
                                  //    background: 'transparent',
                                  //    // border: '2px'
                                  //},
                                  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                  style: 'border-bottom:2px none #D25959;background-color:transparent',
                                  layout: {
                                      type: 'hbox',
                                      pack: 'left',
                                      align: 'left',
                                  },
                                  items: [
                                      {
                                          xtype: 'spacer',
                                          width: 20
                                      },

                                                {
                                                    margin: '0 0 0 0',
                                                    id: 'htmlRankingTopTenCongrulation',
                                                    html: '<div class="blink_me" style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;" >Congrulations!!<br><div style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-2px 0px 0px 8px;" >1st Ranking</div></div><br><div style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-85px 0px 0px 5px;" ><img src="resources/icons/ayohaReward01.gif"  style="width: 70px; height: 70px;"></div>',

                                                },
                                                  {
                                                      margin: '0 0 0 5',
                                                      id: 'htmlRankingTopTenCongrulationRankImg',
                                                      html: '<img src="resources/icons/firstRank01.png"  style="width: 36px; height: 36px;">',
                                                  }

                                  ]

                              },




                            {
                                xtype: 'container',
                                width: '100%',
                                height: 190,
                                margin: '0 0 0 0',
                                id: 'containerFloatPanel_MyAccountRankDescriptionBar',
                                //style: {
                                //    // background: '#D25959',
                                //    background: 'rgba(76, 175, 80, 0.3);',
                                //    // border: '2px'
                                //},
                                // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
                               style: 'background-color:transparent;border-bottom:2px none white;',
                               // style: 'background-image: url("resources/icons/splashRankingBg.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center',
                                },

                                items: [
                                     {
                                         margin: '-10 0 0 0',
                                         id: 'htmlFloatPanel_MyAccountRankDescriptionRangkingContestantImg',
                                         html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:100px;height:100px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/Logo/LogoWhiteSimplifed.png"  style="width: 100px; height: 100px; border:2px none white;  margin:-6px 0px 0px 0px"></div>',
                                     },

                                      {
                                          margin: '-5 0 0 0',
                                          id: 'htmlFloatPanel_MyAccountRankDescriptionRangkingContestantName',
                                          html: '<font size=2 color=white><b>Non Ayoha Member</b></font>',
                                      },

                                      {
                                          margin: '0 0 0 0',
                                          id: 'htmlFloatPanel_MyAccountRankDescriptionYourRangkingTxt',
                                          html: '<div style="color:white;text-align: center;font-size:12px;width:100%;">Your ayoha membership tier</div>'
                                      },
                                        {
                                            margin: '-20 0 0 0',
                                          //  hidden: true,
                                            id: 'htmlFloatPanel_MyAccountRankDescriptionYourRangking',
                                            html: '<div style="color:white;text-align: center;font-size:70px;width:100%;"><b>Welcome !</b></div>'
                                        },
{
    xtype: 'container',
                                width: '100%',
                                height: 40,
                                margin: '10 0 0 0',
                                id: 'containerFloatPanel_MyAccountRankStatusBox',
                                hidden: true,
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center',
    },items:[
        {
            id: 'FloatPanel_MyAccountRankDescriptionYourRangkingStatusBox',
            name: 'nameFloatPanel_MyAccountRankDescriptionYourRangkingStatusBox',
           // margin: '-7 0 0 25',
           margin: '0 0 0 0',
            width: '50%',
            height: 40,
            html: '<div onclick="FloatPanel_AyohaMembershipAdvantagesShow();" class="blink_me"  style="width:100%;background-color: orange;text-align:center;vertical-align:middle;border: 1px solid orange;font-size: 12px;font-weight:bold;color:white;height:40px;vertical-align:middle;border-radius: 5px 5px 5px 5px;"><div style="margin:10px 0px 0px 0px;">Be An Ayoha Member Now!</div></div>',
        },
    ]
},
                                       
                 

                                      //{
                                      //    margin: '-20 0 0 0',
                                      //    html: '<font size=2 color=white><b><u>250 Ayoha Points</u></b></font>',
                                      //  //  html: '<div style="color:#FDFEFE;text-align: center;font-size:12px;width:100%;">250 Ayoha Points</div>'
                                      //},


                                        {

                                            xtype: 'container',

                                            width: '100%',
                                            height: 35,
                                            hidden:true,
                                            margin: '-30 0 0 0',
                                            id: 'containerFloatPanel_MyAccountRankDescriptionAyohaPointTransactionID',
                                            name: 'containerFloatPanel_MyAccountRankDescriptionAyohaPointTransaction',
                                            //style: {
                                            //    // background: '#D25959',
                                            //    background: 'rgba(76, 175, 80, 0.3);',
                                            //    // border: '2px'
                                            //},
                                            // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
                                            style: 'background-color:transparent;',

                                            // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 15px 15px 15px 15px;',
                                            layout: {
                                                type: 'hbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            items: [

                                                //{
                                                //    margin: '0 0 0 0',
                                                //    html: '<img src="resources/icons/rankingpurple01.png"  style="width: 30px; height: 30px;   margin:-6px 0px 0px 10px;">',

                                                //},

                                                {
                                                    margin: '0 0 0 55',
                                                    id: 'htmlRankingAyohaPointCount',
                                                    html: '<font size=2 color=white><b>250 Ayoha Points</b></font>',
                                                },
                                                  {
                                                      margin: '8 0 0 30',
                                                     // hidden:true,
                                                      html: '<img src="resources/icons/transparentbox.png"  style="width: 20px; height: 20px;   margin:-6px 0px 0px 0px;">',
                                                  }


                                            ]
                                        },

                                          {
                                              margin: '-400 0 0 -125',
                                              zIndex: -100,
                                            //hidden:true,
                                              //html: '<div style="color:#FDFEFE;text-align: center;font-size:12px;width:100%;"><img src="resources/icons/splashbg04.png" width="100%" height="500px" alt="Company Name"></div>'
                                              html: '<img src="resources/icons/sparkle.gif" width="600px" height="600px" alt="Company Name">'
                                          },
                                ]
                            },

                              {
                                  xtype: 'container',
                                  width: '100%',
                                  height: 90,
                                  docked: 'bottom',
                                  id: 'containerFloatPanel_MyAccountRankDescriptionBottomx',
                                  style: 'background-color:white;',
                                  layout: {
                                      type: 'hbox',
                                      pack: 'center',
                                      align: 'center'
                                  }, items: [
                                      {
                                          xtype: 'container',
                                          flex:1,
                                          // margin: '30 0 0 0',
                                          id: 'containerFloatPanel_MyAccountRankDescriptionBottom_BlackIron',
                                          name: 'namecontainerFloatPanel_MyAccountRankDescriptionBottom_BlackIron',
                                          style: 'background-color:white;',
                                          layout: {
                                              type: 'vbox',
                                              pack: 'center',
                                              align: 'center'
                                          },
                                          items: [

                                              {
                                                  width: 20,
                                                  height: 20,
                                                  id: 'htmlFloatPanel_MyAccountRankDescriptionBottom_BlackIronIcon',
                                                  html:'<img src="resources/icons/ayohaRankingIcon/BlackIroni.png" alt="Image" style="width:20px;height:20px;">',
                                              },
                                              {
                                                 
                                                 // height: 30,
                                                  id: 'htmlFloatPanel_MyAccountRankDescriptionBottom_BlackIronTxt',
                                                  html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Black Iron</div>'
                                              }
                                          ]
                                      },
                                      {
                                          xtype: 'container',
                                          flex: 1,
                                          // margin: '30 0 0 0',
                                          id: 'containerFloatPanel_MyAccountRankDescriptionBottom_Bronze',
                                          name: 'namecontainerFloatPanel_MyAccountRankDescriptionBottom_Bronze',
                                          style: 'background-color:white;',
                                          layout: {
                                              type: 'vbox',
                                              pack: 'center',
                                              align: 'center'
                                          },
                                          items: [

                                              {
                                                  width: 25,
                                                  height: 25,
                                                  id: 'htmlFloatPanel_MyAccountRankDescriptionBottom_BronzeIcon',
                                                  html: '<img src="resources/icons/ayohaRankingIcon/Bronze.png" alt="Image" style="width:25px;height:25px;">',
                                              },
                                              {

                                                  //height: 30,
                                                  id: 'htmlFloatPanel_MyAccountRankDescriptionBottom_BronzeTxt',
                                                  html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Bronze</div>'
                                              }
                                          ]
                                      },

                                      {
                                          xtype: 'container',
                                          flex: 1,
                                          // margin: '30 0 0 0',
                                          id: 'containerFloatPanel_MyAccountRankDescriptionBottom_Silver',
                                          name: 'namecontainerFloatPanel_MyAccountRankDescriptionBottom_Silver',
                                          style: 'background-color:white;',
                                          layout: {
                                              type: 'vbox',
                                              pack: 'center',
                                              align: 'center'
                                          },
                                          items: [

                                              {
                                                  width: 30,
                                                  height: 30,
                                                  id: 'htmlFloatPanel_MyAccountRankDescriptionBottom_SilverIcon',
                                                  html: '<img src="resources/icons/ayohaRankingIcon/Silver.png" alt="Image" style="width:30px;height:30px;">',
                                              },
                                              {

                                                 // height: 30,
                                                  id: 'htmlFloatPanel_MyAccountRankDescriptionBottom_SilverTxt',
                                                  html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Silver</div>'
                                              }
                                          ]
                                      },



                                      {
                                          xtype: 'container',
                                          flex: 1,
                                          // margin: '30 0 0 0',
                                          id: 'containerFloatPanel_MyAccountRankDescriptionBottom_Gold',
                                          name: 'namecontainerFloatPanel_MyAccountRankDescriptionBottom_Gold',
                                          style: 'background-color:white;',
                                          layout: {
                                              type: 'vbox',
                                              pack: 'center',
                                              align: 'center'
                                          },
                                          items: [

                                              {
                                                  width: 35,
                                                  height: 35,
                                                  id: 'htmlFloatPanel_MyAccountRankDescriptionBottom_GoldIcon',
                                                  html: '<img src="resources/icons/ayohaRankingIcon/Gold.png" alt="Image" style="width:35px;height:35px;">',
                                              },
                                              {

                                                 // height: 30,
                                                  id: 'htmlFloatPanel_MyAccountRankDescriptionBottom_GoldTxt',
                                                  html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Gold</div>'
                                              }
                                          ]
                                      },



                                      {
                                          xtype: 'container',
                                          flex: 1,
                                          // margin: '30 0 0 0',
                                          id: 'containerFloatPanel_MyAccountRankDescriptionBottom_Platinum',
                                          name: 'namecontainerFloatPanel_MyAccountRankDescriptionBottom_Platinum',
                                          style: 'background-color:white;',
                                          layout: {
                                              type: 'vbox',
                                              pack: 'center',
                                              align: 'center'
                                          },
                                          items: [

                                              {
                                                  width: 40,
                                                  height: 40,
                                                  id: 'htmlFloatPanel_MyAccountRankDescriptionBottom_PlatinumIcon',
                                                  html: '<img src="resources/icons/ayohaRankingIcon/Platinum.png" alt="Image" style="width:40px;height:40px;">',
                                              },
                                              {

                                                  //height: 30,
                                                  id: 'htmlFloatPanel_MyAccountRankDescriptionBottom_PlatinumTxt',
                                                  html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Platinum</div>'
                                              }
                                          ]
                                      },



                                           {
                                               xtype: 'container',
                                               flex: 1,
                                               // margin: '30 0 0 0',
                                               id: 'containerFloatPanel_MyAccountRankDescriptionBottom_KingClub',
                                               name:'namecontainerFloatPanel_MyAccountRankDescriptionBottom_KingClub',
                                               style: 'background-color:white;',
                                               layout: {
                                                   type: 'vbox',
                                                   pack: 'center',
                                                   align: 'center'
                                               },
                                               items: [

                                                   {
                                                       width: 55,
                                                       height: 55,
                                                       id: 'htmlFloatPanel_MyAccountRankDescriptionBottom_KingClubIcon',
                                                       html: '<img src="resources/icons/ayohaRankingIcon/kingclubIcon.png" alt="Image" style="width:50px;height:50px;margin:-10px 0px 0px 3px;">',
                                                   },
                                                   {

                                                       // height: 30,
                                                       
                                                       id: 'htmlFloatPanel_MyAccountRankDescriptionBottom_KingClubTxt',
                                                       html: '<div style="color:black;text-align: center;font-size:10px;width:100%;margin:-16px 0px 0px 0px;">King Club</div>'
                                                   }
                                               ]
                                           },
                                  ]
                              },

                            {
                                xtype: 'container',
                                width: '100%',
                                // height: '100%',
                                margin: '0 0 0 0',
                                id: 'containerFloatPanel_MyAccountRankDescriptionListOutter',
                                //style: {
                                //    // background: '#D25959',
                                //    background: 'rgba(76, 175, 80, 0.3);',
                                //    // border: '2px'
                                //},
                                // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
                                // style: 'background-color:transparent;border-bottom:2px solid white;',
                                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 20px 20px 0px 0px;',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center',
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
                                        height: 40,
                                        docked: 'top',
                                        // margin: '30 0 0 0',
                                        id: 'containerFloatPanel_MyAccountRankDescriptionTop',
                                        // name: 'namecontainerFloatPanel_MyAccountRankDescriptionList04',
                                        //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                        // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                                        style: 'background-color:transparent;',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'center',
                                            align: 'center'
                                        },
                                        items: [

                                           {

                                               xtype: 'container',
                                               width: 175,
                                               height: 40,
                                               margin: '-20 0 0 0',
                                               name: 'containerFloatPanel_MyAccountRankDescriptionMyRankingBtn',
                                               hidden:true,
                                               //style: {
                                               //    // background: '#D25959',
                                               //    background: 'rgba(76, 175, 80, 0.3);',
                                               //    // border: '2px'
                                               //},
                                               // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
                                               // style: 'background-color:transparent;',
                                               style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;',
                                               layout: {
                                                   type: 'hbox',
                                                   pack: 'center',
                                                   align: 'center',
                                               },
                                               items: [
                                                   {
                                                       margin: '0 0 0 0',
                                                       html: '<font size=2 color=white>Top 10 Ranking</font>',
                                                   },
                                                    {
                                                        margin: '8 0 0 0',
                                                        html: '<img src="resources/icons/top10icon.png"  style="width: 30px; height: 30px;   margin:-6px 0px 0px 10px;">',
                                                    }


                                               ]
                                           },




                                                  {

                                                      xtype: 'container',
                                                      width: '100%',
                                                      height: 40,
                                                      margin: '0 0 0 0',
                                                      name: 'containerFloatPanel_MyAccountRankDescriptionMyRankingHeader',
                                                      //style: {
                                                      //    // background: '#D25959',
                                                      //    background: 'rgba(76, 175, 80, 0.3);',
                                                      //    // border: '2px'
                                                      //},
                                                      // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
                                                      style: 'background-color:transparent;',
                                                      //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;',
                                                      layout: {
                                                          type: 'hbox',
                                                          pack: 'left',
                                                          align: 'left',
                                                      },
                                                      items: [

                                                          {
                                                              margin: '10 0 0 20',
                                                              //  html: '<font size=2 color=black><u>Reward</u></font>',
                                                              id: 'htmlFloatPanel_MyAccountRankDescriptionMyRankingHeader',
                                                              html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;">Ayoha Membership Tier Descriptions</div>'
                                                          },
                                                         
                                                          


                                                      ]
                                                  },
                                           //{
                                           //    xtype: 'container',
                                           //    width: '100%',
                                           //    height: 50,
                                           //    margin: '0 0 0 0',
                                           //  //  id: 'containerFloatPanel_MyAccountRankDescriptionMyRankingBtn',
                                           //    style: 'background-color:transparent;',
                                           //}
                                        ]
                                    },

                                    {

                                        xtype: 'container',
                                        width: '100%',
                                        //height: 355,                              
                                        margin: '0 0 0 0',
                                        id: 'containerFloatPanel_MyAccountRankDescriptionList',
                                        //style: {
                                        //    // background: '#D25959',
                                        //    background: 'rgba(76, 175, 80, 0.3);',
                                        //    // border: '2px'
                                        //},
                                        // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
                                        style: 'background-color:transparent;border-bottom:2px none white;',
                                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 20px 20px 0px 0px;',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'left',
                                        },
                                        //scrollable: {
                                        //    direction: 'vertical',
                                        //    directionLock: true
                                        //},
                                        items: [

                                            


                                            
                                           {
                                              
                                               margin: '10 0 0 10',

                                               // zIndex: -10,
                                               width: '100%',
                                               id: 'htmlFloatPanel_MyAccountRankDesc',
                                              // html: '<textarea id="input-htmlFloatPanel_MyAccountRankDesc" readOnly style="width:95%;height: 600px;padding: 5px 5px;box-sizing: border-box;border: 1px none #ccc;border-radius: 4px;background-color:transparent;font-size: 12px;resize: none;" placeholder="Rank Descriptions"></textarea>',
                                               html: '<div id="input-htmlFloatPanel_MyAccountRankDesc"  style="width:95%;height: 600px;padding: 5px 5px;box-sizing: border-box;border: 1px none #ccc;border-radius: 4px;background-color:transparent;font-size: 12px;resize: none;" ></div>',


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
    return _FloatPanel_MyAccountRankDescription;



}







var FloatPanel_MyAccountRankDescription_AyohaUserisUserVerified;
function FloatPanel_MyAccountRankDescriptionShow() {

    Ext.Viewport.remove(_FloatPanel_MyAccountRankDescription);
    this.overlay = Ext.Viewport.add(FloatPanel_MyAccountRankDescription());
    this.overlay.show();
    AddRoutePages("FloatPanel_MyAccountRankDescriptionHide()");
    isFloatPanel_MyAccountRankDescriptionOpen = 'Y';
    FloatPanel_MyAccountRankDescriptionAdjustHeight();
    FloatPanel_MyAccountRankDescription_AyohaUserisUserVerified= localStorage.getItem('AyohaUserisUserVerified');



    var containerViewnamecontainerFloatPanel_MyAccountRankDescriptionBottom_KingClub = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_MyAccountRankDescriptionBottom_KingClub]')[0];
    var containerViewElnamecontainerFloatPanel_MyAccountRankDescriptionBottom_KingClub = containerViewnamecontainerFloatPanel_MyAccountRankDescriptionBottom_KingClub.element;
    containerViewElnamecontainerFloatPanel_MyAccountRankDescriptionBottom_KingClub.on('tap',
      function (event, node, options, eOpts) {
          LoadingPanelShow(getLoadingIcon(), 'Loading....');
          FloatPanel_MyAccountRankDescription_AyohaMembershipLevelDescLoadbyMembershipCode('King Club');
          animatedClickTabExt('containerFloatPanel_MyAccountRankDescriptionBottom_KingClub');
      }
    );
   
    var containerViewnamecontainerFloatPanel_MyAccountRankDescriptionBottom_Platinum = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_MyAccountRankDescriptionBottom_Platinum]')[0];
    var containerViewElnamecontainerFloatPanel_MyAccountRankDescriptionBottom_Platinum = containerViewnamecontainerFloatPanel_MyAccountRankDescriptionBottom_Platinum.element;
    containerViewElnamecontainerFloatPanel_MyAccountRankDescriptionBottom_Platinum.on('tap',
      function (event, node, options, eOpts) {
          LoadingPanelShow(getLoadingIcon(), 'Loading....');
          FloatPanel_MyAccountRankDescription_AyohaMembershipLevelDescLoadbyMembershipCode('Platinum');
          animatedClickTabExt('containerFloatPanel_MyAccountRankDescriptionBottom_Platinum');
      }
    );


    var containerViewnamecontainerFloatPanel_MyAccountRankDescriptionBottom_Gold = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_MyAccountRankDescriptionBottom_Gold]')[0];
    var containerViewElnamecontainerFloatPanel_MyAccountRankDescriptionBottom_Gold = containerViewnamecontainerFloatPanel_MyAccountRankDescriptionBottom_Gold.element;
    containerViewElnamecontainerFloatPanel_MyAccountRankDescriptionBottom_Gold.on('tap',
      function (event, node, options, eOpts) {
          LoadingPanelShow(getLoadingIcon(), 'Loading....');
          FloatPanel_MyAccountRankDescription_AyohaMembershipLevelDescLoadbyMembershipCode('Gold');
          animatedClickTabExt('containerFloatPanel_MyAccountRankDescriptionBottom_Gold');
      }
    );


    var containerViewnamecontainerFloatPanel_MyAccountRankDescriptionBottom_Silver = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_MyAccountRankDescriptionBottom_Silver]')[0];
    var containerViewElnamecontainerFloatPanel_MyAccountRankDescriptionBottom_Silver = containerViewnamecontainerFloatPanel_MyAccountRankDescriptionBottom_Silver.element;
    containerViewElnamecontainerFloatPanel_MyAccountRankDescriptionBottom_Silver.on('tap',
      function (event, node, options, eOpts) {
          LoadingPanelShow(getLoadingIcon(), 'Loading....');
          FloatPanel_MyAccountRankDescription_AyohaMembershipLevelDescLoadbyMembershipCode('Silver');
          animatedClickTabExt('containerFloatPanel_MyAccountRankDescriptionBottom_Silver');
      }
    );


    var containerViewnamecontainerFloatPanel_MyAccountRankDescriptionBottom_Bronze = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_MyAccountRankDescriptionBottom_Bronze]')[0];
    var containerViewElnamecontainerFloatPanel_MyAccountRankDescriptionBottom_Bronze = containerViewnamecontainerFloatPanel_MyAccountRankDescriptionBottom_Bronze.element;
    containerViewElnamecontainerFloatPanel_MyAccountRankDescriptionBottom_Bronze.on('tap',
      function (event, node, options, eOpts) {
          LoadingPanelShow(getLoadingIcon(), 'Loading....');
          FloatPanel_MyAccountRankDescription_AyohaMembershipLevelDescLoadbyMembershipCode('Bronze');
          animatedClickTabExt('containerFloatPanel_MyAccountRankDescriptionBottom_Bronze');
      }
    );


    var containerViewnamecontainerFloatPanel_MyAccountRankDescriptionBottom_BlackIron = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_MyAccountRankDescriptionBottom_BlackIron]')[0];
    var containerViewElnamecontainerFloatPanel_MyAccountRankDescriptionBottom_BlackIron = containerViewnamecontainerFloatPanel_MyAccountRankDescriptionBottom_BlackIron.element;
    containerViewElnamecontainerFloatPanel_MyAccountRankDescriptionBottom_BlackIron.on('tap',
      function (event, node, options, eOpts) {
          LoadingPanelShow(getLoadingIcon(), 'Loading....');
          FloatPanel_MyAccountRankDescription_AyohaMembershipLevelDescLoadbyMembershipCode('Black Iron');
          animatedClickTabExt('containerFloatPanel_MyAccountRankDescriptionBottom_BlackIron');

      }
    );

 
 //alert( FloatPanel_MyAccountRankDescription_AyohaUserisUserVerified);
   if( FloatPanel_MyAccountRankDescription_AyohaUserisUserVerified == 'NO') {
    Ext.getCmp('htmlFloatPanel_MyAccountRankDesc').setHtml('<div onclick="FloatPanel_AyohaMembershipAdvantagesShow();" id="input-htmlFloatPanel_MyAccountRankDesc" style="width:95%;height:100%;padding:5px;box-sizing:border-box;border-radius:4px;background-color:transparent;resize:none;text-align:center;font-family:Century Gothic;font-size: 25px;font-weight:bold;color:black"><br><br><img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width:100px;height:100px;"><br>Ayoha Reward<br><div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;">One hub, Double Rewards </div><br><div style="width:100%;background-color:transparent;display:flex;justify-content:center;align-items:center;height:40px;"><div class="blink_me" style="width:60%;background-color:orange;text-align:center;border:1px solid orange;font-size:12px;font-weight:bold;color:white;height:30px;border-radius:5px;display:flex;justify-content:center;align-items:center;margin:-40px 0px 0px 0px;">Be An Ayoha Member Now!</div></div></div>');
    Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionRangkingContestantImg').setMargin('15 0 0 0');
    Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionYourRangking').setHidden(true);
    
   


    return
   }


    if (AppState.FloatPanel_AyohaReward.TextRankStar == "Black Iron") {
       // Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionMyRankingHeader').setHtml('<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;">' + AppState.FloatPanel_AyohaReward.TextRankStar + 'Level Reward</div>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionRangkingContestantImg').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:100px;height:100px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/ayohaRankingIcon/blackIron.png"  style="width: 100px; height: 100px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionRangkingContestantName').setHtml('<font size=2 color=white><b>' + AppState.FloatPanel_AyohaReward.TextRankStar.toUpperCase() + '</b></font>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionBottom_BlackIronIcon').setHtml('<img class="blink_me" src="resources/icons/ayohaRankingIcon/blackIron.png" alt="Image" style="width:20px;height:20px;">');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionBottom_BlackIronTxt').setHtml('<div class="blink_me" style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;">Black Iron</div>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionYourRangking').setHtml('<div style="color:white;text-align: center;font-size:70px;width:100%;"><b>1</b></div>');

    }
    if (AppState.FloatPanel_AyohaReward.TextRankStar == "Bronze") {       
       // Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionMyRankingHeader').setHtml('<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;">' + AppState.FloatPanel_AyohaReward.TextRankStar + 'Level Reward</div>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionRangkingContestantImg').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:100px;height:100px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/ayohaRankingIcon/Bronze.png"  style="width: 100px; height: 100px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionRangkingContestantName').setHtml('<font size=2 color=white><b>' + AppState.FloatPanel_AyohaReward.TextRankStar.toUpperCase() + '</b></font>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionBottom_BronzeIcon').setHtml('<img class="blink_me" src="resources/icons/ayohaRankingIcon/Bronze.png" alt="Image" style="width:25px;height:25px;">');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionBottom_BronzeTxt').setHtml('<div class="blink_me" style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;">' + AppState.FloatPanel_AyohaReward.TextRankStar + '</div>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionYourRangking').setHtml('<div style="color:white;text-align: center;font-size:70px;width:100%;"><b>2</b></div>');
    }
    if (AppState.FloatPanel_AyohaReward.TextRankStar == "Silver") {
       // Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionMyRankingHeader').setHtml('<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;">' + AppState.FloatPanel_AyohaReward.TextRankStar + 'Level Reward</div>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionRangkingContestantName').setHtml('<font size=2 color=white><b>' + AppState.FloatPanel_AyohaReward.TextRankStar.toUpperCase() + '</b></font>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionRangkingContestantImg').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:100px;height:100px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/ayohaRankingIcon/Silver.png"  style="width: 100px; height: 100px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>');

        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionBottom_SilverIcon').setHtml('<img class="blink_me" src="resources/icons/ayohaRankingIcon/Silver.png" alt="Image" style="width:30px;height:30px;">');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionBottom_SilverTxt').setHtml('<div class="blink_me" style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;">' + AppState.FloatPanel_AyohaReward.TextRankStar + '</div>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionYourRangking').setHtml('<div style="color:white;text-align: center;font-size:70px;width:100%;"><b>3</b></div>');


    }
    if (AppState.FloatPanel_AyohaReward.TextRankStar == "Gold") {
       // Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionMyRankingHeader').setHtml('<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;">' + AppState.FloatPanel_AyohaReward.TextRankStar + 'Level Reward</div>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionRangkingContestantName').setHtml('<font size=2 color=white><b>' + AppState.FloatPanel_AyohaReward.TextRankStar.toUpperCase() + '</b></font>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionRangkingContestantImg').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:100px;height:100px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/ayohaRankingIcon/Gold.png"  style="width: 100px; height: 100px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionYourRangking').setHtml('<div style="color:white;text-align: center;font-size:70px;width:100%;"><b>4</b></div>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionRangkingContestantName').setHtml('<img class="blink_me" src="resources/icons/ayohaRankingIcon/Gold.png" alt="Image" style="width:35px;height:35px;">');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionBottom_GoldTxt').setHtml('<div class="blink_me" style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;">' + AppState.FloatPanel_AyohaReward.TextRankStar + '</div>');
    }
    if (AppState.FloatPanel_AyohaReward.TextRankStar == "Platinum") {
        //Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionMyRankingHeader').setHtml('<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;">' + AppState.FloatPanel_AyohaReward.TextRankStar + 'Level Reward</div>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionRangkingContestantName').setHtml('<font size=2 color=white><b>' + AppState.FloatPanel_AyohaReward.TextRankStar.toUpperCase() + '</b></font>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionRangkingContestantImg').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:100px;height:100px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/ayohaRankingIcon/Platinum.png"  style="width: 100px; height: 100px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionBottom_PlatinumIcon').setHtml('<img class="blink_me" src="resources/icons/ayohaRankingIcon/Platinum.png" alt="Image" style="width:40px;height:40px;">');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionBottom_PlatinumTxt').setHtml('<div class="blink_me" style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;">' + AppState.FloatPanel_AyohaReward.TextRankStar + '</div>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionYourRangking').setHtml('<div style="color:white;text-align: center;font-size:70px;width:100%;"><b>5</b></div>');
    }

    if (AppState.FloatPanel_AyohaReward.TextRankStar == "King Club") {
        //Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionMyRankingHeader').setHtml('<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;">' + AppState.FloatPanel_AyohaReward.TextRankStar + 'Level Reward</div>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionRangkingContestantName').setHtml('<font size=2 color=white><b>' + AppState.FloatPanel_AyohaReward.TextRankStar.toUpperCase() + '</b></font>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionRangkingContestantImg').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:100px;height:100px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/ayohaRankingIcon/kingclubIcon.png"  style="width: 100px; height: 100px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionYourRangking').setHtml('<div style="color:white;text-align: center;font-size:70px;width:100%;"><b>6</b></div>');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionBottom_KingClubIcon').setHtml('<img class="blink_me" src="resources/icons/ayohaRankingIcon/kingclubIcon.png" alt="Image" style="width:55px;height:55px;margin:-12px 0px 0px 0px;">');
        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionBottom_KingClubTxt').setHtml('<div class="blink_me" style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;margin:-14px 0px 0px 0px;">' + AppState.FloatPanel_AyohaReward.TextRankStar + '</div>');
    }

    FloatPanel_MyAccountRankDescription_AyohaMembershipLevelDescLoadbyMembershipCode(AppState.FloatPanel_AyohaReward.TextRankStar);





    

   
}





function FloatPanel_MyAccountRankDescriptionHide() {
    // FloatPanel_MyAccountRankDescription_AddCardHide();
    if (isFloatPanel_MyAccountRankDescriptionOpen == "Y") {
        _FloatPanel_MyAccountRankDescription.hide(); isFloatPanel_MyAccountRankDescriptionOpen = 'N';
        RemovePages("FloatPanel_MyAccountRankDescriptionHide()");
    }

}



function FloatPanel_MyAccountRankDescriptionAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    //var newHeights = x - 232;
    var newHeights = x - 500;
    console.log(newHeights)

    //  480px 
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;

    Ext.getCmp('FloatPanel_MyAccountRankDescriptionID').setHeight(x + 20);
    Ext.getCmp('containerFloatPanel_MyAccountRankDescriptionList').setHeight(x);
    Ext.getCmp('containerFloatPanel_MyAccountRankDescriptionListOutter').setHeight(x - 180);




}




function FloatPanel_MyAccountRankDescription_AyohaMembershipLevelDescLoadbyMembershipCode(MembershipCode) {
  




    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "AyohaMembershipLevelCode": MembershipCode
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaMembershipLevelDesc/AyohaMembershipLevelDescLoadbyMembershipCode',

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
                     var   AyohaMembershipDescription_01 = data.results[0].AyohaMembershipDescription;
                       


               
                        //var regex = /<br\s*[\/]?>/gi;
                        //var ModifiedAyohaMembershipDescription_01 = AyohaMembershipDescription_01.replace(regex, "<br>");

                      
                        Ext.getCmp('htmlFloatPanel_MyAccountRankDesc').setHtml('<div id="input-htmlFloatPanel_MyAccountRankDesc"  style="width:95%;height: 600px;padding: 5px 5px;box-sizing: border-box;border: 1px none #ccc;border-radius: 4px;background-color:transparent;font-size: 12px;resize: none;" >' + AyohaMembershipDescription_01 + '</div>');

                      //  document.getElementById('input-htmlFloatPanel_MyAccountRankDesc').value = ModifiedAyohaMembershipDescription_01;

                       
                      if( FloatPanel_MyAccountRankDescription_AyohaUserisUserVerified == 'NO') {
                        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionYourRangking').setHidden(true);
                       // Ext.getCmp('htmlFloatPanel_MyAccountRankDesc').setHtml('<div id="input-htmlFloatPanel_MyAccountRankDesc" style="width:95%;height:100%;padding:5px;box-sizing:border-box;border-radius:4px;background-color:transparent;resize:none;text-align:center;font-family:Century Gothic;font-size: 25px;font-weight:bold;color:black"><br><br><img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width:100px;height:100px;"><br>Ayoha Reward<br><div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;">One hub, Double Rewards </div><br><div style="width:100%;background-color:transparent;display:flex;justify-content:center;align-items:center;height:40px;"><div class="blink_me" style="width:60%;background-color:orange;text-align:center;border:1px solid orange;font-size:12px;font-weight:bold;color:white;height:30px;border-radius:5px;display:flex;justify-content:center;align-items:center;margin:-40px 0px 0px 0px;">Be An Ayoha Member Now!</div></div></div>');
                        Ext.getCmp('htmlFloatPanel_MyAccountRankDescriptionRangkingContestantImg').setMargin('-10 0 0 0');
                        Ext.getCmp('containerFloatPanel_MyAccountRankStatusBox').setHidden(false);
                       
                        
                    
                       
                       }
                      
                      
                      
                      
                      
                      LoadingPanelHide();




                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {

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
