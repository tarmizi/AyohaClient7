Ext.define('BuskartApp.view.Dashboard.FloatPanel_DashboardMerchantReward_UploadedReceipt', {

});




var is_FloatPanel_DashboardMerchantReward_UploadedReceiptOpen = "N";


var _FloatPanel_DashboardMerchantReward_UploadedReceipt;

function FloatPanel_DashboardMerchantReward_UploadedReceipt() {

    _FloatPanel_DashboardMerchantReward_UploadedReceipt = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_DashboardMerchantReward_UploadedReceiptID',
            name: 'clickableContainerFloatPanel_DashboardMerchantReward_UploadedReceipt',
            // xtype: 'panel',
            zIndex: 170,
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
                                is_FloatPanel_DashboardMerchantReward_UploadedReceiptOpen = 'N';
                                RemovePages("FloatPanel_DashboardMerchantReward_UploadedReceiptHide()");
                                _FloatPanel_DashboardMerchantReward_UploadedReceipt.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'left',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                            } if (e.direction == "right") {
                                is_FloatPanel_DashboardMerchantReward_UploadedReceiptOpen = 'N';
                                RemovePages("FloatPanel_DashboardMerchantReward_UploadedReceiptHide()");
                                _FloatPanel_DashboardMerchantReward_UploadedReceipt.hide(Ext.fx.Animation({
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
                id: 'ContainerFloatPanel_DashboardMerchantReward_UploadedReceipt',
                // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                name: 'clickableContainerFloatPanel_DashboardMerchantReward_UploadedReceipt',
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

                       id: 'containeFloatPanel_DashboardMerchantReward_UploadedReceiptHeader',
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
                                                id: 'btnFloatPanel_DashboardMerchantReward_UploadedReceiptBack',
                                                height: 30,
                                                width: 35,
                                                margin: '5 0 0 0',
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    // FloatPanel_AyohaReward_TopTenRankingHide();
                                                    // FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                    is_FloatPanel_DashboardMerchantReward_UploadedReceiptOpen = 'N';
                                                    _FloatPanel_DashboardMerchantReward_UploadedReceipt.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'left',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    RemovePages("FloatPanel_DashboardMerchantReward_UploadedReceiptHide()");
                                                    //  FloatPanel_AyohaReward_TopTenRanking_AddCardHide();

                                                }
                                            },

                                             {
                                                 xtype: 'spacer',

                                             },


                                             {
                                                 margin: '0 0 0 0',
                                                 id: 'htmlFloatPanel_DashboardMerchantReward_UploadedReceipt_TitleHeaderTxt',
                                                 html: '<font size=2 color=black><b>Uploaded Receipt</b></font>'
                                             },

                                             {
                                                 xtype: 'panel',
                                                 width: 10
                                             },
                                                   {
                                                       xtype: 'button',
                                                       id: 'btnFloatPanel_DashboardMerchantReward_UploadedReceipt_CardIcon',
                                                       height: 30,
                                                       hidden: true,
                                                       width: 35,
                                                       // iconCls: 'list',
                                                       html: '<div ><img src="resources/icons/contest01.png" width="25" height="20" alt="Company Name"></div>',
                                                       ui: 'plain',
                                                       handler: function () {

                                                           is_FloatPanel_DashboardMerchantReward_UploadedReceiptOpen = 'N';

                                                           _FloatPanel_DashboardMerchantReward_UploadedReceipt.hide(Ext.fx.Animation({
                                                               type: 'slideOut',
                                                               direction: 'right',
                                                               easing: 'cubic-bezier(.7,0,.7,1)',
                                                               duration: 250

                                                           }));
                                                           RemovePages(_FloatPanel_DashboardMerchantReward_UploadedReceipt, "is_FloatPanel_DashboardMerchantReward_UploadedReceiptOpen");
                                                           //FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                       }
                                                   },









                              ]

                   },


                       {
                           xtype: 'container',
                           id: 'ContainerFloatPanel_DashboardMerchantReward_UploadedReceipt_Out',
                           // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                           // name: 'clickableContainerFloatPanel_DashboardMerchantReward_UploadedReceipt',
                           style: ' background-color:transparent;',
                           layout: {
                               type: 'vbox',
                               pack: 'start',
                               align: 'center'
                           },
                           width: '100%',
                           height: '100%',
                           indicators: false,
                           scrollable: {
                              directionLock: true,
                              indicators: false
                           },
                           items: [

                               {
                                   xtype: 'container',
                                   id: 'ContainerFloatPanel_DashboardMerchantReward_UploadedReceiptImage',
                                //   style: ' background-color:transparent;',
                                   style: 'border-top:2px line purple;border-left:2px line purple;border-right:2px line purple;border-bottom:2px line purple',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'left',
                                       align: 'left'
                                   },
                                   width: '94%',
                                  // height: 700,
                                   items: [
                                        {
                                            xtype: 'pinchzoomimage',
                                            src: 'resources/icons/selfieIcon.png',
                                            width: '100%',
                                            height: 600,
                                            indicators: false,
                                            id: 'htmlFloatPanel_DashboardMerchantReward_UploadedReceiptImage',
                                        },
                                        //  {
                                        //      id: 'HtmlFloatPanel_DashboardMerchantReward_UploadedReceipt_FileUpload',
                                        //      hidden: true,
                                        //      margin: '10 0 0 0',
                                        //      width: '100%',
                                        //      html: '<input type="file" id="input-FloatPanel_DashboardMerchantReward_UploadedReceipt_FileUpload" accept="image/*"  onchange="FloatPanel_DashboardMerchantReward_UploadedReceipt_FileUpload_ImgProcess()"   style="border-color:#53A5F8;color:black;width:268px;text-align: left;font-size:15px;">'

                                        //      //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                                        //  },




                                      
                                   ]
                               },

                            




                         
                          
                           ]
                       },



                          


                ]

            },






        });

    return _FloatPanel_DashboardMerchantReward_UploadedReceipt;
}















//function FloatPanel_DashboardMerchantReward_UploadedReceiptShow(VoucherName, VoucherImage, VoucherEndDate, VoucherDayLeft, VoucherCode, VoucherAmount) {
function FloatPanel_DashboardMerchantReward_UploadedReceiptShow() {
    Ext.Viewport.remove(_FloatPanel_DashboardMerchantReward_UploadedReceipt);
    this.overlay = Ext.Viewport.add(FloatPanel_DashboardMerchantReward_UploadedReceipt());
    this.overlay.show();
    AddRoutePages("FloatPanel_DashboardMerchantReward_UploadedReceiptHide()");
    if (isFloatPanel_MembershipCardList_UpgradeOpen=="Y"){
        
        
        Ext.getCmp('FloatPanel_DashboardMerchantReward_UploadedReceiptID').setZIndex(337);
    }
    is_FloatPanel_DashboardMerchantReward_UploadedReceiptOpen = 'Y';
    var _innerHeight = parseInt(window.innerHeight) - 90;
   // alert(globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage)
    Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_UploadedReceiptImage').setHeight(_innerHeight);
    Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_UploadedReceiptImage').setHeight(_innerHeight);
   // Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_UploadedReceiptImage').setSrc(globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage);
    Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_UploadedReceiptImage').setSrc(globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage);
    
    
}





function FloatPanel_DashboardMerchantReward_UploadedReceiptHide() {

    if (is_FloatPanel_DashboardMerchantReward_UploadedReceiptOpen == 'Y') {
        _FloatPanel_DashboardMerchantReward_UploadedReceipt.hide();
        is_FloatPanel_DashboardMerchantReward_UploadedReceiptOpen = 'N';
        RemovePages("FloatPanel_DashboardMerchantReward_UploadedReceiptHide()");
        // swalFireSuccessStampedCardMsg("Stamped Success!!");
    }

}


