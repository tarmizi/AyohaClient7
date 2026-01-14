Ext.define('BuskartApp.view.Dashboard.FloatPanel_DashboardMerchantReward_MembershipContestDetail', {

});




var is_FloatPanel_DashboardMerchantReward_MembershipContestDetailOpen = "N";


var _FloatPanel_DashboardMerchantReward_MembershipContestDetail;

function FloatPanel_DashboardMerchantReward_MembershipContestDetail() {

    _FloatPanel_DashboardMerchantReward_MembershipContestDetail = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_DashboardMerchantReward_MembershipContestDetailID',
            name: 'clickableContainerFloatPanel_DashboardMerchantReward_MembershipContestDetail',
            // xtype: 'panel',
            zIndex: 150,
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
                                is_FloatPanel_DashboardMerchantReward_MembershipContestDetailOpen = 'N';
                                RemovePages("FloatPanel_DashboardMerchantReward_MembershipContestDetailHide()");
                                _FloatPanel_DashboardMerchantReward_MembershipContestDetail.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'left',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                            } if (e.direction == "right") {
                                is_FloatPanel_DashboardMerchantReward_MembershipContestDetailOpen = 'N';
                                RemovePages("FloatPanel_DashboardMerchantReward_MembershipContestDetailHide()");
                                _FloatPanel_DashboardMerchantReward_MembershipContestDetail.hide(Ext.fx.Animation({
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
            items: {
                ////zIndex: 40,
                xtype: 'container',
                id: 'ContainerFloatPanel_DashboardMerchantReward_MembershipContestDetail',
                // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                name: 'clickableContainerFloatPanel_DashboardMerchantReward_MembershipContestDetail',
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

                       id: 'containeFloatPanel_DashboardMerchantReward_MembershipContestDetailHeader',
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
                                                id: 'btnFloatPanel_DashboardMerchantReward_MembershipContestDetailBack',
                                                height: 30,
                                                width: 35,
                                                margin: '5 0 0 0',
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    // FloatPanel_AyohaReward_TopTenRankingHide();
                                                    // FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                    is_FloatPanel_DashboardMerchantReward_MembershipContestDetailOpen = 'N';
                                                    _FloatPanel_DashboardMerchantReward_MembershipContestDetail.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'left',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    RemovePages("FloatPanel_DashboardMerchantReward_MembershipContestDetailHide()");

                                                }
                                            },

                                             {
                                                 xtype: 'spacer',

                                             },


                                             {
                                                 margin: '0 0 0 0',
                                                 id: 'htmlFloatPanel_DashboardMerchantReward_MembershipContestDetail_TitleHeaderTxt',
                                                 html: '<font size=2 color=black><b>Membership Contest Details</b></font>'
                                             },

                                             {
                                                 xtype: 'panel',
                                                 width: 10
                                             },
                                                   {
                                                       xtype: 'button',
                                                       id: 'btnFloatPanel_DashboardMerchantReward_MembershipContestDetail_CardIcon',
                                                       height: 30,
                                                       hidden: true,
                                                       width: 35,
                                                       // iconCls: 'list',
                                                       html: '<div ><img src="resources/icons/contest01.png" width="25" height="20" alt="Company Name"></div>',
                                                       ui: 'plain',
                                                       handler: function () {

                                                           is_FloatPanel_DashboardMerchantReward_MembershipContestDetailOpen = 'N';

                                                           _FloatPanel_DashboardMerchantReward_MembershipContestDetail.hide(Ext.fx.Animation({
                                                               type: 'slideOut',
                                                               direction: 'right',
                                                               easing: 'cubic-bezier(.7,0,.7,1)',
                                                               duration: 250

                                                           }));
                                                           RemovePages(_FloatPanel_DashboardMerchantReward_MembershipContestDetail, "is_FloatPanel_DashboardMerchantReward_MembershipContestDetailOpen");
                                                           //FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                       }
                                                   },









                              ]

                   },


                       {
                           xtype: 'container',
                           id: 'ContainerFloatPanel_DashboardMerchantReward_MembershipContestDetail_Inner',
                           // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                           // name: 'clickableContainerFloatPanel_DashboardMerchantReward_MembershipContestDetail',
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
                                   id: 'ContainerFloatPanel_DashboardMerchantReward_MembershipContestDetailImage',
                                   style: ' background-color:transparent;',
                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center'
                                   },
                                   width: '94%',
                                   height: 700,
                                   items: [
                                        {
                                            margin: '0 0 0 0',
                                            width: '100%',
                                            height: 700,
                                            id: 'htmlFloatPanel_DashboardMerchantReward_MembershipContestDetail',
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
                                   // hidden:true,
                                   margin:'80 0 0 0',
                                   id: 'ContainerFloatPanel_DashboardMerchantReward_MembershipContestDetailText',
                                   // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                   // name: 'clickableContainerFloatPanel_DashboardMerchantReward_MembershipContestDetail',
                                   style: ' background-color:transparent;',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'start',
                                       align: 'left'
                                   },
                                   width: '94%',
                                   height: 500,
                                   items: [
                                       {margin:'0 0 0 10',
                                           html: '<div style="width: 100%; height:30px; background:white;text-align:left;font-size:10px;">Contest Descriptions:</div>',
                                       },
                                        {
                                            margin: '0 0 0 10',
                                            id: 'htmlFloatPanel_DashboardMerchantReward_MembershipContestDetailText',
                                            html: '<div style="width: 100%; height:450px; background:white;text-align:left;font-size:12px;font-weight:bold;">Contest Descriptions:</div>',
                                        },
                                   ]
                               },



                           ]
                       },



                          {

                              xtype: 'container',
                              width: '100%',
                              docked: 'bottom',
                              height: 60,
                              //  hidden: true,
                              // width: 40,

                              //  title: '<font size="3" color="white">Live Tracking Map</font>',
                              //hidden: true,

                              id: 'containeFloatPanel_DashboardMerchantReward_MembershipContestDetailReedemVoucerBottom',
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
                                             width: '90%',
                                             height: 60,
                                             margin: '0 0 0 0',
                                             // name: 'containeFloatPanel_DashboardMerchantReward_MembershipContestDetailRedeemVoucher',
                                             style: 'background-color:transparent;',
                                            // style:'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:85%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;',
                                             layout: {
                                                 type: 'vbox',
                                                 pack: 'center',
                                                 align: 'center',
                                             },
                                             items: [

                                                {
                                                    width: '100%',
                                                    height: 40,
                                                    id: 'htmlFloatPanel_DashboardMerchantReward_MembershipContestDetail_Register',
                                                    html: '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormShow();"  style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:100%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;"><div style="font-size: 16px;font-weight:bold;color:white;margin:6px 0px 0px 0px;">Join The Contest Now!</div></div>'
                                                }

                                             ]
                                         },



                                         


                                     ]

                          },



                ]

            },






        });

    return _FloatPanel_DashboardMerchantReward_MembershipContestDetail;
}














var globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ID;
var globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestCode;
var globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_EnterpriseAccNo;
var globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestStatus;
var globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestType;
var globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_AdvertisementImgPath;
var globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestName;
var globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestQuestion;
var globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_isRequiredReceipt;

//function FloatPanel_DashboardMerchantReward_MembershipContestDetailShow(VoucherName, VoucherImage, VoucherEndDate, VoucherDayLeft, VoucherCode, VoucherAmount) {
function FloatPanel_DashboardMerchantReward_MembershipContestDetailShow(ID) {
    AddRoutePages("FloatPanel_DashboardMerchantReward_MembershipContestDetailHide()");
    Ext.Viewport.remove(_FloatPanel_DashboardMerchantReward_MembershipContestDetail);
    this.overlay = Ext.Viewport.add(FloatPanel_DashboardMerchantReward_MembershipContestDetail());
    this.overlay.show();
    //AddRoutePages(_FloatPanel_DashboardMerchantReward_MembershipContestDetail, "is_FloatPanel_DashboardMerchantReward_MembershipContestDetailOpen");
    

    is_FloatPanel_DashboardMerchantReward_MembershipContestDetailOpen = 'Y';

    EnterpriseLogo = _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.findRecord('ID', ID, 0, false, false, true);
    EnterpriseName = _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.findRecord('ID', ID, 0, false, false, true);
    AdvertisementImgPath = _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ModifiedWidth = _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ContestCode = _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ContestName = _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ContestStatus_ContestStatus = _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.findRecord('ID', ID, 0, false, false, true);
    StartDate_DateOnly = _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.findRecord('ID', ID, 0, false, false, true);
    EndDate_DateOnly = _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.findRecord('ID', ID, 0, false, false, true);
    EndDate_DateOnly = _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ContestDescription = _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.findRecord('ID', ID, 0, false, false, true);
    EnterpriseAccNo = _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ContestStatus = _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ContestType = _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ContestQuestion = _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.findRecord('ID', ID, 0, false, false, true);
    isRequiredReceipt = _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.findRecord('ID', ID, 0, false, false, true);
    
    globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ID = ID;
    globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestCode = ContestCode.get('ContestCode');
    globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_EnterpriseAccNo = EnterpriseAccNo.get('EnterpriseAccNo');
    globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestStatus = ContestStatus_ContestStatus.get('ContestStatus_ContestStatus');
    globalConfig_ResizeUploadedImage = "";
    globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestType= ContestType.get('ContestType');
    globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_AdvertisementImgPath= AdvertisementImgPath.get('AdvertisementImgPath');
    globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestName= ContestName.get('ContestName');
    globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestQuestion= ContestQuestion.get('ContestQuestion');
    globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_isRequiredReceipt= isRequiredReceipt.get('isRequiredReceipt');
    // alert(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestType)

    Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestDetail').setHtml('<div class="myContent" style="background-color:white;width:100%;height:600px;">' +
                        '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="' + EnterpriseLogo.get('EnterpriseLogo') + '" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">' + EnterpriseName.get('EnterpriseName') + '</div></div>&nbsp;&nbsp;' +
                        '&nbsp;&nbsp;<img src="' + AdvertisementImgPath.get('AdvertisementImgPath') + '" style="width:' + ModifiedWidth.get('ModifiedWidth') + 'px;height:600px;margin:-10px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +

                      '<div style="width: 50%; float:left; height:30px; background:white; margin:-17px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">' + ContestName.get('ContestName') + '</div></div><div style="width: 50%; float:left; height:30px; background:white; margin:-17px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Host:<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;"><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:right;width:100%;"><div style="margin:0px 0px 0px 0px;">' + EnterpriseName.get('EnterpriseName') + '</div></div></div></div></div><br>' +

                                                           '<div  style="width: 70%; float:left; height:30px; background:white; margin:10px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">' + StartDate_DateOnly.get('StartDate_DateOnly') + ' - ' + EndDate_DateOnly.get('EndDate_DateOnly') + '</div></div><div style="width: 30%; float:left; height:30px; background:white; margin:10px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">' + ContestStatus.get('ContestStatus') + '</div></div></div><br>');




    // '<div style="width: 90px; float:left; height:70px; background:white; margin:-5px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">' + EventStartDate_Day + '</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-30px 0px 0px 0px;text-align:center;">' + EventStartDate_Month + '</div></div><div style="width: 230px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">' + EventName + '<br><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventStartDate_Day + ' ' + EventStartDate_Month + ',' + EventStartTime + ' - ' + EventEndDate_Day + ' ' + EventEndDate_Month + ',' + EventEndTime + '.</div><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventLocationName + '.</div></div></div>');

    Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestDetailText').setHtml('<div style="width: 100%; height:450px; background:white;text-align:left;font-size:12px;font-weight:bold;">' + ContestDescription.get('ContestDescription') + '</div>');

   // alert(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestStatus)

    if (globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestStatus != 'New') {

        if(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestType=="Text"){
            Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestDetail_Register').setHtml('<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormShow_Edit();"  style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:100%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;"><div style="font-size: 16px;font-weight:bold;color:white;margin:6px 0px 0px 0px;">View My Submitted Answer</div></div>');
        }
        if(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestType=="Picture"){
            Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestDetail_Register').setHtml('<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormShow_Edit();"  style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:100%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;"><div style="font-size: 16px;font-weight:bold;color:white;margin:6px 0px 0px 0px;">View My Submitted Selfie</div></div>'); 
        }
        
    }
}

function FloatPanel_DashboardMerchantReward_MembershipContestDetailShow_FromMembershipCardList_Upgrade(ContestCode) {
    AddRoutePages("FloatPanel_DashboardMerchantReward_MembershipContestDetailHide()");
    Ext.Viewport.remove(_FloatPanel_DashboardMerchantReward_MembershipContestDetail);
    this.overlay = Ext.Viewport.add(FloatPanel_DashboardMerchantReward_MembershipContestDetail());
    this.overlay.show();
    //AddRoutePages(_FloatPanel_DashboardMerchantReward_MembershipContestDetail, "is_FloatPanel_DashboardMerchantReward_MembershipContestDetailOpen");
    LoadingPanelShow(getLoadingIcon(), 'Loading...');
    Ext.getCmp('FloatPanel_DashboardMerchantReward_MembershipContestDetailID').setZIndex(330);
    is_FloatPanel_DashboardMerchantReward_MembershipContestDetailOpen = 'Y';

  
 
  _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
  _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.getProxy().setExtraParam('ContestCode', ContestCode);
  _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardContest/AyohaRewardContestLoadBySubscriberAccNoAndContestCode');
  _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
       
       
    

        var count = _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.getCount();
     
        if(count>0){

            var Store = _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.getAt(0);
           
            // EnterpriseLogo = _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.findRecord('ContestCode', ContestCode, 0, false, false, true);
            // EnterpriseName = _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.findRecord('ContestCode', ContestCode, 0, false, false, true);
            // AdvertisementImgPath = _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.findRecord('ContestCode', ContestCode, 0, false, false, true);
            // ModifiedWidth = _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.findRecord('ContestCode', ContestCode, 0, false, false, true);
            // ContestCode = _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.findRecord('ContestCode', ContestCode, 0, false, false, true);
            // ContestName = _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.findRecord('ContestCode', ContestCode, 0, false, false, true);
            // ContestStatus_ContestStatus = _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.findRecord('ContestCode', ContestCode, 0, false, false, true);
            // StartDate_DateOnly = _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.findRecord('ContestCode', ContestCode, 0, false, false, true);
            // EndDate_DateOnly = _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.findRecord('ContestCode', ContestCode, 0, false, false, true);
            // EndDate_DateOnly = _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.findRecord('ContestCode', ContestCode, 0, false, false, true);
            // ContestDescription = _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.findRecord('ContestCode', ContestCode, 0, false, false, true);
            // EnterpriseAccNo = _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.findRecord('ContestCode', ContestCode, 0, false, false, true);
            // ContestStatus = _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.findRecord('ContestCode', ContestCode, 0, false, false, true);
            // ContestType = _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.findRecord('ContestCode', ContestCode, 0, false, false, true);
            // ContestQuestion = _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.findRecord('ContestCode', ContestCode, 0, false, false, true);
            // isRequiredReceipt = _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore.findRecord('ContestCode', ContestCode, 0, false, false, true);
            
           // globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ID = ID;
            globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestCode = Store.get('ContestCode');
            globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_EnterpriseAccNo = Store.get('EnterpriseAccNo');
            globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestStatus = Store.get('ContestStatus_ContestStatus');
            globalConfig_ResizeUploadedImage = "";
            globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestType= Store.get('ContestType');
            globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_AdvertisementImgPath= Store.get('AdvertisementImgPath');
            globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestName= Store.get('ContestName');
            globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestQuestion= Store.get('ContestQuestion');
            globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_isRequiredReceipt= Store.get('isRequiredReceipt');



            // alert(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestType)
        
            Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestDetail').setHtml('<div class="myContent" style="background-color:white;width:100%;height:600px;">' +
                                '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="' + Store.get('EnterpriseLogo') + '" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">' + Store.get('EnterpriseName') + '</div></div>&nbsp;&nbsp;' +
                                '&nbsp;&nbsp;<img src="' + Store.get('AdvertisementImgPath') + '" style="width:' + Store.get('ModifiedWidth') + 'px;height:600px;margin:-10px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
        
                              '<div style="width: 50%; float:left; height:30px; background:white; margin:-17px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">' + Store.get('ContestName') + '</div></div><div style="width: 50%; float:left; height:30px; background:white; margin:-17px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Host:<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;"><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:right;width:100%;"><div style="margin:0px 0px 0px 0px;">' + Store.get('EnterpriseName') + '</div></div></div></div></div><br>' +
        
                                                                   '<div  style="width: 70%; float:left; height:30px; background:white; margin:10px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">' + Store.get('StartDate_DateOnly') + ' - ' + Store.get('EndDate_DateOnly') + '</div></div><div style="width: 30%; float:left; height:30px; background:white; margin:10px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">' + Store.get('ContestStatus') + '</div></div></div><br>');
        
        
        
        
            // '<div style="width: 90px; float:left; height:70px; background:white; margin:-5px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">' + EventStartDate_Day + '</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-30px 0px 0px 0px;text-align:center;">' + EventStartDate_Month + '</div></div><div style="width: 230px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">' + EventName + '<br><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventStartDate_Day + ' ' + EventStartDate_Month + ',' + EventStartTime + ' - ' + EventEndDate_Day + ' ' + EventEndDate_Month + ',' + EventEndTime + '.</div><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventLocationName + '.</div></div></div>');
        
            Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestDetailText').setHtml('<div style="width: 100%; height:450px; background:white;text-align:left;font-size:12px;font-weight:bold;">' + Store.get('ContestDescription') + '</div>');
        
           // alert(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestStatus)
        
            if (globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestStatus != 'New') {
        
                if(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestType=="Text"){
                    Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestDetail_Register').setHtml('<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormShow_Edit();"  style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:100%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;"><div style="font-size: 16px;font-weight:bold;color:white;margin:6px 0px 0px 0px;">View My Submitted Answer</div></div>');
                }
                if(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestType=="Picture"){
                    Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestDetail_Register').setHtml('<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormShow_Edit();"  style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:100%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;"><div style="font-size: 16px;font-weight:bold;color:white;margin:6px 0px 0px 0px;">View My Submitted Selfie</div></div>'); 
                }
                
            }
            LoadingPanelHide();
        }
        LoadingPanelHide();

    });
    task.delay(700);
    
    
  
}






function FloatPanel_DashboardMerchantReward_MembershipContestDetailShow_FromAyohaStore_ContestList(ID) {
    AddRoutePages("FloatPanel_DashboardMerchantReward_MembershipContestDetailHide()");
    Ext.Viewport.remove(_FloatPanel_DashboardMerchantReward_MembershipContestDetail);
    this.overlay = Ext.Viewport.add(FloatPanel_DashboardMerchantReward_MembershipContestDetail());
    this.overlay.show();
    //AddRoutePages(_FloatPanel_DashboardMerchantReward_MembershipContestDetail, "is_FloatPanel_DashboardMerchantReward_MembershipContestDetailOpen");


    is_FloatPanel_DashboardMerchantReward_MembershipContestDetailOpen = 'Y';

    EnterpriseLogo = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    EnterpriseName = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    AdvertisementImgPath = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ModifiedWidth = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ContestCode = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ContestName = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ContestStatus_ContestStatus = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    StartDate_DateOnly = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    EndDate_DateOnly = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    EndDate_DateOnly = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ContestDescription = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    EnterpriseAccNo = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    ContestStatus = _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);

    globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ID = ID;
    globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestCode = ContestCode.get('ContestCode');
    globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_EnterpriseAccNo = EnterpriseAccNo.get('EnterpriseAccNo');
    globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestStatus = ContestStatus_ContestStatus.get('ContestStatus_ContestStatus');
    globalConfig_ResizeUploadedImage = "";

    Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestDetail').setHtml('<div class="myContent" style="background-color:white;width:100%;height:600px;">' +
                        '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="' + EnterpriseLogo.get('EnterpriseLogo') + '" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">' + EnterpriseName.get('EnterpriseName') + '</div></div>&nbsp;&nbsp;' +
                        '&nbsp;&nbsp;<img src="' + AdvertisementImgPath.get('AdvertisementImgPath') + '" style="width:' + ModifiedWidth.get('ModifiedWidth') + 'px;height:600px;margin:-10px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +

                      '<div style="width: 50%; float:left; height:30px; background:white; margin:-17px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">' + ContestName.get('ContestName') + '</div></div><div style="width: 50%; float:left; height:30px; background:white; margin:-17px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Host:<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;"><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:right;width:100%;"><div style="margin:0px 0px 0px 0px;">' + EnterpriseName.get('EnterpriseName') + '</div></div></div></div></div><br>' +

                                                           '<div  style="width: 70%; float:left; height:30px; background:white; margin:10px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">' + StartDate_DateOnly.get('StartDate_DateOnly') + ' - ' + EndDate_DateOnly.get('EndDate_DateOnly') + '</div></div><div style="width: 30%; float:left; height:30px; background:white; margin:10px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">' + ContestStatus.get('ContestStatus') + '</div></div></div><br>');




    // '<div style="width: 90px; float:left; height:70px; background:white; margin:-5px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">' + EventStartDate_Day + '</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-30px 0px 0px 0px;text-align:center;">' + EventStartDate_Month + '</div></div><div style="width: 230px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">' + EventName + '<br><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventStartDate_Day + ' ' + EventStartDate_Month + ',' + EventStartTime + ' - ' + EventEndDate_Day + ' ' + EventEndDate_Month + ',' + EventEndTime + '.</div><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">' + EventLocationName + '.</div></div></div>');

    Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestDetailText').setHtml('<div style="width: 100%; height:450px; background:white;text-align:left;font-size:12px;font-weight:bold;">' + ContestDescription.get('ContestDescription') + '</div>');

    // alert(globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestStatus)

    if (globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ContestStatus != 'New') {
        Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_MembershipContestDetail_Register').setHtml('<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormShow_Edit();"  style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:100%;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;"><div style="font-size: 16px;font-weight:bold;color:white;margin:6px 0px 0px 0px;">View My Submitted Selfie</div></div>');
    }
}
function FloatPanel_DashboardMerchantReward_MembershipContestDetailHide() {

    if (is_FloatPanel_DashboardMerchantReward_MembershipContestDetailOpen == 'Y') {
        _FloatPanel_DashboardMerchantReward_MembershipContestDetail.hide();
        is_FloatPanel_DashboardMerchantReward_MembershipContestDetailOpen = 'N';
        RemovePages("FloatPanel_DashboardMerchantReward_MembershipContestDetailHide()");
        // swalFireSuccessStampedCardMsg("Stamped Success!!");
    }

}





//function FloatPanel_MerchantReward_MembershipEventDetail_RespondStatus(RespondStatus) {




//    LoadingPanelShow(getLoadingIcon(), 'Save Respond....');
//    var task = Ext.create('Ext.util.DelayedTask', function () {

//        var objn = {
//            "ID": globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_ID,
//            "EventCode": globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_EventCode,
//            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
//            "RespondStatus": RespondStatus,
//            "CreatedBy": GetCurrAyohaUserAccountNo(),
//            "Noted": "NA",
//            "EnterpriseAccNo": globalFloatPanel_DashboardMerchantReward_MembershipContestDetail_EnterpriseAccNo,
//        };
//        console.log(objn);
//        var _value = Ext.Ajax.request({

//            type: "POST",

//            url: GetAPIurl() + '/AyohaRewardEvent_Respond/AyohaRewardEventRespondInsertUpdate',

//            dataType: "json",
//            data: JSON.stringify(objn),
//            headers: {
//                "Content-Type": "application/json; charset=utf-8"
//            },

//            success: function (result, request) {

//                //console.log(result.responseText);


//                data = Ext.decode(result.responseText.trim());

//                if (data.success == "true") {
//                    FloatPanel_DashboardMerchantReward_MembershipContestDetailHide();
//                    swalFireDynamicIconWithMessage_NoPreventDefault("resources/icons/follow-up.png", "Your Respond Has Been Saved!", "Purple", "Purple");
//                    FloatPanel_DashboardMerchantReward_AyohaRewardEventLoadBySubscriberAccNoStore();
//                }
//                else {

//                    swalFireFail("Fail!-->" + result.responseText.trim());
//                    Ext.Viewport.unmask();
//                    LoadingPanelHide();
//                }
//                Ext.Viewport.unmask();
//                LoadingPanelHide();

//            },

//            failure: function (result, request) {
//                swalFireFail("Fail!");
//                Ext.Viewport.unmask();
//                LoadingPanelHide();
//            }

//        });

//        Ext.Viewport.unmask();
//    });
//    task.delay(500);
//}







