Ext.define('BuskartApp.view.AyohaRewardMerchantDiscountLoyalty.FloatPanel_MerchantDiscountLoyaltyDescription', {

});




var is_FloatPanel_MerchantDiscountLoyaltyDescriptionOpen = "N";


var _FloatPanel_MerchantDiscountLoyaltyDescription;

function FloatPanel_MerchantDiscountLoyaltyDescription() {

    _FloatPanel_MerchantDiscountLoyaltyDescription = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_MerchantDiscountLoyaltyDescriptionID',
            name: 'clickableContainerFloatPanel_MerchantDiscountLoyaltyDescription',
            // xtype: 'panel',
           // zIndex: 550,
            zIndex: 400,
            xtype: 'container',
            height: '100%',
        width: '100%',
        modal: true,
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
                                is_FloatPanel_MerchantDiscountLoyaltyDescriptionOpen = 'N';
                                RemovePages("FloatPanel_MerchantDiscountLoyaltyDescriptionHide()");
                                _FloatPanel_MerchantDiscountLoyaltyDescription.hide(Ext.fx.Animation({
                                    type: 'slideOut',
                                    direction: 'left',
                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                            } if (e.direction == "right") {
                                is_FloatPanel_MerchantDiscountLoyaltyDescriptionOpen = 'N';
                                RemovePages("FloatPanel_MerchantDiscountLoyaltyDescriptionHide()");
                                _FloatPanel_MerchantDiscountLoyaltyDescription.hide(Ext.fx.Animation({
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
                id: 'ContainerFloatPanel_MerchantDiscountLoyaltyDescription',
                // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                name: 'clickableContainerFloatPanel_MerchantDiscountLoyaltyDescription',
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

                       id: 'containeFloatPanel_MerchantDiscountLoyaltyDescriptionHeader',
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
                                       width: 5
                                   },

                                         
                                             {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_MerchantDiscountLoyaltyDescriptionBack',
                                                height: 30,
                                                width: 35,
                                                margin:'5 0 0 10',
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    // FloatPanel_AyohaReward_TopTenRankingHide();
                                                    // FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                    is_FloatPanel_MerchantDiscountLoyaltyDescriptionOpen = 'N';
                                                    _FloatPanel_MerchantDiscountLoyaltyDescription.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                        // direction: 'left',
                                                        // easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    RemovePages("FloatPanel_MerchantDiscountLoyaltyDescriptionHide()");
                                                    //  FloatPanel_AyohaReward_TopTenRanking_AddCardHide();

                                                }
                                            },
                                              {
                                                 xtype: 'spacer',

                                             },

                                            {
                                                margin: '0 15 0 0',
                                                id: 'htmlFloatPanel_MerchantDiscountLoyaltyDescription_TitleHeaderTxt',
                                                html: '<font size=2 color=black><b>Membership Discount Campaign</b></font>'
                                            },
                                          

                                            //  {
                                            //      xtype: 'panel',
                                            //      width:5
                                            //  },
                                                   {
                                                       xtype: 'button',
                                                       id: 'btnFloatPanel_MerchantDiscountLoyaltyDescription_CardIcon',
                                                       height: 30,
                                                       hidden:true,
                                                       width: 35,
                                                       // iconCls: 'list',
                                                       html: '<div ><img src="resources/icons/contest01.png" width="25" height="20" alt="Company Name"></div>',
                                                       ui: 'plain',
                                                       handler: function () {

                                                           is_FloatPanel_MerchantDiscountLoyaltyDescriptionOpen = 'N';

                                                           _FloatPanel_MerchantDiscountLoyaltyDescription.hide(Ext.fx.Animation({
                                                               type: 'slideOut',
                                                               direction: 'right',
                                                               easing: 'cubic-bezier(.7,0,.7,1)',
                                                               duration: 250

                                                           }));
                                                           RemovePages("FloatPanel_MerchantDiscountLoyaltyDescriptionHide()");
                                                           //FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                       }
                                                   },









                              ]

                   },


                       {
                           xtype: 'container',
                           id: 'ContainerFloatPanel_MerchantDiscountLoyaltyDescription',
                           // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                           // name: 'clickableContainerFloatPanel_MerchantDiscountLoyaltyDescription',
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
                                   id: 'ContainerFloatPanel_MerchantDiscountLoyaltyDescriptionName',
                                   // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                   // name: 'clickableContainerFloatPanel_MerchantDiscountLoyaltyDescription',
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
                                            id: 'htmlFloatPanel_MerchantDiscountLoyaltyDescriptionDiscountName',
                                            html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">Welcome Voucher</div>'
                                            // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                        },
                                   ]
                               },
                               {
                                   xtype: 'container',
                                   id: 'ContainerFloatPanel_MerchantDiscountLoyaltyDescriptionImage',
                                   // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                   // name: 'clickableContainerFloatPanel_MerchantDiscountLoyaltyDescription',
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
                                            id: 'htmlPanel_MerchantDiscountLoyaltyDescriptionImage',                                            
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
                                   id: 'ContainerFloatPanel_MerchantDiscountLoyaltyDescriptionDetailHeader',
                                   // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                   // name: 'clickableContainerFloatPanel_MerchantDiscountLoyaltyDescription',
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
               html: '<textarea id="input-FloatPanel_MerchantDiscountLoyaltyDescriptionDetailTextArea"  readOnly style="border: 1px none white;color:black;text-align: left;font-size:12px;background-color: transparent;width:100%;height:612px;" wrap="hard">'
           },

                           ]
                       },



                         



                ]

            },






        });

    return _FloatPanel_MerchantDiscountLoyaltyDescription;
}



//function FloatPanel_MerchantDiscountLoyaltyDescriptionShow(VoucherName, VoucherImage, VoucherEndDate, VoucherDayLeft, VoucherCode, VoucherAmount)
function FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo)  
{
    Ext.Viewport.remove(_FloatPanel_MerchantDiscountLoyaltyDescription);
    this.overlay = Ext.Viewport.add(FloatPanel_MerchantDiscountLoyaltyDescription());
    this.overlay.show();
    AddRoutePages("FloatPanel_MerchantDiscountLoyaltyDescriptionHide()");
    is_FloatPanel_MerchantDiscountLoyaltyDescriptionOpen = 'Y';
    FloatPanel_MerchantDiscountLoyaltyDescription_DiscountCampaingLoadByDiscountCode(CampaignCode,EnterpriseAccNo);
//     Ext.getCmp('htmlPanel_AyohaRewardVoucherDetailVoucherName').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">' + VoucherName + '</div>');
//    // Ext.getCmp('htmlPanel_AyohaRewardVoucherDetailVoucherImage').setHtml('<div style="width:100%; height: 220px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="' + VoucherImage + '" style="width:100%; height: 180px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;">Valid Until:' + VoucherEndDate + '</div><br><div style="margin:-26px 0px 0px 0px;text-align:left;color:#c800ffc9;font-family: Arial; font-size:10px;word-wrap: break-word;font-weight:bold;">Day Left:' + VoucherDayLeft + '</div></div>');
//     Ext.getCmp('htmlPanel_AyohaRewardVoucherDetailVoucherImage').setHtml('<div style="width:100%; height: 220px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="' + VoucherImage + '" style="width:100%; height: 180px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>' + VoucherEndDate + '</b></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM' + VoucherAmount + '</b></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-3px 0px 0px 0px">Day Left:' + VoucherDayLeft + '</div></td></tr></tbody></table></div></div>');

//     if (isFloatPanel_AyohaReward_MerchantReward_VoucherListUsedOpen == "Y") {
//         VoucherTermAndCondition = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoPaymentNoEntitledVoucherStatusStore.findRecord('VoucherCode', VoucherCode, 0, false, false, true);


//         document.getElementById('input-FloatPanel_MerchantDiscountLoyaltyDescriptionVoucherDetailTextArea').value = VoucherTermAndCondition.get('VoucherTermAndCondition');
//         return;
//     }


//     if (is_FloatPanel_DashboardMerchantRewardHide == "Y") {
//         VoucherTermAndCondition = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.findRecord('VoucherCode', VoucherCode, 0, false, false, true);


//         document.getElementById('input-FloatPanel_MerchantDiscountLoyaltyDescriptionVoucherDetailTextArea').value = VoucherTermAndCondition.get('VoucherTermAndCondition');
//         return;
//     }

    
//     VoucherTermAndCondition = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore.findRecord('VoucherCode', VoucherCode, 0, false, false, true);
   

//     document.getElementById('input-FloatPanel_MerchantDiscountLoyaltyDescriptionVoucherDetailTextArea').value = VoucherTermAndCondition.get('VoucherTermAndCondition');



}


function FloatPanel_MerchantDiscountLoyaltyDescriptionHide() {

    if (is_FloatPanel_MerchantDiscountLoyaltyDescriptionOpen == 'Y') {
        _FloatPanel_MerchantDiscountLoyaltyDescription.hide();
        is_FloatPanel_MerchantDiscountLoyaltyDescriptionOpen = 'N';
        RemovePages("FloatPanel_MerchantDiscountLoyaltyDescriptionHide()");
        // swalFireSuccessStampedCardMsg("Stamped Success!!");
    }

}

function FloatPanel_MerchantDiscountLoyaltyDescription_DiscountCampaingLoadByDiscountCode(DiscountCode,EnterpriseAccNo){
    // var task = Ext.create('Ext.util.DelayedTask', function () {
    // });
   // task.delay(10);
        var objn = {
            "DiscountCode": DiscountCode,
            "EnterpriseAccNo": EnterpriseAccNo,           
        };
       // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            //url:GetAPIurl() + '/CRMOBILEAPI/DiscountCampaing/DiscountCampaingLoadByDiscountCode',
            url: GetAPIurl() + '/DiscountCampaing/DiscountCampaingLoadByDiscountCode',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    if (data.total > 0) {
                        DiscountName = data.results[0].DiscountName;
                        DiscountImgPath = data.results[0].DiscountImgPath;
                        DiscountPercent = data.results[0].DiscountPercent;
                        DiscountTermAndCondition = data.results[0].DiscountTermAndCondition;
                        isRequireDiscountEndDate = data.results[0].isRequireDiscountEndDate;
                        DiscountEndDate = data.results[0].DiscountEndDate;
                        DiscountType = data.results[0].DiscountType;

                        if(isRequireDiscountEndDate=="No"){
                            DiscountEndDate="Valid Life Time";
                        }



                        Ext.getCmp('htmlPanel_MerchantDiscountLoyaltyDescriptionImage').setHtml('<div style="width:100%; height: 220px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="'+DiscountImgPath+'" style="width:100%; height: 180px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>'+DiscountEndDate+'</b></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Discount Entitled:<b>'+DiscountPercent+'%</b></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:0px 0px 0px 0px;display:none;">is Required end Date?:'+isRequireDiscountEndDate+'</div></td></tr></tbody></table></div></div>'); 
                        Ext.getCmp('htmlFloatPanel_MerchantDiscountLoyaltyDescriptionDiscountName').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">'+DiscountName+'</div>');
                        document.getElementById('input-FloatPanel_MerchantDiscountLoyaltyDescriptionDetailTextArea').value = DiscountTermAndCondition;
                    }
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
                swalFireFail("Fail!." + result.responseText.trim());
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });
        LoadingPanelHide();
        Ext.Viewport.unmask();
   
}



