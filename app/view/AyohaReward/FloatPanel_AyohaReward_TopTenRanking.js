Ext.define('BuskartApp.view.AyohaReward.FloatPanel_AyohaReward_TopTenRanking', {

});

var _FloatPanel_AyohaReward_TopTenRanking;


var isFloatPanel_AyohaReward_TopTenRankingOpen = 'N';





function FloatPanel_AyohaReward_TopTenRanking() {

    _FloatPanel_AyohaReward_TopTenRanking =
    Ext.create('Ext.Panel', {
        zIndex: 50,
        xtype: 'container',
        //height: 465,
        //  height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaReward_TopTenRankingID',
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
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
        style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            isFloatPanel_AyohaReward_TopTenRankingOpen = 'N';
                            RemovePages("FloatPanel_AyohaReward_TopTenRankingHide()");
                            _FloatPanel_AyohaReward_TopTenRanking.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                        } if (e.direction == "right") {
                            isFloatPanel_AyohaReward_TopTenRankingOpen = 'N';
                            RemovePages("FloatPanel_AyohaReward_TopTenRankingHide()");
                            _FloatPanel_AyohaReward_TopTenRanking.hide(Ext.fx.Animation({
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
              //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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
                                docked: 'top',
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_AyohaReward_TopTenRankingHeader',
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
                                                         id: 'btnFloatPanel_AyohaReward_TopTenRankingBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             // FloatPanel_AyohaReward_TopTenRankingHide();
                                                             // FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                             isFloatPanel_AyohaReward_TopTenRankingOpen = 'N';
                                                             _FloatPanel_AyohaReward_TopTenRanking.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             RemovePages("FloatPanel_AyohaReward_TopTenRankingHide()");
                                                             //  FloatPanel_AyohaReward_TopTenRanking_AddCardHide();

                                                         }
                                                     },

                                                      {
                                                          xtype: 'spacer',

                                                      },


                                                      {
                                                          margin: '0 0 0 0',
                                                          id: 'htmlFloatPanel_AyohaReward_TopTenRanking_TitleHeaderTxt',
                                                          html: '<font size=2 color=white><b>Ayoha Reward Top 10 Ranking</b></font>'
                                                      },


                                                            {
                                                                xtype: 'button',
                                                                id: 'btnFloatPanel_AyohaReward_TopTenRanking_CardIcon',
                                                                height: 30,
                                                                width: 35,
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/ranking03.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                    isFloatPanel_AyohaReward_TopTenRankingOpen = 'N';

                                                                    _FloatPanel_AyohaReward_TopTenRanking.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    RemovePages("FloatPanel_AyohaReward_TopTenRankingHide()");
                                                                    //FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                                }
                                                            },









                                       ]

                            },






                            {
                                xtype: 'container',
                                width: '100%',
                                height: 260,
                                margin: '10 0 0 5',
                                id: 'containerFloatPanel_AyohaReward_TopTenRankingBar',
                                //style: {
                                //    // background: '#D25959',
                                //    background: 'rgba(76, 175, 80, 0.3);',
                                //    // border: '2px'
                                //},
                                // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
                                style: 'background-color:transparent;border-bottom:2px none white;',
                                //  style: 'background-image: url("resources/icons/sportlight03-removebg-preview.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center',
                                },

                                items: [
                                     {
                                         xtype: 'container',
                                         width: '31%',
                                         height: 260,
                                         margin: '0 0 0 0',
                                         name: 'containerFloatPanel_AyohaReward_TopTenRankingBar01',
                                         //style: {
                                         //    // background: '#D25959',
                                         //    background: 'rgba(76, 175, 80, 0.3);',
                                         //    // border: '2px'
                                         //},
                                         //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                         style: 'background-color:transparent',
                                         layout: {
                                             type: 'vbox',
                                             pack: 'end',
                                             align: 'center',
                                         },

                                         items: [

                                              //{
                                              //    xtype: 'button',
                                              //    height: 70,
                                              //    width: 70,
                                              //    margin: '0 0 0 3',
                                              //    id: 'btnFloatPanel_AyohaReward_TopTenRanking01',
                                              //    //badgeText: "2",
                                              //    html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:60px;height:60px" ><img src="resources/icons/familyPic/AzuImg.jpg"  style="width: 60px; height: 60px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px"></div>',
                                              //    ui: 'plain',
                                              //    handler: function () {



                                              //    }
                                              //},




                                              {
                                                  //xtype: 'button',

                                                  xtype: 'container',
                                                  style: 'border-radius: 50%;background-color:rgba(255, 255, 255, 0.3);',
                                                  height: 80,
                                                  width: 80,
                                                  margin: '-38 0 0 0',
                                                  id: 'btnFloatPanel_AyohaReward_TopTenRanking01',
                                                  //badgeText: "2",
                                                  //  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50%;width:100px;height:100px;background-color:rgba(255, 255, 255, 0.3);" ><img src="resources/icons/founder.jpg"  style="width: 90px; height: 90px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px;"></div>',
                                                  //ui: 'plain',
                                                  //handler: function () {



                                                  //}

                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center',
                                                  },
                                                  items: [
                                                      {
                                                          height: 70,
                                                          width: 70,
                                                          html: '<img src="resources/icons/familyPic/AzuImg.jpg"  style="width: 70px; height: 70px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;">',
                                                      }
                                                  ]
                                              },




                                               {
                                                   margin: '0 0 0 0',
                                                   id: 'htmlFloatPanel_AyohaReward_TopTenRanking01_Name',
                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                   html: '<div style="color:white;text-align: center;font-size:12px;width:100%;"><b>Azuliana</b></div>'
                                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                               },
                                                {
                                                    margin: '-2 0 0 0',
                                                    id: 'htmlFloatPanel_AyohaReward_TopTenRanking01_AyohaPoint',
                                                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                    html: '<div style="color:white;text-align: center;font-size:10px;width:100%;"><b>2000 Point</b></div>'
                                                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                                },

                                                {
                                                    xtype: 'container',
                                                    width: 100,
                                                    height: 80,
                                                    margin: '0 0 0 0',
                                                    name: 'containerFloatPanel_AyohaReward_TopTenRankingBar01_Bar',
                                                    //style: {
                                                    //    // background: '#D25959',
                                                    //    background: 'rgba(76, 175, 80, 0.3);',
                                                    //    // border: '2px'
                                                    //},
                                                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                    style: 'background-color:#AFEEEE;border-radius: 5px 5px 0px 0px;border-top:2px solid white;border-right:2px solid white;border-bottom:2px none white;border-left:2px solid white;',
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center',
                                                    },
                                                    items: [
                                                        {
                                                            html: '<div style="color:white;text-align: center;font-size:30px;width:100%;"><b>2</b></div>'
                                                        }
                                                    ]

                                                }



                                         ]
                                     },


                                      {
                                          xtype: 'container',
                                          width: '31%',
                                          height: 260,
                                          margin: '0 0 0 6',
                                          name: 'containerFloatPanel_AyohaReward_TopTenRankingBar02',
                                          //style: {
                                          //    // background: '#D25959',
                                          //    background: 'rgba(76, 175, 80, 0.3);',
                                          //    // border: '2px'
                                          //},
                                          //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                          style: 'background-color:transparent',
                                          layout: {
                                              type: 'vbox',
                                              pack: 'end',
                                              align: 'center',
                                          },

                                          items: [


                                              {
                                                  //xtype: 'button',

                                                  xtype: 'container',
                                                  style: 'border-radius: 50%;background-color:rgba(255, 255, 255, 0.3);',
                                                  height: 90,
                                                  width: 90,
                                                  margin: '-38 0 0 0',
                                                  id: 'btnFloatPanel_AyohaReward_TopTenRanking02',
                                                  //badgeText: "2",
                                                  //  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50%;width:100px;height:100px;background-color:rgba(255, 255, 255, 0.3);" ><img src="resources/icons/founder.jpg"  style="width: 90px; height: 90px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px;"></div>',
                                                  //ui: 'plain',
                                                  //handler: function () {



                                                  //}

                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center',
                                                  },
                                                  items: [
                                                      {
                                                          height: 80,
                                                          width: 80,
                                                          html: '<img src="resources/icons/founder.jpg"  style="width: 80px; height: 80px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;">',
                                                      }
                                                  ]
                                              },
                                               {
                                                   margin: '0 0 0 0',
                                                   id: 'htmlFloatPanel_AyohaReward_TopTenRanking02_Name',
                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                   html: '<div style="color:white;text-align: center;font-size:12px;width:100%;"><b>Mizi</b></div>'
                                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                               },
                                                {
                                                    margin: '-2 0 0 0',
                                                    id: 'htmlFloatPanel_AyohaReward_TopTenRanking02_AyohaPoint',
                                                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                    html: '<div style="color:white;text-align: center;font-size:10px;width:100%;"><b>4870 Point</b></div>'
                                                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                                },

                                                 {
                                                     xtype: 'container',
                                                     width: 110,
                                                     height: 120,
                                                     margin: '0 0 0 0',
                                                     name: 'containerFloatPanel_AyohaReward_TopTenRankingBar02_Bar',
                                                     //style: {
                                                     //    // background: '#D25959',
                                                     //    background: 'rgba(76, 175, 80, 0.3);',
                                                     //    // border: '2px'
                                                     //},
                                                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                     style: 'background-color:#FF69B4;border-radius: 5px 5px 0px 0px;border-top:2px solid white;border-right:2px solid white;border-bottom:2px none white;border-left:2px solid white;',
                                                     layout: {
                                                         type: 'vbox',
                                                         pack: 'center',
                                                         align: 'center',
                                                     },
                                                     items: [
                                                         {
                                                             html: '<div style="color:white;text-align: center;font-size:30px;width:100%;"><b>1</b></div>'
                                                         }
                                                     ]

                                                 }


                                          ]
                                      },





                                       {
                                           xtype: 'container',
                                           width: '31%',
                                           height: 260,
                                           margin: '0 0 0 0',
                                           name: 'containerFloatPanel_AyohaReward_TopTenRankingBar03',
                                           //style: {
                                           //    // background: '#D25959',
                                           //    background: 'rgba(76, 175, 80, 0.3);',
                                           //    // border: '2px'
                                           //},
                                           //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                           style: 'background-color:transparent',
                                           layout: {
                                               type: 'vbox',
                                               pack: 'end',
                                               align: 'center',
                                           },

                                           items: [


                                                //{
                                                //    xtype: 'button',
                                                //    height: 70,
                                                //    width: 70,
                                                //    margin: '20 0 0 0',
                                                //    id: 'btnFloatPanel_AyohaReward_TopTenRanking03',
                                                //    //badgeText: "2",
                                                //    html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:60px;height:60px" ><img src="resources/icons/familyPic/anisAqilahImg.jpg"  style="width: 60px; height: 60px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px"></div>',
                                                //    ui: 'plain',
                                                //    handler: function () {



                                                //    }
                                                //},

                                                {
                                                    //xtype: 'button',

                                                    xtype: 'container',
                                                    style: 'border-radius: 50%;background-color:rgba(255, 255, 255, 0.3);',
                                                    height: 80,
                                                    width: 80,
                                                    margin: '-38 0 0 0',
                                                    id: 'btnFloatPanel_AyohaReward_TopTenRanking03',
                                                    //badgeText: "2",
                                                    //  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50%;width:100px;height:100px;background-color:rgba(255, 255, 255, 0.3);" ><img src="resources/icons/founder.jpg"  style="width: 90px; height: 90px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px;"></div>',
                                                    //ui: 'plain',
                                                    //handler: function () {



                                                    //}

                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center',
                                                    },
                                                    items: [
                                                        {
                                                            height: 70,
                                                            width: 70,
                                                            html: '<img src="resources/icons/familyPic/anisAqilahImg.jpg"  style="width: 70px; height: 70px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;">',
                                                        }
                                                    ]
                                                },
                                                {
                                                    margin: '0 0 0 0',
                                                    id: 'htmlFloatPanel_AyohaReward_TopTenRanking03_Name',
                                                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                    html: '<div style="color:white;text-align: center;font-size:12px;width:100%;"><b>A.Aqilah</b></div>'
                                                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                                },
                                                 {
                                                     margin: '-2 0 0 0',
                                                     id: 'htmlFloatPanel_AyohaReward_TopTenRanking03_AyohaPoint',
                                                     //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                     html: '<div style="color:white;text-align: center;font-size:10px;width:100%;"><b>1120 Point</b></div>'
                                                     // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                                 },

                                                    {
                                                        xtype: 'container',
                                                        width: 90,
                                                        height: 40,
                                                        margin: '0 0 0 0',
                                                        name: 'containerFloatPanel_AyohaReward_TopTenRankingBar03_Bar',
                                                        //style: {
                                                        //    // background: '#D25959',
                                                        //    background: 'rgba(76, 175, 80, 0.3);',
                                                        //    // border: '2px'
                                                        //},
                                                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                        style: 'background-color:#FADC77; border-radius: 5px 5px 0px 0px;border-top:2px solid white;border-right:2px solid white;border-bottom:2px none white;border-left:2px solid white;',
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'center',
                                                            align: 'center',
                                                        },
                                                        items: [
                                                            {
                                                                html: '<div style="color:white;text-align: center;font-size:30px;width:100%;"><b>3</b></div>'
                                                            }
                                                        ]

                                                    }

                                           ]
                                       },

                                ]
                            },
                            {
                                xtype: 'container',
                                width: '95%',
                                height: 20,
                                hidden:true,
                                margin: '0 0 0 10',
                                name: 'containerFloatPanel_AyohaReward_TopTenRankingLine',
                                //style: {
                                //    // background: '#D25959',
                                //    background: 'rgba(76, 175, 80, 0.3);',
                                //    // border: '2px'
                                //},
                                // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
                                // style: 'background-color:transparent;border-bottom:2px solid white;',
                                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:4px solid #ECF0F1 ;background: transparent;border-radius: 0px 0px 0px 0px;',
                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center',
                                },


                                items: [

                                ]
                            },


                            {
                                xtype: 'container',
                                width: '100%',
                               // height: '100%',
                                margin: '0 0 0 0',
                                id: 'containerFloatPanel_AyohaReward_TopTenRankingListOutter',
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
                                        //height: 355,                              
                                        margin: '0 0 0 0',
                                        id: 'containerFloatPanel_AyohaReward_TopTenRankingList',
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
                                                height: 40,
                                                margin: '10 0 0 0',
                                                id: 'containerFloatPanel_AyohaReward_TopTenRankingList04',
                                                name: 'namecontainerFloatPanel_AyohaReward_TopTenRankingList04',
                                                //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                                                //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking04_Txt_No4',
                                                        margin: '0 0 0 0',
                                                        //  height: 20,
                                                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:20px">4</div>'
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                    {
                                                        //height: 28,
                                                        //width: 28,
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking04_Image',
                                                        //badgeText: "2",
                                                        html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/familyPic/NaurahImg.jpg"  style="width: 40px; height: 40px; border:2px solid white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                     {
                                                         //height: 28,
                                                         //width: 28,
                                                         id: 'htmlFloatPanel_AyohaReward_TopTenRanking04_Name',
                                                         //badgeText: "2",
                                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">A.Naurah</div>'
                                                     },

                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking04_Txt',
                                                        margin: '0 0 0 0',
                                                        //  height: 20,
                                                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                                    },
                                                {
                                                    xtype: 'spacer',
                                                    width: 10
                                                },
                                                ]

                                            },

                                            {

                                                xtype: 'container',
                                                width: '100%',
                                                height: 40,
                                                margin: '10 0 0 0',
                                                id: 'containerFloatPanel_AyohaReward_TopTenRankingList05',
                                                name: 'namecontainerFloatPanel_AyohaReward_TopTenRankingList05',
                                                //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                                                //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking05_Txt_No5',
                                                        margin: '0 0 0 0',
                                                        //  height: 20,
                                                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:20px">5</div>'
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                    {
                                                        //height: 28,
                                                        //width: 28,
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking05_Image',
                                                        //badgeText: "2",
                                                        html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/familyPic/aslamImg.jpg"  style="width: 40px; height: 40px; border:2px solid white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                     {
                                                         //height: 28,
                                                         //width: 28,
                                                         id: 'htmlFloatPanel_AyohaReward_TopTenRanking05_Name',
                                                         //badgeText: "2",
                                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Muhammad Aslam</div>'
                                                     },

                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking05_Txt',
                                                        margin: '0 0 0 0',
                                                        //  height: 20,
                                                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">850 Points</div>'
                                                    },
                                                {
                                                    xtype: 'spacer',
                                                    width: 10
                                                },
                                                ]

                                            },
                                            {

                                                xtype: 'container',
                                                width: '100%',
                                                height: 40,
                                                margin: '10 0 0 0',
                                                id: 'containerFloatPanel_AyohaReward_TopTenRankingList06',
                                                name: 'namecontainerFloatPanel_AyohaReward_TopTenRankingList06',
                                                //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                                                //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking06_Txt_No6',
                                                        margin: '0 0 0 0',
                                                        //  height: 20,
                                                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:20px">6</div>'
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                    {
                                                        //height: 28,
                                                        //width: 28,
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking06_Image',
                                                        //badgeText: "2",
                                                        html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/familyPic/maryamImg.jpg"  style="width: 40px; height: 40px; border:2px solid white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                     {
                                                         //height: 28,
                                                         //width: 28,
                                                         id: 'htmlFloatPanel_AyohaReward_TopTenRanking06_Name',
                                                         //badgeText: "2",
                                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">A.Maryam</div>'
                                                     },

                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking06_Txt',
                                                        margin: '0 0 0 0',
                                                        //  height: 20,
                                                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">790 Points</div>'
                                                    },
                                                {
                                                    xtype: 'spacer',
                                                    width: 10
                                                },
                                                ]

                                            },
                                            {

                                                xtype: 'container',
                                                width: '100%',
                                                height: 40,
                                                margin: '10 0 0 0',
                                                id: 'containerFloatPanel_AyohaReward_TopTenRankingList07',
                                                name: 'namecontainerFloatPanel_AyohaReward_TopTenRankingList07',
                                                //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                                                //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking07_Txt_No7',
                                                        margin: '0 0 0 0',
                                                        //  height: 20,
                                                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:20px">7</div>'
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                    {
                                                        //height: 28,
                                                        //width: 28,
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking07_Image',
                                                        //badgeText: "2",
                                                        html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/familyPic/Akmal.jpg"  style="width: 40px; height: 40px; border:2px solid white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                     {
                                                         //height: 28,
                                                         //width: 28,
                                                         id: 'htmlFloatPanel_AyohaReward_TopTenRanking07_Name',
                                                         //badgeText: "2",
                                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Akmal</div>'
                                                     },

                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking07_Txt',
                                                        margin: '0 0 0 0',
                                                        //  height: 20,
                                                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">700 Points</div>'
                                                    },
                                                {
                                                    xtype: 'spacer',
                                                    width: 10
                                                },
                                                ]

                                            },


                                            {

                                                xtype: 'container',
                                                width: '100%',
                                                height: 40,
                                                margin: '10 0 0 0',
                                                id: 'containerFloatPanel_AyohaReward_TopTenRankingList08',
                                                name: 'namecontainerFloatPanel_AyohaReward_TopTenRankingList08',
                                                //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                                                //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking08_Txt_No8',
                                                        margin: '0 0 0 0',
                                                        //  height: 20,
                                                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:20px">8</div>'
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                    {
                                                        //height: 28,
                                                        //width: 28,
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking08_Image',
                                                        //badgeText: "2",
                                                        html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/familyPic/haziq.jpg"  style="width: 40px; height: 40px; border:2px solid white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                     {
                                                         //height: 28,
                                                         //width: 28,
                                                         id: 'htmlFloatPanel_AyohaReward_TopTenRanking08_Name',
                                                         //badgeText: "2",
                                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Haziq</div>'
                                                     },

                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking08_Txt',
                                                        margin: '0 0 0 0',
                                                        //  height: 20,
                                                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">663 Points</div>'
                                                    },
                                                {
                                                    xtype: 'spacer',
                                                    width: 10
                                                },
                                                ]

                                            },




                                            {

                                                xtype: 'container',
                                                width: '100%',
                                                height: 40,
                                                margin: '10 0 0 0',
                                                id: 'containerFloatPanel_AyohaReward_TopTenRankingList09',
                                                name: 'namecontainerFloatPanel_AyohaReward_TopTenRankingList09',
                                                //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                                                //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking09_Txt_No9',
                                                        margin: '0 0 0 0',
                                                        //  height: 20,
                                                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:20px">9</div>'
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                    {
                                                        //height: 28,
                                                        //width: 28,
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking09_Image',
                                                        //badgeText: "2",
                                                        html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/familyPic/Syafiq.jpg"  style="width: 40px; height: 40px; border:2px solid white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                     {
                                                         //height: 28,
                                                         //width: 28,
                                                         id: 'htmlFloatPanel_AyohaReward_TopTenRanking09_Name',
                                                         //badgeText: "2",
                                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Syafiq</div>'
                                                     },

                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking09_Txt',
                                                        margin: '0 0 0 0',
                                                        //  height: 20,
                                                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">500 Points</div>'
                                                    },
                                                {
                                                    xtype: 'spacer',
                                                    width: 10
                                                },
                                                ]

                                            },

                                            {

                                                xtype: 'container',
                                                width: '100%',
                                                height: 40,
                                                margin: '10 0 0 0',
                                                id: 'containerFloatPanel_AyohaReward_TopTenRankingList10',
                                                name: 'namecontainerFloatPanel_AyohaReward_TopTenRankingList10',
                                                //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                                                //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'spacer',
                                                        width: 4
                                                    },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking10_Txt_No10',
                                                        margin: '0 0 0 0',
                                                        //  height: 20,
                                                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:20px">10</div>'
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                    {
                                                        //height: 28,
                                                        //width: 28,
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking10_Image',
                                                        //badgeText: "2",
                                                        html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/familyPic/Mae.jpg"  style="width: 40px; height: 40px; border:2px solid white; border-radius: 50%;  margin:-6px 0px 0px 0px"></div>',
                                                    },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 10
                                                    },
                                                     {
                                                         //height: 28,
                                                         //width: 28,
                                                         id: 'htmlFloatPanel_AyohaReward_TopTenRanking10_Name',
                                                         //badgeText: "2",
                                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">Ismael</div>'
                                                     },

                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_TopTenRanking10_Txt',
                                                        margin: '0 0 0 0',
                                                        //  height: 20,
                                                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">330 Points</div>'
                                                    },
                                                {
                                                    xtype: 'spacer',
                                                    width: 10
                                                },
                                                ]

                                            },
                                            


                                        ]

                                    },



                                    {
                                        xtype: 'container',
                                        width: '100%',
                                        height: 40,
                                        docked: 'bottom',
                                        //  margin: '30 0 0 0',
                                        id: 'containerFloatPanel_AyohaReward_TopTenRankingBottom',
                                        // name: 'namecontainerFloatPanel_AyohaReward_TopTenRankingList04',
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
                                               width: 185,
                                               height: 40,
                                               margin: '-50 0 0 0',
                                               name: 'containerFloatPanel_AyohaReward_TopTenRankingMyRankingBtn',
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
                                                       html: '<font size=2 color=white>View My Ranking</font>',
                                                   },
                                                    {
                                                        margin: '8 0 0 0',
                                                        html: '<img src="resources/icons/ranking03.png"  style="width: 30px; height: 30px;   margin:-6px 0px 0px 10px;">',
                                                    }


                                               ]
                                           },
                                           //{
                                           //    xtype: 'container',
                                           //    width: '100%',
                                           //    height: 50,
                                           //    margin: '0 0 0 0',
                                           //  //  id: 'containerFloatPanel_AyohaReward_TopTenRankingMyRankingBtn',
                                           //    style: 'background-color:transparent;',
                                           //}
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
    return _FloatPanel_AyohaReward_TopTenRanking;



}








function FloatPanel_AyohaReward_TopTenRankingShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaReward_TopTenRanking);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaReward_TopTenRanking());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaReward_TopTenRankingHide()");
    isFloatPanel_AyohaReward_TopTenRankingOpen = 'Y';
    FloatPanel_AyohaReward_TopTenRankingAdjustHeight();
}





function FloatPanel_AyohaReward_TopTenRankingHide() {
    // FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
    if (isFloatPanel_AyohaReward_TopTenRankingOpen == "Y") {
        _FloatPanel_AyohaReward_TopTenRanking.hide(); isFloatPanel_AyohaReward_TopTenRankingOpen = 'N';
        RemovePages("FloatPanel_AyohaReward_TopTenRankingHide()");
    }
    
}



function FloatPanel_AyohaReward_TopTenRankingAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    //var newHeights = x - 232;
    var newHeights = x - 250;
    console.log(newHeights)

  //  480px 
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;

    Ext.getCmp('FloatPanel_AyohaReward_TopTenRankingID').setHeight(x + 10);
    Ext.getCmp('containerFloatPanel_AyohaReward_TopTenRankingList').setHeight(newHeights);
    Ext.getCmp('containerFloatPanel_AyohaReward_TopTenRankingListOutter').setHeight(newHeights-50);

    


}
