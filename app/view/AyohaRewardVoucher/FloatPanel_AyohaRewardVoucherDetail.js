Ext.define('BuskartApp.view.AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherDetail', {

});




var is_FloatPanel_AyohaRewardVoucherDetailOpen = "N";


var _FloatPanel_AyohaRewardVoucherDetail;

function FloatPanel_AyohaRewardVoucherDetail() {

    _FloatPanel_AyohaRewardVoucherDetail = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_AyohaRewardVoucherDetailID',
            name: 'clickableContainerFloatPanel_AyohaRewardVoucherDetail',
            // xtype: 'panel',
         // zIndex: 111,
          zIndex:60,
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
                                is_FloatPanel_AyohaRewardVoucherDetailOpen = 'N';
                                RemovePages("FloatPanel_AyohaRewardVoucherDetailHide()");
                                _FloatPanel_AyohaRewardVoucherDetail.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'left',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                            } if (e.direction == "right") {
                                is_FloatPanel_AyohaRewardVoucherDetailOpen = 'N';
                                RemovePages("FloatPanel_AyohaRewardVoucherDetailHide()");
                                _FloatPanel_AyohaRewardVoucherDetail.hide(Ext.fx.Animation({
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
                id: 'ContainerFloatPanel_AyohaRewardVoucherDetail',
                // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                name: 'clickableContainerFloatPanel_AyohaRewardVoucherDetail',
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

                       id: 'containeFloatPanel_AyohaRewardVoucherDetailHeader',
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
                                                id: 'btnFloatPanel_AyohaRewardVoucherDetailBack',
                                                height: 30,
                                                width: 35,
                                                margin:'5 0 0 10',
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    // FloatPanel_AyohaReward_TopTenRankingHide();
                                                    // FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                    is_FloatPanel_AyohaRewardVoucherDetailOpen = 'N';
                                                    _FloatPanel_AyohaRewardVoucherDetail.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'left',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    RemovePages("FloatPanel_AyohaRewardVoucherDetailHide()");
                                                    //  FloatPanel_AyohaReward_TopTenRanking_AddCardHide();

                                                }
                                            },

                                             {
                                                 xtype: 'spacer',

                                             },


                                             {
                                                 margin: '0 15 0 0',
                                                 id: 'htmlFloatPanel_AyohaRewardVoucherDetail_TitleHeaderTxt',
                                                 html: '<font size=2 color=black><b>Ayoha Reward Voucher Detail</b></font>'
                                             },

                                             {
                                                 xtype: 'panel',
                                                 width:10
                                             },
                                                   {
                                                       xtype: 'button',
                                                       id: 'btnFloatPanel_AyohaRewardVoucherDetail_CardIcon',
                                                       height: 30,
                                                       hidden:true,
                                                       width: 35,
                                                       // iconCls: 'list',
                                                       html: '<div ><img src="resources/icons/contest01.png" width="25" height="20" alt="Company Name"></div>',
                                                       ui: 'plain',
                                                       handler: function () {

                                                           is_FloatPanel_AyohaRewardVoucherDetailOpen = 'N';

                                                           _FloatPanel_AyohaRewardVoucherDetail.hide(Ext.fx.Animation({
                                                               type: 'slideOut',
                                                               direction: 'right',
                                                               easing: 'cubic-bezier(.7,0,.7,1)',
                                                               duration: 250

                                                           }));
                                                           RemovePages("FloatPanel_AyohaRewardVoucherDetailHide()");
                                                           //FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                       }
                                                   },









                              ]

                   },


                       {
                           xtype: 'container',
                           id: 'ContainerFloatPanel_AyohaRewardVoucherDetail',
                           // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                           // name: 'clickableContainerFloatPanel_AyohaRewardVoucherDetail',
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
                                   id: 'ContainerFloatPanel_AyohaRewardVoucherDetailVoucherName',
                                   // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                   // name: 'clickableContainerFloatPanel_AyohaRewardVoucherDetail',
                                   style: ' background-color:transparent;',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'left',
                                       align: 'left'
                                   },
                                   width: '99%',
                                   height:41,
                                   items: [
                                       //{
                                       //    xtype: 'spacer',
                                       //    width:25
                                       //},
                                        {
                                            margin: '20 0 0 10',
                                            //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                            id: 'htmlPanel_AyohaRewardVoucherDetailVoucherName',
                                            html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">Welcome Voucher</div>'
                                            // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                        },
                                   ]
                               },
                               {
                                   xtype: 'container',
                                   id: 'ContainerFloatPanel_AyohaRewardVoucherDetailVoucherImage',
                                   // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                   // name: 'clickableContainerFloatPanel_AyohaRewardVoucherDetail',
                                   style: ' background-color:transparent;',
                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center'
                                   },
                                   width: '94%',
                                   height: 230,
                                   items: [
                                       //{
                                       //    xtype: 'spacer',
                                       //    width:25
                                       //},
                                        {
                                            margin: '0 0 0 0',
                                            width: '100%',
                                            height: 230,
                                            id: 'htmlPanel_AyohaRewardVoucherDetailVoucherImage',
                                            //html: '<div style="width:100%; height: 220px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="null" style="width:100%; height: 180px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;">Valid Until:{EntitledVoucherEndDate}</div><br><div style="margin:-26px 0px 0px 0px;text-align:left;color:#c800ffc9;font-family: Arial; font-size:10px;word-wrap: break-word;font-weight:bold;">Day Left:{DayLeft}</div></div>'
                                            html: '<div style="width:100%; height: 220px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="null" style="width:100%; height: 180px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>{EntitledVoucherEndDate}</b></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM{VoucherAmount}</b></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-3px 0px 0px 0px">Day Left:{DayLeft}</div></td></tr></tbody></table></div></div>',


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
                                   id: 'ContainerFloatPanel_AyohaRewardVoucherDetailVoucherDetailHeader',
                                   // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                   // name: 'clickableContainerFloatPanel_AyohaRewardVoucherDetail',
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
               html: '<textarea id="input-FloatPanel_AyohaRewardVoucherDetailVoucherDetailTextArea"  style="border: 1px none white;color:black;text-align: left;font-size:12px;background-color: transparent;width:100%;height:612px;" wrap="hard">'
           },

                           ]
                       },



                          {

                              xtype: 'container',
                              width: '100%',
                              docked: 'bottom',
                               //hidden:true,
                              // width: 40,
                              height: 60,

                              //  title: '<font size="3" color="white">Live Tracking Map</font>',
                              hidden: true,

                              id: 'containeFloatPanel_AyohaRewardVoucherDetailReedemVoucerBottom',
                              name: 'clickableContainerFloatPanel_AyohaRewardVoucherDetailReedemVoucer',   
                              //    style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                             // style: 'background-color:transparent;',

                              style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;',
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

                                             width: '80%',
                                             height: 40,
                                             margin: '9 0 0 0',
                                             name: 'containeFloatPanel_AyohaRewardVoucherDetailRedeemVoucher',
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
                                                     width: '100%',
                                                    // height: 40,
                                                     height: 50,
                                                     html: '<button class="button3getMembershipCard">Get This Voucher !</button>',
                                                     //  html: '<font size=2 color=white><b>Confirm and Join Contest</b></font>',
                                                    // html: '<div  style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 10px 10px 10px 10px;border:2px solid #fac;text-align:center;margin:0px 0px 0px 0px;height:40px;width:100%"><div style="color:white;text-align: center;font-size:14px;width:100%;margin:8px 0px 0px 0px;"><b>Get This Voucher!</b></div></div>'

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

    return _FloatPanel_AyohaRewardVoucherDetail;
}



function FloatPanel_AyohaRewardVoucherDetailShow(VoucherName, VoucherImage, VoucherEndDate, VoucherDayLeft, VoucherCode, VoucherAmount) {
    Ext.Viewport.remove(_FloatPanel_AyohaRewardVoucherDetail);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaRewardVoucherDetail());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaRewardVoucherDetailHide()");
    is_FloatPanel_AyohaRewardVoucherDetailOpen = 'Y';


    Ext.getCmp('htmlPanel_AyohaRewardVoucherDetailVoucherName').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">' + VoucherName + '</div>');
   // Ext.getCmp('htmlPanel_AyohaRewardVoucherDetailVoucherImage').setHtml('<div style="width:100%; height: 220px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="' + VoucherImage + '" style="width:100%; height: 180px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;">Valid Until:' + VoucherEndDate + '</div><br><div style="margin:-26px 0px 0px 0px;text-align:left;color:#c800ffc9;font-family: Arial; font-size:10px;word-wrap: break-word;font-weight:bold;">Day Left:' + VoucherDayLeft + '</div></div>');
    Ext.getCmp('htmlPanel_AyohaRewardVoucherDetailVoucherImage').setHtml('<div style="width:100%; height: 220px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="' + VoucherImage + '" style="width:100%; height: 180px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>' + VoucherEndDate + '</b></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM' + VoucherAmount + '</b></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-3px 0px 0px 0px">Day Left:' + VoucherDayLeft + '</div></td></tr></tbody></table></div></div>');

    if (isFloatPanel_AyohaReward_MerchantReward_VoucherListUsedOpen == "Y") {
        VoucherTermAndCondition = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoPaymentNoEntitledVoucherStatusStore.findRecord('VoucherCode', VoucherCode, 0, false, false, true);


        document.getElementById('input-FloatPanel_AyohaRewardVoucherDetailVoucherDetailTextArea').value = VoucherTermAndCondition.get('VoucherTermAndCondition');
        return;
    }


    if (is_FloatPanel_DashboardMerchantRewardHide == "Y") {
        VoucherTermAndCondition = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.findRecord('VoucherCode', VoucherCode, 0, false, false, true);


        document.getElementById('input-FloatPanel_AyohaRewardVoucherDetailVoucherDetailTextArea').value = VoucherTermAndCondition.get('VoucherTermAndCondition');
        return;
    }

    if(isFloatPanel_AyohaRewardVoucherList_AyohaStoreOpen=='Y'){
        VoucherTermAndCondition = _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MembershipCardStore.findRecord('VoucherCode', VoucherCode, 0, false, false, true);
        document.getElementById('input-FloatPanel_AyohaRewardVoucherDetailVoucherDetailTextArea').value = VoucherTermAndCondition.get('VoucherTermAndCondition');

        
        Ext.getCmp('FloatPanel_AyohaRewardVoucherDetailID').setZIndex(110);
        return;
    }

    
    if(globalisSuccessCheckinController_Dashboard_LoadVoucherPerksOpen=='Y'){
        // VoucherTermAndCondition = _DataStore_DashboardVoucherCard_SuccessCheckIn_LoadVoucherPerkStore.findRecord('VoucherCode', VoucherCode, 0, false, false, true);
        // document.getElementById('input-FloatPanel_AyohaRewardVoucherDetailVoucherDetailTextArea').value = VoucherTermAndCondition.get('VoucherTermAndCondition');
        
        Dashboard_SuccessCheckIn_SetTnCByVoucherCode(VoucherCode)
        
       globalisSuccessCheckinController_Dashboard_LoadVoucherPerksOpen='N';
        
       // Ext.getCmp('FloatPanel_AyohaRewardVoucherDetailID').setZIndex(110);
        return;
    }
    



   


    
    VoucherTermAndCondition = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore.findRecord('VoucherCode', VoucherCode, 0, false, false, true);
   

    document.getElementById('input-FloatPanel_AyohaRewardVoucherDetailVoucherDetailTextArea').value = VoucherTermAndCondition.get('VoucherTermAndCondition');

   // var x = parseInt(window.innerHeight);


    //var newHeights = x - 232;
    //  var newHeights = x - 50;






    //  Ext.getCmp('ContainerFloatPanel_AyohaRewardVoucherDetailImg').setStyle('background-image: url(http://42.1.63.57/AyohaImgCard/AyohaRewardContest/AdverImg/contestAdvertisement01.png); background-size: 100% 100%;background-repeat: no-repeat;');


    //Ext.getCmp('htmlFloatPanel_AyohaRewardVoucherDetailImg').setHtml('<img src="' + globalContestAdvertisementImgPath + '" width="100%" height="750px" alt="Company Name">');


    ////////////////var containerView = Ext.ComponentQuery.query('container[name=containeFloatPanel_AyohaRewardVoucherDetailEnterContest]')[0];
    ////////////////var containerViewEl = containerView.element;
    ////////////////containerViewEl.on('tap',
    ////////////////  function (event, node, options, eOpts) {
    ////////////////      AyohaRewardContestantInsertUpdate();

    ////////////////      //  FloatPanel_AyohaRewardVoucherDetailHide();
    ////////////////  }
    ////////////////);


    //if (globalIsContestant == "Y") {
    //    Ext.getCmp('containeFloatPanel_AyohaRewardVoucherDetailBottom').setHidden(true);
    //    var newHeights = x - 25;
    //    Ext.getCmp('htmlFloatPanel_AyohaRewardVoucherDetailImg').setHtml('<img src="' + globalContestAdvertisementImgPath + '" width="100%" height="' + newHeights + 'px" alt="Company Name">');
    //} if (globalIsContestant == "N") {

    //    var newHeights = x - 80;
    //    Ext.getCmp('htmlFloatPanel_AyohaRewardVoucherDetailImg').setHtml('<img src="' + globalContestAdvertisementImgPath + '" width="100%" height="' + newHeights + 'px" alt="Company Name">');
    //}

    // Ext.getCmp('ContainerFloatPanel_AyohaRewardVoucherDetailImg').setHeight(newHeights);


    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    FloatPanel_GraphicConfetiShow();
    //});
    //task.delay(1000);


}



function Dashboard_SuccessCheckIn_SetTnCByVoucherCode(VoucherCode) {
    var store = _DataStore_DashboardVoucherCard_SuccessCheckIn_LoadVoucherPerkStore;
  
    if (!store) return;
  
    // kalau store belum load / masih loading
    if (store.isLoading && store.isLoading()) {
      store.on('load', function () {
        AyohaVoucher_SetTnCByVoucherCode(VoucherCode);
      }, null, { single: true });
      return;
    }
  
    // cari record (pastikan string)
    var code = String(VoucherCode || '').trim();
    var rec  = store.findRecord('VoucherCode', code, 0, false, false, true);
  
    if (!rec) {
      console.warn('VoucherCode not found:', code, 'storeCount:', store.getCount());
      return;
    }
  
    var tnc = rec.get('VoucherTermAndCondition') || '';
  
    // ✅ cara paling betul untuk Sencha Touch
    var taCmp = Ext.getCmp('FloatPanel_AyohaRewardVoucherDetailVoucherDetailTextArea');
    if (taCmp) {
      taCmp.setValue(tnc);
      return;
    }
  
    // fallback kalau nak pakai DOM
    var el = document.getElementById('input-FloatPanel_AyohaRewardVoucherDetailVoucherDetailTextArea');
    if (el) el.value = tnc;
  }











function FloatPanel_AyohaRewardVoucherDetailShow_MerchantPerks(VoucherName, VoucherImage, VoucherEndDate,
    VoucherDayLeft, VoucherCode, VoucherAmount,VoucherTermAndCondition,MembershipCardCode,EnterpriseCountStar,EnterpriseAccNo,TotalReviewer) {
  
  
  


 
  
    Ext.Viewport.remove(_FloatPanel_AyohaRewardVoucherDetail);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaRewardVoucherDetail());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaRewardVoucherDetailHide()");
    is_FloatPanel_AyohaRewardVoucherDetailOpen = 'Y';

    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    Ext.getCmp('htmlPanel_AyohaRewardVoucherDetailVoucherName').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">' + VoucherName + '</div>');
   // Ext.getCmp('htmlPanel_AyohaRewardVoucherDetailVoucherImage').setHtml('<div style="width:100%; height: 220px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="' + VoucherImage + '" style="width:100%; height: 180px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;">Valid Until:' + VoucherEndDate + '</div><br><div style="margin:-26px 0px 0px 0px;text-align:left;color:#c800ffc9;font-family: Arial; font-size:10px;word-wrap: break-word;font-weight:bold;">Day Left:' + VoucherDayLeft + '</div></div>');
    Ext.getCmp('htmlPanel_AyohaRewardVoucherDetailVoucherImage').setHtml('<div style="width:100%; height: 220px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="' + VoucherImage + '" style="width:100%; height: 180px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>' + VoucherEndDate + '</b></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM' + VoucherAmount + '</b></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-3px 0px 0px 0px">Day Left:' + VoucherDayLeft + '</div></td></tr></tbody></table></div></div>');
    Ext.getCmp('containeFloatPanel_AyohaRewardVoucherDetailReedemVoucerBottom').setHidden(false);
    
   //AppState.FloatPanel_AyohaRewardVoucherDetail.MembershipCardCode=MembershipCardCode;
 // AppState.FloatPanel_AyohaRewardVoucherDetail.EnterpriseCountStar=EnterpriseCountStar;
    // AppState.FloatPanel_AyohaRewardVoucherDetail.EnterpriseAccNo=EnterpriseAccNo;
     //AppState.FloatPanel_AyohaRewardVoucherDetail.TotalReviewer=TotalReviewer;
     //AppState.FloatPanel_AyohaRewardVoucherDetail.MembershipCardFeePaymentCycle;
   
    document.getElementById('input-FloatPanel_AyohaRewardVoucherDetailVoucherDetailTextArea').value = VoucherTermAndCondition;

  
if(isFloatPanel_AyohaRewardVoucherList_AyohaStoreOpen=='Y'){
    Ext.getCmp('FloatPanel_AyohaRewardVoucherDetailID').setZIndex(110);
}



    var containerViewclickableContainerFloatPanel_AyohaRewardVoucherDetailReedemVoucer = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_AyohaRewardVoucherDetailReedemVoucer]')[0];
    var containerViewElclickableContainerFloatPanel_AyohaRewardVoucherDetailReedemVoucer = containerViewclickableContainerFloatPanel_AyohaRewardVoucherDetailReedemVoucer.element;
    containerViewElclickableContainerFloatPanel_AyohaRewardVoucherDetailReedemVoucer.on('tap',
      function (event, node, options, eOpts) {




    //   var MembershipCardCode=  AppState.FloatPanel_AyohaRewardVoucherDetail.MembershipCardCode;
    //   var EnterpriseCountStar=  AppState.FloatPanel_AyohaRewardVoucherDetail.EnterpriseCountStar;
    //    var EnterpriseAccNo= AppState.FloatPanel_AyohaRewardVoucherDetail.EnterpriseAccNo;
    //     var TotalReviewer=AppState.FloatPanel_AyohaRewardVoucherDetail.TotalReviewer;
    //    var MembershipCardFeePaymentCycle =AppState.FloatPanel_AyohaRewardVoucherDetail.MembershipCardFeePaymentCycle;
        FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(MembershipCardCode,EnterpriseAccNo,'NO',MembershipCardFeePaymentCycle,EnterpriseCountStar,TotalReviewer);
      }
    );

    //alert(MembershipCardCode);

    FloatPanel_AyohaRewardVoucherDetail_MembershipCardLoadByMembershipCardCodeStore(MembershipCardCode,EnterpriseCountStar,EnterpriseAccNo,TotalReviewer)

}








function FloatPanel_AyohaRewardVoucherDetailHide() {

    if (is_FloatPanel_AyohaRewardVoucherDetailOpen == 'Y') {
        _FloatPanel_AyohaRewardVoucherDetail.hide();
        is_FloatPanel_AyohaRewardVoucherDetailOpen = 'N';
        RemovePages("FloatPanel_AyohaRewardVoucherDetailHide()");
        // swalFireSuccessStampedCardMsg("Stamped Success!!");
    }

}





function AyohaRewardContestantInsertUpdateXX() {

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
                FloatPanel_AyohaRewardVoucherDetailHide();

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






function FloatPanel_AyohaRewardVoucherDetail_MembershipCardLoadByMembershipCardCodeStore(MembershipCardCode,EnterpriseCountStar,EnterpriseAccNo,TotalReviewer) {
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "MembershipCardCode": MembershipCardCode,
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/MembershipCard/MembershipCardLoadByMembershipCardCode',

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
                        MembershipCardName= data.results[0].MembershipCardName;
                        MembershipCardFeePaymentCycle= data.results[0].MembershipCardFeePaymentCycle;
                      
                      //  '<div OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)" style="min-width:88vw; max-width:88vw; margin-right:5vw; box-sizing:border-box; border-radius:15px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.3); display:inline-block;">',


                      AppState.FloatPanel_AyohaRewardVoucherDetail.MembershipCardCode=MembershipCardCode;
AppState.FloatPanel_AyohaRewardVoucherDetail.EnterpriseCountStar=EnterpriseCountStar;
AppState.FloatPanel_AyohaRewardVoucherDetail.EnterpriseAccNo=EnterpriseAccNo;
AppState.FloatPanel_AyohaRewardVoucherDetail.TotalReviewer=TotalReviewer;
AppState.FloatPanel_AyohaRewardVoucherDetail.MembershipCardName=MembershipCardName;
AppState.FloatPanel_AyohaRewardVoucherDetail.MembershipCardFeePaymentCycle=MembershipCardFeePaymentCycle;
LoadingPanelHide();
                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {
                        LoadingPanelHide();
                        Ext.Viewport.unmask();

                    }





                }
                else {

                    LoadingPanelHide();
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                LoadingPanelHide();
                Ext.Viewport.unmask();
            }

        });



    });

    //  Ext.Viewport.unmask();

    //   setDashBoardMerchantReviewRate(FiveStar, FourStar, ThreeStar, TwoStar, OneStar);
    task.delay(500);
}






