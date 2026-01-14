Ext.define('BuskartApp.view.Dashboard.FloatPanel_DashboardMerchantReward_MembershipEventDetail', {

});




var is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen = "N";


var _FloatPanel_DashboardMerchantReward_MembershipEventDetail;

function FloatPanel_DashboardMerchantReward_MembershipEventDetail() {

    _FloatPanel_DashboardMerchantReward_MembershipEventDetail = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_DashboardMerchantReward_MembershipEventDetailID',
            name: 'clickableContainerFloatPanel_DashboardMerchantReward_MembershipEventDetail',
            // xtype: 'panel',
            zIndex: 120,
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
            style: ' background-color:white;',
            // style: 'background-image: url("resources/icons/AyohaRankingRewardContest01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
            //style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
            // style: ' background-color: #fac;background-image: linear-gradient( #c800ffc9,#ff00de75)',
            listeners: {
                initialize: function (c) {
                    this.element.on({
                        swipe: function (e, node, options) {
                            //if (e.direction == "up") {
                            //    LoyaltyCardRedeemListHide();
                            //}
                            if (e.direction == "left") {
                                is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen = 'N';
                                _FloatPanel_DashboardMerchantReward_MembershipEventDetail.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'left',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                RemovePages("FloatPanel_DashboardMerchantReward_MembershipEventDetailHide()");
                            } if (e.direction == "right") {
                                is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen = 'N';

                                _FloatPanel_DashboardMerchantReward_MembershipEventDetail.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'right',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                RemovePages("FloatPanel_DashboardMerchantReward_MembershipEventDetailHide()");
                            }


                           
                        }
                    });
                }
            },
            items: {
                ////zIndex: 40,
                xtype: 'container',
                id: 'ContainerFloatPanel_DashboardMerchantReward_MembershipEventDetail2',
                // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                name: 'clickableContainerFloatPanel_DashboardMerchantReward_MembershipEventDetail',
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

                       id: 'containeFloatPanel_DashboardMerchantReward_MembershipEventDetailHeader',
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
                                       xtype: 'panel',
                                       width: 10
                                   },

                                            {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_DashboardMerchantReward_MembershipEventDetailBack',
                                                height: 30,
                                                width: 35,
                                                margin: '5 0 0 0',
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    // FloatPanel_AyohaReward_TopTenRankingHide();
                                                    // FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                    is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen = 'N';
                                                    _FloatPanel_DashboardMerchantReward_MembershipEventDetail.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'left',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    RemovePages("FloatPanel_DashboardMerchantReward_MembershipEventDetailHide()");

                                                }
                                            },

                                             {
                                                 xtype: 'spacer',

                                             },


                                             {
                                                 margin: '0 0 0 0',
                                                 id: 'htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_TitleHeaderTxt',
                                                 html: '<font size=2 color=black><b>Membership Event Details</b></font>'
                                             },

                                             {
                                                 xtype: 'panel',
                                                 width: 10
                                             },
                                                   {
                                                       xtype: 'button',
                                                       id: 'btnFloatPanel_DashboardMerchantReward_MembershipEventDetail_CardIcon',
                                                       height: 30,
                                                       hidden: true,
                                                       width: 35,
                                                       // iconCls: 'list',
                                                       html: '<div ><img src="resources/icons/contest01.png" width="25" height="20" alt="Company Name"></div>',
                                                       ui: 'plain',
                                                       handler: function () {

                                                           is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen = 'N';

                                                           _FloatPanel_DashboardMerchantReward_MembershipEventDetail.hide(Ext.fx.Animation({
                                                               type: 'slideOut',
                                                               direction: 'right',
                                                               easing: 'cubic-bezier(.7,0,.7,1)',
                                                               duration: 250

                                                           }));
                                                           RemovePages(_FloatPanel_DashboardMerchantReward_MembershipEventDetail, "is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen");
                                                           //FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                       }
                                                   },









                              ]

                   },


                       {
                           xtype: 'container',
                           id: 'ContainerFloatPanel_DashboardMerchantReward_MembershipEventDetail',
                           // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                           // name: 'clickableContainerFloatPanel_DashboardMerchantReward_MembershipEventDetail',
                           style: ' background-color:transparent;',
                           layout: {
                               type: 'vbox',
                               pack: 'start',
                               align: 'center'
                           },
                           width: '100%',
                           height: '100%',
                           scrollable: {
                               directionLock: true,
                               indicators: false
                           },
                           items: [

                               {
                                   xtype: 'container',
                                   id: 'ContainerFloatPanel_DashboardMerchantReward_MembershipEventDetailEnterpriseName',
                                   hidden:true,
                                   // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                   // name: 'clickableContainerFloatPanel_DashboardMerchantReward_MembershipEventDetail',
                                   style: ' background-color:transparent;',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'left',
                                       align: 'left'
                                   },
                                   width: '99%',
                                   height: 41,
                                   items: [
                                       //{
                                       //    xtype: 'spacer',
                                       //    width:25
                                       //},
                                        {
                                            margin: '20 0 0 10',
                                            //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                            id: 'htmlPanel_AyohaRewardVoucherDetailEnterpriseName',
                                            html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">Welcome Voucher</div>'
                                            // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                        },
                                   ]
                               },
                               {
                                   xtype: 'container',
                                   id: 'ContainerFloatPanel_DashboardMerchantReward_MembershipEventDetailImage',
                                   // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                   // name: 'clickableContainerFloatPanel_DashboardMerchantReward_MembershipEventDetail',
                                   style: ' background-color:transparent;',
                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center'
                                   },
                                   width: '94%',
                                   height: 370,
                                   items: [
                                       //{
                                       //    xtype: 'spacer',
                                       //    width:25
                                       //},
                                        {
                                            margin: '0 0 0 0',
                                            width: '100%',
                                            height: 370,
                                            id: 'htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail',
                                            //html: '<div style="width:100%; height: 220px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="null" style="width:100%; height: 180px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;">Valid Until:{EntitledVoucherEndDate}</div><br><div style="margin:-26px 0px 0px 0px;text-align:left;color:#c800ffc9;font-family: Arial; font-size:10px;word-wrap: break-word;font-weight:bold;">Day Left:{DayLeft}</div></div>'
                                           // html: '<div style="width:100%; height: 220px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="null" style="width:100%; height: 180px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>{EntitledVoucherEndDate}</b></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM{VoucherAmount}</b></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-3px 0px 0px 0px">Day Left:{DayLeft}</div></td></tr></tbody></table></div></div>',
                                            html: '<div class="myContent" style="background-color:white;width:100%;height:400px;">' +
                                                              '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br>' +
                                                             '&nbsp;&nbsp;<img src="{EventCoverPhoto}" style="width:{ModifiedWidth}px;height:200px;margin:-10px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
                                                            '<div style="width: 90px; float:left; height:70px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-22px 0px 0px 0px;text-align:center;">{EventStartDate_Month}</div></div><div style="width: 230px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">{EventName}<br><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventStartDate_Day} {EventStartDate_Month},{EventStartTime} - {EventEndDate_Day} {EventEndDate_Month},{EventEndTime}.</div><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventLocationName}.</div></div></div><br>',

                                            // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                        },
                                        //{
                                       //    xtype: 'spacer',
                                       //    width:25
                                       //},
                                   ]
                               },
                               


                               {
                                   xtype: 'container',
                                   id: 'ContainerFloatPanel_DashboardMerchantReward_MembershipEventDetailVoucherDetailHeader',
                                   // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                   // name: 'clickableContainerFloatPanel_DashboardMerchantReward_MembershipEventDetail',
                                   style: ' background-color:transparent;',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'start',
                                       align: 'left'
                                   },
                                   width: '99%',
                                   height: 20,
                                   items: [
                                       //{
                                       //    xtype: 'spacer',
                                       //    width:25
                                       //},
                                        {
                                            margin: '0 0 0 10',
                                            //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                            html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">Details</div>'
                                            // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                        },
                                   ]
                               },


           {

               margin: '2 0 0 -3',
               width: '90%',
               height: 612,
               //id: 'htmlAnimatedIntervalValue',
               html: '<textarea id="input-FloatPanel_DashboardMerchantReward_MembershipEventDetailTextArea"  style="border: 1px none white;color:black;text-align: left;font-size:12px;background-color: transparent;width:100%;height:612px;" wrap="hard">'
           },

                           ]
                       },



                          {

                              xtype: 'container',
                              width: '100%',
                              docked: 'bottom',
                              height: 50,
                            //  hidden: true,
                              // width: 40,

                              //  title: '<font size="3" color="white">Live Tracking Map</font>',
                              //hidden: true,

                              id: 'containeFloatPanel_DashboardMerchantReward_MembershipEventDetailReedemVoucerBottom',
                              //    style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                              style: 'background-color:transparent;border-top:1px solid #DCDCDC',

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

                                             xtype: 'container',
                                             width: '50%',
                                             height: 50,
                                             margin: '0 0 0 0',
                                            // name: 'containeFloatPanel_DashboardMerchantReward_MembershipEventDetailRedeemVoucher',
                                             style: 'background-color:transparent;',
                                             layout: {
                                                 type: 'vbox',
                                                 pack: 'center',
                                                 align: 'center',
                                             },
                                             items: [

                                                {
                                                    width: '100%',
                                                    height: 50,
                                                    id: 'htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_IwillAttend',
                                                    html: '<div style="width: 100%; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'IwillAttend' + "'" + ')"><img src="resources/icons/iwillattend02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:normal;">I Will Attend</div></div>'
                                                }

                                             ]
                                         },



                                         {
                                             xtype: 'container',
                                             width: '50%',
                                             height: 50,
                                             margin: '0 0 0 0',
                                             style: 'background-color:transparent;',
                                             layout: {
                                                 type: 'vbox',
                                                 pack: 'center',
                                                 align: 'center',
                                             },
                                             items: [

                                                 {
                                                     width: '100%',
                                                     height: 50,
                                                     id:'htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_Interested',
                                                     html: '<div style="width:100%; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'Interested' + "'" + ')"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:0px 0px 0px 0px;">Interested</div></div>'
                                                 }

                                             ]
                                         }



                                     ]

                          },



                ]

            },






        });

    return _FloatPanel_DashboardMerchantReward_MembershipEventDetail;
}














var globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_ID;
var globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EventCode;
var globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EnterpriseAccNo;
var globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EventLocationCoordinate;
//function FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(VoucherName, VoucherImage, VoucherEndDate, VoucherDayLeft, VoucherCode, VoucherAmount) {
function FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(EnterpriseLogo, EnterpriseName, EventCoverPhoto, EventName, EventStartDate_Day, EventStartDate_Month, EventStartTime, EventEndDate_Day, EventEndDate_Month, EventEndTime, EventLocationName, ModifiedWidth, EventDescription, EventLocationCoordinate, EventUrlTicket, EventCode, EnterpriseAccNo, RespondStatus,ID) {
    AddRoutePages("FloatPanel_DashboardMerchantReward_MembershipEventDetailHide()");
    Ext.Viewport.remove(_FloatPanel_DashboardMerchantReward_MembershipEventDetail);
    this.overlay = Ext.Viewport.add(FloatPanel_DashboardMerchantReward_MembershipEventDetail());
    this.overlay.show();
   // AddRoutePages(_FloatPanel_DashboardMerchantReward_MembershipEventDetail, "is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen");
  
    is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen = 'Y';
    globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_ID = ID;
    globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EventCode = EventCode;
    globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EnterpriseAccNo = EnterpriseAccNo;
    globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EventLocationCoordinate = EventLocationCoordinate;
    

  //  alert(EnterpriseLogo);
    if (EventLocationCoordinate != "NA") {
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail').setHtml('<div class="myContent" style="background-color:white;width:100%;height:370px;">' +
                     '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="' + EnterpriseLogo + '" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">' + EnterpriseName + '</div></div>&nbsp;&nbsp;' +
                    '&nbsp;&nbsp;<img src="' + EventCoverPhoto + '" style="width:' + ModifiedWidth + 'px;height:200px;margin:-10px 0px 0px 0px;"/>&nbsp;&nbsp;' +
                   '<div style="width: 90px; float:left; height:70px; background:white; margin:-5px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">' + EventStartDate_Day + '</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-30px 0px 0px 0px;text-align:center;">' + EventStartDate_Month + '</div></div><div style="width: 230px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">' + EventName + '<br><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventStartDate_Day + ' ' + EventStartDate_Month + ',' + EventStartTime + ' - ' + EventEndDate_Day + ' ' + EventEndDate_Month + ',' + EventEndTime + '.</div><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:blue;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;" onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetail_OpenLocation();"><u><img src="resources/icons/locationOne.png" style="width:22px;height:22px;margin:3px 0px 0px 0px;">' + EventLocationName + '.</u></div></div></div>');

        //'<br><br><br><div style="width:100%;background-color:transparent;height:50px;margin:-20px 0px 0px 0px;"><div style="width: 50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_IwillAttend()"><img src="resources/icons/iwillattend.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:bold;">I Will Attend</div></div><div style="width:50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_Interested()"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:0px 0px 0px 0px;">Interested</div></div></div>' +
        // '</div>');
    } else {
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail').setHtml('<div class="myContent" style="background-color:white;width:100%;height:370px;">' +
                     '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="' + EnterpriseLogo + '" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">' + EnterpriseName + '</div></div>&nbsp;&nbsp;' +
                    '&nbsp;&nbsp;<img src="' + EventCoverPhoto + '" style="width:' + ModifiedWidth + 'px;height:200px;margin:-10px 0px 0px 0px;"/>&nbsp;&nbsp;' +
                   '<div style="width: 90px; float:left; height:70px; background:white; margin:-5px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">' + EventStartDate_Day + '</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-30px 0px 0px 0px;text-align:center;">' + EventStartDate_Month + '</div></div><div style="width: 230px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">' + EventName + '<br><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventStartDate_Day + ' ' + EventStartDate_Month + ',' + EventStartTime + ' - ' + EventEndDate_Day + ' ' + EventEndDate_Month + ',' + EventEndTime + '.</div><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventLocationName + '.</div></div></div>');

        //'<br><br><br><div style="width:100%;background-color:transparent;height:50px;margin:-20px 0px 0px 0px;"><div style="width: 50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_IwillAttend()"><img src="resources/icons/iwillattend.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:bold;">I Will Attend</div></div><div style="width:50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_Interested()"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:0px 0px 0px 0px;">Interested</div></div></div>' +
        // '</div>');
    }

   
   


    if (RespondStatus == "IwillAttend") {
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_IwillAttend').setHtml('<div style="width: 100%; height:50px; background:white;text-align:center;font-size:13px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'IwillAttend' + "'" + ')"><img src="resources/icons/iwillattend01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:-5px 0px 0px 0px;font-weight:bold;color:purple;"><u>I Will Attend</u></div></div>');
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_Interested').setHtml('<div style="width:100%; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'Interested' + "'" + ')"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:0px 0px 0px 0px;">Interested</div></div>');
    }
    if (RespondStatus == "Interested") {
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_IwillAttend').setHtml('<div style="width: 100%; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'IwillAttend' + "'" + ')"><img src="resources/icons/iwillattend02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:normal;">I Will Attend</div></div>');
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_Interested').setHtml('<div style="width:100%; height:50px; background:white;text-align:center;font-size:13px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'Interested' + "'" + ')"><img src="resources/icons/like02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:-5px 0px 0px 0px;font-weight:bold;color:purple;"><u>Interested</u></div></div>');

    }






    var regex = /<br\s*[\/]?>/gi;
    var ModifiedEventDescription = EventDescription.replace(regex, "\n");

    document.getElementById('input-FloatPanel_DashboardMerchantReward_MembershipEventDetailTextArea').value = ModifiedEventDescription;

 

}

function FloatPanel_DashboardMerchantReward_MembershipEventDetailShow_FromMembershipCardList_Upgrade(CampaignCode,EnterpriseLogo,EnterpriseName){
   
   // alert(CampaignCode);
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
           
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "EventCode": CampaignCode,
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardEvent/AyohaRewardEventLoadBySubscriberAccNoAndEventCode',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                 // alert(data.results[0].EventName)

                 var ModifiedWidth = parseInt(window.innerWidth) - 24;

                  FloatPanel_DashboardMerchantReward_MembershipEventDetailShow_FromMembershipCardList_Upgrade_Show(EnterpriseLogo,EnterpriseName, data.results[0].EventCoverPhoto, data.results[0].EventName, data.results[0].EventStartDate_Day, data.results[0].EventStartDate_Month, data.results[0].EventStartTime, data.results[0].EventEndDate_Day, data.results[0].EventEndDate_Month, data.results[0].EventEndTime, data.results[0].EventLocationName, ModifiedWidth, data.results[0].EventDescription, data.results[0].EventLocationCoordinate, data.results[0].EventUrlTicket, data.results[0].EventCode, data.results[0].EnterpriseAccNo, data.results[0].RespondStatus,data.results[0].ID);

                //  FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(EnterpriseLogo, EnterpriseName, EventCoverPhoto, EventName, EventStartDate_Day, EventStartDate_Month, EventStartTime, EventEndDate_Day, EventEndDate_Month, EventEndTime, EventLocationName, ModifiedWidth, EventDescription, EventLocationCoordinate, EventUrlTicket, EventCode, EnterpriseAccNo, RespondStatus,ID);
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
                swalFireFail("Fail!");
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(500);
   
   
   
   

   
   
   
   
   
   
   
   
   
  
}


function FloatPanel_DashboardMerchantReward_MembershipEventDetailShow_FromMembershipCardList_Upgrade_Show(EnterpriseLogo,EnterpriseName ,EventCoverPhoto, EventName, EventStartDate_Day, EventStartDate_Month, EventStartTime, EventEndDate_Day, EventEndDate_Month, EventEndTime, EventLocationName, ModifiedWidth, EventDescription, EventLocationCoordinate, EventUrlTicket, EventCode, EnterpriseAccNo, RespondStatus,ID){

    AddRoutePages("FloatPanel_DashboardMerchantReward_MembershipEventDetailHide()");
    Ext.Viewport.remove(_FloatPanel_DashboardMerchantReward_MembershipEventDetail);
    this.overlay = Ext.Viewport.add(FloatPanel_DashboardMerchantReward_MembershipEventDetail());
    this.overlay.show();
   // AddRoutePages(_FloatPanel_DashboardMerchantReward_MembershipEventDetail, "is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen");
  // alert(EnterpriseLogo);
   Ext.getCmp('FloatPanel_DashboardMerchantReward_MembershipEventDetailID').setZIndex(330);
    is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen = 'Y';
    globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_ID = ID;
    globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EventCode = EventCode;
    globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EnterpriseAccNo = EnterpriseAccNo;
    globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EventLocationCoordinate = EventLocationCoordinate;
    
    if (EventLocationCoordinate != "NA") {
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail').setHtml('<div class="myContent" style="background-color:white;width:100%;height:370px;">' +
                     '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="' + EnterpriseLogo + '" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">' + EnterpriseName + '</div></div>&nbsp;&nbsp;' +
                    '&nbsp;&nbsp;<img src="' + EventCoverPhoto + '" style="width:' + ModifiedWidth + 'px;height:200px;margin:-10px 0px 0px 0px;"/>&nbsp;&nbsp;' +
                   '<div style="width: 90px; float:left; height:70px; background:white; margin:-5px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">' + EventStartDate_Day + '</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-30px 0px 0px 0px;text-align:center;">' + EventStartDate_Month + '</div></div><div style="width: 230px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">' + EventName + '<br><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventStartDate_Day + ' ' + EventStartDate_Month + ',' + EventStartTime + ' - ' + EventEndDate_Day + ' ' + EventEndDate_Month + ',' + EventEndTime + '.</div><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:blue;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;" onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetail_OpenLocation();"><u><img src="resources/icons/locationOne.png" style="width:22px;height:22px;margin:3px 0px 0px 0px;">' + EventLocationName + '.</u></div></div></div>');

        //'<br><br><br><div style="width:100%;background-color:transparent;height:50px;margin:-20px 0px 0px 0px;"><div style="width: 50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_IwillAttend()"><img src="resources/icons/iwillattend.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:bold;">I Will Attend</div></div><div style="width:50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_Interested()"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:0px 0px 0px 0px;">Interested</div></div></div>' +
        // '</div>');
    } else {
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail').setHtml('<div class="myContent" style="background-color:white;width:100%;height:370px;">' +
                     '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="' + EnterpriseLogo + '" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">' + EnterpriseName + '</div></div>&nbsp;&nbsp;' +
                    '&nbsp;&nbsp;<img src="' + EventCoverPhoto + '" style="width:' + ModifiedWidth + 'px;height:200px;margin:-10px 0px 0px 0px;"/>&nbsp;&nbsp;' +
                   '<div style="width: 90px; float:left; height:70px; background:white; margin:-5px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">' + EventStartDate_Day + '</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-30px 0px 0px 0px;text-align:center;">' + EventStartDate_Month + '</div></div><div style="width: 230px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">' + EventName + '<br><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventStartDate_Day + ' ' + EventStartDate_Month + ',' + EventStartTime + ' - ' + EventEndDate_Day + ' ' + EventEndDate_Month + ',' + EventEndTime + '.</div><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventLocationName + '.</div></div></div>');

        //'<br><br><br><div style="width:100%;background-color:transparent;height:50px;margin:-20px 0px 0px 0px;"><div style="width: 50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_IwillAttend()"><img src="resources/icons/iwillattend.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:bold;">I Will Attend</div></div><div style="width:50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_Interested()"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:0px 0px 0px 0px;">Interested</div></div></div>' +
        // '</div>');
    }

   
   


    if (RespondStatus == "IwillAttend") {
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_IwillAttend').setHtml('<div style="width: 100%; height:50px; background:white;text-align:center;font-size:13px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'IwillAttend' + "'" + ')"><img src="resources/icons/iwillattend01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:-5px 0px 0px 0px;font-weight:bold;color:purple;"><u>I Will Attend</u></div></div>');
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_Interested').setHtml('<div style="width:100%; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'Interested' + "'" + ')"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:0px 0px 0px 0px;">Interested</div></div>');
    }
    if (RespondStatus == "Interested") {
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_IwillAttend').setHtml('<div style="width: 100%; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'IwillAttend' + "'" + ')"><img src="resources/icons/iwillattend02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:normal;">I Will Attend</div></div>');
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipEventDetail_Interested').setHtml('<div style="width:100%; height:50px; background:white;text-align:center;font-size:13px;" onclick="FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(' + "'" + 'Interested' + "'" + ')"><img src="resources/icons/like02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:-5px 0px 0px 0px;font-weight:bold;color:purple;"><u>Interested</u></div></div>');

    }






    var regex = /<br\s*[\/]?>/gi;
    var ModifiedEventDescription = EventDescription.replace(regex, "\n");

    document.getElementById('input-FloatPanel_DashboardMerchantReward_MembershipEventDetailTextArea').value = ModifiedEventDescription;
    LoadingPanelHide();
}

function FloatPanel_DashboardMerchantReward_MembershipEventDetailHide() {

    if (is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen == 'Y') {
        _FloatPanel_DashboardMerchantReward_MembershipEventDetail.hide();
        is_FloatPanel_DashboardMerchantReward_MembershipEventDetailOpen = 'N';
        RemovePages("FloatPanel_DashboardMerchantReward_MembershipEventDetailHide()");
        // swalFireSuccessStampedCardMsg("Stamped Success!!");
    }

}


function FloatPanel_DashboardMerchantReward_MembershipEventDetail_OpenLocation() {



    var Coordinate = globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EventLocationCoordinate.split(",");
    PlaceMarkerlat = Coordinate[0];
    PlaceMarkerlng = Coordinate[1];





    if (PlaceMarkerlat) {
        if (PlaceMarkerlng) {
            window.open("https://www.google.com/maps/search/?api=1&query=" + PlaceMarkerlat + "," + PlaceMarkerlng, '_system'); return false;
        } else {

            swalFireInfoMerchantButtonLink("Merchant Might be Not Set Location Coordinate.,Help merchant to know this setting!", "Location");
        }
    } else {
        swalFireInfoMerchantButtonLink("Merchant Might be Not Set Location Coordinate.,Help merchant to know this Message!", "Location");
    }
}



function FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(RespondStatus) {
    if(is_prompt_setMessage_NotYetMembershipMessage()){
        return
         }



    LoadingPanelShow(getLoadingIcon(), 'Save Respond....');
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "ID": globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_ID,
            "EventCode": globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EventCode,
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "RespondStatus": RespondStatus,
            "CreatedBy": GetCurrAyohaUserAccountNo(),
            "Noted": "NA",
            "EnterpriseAccNo": globalFloatPanel_DashboardMerchantReward_MembershipEventDetail_EnterpriseAccNo,
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardEvent_Respond/AyohaRewardEventRespondInsertUpdate',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    FloatPanel_DashboardMerchantReward_MembershipEventDetailHide();
                    swalFireDynamicIconWithMessage_NoPreventDefault("resources/icons/respondEvent.png", "Your Respond Has Been Submitted!", "Purple", "Purple");
                    FloatPanel_DashboardMerchantReward_AyohaRewardEventLoadBySubscriberAccNoStore();
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
                swalFireFail("Fail!");
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(500);
}







