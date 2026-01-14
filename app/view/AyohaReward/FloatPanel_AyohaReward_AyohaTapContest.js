Ext.define('BuskartApp.view.AyohaReward.FloatPanel_AyohaReward_AyohaTapContest', {

});




var is_FloatPanel_AyohaReward_AyohaTapContestOpen = "N";


var _FloatPanel_AyohaReward_AyohaTapContest;

function FloatPanel_AyohaReward_AyohaTapContest() {

    _FloatPanel_AyohaReward_AyohaTapContest = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_AyohaReward_AyohaTapContestID',
            name: 'clickableContainerFloatPanel_AyohaReward_AyohaTapContest',
            // xtype: 'panel',
            //zIndex: 50,
            zIndex: 111,
            xtype: 'container',
            //height: 475,
            height: '100%',
            //  height: '60%',
            width: '100%',
            draggable: false,

            styleHtmlContent: true,

            centered: true,
            //bottom: 64,
            // zIndex: 100,
            // modal: true,
            //   hideOnMaskTap: true,
            //left: 10,
            //top:10,
            layout: {
                type: 'fit'
            },
            showAnimation: {
                type: 'popIn',
                duration: 250,
                easing: 'ease-out'
                //type: 'slideIn',
                //direction:'down',
                //duration: 1000,
                //easing: 'ease-in'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
                easing: 'ease-out'
                //type: 'slideOut',
                //direction: 'down',
                //duration: 3000,
                //easing: 'ease-in'
            },

          //  style: 'background-image: url("resources/icons/LatestConfetiTwo.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
           style: ' background-color:white;',
            //style: 'background-image: url("http://42.1.63.57/AyohaImgCard/AyohaRewardContest/AdverImg/ayohaTapContestbg01.jpg"); background-size: 100% 100%;background-repeat: no-repeat;',
          //  style: 'background-image: url("resources/icons/ayohaTapContestbg01.jpg"); background-size: 100% 100%;background-repeat: no-repeat;',
           // style: ' background-color: #fac;background-image: linear-gradient( #c800ffc9,#ff00de75)',
            listeners: {
                initialize: function (c) {
                    this.element.on({
                        swipe: function (e, node, options) {
                            //if (e.direction == "up") {
                            //    LoyaltyCardRedeemListHide();
                            //}
                            if (e.direction == "left") {
                                is_FloatPanel_AyohaReward_AyohaTapContestOpen = 'N';
                                _FloatPanel_AyohaReward_AyohaTapContest.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'left',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                RemovePages("FloatPanel_AyohaReward_AyohaTapContestHide()");
                                FloatPanel_AyohaReward_AyohaTapContest_AnimateMainPageDashBoard();
                            } if (e.direction == "right") {
                                is_FloatPanel_AyohaReward_AyohaTapContestOpen = 'N';

                                _FloatPanel_AyohaReward_AyohaTapContest.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'right',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                RemovePages("FloatPanel_AyohaReward_AyohaTapContestHide()");
                                FloatPanel_AyohaReward_AyohaTapContest_AnimateMainPageDashBoard();
                            }
                            if (e.direction == "up") {
                                is_FloatPanel_AyohaReward_AyohaTapContestOpen = 'N';

                                _FloatPanel_AyohaReward_AyohaTapContest.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'up',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                RemovePages("FloatPanel_AyohaReward_AyohaTapContestHide()");
                                FloatPanel_AyohaReward_AyohaTapContest_AnimateMainPageDashBoard();
                            }

                           
                        }
                    });
                }
            },
            items: {
                ////zIndex: 40,
                xtype: 'container',
                id: 'ContainerFloatPanel_AyohaReward_AyohaTapContest',
                style: 'background-image: url("resources/icons/ayohaTapContestbg009.jpg"); background-size: 100% 100%;background-repeat: no-repeat;',
               // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                name: 'clickableContainerFloatPanel_AyohaReward_AyohaTapContest',
               // style: ' background-color:transparent;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
                //  margin:'-10 0 0 -7',
                items: [
                    

                   {

                       xtype: 'container',
                       width: '100%',
                       docked: 'top',
                       // width: 40,

                       //  title: '<font size="3" color="white">Live Tracking Map</font>',
                       //hidden: true,

                       id: 'containeFloatPanel_AyohaReward_AyohaTapContestHeader',
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
                              [{
                                  xtype: 'panel',
                                  width: 15

                              },


                                            {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_AyohaReward_AyohaTapContestBack',
                                                height: 30,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    // FloatPanel_AyohaReward_TopTenRankingHide();
                                                    // FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                    is_FloatPanel_AyohaReward_AyohaTapContestOpen = 'N';
                                                    _FloatPanel_AyohaReward_AyohaTapContest.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'left',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    RemovePages("FloatPanel_AyohaReward_AyohaTapContestHide()");
                                                    FloatPanel_AyohaReward_AyohaTapContest_AnimateMainPageDashBoard();
                                                    //  FloatPanel_AyohaReward_TopTenRanking_AddCardHide();

                                                }
                                            },

                                             {
                                                 xtype: 'spacer',

                                             },


                                             {
                                                 margin: '0 0 0 0',
                                                 id: 'htmlFloatPanel_AyohaReward_AyohaTapContest_TitleHeaderTxt',
                                                 html: '<font size=2 color=white><b>Ayoha TAP and Win</b></font>'
                                             },
                                              {
                                                  xtype: 'panel',
                                                  width:15

                                              },

                                                   {
                                                       xtype: 'button',
                                                       id: 'btnFloatPanel_AyohaReward_AyohaTapContest_CardIcon',
                                                       height: 30,
                                                       width: 35,
                                                       hidden:true,
                                                       // iconCls: 'list',
                                                       html: '<div ><img src="resources/icons/contest01.png" width="25" height="20" alt="Company Name"></div>',
                                                       ui: 'plain',
                                                       handler: function () {

                                                           is_FloatPanel_AyohaReward_AyohaTapContestOpen = 'N';

                                                           _FloatPanel_AyohaReward_AyohaTapContest.hide(Ext.fx.Animation({
                                                               type: 'slideOut',
                                                               direction: 'right',
                                                               easing: 'cubic-bezier(.7,0,.7,1)',
                                                               duration: 250

                                                           }));
                                                           RemovePages("FloatPanel_AyohaReward_AyohaTapContestHide()");
                                                           //FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                       }
                                                   },









                              ]

                   },

                 
                       {
                           xtype: 'container',
                         //  id: 'ContainerFloatPanel_AyohaReward_AyohaTapContestImg',
                           id: 'containerMainFloatPanel_AyohaReward_AyohaTapContestImg',
                           // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                           // name: 'clickableContainerFloatPanel_AyohaReward_AyohaTapContest',
                        //   style: 'background-image: url("http://42.1.63.57/AyohaImgCard/AyohaRewardContest/AdverImg/ayohaTapContestbg01.jpg"); background-size: 100% 100%;background-repeat: no-repeat;',
                          // style: 'background-image: url("resources/icons/coinconfetti.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                         style: ' background-color:transparent;',
                           layout: {
                               type: 'vbox',
                               pack: 'start',
                               align: 'center'
                           },
                           width: '100%',
                           height: '100%',
                           items: [
                               {
                                   xtype: 'container',
                                   width: '100%',
                                   height: '15%',
                                   // docked: 'top',
                                   // margin: '30 0 0 0',
                                   style: 'background-color:transparent;',
                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center',
                                   },
                               },
                              {
                                  xtype: 'container',
                                  width: '100%',
                                  height: '12%',
                                  // docked: 'top',
                                  // margin: '30 0 0 0',
                                  style: 'background-color:transparent;',
                                  hidden:true,
                                  id: 'containerFloatPanel_AyohaReward_AyohaTapContest_WinTapMessage',

                                  layout: {
                                      type: 'hbox',
                                      pack: 'center',
                                      align: 'center',
                                  },
                                  items: [
                                      {
                                          margin: '0 0 0 0',
                                          id: 'htmlFloatPanel_AyohaReward_AyohaTapContest_WinTapMessageStatic',
                                          html: '<div style="background-color:transparent;height:40px;font-size: 22px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:2px 0px 0px 0px;">Congratulation!.You Win</div></div>',
                                          // html: '<div  style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:160px;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:10px 0px 0px -30px;">Enter Contest</div></div>'



                                      },
                              {
                                  xtype: 'spacer',
                                  width: 10
                              },

                              {
                                  margin: '0 0 0 0',
                                  id: 'htmlFloatPanel_AyohaReward_AyohaTapContest_WinTapMessageIcon',
                                  html: '<div class="example-2" style="border-right:2px solid #fac;border-left:2px solid  #fac;border-bottom:2px solid #fac;border-top:2px solid  #fac;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;width:80px;height:40px;font-size: 22px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:2px 0px 0px 0px;">0</div></div>',
                                  // html: '<div  style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:160px;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:10px 0px 0px -30px;">Enter Contest</div></div>'



                              },
                              {
                                  xtype: 'spacer',
                                  width: 10
                              },
                               {
                                   margin: '0 0 0 0',
                                   id: 'htmlFloatPanel_AyohaReward_AyohaTapContest_WinTapMessageTxt',
                                   html: '<div style="background-color:transparent;height:40px;font-size: 22px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:2px 0px 0px 0px;">RM1.50!</div></div>',
                                   // html: '<div  style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:160px;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:10px 0px 0px -30px;">Enter Contest</div></div>'



                               },
                                  ]
                              },
                               {
                                   xtype: 'container',
                                   width: '100%',
                                   height: '12%',
                                  // docked: 'top',
                                   // margin: '30 0 0 0',
                                   style: 'background-color:transparent;',
                                   id: 'containerFloatPanel_AyohaReward_AyohaTapContest_TapChanceLeft',

                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center',
                                   },
                                   items: [
                                       {
                                           margin: '0 0 0 0',
                                           html: '<div style="background-color:transparent;height:40px;font-size: 22px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:2px 0px 0px 0px;">You Have</div></div>',
                                           // html: '<div  style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:160px;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:10px 0px 0px -30px;">Enter Contest</div></div>'



                                       },
                               {
                                   xtype: 'spacer',
                                   width: 10
                               },

                               {
                                   margin: '0 0 0 0',
                                   id:'htmlFloatPanel_AyohaReward_AyohaTapContest_TapChanceLeftTxt',
                                   html: '<div class="example-2" style="border-right:2px solid #fac;border-left:2px solid  #fac;border-bottom:2px solid #fac;border-top:2px solid  #fac;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;width:80px;height:40px;font-size: 22px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:2px 0px 0px 0px;">0</div></div>',
                                   // html: '<div  style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:160px;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:10px 0px 0px -30px;">Enter Contest</div></div>'



                               },
                               {
                                   xtype: 'spacer',
                                   width: 10
                               },
                                {
                                    margin: '0 0 0 0',
                                    html: '<div style="background-color:transparent;height:40px;font-size: 22px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:2px 0px 0px 0px;">Chance Left</div></div>',
                                    // html: '<div  style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:160px;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:10px 0px 0px -30px;">Enter Contest</div></div>'



                                },
                                   ]
                               },
                               {
                                   xtype: 'container',
                                   style: ' background-color:transparent;',
                                   margin:'0 0 0 0',
                                   width: '100%',
                                  // height:'100%',
                                   height: 120,
                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center'
                                   },
                                   items: [
                                       {
                                           xtype: 'container',
                                           width: '0.5%',
                                           height: 90,
                                       },
                                       {
                                           width: '33%',
                                           height: 90,
                                           id:'htmlFloatPanel_AyohaReward_AyohaTapContestImg1',
                                           html: '<div onclick="FloatPanel_AyohaReward_AyohaTapContestImg(1);" style="width:100%;text-align:center;height:90px;"><img class="ballon_me" src="resources/icons/AyohaTabCoinBag.png" width="90px" height="90px" alt="Company Name"></div>',
                                          // html: '<div class="example-3" onclick="FloatPanel_AyohaReward_AyohaTapContestImg1();" style="width:50%;text-align:center;height:50px;border-radius:50%;"><img src="resources/icons/AyohaTabCoinBag.png" width="90px" height="90px"  style:"background-color: rgba(255,165,0, 0.1);" alt="Company Name"></div>',
                                       },
                                        {
                                            width: '33%',
                                            height: 90,
                                            id: 'htmlFloatPanel_AyohaReward_AyohaTapContestImg2',
                                            html: '<div onclick="FloatPanel_AyohaReward_AyohaTapContestImg(2);" style="width:100%;text-align:center;height:90px;"><img class="ballon_me" src="resources/icons/AyohaTabCoinBag.png" width="90px" height="90px" alt="Company Name"></div>',
                                        },
                                         {
                                             width: '33%',
                                             height: 90,
                                             id: 'htmlFloatPanel_AyohaReward_AyohaTapContestImg3',
                                             html: '<div onclick="FloatPanel_AyohaReward_AyohaTapContestImg(3);" style="width:100%;text-align:center;height:90px;"><img class="ballon_me" src="resources/icons/AyohaTabCoinBag.png" width="90px" height="90px" alt="Company Name"></div>',
                                         },
                                          {
                                              xtype: 'container',
                                              width: '0.5%',
                                              height: 90,
                                          },
                                   ]
                               },
                               {
                                   xtype: 'container',
                                   style: ' background-color:transparent;',
                                   width: '100%',
                                   height: 120,
                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center'
                                   },
                                   items: [
                                       {
                                           xtype: 'container',
                                           width: '0.5%',
                                           height: 90,
                                       },
                                       {
                                           width: '33%',
                                           height: 90,
                                           id: 'htmlFloatPanel_AyohaReward_AyohaTapContestImg4',
                                           html: '<div onclick="FloatPanel_AyohaReward_AyohaTapContestImg(4);" style="width:100%;text-align:center;height:90px;"><img class="ballon_me" src="resources/icons/AyohaTabCoinBag.png" width="90px" height="90px" alt="Company Name"></div>',
                                       },
                                        {
                                            width: '33%',
                                            height: 90,
                                            id: 'htmlFloatPanel_AyohaReward_AyohaTapContestImg5',
                                            html: '<div onclick="FloatPanel_AyohaReward_AyohaTapContestImg(5);" style="width:100%;text-align:center;height:90px;"><img class="ballon_me" src="resources/icons/AyohaTabCoinBag.png" width="90px" height="90px" alt="Company Name"></div>',
                                        },
                                         {
                                             width: '33%',
                                             height: 90,
                                             id: 'htmlFloatPanel_AyohaReward_AyohaTapContestImg6',
                                             html: '<div onclick="FloatPanel_AyohaReward_AyohaTapContestImg(6);" style="width:100%;text-align:center;height:90px;"><img class="ballon_me" src="resources/icons/AyohaTabCoinBag.png" width="90px" height="90px" alt="Company Name"></div>',
                                         },
                                          {
                                              xtype: 'container',
                                              width: '0.5%',
                                              height: 90,
                                          },
                                   ]
                               },
                               {
                                   xtype: 'container',
                                   style: ' background-color:transparent;',
                                   width: '100%',
                                   height: 120,
                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center'
                                   },
                                   items: [
                                       {
                                           xtype: 'container',
                                           width: '0.5%',
                                           height: 90,
                                       },
                                       {
                                           width: '33%',
                                           height: 90,
                                           id: 'htmlFloatPanel_AyohaReward_AyohaTapContestImg7',
                                           html: '<div onclick="FloatPanel_AyohaReward_AyohaTapContestImg(7);" style="width:100%;text-align:center;height:90px;"><img class="ballon_me" src="resources/icons/AyohaTabCoinBag.png" width="90px" height="90px" alt="Company Name"></div>',
                                       },
                                        {
                                            width: '33%',
                                            height: 90,
                                            id: 'htmlFloatPanel_AyohaReward_AyohaTapContestImg8',
                                            html: '<div onclick="FloatPanel_AyohaReward_AyohaTapContestImg(8);" style="width:100%;text-align:center;height:90px;"><img class="ballon_me" src="resources/icons/AyohaTabCoinBag.png" width="90px" height="90px" alt="Company Name"></div>',
                                        },
                                         {
                                             width: '33%',
                                             height: 90,
                                             id: 'htmlFloatPanel_AyohaReward_AyohaTapContestImg9',
                                             html: '<div onclick="FloatPanel_AyohaReward_AyohaTapContestImg(9);" style="width:100%;text-align:center;height:90px;"><img class="ballon_me" src="resources/icons/AyohaTabCoinBag.png" width="90px" height="90px" alt="Company Name"></div>',
                                         },
                                          {
                                              xtype: 'container',
                                              width: '0.5%',
                                              height: 90,
                                          },
                                   ]
                               }
                               //{
                               //    width: '100%',
                               //    height: '100%',
                               //    id: 'htmlFloatPanel_AyohaReward_AyohaTapContestImgs',
                               //    html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                               //}
                           ]
                       },



                          {

                              xtype: 'container',
                              width: '100%',
                              docked: 'bottom',
                            //  height: 60,
                            //  hidden:true,
                              // width: 40,

                              //  title: '<font size="3" color="white">Live Tracking Map</font>',
                              //hidden: true,

                              id: 'containeFloatPanel_AyohaReward_AyohaTapContestBottom',
                              //    style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                              style: 'background-color:transparent;',

                              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                              // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                              layout: {
                                  type: 'vbox',
                                  pack: 'center',
                                  align: 'center',
                              },
                              // hidden:true,
                              items:
                                     [



                                         {

                                             xtype: 'container',

                                             width: '100%',
                                             height: 100,
                                             margin: '-150 0 0 0',
                                             name: 'containeFloatPanel_AyohaReward_AyohaTapContestSponserContest',
                                             //style: {
                                             //    // background: '#D25959',
                                             //    background: 'rgba(76, 175, 80, 0.3);',
                                             //    // border: '2px'
                                             //},
                                             style: 'background-color:transparent;',
                                             // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;',

                                             //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: yellow;border-radius: 20px 20px 20px 20px;',
                                             //style: 'border-right:4px solid black;border-left:4px solid black;border-bottom:4px solid black;border-top:4px solid black;background: yellow;border-radius: 20px 20px 20px 20px;',
                                             //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 20px 20px 20px 20px;',
                                             layout: {
                                                 type: 'vbox',
                                                 pack: 'start',
                                                 align: 'center',
                                             },
                                             items: [
                                                 {
                                                   // hidden:true,
                                                    id:'htmlFloatPanel_AyohaReward_AyohaTapContestSponserContestTitle',
                                                     html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:center;color:white;">Contest Sponsored By:</div>',
                                                 },
                                                 {
                                                     xtype: 'container',
                                                     width: '100%',
                                                     height:10,
                                                 },
                                                 {
                                                     xtype: 'container',
                                                     width: '100%',
                                                     height: 80,
                                                     layout: {
                                                         type: 'hbox',
                                                         pack: 'center',
                                                         align: 'center',
                                                     },
                                                     items: [
                                                         {
                                                             xtype: 'spacer',
                                                             width: 60,
                                                             hidden: true,
                                                         },
                                                        
                                                         //{
                                                         //    xtype: 'spacer',
                                                         //    width:10,
                                                         //},
                                                         {
                                                             xtype: 'container',
                                                            // flex: 1,
                                                            hidden:true,
                                                            id:'containerFloatPanel_AyohaReward_AyohaTapContestSponserContest0',
                                                             height: 65,
                                                             width:85,
                                                             margin: '-10 0 0 0',
                                                             layout: {
                                                                 type: 'vbox',
                                                                 pack: 'start',
                                                                 align: 'center',
                                                             },
                                                             items: [
                                                                  {
                                                                      id:'htmlFloatPanel_AyohaReward_AyohaTapContestSponserContest_EnterpriseLogo0',
                                                                      html: '<img src="resources/icons/bawaljuelogo.jpg" style="width:55px;height:55px;border-radius:50%;border:1px solid white;"/>',
                                                                  },
                                                                   {
                                                                       margin: '-4 0 0 0',
                                                                       id: 'htmlFloatPanel_AyohaReward_AyohaTapContestSponserContest_EnterpriseName0',
                                                                       html: '<div style="font-family:Arial, sans-serif;font-size:9px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:center;color:white;">Bawal by Jue</div>',
                                                                   },

                                                             ]
                                                         },
                                                           {
                                                               xtype: 'container',
                                                               // flex: 1,
                                                               height: 65,
                                                               width: 85,
                                                               hidden:true,
                                                               id:'containerFloatPanel_AyohaReward_AyohaTapContestSponserContest1',
                                                               margin: '-10 0 0 0',
                                                               layout: {
                                                                   type: 'vbox',
                                                                   pack: 'start',
                                                                   align: 'center',
                                                               },
                                                               items: [
                                                                     {
                                                                         id: 'htmlFloatPanel_AyohaReward_AyohaTapContestSponserContest_EnterpriseLogo1',
                                                                         html: '<img src="resources/icons/bawaljuelogo.jpg" style="width:55px;height:55px;border-radius:50%;border:1px solid white;"/>',
                                                                     },
                                                                   {
                                                                       margin: '-4 0 0 0',
                                                                       id: 'htmlFloatPanel_AyohaReward_AyohaTapContestSponserContest_EnterpriseName1',
                                                                       html: '<div style="font-family:Arial, sans-serif;font-size:9px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:center;color:white;">Bawal by Jue</div>',
                                                                   },


                                                               ]
                                                           },
                                                             {
                                                                 xtype: 'container',
                                                                 // flex: 1,
                                                                 height: 65,
                                                                 width: 85,
                                                                 hidden:true,
                                                                 id:'containerFloatPanel_AyohaReward_AyohaTapContestSponserContest2',
                                                                 margin: '-10 0 0 0',
                                                                 layout: {
                                                                     type: 'vbox',
                                                                     pack: 'start',
                                                                     align: 'center',
                                                                 },
                                                                 items: [
                                                                      {
                                                                          id: 'htmlFloatPanel_AyohaReward_AyohaTapContestSponserContest_EnterpriseLogo2',
                                                                          html: '<img src="resources/icons/bawaljuelogo.jpg" style="width:55px;height:55px;border-radius:50%;border:1px solid white;"/>',
                                                                      },
                                                                   {
                                                                       margin: '-4 0 0 0',
                                                                       id: 'htmlFloatPanel_AyohaReward_AyohaTapContestSponserContest_EnterpriseName2',
                                                                       html: '<div style="font-family:Arial, sans-serif;font-size:9px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:center;color:white;">Bawal by Jue</div>',
                                                                   },


                                                                 ]
                                                             },
                                                        
                                                             {
                                                                xtype: 'container',
                                                                // flex: 1,
                                                                height: 65,
                                                                width: 85,
                                                                hidden:true,
                                                                id:'containerFloatPanel_AyohaReward_AyohaTapContestSponserContest3',
                                                                margin: '-10 0 0 0',
                                                                layout: {
                                                                    type: 'vbox',
                                                                    pack: 'start',
                                                                    align: 'center',
                                                                },
                                                                items: [
                                                                     {
                                                                         id: 'htmlFloatPanel_AyohaReward_AyohaTapContestSponserContest_EnterpriseLogo3',
                                                                         html: '<img src="resources/icons/bawaljuelogo.jpg" style="width:55px;height:55px;border-radius:50%;border:1px solid white;"/>',
                                                                     },
                                                                  {
                                                                      margin: '-4 0 0 0',
                                                                      id: 'htmlFloatPanel_AyohaReward_AyohaTapContestSponserContest_EnterpriseName3',
                                                                      html: '<div style="font-family:Arial, sans-serif;font-size:9px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:center;color:white;">Bawal by Jue</div>',
                                                                  },


                                                                ]
                                                            },
                                                         // {
                                                         //     xtype: 'spacer',
                                                         //     width: 15,
                                                         // },
                                                         //{
                                                         //    xtype: 'container',
                                                         //    flex: 1,
                                                         //    layout: {
                                                         //        type: 'vbox',
                                                         //        pack: 'start',
                                                         //        align: 'center',
                                                         //    },
                                                         //    items: [
                                                         //         {
                                                         //             html: '<img src="resources/icons/communityCoffea.png" style="width:30px;height:30px;border-radius:50%"/>',
                                                         //         },
                                                         //          {
                                                         //              margin: '-8 0 0 0',
                                                         //              html: '<div style="font-family:Arial, sans-serif;font-size:9px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:center;color:black;">Community Coffee Sdn Bhd</div>',
                                                         //          },

                                                         //    ]
                                                         //}
                                                     ]

                                                 },
                                               
                                               
                                             


                                             ]
                                         },


                                         
                                         //{
                                         //    xtype: 'container',
                                         //    width: 210,
                                         //    height: 10,
                                         //    style: 'background-color:transparent;',
                                         //}



                                     ]

                          },



                ]

            },






        });

    return _FloatPanel_AyohaReward_AyohaTapContest;
}



function FloatPanel_AyohaReward_AyohaTapContestShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaReward_AyohaTapContest);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaReward_AyohaTapContest());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaReward_AyohaTapContestHide()");
    globalFloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWin_Status = "FAIL";
    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanel_AyohaReward_AyohaTapContest";
    is_FloatPanel_AyohaReward_AyohaTapContestOpen = 'Y';

    FloatPanel_AyohaReward_AyohaTapContestImgRandomNo();
    var x = parseInt(window.innerHeight);


    //var newHeights = x - 232;
    //  var newHeights = x - 50;






    //  Ext.getCmp('ContainerFloatPanel_AyohaReward_AyohaTapContestImg').setStyle('background-image: url(http://42.1.63.57/AyohaImgCard/AyohaRewardContest/AdverImg/contestAdvertisement01.png); background-size: 100% 100%;background-repeat: no-repeat;');


    //Ext.getCmp('htmlFloatPanel_AyohaReward_AyohaTapContestImg').setHtml('<img src="' + globalContestAdvertisementImgPath + '" width="100%" height="750px" alt="Company Name">');


    var containerView = Ext.ComponentQuery.query('container[name=containeFloatPanel_AyohaReward_AyohaTapContestSponserContest]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {
         // AyohaRewardContestantInsertUpdate();

          //  FloatPanel_AyohaReward_AyohaTapContestHide();
      }
    );


    //if (globalIsContestant == "Y") {
    //    Ext.getCmp('containeFloatPanel_AyohaReward_AyohaTapContestBottom').setHidden(true);
    //    var newHeights = x - 25;
    //    Ext.getCmp('htmlFloatPanel_AyohaReward_AyohaTapContestImg').setHtml('<img src="' + globalContestAdvertisementImgPath + '" width="100%" height="' + newHeights + 'px" alt="Company Name">');
    //} if (globalIsContestant == "N") {

    //    var newHeights = x - 80;
    //    Ext.getCmp('htmlFloatPanel_AyohaReward_AyohaTapContestImg').setHtml('<img src="' + globalContestAdvertisementImgPath + '" width="100%" height="' + newHeights + 'px" alt="Company Name">');
    //}



    var newHeights = x - 80;
   // Ext.getCmp('htmlFloatPanel_AyohaReward_AyohaTapContestImg').setHtml('<img src="' + globalDashboard_AyohaTapContestImg + '" width="100%" height="' + newHeights + 'px" alt="Company Name">');
   // Ext.getCmp('ContainerFloatPanel_AyohaReward_AyohaTapContest').setStyle('background-image: url(http://42.1.63.57/AyohaImgCard/AyohaRewardContest/AdverImg/ayohaTapContestbg01.jpg); background-size: 100% 100%;background-repeat: no-repeat;');
   // Ext.getCmp('htmlFloatPanel_AyohaReward_AyohaTapContestImg').setHtml('<img src="http://42.1.63.57/AyohaImgCard/AyohaRewardContest/AdverImg/ayohaTapContestbg.png" width="100%" height="' + newHeights + 'px" alt="Company Name">');



    // Ext.getCmp('ContainerFloatPanel_AyohaReward_AyohaTapContestImg').setHeight(newHeights);


    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    FloatPanel_GraphicConfetiShow();
    //});
    //task.delay(1000);

    FloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWinPrizeAmountLoadContestRule();
    FloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWinSponsorload();
}


function FloatPanel_AyohaReward_AyohaTapContestHide() {

    if (is_FloatPanel_AyohaReward_AyohaTapContestOpen == 'Y') {
        _FloatPanel_AyohaReward_AyohaTapContest.hide();
        is_FloatPanel_AyohaReward_AyohaTapContestOpen = 'N';
        RemovePages("FloatPanel_AyohaReward_AyohaTapContestHide()");
        FloatPanel_AyohaReward_AyohaTapContest_AnimateMainPageDashBoard();
        
       
        // swalFireSuccessStampedCardMsg("Stamped Success!!");
    }

}



function FloatPanel_AyohaReward_AyohaTapContest_AnimateMainPageDashBoard() {
    if (globalFloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWin_Status == "WIN") {
        FloatPanel_AyohaStore_AyohaPointCollectedAnimShow();
        var panel = Ext.getCmp('containerMyAccount_DashboardAyohaReward');
        panel.getScrollable().getScroller().scrollTo(0, 0, true);

    }

}

function AyohaRewardContestantInsertUpdatex() {

    var objn = {
        "ID": 0,
        "ContestCode": localStorage.getItem("ContestCode"),
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        "RowStatus": "Active",
        "JoinStatus": "Active",
        "Descriptions": "User Join Contest",
        "ModifiedBy": GetCurrAyohaUserAccountNo(),
    };
    console.log(objn);
    var _value = Ext.Ajax.request({
        type: "POST",
        url: GetAPIurl() + '/AyohaRewardContestant/AyohaRewardContestantInsertUpdate',
        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
                swalFireSuccess("Join Contest Successfully!");
                FloatPanel_AyohaReward_AyohaTapContestHide();

                Ext.Viewport.mask({ xtype: 'loadmask', message: 'ReLoading....' });
                var task = Ext.create('Ext.util.DelayedTask', function () {
                    AyohaRewardContestantLoadByContestCodeStore();
                    Ext.Viewport.setMasked(false);
                });
                task.delay(500);


            }
            else {
                swalFireFail("Send Failed!" + result.responseText.trim());
            }

            // Ext.Viewport.unmask();

        },

        failure: function (result, request) {

            //Ext.Viewport.unmask();
            swalFireFail("Send Failed!" + result.responseText.trim());
        }

    });
}


var globalFloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWin_Status;
function FloatPanel_AyohaReward_AyohaTapContestImg(idx) {

  
    if (globalFloatPanel_AyohaReward_AyohaTapContest_TapBalance) {

    } else {
        swalFireAyohaRewardContest_TapAndWin_WINMessage_HaveUndefinedBalance("<font size=4 color=black><b>Spend minimum RM 20.00 at our Ayoha Merchant and get TAPS chances!<b/></font>");
        return;
    }





    if (globalFloatPanel_AyohaReward_AyohaTapContest_TapBalance <= 0) {
        swalFireAyohaRewardContest_TapAndWin_WINMessage_HaveNoBalance("<font size=4 color=black><b>Get more chance by purchasing item from our Ayoha Merchant.<b/></font>");
        return;
    }

    if (globalFloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWin_Status == "WIN") {
       
       // swalFireAyohaRewardContest_TapAndWin_WINMessage("<font size=6 color=black><b>*RM" + globalFloatPanel_AyohaReward_AyohaTapContest_TapPrizeAmount + "*</b></font>  <br><font color=black size=3>.Has been credited to your Ayoha eWallet</font><br><br><font color=black size=3><b>You Have " + globalFloatPanel_AyohaReward_AyohaTapContest_TapBalance + " Chances Left<b/></font>");
        if (gloabalFloatPanel_AyohaReward_AyohaTapContestImgRandomNo == idx) {
            swalFireAyohaRewardContest_TapAndWin_WINMessage("<font size=6 color=black><b>*RM" + globalFloatPanel_AyohaReward_AyohaTapContest_TapPrizeAmount + "*</b></font>  <br><font color=black size=3>.Has been credited to your Ayoha eWallet</font><br>");
            return;
        }else
        {
            if (globalFloatPanel_AyohaReward_AyohaTapContest_TapBalance > 0) {
                swalFireAyohaRewardContest_TapAndWin_WINMessage_HaveBalance("<font size=4 color=black><b>You Still Have " + globalFloatPanel_AyohaReward_AyohaTapContest_TapBalance + " Chances Left<b/></font>");
                return;
            }
            if (globalFloatPanel_AyohaReward_AyohaTapContest_TapBalance < 0) {
                swalFireAyohaRewardContest_TapAndWin_WINMessage_HaveNoBalance("<font size=4 color=black><b>Get more chance by purchasing item from our Ayoha Merchant.<b/></font>");
                return;
            }
        }

        return;
    }




    if (gloabalFloatPanel_AyohaReward_AyohaTapContestImgRandomNo == idx) {
        //alert('you win!!!' + idx)
        globalFloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWin_Status = "WIN";
        Ext.getCmp('htmlFloatPanel_AyohaReward_AyohaTapContestImg' + idx).setHtml('<div onclick="FloatPanel_AyohaReward_AyohaTapContestImg(' + idx + ');" style="width:100%;text-align:center;height:100px;"><img class="blink_me" src="resources/icons/rmIcon.png" width="80px" height="80px" alt="Company Name"><br><div class="blink_me" style="font-family:Arial, sans-serif;font-size:21px;font-weight:bold;word-break:normal;margin:-18px 0px 0px 0px;width:100%;text-align:center;color:white;">RM' + globalFloatPanel_AyohaReward_AyohaTapContest_TapPrizeAmount + '</div></div>');
        Ext.getCmp('containerMainFloatPanel_AyohaReward_AyohaTapContestImg').setStyle('background-image: url("resources/icons/coinconfetti.gif"); background-size: 100% 100%;background-repeat: no-repeat;');
        
        Ext.getCmp('containerFloatPanel_AyohaReward_AyohaTapContest_TapChanceLeft').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaReward_AyohaTapContest_WinTapMessage').setHidden(false);
        Ext.getCmp('htmlFloatPanel_AyohaReward_AyohaTapContest_WinTapMessageStatic').setHtml('<div class="blink_me" style="background-color:transparent;height:40px;font-size: 22px;font-weight:bold;color:orange;text-align:center;vertical-align:middle;" >You Win</div>')
        Ext.getCmp('htmlFloatPanel_AyohaReward_AyohaTapContest_WinTapMessageIcon').setHtml('<div class="blink_me" style="background-color:transparent;width:80px;height:80px;text-align:center;vertical-align:middle;" ><img src="resources/icons/rmIcon.png" width="80px" height="80px"/></div>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_AyohaTapContest_WinTapMessageTxt').setHtml('<div class="blink_me" style="background-color:transparent;height:40px;font-size: 22px;font-weight:bold;color:orange;text-align:left;vertical-align:middle;" >RM' + globalFloatPanel_AyohaReward_AyohaTapContest_TapPrizeAmount + '!</div>');
       
        PlayAyohaSound("money-bonus.mp3");
        
        
        FloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWinLogInsert("WIN", idx);
       
        //id: 'htmlFloatPanel_AyohaReward_AyohaTapContestImg8',
        //html: '<div onclick="FloatPanel_AyohaReward_AyohaTapContestImg(8);" style="width:100%;text-align:center;height:100px;"><img class="ballon_me" src="resources/icons/AyohaTabCoinBag.png" width="100px" height="100px" alt="Company Name"></div>',
    } else {
        //toastMsgTapWIN("Play Again");
        //
        PlayAyohaSound("TapFail.mp3");
        Ext.getCmp('htmlFloatPanel_AyohaReward_AyohaTapContestImg' + idx).setHtml('<div style="width:100%;text-align:center;height:100px;"><img src="resources/icons/NoMoneyBagIcon.png" width="70px" height="70px" alt="Company Name"><br><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:bold;word-break:normal;margin:-19px 0px 0px 0px;width:100%;text-align:center;color:white;">RM 0.00</div></div>');
        globalFloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWin_Status = "FAIL";
        FloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWinLogInsert("FAIL", idx);

        Ext.getCmp('containerFloatPanel_AyohaReward_AyohaTapContest_TapChanceLeft').setHidden(false);
        Ext.getCmp('containerFloatPanel_AyohaReward_AyohaTapContest_WinTapMessage').setHidden(true);
        //Ext.getCmp('htmlFloatPanel_AyohaReward_AyohaTapContest_TapChanceLeftTxt').setHtml('<div class="example-2" style="border-right:2px solid #fac;border-left:2px solid  #fac;border-bottom:2px solid #fac;border-top:2px solid  #fac;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;width:80px;height:40px;font-size: 22px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:2px 0px 0px 0px;">' + globalFloatPanel_AyohaReward_AyohaTapContest_TapBalance + '</div></div>');

       
    }
    
}




var gloabalFloatPanel_AyohaReward_AyohaTapContestImgRandomNo;

function FloatPanel_AyohaReward_AyohaTapContestImgRandomNo() {
    gloabalFloatPanel_AyohaReward_AyohaTapContestImgRandomNo = randomNumber(1, 9);
    console.log(gloabalFloatPanel_AyohaReward_AyohaTapContestImgRandomNo)
    FloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWinTapNoSecInsert();
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var globalFloatPanel_AyohaReward_AyohaTapContest_TapPrizeAmount;
var globalFloatPanel_AyohaReward_AyohaTapContest_MembershipGroupCode;
var globalFloatPanel_AyohaReward_AyohaTapContest_TapBalance;

function FloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWinPrizeAmountLoadContestRule() {
  

    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "ContestCode": globalDashboard_AyohaTapContestCode
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardContestTapAndWinPrizeAmount/AyohaRewardContestTapAndWinPrizeAmountLoadContestRule',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                

                data = Ext.decode(result.responseText.trim());             
                if (data.success == "true") {
                    if (data.total > 0) {
                        globalFloatPanel_AyohaReward_AyohaTapContest_TapPrizeAmount = data.results[0].TapPrizeAmount;
                        globalFloatPanel_AyohaReward_AyohaTapContest_MembershipGroupCode = data.results[0].MembershipGroupCode;
                        globalFloatPanel_AyohaReward_AyohaTapContest_TapBalance = data.results[0].TapBalance;
                     
                    
                       
                        if (globalFloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWin_Status == "WIN") {
                            PlayAyohaSound("KidsCheering.mp3");
                           // Ext.getCmp('htmlDashboard_User_AyohaRewardContest01_TapChanceLeftTxt').setHtml('<div class="example-2" style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background:white;border-radius: 20px 20px 20px 20px;width:250px;height:50px;font-size: 12px;font-weight:bold;color:black;text-align:center;vertical-align:middle;" ><div style="margin:-4px 0px 0px 0px;">You Have <font size=6px>(' + globalFloatPanel_AyohaReward_AyohaTapContest_TapBalance + ')</font> Chance Left</div></div>');
                            Ext.getCmp('htmlDashboard_User_AyohaRewardContest01_TapChanceLeftTxt').setHtml('<div class="example-2" style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:250px;height:50px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:-8px 0px 0px 0px;">You Have <font size=6px>' + globalFloatPanel_AyohaReward_AyohaTapContest_TapBalance + '</font> Chance Left</div></div>');
                            Ext.getCmp('containerFloatPanel_AyohaReward_AyohaTapContest_TapChanceLeft').setHidden(true);
                            Ext.getCmp('containerFloatPanel_AyohaReward_AyohaTapContest_WinTapMessage').setHidden(false);
                            Ext.getCmp('htmlFloatPanel_AyohaReward_AyohaTapContest_WinTapMessageStatic').setHtml('<div class="blink_me" style="background-color:transparent;height:40px;font-size: 22px;font-weight:bold;color:orange;text-align:center;vertical-align:middle;" >You Win</div>')
                            Ext.getCmp('htmlFloatPanel_AyohaReward_AyohaTapContest_WinTapMessageIcon').setHtml('<div class="blink_me" style="background-color:transparent;width:80px;height:80px;text-align:center;vertical-align:middle;" ><img src="resources/icons/rmIcon.png" width="80px" height="80px"/></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaReward_AyohaTapContest_WinTapMessageTxt').setHtml('<div class="blink_me" style="background-color:transparent;height:40px;font-size: 22px;font-weight:bold;color:orange;text-align:left;vertical-align:middle;" >RM' + globalFloatPanel_AyohaReward_AyohaTapContest_TapPrizeAmount + '!</div>');
                            swalFireAyohaRewardContest_TapAndWin_WINMessage("<font size=6 color=black><b>*RM" + globalFloatPanel_AyohaReward_AyohaTapContest_TapPrizeAmount + "*</b></font>  <br><font color=black size=3>.Has been credited to your Ayoha eWallet</font><br>");
                            //swalFireAyohaRewardContest_TapAndWin_WINMessage("<font size=6 color=black><b>*RM" + globalFloatPanel_AyohaReward_AyohaTapContest_TapPrizeAmount + "*</b></font>  <br><font color=black size=3>.Has been credited to your Ayoha eWallet</font><br><br><font color=black size=3><b>You Have " + globalFloatPanel_AyohaReward_AyohaTapContest_TapBalance + " Chances Left<b/></font>");
                            FloatPanel_AyohaReward_AyohaTapContest_Dashboard_LoadAyohaEwallet();
                            
                        }
                        if (globalFloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWin_Status == "FAIL") {
                            Ext.getCmp('containerFloatPanel_AyohaReward_AyohaTapContest_TapChanceLeft').setHidden(false);
                            Ext.getCmp('containerFloatPanel_AyohaReward_AyohaTapContest_WinTapMessage').setHidden(true);
                            Ext.getCmp('htmlFloatPanel_AyohaReward_AyohaTapContest_TapChanceLeftTxt').setHtml('<div class="example-2" style="border-right:2px solid #fac;border-left:2px solid  #fac;border-bottom:2px solid #fac;border-top:2px solid  #fac;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;width:80px;height:40px;font-size: 22px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:2px 0px 0px 0px;">' + globalFloatPanel_AyohaReward_AyohaTapContest_TapBalance + '</div></div>');
                            //Ext.getCmp('htmlDashboard_User_AyohaRewardContest01_TapChanceLeftTxt').setHtml('<div class="example-2" style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background:white;border-radius: 20px 20px 20px 20px;width:250px;height:50px;font-size: 12px;font-weight:bold;color:black;text-align:center;vertical-align:middle;" ><div style="margin:-4px 0px 0px 0px;">You Have <font size=6px>(' + globalFloatPanel_AyohaReward_AyohaTapContest_TapBalance + ')</font> Chance Left</div></div>');
                            Ext.getCmp('htmlDashboard_User_AyohaRewardContest01_TapChanceLeftTxt').setHtml('<div class="example-2" style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:250px;height:50px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:-8px 0px 0px 0px;">You Have <font size=6px>' + globalFloatPanel_AyohaReward_AyohaTapContest_TapBalance + '</font> Chance Left</div></div>');
                        }
                      //  FloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWinSponsorload();
                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {
                        FloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWinSponsorload();
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
    task.delay(50);
}



function FloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWinLogInsert(TapStatus, TapNo) {
    var floatTapWinAmount = parseFloat(globalFloatPanel_AyohaReward_AyohaTapContest_TapPrizeAmount);
    var task = Ext.create('Ext.util.DelayedTask', function () {
    var objn = {        
        "ContestCode": globalDashboard_AyohaTapContestCode,
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        "TapCount":1,
        "TapStatus": TapStatus,
        "TapNo": TapNo,
        "TapNoSecret": gloabalFloatPanel_AyohaReward_AyohaTapContestImgRandomNo,
        "TapWinAmount": floatTapWinAmount.toFixed(2),
        "MembershipGroupCode": globalFloatPanel_AyohaReward_AyohaTapContest_MembershipGroupCode,
    };
    console.log(objn);
    var _value = Ext.Ajax.request({
        type: "POST",
        url: GetAPIurl() + '/AyohaRewardContestTapAndWinLog/AyohaRewardContestTapAndWinLogInsert',
        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                
                FloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWinPrizeAmountLoadContestRule();

            }
            else {
                swalFireFail("Send Failed!" + result.responseText.trim());
            }

            // Ext.Viewport.unmask();

        },

        failure: function (result, request) {

            //Ext.Viewport.unmask();
            swalFireFail("Send Failed!" + result.responseText.trim());
        }

    });
    });


    task.delay(10);
}

function FloatPanel_AyohaReward_AyohaTapContest_Dashboard_LoadAyohaEwallet() {
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
                        if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
                            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet_CurrentBalanceAmount').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 30px;font-weight:bold;color:#c800ffc9;margin:0px 0px 0px 0px">RM ' + globalDashboardeWalletCurrentBalance + '</div>');

                        }

                        if (isFloatPanel_AyohaStoreOpen == 'Y') {
                            Ext.getCmp('htmlFloatPanel_AyohaStore_TitleHeaderTxtAyohaEwallet').setHtml('<div  style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:black;margin:-3px 0px 0px 0px">Ayoha e-Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-24px 0px 0px 0px">RM ' + globalDashboardeWalletCurrentBalance + '</div>');

                        }
                        if (isFloatPanel_AyohaeWalletOpen == 'Y') {
                            //Ext.getCmp('htmlFloatPanel_AyohaeWalletHeader_AyohaeWalletTxt').setHtml('<div id="odometer_ewallet" class="odometer" style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:-7px 0px 0px 0px;background-color:transparent;color:white;padding:0px 25px;">RM' + globalDashboardeWalletCurrentBalance + '</div>');
                            Ext.getCmp('htmlFloatPanel_AyohaeWalletHeader_AyohaeWalletTxt').setHtml('<div id="odometer_ewallet" class="odometer" style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:-7px 0px 0px 0px;background-color:transparent;color:white;padding:0px 25px;">' + globalDashboardeWalletCurrentBalance + '</div>');
                            FloatPanel_AyohaStore_AyohaPointCollectedAnim_startCounter();
                        }

                        Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwallet').setHtml('<div  style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha e-Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">RM' + globalDashboardeWalletCurrentBalance + '</div>');
                      

                        // FloatPanel_AyohaStore_AyohaPointCollectedAnim_startCounter();

                        // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'



                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {
                        globalDashboardisUserHasEwalletAccount = "N";
                        localStorage.setItem("isUserHasEwalletAccount", "N");
                        if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
                            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet_CurrentBalanceAmount').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 30px;font-weight:bold;color:#c800ffc9;margin:0px 0px 0px 0px">RM 00.00</div>');

                        }
                        Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwallet').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha e-Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">RM 00.00</div>');

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


function FloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWinTapNoSecInsert() {
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "TapNo": gloabalFloatPanel_AyohaReward_AyohaTapContestImgRandomNo,
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "ContestCode": globalDashboard_AyohaTapContestCode,
        };
        console.log(objn);
        var _value = Ext.Ajax.request({
            type: "POST",
            url: GetAPIurl() + '/AyohaRewardContestTapAndWinLog/AyohaRewardContestTapAndWinTapNoSecInsert',
            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {




                }
                else {
                    swalFireFail("Send Failed!" + result.responseText.trim());
                }

                // Ext.Viewport.unmask();

            },

            failure: function (result, request) {

                //Ext.Viewport.unmask();
                swalFireFail("Send Failed!" + result.responseText.trim());
            }

        });

    });

  
    task.delay(800);

  
}
var arrglobalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseAccNo = [];
var arrglobalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseName = [];
var arrglobalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseLogo = [];

function FloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWinSponsorload() {
    arrglobalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseAccNo.length = 0;
    arrglobalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseName.length = 0;
    arrglobalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseLogo.length = 0;
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "IDK": "IDK",
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardContestTapAndWinSponsor/AyohaRewardContestTapAndWinSponsorload',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    if (data.total > 0) {
                        //globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseAccNo = data.results[0].EnterpriseAccNo;
                        //globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseName = data.results[0].EnterpriseName;
                        //globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseLogo = data.results[0].EnterpriseLogo;

                        for (i = 0; i < data.total; i++) {
                            arrglobalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseAccNo.push(data.results[i].EnterpriseAccNo);
                            arrglobalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseName.push(data.results[i].EnterpriseName);
                            arrglobalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseLogo.push(data.results[i].EnterpriseLogo);
                            
                            Ext.getCmp('containerFloatPanel_AyohaReward_AyohaTapContestSponserContest' + i).setHidden(false);
                            Ext.getCmp('htmlFloatPanel_AyohaReward_AyohaTapContestSponserContest_EnterpriseLogo' + i).setHtml('<img onclick="FloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWinSponsor_SetEnterpriseAccNo(' + i + ');FloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWinSponsor_OpenAyohaStore(' + i + ');" src="' + data.results[i].EnterpriseLogo + '" style="width:55px;height:55px;border-radius:50%;border:1px solid white;background-color:white;"/>');
                            Ext.getCmp('htmlFloatPanel_AyohaReward_AyohaTapContestSponserContest_EnterpriseName' + i).setHtml('<div onclick="FloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWinSponsor_SetEnterpriseAccNo(' + i + ');FloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWinSponsor_OpenAyohaStore(' + i + ');" style="font-family:Arial, sans-serif;font-size:9px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:center;color:white;">' + data.results[i].EnterpriseName + '</div>');
                        }
                        // console.log(globalFloatPanel_AyohaReward_AyohaTapContest_TapBalance);

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

var globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseAccNo;
var globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseName;
var globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseLogo;

function FloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWinSponsor_SetEnterpriseAccNo(idx) {


    globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseAccNo = arrglobalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseAccNo[idx];
    globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseName = arrglobalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseName[idx];
    globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseLogo = arrglobalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseLogo[idx];
    console.log(globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseAccNo);

}

function FloatPanel_AyohaReward_AyohaTapContest_AyohaRewardContestTapAndWinSponsor_OpenAyohaStore(idx) {
   

    //globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseAccNo = arrglobalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseAccNo[idx];
    //globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseName = arrglobalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseName[idx];
    //globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseLogo = arrglobalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseLogo[idx];
    FloatPanel_AyohaReward_AyohaTapContest_loadAyohaStore();
}




function FloatPanel_AyohaReward_AyohaTapContest_loadAyohaStore() {
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    _isFloatPanel_AyohaStore_SaleItemDetail_loadFirstTime = 'N';
  

  

        console.log(FloatPanel_AyohaStore_getEnterpriseAccNo());
        _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
        _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNo');
        _DataStore_EnterprisesLoadByMerchantCategory.load();


        _DataStore_EnterprisesLoadByMerchantCategory.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    console.log('Store loaded successfully, total records: ' + records.length);
        
                    var Store = records[0]; // Access only the first record
                    var ID = Store.get('ID');
        FloatPanel_OrderCartHide();
        FloatPanel_RewardStore_OpenStore_FromAyohaTabContest(ID);
        LoadingPanelHide();

                } else {
                    console.error('Failed to load store data or no record found.');
                    LoadingPanelHide();
                }
            }
        });
  


  


    Ext.Viewport.setMasked(false);
}