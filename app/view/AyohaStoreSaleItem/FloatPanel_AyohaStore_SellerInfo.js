Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_SellerInfo', {

});




var is_FloatPanel_AyohaStore_SellerInfoOpen = "N";


var _FloatPanel_AyohaStore_SellerInfo;

function FloatPanel_AyohaStore_SellerInfo() {

    _FloatPanel_AyohaStore_SellerInfo = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_AyohaStore_SellerInfoID',
            name: 'clickableContainerFloatPanel_AyohaStore_SellerInfo',
            // xtype: 'panel',
            zIndex: 550,
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
                                is_FloatPanel_AyohaStore_SellerInfoOpen = 'N';
                                RemovePages("FloatPanel_AyohaStore_SellerInfoHide()");
                                _FloatPanel_AyohaStore_SellerInfo.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'left',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                            } if (e.direction == "right") {
                                is_FloatPanel_AyohaStore_SellerInfoOpen = 'N';
                                RemovePages("FloatPanel_AyohaStore_SellerInfoHide()");
                                _FloatPanel_AyohaStore_SellerInfo.hide(Ext.fx.Animation({
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
                id: 'ContainerFloatPanel_AyohaStore_SellerInfo',
                // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                name: 'clickableContainerFloatPanel_AyohaStore_SellerInfo',
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

                       id: 'containeFloatPanel_AyohaStore_SellerInfoHeader',
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
                                                id: 'btnFloatPanel_AyohaStore_SellerInfoBack',
                                                height: 30,
                                                width: 35,
                                                margin: '5 0 0 10',
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    // FloatPanel_AyohaReward_TopTenRankingHide();
                                                    // FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                    is_FloatPanel_AyohaStore_SellerInfoOpen = 'N';
                                                    _FloatPanel_AyohaStore_SellerInfo.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'left',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    RemovePages("FloatPanel_AyohaStore_SellerInfoHide()");
                                                    //  FloatPanel_AyohaReward_TopTenRanking_AddCardHide();

                                                }
                                            },

                                             {
                                                 xtype: 'spacer',

                                             },


                                             {
                                                 margin: '0 15 0 0',
                                                 id: 'htmlFloatPanel_AyohaStore_SellerInfo_TitleHeaderTxt',
                                                 html: '<font size=2 color=black><b>Seller Detail Info</b></font>'
                                             },

                                             {
                                                 xtype: 'panel',
                                                 width: 10
                                             },
                                                   



                              ]

                   },


                       {
                           xtype: 'container',
                           id: 'ContainerFloatPanel_AyohaStore_SellerInfo',
                           // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                           // name: 'clickableContainerFloatPanel_AyohaStore_SellerInfo',
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
                                   id: 'ContainerFloatPanel_AyohaStore_SellerInfoVoucherImage',
                                   // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                   // name: 'clickableContainerFloatPanel_AyohaStore_SellerInfo',
                                   style: ' background-color:transparent;',
                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center'
                                   },
                                   width: '100%',
                                   height: 150,
                                   items: [
                                       //{
                                       //    xtype: 'spacer',
                                       //    width:25
                                       //},
                                        {
                                            margin: '0 0 0 0',
                                            width: '100%',
                                            height: 150,
                                            id: 'htmlPanel_AyohaRewardVoucherDetailVoucherImage',
                                            //html: '<div style="width:100%; height: 220px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="null" style="width:100%; height: 180px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;">Valid Until:{EntitledVoucherEndDate}</div><br><div style="margin:-26px 0px 0px 0px;text-align:left;color:#c800ffc9;font-family: Arial; font-size:10px;word-wrap: break-word;font-weight:bold;">Day Left:{DayLeft}</div></div>'
                                            html: '<div style="width:100%; height: 180px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;text-align:center;"><img src="resources/icons/farehaGoldAgent.png" style="width:40%; height: 150px;border-radius:50%;"/></div>',


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
                                   id: 'ContainerFloatPanel_AyohaStore_SellerInfoVoucherDetailHeader',
                                   // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                   // name: 'clickableContainerFloatPanel_AyohaStore_SellerInfo',
                                   style: ' background-color:transparent;',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'start',
                                       align: 'center'
                                   },
                                   width: '100%',
                                   height: 20,
                                   items: [
                                       //{
                                       //    xtype: 'spacer',
                                       //    width:25
                                       //},
                                        {
                                            margin: '0 0 0 0',
                                            //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                            html: '<div style="color:black;text-align: center;font-size:14px;width:100%;font-weight:bold">Community Coffes Sdn Bhd</div>'
                                            // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                        },
                                   ]
                               },


          

                           ]
                       },



                          {

                              xtype: 'container',
                              width: '100%',
                              docked: 'bottom',
                              hidden: true,
                              // width: 40,

                              //  title: '<font size="3" color="white">Live Tracking Map</font>',
                              //hidden: true,

                              id: 'containeFloatPanel_AyohaStore_SellerInfoReedemVoucerBottom',
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
                                             name: 'containeFloatPanel_AyohaStore_SellerInfoRedeemVoucher',
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
                                                     html: '<div class="blink_me" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 20px 20px 20px 20px;border:2px solid #fac;text-align:center;margin:0px 0px 0px 0px;height:40px;width:200px"><div style="color:white;text-align: center;font-size:14px;width:100%;margin:8px 0px 0px 0px;"><b>Redeem Voucher</b></div></div>'

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

    return _FloatPanel_AyohaStore_SellerInfo;
}



function FloatPanel_AyohaStore_SellerInfoShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaStore_SellerInfo);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_SellerInfo());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_SellerInfoHide()");
    is_FloatPanel_AyohaStore_SellerInfoOpen = 'Y';




}


function FloatPanel_AyohaStore_SellerInfoHide() {

    if (is_FloatPanel_AyohaStore_SellerInfoOpen == 'Y') {
        _FloatPanel_AyohaStore_SellerInfo.hide();
        is_FloatPanel_AyohaStore_SellerInfoOpen = 'N';
        RemovePages("FloatPanel_AyohaStore_SellerInfoHide()");
        // swalFireSuccessStampedCardMsg("Stamped Success!!");
    }

}


