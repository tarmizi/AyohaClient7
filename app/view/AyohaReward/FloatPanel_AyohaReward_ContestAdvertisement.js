Ext.define('BuskartApp.view.AyohaReward.FloatPanel_AyohaReward_ContestAdvertisement', {

});




var is_FloatPanel_AyohaReward_ContestAdvertisementOpen = "N";


var _FloatPanel_AyohaReward_ContestAdvertisement;

function FloatPanel_AyohaReward_ContestAdvertisement() {

    _FloatPanel_AyohaReward_ContestAdvertisement = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_AyohaReward_ContestAdvertisementID',
            name: 'clickableContainerFloatPanel_AyohaReward_ContestAdvertisement',
            // xtype: 'panel',
            zIndex: 300,
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

            //style: 'background-image: url("resources/icons/LatestConfetiTwo.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
         //   style: ' background-color:transparent;',
           // style: 'background-image: url("resources/icons/AyohaRankingRewardContest01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
            //style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
            style: ' background-color: #fac;background-image: linear-gradient( #c800ffc9,#ff00de75)',
            listeners: {
                initialize: function (c) {
                    this.element.on({
                        swipe: function (e, node, options) {
                            //if (e.direction == "up") {
                            //    LoyaltyCardRedeemListHide();
                            //}
                            if (e.direction == "left") {
                                is_FloatPanel_AyohaReward_ContestAdvertisementOpen = 'N';
                                _FloatPanel_AyohaReward_ContestAdvertisement.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'left',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                RemovePages("FloatPanel_AyohaReward_ContestAdvertisementHide()");
                            } if (e.direction == "right") {
                                is_FloatPanel_AyohaReward_ContestAdvertisementOpen = 'N';

                                _FloatPanel_AyohaReward_ContestAdvertisement.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'right',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                RemovePages("FloatPanel_AyohaReward_ContestAdvertisementHide()");
                            }
                            if (e.direction == "up") {
                                is_FloatPanel_AyohaReward_ContestAdvertisementOpen = 'N';

                                _FloatPanel_AyohaReward_ContestAdvertisement.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'up',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                RemovePages("FloatPanel_AyohaReward_ContestAdvertisementHide()");
                            }

                            
                        }
                    });
                }
            },
            items: {
                ////zIndex: 40,
                xtype: 'container',
                id: 'ContainerFloatPanel_AyohaReward_ContestAdvertisement',
               // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                name: 'clickableContainerFloatPanel_AyohaReward_ContestAdvertisement',
                style: ' background-color:transparent;',
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

                       id: 'containeFloatPanel_AyohaReward_ContestAdvertisementHeader',
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
                                                id: 'btnFloatPanel_AyohaReward_ContestAdvertisementBack',
                                                height: 30,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backwhite03.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    // FloatPanel_AyohaReward_TopTenRankingHide();
                                                    // FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                    is_FloatPanel_AyohaReward_ContestAdvertisementOpen = 'N';
                                                    _FloatPanel_AyohaReward_ContestAdvertisement.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'left',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    RemovePages("FloatPanel_AyohaReward_ContestAdvertisementHide()");
                                                    //  FloatPanel_AyohaReward_TopTenRanking_AddCardHide();

                                                }
                                            },

                                             {
                                                 xtype: 'spacer',

                                             },


                                             {
                                                 margin: '0 0 0 0',
                                                 id: 'htmlFloatPanel_AyohaReward_ContestAdvertisement_TitleHeaderTxt',
                                                 html: '<font size=2 color=white><b>Ayoha Reward Contest</b></font>'
                                             },


                                                   {
                                                       xtype: 'button',
                                                       id: 'btnFloatPanel_AyohaReward_ContestAdvertisement_CardIcon',
                                                       height: 30,
                                                       width: 35,
                                                       // iconCls: 'list',
                                                       html: '<div ><img src="resources/icons/contest01.png" width="25" height="20" alt="Company Name"></div>',
                                                       ui: 'plain',
                                                       handler: function () {

                                                           is_FloatPanel_AyohaReward_ContestAdvertisementOpen = 'N';

                                                           _FloatPanel_AyohaReward_ContestAdvertisement.hide(Ext.fx.Animation({
                                                               type: 'slideOut',
                                                               direction: 'right',
                                                               easing: 'cubic-bezier(.7,0,.7,1)',
                                                               duration: 250

                                                           }));
                                                           RemovePages("FloatPanel_AyohaReward_ContestAdvertisementHide()");
                                                           //FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                       }
                                                   },









                              ]

                   },

                       
                       {
                           xtype: 'container',
                           id: 'ContainerFloatPanel_AyohaReward_ContestAdvertisementImg',
                          // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                          // name: 'clickableContainerFloatPanel_AyohaReward_ContestAdvertisement',
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
                                   width: '100%',
                                   height: '100%',
                                   id: 'htmlFloatPanel_AyohaReward_ContestAdvertisementImg',
                                   html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                               }
                           ]
                       },



                          {

                              xtype: 'container',
                              width: '100%',
                              docked: 'bottom',
                              // width: 40,

                              //  title: '<font size="3" color="white">Live Tracking Map</font>',
                              //hidden: true,

                              id: 'containeFloatPanel_AyohaReward_ContestAdvertisementBottom',
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

                                             width: 210,
                                             height: 40,
                                             margin: '0 0 0 0',
                                             name: 'containeFloatPanel_AyohaReward_ContestAdvertisementEnterContest',
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
                                                     margin: '0 0 0 0',
                                                   //  html: '<font size=2 color=white><b>Confirm and Join Contest</b></font>',
                                                     html: '<div class="blink_me" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 20px 20px 20px 20px;border:2px solid #fac;text-align:center;margin:0px 0px 0px 0px;height:40px;width:200px"><div style="color:white;text-align: center;font-size:14px;width:100%;margin:8px 0px 0px 0px;"><b>Register Now!</b></div></div>'

                                                 },
                                                   //{
                                                   //    margin: '8 0 0 0',
                                                   //    html: '<img src="resources/icons/entercontest01.png"  style="width: 30px; height: 30px;   margin:-6px 0px 0px 10px;">',
                                                   //}


                                             ]
                                         },



                                         {
                                             xtype: 'container',
                                             width: 210,
                                             height: 10,
                                             style: 'background-color:transparent;',
                                         }



                                     ]

                          },



                ]

            },






        });

    return _FloatPanel_AyohaReward_ContestAdvertisement;
}



function FloatPanel_AyohaReward_ContestAdvertisementShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaReward_ContestAdvertisement);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaReward_ContestAdvertisement());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaReward_ContestAdvertisementHide()");
    is_FloatPanel_AyohaReward_ContestAdvertisementOpen = 'Y';


    var x = parseInt(window.innerHeight);


    //var newHeights = x - 232;
    //  var newHeights = x - 50;




   

  //  Ext.getCmp('ContainerFloatPanel_AyohaReward_ContestAdvertisementImg').setStyle('background-image: url(http://42.1.63.57/AyohaImgCard/AyohaRewardContest/AdverImg/contestAdvertisement01.png); background-size: 100% 100%;background-repeat: no-repeat;');
    
   
    //Ext.getCmp('htmlFloatPanel_AyohaReward_ContestAdvertisementImg').setHtml('<img src="' + globalContestAdvertisementImgPath + '" width="100%" height="750px" alt="Company Name">');
   

    var containerView = Ext.ComponentQuery.query('container[name=containeFloatPanel_AyohaReward_ContestAdvertisementEnterContest]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {
          AyohaRewardContestantInsertUpdate();

        //  FloatPanel_AyohaReward_ContestAdvertisementHide();
      }
    );
    

    if (globalIsContestant == "Y") {
        Ext.getCmp('containeFloatPanel_AyohaReward_ContestAdvertisementBottom').setHidden(true);
        var newHeights = x - 25;
        Ext.getCmp('htmlFloatPanel_AyohaReward_ContestAdvertisementImg').setHtml('<img src="' + globalContestAdvertisementImgPath + '" width="100%" height="' + newHeights + 'px" alt="Company Name">');
    } if (globalIsContestant == "N") {
        
        var newHeights = x - 80;
        Ext.getCmp('htmlFloatPanel_AyohaReward_ContestAdvertisementImg').setHtml('<img src="' + globalContestAdvertisementImgPath + '" width="100%" height="' + newHeights + 'px" alt="Company Name">');
    }

   // Ext.getCmp('ContainerFloatPanel_AyohaReward_ContestAdvertisementImg').setHeight(newHeights);
 

    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    FloatPanel_GraphicConfetiShow();
    //});
    //task.delay(1000);


}


function FloatPanel_AyohaReward_ContestAdvertisementHide() {

    if (is_FloatPanel_AyohaReward_ContestAdvertisementOpen == 'Y') {
        _FloatPanel_AyohaReward_ContestAdvertisement.hide();
        is_FloatPanel_AyohaReward_ContestAdvertisementOpen = 'N';
        RemovePages("FloatPanel_AyohaReward_ContestAdvertisementHide()");
        // swalFireSuccessStampedCardMsg("Stamped Success!!");
    }

}





function AyohaRewardContestantInsertUpdate() {

    var objn = {
        "ID": 0,
        "ContestCode":localStorage.getItem("ContestCode"),
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
                FloatPanel_AyohaReward_ContestAdvertisementHide();

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

