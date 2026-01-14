
Ext.define('BuskartApp.view.Membership.FloatPanel_MembershipCardList_MyMembershipCard', {

});

var _FloatPanel_MembershipCardList_MyMembershipCard;


var isFloatPanel_MembershipCardList_MyMembershipCardOpen = 'N';






function FloatPanel_MembershipCardList_MyMembershipCard() {

    _FloatPanel_MembershipCardList_MyMembershipCard =
    Ext.create('Ext.Panel', {
      
        //zIndex: 310,
        zIndex: 310,
        xtype: 'container',
        //height: 465,
      //  height: '100%',
        width: '100%',
        id: 'FloatPanel_MembershipCardList_MyMembershipCardID',
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
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
            //type: 'slideOut',
            //direction: 'left',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            //duration: 250
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        style: 'background-color:white;',
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
       // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_MembershipCardList_MyMembershipCard.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            RemovePages("FloatPanel_MembershipCardList_MyMembershipCardHide()");
                            isFloatPanel_MembershipCardList_MyMembershipCardOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_MembershipCardList_MyMembershipCard.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            RemovePages("FloatPanel_MembershipCardList_MyMembershipCardHide()");
                            isFloatPanel_MembershipCardList_MyMembershipCardOpen = 'N';
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
               style: ' background-color:transparent;',
               // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
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

                                id: 'containerFloatPanel_MembershipCardList_MyMembershipCardHeader',
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
                                                         id: 'btnFloatPanel_MembershipCardList_MyMembershipCardBack',
                                                         height: 30,
                                                         width: 35,
                                                         margin: '0 0 0 10',
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             // FloatPanel_MembershipCardList_MyMembershipCardHide();
                                                             // FloatPanel_MembershipCardList_MyMembershipCard_AddCardHide();
                                                             isFloatPanel_MembershipCardList_MyMembershipCardOpen = 'N';
                                                             _FloatPanel_MembershipCardList_MyMembershipCard.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             RemovePages("FloatPanel_MembershipCardList_MyMembershipCardHide()");

                                                         }
                                                     },

                                                      {
                                                          xtype: 'spacer',

                                                      },


                                                      {
                                                          margin: '0 10 0 0',
                                                          id: 'htmlFloatPanel_MembershipCardList_MyMembershipCard_TitleHeaderTxt',
                                                          html: '<font size=2 color=black><b>My Membership Card List(s)</b></font>'
                                                      },


                                                            {
                                                                xtype: 'button',
                                                                hidden:true,
                                                                id: 'btnFloatPanel_MembershipCardList_MyMembershipCard_CardIcon',
                                                                height: 30,
                                                                width: 35,
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/membershicardwhite.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                    isFloatPanel_MembershipCardList_MyMembershipCardOpen = 'N';

                                                                    _FloatPanel_MembershipCardList_MyMembershipCard.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    RemovePages(_FloatPanel_MembershipCardList_MyMembershipCard, "isFloatPanel_MembershipCardList_MyMembershipCardOpen");
                                                                    //FloatPanel_MembershipCardList_MyMembershipCard_AddCardHide();
                                                                }
                                                            },









                                       ]

                            },




























                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_MembershipCardList_MyMembershipCardStampCardList',
                                // margin: '-10 0 0 0',
                                width: '100%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_MembershipCardList_MyMembershipCardCardLis',
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
                                //                    Ext.getCmp('tabpanelFloatPanel_MembershipCardList_MyMembershipCard').setActiveItem(0);
                                //                }
                                //            }
                                //        });
                                //    }
                                //},

                                items: [
                                    {
                                        xtype: 'panel',
                                        height: 5
                                    },

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
                                                  xtype: 'container',
                                                  width: '100%',
                                                  hidden:true,
                                                  // style: 'background-color:black;color:white',
                                                  style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
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

                                                              width: '50%',
                                                              html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;My Membership Card List</div>'
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
                                                  xtype: 'container',
                                                  width: '100%',
                                                  height: '100%',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'start',
                                                      align: 'center'

                                                  },
                                                  //style: 'background-color:#f7f7f7',
                                                  style: 'background-color:white',
                                                  items: [
                                                      //{
                                                      //    xtype: 'container',
                                                      //    id: 'container_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard',
                                                      //    hidden:false,
                                                      //    width: '100%',
                                                      //    height: '100%',
                                                      //    layout: {
                                                      //        type: 'vbox',
                                                      //        pack: 'center',
                                                      //        align: 'center'

                                                      //    },
                                                      //    //style: 'background-color:#f7f7f7',
                                                      //    style: 'background-color:white',
                                                      //    items: [
                                                      //        {
                                                      //            width: '100%',
                                                      //            height: '100%',
                                                      //            html: '<div OnClick="Dashboard_SearchMerchantListShow()" style="background-color:transparent;width: 100%; height: 400px;margin:40px 0px 0px 0px;padding:0px 0px"><div style="width:100%;text-align:center;margin:0px 0px 0px 0px;color:grey;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;" OnClick="Dashboard_SearchMerchantListShow()">Hi!, you have not subscribed any membership card.Tap Ayoha Mechant below and get their Membership card Now!</div><br><img OnClick="Dashboard_SearchMerchantListShow()" src="resources/icons/AyohaMerchant03.png" style="width: 150px; height: 130px;"/><br><div style="color:grey;text-align: center;font-size:12px;width:100%;"><b>Ayoha Merchants</b></div></div>',
                                                      //        }
                                                      //    ]
                                                      //},


                                                      {
                                                          xtype: 'container',
                                                          //width: '95%',
                                                          //height: 80,
                                                         // hidden: true,
                                                          margin: '0 0 0 0',
                                                          width: '100%',
                                                          id: 'container_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard',
                                                          name: 'namecontainer_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard',
                                                          height: '100%',
                                                          //  style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
                                                          style: 'background-color:transparent',
                                                          layout: {
                                                              type: 'vbox',
                                                              pack: 'center',
                                                              align: 'center',
                                                          },
                                                          items: [

                                                              {

                                                                  //xtype: 'button',
                                                                  //height: 90,
                                                                  //width: 90,
                                                                  margin: '10 0 0 0',
                                                                  //zIndex: 400,

                                                                 // id: 'htmlDashboard_NearestRedeem_NonMembersTxtx',
                                                                  html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;">Hi!, you have not subscribed any membership card.</div>'

                                                                  //ui: 'plain',
                                                                  //handler: function () {

                                                                  //}

                                                              },


                                                               {

                                                                   //xtype: 'button',
                                                                   //height: 90,
                                                                   //width: 90,
                                                                   //  margin: '0 0 0 60',
                                                                   //zIndex: 400,
                                                                   margin: '0 0 0 0',
                                                                  // id: 'htmlDashboard_NearestRedeem_NonMembersTxt0x',
                                                                   html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;">Tap Ayoha Mechant below and get their Membership card Now!.</div>'

                                                                   //ui: 'plain',
                                                                   //handler: function () {

                                                                   //}

                                                               },

                                                                {

                                                                    //xtype: 'button',
                                                                    //height: 90,
                                                                    //width: 90,
                                                                    //  margin: '0 0 0 60',
                                                                    //zIndex: 400,
                                                                    margin: '0 0 0 0',
                                                                   // id: 'htmlDashboard_NearestRedeem_NonMembersTxt00x',
                                                                    html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;">Enjoy the membership privilleg and get double reward from us!</div>'

                                                                    //ui: 'plain',
                                                                    //handler: function () {

                                                                    //}

                                                                },
                                                               {

                                                                   //xtype: 'button',
                                                                   //height: 90,
                                                                   //width: 90,
                                                                   margin: '20 0 0 0',
                                                                   //zIndex: 400,
                                                                   width: 100,
                                                                   height: 100,
                                                                   id: 'htmlDashboard_NearestRedeem_NonMembersx',
                                                                   html: '<img src="resources/icons/AyohaMerchant03.png" alt="Image" style="width:150px;height:100px;zIndex:400px">',

                                                                   //ui: 'plain',
                                                                   //handler: function () {

                                                                   //}

                                                               },
                                                               {

                                                                   //xtype: 'button',
                                                                   //height: 90,
                                                                   //width: 90,
                                                                   //  margin: '0 0 0 60',
                                                                   //zIndex: 400,
                                                                   margin: '3 0 0 0',
                                                                   id: 'htmlDashboard_NearestRedeem_NonMembersTxtAyohaMerchantx',
                                                                   html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;"><b>Ayoha Merchants</b></div>'

                                                                   //ui: 'plain',
                                                                   //handler: function () {

                                                                   //}

                                                               },

                                                          ]
                                                      },
                                                      {
                                                          xtype: 'list',
                                                          hidden: true,
                                                          //flex:1,
                                                        //  height: '100%',
                                                          //  store: 'MembershipsLoadBySubscriberAccNoStore',
                                                          store:_DataStore_MembershipsLoadBySubscriberAccNoStore,
                                                          id: 'FloatPanel_MembershipCardList_MyMembershipCardListID',
                                                          mode: 'SINGLE',
                                                          style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                          //grouped: true,
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
                                                          //                    itemTpl: '<div class="myContent" style="margin:0px 0px 0px -7px;width:104%;height:250px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;">' +    
                                                          //'<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                          //   '</div>' +
                                                          //  '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="resources/icons/MemberPhotos.png" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',

                                                          itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:196px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                                        //  itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                                                       // '<div style="margin:14px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">xxxx</div><div style="width:100%;text-align:right;margin:0px 0px 0px 0px;color:black;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;"><div style="background-color:red;color:white;width:25px;">Need Approval</div></div></div>' +
                                                             '{ModifiedMembershipApprovalStatus}' +
                                                        '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-15px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_MyMembershipCardOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{EnterpriseTagLine}' + "'" + ', {ID})" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipLevel}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMembershipNo}</div><br><div style="margin:-28px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMemberSinceDate}</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedUntilDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></table>' +
                                                                                      '</div>' +
                                                                                      // '<br><div style="margin:-20px 0px 0px 0px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-bottom: 1px solid grey;padding:0px 0px">{MembershipCardName}</div>' +
                                                          '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px">Card Expired:</div></div>' +
                                                          '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-22px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">{ModifiedUntilDate}</div></div>' +
                                                         //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardName}</div>' +


                                                          //'<br><div style="margin:-40px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Point Rate</div>' +
                                                          '<br><div style="margin:-15px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Membership Privilege</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px">Membership Fees(RM)</div></div>' +
                                                            '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{LoyaltCampaignCount}</div><div style="width:100%;text-align:right;margin:-28px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:25px;font-weight:bold;">{MembershipFee}</div></div>' +
                                                          //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardPoint}</div><div style="width:100%;text-align:right;margin:-16px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;">*Tab to view details</div></div>',
                                                          '<br><div style="width:100%;text-align:center;margin:-28px 0px 0px 0px;color:black;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;">*Tab to view details</div>',

                                                    
                                                          //  '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="resources/icons/MemberPhotos.png" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',

                                                        //  emptyText: '<div OnClick="Dashboard_SearchMerchantListShow()" style="background-color:transparent;width: 100%; height: 400px;margin:40px 0px 0px 0px;padding:0px 0px"><div style="width:100%;text-align:center;margin:0px 0px 0px 0px;color:grey;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;" OnClick="Dashboard_SearchMerchantListShow()">Hi!, you have not subscribed any membership card.Tap Ayoha Mechant below and get their Membership card Now!</div><br><img OnClick="Dashboard_SearchMerchantListShow()" src="resources/icons/AyohaMerchant03.png" style="width: 150px; height: 130px;"/><br><div style="color:grey;text-align: center;font-size:12px;width:100%;"><b>Ayoha Merchants</b></div></div>',





                                                          width: '100%',
                                                          //listeners: {
                                                          //    itemsingletap: function (list, idx, target, records, evt) {

                                                          //        //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
                                                          //        //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
                                                          //        //var MembershipCardCode = records.get('MembershipCardCode');
                                                          //        //var ID = records.get('ID');
                                                          //        //var isMembershipCardSubscribed = records.get('isMembershipCardSubscribed');

                                                          //        //globalOpenMembershipCardList_Upgrade_From = "FloatPanel_MembershipCardList_MyMembershipCard";
                                                          //        //FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID);
                                                          //        //setTimeout(function () {
                                                                   
                                                          //        //    Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
                                                          //        //}, 2000);

                                                                

                                                          //    },
                                                          //    deselect: function (list, records) {

                                                          //    }
                                                          //},

                                                      },
                                                  ]
                                              },



                                      ]
                                  },

                                ]

                            },




                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_MembershipCardList_MyMembershipCardTitleOutter',
                                width: '100%',
                                docked: 'bottom',
                                // hidden:true,
                                height: 40,
                                // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid grey;',
                                // style: "background-color: #EAEEF3;",

                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                items: [




                                      {
                                          xtype: 'button',
                                          id: 'btnFloatPanel_MembershipCardList_MyMembershipCardListSearch',
                                          // hidden: true,
                                          //  badgeText: '1',
                                          margin: '2 0 0 -5',
                                          height: 40,
                                          width: 40,
                                          html: '<img src="resources/icons/searchPurpleOne.png" width="28" height="28" alt="Company Name">',
                                          ui: 'plain',
                                          handler: function () {
                                              // NotificationsPanelShow();

                                              // LoyaltyCardRedeemListShow();


                                              //  LoyaltyCardRedeemListShow();
                                          }
                                      },



                                     {
                                         id: 'FloatPanel_MembershipCardList_MyMembershipCard_SearchTxt',
                                         margin: '0 0 0 -10',
                                         width: '78%',
                                         height: 20,
                                         html: '<input type="text" id="input-FloatPanel_MembershipCardList_MyMembershipCard_SearchTxt" placeHolder="Search Card" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                                     },



                                     {
                                         id: 'FloatPanel_MembershipCardList_MyMembershipCard_CountSearchTxt',
                                         margin: '0 0 0 0',
                                         // width: '75%',
                                         height: 20,
                                         html: '<font size=3 color=black>(0)</font>'
                                     },
                                     {
                                         xtype: 'button',
                                         id: 'btnFloatPanel_MembershipCardList_MyMembershipCardFilter',
                                          hidden: true,
                                         //  badgeText: '1',
                                         margin: '2 0 0 15',
                                         height: 25,
                                         width: 35,
                                         html: '<img src="resources/icons/filterPurpleThree.png" width="25" height="25" alt="Company Name">',
                                         ui: 'plain',
                                         handler: function () {
                                             // NotificationsPanelShow();

                                             // LoyaltyCardRedeemListShow();


                                             //  LoyaltyCardRedeemListShow();
                                         }
                                     },





                                ]

                            },


                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                              //{
                              //    xtype: 'tabpanel',
                              //    // hidden: true,
                              //    //  hidden:true,
                              //    id: 'tabpanelFloatPanel_MembershipCardList_MyMembershipCard',
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
    return _FloatPanel_MembershipCardList_MyMembershipCard;



}








function FloatPanel_MembershipCardList_MyMembershipCardShow() {

    Ext.Viewport.remove(_FloatPanel_MembershipCardList_MyMembershipCard);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList_MyMembershipCard());
    this.overlay.show();
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    AddRoutePages("FloatPanel_MembershipCardList_MyMembershipCardHide()");
    isFloatPanel_MembershipCardList_MyMembershipCardOpen = 'Y';
    // FloatPanel_MembershipCardList_MyMembershipCard_AddCardShow();

    //Ext.getCmp('tabpanelFloatPanel_MembershipCardList_MyMembershipCard').getTabBar().hide();
    //Load_FloatPanel_MembershipCardList_MyMembershipCard_StampCampaignLoadByEnterpriseAccNoStore();
    //FloatPanel_MembershipCardList_MyMembershipCard_AddCardShow();
    //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>Customer Info</u></b></font>');
    document.getElementById("input-FloatPanel_MembershipCardList_MyMembershipCard_SearchTxt").addEventListener("keyup", MembershipsLoadBySubscriberAccNoStoreOnKeyUp);
   // document.getElementById("ext-element-914").addEventListener("onclick", Dashboard_SearchMerchantListShow);
   
    FloatPanel_MembershipCardList_MyMembershipCard_MembershipsLoadBySubscriberAccNoStore();
    FloatPanel_MembershipCardList_MyMembershipCardAdjustHeight();




    var containerViewnamecontainer_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard = Ext.ComponentQuery.query('container[name=namecontainer_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard]')[0];
    var containerViewElnamecontainer_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard = containerViewnamecontainer_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard.element;
    containerViewElnamecontainer_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard.on('tap',
      function (event, node, options, eOpts) {
          Dashboard_SearchMerchantListShow();
          // FloatPanel_RewardStoreShow();
      }
    );


    FloatPanel_MerchantDetailPageHide();
    Dashboard_SearchMerchantListHide();

    
}





function FloatPanel_MembershipCardList_MyMembershipCardHide() {
    // FloatPanel_MembershipCardList_MyMembershipCard_AddCardHide();
    if (isFloatPanel_MembershipCardList_MyMembershipCardOpen == "Y") {
        _FloatPanel_MembershipCardList_MyMembershipCard.hide(); isFloatPanel_MembershipCardList_MyMembershipCardOpen = 'N';
        RemovePages("FloatPanel_MembershipCardList_MyMembershipCardHide()");
    }
   
}


//var _DataStore_MembershipsLoadBySubscriberAccNoStore;
function FloatPanel_MembershipCardList_MyMembershipCard_MembershipsLoadBySubscriberAccNoStore() {
return;
    _DataStore_MembershipsLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipsLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/Memberships/MembershipsLoadBySubscriberAccNo');
    _DataStore_MembershipsLoadBySubscriberAccNoStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
                var count = parseInt(_DataStore_MembershipsLoadBySubscriberAccNoStore.getCount());

                if (count>0) {
                    Ext.getCmp('container_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard').setHidden(true);
                    Ext.getCmp('FloatPanel_MembershipCardList_MyMembershipCardListID').setHidden(false);
                }
        
                countMembershipsLoadBySubscriberAccNoStoreFirst = _DataStore_MembershipsLoadBySubscriberAccNoStore.getCount();
                Ext.getCmp('FloatPanel_MembershipCardList_MyMembershipCard_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipsLoadBySubscriberAccNoStoreFirst + ')</b></font>');
                Ext.getCmp('FloatPanel_MembershipCardList_MyMembershipCardListID').setStore(_DataStore_MembershipsLoadBySubscriberAccNoStore);
                
               
                LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });
///////////////////////////////////////////////////////////////////////
 


return
   


}










function FloatPanel_MembershipCardList_MyMembershipCardAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 80;
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;
    Ext.getCmp('FloatPanel_MembershipCardList_MyMembershipCardID').setHeight(x + 7);
    //Ext.getCmp('FloatPanel_MembershipCardList_MyMembershipCardID').setHeight(x + 40);
  Ext.getCmp('FloatPanel_MembershipCardList_MyMembershipCardListID').setHeight(newHeights);


}
var globalFloatPanel_MembershipCardList_MyMembershipCardOpenMembershiCard_EnterpriseTagLine;
function FloatPanel_MembershipCardList_MyMembershipCardOpenMembershiCardDetail(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode,EnterpriseTagLine, ID) {
  
///comment 29/9/2024
    // _isFloatPanel_Membership_MembershipCardSaleDetail_loadFirstTime='N';
    // FloatPanel_Membership_MembershipCardSaleDetailShow(EnterpriseAccountNo,MembershipCardCode);
    // return;





//   alert(EnterpriseHQAccountNo)
//   alert(EnterpriseAccountNo)
//   alert(MembershipCardCode)
//   alert(EnterpriseTagLine)
//   alert(ID)
    //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
    //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
    //var MembershipCardCode = records.get('MembershipCardCode');
    //var ID = records.get('ID');
    //var isMembershipCardSubscribed = records.get('isMembershipCardSubscribed');

    globalFloatPanel_MembershipCardList_MyMembershipCardOpenMembershiCard_EnterpriseTagLine=EnterpriseTagLine;
//alert(globalFloatPanel_MembershipCardList_MyMembershipCardOpenMembershiCard_EnterpriseTagLine)
    globalOpenMembershipCardList_Upgrade_From = "FloatPanel_MembershipCardList_MyMembershipCard";
    FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID);
    setTimeout(function () {
        
        Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=black><b>My Membership Card</b></font>');
    }, 2000);

}