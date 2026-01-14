
Ext.define('BuskartApp.view.RewardStore.FloatPanel_RewardStoreMembershipCard', {

});

var _FloatPanel_RewardStoreMembershipCard;


var isFloatPanel_RewardStoreMembershipCardOpen = 'N';






function FloatPanel_RewardStoreMembershipCard() {

    _FloatPanel_RewardStoreMembershipCard =
    Ext.create('Ext.Panel', {
        zIndex: 180,
        xtype: 'container',
        //height: 465,
        height: 360,
        width: '95%',
        id: 'FloatPanel_RewardStoreMembershipCardID',
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
        style: 'background-color:white;',
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_RewardStoreMembershipCard.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            RemovePages("FloatPanel_RewardStoreMembershipCardHide()");
                            isFloatPanel_RewardStoreMembershipCardOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_RewardStoreMembershipCard.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isFloatPanel_RewardStoreMembershipCardOpen = 'N';
                            RemovePages("FloatPanel_RewardStoreMembershipCardHide()");
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
                style: 'background-color:white;',
                //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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

                                id: 'containerFloatPanel_RewardStoreMembershipCardHeader',
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
                                                         id: 'btnFloatPanel_RewardStoreMembershipCardBack',
                                                         height: 30,
                                                         margin: '0 0 0 10',
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             // FloatPanel_RewardStoreMembershipCardHide();
                                                             // FloatPanel_RewardStoreMembershipCard_AddCardHide();

                                                            // FloatPanel_RewardStoreMembershipCardHide();



                                                             isFloatPanel_RewardStoreMembershipCardOpen = 'N';
                                                             _FloatPanel_RewardStoreMembershipCard.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             RemovePages("FloatPanel_RewardStoreMembershipCardHide()");

                                                         }
                                                     },

                                                      {
                                                          xtype: 'spacer',

                                                      },


                                                      {
                                                          margin: '0 10 0 0',
                                                          id: 'htmlFloatPanel_RewardStoreMembershipCard_TitleHeaderTxt',
                                                          html: '<font size=2 color=black><b>Get Membership Card </b></font>'
                                                      },
                                                      


                                                            {
                                                                xtype: 'button',
                                                                id: 'btnFloatPanel_RewardStoreMembershipCard_CardIcon',
                                                                height: 30,
                                                                width: 35,
                                                                hidden:true,
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/membershicardwhite.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                    isFloatPanel_RewardStoreMembershipCardOpen = 'N';

                                                                    _FloatPanel_RewardStoreMembershipCard.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    RemovePages("FloatPanel_RewardStoreMembershipCardHide()");
                                                                }
                                                            },









                                       ]

                            },



                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_RewardStoreMembershipCardList',
                                // margin: '-10 0 0 0',
                                width: '100%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_RewardStoreMembershipCardCardLis',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                //listeners: {
                                //    initialize: function (c) {

                                //        this.element.on({
                                //            swipe: function (e, node, options) {
                                //                if (e.direction == "left") {
                                //                    //  alert("Hey! I swipe left");

                                //                } else {
                                //                    //  alert("Hey! I swipe right");
                                //                    Ext.getCmp('tabpanelFloatPanel_RewardStoreMembershipCard').setActiveItem(0);
                                //                }
                                //            }
                                //        });
                                //    }
                                //},

                                items: [
                                    //{
                                    //    xtype: 'panel',
                                    //    height: 5
                                    //},

                                  {
                                      xtype: 'container',
                                      width: '100%',
                                      height: '100%',
                                      style: "background-color: transparent;",
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'left'

                                      },
                                      items: [

                                           
                                           {
                                               xtype: 'panel',
                                               height: 3
                                           },

                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  style: 'background-color:white;',
                                                  //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'start',
                                                      align: 'center'

                                                  },
                                                  //height: 50,
                                                  // margin:'10 0 0 0',
                                                  items: [

                                                          //html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected;background-color:black; color: floralwhite;"><div class="x-innerhtml" style="padding: 12px;"><div style="overfl' +
                                                          //    'ow:auto;width:100%;height:100%;font-size:50%;background-color:black; color: floralwhite;"><span style="font-family: Arial; text-transform:uppercase;">' +
                                                          //    '<div style="float:left;width:10%"><span style="font-family: Arial; text-transform:uppercase;">Date</div>' +
                                                          //    '<div style="float:left;width:20%"><span style="font-family: Arial; text-transform:uppercase;">Stamped By</div >' +


                                                          //    '</div></div></div>'

                                                          {

                                                              width: '100%',
                                                              id: 'htmlFloatPanel_RewardStoreMembershipCard_AvailableCard',
                                                              html: '<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Offered Membership Card</div>'
                                                          },

                                                          //{

                                                          //    width: '50%',
                                                          //    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Filter</div>'
                                                          //},
                                                          //     //{
                                                               //    margin: '-8 0 0 0',

                                                               //    html: '<font size=2 color=white>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                                                               //},
                                                               // {
                                                               //     margin: '-7 0 0 0',

                                                               //     html: '<font size=2 color=white>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                                                               // },


                                                  ]
                                              },
                                              {
                                                  xtype: 'list',
                                                  //flex:1,
                                                  height: '97%',
                                                  store: 'MembershipCardLoadByEnterpriseAccNoStore',
                                                  id: 'FloatPanel_RewardStoreMembershipCardLoyaltyCardID',
                                                  mode: 'SINGLE',
                                                  style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
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
                                                  //grouped: true,
                                                  disableSelection: true,
                                                  //                    itemTpl: '<div class="myContent" style="margin:0px 0px 0px -7px;width:104%;height:250px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;">' +    
                                                  //'<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                  //   '</div>' +
                                                  //  '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="resources/icons/MemberPhotos.png" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',

                                                  itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                                //  itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +

                                                  '{ModifiedisMembershipCardSubscribed}' +
                                              //'<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-15px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant(' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{isMembershipCardSubscribed}' + "'" + ')" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-29px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-17px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +
                                                                                                   '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-15px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{isMembershipCardSubscribed}' + "'" + ',' + "'" + '{MembershipCardFeePaymentCycle}' + "'" + ')" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-29px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-17px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +                        
                                              '</div>' +
                                                                              // '<br><div style="margin:-20px 0px 0px 0px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-bottom: 1px solid grey;padding:0px 0px">{MembershipCardName}</div>' +
                                                  '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -25px">Membership Fees(RM)</div></div>' +
                                                  '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-27px 0px 0px -27px;color:black;font-family:Arial, sans-serif;font-size:28px;font-weight:bold;">{MembershipCardFee}</div></div>' +
                                                 //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardName}</div>' +

                                                  '<br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Membership Privilege</div><div class="blink_me" style="width:100%;text-align:right;margin:0px 0px 0px -25px">*Tap to view Details</div></div>' +
                                                //  '<br><div style="margin:-40px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Card Privilage Level</div>' +
                                                  //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardType}</div>',
                                                    '<br><div style="margin:-38px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px;">{LoyaltCampaignCount}</div><div style="width:100%;text-align:right;margin:-25px 0px 0px -25px;color:transparent;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">x</div></div>',

                                                  //  '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="resources/icons/MemberPhotos.png" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',







                                                  width: '100%',
                                                  listeners: {
                                                      itemsingletap: function (list, idx, target, records, evt) {

                                                          //var MembershipCardCode = records.get('MembershipCardCode');
                                                          //var EnterpriseAccountNo = records.get('EnterpriseAccNo');
                                                          //var isMembershipCardSubscribed = records.get('isMembershipCardSubscribed');

                                                          //globalOpenMembershipCardList_Upgrade_From = "FloatPanel_RewardStoreMembershipCard";

                                                          //// FloatPanel_RewardStoreMembershipCard_EditCardShow_Edit(ID);
                                                          //if (isMembershipCardSubscribed == "NO") {
                                                          //    FloatPanel_MembershipCardList_UpgradeShow(MembershipCardCode, EnterpriseAccountNo);
                                                          //} else {
                                                          //  //  alert("You Already Subscribed This Membership Card!");
                                                          //    swalFireHoorayMessage("Hooray!,You Already Subscribed This Membership Card.")
                                                          //}

                                                        

                                                      },
                                                      deselect: function (list, records) {

                                                      }
                                                  },

                                              },
                                              //{
                                              //    xtype: 'container',
                                              //    width: '100%',
                                              //    height: '105%',
                                              //    layout: {
                                              //        type: 'vbox',
                                              //        pack: 'start',
                                              //        align: 'center'

                                              //    },
                                              //    style: 'background-color:transparent',

                                              //    items: [
                                              //        {
                                              //            xtype: 'list',
                                              //            //flex:1,
                                              //            height: '90%',
                                              //            store: 'MembershipCardLoadByEnterpriseAccNoStore',
                                              //            id: 'FloatPanel_RewardStoreMembershipCardLoyaltyCardID',
                                              //            mode: 'SINGLE',
                                              //            //grouped: true,
                                              //            disableSelection: true,
                                              //            //                    itemTpl: '<div class="myContent" style="margin:0px 0px 0px -7px;width:104%;height:250px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;">' +    
                                              //            //'<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                              //            //   '</div>' +
                                              //            //  '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="resources/icons/MemberPhotos.png" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',

                                              //            itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                              //          //  itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                                              //            '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-29px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-17px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +
                                              //                                        '</div>' +
                                              //                                        // '<br><div style="margin:-20px 0px 0px 0px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-bottom: 1px solid grey;padding:0px 0px">{MembershipCardName}</div>' +
                                              //            '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -25px">Members</div></div>' +
                                              //            '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-31px 0px 0px -27px;color:black;font-family:Arial, sans-serif;font-size:30px;font-weight:bold;">0</div></div>' +
                                              //           //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardName}</div>' +

                                              //            '<br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Privilage Level</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -25px">Membership Fee</div></div>' +
                                              //          //  '<br><div style="margin:-40px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Card Privilage Level</div>' +
                                              //            //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardType}</div>',
                                              //              '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardType}</div><div style="width:100%;text-align:right;margin:-23px 0px 0px -25px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">RM{MembershipCardFee}</div></div>',

                                              //            //  '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="resources/icons/MemberPhotos.png" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',







                                              //            width: '100%',
                                              //            listeners: {
                                              //                itemsingletap: function (list, idx, target, records, evt) {

                                              //                    var ID = records.get('ID');

                                              //                    FloatPanel_RewardStoreMembershipCard_EditCardShow_Edit(ID);

                                              //                },
                                              //                deselect: function (list, records) {

                                              //                }
                                              //            },

                                              //        },
                                              //    ]
                                              //},



                                      ]
                                  },

                                ]

                            },







                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                              //{
                              //    xtype: 'tabpanel',
                              //    // hidden: true,
                              //    //  hidden:true,
                              //    id: 'tabpanelFloatPanel_RewardStoreMembershipCard',
                              //    // style: 'border-top:2px solid #ECF0F1;background: white;',
                              //    // style: 'background-color: black;',
                              //    // margin: '-20 0 0 -26',
                              //    // margin: '25 0 0 0',

                              //    //width: 200,
                              //    width: '96%',
                              //    height: '100%',
                              //    //height: 120,
                              //    //height: 50,
                              //    //  zIndex: 200,
                              //    //  docked: 'bottom',
                              //    tabBarPosition: 'top',
                              //    ui: 'plain',
                              //    // docked: 'bottom',

                              //    initialize: function (c) {
                              //        //this.getTabBar().hide();


                              //    },



                              //    items: [










































                              //    ]

                              //    //}
                              //},










                        ]
                    },





















                    



























                ]
            },












        ]





    });
    return _FloatPanel_RewardStoreMembershipCard;



}








function FloatPanel_RewardStoreMembershipCardShow(ID) {
    AddRoutePages("FloatPanel_RewardStoreMembershipCardHide()");
    Ext.Viewport.remove(_FloatPanel_RewardStoreMembershipCard);
    this.overlay = Ext.Viewport.add(FloatPanel_RewardStoreMembershipCard());
    this.overlay.show();
    isFloatPanel_RewardStoreMembershipCardOpen = 'Y';
    globalOpenMembershipCardList_Upgrade_From = "FloatPanel_RewardStoreMembershipCard";


    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseHQAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    var EnterpriseAccNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseHQAccNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);

    var EnterpriseHQAccountNo = EnterpriseHQAccNo.get('EnterpriseHQAccNo');
    var EnterpriseAccountNo = EnterpriseAccNo.get('EnterpriseAccNo');
    //alert(EnterpriseHQAccountNo);
    //alert(EnterpriseAccountNo);
    //Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCard').setHidden(false);
    //Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_DeleteMembershipCard').setHidden(true);

    //_FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo = EnterpriseAccountNo;
    //FloatPanel_MembershipCardList_Upgrade_MembershipCardLoadByEnterpriseAccNoStore(EnterpriseHQAccountNo, EnterpriseAccountNo);



    // FloatPanel_RewardStoreMembershipCard_AddCardShow();

    //Ext.getCmp('tabpanelFloatPanel_RewardStoreMembershipCard').getTabBar().hide();
    //Load_FloatPanel_RewardStoreMembershipCard_StampCampaignLoadByEnterpriseAccNoStore();
    //FloatPanel_RewardStoreMembershipCard_AddCardShow();
    //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>Customer Info</u></b></font>');
    FloatPanel_RewardStoreMembershipCard_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore(EnterpriseHQAccountNo, EnterpriseAccountNo);

    FloatPanel_RewardStore_SearchResultHide();
    Dashboard_SearchMerchantListHide();
}




function FloatPanel_RewardStoreMembershipCardShow_FromAyohaStore(EnterpriseHQAccountNo, EnterpriseAccountNo) {
    AddRoutePages("FloatPanel_RewardStoreMembershipCardHide()");
    Ext.Viewport.remove(_FloatPanel_RewardStoreMembershipCard);
    this.overlay = Ext.Viewport.add(FloatPanel_RewardStoreMembershipCard());
    this.overlay.show();  
    isFloatPanel_RewardStoreMembershipCardOpen = 'Y';
    globalOpenMembershipCardList_Upgrade_From = "FloatPanel_RewardStoreMembershipCard";
    FloatPanel_RewardStoreMembershipCard_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore(EnterpriseHQAccountNo, EnterpriseAccountNo);
}



function FloatPanel_RewardStoreMembershipCardShow_FromQrCode(EnterpriseHQAccountNo, EnterpriseAccountNo) {
    AddRoutePages("FloatPanel_RewardStoreMembershipCardHide()");
    Ext.Viewport.remove(_FloatPanel_RewardStoreMembershipCard);
    this.overlay = Ext.Viewport.add(FloatPanel_RewardStoreMembershipCard());
    this.overlay.show();
    isFloatPanel_RewardStoreMembershipCardOpen = 'Y';



    console.log(EnterpriseHQAccountNo);
    console.log(EnterpriseAccountNo);
    globalOpenMembershipCardList_Upgrade_From = "FloatPanel_RewardStoreMembershipCard";
    FloatPanel_RewardStoreMembershipCard_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore(EnterpriseHQAccountNo, EnterpriseAccountNo);
}

function FloatPanel_RewardStoreMembershipCardHide() {
    //  FloatPanel_RewardStoreMembershipCard_AddCardHide();

    if (isFloatPanel_RewardStoreMembershipCardOpen == "Y") {
        _FloatPanel_RewardStoreMembershipCard.hide(); isFloatPanel_RewardStoreMembershipCardOpen = 'N';
        RemovePages("FloatPanel_RewardStoreMembershipCardHide()");
    }

}


//var _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore;

var FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo;
var FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo;
function FloatPanel_RewardStoreMembershipCard_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore(EnterpriseHQAccountNo, EnterpriseAccountNo) {
 
    FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo = EnterpriseHQAccountNo;
    FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo = EnterpriseAccountNo;




    Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
        EnterpriseAccNo: EnterpriseAccountNo,
        EnterpriseHQAccNo: EnterpriseHQAccountNo,
        AyohaUserAccountNo: GetCurrAyohaUserAccountNo()
    });
    Ext.StoreMgr.get('MembershipCardLoadByEnterpriseAccNoStore').load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
            EnterpriseAccNo: EnterpriseAccountNo,
            EnterpriseHQAccNo: EnterpriseHQAccountNo,
            AyohaUserAccountNo: GetCurrAyohaUserAccountNo()
        });
        // _DataStore_MembershipLoadBySubscriberAccNoStore = Ext.StoreMgr.get('MembershipCardLoadByEnterpriseAccNoStore').load();
        //  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
        //  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
        //console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)
        var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
        var count = myStore.getCount();

      
        Ext.getCmp('htmlFloatPanel_RewardStoreMembershipCard_AvailableCard').setHtml('<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:12px;font-weight:bold;"> &nbsp;&nbsp;&nbsp;&nbsp;Offered Membership Card<font size=2 color=purple><b> (' + count + ')</b></font></div>');
      
      if (count>1){
        Ext.getCmp('FloatPanel_RewardStoreMembershipCardID').setHeight('100%');
        Ext.getCmp('FloatPanel_RewardStoreMembershipCardID').setWidth('100%');
      }
       
       // 
        Ext.Viewport.setMasked(false);










    });
    task.delay(500);





}





//var StampCount;
function Load_FloatPanel_RewardStoreMembershipCard_StampCampaignLoadByEnterpriseAccNoStore() {

    Ext.getStore('StampCampaignLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
        EnterpriseAccNo: GetEnterpriseAccNo()
    });
    Ext.StoreMgr.get('StampCampaignLoadByEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('StampCampaignLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
            EnterpriseAccNo: GetEnterpriseAccNo()
        });
        Ext.StoreMgr.get('StampCampaignLoadByEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('StampCampaignLoadByEnterpriseAccNoStore');
        StampCount = myStore.getCount();
        Ext.getCmp('htmlFloatPanel_RewardStoreMembershipCardCardCount').setHtml('<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);



    });
    task.delay(2000);
}



function Load_FloatPanel_RewardStoreMembershipCard_StampCardLoadByStampCampaignCodeEnterpriseAccNoStore(strStampCampaignCode, EnterpriseAccNo) {

    Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').getProxy().setExtraParams({
        StampCampaignCode: strStampCampaignCode,
        EnterpriseAccNo: EnterpriseAccNo
    });
    Ext.StoreMgr.get('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').getProxy().setExtraParams({
            StampCampaignCode: strStampCampaignCode,
            EnterpriseAccNo: EnterpriseAccNo
        });
        Ext.StoreMgr.get('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore');
        //StampCount = myStore.getCount();
        //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);

    });
    task.delay(2000);
}






