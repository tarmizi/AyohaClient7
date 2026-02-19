Ext.define('BuskartApp.view.AyohaRewardMerchantDiscountLoyalty.FloatPanel_MerchantDiscountLoyaltyDescription', {

});




var is_FloatPanel_MerchantDiscountLoyaltyDescriptionOpen = "N";


var _FloatPanel_MerchantDiscountLoyaltyDescription=null;

function FloatPanel_MerchantDiscountLoyaltyDescriptionCreateIfNeeded() {
    if (_FloatPanel_MerchantDiscountLoyaltyDescription && !_FloatPanel_MerchantDiscountLoyaltyDescription.destroyed) return;
    _FloatPanel_MerchantDiscountLoyaltyDescription = Ext.create('Ext.Container',


    {
        id: 'FloatPanel_MerchantDiscountLoyaltyDescriptionID',
        name: 'clickableContainerFloatPanel_MerchantDiscountLoyaltyDescription',
        zIndex: 65,
        floated: true,
        centered: true,
        fullscreen: true,
        closeAction: 'hide',
      // closeAction: 'destroy',
        draggable: false,
        modal: false,
        styleHtmlContent: true,
        layout: 'fit',
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
        style: ' background-color:white;',    
        // listeners: {
        //     hide: function(cmp){
        //       Ext.Viewport.remove(cmp, true); // true = destroy
        //       _FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm = null;
        //     }
        //  } ,      
        listeners: {
 

            // ✅ kalau user tap mask, close macam standard
            beforehide: function () {
              // kalau hide dipanggil bukan dari function kita, block dulu
              // (optional: boleh allow kalau kau nak)
              return true;
            }
          },
        

          items: [


            {

                xtype: 'container',
                width: '100%',
                docked: 'top',
                id: 'containeFloatPanel_MerchantDiscountLoyaltyDescriptionHeader',
                height: ayoha_HeaderHeight(),
                   style:ayohaThemeColor_Header(),
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
                                         id: 'btnFloatPanel_MerchantDiscountLoyaltyDescriptionBack',
                                         height: 30,
                                         width: 65,
                                         margin: '0 0 0 10',
                                            // iconCls: 'list',
                                            html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                            FloatPanel_MerchantDiscountLoyaltyDescriptionHide(false);

                                         }
                                     },
                                       {
                                          xtype: 'spacer',

                                      },

                                     {
                                         margin: '0 15 0 0',
                                         id: 'htmlFloatPanel_MerchantDiscountLoyaltyDescription_TitleHeaderTxt',
                                        //html: '<font size=2 color=black><b>Membership Discount Campaign</b></font>'
                                         html:ayohaTheme_HeaderText('Membership Discount Campaign'),
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
                            height: 330,
                            items: [
                                //{
                                //    xtype: 'spacer',
                                //    width:25
                                //},
                                 {
                                     margin: '0 0 0 0',
                                     width: '100%',
                                     height: 330,
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








        // items: {
        //     ////zIndex: 40,
        //     xtype: 'container',
        //     id: 'ContainerFloatPanel_MerchantDiscountLoyaltyDescription',
        //     // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
        //     name: 'clickableContainerFloatPanel_MerchantDiscountLoyaltyDescription',
        //     style: ' background-color:transparent;',
        //     layout: {
        //         type: 'vbox',
        //         pack: 'start',
        //         align: 'center'
        //     },
        //     width: '100%',
        //     height: '100%',
        //     //  margin:'-10 0 0 -7',
           

        // },






    });

}






// function FloatPanel_MerchantDiscountLoyaltyDescription() {

   

//     return _FloatPanel_MerchantDiscountLoyaltyDescription;
// }



//function FloatPanel_MerchantDiscountLoyaltyDescriptionShow(VoucherName, VoucherImage, VoucherEndDate, VoucherDayLeft, VoucherCode, VoucherAmount)
function FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo)  
{
    // Ext.Viewport.remove(_FloatPanel_MerchantDiscountLoyaltyDescription);
    // this.overlay = Ext.Viewport.add(FloatPanel_MerchantDiscountLoyaltyDescription());
    // this.overlay.show();
    // AddRoutePages("FloatPanel_MerchantDiscountLoyaltyDescriptionHide()");




    FloatPanel_MerchantDiscountLoyaltyDescriptionCreateIfNeeded();


    _FloatPanel_MerchantDiscountLoyaltyDescription.show();
    // ✅ push browser back (ikut style kau)
    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
      AyohaBrowserBack.push('FloatPanel_MerchantDiscountLoyaltyDescription', function () {
     
         FloatPanel_DashboardMerchantReward_MembershipEventDetailHide(true);
      });
    }
 







    is_FloatPanel_MerchantDiscountLoyaltyDescriptionOpen = 'Y';
    FloatPanel_MerchantDiscountLoyaltyDescription_DiscountCampaingLoadByDiscountCode(CampaignCode,EnterpriseAccNo);



}


function FloatPanel_MerchantDiscountLoyaltyDescriptionHide(fromBack,animCfg) {

    // if (is_FloatPanel_MerchantDiscountLoyaltyDescriptionOpen == 'Y') {
    //     _FloatPanel_MerchantDiscountLoyaltyDescription.hide();
    //     is_FloatPanel_MerchantDiscountLoyaltyDescriptionOpen = 'N';
    //     RemovePages("FloatPanel_MerchantDiscountLoyaltyDescriptionHide()");
    //     // swalFireSuccessStampedCardMsg("Stamped Success!!");
    // }





    
    if (is_FloatPanel_MerchantDiscountLoyaltyDescriptionOpen == 'Y') {
       
      

        if (animCfg) {
            _FloatPanel_MerchantDiscountLoyaltyDescription.hide(Ext.fx.Animation(animCfg));
          } else {
            _FloatPanel_MerchantDiscountLoyaltyDescription.hide();
          }
          is_FloatPanel_MerchantDiscountLoyaltyDescriptionOpen = 'N';
         
        
          // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
          if (fromBack !== true) {
            AyohaBrowserBack.close('FloatPanel_MerchantDiscountLoyaltyDescription');
          }
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

            // type: "POST",

            // //url:GetAPIurl() + '/CRMOBILEAPI/DiscountCampaing/DiscountCampaingLoadByDiscountCode',
            // url: GetAPIurl() + '/DiscountCampaing/DiscountCampaingLoadByDiscountCode',

            // dataType: "json",
            // data: JSON.stringify(objn),
            // headers: {
            //     "Content-Type": "application/json; charset=utf-8"
            // },




            url: GetAPIurl() + '/DiscountCampaing/DiscountCampaingLoadByDiscountCode',
            method: 'POST',                 // ✅ betul
            jsonData: objn,                 // ✅ auto encode JSON + set body
            headers: {
              'Content-Type': 'application/json; charset=utf-8'
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



                        Ext.getCmp('htmlPanel_MerchantDiscountLoyaltyDescriptionImage').setHtml('<div style="width:100%; height: 320px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="'+DiscountImgPath+'" style="width:100%; height: 280px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>'+DiscountEndDate+'</b></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Discount Entitled:<b>'+DiscountPercent+'%</b></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:0px 0px 0px 0px;display:none;">is Required end Date?:'+isRequireDiscountEndDate+'</div></td></tr></tbody></table></div></div>'); 
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



