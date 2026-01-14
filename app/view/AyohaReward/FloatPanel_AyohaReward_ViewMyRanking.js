Ext.define('BuskartApp.view.AyohaReward.FloatPanel_AyohaReward_ViewMyRanking', {

});

var _FloatPanel_AyohaReward_ViewMyRanking;


var isFloatPanel_AyohaReward_ViewMyRankingOpen = 'N';





function FloatPanel_AyohaReward_ViewMyRanking() {

    _FloatPanel_AyohaReward_ViewMyRanking =
    Ext.create('Ext.Panel', {
        zIndex: 111,
        xtype: 'container',
        //height: 465,
        //  height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaReward_ViewMyRankingID',
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
                            isFloatPanel_AyohaReward_ViewMyRankingOpen = 'N';
                            RemovePages("FloatPanel_AyohaReward_ViewMyRankingHide()");
                            _FloatPanel_AyohaReward_ViewMyRanking.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                        } if (e.direction == "right") {
                            isFloatPanel_AyohaReward_ViewMyRankingOpen = 'N';
                            RemovePages("FloatPanel_AyohaReward_ViewMyRankingHide()");
                            _FloatPanel_AyohaReward_ViewMyRanking.hide(Ext.fx.Animation({
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

                                id: 'containerFloatPanel_AyohaReward_ViewMyRankingHeader',
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
                                                         id: 'btnFloatPanel_AyohaReward_ViewMyRankingBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             // FloatPanel_AyohaReward_ViewMyRankingHide();
                                                             // FloatPanel_AyohaReward_ViewMyRanking_AddCardHide();
                                                             isFloatPanel_AyohaReward_ViewMyRankingOpen = 'N';
                                                             _FloatPanel_AyohaReward_ViewMyRanking.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             RemovePages("FloatPanel_AyohaReward_ViewMyRankingHide()");
                                                             //  FloatPanel_AyohaReward_ViewMyRanking_AddCardHide();

                                                         }
                                                     },

                                                      {
                                                          xtype: 'spacer',

                                                      },


                                                      {
                                                          margin: '0 0 0 0',
                                                          id: 'htmlFloatPanel_AyohaReward_ViewMyRanking_TitleHeaderTxt',
                                                          html: '<font size=2 color=white><b>View Ranking</b></font>'
                                                      },


                                                            {
                                                                xtype: 'button',
                                                                id: 'btnFloatPanel_AyohaReward_ViewMyRanking_CardIcon',
                                                                height: 30,
                                                                width: 35,
                                                                margin: '-4 0 0',
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/ranking03.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                    isFloatPanel_AyohaReward_ViewMyRankingOpen = 'N';

                                                                    _FloatPanel_AyohaReward_ViewMyRanking.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    RemovePages("FloatPanel_AyohaReward_ViewMyRankingHide()");
                                                                    //FloatPanel_AyohaReward_ViewMyRanking_AddCardHide();
                                                                }
                                                            },









                                       ]

                            },
                            {
                                xtype: 'container',
                                width: '100%',
                                height:10,
                                //  docked: 'top',
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_AyohaReward_ViewMyRankingHeader01',
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
                                         hidden:true,
                                         id:'htmlFloatPanel_AyohaReward_ViewMyRankingHeaderJoinedDate',
                                         html: '<div style="color:#FDFEFE;text-align: center;font-size:9px;width:100%;">Joined Date:22/5/2021</div>'
                                     },

                                ]

                            },

                              {
                                  xtype: 'container',
                                  width: '100%',
                                 height: 1,
                                  zIndex: 200,
                                 // hidden:true,
                                  //  docked: 'top',
                                  // width: 40,

                                  //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                  //hidden: true,
                                  name: 'containerFloatPanel_AyohaReward_ViewMyRankingHeader02_name',
                                  id: 'containerFloatPanel_AyohaReward_ViewMyRankingHeader02',
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
                                          width:20
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
                                height: 240,
                                margin: '10 0 0 5',
                                id: 'containerFloatPanel_AyohaReward_ViewMyRankingBar',
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
                                         id: 'htmlRangkingContestantImg',
                                         html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:100px;height:100px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/familyPic/NaurahImg.jpg"  style="width: 100px; height: 100px; border:2px solid white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                     },

                                      {
                                          margin: '-5 0 0 0',
                                          id: 'htmlRangkingContestantName',
                                          html: '<font size=2 color=white><b>TARMIZI BIN RAHIM</b></font>',
                                      },

                                      {
                                          margin: '0 0 0 0',
                                          id: 'htmlYourRangkingTxt',
                                          html: '<div style="color:white;text-align: center;font-size:12px;width:100%;">Your Ranking</div>'
                                      },
                                        {
                                            margin: '-20 0 0 0',
                                            id:'htmlYourRangking',
                                            html: '<div style="color:white;text-align: center;font-size:70px;width:100%;"><b>0</b></div>'
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
                                            margin: '-30 0 0 0',
                                            id: 'containerFloatPanel_AyohaReward_ViewMyRankingAyohaPointTransactionID',
                                            name: 'containerFloatPanel_AyohaReward_ViewMyRankingAyohaPointTransaction',
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
                                                    id:'htmlRankingAyohaPointCount',
                                                    html: '<font size=2 color=white><b>250 Ayoha Points</b></font>',
                                                },
                                                  {
                                                      margin: '8 0 0 30',
                                                      html: '<img src="resources/icons/transaction02.png"  style="width: 20px; height: 20px;   margin:-6px 0px 0px 0px;">',
                                                  }


                                            ]
                                        },

                                          {
                                              margin: '-400 0 0 -125',
                                              zIndex:-100,
                                              //html: '<div style="color:#FDFEFE;text-align: center;font-size:12px;width:100%;"><img src="resources/icons/splashbg02.png" width="100%" height="500px" alt="Company Name"></div>'
                                              html: '<img src="resources/icons/splashbg04.png" width="600px" height="600px" alt="Company Name">'
                                          },
                                ]
                            },
                            


                            {
                                xtype: 'container',
                                width: '100%',
                                // height: '100%',
                                margin: '0 0 0 0',
                                id: 'containerFloatPanel_AyohaReward_ViewMyRankingListOutter',
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
                                        id: 'containerFloatPanel_AyohaReward_ViewMyRankingBottom',
                                        // name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList04',
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
                                               name: 'containerFloatPanel_AyohaReward_ViewMyRankingMyRankingBtn',
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
                                                      margin: '-10 0 0 0',
                                                      name: 'containerFloatPanel_AyohaReward_ViewMyRankingMyRankingHeader',
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
                                                          pack: 'center',
                                                          align: 'center',
                                                      },
                                                      items: [
                                                         
                                                          {
                                                              margin: '0 0 0 60',
                                                              html: '<font size=2 color=black><u>Contestant</u></font>',
                                                          },
                                                          {
                                                              xtype:'spacer',
                                                          },
                                                           {
                                                               margin: '0 10 0 0',
                                                               html: '<font size=2 color=black><u>Ranking</u></font>',
                                                           },
                                                          

                                                      ]
                                                  },
                                           //{
                                           //    xtype: 'container',
                                           //    width: '100%',
                                           //    height: 50,
                                           //    margin: '0 0 0 0',
                                           //  //  id: 'containerFloatPanel_AyohaReward_ViewMyRankingMyRankingBtn',
                                           //    style: 'background-color:transparent;',
                                           //}
                                        ]
                                    },

                                    {

                                        xtype: 'container',
                                        width: '100%',
                                        //height: 355,                              
                                        margin: '0 0 0 0',
                                        id: 'containerFloatPanel_AyohaReward_ViewMyRankingList',
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
                                            align: 'center',
                                        },
                                        //scrollable: {
                                        //    direction: 'vertical',
                                        //    directionLock: true
                                        //},
                                        items: [

                                            {

                                                xtype: 'container',
                                                width: '100%',
                                                height: 60,
                                                //margin: '10 0 0 0',
                                                id: 'containerFloatPanel_AyohaReward_ViewMyRankingList01',
                                                name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList01',
                                                //style: 'border-bottom:2px solid #fac;border-top:2px solid #fac ;background-color: #FAD6DE;',
                                                style: 'border-bottom:2px none #fac;border-top:2px none #fac ;background-color:transparent;',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [


                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_AyohaReward_ViewMyRankingList01TagHighlight',
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
                                                         height: 60,
                                                         margin: '4 0 0 0',
                                                         id: 'containerFloatPanel_AyohaReward_ViewMyRankingList01inner',
                                                         name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList01inner',
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
                                                                  id: 'htmlFloatPanel_AyohaReward_ViewMyRanking01_Image',
                                                                  //badgeText: "2",
                                                                  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/rankingwho01.png"  style="width: 40px; height: 40px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                                              },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                     {
                                                         //height: 28,
                                                         //width: 28,
                                                         id: 'htmlFloatPanel_AyohaReward_ViewMyRanking01_Name',
                                                         //badgeText: "2",
                                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:40px">Vacant<br><div style="width:100%;height:40px;font-size: 10px;font-weight:normal;color:black;margin:-5px 0px 0px 0px;" >0 Points</div></div>',
                                                     },

                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_ViewMyRanking01_Txt',
                                                        margin: '-10 0 0 0',
                                                        html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/firstRank01.png"  style="width: 40px; height: 40px; border:2px none white;   margin:0px 0px 0px 0px"></div>',
                                                        //  height: 20,
                                                        //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                                    },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_ViewMyRanking01_Spacer',                                                     
                                                        xtype: 'spacer',
                                                        width: 33
                                                    },

                                                         ]
                                                     },


                                                ]

                                            },


                                            {

                                                xtype: 'container',
                                                width: '100%',
                                                height: 60,
                                                //margin: '10 0 0 0',
                                                id: 'containerFloatPanel_AyohaReward_ViewMyRankingList02',
                                                name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList02',
                                                //style: 'border-bottom:2px solid #fac;border-top:2px solid #fac ;background-color: #FAD6DE;',
                                                style: 'border-bottom:2px none #fac;border-top:2px none #fac ;background-color:transparent;',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [


                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_AyohaReward_ViewMyRankingList02TagHighlight',
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
                                                         height: 60,
                                                         margin: '4 0 0 0',
                                                         id: 'containerFloatPanel_AyohaReward_ViewMyRankingList02inner',
                                                         name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList02inner',
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
                                                                  id: 'htmlFloatPanel_AyohaReward_ViewMyRanking02_Image',
                                                                  //badgeText: "2",
                                                                  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/rankingwho01.png"  style="width: 40px; height: 40px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                                              },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                     {
                                                         //height: 28,
                                                         //width: 28,
                                                         id: 'htmlFloatPanel_AyohaReward_ViewMyRanking02_Name',
                                                         //badgeText: "2",
                                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:40px">Vacant<br><div style="width:100%;height:40px;font-size: 10px;font-weight:normal;color:black;margin:-5px 0px 0px 0px;" >0 Points</div></div>',
                                                     },

                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_ViewMyRanking02_Txt',
                                                        margin: '-10 0 0 0',
                                                        html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/secondRank01.png"  style="width: 40px; height: 40px; border:2px none white;   margin:0px 0px 0px 0px"></div>',
                                                        //  height: 20,
                                                        //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                                    },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_ViewMyRanking02_Spacer',
                                                        width: 33
                                                      
                                                    },

                                                         ]
                                                     },


                                                ]

                                            },





                                                 {

                                                     xtype: 'container',
                                                     width: '100%',
                                                     height: 60,
                                                     //margin: '10 0 0 0',
                                                     id: 'containerFloatPanel_AyohaReward_ViewMyRankingList03',
                                                     name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList03',
                                                     //style: 'border-bottom:2px solid #fac;border-top:2px solid #fac ;background-color: #FAD6DE;',
                                                     style: 'border-bottom:2px none #fac;border-top:2px none #fac ;background-color:transparent;',
                                                     layout: {
                                                         type: 'hbox',
                                                         pack: 'center',
                                                         align: 'center'
                                                     },
                                                     items: [


                                                         {
                                                             xtype: 'container',
                                                             id: 'containerFloatPanel_AyohaReward_ViewMyRankingList03TagHighlight',
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
                                                              height: 60,
                                                              margin: '4 0 0 0',
                                                              id: 'containerFloatPanel_AyohaReward_ViewMyRankingList03inner',
                                                              name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList03inner',
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
                                                                       id: 'htmlFloatPanel_AyohaReward_ViewMyRanking03_Image',
                                                                       //badgeText: "2",
                                                                       html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/rankingwho01.png"  style="width: 40px; height: 40px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                                                   },
                                                         {
                                                             xtype: 'spacer',
                                                             width: 10
                                                         },
                                                          {
                                                              //height: 28,
                                                              //width: 28,
                                                              id: 'htmlFloatPanel_AyohaReward_ViewMyRanking03_Name',
                                                              //badgeText: "2",
                                                              html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:40px">Vacant<br><div style="width:100%;height:40px;font-size: 10px;font-weight:normal;color:black;margin:-5px 0px 0px 0px;" >0 Points</div></div>',
                                                          },

                                                          {
                                                              xtype: 'spacer'
                                                          },
                                                         {
                                                             id: 'htmlFloatPanel_AyohaReward_ViewMyRanking03_Txt',
                                                             margin: '-10 0 0 0',
                                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/thirdRank01.png"  style="width: 40px; height: 40px; border:2px none white;   margin:0px 0px 0px 0px"></div>',
                                                             //  height: 20,
                                                             //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                                         },
                                                         {
                                                             xtype: 'spacer',
                                                             id: 'htmlFloatPanel_AyohaReward_ViewMyRanking03_Spacer',
                                                             width: 33
                                                         },

                                                              ]
                                                          },


                                                     ]

                                                 },



                                            //{

                                            //    xtype: 'container',
                                            //    width: '100%',
                                            //    height: 50,
                                            //    margin: '10 0 0 0',
                                            //    id: 'containerFloatPanel_AyohaReward_ViewMyRankingList01',
                                            //    name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList01',
                                            //    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                            //    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                                            //    //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                                            //    layout: {
                                            //        type: 'hbox',
                                            //        pack: 'center',
                                            //        align: 'center'
                                            //    },
                                            //    items: [
                                            //        {
                                            //            xtype: 'spacer',
                                            //            width: 10
                                            //        },
                                                   
                                            //        {
                                            //            xtype: 'spacer',
                                            //            width: 10
                                            //        },
                                            //        {
                                            //            //height: 28,
                                            //            //width: 28,
                                            //            id: 'htmlFloatPanel_AyohaReward_ViewMyRanking01_Image',
                                            //            //badgeText: "2",
                                            //            html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/rankingwho01.png"  style="width: 40px; height: 40px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                            //        },
                                            //        {
                                            //            xtype: 'spacer',
                                            //            width: 10
                                            //        },
                                            //         {
                                            //             //height: 28,
                                            //             //width: 28,
                                            //             id: 'htmlFloatPanel_AyohaReward_ViewMyRanking01_Name',
                                            //             //badgeText: "2",
                                            //             html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:40px">Vacant<br><div style="width:100%;height:40px;font-size: 10px;font-weight:normal;color:black;margin:-5px 0px 0px 0px;" >0 Points</div></div>'
                                            //         },

                                            //         {
                                            //             xtype: 'spacer'
                                            //         },
                                            //        {
                                            //            id: 'htmlFloatPanel_AyohaReward_ViewMyRanking01_Txt',
                                            //            margin: '-10 0 0 0',
                                            //            html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:45px;height:45px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/firstRank01.png"  style="width: 45px; height: 45px; border:2px none white;   margin:0px 0px 0px 0px"></div>',
                                            //            //  height: 20,
                                            //          //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                            //        },
                                            //    {
                                            //        xtype: 'spacer',
                                            //        width: 10
                                            //    },
                                            //    ]

                                            //},
                                            //{

                                            //    xtype: 'container',
                                            //    width: '100%',
                                            //    height: 40,
                                            //    margin: '10 0 0 0',
                                            //    id: 'containerFloatPanel_AyohaReward_ViewMyRankingList02',
                                            //    name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList02',
                                            //    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                            //    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                                            //    //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                                            //    layout: {
                                            //        type: 'hbox',
                                            //        pack: 'center',
                                            //        align: 'center'
                                            //    },
                                            //    items: [
                                            //        {
                                            //            xtype: 'spacer',
                                            //            width: 10
                                            //        },

                                            //        {
                                            //            xtype: 'spacer',
                                            //            width: 10
                                            //        },
                                            //        {
                                            //            //height: 28,
                                            //            //width: 28,
                                            //            id: 'htmlFloatPanel_AyohaReward_ViewMyRanking02_Image',
                                            //            //badgeText: "2",
                                            //            html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/rankingwho01.png"  style="width: 40px; height: 40px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                            //        },
                                            //        {
                                            //            xtype: 'spacer',
                                            //            width: 10
                                            //        },
                                            //         {
                                            //             //height: 28,
                                            //             //width: 28,
                                            //             id: 'htmlFloatPanel_AyohaReward_ViewMyRanking02_Name',
                                            //             //badgeText: "2",
                                            //             html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:40px">Vacant<br><div style="width:100%;height:40px;font-size: 10px;font-weight:normal;color:black;margin:-5px 0px 0px 0px;" >0 Ayoha Points</div></div>'
                                            //         },

                                            //         {
                                            //             xtype: 'spacer'
                                            //         },
                                            //        {
                                            //            id: 'htmlFloatPanel_AyohaReward_ViewMyRanking02_Txt',
                                            //            margin: '-10 7 0 0',
                                            //            html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:35px;height:35px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/secondRank01.png"  style="width: 35px; height: 35px; border:2px none white;   margin:0px 0px 0px 0px"></div>',
                                            //            //  height: 20,
                                            //            //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                            //        },
                                            //    {
                                            //        xtype: 'spacer',
                                            //        width: 10
                                            //    },
                                            //    ]

                                            //},

                                            //{

                                            //    xtype: 'container',
                                            //    width: '100%',
                                            //    height: 40,
                                            //    margin: '10 0 0 0',
                                            //    id: 'containerFloatPanel_AyohaReward_ViewMyRankingList03',
                                            //    name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList03',
                                            //    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                            //    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                                            //    //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                                            //    layout: {
                                            //        type: 'hbox',
                                            //        pack: 'center',
                                            //        align: 'center'
                                            //    },
                                            //    items: [
                                            //        {
                                            //            xtype: 'spacer',
                                            //            width: 10
                                            //        },

                                            //        {
                                            //            xtype: 'spacer',
                                            //            width: 10
                                            //        },
                                            //        {
                                            //            //height: 28,
                                            //            //width: 28,
                                            //            id: 'htmlFloatPanel_AyohaReward_ViewMyRanking03_Image',
                                            //            //badgeText: "2",
                                            //            html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/rankingwho01.png"  style="width: 40px; height: 40px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                            //        },
                                            //        {
                                            //            xtype: 'spacer',
                                            //            width: 10
                                            //        },
                                            //         {
                                            //             //height: 28,
                                            //             //width: 28,
                                            //             id: 'htmlFloatPanel_AyohaReward_ViewMyRanking03_Name',
                                            //             //badgeText: "2",
                                            //             html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:40px">Vacant<br><div style="width:100%;height:40px;font-size: 10px;font-weight:normal;color:black;margin:-5px 0px 0px 0px;" >0 Ayoha Points</div></div>'
                                            //         },

                                            //         {
                                            //             xtype: 'spacer'
                                            //         },
                                            //        {
                                            //            id: 'htmlFloatPanel_AyohaReward_ViewMyRanking03_Txt',
                                            //            margin: '-10 7 0 0',
                                            //            html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:35px;height:35px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/thirdRank01.png"  style="width: 35px; height: 35px; border:2px none white;   margin:0px 0px 0px 0px"></div>',
                                            //            //  height: 20,
                                            //            //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                            //        },
                                            //    {
                                            //        xtype: 'spacer',
                                            //        width: 10
                                            //    },
                                            //    ]

                                            //},




                                            {

                                                xtype: 'container',
                                                width: '100%',
                                                height: 50,
                                                //margin: '10 0 0 0',
                                                id: 'containerFloatPanel_AyohaReward_ViewMyRankingList04',
                                                name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList04',
                                                //style: 'border-bottom:2px solid #fac;border-top:2px solid #fac ;background-color: #FAD6DE;',
                                                style: 'border-bottom:2px none #fac;border-top:2px none #fac ;background-color:transparent;',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [


                                                    {
                                                        xtype: 'container',                                                      
                                                        id: 'containerFloatPanel_AyohaReward_ViewMyRankingList04TagHighlight',
                                                        width: 10,
                                                        height: 46,
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
                                                         height: 50,
                                                         margin: '4 0 0 0',
                                                         id: 'containerFloatPanel_AyohaReward_ViewMyRankingList04inner',
                                                         name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList04inner',
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
                                                                  id: 'htmlFloatPanel_AyohaReward_ViewMyRanking04_Image',
                                                                  //badgeText: "2",
                                                                  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/rankingwho01.png"  style="width: 40px; height: 40px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                                              },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                     {
                                                         //height: 28,
                                                         //width: 28,
                                                         id: 'htmlFloatPanel_AyohaReward_ViewMyRanking04_Name',
                                                         //badgeText: "2",
                                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:40px">Vacant<br><div style="width:100%;height:40px;font-size: 10px;font-weight:normal;color:black;margin:-5px 0px 0px 0px;" >0 Ayoha Points</div></div>'
                                                     },

                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_ViewMyRanking04_Txt',
                                                        margin: '-5 7 0 0',
                                                        html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:35px;height:35px;font-size: 16px;font-weight:bold;color:black;text-align:center;" >4</div>',
                                                        //  height: 20,
                                                        //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 30
                                                    },

                                                         ]
                                                     },


                                                ]

                                            },

                                            {

                                                xtype: 'container',
                                                width: '100%',
                                                height: 50,
                                                //margin: '10 0 0 0',
                                                id: 'containerFloatPanel_AyohaReward_ViewMyRankingList05',
                                                name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList05',
                                                //style: 'border-bottom:2px solid #fac;border-top:2px solid #fac ;background-color: #FAD6DE;',
                                                style: 'border-bottom:2px none #fac;border-top:2px none #fac ;background-color:transparent;',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [
                                                   

                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_AyohaReward_ViewMyRankingList05TagHighlight',
                                                        width: 10,
                                                        height: 46,
                                                        margin: '-1 0 0 0',
                                                        //style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                                                        style: 'background-color:transparent;',
                                                    },
                                                     {
                                                         xtype: 'spacer',
                                                         width: 10
                                                     },


                                                     {
                                                         xtype: 'container',
                                                         width: '100%',
                                                         height: 50,
                                                         margin: '4 0 0 0',
                                                         id: 'containerFloatPanel_AyohaReward_ViewMyRankingList05inner',
                                                         name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList05inner',
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
                                                                  id: 'htmlFloatPanel_AyohaReward_ViewMyRanking05_Image',
                                                                  //badgeText: "2",
                                                                  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/rankingwho01.png"  style="width: 40px; height: 40px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                                              },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                     {
                                                         //height: 28,
                                                         //width: 28,
                                                         id: 'htmlFloatPanel_AyohaReward_ViewMyRanking05_Name',
                                                         //badgeText: "2",
                                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:40px">Vacant<br><div style="width:100%;height:40px;font-size: 10px;font-weight:normal;color:black;margin:-5px 0px 0px 0px;" >0 Ayoha Points</div></div>'
                                                     },

                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_ViewMyRanking05_Txt',
                                                        margin: '-5 7 0 0',
                                                        html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:35px;height:35px;font-size: 16px;font-weight:bold;color:black;text-align:center;" >5</div>',
                                                        //  height: 20,
                                                        //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 30
                                                    },

                                                         ]
                                                     },
                                                   
                                               
                                                ]

                                            },                                      

                                            {

                                                xtype: 'container',
                                                width: '100%',
                                                height: 50,
                                                //margin: '10 0 0 0',
                                                id: 'containerFloatPanel_AyohaReward_ViewMyRankingList06',
                                                name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList06',
                                                //style: 'border-bottom:2px solid #fac;border-top:2px solid #fac ;background-color: #FAD6DE;',
                                                style: 'border-bottom:2px none #fac;border-top:2px none #fac ;background-color:transparent;',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [


                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_AyohaReward_ViewMyRankingList06TagHighlight',
                                                        width: 10,
                                                        height: 46,
                                                        margin: '-1 0 0 0',
                                                        //style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                                                        style: 'background-color:transparent;',
                                                    },
                                                     {
                                                         xtype: 'spacer',
                                                         width: 10
                                                     },


                                                     {
                                                         xtype: 'container',
                                                         width: '100%',
                                                         height: 50,
                                                         margin: '4 0 0 0',
                                                         id: 'containerFloatPanel_AyohaReward_ViewMyRankingList06inner',
                                                         name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList06inner',
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
                                                                  id: 'htmlFloatPanel_AyohaReward_ViewMyRanking06_Image',
                                                                  //badgeText: "2",
                                                                  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/rankingwho01.png"  style="width: 40px; height: 40px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                                              },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                     {
                                                         //height: 28,
                                                         //width: 28,
                                                         id: 'htmlFloatPanel_AyohaReward_ViewMyRanking06_Name',
                                                         //badgeText: "2",
                                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:40px">Vacant<br><div style="width:100%;height:40px;font-size: 10px;font-weight:normal;color:black;margin:-5px 0px 0px 0px;" >0 Ayoha Points</div></div>'
                                                     },

                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_ViewMyRanking06_Txt',
                                                        margin: '-5 7 0 0',
                                                        html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:35px;height:35px;font-size: 16px;font-weight:bold;color:black;text-align:center;" >6</div>',
                                                        //  height: 20,
                                                        //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 30
                                                    },

                                                         ]
                                                     },


                                                ]

                                            },




                                            {

                                                xtype: 'container',
                                                width: '100%',
                                                height: 50,
                                                //margin: '10 0 0 0',
                                                id: 'containerFloatPanel_AyohaReward_ViewMyRankingList07',
                                                name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList07',
                                                //style: 'border-bottom:2px solid #fac;border-top:2px solid #fac ;background-color: #FAD6DE;',
                                                style: 'border-bottom:2px none #fac;border-top:2px none #fac ;background-color:transparent;',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [


                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_AyohaReward_ViewMyRankingList07TagHighlight',
                                                        width: 10,
                                                        height: 46,
                                                        margin: '-1 0 0 0',
                                                        //style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                                                        style: 'background-color:transparent;',
                                                    },
                                                     {
                                                         xtype: 'spacer',
                                                         width: 10
                                                     },


                                                     {
                                                         xtype: 'container',
                                                         width: '100%',
                                                         height: 50,
                                                         margin: '4 0 0 0',
                                                         id: 'containerFloatPanel_AyohaReward_ViewMyRankingList07inner',
                                                         name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList07inner',
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
                                                                  id: 'htmlFloatPanel_AyohaReward_ViewMyRanking07_Image',
                                                                  //badgeText: "2",
                                                                  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/rankingwho01.png"  style="width: 40px; height: 40px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                                              },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                     {
                                                         //height: 28,
                                                         //width: 28,
                                                         id: 'htmlFloatPanel_AyohaReward_ViewMyRanking07_Name',
                                                         //badgeText: "2",
                                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:40px">Vacant<br><div style="width:100%;height:40px;font-size: 10px;font-weight:normal;color:black;margin:-5px 0px 0px 0px;" >0 Ayoha Points</div></div>'
                                                     },

                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_ViewMyRanking07_Txt',
                                                        margin: '-5 7 0 0',
                                                        html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:35px;height:35px;font-size: 16px;font-weight:bold;color:black;text-align:center;" >7</div>',
                                                        //  height: 20,
                                                        //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 30
                                                    },

                                                         ]
                                                     },


                                                ]

                                            },


                                            {

                                                xtype: 'container',
                                                width: '100%',
                                                height: 50,
                                                //margin: '10 0 0 0',
                                                id: 'containerFloatPanel_AyohaReward_ViewMyRankingList08',
                                                name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList08',
                                                //style: 'border-bottom:2px solid #fac;border-top:2px solid #fac ;background-color: #FAD6DE;',
                                                style: 'border-bottom:2px none #fac;border-top:2px none #fac ;background-color:transparent;',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [


                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_AyohaReward_ViewMyRankingList08TagHighlight',
                                                        width: 10,
                                                        height: 46,
                                                        margin: '-1 0 0 0',
                                                        //style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                                                        style: 'background-color:transparent;',
                                                    },
                                                     {
                                                         xtype: 'spacer',
                                                         width: 10
                                                     },


                                                     {
                                                         xtype: 'container',
                                                         width: '100%',
                                                         height: 50,
                                                         margin: '4 0 0 0',
                                                         id: 'containerFloatPanel_AyohaReward_ViewMyRankingList08inner',
                                                         name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList08inner',
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
                                                                  id: 'htmlFloatPanel_AyohaReward_ViewMyRanking08_Image',
                                                                  //badgeText: "2",
                                                                  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/rankingwho01.png"  style="width: 40px; height: 40px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                                              },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                     {
                                                         //height: 28,
                                                         //width: 28,
                                                         id: 'htmlFloatPanel_AyohaReward_ViewMyRanking08_Name',
                                                         //badgeText: "2",
                                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:40px">Vacant<br><div style="width:100%;height:40px;font-size: 10px;font-weight:normal;color:black;margin:-5px 0px 0px 0px;" >0 Ayoha Points</div></div>'
                                                     },

                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_ViewMyRanking08_Txt',
                                                        margin: '-5 7 0 0',
                                                        html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:35px;height:35px;font-size: 16px;font-weight:bold;color:black;text-align:center;" >8</div>',
                                                        //  height: 20,
                                                        //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 30
                                                    },

                                                         ]
                                                     },


                                                ]

                                            },




                                            {

                                                xtype: 'container',
                                                width: '100%',
                                                height: 50,
                                                //margin: '10 0 0 0',
                                                id: 'containerFloatPanel_AyohaReward_ViewMyRankingList09',
                                                name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList09',
                                                //style: 'border-bottom:2px solid #fac;border-top:2px solid #fac ;background-color: #FAD6DE;',
                                                style: 'border-bottom:2px none #fac;border-top:2px none #fac ;background-color:transparent;',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [


                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_AyohaReward_ViewMyRankingList09TagHighlight',
                                                        width: 10,
                                                        height: 46,
                                                        margin: '-1 0 0 0',
                                                        //style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                                                        style: 'background-color:transparent;',
                                                    },
                                                     {
                                                         xtype: 'spacer',
                                                         width: 10
                                                     },


                                                     {
                                                         xtype: 'container',
                                                         width: '100%',
                                                         height: 50,
                                                         margin: '4 0 0 0',
                                                         id: 'containerFloatPanel_AyohaReward_ViewMyRankingList09inner',
                                                         name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList09inner',
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
                                                                  id: 'htmlFloatPanel_AyohaReward_ViewMyRanking09_Image',
                                                                  //badgeText: "2",
                                                                  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/rankingwho01.png"  style="width: 40px; height: 40px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                                              },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                     {
                                                         //height: 28,
                                                         //width: 28,
                                                         id: 'htmlFloatPanel_AyohaReward_ViewMyRanking09_Name',
                                                         //badgeText: "2",
                                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:40px">Vacant<br><div style="width:100%;height:40px;font-size: 10px;font-weight:normal;color:black;margin:-5px 0px 0px 0px;" >0 Ayoha Points</div></div>'
                                                     },

                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_ViewMyRanking09_Txt',
                                                        margin: '-5 7 0 0',
                                                        html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:35px;height:35px;font-size: 16px;font-weight:bold;color:black;text-align:center;" >9</div>',
                                                        //  height: 20,
                                                        //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 30
                                                    },

                                                         ]
                                                     },


                                                ]

                                            },

                                            {

                                                xtype: 'container',
                                                width: '100%',
                                                height: 50,
                                                //margin: '10 0 0 0',
                                                id: 'containerFloatPanel_AyohaReward_ViewMyRankingList010',
                                                name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList010',
                                                //style: 'border-bottom:2px solid #fac;border-top:2px solid #fac ;background-color: #FAD6DE;',
                                                style: 'border-bottom:2px none #fac;border-top:2px none #fac ;background-color:transparent;',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [


                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_AyohaReward_ViewMyRankingList010TagHighlight',
                                                        width: 10,
                                                        height: 46,
                                                        margin: '-1 0 0 0',
                                                        //style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                                                        style: 'background-color:transparent;',
                                                    },
                                                     {
                                                         xtype: 'spacer',
                                                         width: 10
                                                     },


                                                     {
                                                         xtype: 'container',
                                                         width: '100%',
                                                         height: 50,
                                                         margin: '4 0 0 0',
                                                         id: 'containerFloatPanel_AyohaReward_ViewMyRankingList010inner',
                                                         name: 'namecontainerFloatPanel_AyohaReward_ViewMyRankingList010inner',
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
                                                                  id: 'htmlFloatPanel_AyohaReward_ViewMyRanking010_Image',
                                                                  //badgeText: "2",
                                                                  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/rankingwho01.png"  style="width: 40px; height: 40px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                                              },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                     {
                                                         //height: 28,
                                                         //width: 28,
                                                         id: 'htmlFloatPanel_AyohaReward_ViewMyRanking010_Name',
                                                         //badgeText: "2",
                                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:40px">Vacant<br><div style="width:100%;height:40px;font-size: 10px;font-weight:normal;color:black;margin:-5px 0px 0px 0px;" >0 Ayoha Points</div></div>'
                                                     },

                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_ViewMyRanking010_Txt',
                                                        margin: '-5 7 0 0',
                                                        html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:35px;height:35px;font-size: 16px;font-weight:bold;color:black;text-align:center;" >10</div>',
                                                        //  height: 20,
                                                        //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 30
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
            },












        ]





    });
    return _FloatPanel_AyohaReward_ViewMyRanking;



}








function FloatPanel_AyohaReward_ViewMyRankingShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaReward_ViewMyRanking);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaReward_ViewMyRanking());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaReward_ViewMyRankingHide()");
    isFloatPanel_AyohaReward_ViewMyRankingOpen = 'Y';
    FloatPanel_AyohaReward_ViewMyRankingAdjustHeight();
    FloatPanel_AyohaReward_ViewMyRanking_AyohaRewardPointRewardRankingStore();

  

    Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRankingHeaderJoinedDate').setHtml('<div style="color:#FDFEFE;text-align: center;font-size:9px;width:100%;">Joined Date:' + globalJoinDate + '</div>');

    var containerView = Ext.ComponentQuery.query('container[name=containerFloatPanel_AyohaReward_ViewMyRankingHeader02_name]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaReward_ContestAdvertisementShow();
      }
    );






    var containerView1 = Ext.ComponentQuery.query('container[name=containerFloatPanel_AyohaReward_ViewMyRankingAyohaPointTransaction]')[0];
    var containerViewEl1 = containerView1.element;
    containerViewEl1.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaReward_PointTransactionsShow();
          //FloatPanel_AyohaRewardShow();

          //var task = Ext.create('Ext.util.DelayedTask', function () {

          // //   Ext.getCmp('containerFloatPanel_AyohaReward_MenuBottom').setHidden(true);
          //    FloatPanel_AyohaReward_MoveCarousel(2);
          //    Ext.Viewport.setMasked(false);

          //});
          //task.delay(500);
        
        
      }
    );
    
  
}





function FloatPanel_AyohaReward_ViewMyRankingHide() {
    // FloatPanel_AyohaReward_ViewMyRanking_AddCardHide();
    if (isFloatPanel_AyohaReward_ViewMyRankingOpen == "Y") {
        _FloatPanel_AyohaReward_ViewMyRanking.hide(); isFloatPanel_AyohaReward_ViewMyRankingOpen = 'N';
        RemovePages("FloatPanel_AyohaReward_ViewMyRankingHide()");
    }
 
}



function FloatPanel_AyohaReward_ViewMyRankingAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    //var newHeights = x - 232;
    var newHeights = x - 500;
    console.log(newHeights)

    //  480px 
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;

    Ext.getCmp('FloatPanel_AyohaReward_ViewMyRankingID').setHeight(x + 20);
    Ext.getCmp('containerFloatPanel_AyohaReward_ViewMyRankingList').setHeight(x);
    Ext.getCmp('containerFloatPanel_AyohaReward_ViewMyRankingListOutter').setHeight(x - 180);




}



var myRankingNo;
var myRankingContestantName;
var myRankingContestantImge;
var myRankingContestantPoint;
function FloatPanel_AyohaReward_ViewMyRanking_AyohaRewardPointRewardRankingStore() {


    var ii = 1;
    Ext.getStore('AyohaRewardPointRewardRankingStore').getProxy().setExtraParams({
        RankingLevel: "ALL",
    });
    Ext.StoreMgr.get('AyohaRewardPointRewardRankingStore').load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaRewardPointRewardRankingStore').getProxy().setExtraParams({
            RankingLevel: "ALL",
        });
        Ext.StoreMgr.get('AyohaRewardPointRewardRankingStore').load();
        var myStore = Ext.getStore('AyohaRewardPointRewardRankingStore');
        var count = myStore.getCount();


        for (i = 0; i < count; i++) {
            var modelRecord = myStore.getAt(i);
            var AccountName = modelRecord.get('AccountName');
            var Photo = modelRecord.get('Photo');
            var AyohaPoint = modelRecord.get('AyohaPoint');
            var SubscriberAccNo = modelRecord.get('SubscriberAccNo');



            if (ii < 4 && i < 3) {
                Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking0' + ii + '_Image').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="' + Photo + '"  style="width: 40px; height: 40px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>');
                Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking0' + ii + '_Name').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:40px">' + AccountName + '<br><div style="width:100%;height:40px;font-size: 10px;font-weight:normal;color:black;margin:-5px 0px 0px 0px;" >' + AyohaPoint + ' Ayoha Points</div></div>');

                
                //if (ii == 1) {
                //    Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking0' + ii + '_Image').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:45px;height:45px;font-size: 10px;font-weight:normal;color:black;" ><img src="' + Photo + '"  style="width: 45px; height: 45px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>');
                //    Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking0' + ii + '_Name').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:40px">' + AccountName + '<br><div style="width:100%;height:40px;font-size: 10px;font-weight:normal;color:black;margin:-5px 0px 0px 0px;" >' + AyohaPoint + ' Ayoha Points</div></div>');

                //} else {
                //    Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking0' + ii + '_Image').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="' + Photo + '"  style="width: 40px; height: 40px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>');
                //    Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking0' + ii + '_Name').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:40px">' + AccountName + '<br><div style="width:100%;height:40px;font-size: 10px;font-weight:normal;color:black;margin:-5px 0px 0px 0px;" >' + AyohaPoint + ' Ayoha Points</div></div>');

                //}



                // Ext.getCmp('htmlDashboard_User_AyohaRewardRanking0' + ii + '_AyohaPoint').setHtml('<div style="color:white;text-align: center;font-size:10px;width:100%;"><b>' + AyohaPoint + ' Point</b></div>');
             


            }


            if ((ii >= 4 && i >= 3) && (ii < 11 && i < 10) ) {
              
                Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking0' + ii + '_Image').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="' + Photo + '"  style="width: 40px; height: 40px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>');
                Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking0' + ii + '_Name').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:40px">' + AccountName + '<br><div style="width:100%;height:40px;font-size: 10px;font-weight:normal;color:black;margin:-5px 0px 0px 0px;" >' + AyohaPoint + ' Ayoha Points</div></div>');
                // Ext.getCmp('htmlDashboard_User_AyohaRewardRanking0' + ii + '_AyohaPoint').setHtml('<div style="color:white;text-align: center;font-size:10px;width:100%;"><b>' + AyohaPoint + ' Point</b></div>');



            }

            if (SubscriberAccNo == GetCurrAyohaUserAccountNo()) {

                var TodayDateSvr= localStorage.getItem("TodayDateSvr");
                var EndDateContest = localStorage.getItem("EndDateContest");
                var  WinnerAnnoucementStatus=localStorage.getItem("WinnerAnnoucementStatus");



                myRankingNo = ii;
                if (myRankingNo < 4) {
                    
                    myRankingContestantName = AccountName.toUpperCase();
                    myRankingContestantImge = Photo;
                    myRankingContestantPoint = AyohaPoint;
                    Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking0' + myRankingNo + '_Image').setHtml('<div class="blink_me" style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="' + myRankingContestantImge + '"  style="width: 40px; height: 40px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>');
                    Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking0' + myRankingNo + '_Name').setHtml('<div  class="blink_me" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:40px">' + myRankingContestantName + '<br><div style="width:100%;height:40px;font-size: 10px;font-weight:normal;color:black;margin:-5px 0px 0px 0px;" >' + myRankingContestantPoint + ' Ayoha Points</div></div>');
                    if (myRankingNo == 1)
                    {
                        Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking0' + myRankingNo + '_Image').setHtml('<div class="blink_me" style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:50px;height:50px;font-size: 10px;font-weight:normal;color:black;" ><img src="' + myRankingContestantImge + '"  style="width: 50px; height: 50px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>');
                        Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking01_Txt').setHtml('<div class="blink_me" style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:50px;height:50px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/firstRank01.png"  style="width: 45px; height: 45px; border:2px none white;   margin:0px 0px 0px 0px"></div>');
                        Ext.getCmp('containerFloatPanel_AyohaReward_ViewMyRankingList0' + myRankingNo + 'TagHighlight').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)');
                        Ext.getCmp('containerFloatPanel_AyohaReward_ViewMyRankingList0' + myRankingNo).setStyle('border-bottom:2px solid #fac;border-top:2px solid #fac ;background-color: #FAD6DE;');
                        Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking0' + myRankingNo+'_Spacer').setWidth(25);                       


                        if (TodayDateSvr == EndDateContest) {
                            Ext.getCmp('htmlRankingTopTenCongrulation').setHtml('<div class="blink_me" style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;" >Congratulations!!<br><div style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-2px 0px 0px 8px;" >1st Ranking</div></div><br><div style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-85px 0px 0px 5px;" ><img src="resources/icons/ayohaReward01.gif"  style="width: 110px; height: 110px;margin:0px 0px 0px -20px;"></div>');
                            Ext.getCmp('htmlRankingTopTenCongrulationRankImg').setHtml('<img src="resources/icons/firstRank01.png"  style="width: 36px; height: 36px;">');
                            if (WinnerAnnoucementStatus == "Y") {
                                stagingCongratulationShow();
                            }
                           
                        } else {
                            Ext.getCmp('htmlRankingTopTenCongrulationRankImg').setHtml('<img src="resources/icons/firstRank01.png"  style="width: 36px; height: 36px;">');
                            Ext.getCmp('htmlRankingTopTenCongrulation').setHtml('<div  style="background: transparent;width:120px;height:100px;font-size: 10px;font-weight:bold;color:transparent;text-align:left;margin:0px 0px 0px -20px;" >Hooray!,1st Ranking<br><div style="background: transparent;width:120px;height:100px;font-size: 10px;font-weight:bold;color:white;margin:-2px 0px 0px 0px;" >PLEASE MAINTAIN your Ranking until end of this contest! </div></div><br><div class="blink_me" style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-80px 0px 0px -30px;" ><img src="resources/icons/enterContest-removebg-preview.png"  style="width: 100px; height: 100px;"></div><br><div class="blink_me" style="background: transparent;width:120px;height:50px;font-size: 10px;font-weight:bold;color:white;margin:-25px 0px 0px -20px;text-align:center" >Contest End Date:</div><br><div class="blink_me" style="background: transparent;width:120px;height:50px;font-size: 10px;font-weight:bold;color:white;margin:-60px 0px 0px -20px;text-align:center" >' + EndDateContest + ' 12:00AM </div>');

                        }
                     
                    }
                    if (myRankingNo == 2) {
                       // Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking02_Txt').setHtml('<div class="blink_me" style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:35px;height:35px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/secondRank01.png"  style="width: 35px; height: 35px; border:2px none white;   margin:0px 0px 0px 0px"></div>');

                        Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking0' + myRankingNo + '_Image').setHtml('<div class="blink_me" style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:50px;height:50px;font-size: 10px;font-weight:normal;color:black;" ><img src="' + myRankingContestantImge + '"  style="width: 50px; height: 50px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>');
                        Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking02_Txt').setHtml('<div class="blink_me" style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:50px;height:50px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/secondRank01.png"  style="width: 45px; height: 45px; border:2px none white;   margin:0px 0px 0px 0px"></div>');


                        Ext.getCmp('containerFloatPanel_AyohaReward_ViewMyRankingList0' + myRankingNo + 'TagHighlight').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)');
                        Ext.getCmp('containerFloatPanel_AyohaReward_ViewMyRankingList0' + myRankingNo).setStyle('border-bottom:2px solid #fac;border-top:2px solid #fac ;background-color: #FAD6DE;');
                        Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking0' + myRankingNo + '_Spacer').setWidth(25);



                        //Ext.getCmp('htmlRankingTopTenCongrulation').setHtml('<div class="blink_me" style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;" >Congratulations!!<br><div style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-2px 0px 0px 8px;" >2nd Ranking</div></div><br><div style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-85px 0px 0px 5px;" ><img src="resources/icons/contestLogo01.png"  style="width: 110px; height: 110px;margin:0px 0px 0px -20px;"></div>');
                        //Ext.getCmp('htmlRankingTopTenCongrulationRankImg').setHtml('<img src="resources/icons/secondRank01.png"  style="width: 36px; height: 36px;">');
                        //stagingCongratulationShow();


                        if (TodayDateSvr == EndDateContest) {
                            Ext.getCmp('htmlRankingTopTenCongrulation').setHtml('<div class="blink_me" style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;" >Congratulations!!<br><div style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-2px 0px 0px 8px;" >2nd Ranking</div></div><br><div style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-85px 0px 0px 5px;" ><img src="resources/icons/ayohaReward01.gif"  style="width: 110px; height: 110px;margin:0px 0px 0px -20px;"></div>');
                            Ext.getCmp('htmlRankingTopTenCongrulationRankImg').setHtml('<img src="resources/icons/secondRank01.png"  style="width: 36px; height: 36px;">');
                            if (WinnerAnnoucementStatus == "Y") {
                                stagingCongratulationShow();
                            }

                        } else {
                            Ext.getCmp('htmlRankingTopTenCongrulationRankImg').setHtml('<img src="resources/icons/secondRank01.png"  style="width: 36px; height: 36px;">');
                            Ext.getCmp('htmlRankingTopTenCongrulation').setHtml('<div  style="background: transparent;width:120px;height:100px;font-size: 10px;font-weight:bold;color:transparent;text-align:left;margin:0px 0px 0px -20px;" >Hooray!,2nd Ranking<br><div style="background: transparent;width:120px;height:100px;font-size: 10px;font-weight:bold;color:white;margin:-2px 0px 0px 0px;" >PLEASE MAINTAIN your Ranking until end of this contest! </div></div><br><div class="blink_me" style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-80px 0px 0px -30px;" ><img src="resources/icons/enterContest-removebg-preview.png"  style="width: 100px; height: 100px;"></div><br><div class="blink_me" style="background: transparent;width:120px;height:50px;font-size: 10px;font-weight:bold;color:white;margin:-25px 0px 0px -20px;text-align:center" >Contest End Date:</div><br><div class="blink_me" style="background: transparent;width:120px;height:50px;font-size: 10px;font-weight:bold;color:white;margin:-60px 0px 0px -20px;text-align:center" >' + EndDateContest + ' 12:00AM </div>');

                        }

                    }
                    if (myRankingNo == 3) {
                       // Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking03_Txt').setHtml('<div class="blink_me" style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:35px;height:35px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/thirdRank01.png"  style="width: 35px; height: 35px; border:2px none white;   margin:0px 0px 0px 0px"></div>');


                        Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking0' + myRankingNo + '_Image').setHtml('<div class="blink_me" style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:50px;height:50px;font-size: 10px;font-weight:normal;color:black;" ><img src="' + myRankingContestantImge + '"  style="width: 50px; height: 50px; border:2px none white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>');
                        Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking03_Txt').setHtml('<div class="blink_me" style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:50px;height:50px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/thirdRank01.png"  style="width: 45px; height: 45px; border:2px none white;   margin:0px 0px 0px 0px"></div>');


                        Ext.getCmp('containerFloatPanel_AyohaReward_ViewMyRankingList0' + myRankingNo + 'TagHighlight').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)');
                        Ext.getCmp('containerFloatPanel_AyohaReward_ViewMyRankingList0' + myRankingNo).setStyle('border-bottom:2px solid #fac;border-top:2px solid #fac ;background-color: #FAD6DE;');
                        Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking0' + myRankingNo + '_Spacer').setWidth(25);

                     
                    



                        if (TodayDateSvr == EndDateContest) {
                            Ext.getCmp('htmlRankingTopTenCongrulation').setHtml('<div class="blink_me" style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;" >Congratulations!!<br><div style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-2px 0px 0px 8px;" >3rd Ranking</div></div><br><div style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-85px 0px 0px 5px;" ><img src="resources/icons/ayohaReward01.gif"  style="width: 110px; height: 110px;margin:0px 0px 0px -20px;"></div>');
                            Ext.getCmp('htmlRankingTopTenCongrulationRankImg').setHtml('<img src="resources/icons/thirdRank01.png"  style="width: 36px; height: 36px;">');
                            if (WinnerAnnoucementStatus == "Y") {
                                stagingCongratulationShow();
                            }

                        } else {
                            Ext.getCmp('htmlRankingTopTenCongrulationRankImg').setHtml('<img src="resources/icons/thirdRank01.png"  style="width: 36px; height: 36px;">');
                            Ext.getCmp('htmlRankingTopTenCongrulation').setHtml('<div  style="background: transparent;width:120px;height:100px;font-size: 10px;font-weight:bold;color:transparent;text-align:left;margin:0px 0px 0px -20px;" >Hooray!,3rd Ranking<br><div style="background: transparent;width:120px;height:100px;font-size: 10px;font-weight:bold;color:white;margin:-2px 0px 0px 0px;" >PLEASE MAINTAIN your Ranking until end of this contest! </div></div><br><div class="blink_me" style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-80px 0px 0px -30px;" ><img src="resources/icons/enterContest-removebg-preview.png"  style="width: 100px; height: 100px;"></div><br><div class="blink_me" style="background: transparent;width:120px;height:50px;font-size: 10px;font-weight:bold;color:white;margin:-25px 0px 0px -20px;text-align:center" >Contest End Date:</div><br><div class="blink_me" style="background: transparent;width:120px;height:50px;font-size: 10px;font-weight:bold;color:white;margin:-60px 0px 0px -20px;text-align:center" >' + EndDateContest + ' 12:00AM </div>');

                        }
                    }

                }

                if (myRankingNo >= 4 && myRankingNo <= 10 ){
                    myRankingContestantName = AccountName.toUpperCase();
                    myRankingContestantImge = Photo;
                    myRankingContestantPoint = AyohaPoint;
                    Ext.getCmp('containerFloatPanel_AyohaReward_ViewMyRankingList0' + myRankingNo + 'TagHighlight').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)');
                    Ext.getCmp('containerFloatPanel_AyohaReward_ViewMyRankingList0' + myRankingNo).setStyle('border-bottom:2px solid #fac;border-top:2px solid #fac ;background-color: #FAD6DE;');
                    
                    Ext.getCmp('htmlRankingTopTenCongrulationRankImg').setHidden(true);
                   


                    if (TodayDateSvr == EndDateContest) {
                        Ext.getCmp('htmlRankingTopTenCongrulation').setHtml('<div class="blink_me" style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;" >Congratulations!!<br><div style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-2px 0px 0px 0px;" >In top 7 ranking</div></div><br><div style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-85px 0px 0px 5px;" ><img src="resources/icons/contestLogo01.png"  style="width: 110px; height: 110px;margin:0px 0px 0px -20px;"></div>');
                        Ext.getCmp('htmlRankingTopTenCongrulationRankImg').setHtml('<img src="resources/icons/thirdRank01.png"  style="width: 0px; height: 0px;">');
                        if (WinnerAnnoucementStatus == "Y") {
                            stagingCongratulationShow();
                        }

                    } else {
                        Ext.getCmp('htmlRankingTopTenCongrulation').setHtml('<div  style="background: transparent;width:120px;height:100px;font-size: 10px;font-weight:bold;color:transparent;text-align:left;margin:0px 0px 0px -20px;" >Hooray!,Top 10 Ranking<br><div style="background: transparent;width:120px;height:100px;font-size: 10px;font-weight:bold;color:white;margin:-2px 0px 0px 0px;" >PLEASE MAINTAIN your Ranking until end of this contest! </div></div><br><div class="blink_me" style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-80px 0px 0px -30px;" ><img src="resources/icons/enterContest-removebg-preview.png"  style="width: 100px; height: 100px;"></div><br><div class="blink_me" style="background: transparent;width:120px;height:50px;font-size: 10px;font-weight:bold;color:white;margin:-25px 0px 0px -20px;text-align:center" >Contest End Date:</div><br><div class="blink_me" style="background: transparent;width:120px;height:50px;font-size: 10px;font-weight:bold;color:white;margin:-60px 0px 0px -20px;text-align:center" >' + EndDateContest + ' 12:00AM </div>');

                    }
                    
                }
                if (myRankingNo >= 11) {
                    myRankingContestantName = AccountName.toUpperCase();
                    myRankingContestantImge = Photo;
                    myRankingContestantPoint = AyohaPoint;
                  //  Ext.getCmp('htmlRankingTopTenCongrulation').setHtml('<div style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;display:none" >Congratulations!!<br><div style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-2px 0px 0px 0px;display:none" >In top 7 ranking</div></div><br><div style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-85px 0px 0px 5px;display:none" ><img src="resources/icons/contestLogo01.png"  style="width: 110px; height: 110px;margin:0px 0px 0px -20px;"></div>');
                    //Ext.getCmp('htmlRankingTopTenCongrulationRankImg').setHtml('<img src="resources/icons/thirdRank01.png"  style="width: 0px; height: 0px;">');
                    Ext.getCmp('htmlRankingTopTenCongrulation').setHtml('<div  style="background: transparent;width:120px;height:100px;font-size: 10px;font-weight:bold;color:white;text-align:left;margin:0px 0px 0px -20px;" >Hurry Up!,Be In Top 10<br><div style="background: transparent;width:120px;height:100px;font-size: 10px;font-weight:bold;color:white;margin:-2px 0px 0px 0px;" >Ranking to win worth prizes! </div></div><br><div class="blink_me" style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-80px 0px 0px -30px;" ><img src="resources/icons/enterContest-removebg-preview.png"  style="width: 100px; height: 100px;"></div><br><div class="blink_me" style="background: transparent;width:120px;height:50px;font-size: 10px;font-weight:bold;color:white;margin:-25px 0px 0px -20px;text-align:center" >Contest End Date:</div><br><div class="blink_me" style="background: transparent;width:120px;height:50px;font-size: 10px;font-weight:bold;color:white;margin:-60px 0px 0px -20px;text-align:center" >' + EndDateContest + ' 12:00AM </div>');
                    Ext.getCmp('htmlRankingTopTenCongrulationRankImg').setHidden(true);
                   
                }





                if (myRankingNo <= 10) {
                    Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRankingHeaderJoinedDate').setHtml('<div style="color:#FDFEFE;text-align: center;font-size:9px;width:100%;">Joined Date:' + globalJoinDate + '</div>');

                    var containerView = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaReward_ViewMyRankingList0' + myRankingNo + ']')[0];
                    var containerViewEl = containerView.element;
                    containerViewEl.on('tap',
                      function (event, node, options, eOpts) {
                         
                          //FloatPanel_AyohaReward_CongratulationsShow();
                          stagingCongratulation02Show();
                        
                      }
                    );


                    
                }



            }



            ii++;

        }

        Ext.getCmp('htmlRangkingContestantImg').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:100px;height:100px;font-size: 10px;font-weight:normal;color:black;" ><img src="' + myRankingContestantImge + '"  style="width: 100px; height: 100px; border:2px solid white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>');
        Ext.getCmp('htmlRangkingContestantName').setHtml('<font size=2 color=white><b>' + myRankingContestantName + '</b></font>');
        Ext.getCmp('htmlYourRangking').setHtml('<div style="color:white;text-align: center;font-size:70px;width:100%;"><b>' + myRankingNo + '</b></div>');
        Ext.getCmp('htmlRankingAyohaPointCount').setHtml('<font size=2 color=white><b>' + myRankingContestantPoint + ' Ayoha Points</b></font>');


        if (globalIsContestant == "N") {
            Ext.getCmp('htmlRangkingContestantImg').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:100px;height:100px;font-size: 10px;font-weight:normal;color:black;" ><img src="' + GetAyohaUserPicProfile() + '"  style="width: 100px; height: 100px; border:2px solid white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>');
            Ext.getCmp('htmlRangkingContestantName').setHtml('<font size=2 color=white><b>' + GetAyohaUserAccountNames() + '</b></font>');
            Ext.getCmp('htmlYourRangking').setHtml('<div style="color:white;text-align: center;font-size:70px;width:100%;"><b>-</b></div>');
            Ext.getCmp('htmlRankingAyohaPointCount').setHtml('<font size=2 color=white><b>0 Ayoha Points</b></font>');
            Ext.getCmp('htmlRankingTopTenCongrulationRankImg').setHidden(true);
            Ext.getCmp('htmlYourRangkingTxt').setHtml('<div style="color:white;text-align: center;font-size:12px;width:100%;">You are Not Contestant!</div>');
            Ext.getCmp('htmlRankingTopTenCongrulation').setHtml('<div class="blink_me" style="background: transparent;width:120px;height:100px;font-size: 11px;font-weight:bold;color:white;" >Hurry Up Buddy,Joint<br><div style="background: transparent;width:120px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-2px 0px 0px 8px;" >the contest Now.!</div></div><br><div class="blink_me" style="background: transparent;width:100px;height:100px;font-size: 11px;font-weight:bold;color:white;margin:-105px 0px 0px 5px;" ><img src="resources/icons/enterContest-removebg-preview.png"  style="width: 100px; height: 100px;"></div>');
         



            
        }

      



        Ext.Viewport.setMasked(false);

    });
    task.delay(500);

}



function stagingCongratulationShow() {


    var task = Ext.create('Ext.util.DelayedTask', function () {
      
        FloatPanel_AyohaReward_CongratulationsShow();

        Ext.Viewport.setMasked(false);

    });
    task.delay(1000);
}



function stagingCongratulation02Show() {


    var task = Ext.create('Ext.util.DelayedTask', function () {

        var WinnerAnnoucementStatus = localStorage.getItem("WinnerAnnoucementStatus");
        if (WinnerAnnoucementStatus == "Y") {
            FloatPanel_AyohaReward_CongratulationsShow();
        }
        if (WinnerAnnoucementStatus == "N") {
            FloatPanel_AyohaReward_ContestAdvertisementShow();
        }

        Ext.Viewport.setMasked(false);

    });
    task.delay(100);
}