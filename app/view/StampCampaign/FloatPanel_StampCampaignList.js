
Ext.define('BuskartApp.view.StampCampaign.FloatPanel_StampCampaignList', {

});

var _FloatPanel_StampCampaignList;


var isFloatPanel_StampCampaignListOpen = 'N';






function FloatPanel_StampCampaignList() {

    _FloatPanel_StampCampaignList =
    Ext.create('Ext.Panel', {
        zIndex: 100,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_StampCampaignListID',
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
            //direction: 'up',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            duration: 250
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        // style: 'border-bottom:1px solid;background-color:white;',
        style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        //listeners: {
        //    initialize: function (c) {
        //        this.element.on({
        //            swipe: function (e, node, options) {
        //                //if (e.direction == "up") {
        //                //    LoyaltyCardRedeemListHide();
        //                //}
        //                if (e.direction == "left") {
        //                    _FloatPanel_StampCampaignList.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));
        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_StampCampaignList.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'right',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));
        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                }

        //            }
        //        });
        //    }
        //},

        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
                style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_StampCampaignListHeader',
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
                                                         id: 'btnFloatPanel_StampCampaignListBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {

                                                             _FloatPanel_StampCampaignList.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             isLoyaltyCardRedeemListOpen = 'N';
                                                         }
                                                     },
                                                     {
                                                         margin: '0 0 0 0',
                                                         id: 'htmlFloatPanel_StampCampaignList_TitleHeaderTxt',
                                                         html: '<font size=2 color=white><b>Loyalty Campaign Card</b></font>'
                                                     },
                                                      {
                                                          xtype: 'spacer',

                                                      },

                                                     

                                                              
                                                           









                                       ]

                            },

                            {
                                xtype: 'container',
                                width: '100%',
                                height: 5,
                                docked:'bottom'
                                // width: 40,
                            },
                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_StampCampaignListCardList',
                                width: '100%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_StampCampaignListCardLis',
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
                                //                    Ext.getCmp('tabpanelFloatPanel_StampCampaignList').setActiveItem(0);
                                //                }
                                //            }
                                //        });
                                //    }
                                //},

                                items: [


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
                                               height: 65,
                                               hidden:true,
                                               margin: '10 0 0 0',
                                               //style: {
                                               //    // background: '#D25959',
                                               //    background: 'rgba(76, 175, 80, 0.3);',
                                               //    // border: '2px'
                                               //},
                                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                               style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                               layout: {
                                                   type: 'hbox',
                                                   pack: 'center',
                                                   align: 'center',
                                               },
                                               items: [
                                                     {
                                                         xtype: 'container',
                                                         width: '60%',

                                                         margin: '0 0 0 0',
                                                         //style: {
                                                         //    // background: '#D25959',
                                                         //    background: 'rgba(76, 175, 80, 0.3);',
                                                         //    // border: '2px'
                                                         //},
                                                         //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                         style: 'background-color:transparent',
                                                         layout: {
                                                             type: 'vbox',
                                                             pack: 'center',
                                                             align: 'center',
                                                         },
                                                         items: [
                                                              {
                                                                  margin: '10 0 0 0',
                                                                  html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">STAMP CARDS TEMPLATE</div>',
                                                              },
                                                               {
                                                                   margin: '-10 0 0 0',
                                                                   id: 'htmlFloatPanel_StampCampaignListCardCount',
                                                                   html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                                               },
                                                         ]
                                                     },

                                                     {
                                                         xtype: 'container',
                                                         width: '40%',

                                                         margin: '0 0 0 0',
                                                         //style: {
                                                         //    // background: '#D25959',
                                                         //    background: 'rgba(76, 175, 80, 0.3);',
                                                         //    // border: '2px'
                                                         //},
                                                         //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                         style: 'background-color:transparent',
                                                         layout: {
                                                             type: 'vbox',
                                                             pack: 'center',
                                                             align: 'center',
                                                         },
                                                         items: [
                                                               {
                                                                   xtype: 'button',
                                                                   height: 60,
                                                                   width: 60,

                                                                   margin: '2 0 0 0',
                                                                   id: 'btnFloatPanel_StampCampaignListCardImage',
                                                                   //badgeText: "2",
                                                                   html: '<img src="resources/icons/loyaltycardOff.png" width="50" height="50" alt="Company Name">',
                                                                   ui: 'plain',
                                                                   handler: function () {

                                                                       //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                       //  setupMovementMap(2);





                                                                       //Ext.getCmp('mainView').setActiveItem(16);
                                                                       //loadNotificationSummary();
                                                                   }
                                                               },

                                                         ]
                                                     },
                                               ]
                                           },
                                           //{
                                           //    xtype: 'panel',
                                           //    height: 10
                                           //},

                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  height:100,
                                                  // style: 'background-color:black;color:white',
                                                  style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
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

                                                              //width: '50%',
                                                              html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;">Loyalty Stamp Card</div>'
                                                          },

                                                          //{

                                                          //    width: '50%',
                                                          //    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Filter</div>'
                                                          //},
                                                               //{
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
                                               height: '100%',
                                               width: '100%',

                                               id: 'containerFloatPanel_StampCampaignListLoyaltyCardID_List',
                                               style: {
                                                   // background: '#D25959',
                                                   background: 'transparent',
                                                   // border: '2px'
                                               },
                                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                               // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                               layout: {
                                                   type: 'vbox',
                                                   pack: 'start',
                                                   align: 'center',

                                               },
                                               items: [
                                                   {
                                                       xtype: 'list',
                                                       //  flex: 1,
                                                       width: '100%',
                                                       // store: 'EnterprisegetAllStore',
                                                       store: 'StampCampaignLoadByGetLoyaltyCardStore',
                                                       id: 'FloatPanel_StampCampaignListLoyaltyCardID_list',
                                                       // grouped: true,
                                                       mode: 'SINGLE',
                                                       //  indexBar: true,
                                                       disableSelection: true,
                                                       //itemTpl: '<div class="myContent">' +
                                                       //     '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:bottom" colspan="3"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 3px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;vertical-align:bottom"><br>Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:right;vertical-align:bottom" colspan="2"><br>Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 16px;margin: -10px 2px 0px 5px;cursor: pointer;" >Receipt Detail</div></td></tr></table>' +
                                                       //      '</div>',
                                                       //itemTpl: '<div class="myContent" style="width:99%;border-left: 6px solid grey;border-radius: 20px 0px 0px 20px;box-shadow: 5px 10px 18px #888888;margin:0px 0px 0px 5px;">' +
                                                       //itemTpl: '<div class="myContent" style="width:100%;box-shadow: 5px 10px 18px #888888;margin:0px 0px 0px 5px;">' +
                                                       //style="width:100%;border-left: 6px solid grey;border-radius: 20px 0px 0px 20px;box-shadow: 5px 10px 18px #888888;"
                                                       itemTpl: '<div class="myContent" style="margin:-7px 0px 0px -7px;width:104%;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;">' +
                                                      // itemTpl: '<div class="myContent" style="margin:-7px 0px 0px -7px;width:104%;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-left: 6px solid grey;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;">' +
                                                         //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><font size=1 color=white>Barber</font><img style="margin:-15px 0px 0px 0px;width:28px;height:28px;" src="resources/icons/restaurantPurple.png"></div>' +
                                                           '<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
                                                           '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +

                                                             '</div>' +
                                                            '<div style="width:100%;text-align:right;margin:-90px 0px 0px 0px;background-color: transparent;height:50px"><img style="margin:0px 0px 0px 0px;width:42px;height:52px;" src="resources/icons/StampSuccessCount.gif"></div>' +
                                                            '<div style="width:100%;text-align:right;margin:0px 0px 0px 0px;background-color: transparent;height:30px"></div>',

                                                       height: '95%',
                                                       listeners: {
                                                           itemsingletap: function (list, idx, target, records, evt) {


                                                               var Stamps = records.get('Stamps');
                                                               var StampsArr = Stamps.split('/');


                                                               var StampCampaignCode = records.get('StampCampaignCode');
                                                               var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                                               var StartDate = records.get('StartDate');
                                                               var EndDate = records.get('EndDate');
                                                               var SubscriberAccNo = GetCurrAyohaUserAccountNo();
                                                               var EnterpriseName = records.get('EnterpriseName');
                                                               var StampRuleRemarks = records.get('StampRuleRemarks');
                                                               var isStampRulePopUp = records.get('IsStampRulePopUp');
                                                               var StampCampaignName = records.get('StampCampaignName');
                                                               var CountLoyaltyStamped = StampsArr[0];
                                                               var CountStampCardRowShow = StampsArr[1];
                                                               localStorage.setItem('StampCampaignCode', StampCampaignCode);

                                                               localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
                                                               localStorage.setItem('CountStampCardRowShow', CountStampCardRowShow);
                                                               //alert(StampRuleRemarks); alert(isStampRulePopUp);

                                                               FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow);



                                                           },
                                                           deselect: function (list, records) {

                                                           }
                                                       },

                                                   },

                                               ]

                                           },

                                      ]
                                  },


                                ]

                            },








                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                              

                              







                        ]
                    },


                ]
            },












        ]





    });
    return _FloatPanel_StampCampaignList;



}








function FloatPanel_StampCampaignListShow() {

    Ext.Viewport.remove(_FloatPanel_StampCampaignList);
    this.overlay = Ext.Viewport.add(FloatPanel_StampCampaignList());
    this.overlay.show();
    isFloatPanel_StampCampaignListOpen = 'Y';


    //Ext.getCmp('tabpanelFloatPanel_StampCampaignList').getTabBar().hide();
    Load_FloatPanel_StampCampaignList_StampCampaignLoadByEnterpriseAccNoStore();
    //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>Customer Info</u></b></font>');

}





function FloatPanel_StampCampaignListHide() {
    _FloatPanel_StampCampaignList.hide(); isFloatPanel_StampCampaignListOpen = 'N';
}



//var StampCount;
function Load_FloatPanel_StampCampaignList_StampCampaignLoadByEnterpriseAccNoStore() {

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
        //StampCount = myStore.getCount();
        //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);

    });
    task.delay(2000);
}



function Load_FloatPanel_StampCampaignList_StampCardLoadByStampCampaignCodeEnterpriseAccNoStore(strStampCampaignCode, EnterpriseAccNo) {

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






