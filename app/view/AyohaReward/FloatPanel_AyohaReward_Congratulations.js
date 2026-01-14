Ext.define('BuskartApp.view.AyohaReward.FloatPanel_AyohaReward_Congratulations', {

});







var _FloatPanel_AyohaReward_Congratulations;

function FloatPanel_AyohaReward_Congratulations() {

    _FloatPanel_AyohaReward_Congratulations = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaReward_CongratulationsID',
            // xtype: 'panel',
            zIndex: 150,
            xtype: 'container',
            //height: 475,
            height: '100%',
            //  height: '60%',
            width: '100%',
           // styleHtmlContent: true,
            centered: true,
            //bottom: 64,
            // zIndex: 100,
            modal: true,
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

            style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',

            listeners: {
                initialize: function (c) {
                    this.element.on({
                        swipe: function (e, node, options) {
                            //if (e.direction == "up") {
                            //    LoyaltyCardRedeemListHide();
                            //}
                            if (e.direction == "left") {
                                is_FloatPanel_AyohaReward_CongratulationsOpen = 'N';
                                _FloatPanel_AyohaReward_Congratulations.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'left',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                RemovePages("FloatPanel_AyohaReward_CongratulationsHide()");
                            } if (e.direction == "right") {
                                is_FloatPanel_AyohaReward_CongratulationsOpen = 'N';

                                _FloatPanel_AyohaReward_Congratulations.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'right',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                RemovePages("FloatPanel_AyohaReward_CongratulationsHide()");
                            }
                            if (e.direction == "up") {
                                is_FloatPanel_AyohaReward_CongratulationsOpen = 'N';

                                _FloatPanel_AyohaReward_Congratulations.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'up',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                RemovePages("FloatPanel_AyohaReward_CongratulationsHide()");
                            }
                            if (e.direction == "down") {
                                is_FloatPanel_AyohaReward_CongratulationsOpen = 'N';

                                _FloatPanel_AyohaReward_Congratulations.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'down',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                RemovePages("FloatPanel_AyohaReward_CongratulationsHide()");
                            }

                           
                        }
                    });
                }
            },
            //style: 'background-color:rgba(255,255,255, 0.5);border-radius: 10px 10px 10px 10px;',
          //  style: 'background-color:white;border-radius: 0px 0px 0px 0px;',
            items: [

                   
                {
                    xtype: 'container',
                    style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                  //  style: 'background-color:rgba(0, 0, 0, 0.3);border-radius: 0px 0px 0px 0px;',
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
                            style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                            name: 'clickableContainerFloatPanel_AyohaReward_Congratulations',
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center'
                            },
                            width: '100%',
                            height: '100%',
                            //  margin:'-10 0 0 -7',
                            items: [
                                 {
                                     xtype: 'container',
                                     style: ' background-color:transparent',
                                     docked: 'top',
                                     id: 'FloatPanel_AyohaReward_CongratulationsHeader',
                                     layout: {
                                         type: 'vbox',
                                         pack: 'center',
                                         align: 'center'
                                     },
                                     height: 200,
                                     width: '100%',
                                     items: [
                                         {
                                             // margin: '-5 0 0 0',
                                             margin: '0 0 0 0',
                                             html: '<div style="background: transparent;width:100%;font-size:30px;font-weight:bold;color:white;text-align:center;" >Congratulations!!</div>',
                                         },
                                              {
                                                  width: 130,
                                                  height: 130,
                                                  margin: '20 0 0 0',
                                                  id: 'FloatPanel_AyohaReward_CongratulationsContestantImg',
                                                  html: '<img src="resources/icons/founder.jpg" style="width: 130px; height: 130px; border:3px solid #ECF0F1; border-radius: 50%; max-width:200px;">',
                                              },

                                  {
                                      margin: '5 0 0 0',
                                      id: 'FloatPanel_AyohaReward_CongratulationsContestantName',
                                      html: '<div style="background: transparent;width:100%;font-size:20px;font-weight:bold;color:white;text-align:center;" >IRWAN JAMIL</div>',
                                  },


                                   {
                                       margin: '0 0 0 0',
                                       html: '<div style="color:white;text-align: center;font-size:12px;width:100%;">Your Current Ranking is No</div>'
                                   },
                                                    {
                                                        margin: '0 0 0 0',
                                                        //   id: 'htmlYourRangking',
                                                        id: 'FloatPanel_AyohaReward_CongratulationsContestantRank',
                                                        html: '<div style="color:white;text-align: center;font-size:70px;width:100%;"><b>1</b></div>'
                                                    },



                                                    {
                                                        xtype: 'container',
                                                        style: ' background-color:transparent',
                                                        height: 2,
                                                        width:'90%'
                                                    }
                                     ]
                                 },

                               

                             



                                                    {
                                                        xtype: 'container',
                                                        width: '100%',
                                                        height: 320,                                                       
                                                        margin: '0 0 0 0',
                                                        id: 'ContainerFloatPanel_AyohaReward_CongratulationsPrize',
                                                        style: 'background-color:transparent;',
                                                        //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                        // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 10px 10px 10px 10px;border:2px solid #fac;',
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'start',
                                                            align: 'center',
                                                        },
                                                        items: [

                                                             {
                                                                 margin: '5 0 0 0',
                                                                 id: 'FloatPanel_AyohaReward_CongratulationsContestantRankingPrizeTxt',
                                                                 html: '<div style="color:white;text-align: center;font-size:20px;width:100%;font-weight:bold;">1st Ranking Prize !</div>'
                                                             },
                                                              
                                                            {
                                                                id: 'FloatPanel_AyohaReward_CongratulationsContestantImgPrize',
                                                                html: '<img src="resources/icons/Samsung Galaxy.png" style="width:300px;height:300px" alt="Company Name">',
                                                            },

                                                              {
                                                                  margin: '-2 0 0 0',
                                                                  id: 'FloatPanel_AyohaReward_CongratulationsContestantPrizeName',
                                                                  html: '<div style="background: transparent;width:100%;font-size:20px;font-weight:bold;color:white;text-align:center;" >Samsung Galaxy S21 5G .Worth RM 3,500</div>',
                                                              },
                                                              {
                                                                  margin: '-2 0 0 0',
                                                                  html: '<div  style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:white;text-align:center;" >(Colour might be different,depend on stock availability.)</div>',
                                                              }
                                                        ]
                                                    },







                                                     //{
                                                     //    xtype: 'container',
                                                     //    style: ' background-color:transparent',
                                                     //    id: 'ContainerFloatPanel_AyohaReward_CongratulationsPrize',
                                                     //    layout: {
                                                     //        type: 'vbox',
                                                     //        pack: 'start',
                                                     //        align: 'center'
                                                     //    },
                                                     //    width: '100%',
                                                     //    items: [

                                                     //          {
                                                     //              height: 250,
                                                     //              width: 250,

                                                     //              xtype: 'button',
                                                     //              ui: 'plain',
                                                     //              //margin: '0 0 0 0',
                                                     //              //id: 'btnFloatPanel_AyohaCardManagement_PreviewCardbottomFB',
                                                     //              //badgeText: "2",
                                                     //              id:'FloatPanel_AyohaReward_CongratulationsContestantImgPrize',
                                                     //              html: '<img src="resources/icons/Samsung Galaxy.png" style="width:240px;height:240px" alt="Company Name">',
                                                     //              //  html: '<img src="resources/icons/AyohaRankingRewardContest.png" style="width:99%;height:710px" alt="Company Name">',
                                                     //              handler: function () {

                                                     //                  FloatPanel_AyohaReward_CongratulationsHide();

                                                     //              },

                                                     //          },



                                                     //    ]
                                                     //},

                                                     


                            
                              


                                {
                                    xtype: 'container',
                                    style: ' background-color:transparent',
                                  //  style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                    docked: 'bottom',
                                    id: 'FloatPanel_AyohaReward_Congratulationsbottom',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'start',
                                        align: 'center'
                                    },
                                    width: '100%',
                                    height:70,
                                    items: [

                                        //{
                                        //    html: '<img src="resources/icons/attentiongraphic01.gif" style="width:80px;height:80px" alt="Company Name">',
                                        //},
                                         {
                                             //  xtype: 'button',
                                             //  align: 'stretch',
                                             // hidden:true,
                                             id: 'btnFloatPanel_AyohaReward_Congratulations_Notification_text',
                                             //ui: 'plain',
                                             width: '100%',
                                             //height: 50,
                                             margin: '2 0 0 0',
                                             // width: '80%',
                                             //style: {
                                             //    background: '#FA8072',
                                             //},
                                             // padding: '10px',
                                             // html: '<font size=3px color=white><center>*<i>Dear Contestant ,you need to maintaince your ranking until end of this contest to entitle redeem the prize</i></center></font>',
                                             html: '<div class="blink_me" style="background: transparent;width:100%;font-size: 12px;font-weight:bold;color:white;text-align:center;" >*<i>Please maintain your rank until the end of contest for entitlement to redeem the prize.REAL WINNER will be announced after contest end date</i></div>',
                                             // text: '<button class="button3">OK</button>',

                                             //handler: function () {

                                             //    FloatPanel_AyohaReward_CongratulationsHide();

                                             //},


                                         },


                                         {
                                             //  xtype: 'button',
                                             //  align: 'stretch',
                                             // hidden:true,
                                             id: 'FloatPanel_AyohaReward_Congratulations_ContestEndDate_text',
                                             //ui: 'plain',
                                             width: '100%',
                                             //height: 50,
                                             margin: '10 0 0 0',
                                             // width: '80%',
                                             //style: {
                                             //    background: '#FA8072',
                                             //},
                                             // padding: '10px',
                                             // html: '<font size=3px color=white><center>*<i>Dear Contestant ,you need to maintaince your ranking until end of this contest to entitle redeem the prize</i></center></font>',
                                             html: '<div style="background: transparent;width:100%;font-size: 14px;font-weight:normal;color:white;text-align:center;" >*Contest End Date : 30/8/2021 12:00AM</div>',
                                             // text: '<button class="button3">OK</button>',

                                             //handler: function () {

                                             //    FloatPanel_AyohaReward_CongratulationsHide();

                                             //},


                                         },
                                    ]
                                },

                                  



                            ]
                        },

                    ]
                },


                


        

            ]






        });

    return _FloatPanel_AyohaReward_Congratulations;
}



function FloatPanel_AyohaReward_CongratulationsShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaReward_Congratulations);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaReward_Congratulations());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaReward_CongratulationsHide()");
    is_FloatPanel_AyohaReward_CongratulationsOpen = 'Y';

    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_AyohaReward_Congratulations]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaReward_CongratulationsHide();
      }
    );
    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    FloatPanel_AyohaReward_CongratulationsHide();
    //});
    //task.delay(2000);











    Ext.getCmp('FloatPanel_AyohaReward_CongratulationsContestantImg').setHtml('<img src="' + myRankingContestantImge + '" style="width: 130px; height: 130px; border:3px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
    Ext.getCmp('FloatPanel_AyohaReward_CongratulationsContestantName').setHtml('<div style="background: transparent;width:100%;font-size:20px;font-weight:bold;color:white;text-align:center;" >' + myRankingContestantName + '</div>');
    Ext.getCmp('FloatPanel_AyohaReward_CongratulationsContestantRank').setHtml('<div style="color:white;text-align: center;font-size:70px;width:100%;"><b>' + myRankingNo + '</b></div>');


    if (myRankingNo == 1) {





        Ext.getCmp('FloatPanel_AyohaReward_CongratulationsContestantRankingPrizeTxt').setHtml('<div style="color:white;text-align: center;font-size:20px;width:100%;font-weight:bold;">1st Ranking Prize !</div>');
        Ext.getCmp('FloatPanel_AyohaReward_CongratulationsContestantImgPrize').setHtml('<img src="' + globalFirstPrizeImgPath + '" style="width:300px;height:300px" alt="Company Name">');
        Ext.getCmp('FloatPanel_AyohaReward_CongratulationsContestantPrizeName').setHtml('<div style="background: transparent;width:100%;font-size:20px;font-weight:bold;color:white;text-align:center;" >' + globalFirstPrizeImgName + '</div>');

    } if (myRankingNo == 2) {

        Ext.getCmp('FloatPanel_AyohaReward_CongratulationsContestantRankingPrizeTxt').setHtml('<div style="color:white;text-align: center;font-size:20px;width:100%;font-weight:bold;">2nd Ranking Prize !</div>');
        Ext.getCmp('FloatPanel_AyohaReward_CongratulationsContestantImgPrize').setHtml('<img src="' + globalSecondPrizeImgPath + '" style="width:300px;height:300px" alt="Company Name">');
        Ext.getCmp('FloatPanel_AyohaReward_CongratulationsContestantPrizeName').setHtml('<div style="background: transparent;width:100%;font-size:20px;font-weight:bold;color:white;text-align:center;" >' + globalSecondPrizeImgName + '</div>');

    } if (myRankingNo == 3) {
        Ext.getCmp('FloatPanel_AyohaReward_CongratulationsContestantRankingPrizeTxt').setHtml('<div style="color:white;text-align: center;font-size:20px;width:100%;font-weight:bold;">3rd Ranking Prize !</div>');
        Ext.getCmp('FloatPanel_AyohaReward_CongratulationsContestantImgPrize').setHtml('<img src="' + globalThirdPrizeImgPath + '" style="width:300px;height:300px" alt="Company Name">');
        Ext.getCmp('FloatPanel_AyohaReward_CongratulationsContestantPrizeName').setHtml('<div style="background: transparent;width:100%;font-size:20px;font-weight:bold;color:white;text-align:center;" >' + globalThirdPrizeImgName + '</div>');

    }
    if (myRankingNo > 3) {
        Ext.getCmp('FloatPanel_AyohaReward_CongratulationsContestantRankingPrizeTxt').setHtml('<div style="color:white;text-align: center;font-size:20px;width:100%;font-weight:bold;">Top 7 Consolation Prize !</div>');
        Ext.getCmp('FloatPanel_AyohaReward_CongratulationsContestantImgPrize').setHtml('<img src="' + globalConsolationPrizeImg + '" style="width:300px;height:300px" alt="Company Name">');
        Ext.getCmp('FloatPanel_AyohaReward_CongratulationsContestantPrizeName').setHtml('<div style="background: transparent;width:100%;font-size:20px;font-weight:bold;color:white;text-align:center;" >' + globalConsolationPrizeName + '</div>');
    }






    Ext.getCmp('btnFloatPanel_AyohaReward_Congratulations_Notification_text').setHtml('<div class="blink_me" style="background: transparent;width:100%;font-size: 12px;font-weight:bold;color:white;text-align:center;" >*<i>Please maintain your rank until the end of contest for entitlement to redeem the prize.REAL WINNER will be announced after contest end date</i></div>');
    
    Ext.getCmp('FloatPanel_AyohaReward_Congratulations_ContestEndDate_text').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:normal;color:white;text-align:center;" >*Contest End Date : ' + globalContestEndDateDateOnly + ' 12:00AM</div>');


}
var is_FloatPanel_AyohaReward_CongratulationsOpen = 'N';

function FloatPanel_AyohaReward_CongratulationsHide() {

    if (is_FloatPanel_AyohaReward_CongratulationsOpen == 'Y') {
        _FloatPanel_AyohaReward_Congratulations.hide();
        is_FloatPanel_AyohaReward_CongratulationsOpen = 'N';
        RemovePages("FloatPanel_AyohaReward_CongratulationsHide()");
        // swalFireSuccessStampedCardMsg("Stamped Success!!");
    }

}







