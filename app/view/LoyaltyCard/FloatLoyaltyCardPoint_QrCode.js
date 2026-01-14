Ext.define('BuskartApp.view.LoyaltyCard.FloatLoyaltyCardPoint_QrCode', {

});







var _FloatLoyaltyCardPoint_QrCode;

function FloatLoyaltyCardPoint_QrCode() {

    _FloatLoyaltyCardPoint_QrCode = Ext.create('Ext.Panel',


        {
            id: 'FloatLoyaltyCardPoint_QrCodeID',
            xtype: 'panel',
            zIndex: 450,
            xtype: 'container',
            //height: 475,
            height: 415,
            //  height: '60%',
            width: '95%',
            draggable: false,

            styleHtmlContent: true,

            centered: true,
            //bottom: 64,
            // zIndex: 100,
            modal: true,
            hideOnMaskTap: false,
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
            },

            style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',


            items: {
                //zIndex: 40,
                xtype: 'container',
                style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
                items: [


                  {

                      xtype: 'container',
                      width: '100%',
                      // width: 40,

                      //  title: '<font size="3" color="white">Live Tracking Map</font>',
                      //hidden: true,

                      id: 'containerFloatLoyaltyCardPoint_QrCodeHeader',
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
                                               id: 'btnFloatLoyaltyCardPoint_QrCodeBack',
                                               height: 30,
                                               width: 35,
                                               // iconCls: 'list',
                                               html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                               ui: 'plain',
                                               handler: function () {


                                                   _FloatLoyaltyCardPoint_QrCode.hide(Ext.fx.Animation({
                                                       type: 'slideOut',
                                                       direction: 'left',
                                                       easing: 'cubic-bezier(.7,0,.7,1)',
                                                       duration: 250

                                                   }));
                                                   StopCheckStampedStatusInterval();
                                                   RemovePages("FloatLoyaltyCardPoint_QrCodeHide()");
                                                   // CheckStampedStatusIntervalCount = 0;

                                               }
                                           },

                                            {
                                                xtype: 'spacer',

                                            },


                                        {
                                            margin: '0 0 0 0',
                                            id: 'htmFloatPanel_AyohaCardManagement_PreviewCard_TitleHeaderTxt',
                                            html: '<font size=2 color=white><b>Point Loyalty Card QR Code</b></font>'
                                        },











                             ]

                  },

                      {
                          xtype: 'container',
                          id: 'containerFloatLoyaltyCardPoint_QrCodeLoading',
                          width: '100%',
                          height: 360,
                          //hidden:true,
                          // style: "background-color: transparent",
                          //style: "background-color: #F35B57;",
                          style: 'background-image: url("resources/icons/previewcardloadinglatest.gif"); background-size: 80% 80%;',
                          layout: {
                              type: 'vbox',
                              pack: 'center',
                              align: 'center'

                          },

                      },

                     {

                         hidden: true,
                         margin: '0 0 0 0',
                         //  margin: '-100 0 0 20',
                         width: '100%',
                         height: 360,
                         // height: '100%',

                         id: 'htmlFloatLoyaltyCardPoint_QrCode',
                         html: '<div id="myhtmlFloatLoyaltyCardPoint_QrCode"  style="width: 100%; height: 100%; border:1px none white;" />',
                     },

                          {
                              margin: '0 0 0 0',
                              //  hidden: true,
                              id: 'FloatLoyaltyCardPoint_QrCode_MsgTxt',
                              // html: '<div ><font size=2 color=white><b>*Show This Qr Code to Merchendiser and get card stamped!.</b></font></div>'
                              html: '<div style="width:100%;color:white;vertical-align: middle; text-align:center;font-size: 12px;">*Show This Qr Code to Merchendiser and Earn Point!!.</div>',
                          },
                           {
                               margin: '-5 0 0 0',
                               hidden: true,
                               id: 'FloatLoyaltyCardPoint_QrCode_CountClose',
                               html: '<font size=6 color=white><b>0</b></font>'
                           },
                           {
                               xtype: 'button',
                               //  align: 'stretch',
                               id: 'TestScan',
                               ui: 'plain',
                               width: '100%',
                               hidden: true,
                               height: 50,
                               margin: '-5 0 0 0',
                               // width: '80%',
                               //style: {
                               //    background: '#FA8072',
                               //},
                               // padding: '10px',
                               //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
                               text: '<button class="button3">Test Scan</button>',

                               handler: function () {
                                   Scan_QRCode_StampCard();
                                   //FloatPanel_AyohaCardManagement_StampSuccesAnimationShow();
                                   //FloatLoyaltyCardPoint_QrCodeHide();
                                   //    Swal.fire({

                                   //        width: 0,
                                   //        padding: 0,
                                   //        title: 'Congrulation!',
                                   //        backdrop:'rgba(0,0,123,0.4) url("https://sweetalert2.github.io/images/nyan-cat.gif") center top no-repeat'

                                   //})


                               },


                           },
                ]

            },






        });

    return _FloatLoyaltyCardPoint_QrCode;
}



function FloatLoyaltyCardPoint_QrCodeShow() {
    Ext.Viewport.remove(_FloatLoyaltyCardPoint_QrCode);
    this.overlay = Ext.Viewport.add(FloatLoyaltyCardPoint_QrCode());
    this.overlay.show();
    is_FloatLoyaltyCardPoint_QrCodeHide = 'Y';
    //Load_FloatLoyaltyCardPoint_QrCode_TemporaryStampQrCodeGenerateTempQrCodeStore();
    var val = GetCurrAyohaUserAccountNo();
    FloatLoyaltyCardPoint_QrCode_CreateQrCode(val);
    AddRoutePages("FloatLoyaltyCardPoint_QrCodeHide()");

}
var is_FloatLoyaltyCardPoint_QrCodeHide = 'N';

function FloatLoyaltyCardPoint_QrCodeHide() {
    StopCheckStampedStatusInterval();
    if (is_FloatLoyaltyCardPoint_QrCodeHide == 'Y') {
        _FloatLoyaltyCardPoint_QrCode.hide();
        is_FloatLoyaltyCardPoint_QrCodeHide = 'N';
        RemovePages("FloatLoyaltyCardPoint_QrCodeHide()");
    }

}


function Load_FloatLoyaltyCardPoint_QrCode_TemporaryStampQrCodeGenerateTempQrCodeStore() {


    console.log(GetCurrStampCampaignCode());
    console.log(GetEnterpriseHQAccNo());
    console.log(GetCurrAyohaUserAccountNo());
    Ext.getStore('TemporaryStampQrCodeGenerateTempQrCodeStore').getProxy().setExtraParams({
        StampCampaignCode: GetCurrStampCampaignCode(),
        EnterpriseAccNo: GetEnterpriseHQAccNo(),
        SubscriberAccNo: GetCurrAyohaUserAccountNo()
    });

    Ext.StoreMgr.get('TemporaryStampQrCodeGenerateTempQrCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('TemporaryStampQrCodeGenerateTempQrCodeStore').getProxy().setExtraParams({
            StampCampaignCode: GetCurrStampCampaignCode(),
            EnterpriseAccNo: GetEnterpriseHQAccNo(),
            SubscriberAccNo: GetCurrAyohaUserAccountNo()
        });

        Ext.StoreMgr.get('TemporaryStampQrCodeGenerateTempQrCodeStore').load();
        var myStore = Ext.getStore('TemporaryStampQrCodeGenerateTempQrCodeStore');
        count = myStore.getCount();


        if (count >= 1) {
            var modelRecord = myStore.getAt(0);
            var TempStampQrCode = modelRecord.get('TempStampQrCode');
            FloatLoyaltyCardPoint_QrCode_CreateQrCode(TempStampQrCode);



        } else {

        }
    });
    task.delay(1000);
}






function FloatLoyaltyCardPoint_QrCode_CreateQrCode(TmpQrCodeTxt) {
    //var billIDs = (getUrlParameter('BillID')); // "1234"
    //var templatecodes = (getUrlParameter('TemplateCode')); // "edit"
    //   var srcUrl = 'https://www.isms.com.my/isms_send.php?un=BuskartApp&pwd=P@55w0rd&dstno=' + PhoneNo + '&msg=' + message + '.&type=1&sendid=12345';
    // var canvas = document.getElementById("qrcodeCanvas");


    localStorage.setItem('CurrStampCardQrCode', TmpQrCodeTxt);
    Ext.getCmp('FloatLoyaltyCardPoint_QrCode_CountClose').setHidden(true);
    Ext.getCmp('FloatLoyaltyCardPoint_QrCode_CountClose').setHtml('<font size=3 color=white><b>' + TmpQrCodeTxt + '</b></font>')






    //jQuery('#qrcodeCanvas').qrcode({
    //    //text: "http://42.1.63.57/PrintLink/?BillID=' + billIDs + '&TemplateCode=' + templatecodes + '"
    //    //text: 'http://42.1.63.57/PrintLink/?BillID=' + 1 + '&TemplateCode=' + 1
    //    text: TmpQrCodeTxt
    //});
    //can = document.getElementsByTagName("canvas");
    //src = can[0].toDataURL("image/png");



    //$('#qrcodeCanvas').qrcode({
    //    text: TmpQrCodeTxt
    //});

    //var sourceCanvas = $("#qrcodeCanvas Canvas")[0];
    //var encodedImageData = sourceCanvas.toDataURL(),
    //// encodedImageDatas = sourceCanvas.toDataURL("image/png"),
    //image = new Image();
    //image.src = encodedImageData;


    var x = screen.width;
    var xx = x - 28;
    qrcode = new QRCode(document.getElementById("myhtmlFloatLoyaltyCardPoint_QrCode"), {
        //width: 330,
        width: xx,
        height: 360
    });

    //var qrcode = new QRCode(document.getElementById("myQRCodeImg"));


    qrcode.clear();

    qrcode.makeCode(TmpQrCodeTxt);

    //alert(TmpQrCodeTxt);
    //  document.getElementById("myQRCodeImg").src = encodedImageData;
    Ext.getCmp('htmlFloatLoyaltyCardPoint_QrCode').setHidden(false);


    // console.log(encodedImageData);
    // Ext.getCmp('htmlFloatLoyaltyCardPoint_QrCode').setHtml('<img src="' + encodedImageData + '" style="width: 100%; height: 355px; border:1px solid white;" />');


    Ext.getCmp('containerFloatLoyaltyCardPoint_QrCodeLoading').setHidden(true);

    Ext.getCmp('FloatLoyaltyCardPoint_QrCode_MsgTxt').setHidden(false);





    //Timer_CheckStampedStatus();


}





//function makeCode() {
//    var elText = document.getElementById("text");

//    if (!elText.value) {
//        alert("Input a text");
//        elText.focus();
//        return;
//    }

//    qrcode.makeCode(elText.value);
//}
//var CloseTimerQrCodeInterval;
//function FloatLoyaltyCardPoint_QrCode_CloseTimerQrCode() {
//    var interval = parseInt(1000);
//    var i = 0;
//    //  $("#divCardBgImg").css("background-image", "url(" + ArrCardBackgroundImg[i] + ")");
//    CloseTimerQrCodeInterval = setInterval(function () {
//        i++;
//        console.log(i);
//        Ext.getCmp('FloatLoyaltyCardPoint_QrCode_CountClose').setHtml('<font size=6 color=white><b>' + i + '</b></font>')

//        if (i == 20) {

//            FloatLoyaltyCardPoint_QrCodeHide();
//        }

//    }, interval);

//}




//var CheckStampedStatusInterval;
//var CheckStampedStatusIntervalCount = 0;
//var CheckStampedStatusIntervalCountTimeOut = 10;
//function Timer_CheckStampedStatus() {
//    console.log("Start Checking Timer...");
//    var intervals = parseInt(1500);
//    CheckStampedStatusIntervalCount = 0;
//    CheckStampedStatusIntervalCountTimeOut = 10;
//    //  $("#divCardBgImg").css("background-image", "url(" + ArrCardBackgroundImg[i] + ")");
//    CheckStampedStatusInterval = setInterval(function () {
//        CheckStampedStatusIntervalCount++;
//        CheckStampedStatusIntervalCountTimeOut--;
//        console.log("CheckStampedStatusIntervalCount:" + CheckStampedStatusIntervalCount);




//        Ext.getCmp('FloatLoyaltyCardPoint_QrCode_MsgTxt').setHtml('<div style="width:100%;color:white;vertical-align: middle; text-align:center;font-size: 12px;">*Show This Qr Code to Merchendiser and get card stamped!.(' + CheckStampedStatusIntervalCountTimeOut + ')</div>')
//        if (CheckStampedStatusIntervalCount == 2) {

//            console.log("Checking To Function Scan_QRCode_StampCard_Check_StampedStatus()...");
//            //  Scan_QRCode_StampCard_Check_StampedStatus();



//            var TempStampQRCode = GetCurrStampCardQrCode();
//            console.log("Function Scan_QRCode_StampCard_Check_StampedStatus(), start process:" + TempStampQRCode);
//            Ext.getStore('AyohaUserStampCardCheckStampedStatusStore').getProxy().setExtraParams({
//                TempStampQRCode: TempStampQRCode
//            });

//            Ext.StoreMgr.get('AyohaUserStampCardCheckStampedStatusStore').load();
//            var task = Ext.create('Ext.util.DelayedTask', function () {
//                Ext.getStore('AyohaUserStampCardCheckStampedStatusStore').getProxy().setExtraParams({
//                    TempStampQRCode: TempStampQRCode
//                });

//                Ext.StoreMgr.get('AyohaUserStampCardCheckStampedStatusStore').load();
//                var myStore = Ext.getStore('AyohaUserStampCardCheckStampedStatusStore');
//                count = myStore.getCount();
//                var modelRecord = myStore.getAt(0);
//                var StampedStatus = modelRecord.get('StampedStatus');

//                if (count >= 1) {



//                    if (StampedStatus == "YES") {



//                        StopCheckStampedStatusInterval();
//                        FloatLoyaltyCardPoint_QrCodeHide();
//                        FloatPanel_AyohaCardManagement_StampSuccesAnimationShow();

//                        var strStampCampaignCode = GetCurrStampCampaignCode();
//                        var EnterpriseAccNo = GetEnterpriseHQAccNo();
//                        var SubscriberAccNo = GetCurrAyohaUserAccountNo()

//                        Scan_QRCode_StampCard_Reload(strStampCampaignCode, EnterpriseAccNo, SubscriberAccNo);
//                        // swalFireSuccess("Scan Succesfully!");
//                    } else {
//                        CheckStampedStatusIntervalCount = 0;
//                        // Timer_CheckStampedStatus();

//                        if (CheckStampedStatusIntervalCountTimeOut == 0) {
//                            StopCheckStampedStatusInterval();
//                            FloatLoyaltyCardPoint_QrCodeHide();
//                        }

//                        console.log(StampedStatus);
//                    }



//                }


//                //else {
//                //    CheckStampedStatusIntervalCount = 0;
//                //    Timer_CheckStampedStatus();

//                //    console.log(StampedStatus);
//                //}
//            });
//            task.delay(1000);





//        }

//    }, intervals);
//}




//function StopCheckStampedStatusInterval() {
//    clearInterval(CheckStampedStatusInterval);
//    CheckStampedStatusIntervalCount = 0;
//    console.log('StopCheckStampedStatusInterval')
//}