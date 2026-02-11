Ext.define('BuskartApp.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_StampQrCode', {

});



var _FloatPanel_AyohaCardManagement_StampQrCodeisOpen = "N";



var _FloatPanel_AyohaCardManagement_StampQrCode=null;




function FloatPanel_AyohaCardManagement_StampQrCodeCreateIfNeeded() {
    if (_FloatPanel_AyohaCardManagement_StampQrCode && !_FloatPanel_AyohaCardManagement_StampQrCode.destroyed) return;

    _FloatPanel_AyohaCardManagement_StampQrCode = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_AyohaCardManagement_StampQrCodeID',
         
            zIndex: 250,
            //height: 415,
            height: '100%',
            width: '100%',
            styleHtmlContent: true,
            floated: true,
        centered: true,
        fullscreen: true,        // ✅ ganti height/width 100%
        closeAction: 'hide',
        modal: true,
        hideOnMaskTap: true,
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'

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
            listeners: {
    
 
                // ✅ kalau user tap mask, close macam standard
                beforehide: function () {
                  // kalau hide dipanggil bukan dari function kita, block dulu
                  // (optional: boleh allow kalau kau nak)
                  return true;
                }
              },

              style: 'background: rgba(20,10,30,0.75);',

            items: {
                //zIndex: 40,
                xtype: 'container',
                style:ayohaThemeColor_Card(),
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },
                width: '90%',
                height: 420,
                items: [


                  {

                      xtype: 'container',
                      width: '100%',
                      height:50,
                      // width: 40,
docked:'top',
                      //  title: '<font size="3" color="white">Live Tracking Map</font>',
                      //hidden: true,

                      id: 'containerFloatPanel_AyohaCardManagement_StampQrCodeHeader',
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
                                               id: 'btnFloatPanel_AyohaCardManagement_StampQrCodeBack',
                                               height: 30,
                                               width: 65,
                                               // iconCls: 'list',
                                               html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                               ui: 'plain',
                                               handler: function () {
                                                 
                                                FloatPanel_AyohaCardManagement_StampQrCodeHide(false);
                                                //    _FloatPanel_AyohaCardManagement_StampQrCode.hide(Ext.fx.Animation({
                                                //        type: 'slideOut',
                                                //        direction: 'left',
                                                //        easing: 'cubic-bezier(.7,0,.7,1)',
                                                //        duration: 250

                                                //    }));
                                                //    StopCheckStampedStatusInterval();                                                  
                                                //    RemovePages("FloatPanel_AyohaCardManagement_StampQrCodeHide()");
                                                  // CheckStampedStatusIntervalCount = 0;
                                                  
                                               }
                                           },
                                          
                                            {
                                                xtype: 'spacer',

                                            },

                                       
                                        {
                                            margin: '0 0 0 0',
                                            id: 'htmFloatPanel_AyohaCardManagement_PreviewCard_TitleHeaderTxt',
                                            html: '<font size=2 color=white><b>Stamp Card QR Code</b></font>'
                                        },
                                                 
                                        {
                                            xtype: 'spacer',
width:'5%'
                                        },









                             ]

                  },

                      {
                          xtype: 'container',
                          id: 'containerFloatPanel_AyohaCardManagement_StampQrCodeLoading',
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
                        margin: '20 0 0 0',
                        width: '98%',
                        height: 310,
                        id: 'htmlFloatPanel_AyohaCardManagement_StampQrCode',
                     //   html: '<div id="myQRCodeImg" style="width:256px;height:256px;margin:0 auto;"></div>'
                     html: '<div style="width:100%;height:100%;display:flex;align-items:flex-start;justify-content:center;padding-top:10px;">'+
                       '<div id="myQRCodePad" style="background:#fff;padding:18px;border-radius:14px;">'+
                         '<div id="myQRCodeImg"></div>'+
                       '</div>'+
                     '</div>'
                    
                      },

                          {
                              margin: '20 0 0 0',
                              height: 60,
                              width: '100%',
                            //  hidden: true,
                              id: 'FloatPanel_AyohaCardManagement_StampQrCode_MsgTxt',
                             // html: '<div ><font size=2 color=white><b>*Show This Qr Code to Merchendiser and get card stamped!.</b></font></div>'
                              html: '<div style="width:100%;color:white;vertical-align: middle; text-align:center;font-size: 14px;font-weight:bold">*Show This Qr Code to Merchendiser and get card stamped!.</div>',
                          },
                           {
                               margin: '-5 0 0 0',
                               hidden: true,
                               id: 'FloatPanel_AyohaCardManagement_StampQrCode_CountClose',
                                html: '<font size=6 color=white><b>0</b></font>'
                           },
                           {
                               xtype: 'button',
                               //  align: 'stretch',
                               id: 'TestScan',
                               ui: 'plain',
                               width: '100%',
                               hidden:true,
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
                                   //FloatPanel_AyohaCardManagement_StampQrCodeHide();
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
}





// function FloatPanel_AyohaCardManagement_StampQrCode() {

    

//     return _FloatPanel_AyohaCardManagement_StampQrCode;
// }



function FloatPanel_AyohaCardManagement_StampQrCodeShow() {
    // Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_StampQrCode);
    // this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_StampQrCode());
    // this.overlay.show();
    // AddRoutePages("FloatPanel_AyohaCardManagement_StampQrCodeHide()");



    FloatPanel_AyohaCardManagement_StampQrCodeCreateIfNeeded();


    _FloatPanel_AyohaCardManagement_StampQrCode.show();
    // ✅ push browser back (ikut style kau)
    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
      AyohaBrowserBack.push('FloatPanel_AyohaCardManagement_StampQrCode', function () {
     
        FloatPanel_AyohaCardManagement_StampQrCodeHide(true);
      });
    }


    _FloatPanel_AyohaCardManagement_StampQrCodeisOpen = 'Y';
    Load_FloatPanel_AyohaCardManagement_StampQrCode_TemporaryStampQrCodeGenerateTempQrCodeStore();
    
}
//var is_FloatPanel_AyohaCardManagement_StampQrCodeHide = 'N';

function FloatPanel_AyohaCardManagement_StampQrCodeHide(fromBack, animCfg){
    StopCheckStampedStatusInterval();
    // if (_FloatPanel_AyohaCardManagement_StampQrCodeisOpen == 'Y') {
    //     _FloatPanel_AyohaCardManagement_StampQrCode.hide();
    //     _FloatPanel_AyohaCardManagement_StampQrCodeisOpen = 'N';
    //     RemovePages("FloatPanel_AyohaCardManagement_StampQrCodeHide()");
    // }


    if (_FloatPanel_AyohaCardManagement_StampQrCodeisOpen == 'Y') {
       
        _FloatPanel_AyohaCardManagement_StampQrCode.hide();


      

        if (animCfg) {
            _FloatPanel_AyohaCardManagement_StampQrCode.hide(Ext.fx.Animation(animCfg));
          } else {
            _FloatPanel_AyohaCardManagement_StampQrCode.hide();
          }
          _FloatPanel_AyohaCardManagement_StampQrCodeisOpen = 'N';
                                          
       
         // RemovePages("FloatPanel_ForgotPasswordHide()");
        
          // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
          if (fromBack !== true) {
            AyohaBrowserBack.close('FloatPanel_AyohaCardManagement_StampQrCode');
          }
    }




}


function Load_FloatPanel_AyohaCardManagement_StampQrCode_TemporaryStampQrCodeGenerateTempQrCodeStore() {


    console.log(GetCurrStampCampaignCode());
    console.log(GetEnterpriseHQAccNo());
    console.log(GetCurrAyohaUserAccountNo());


    _DataStore_TemporaryStampQrCodeGenerateTempQrCodeStore.getProxy().setExtraParam('StampCampaignCode', GetCurrStampCampaignCode());
    _DataStore_TemporaryStampQrCodeGenerateTempQrCodeStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseHQAccNo());
    _DataStore_TemporaryStampQrCodeGenerateTempQrCodeStore.getProxy().setExtraParam('SubscriberAccNo',GetCurrAyohaUserAccountNo());
    _DataStore_TemporaryStampQrCodeGenerateTempQrCodeStore.getProxy().setUrl(GetAPIurl() + '/TemporaryStampQrCode/TemporaryStampQrCodeGenerateTempQrCode'); 
    _DataStore_TemporaryStampQrCodeGenerateTempQrCodeStore.load({
            callback: function (records, operation, success) {

                if (!success) {
                    var err = operation.getError();   // boleh jadi string atau object
                   alert('Load FAILED: ' + JSON.stringify(err, null, 2));
        
                 
        
                    return; // keluar awal, jangan proses records
                }



                if (success && records.length > 0) {                  
                    if (records.length >= 1) {  
                             
                        var modelRecord = records[0]; // Access only the first record    
                       // alert(modelRecord.get('TempStampQrCode'))    
                        FloatPanel_AyohaCardManagement_StampQrCode_CreateQrCode(modelRecord.get('TempStampQrCode'));                
                     
                    } else {
                        FloatPanel_AyohaCardManagement_StampQrCodeHide(false);
                        swalFireInfo("QR Code Not generated!!");
                        // Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_AdvertisementButton').setHidden(true);
                        // Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_AdvertisementButton_TransparentBox').setHidden(false);
                    }
                    
                    // AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                } else {
                    FloatPanel_AyohaCardManagement_StampQrCodeHide(false);
                              swalFireInfo("QR Code Not generated!!");
    //         FloatPanel_AyohaCardManagement_StampQrCodeHide();
                }
               // 
            }
        });











    // Ext.getStore('TemporaryStampQrCodeGenerateTempQrCodeStore').getProxy().setExtraParams({
    //     StampCampaignCode: GetCurrStampCampaignCode(),
    //     EnterpriseAccNo:GetEnterpriseHQAccNo(),
    //     SubscriberAccNo:GetCurrAyohaUserAccountNo()
    // });

    // Ext.StoreMgr.get('TemporaryStampQrCodeGenerateTempQrCodeStore').load();
    // var task = Ext.create('Ext.util.DelayedTask', function () {
    //     Ext.getStore('TemporaryStampQrCodeGenerateTempQrCodeStore').getProxy().setExtraParams({
    //         StampCampaignCode: GetCurrStampCampaignCode(),
    //         EnterpriseAccNo: GetEnterpriseHQAccNo(),
    //         SubscriberAccNo: GetCurrAyohaUserAccountNo()
    //     });

    //     Ext.StoreMgr.get('TemporaryStampQrCodeGenerateTempQrCodeStore').load();
    //     var myStore = Ext.getStore('TemporaryStampQrCodeGenerateTempQrCodeStore');
    //     count = myStore.getCount();
   
        
    //     if (count >= 1) {
    //         var modelRecord = myStore.getAt(0);
    //         var TempStampQrCode = modelRecord.get('TempStampQrCode');
    //         FloatPanel_AyohaCardManagement_StampQrCode_CreateQrCode(TempStampQrCode);
           

          
    //     } else {
    //         swalFireInfo("QR Code Not generated!!");
    //         FloatPanel_AyohaCardManagement_StampQrCodeHide();
    //     }
    // });
    // task.delay(1000);
}





//var src;
//var can;


function FloatPanel_AyohaCardManagement_StampQrCode_CreateQrCode(TmpQrCodeTxt) {
    var payload = TmpQrCodeTxt || "65e0105e-d337-4482-906a-7df2d8ac8f2f";
    localStorage.setItem('CurrStampCardQrCode', payload);
  
    var qrCmp = Ext.getCmp('htmlFloatPanel_AyohaCardManagement_StampQrCode');
    qrCmp.setHidden(false);
  
    qrCmp.on('painted', function () {
      var wrap = document.getElementById("myQRCodeImg");
      if (!wrap) return;
  
      wrap.innerHTML = ""; // clear lama
  
      // ✅ Error correction tinggi bantu lagi senang scan
      new window.QRCode(wrap, {
        text: payload,
        width: 260,
        height: 260,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: window.QRCode.CorrectLevel.H
      });
  
      Ext.getCmp('containerFloatPanel_AyohaCardManagement_StampQrCodeLoading').setHidden(true);
      Ext.getCmp('FloatPanel_AyohaCardManagement_StampQrCode_MsgTxt').setHidden(false);
     
    }, null, { single: true });
    Timer_CheckStampedStatus();
  }
  





function FloatPanel_AyohaCardManagement_StampQrCode_CreateQrCodeORI2(TmpQrCodeTxt) {

    var payload = TmpQrCodeTxt ;
  
    localStorage.setItem('CurrStampCardQrCode', payload);
  
    Ext.getCmp('FloatPanel_AyohaCardManagement_StampQrCode_CountClose').setHidden(true);
    Ext.getCmp('FloatPanel_AyohaCardManagement_StampQrCode_CountClose')
      .setHtml('<font size=3 color=white><b>' + payload + '</b></font>');
  
    var qrCmp = Ext.getCmp('htmlFloatPanel_AyohaCardManagement_StampQrCode');
  
    // ✅ Pastikan dia visible dulu supaya DOM wujud
    qrCmp.setHidden(false);
  
    // ✅ Kalau belum painted, tunggu sekejap
    if (!qrCmp.element || !qrCmp.element.dom) {
      qrCmp.on('painted', function () {
        FloatPanel_AyohaCardManagement_StampQrCode_CreateQrCode(payload);
      }, null, { single: true });
      return;
    }
  
    var wrap = document.getElementById("myQRCodeImg");
    if (!wrap) {
      console.error("QR wrapper #myQRCodeImg tak jumpa");
      return;
    }
  
    // clear QR lama
    wrap.innerHTML = "";






    
  
    // ✅ Guna qrcodejs (constructor)
    if (typeof window.QRCode === "function") {
      new window.QRCode(wrap, {
        text: payload,
        width: 256,
        height: 256,
        correctLevel: window.QRCode.CorrectLevel.M
      });
    }
    // ✅ Kalau satu hari kau tukar ke library `qrcode` (ada toCanvas)
    else if (window.QRCode && typeof window.QRCode.toCanvas === "function") {
      var canvas = document.createElement("canvas");
      wrap.appendChild(canvas);
  
      window.QRCode.toCanvas(canvas, payload, {
        width: 256,
        margin: 2,
        errorCorrectionLevel: "M"
      }, function (err) {
        if (err) console.error("QR generate error:", err);
      });
    } else {
      console.error("QRCode library tak load / conflict.");
      return;
    }
  
    Ext.getCmp('containerFloatPanel_AyohaCardManagement_StampQrCodeLoading').setHidden(true);
    Ext.getCmp('FloatPanel_AyohaCardManagement_StampQrCode_MsgTxt').setHidden(false);
   Timer_CheckStampedStatus();
  }








var qrcode;
function FloatPanel_AyohaCardManagement_StampQrCode_CreateQrCodeORI(TmpQrCodeTxt) {
  
 
    localStorage.setItem('CurrStampCardQrCode', TmpQrCodeTxt);
    Ext.getCmp('FloatPanel_AyohaCardManagement_StampQrCode_CountClose').setHidden(true);
    Ext.getCmp('FloatPanel_AyohaCardManagement_StampQrCode_CountClose').setHtml('<font size=3 color=white><b>' + TmpQrCodeTxt + '</b></font>')
  
   
    const payload = "65e0105e-d337-4482-906a-7df2d8ac8f2f";
    const canvas = document.getElementById("myQRCodeImg");

    QRCode.toCanvas(canvas, payload, {
      width: 256,
      margin: 2,
      errorCorrectionLevel: "M"
    }, (err) => {
      if (err) console.error("QR generate error:", err);
    });

    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_StampQrCode').setHidden(false);

    Ext.getCmp('containerFloatPanel_AyohaCardManagement_StampQrCodeLoading').setHidden(true);
 
    Ext.getCmp('FloatPanel_AyohaCardManagement_StampQrCode_MsgTxt').setHidden(false);  

    Timer_CheckStampedStatus();
    

return;









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
    qrcode = new QRCode(document.getElementById("myQRCodeImg"), {
        //width: 330,
        width: xx,
        height: 360
    });

   //var qrcode = new QRCode(document.getElementById("myQRCodeImg"));


    qrcode.clear();
 
    qrcode.makeCode(TmpQrCodeTxt);

    //alert(TmpQrCodeTxt);
  //  document.getElementById("myQRCodeImg").src = encodedImageData;
    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_StampQrCode').setHidden(false);
    

   // console.log(encodedImageData);
   // Ext.getCmp('htmlFloatPanel_AyohaCardManagement_StampQrCode').setHtml('<img src="' + encodedImageData + '" style="width: 100%; height: 355px; border:1px solid white;" />');

  
    Ext.getCmp('containerFloatPanel_AyohaCardManagement_StampQrCodeLoading').setHidden(true);
 
    Ext.getCmp('FloatPanel_AyohaCardManagement_StampQrCode_MsgTxt').setHidden(false);
  


  

    Timer_CheckStampedStatus();
    
   //// FloatPanel_AyohaCardManagement_StampQrCode_CloseTimerQrCode();
   
}





// function makeCode () {		
//     var elText = document.getElementById("text");
	
//     if (!elText.value) {
//         alert("Input a text");
//         elText.focus();
//         return;
//     }
	
//     qrcode.makeCode(elText.value);
// }
var CloseTimerQrCodeInterval;
function FloatPanel_AyohaCardManagement_StampQrCode_CloseTimerQrCode() {
    var interval = parseInt(1000);
    var i = 0;
    //  $("#divCardBgImg").css("background-image", "url(" + ArrCardBackgroundImg[i] + ")");
    CloseTimerQrCodeInterval = setInterval(function () {
        i++;
        console.log(i);
        Ext.getCmp('FloatPanel_AyohaCardManagement_StampQrCode_CountClose').setHtml('<font size=6 color=white><b>'+i+'</b></font>')

        if (i == 20) {
            
            FloatPanel_AyohaCardManagement_StampQrCodeHide(false);
        }
       
    }, interval);

}




var CheckStampedStatusInterval;
var CheckStampedStatusIntervalCount=0;
var CheckStampedStatusIntervalCountTimeOut = 10;
var globalOpenFloatPanel_AyohaCardManagement_StampSuccesAnimationShowSource="Manual";

function Timer_CheckStampedStatus() {
    console.log("Start Checking Timer...");
    var intervals = parseInt(1500);
    CheckStampedStatusIntervalCount = 0;
    CheckStampedStatusIntervalCountTimeOut = 10;
    //  $("#divCardBgImg").css("background-image", "url(" + ArrCardBackgroundImg[i] + ")");
    CheckStampedStatusInterval = setInterval(function () {
        CheckStampedStatusIntervalCount++;
        CheckStampedStatusIntervalCountTimeOut--;
        console.log("CheckStampedStatusIntervalCount:" + CheckStampedStatusIntervalCount);



      
       Ext.getCmp('FloatPanel_AyohaCardManagement_StampQrCode_MsgTxt').setHtml('<div style="width:100%;color:white;vertical-align: middle; text-align:center;font-size: 14px;font-weight:bold">*Show This Qr Code to Merchendiser and get card stamped!.(' + CheckStampedStatusIntervalCountTimeOut + ')</div>')
        if (CheckStampedStatusIntervalCount == 2) {
         
            console.log("Checking To Function Scan_QRCode_StampCard_Check_StampedStatus()...");
            //  Scan_QRCode_StampCard_Check_StampedStatus();



            var TempStampQRCode = GetCurrStampCardQrCode();
            console.log("Function Scan_QRCode_StampCard_Check_StampedStatus(), start process:" + TempStampQRCode);


            _DataStore_AyohaUserStampCardCheckStampedStatusStore.getProxy().setExtraParam('TempStampQRCode',GetCurrStampCardQrCode());         
            _DataStore_AyohaUserStampCardCheckStampedStatusStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserStampCard/AyohaUserStampCardCheckStampedStatus'); 
            _DataStore_AyohaUserStampCardCheckStampedStatusStore.load({
                    callback: function (records, operation, success) {
        
                        if (!success) {
                            var err = operation.getError();   // boleh jadi string atau object
                           alert('Load FAILED: ' + JSON.stringify(err, null, 2));
                            return; // keluar awal, jangan proses records
                        }
        
        
                        if (success && records.length > 0) {                  
                            if (records.length >= 1) {  
                                globalOpenFloatPanel_AyohaCardManagement_StampSuccesAnimationShowSource = "Automated";
                                var modelRecord = records[0]; // Access only the first record 
                                var StampedStatus = modelRecord.get('StampedStatus'); 
                                if (StampedStatus == "YES") {



                                    StopCheckStampedStatusInterval();
                                    FloatPanel_AyohaCardManagement_StampQrCodeHide(false);
                                  
            
                                    var strStampCampaignCode = GetCurrStampCampaignCode();
                                    var EnterpriseAccNo = GetEnterpriseHQAccNo();
                                    var SubscriberAccNo = GetCurrAyohaUserAccountNo()
            
                                    Scan_QRCode_StampCard_Reload(strStampCampaignCode, EnterpriseAccNo, SubscriberAccNo);
                                   
                                } else {
                                    CheckStampedStatusIntervalCount = 0;
                                    // Timer_CheckStampedStatus();
            
                                    if (CheckStampedStatusIntervalCountTimeOut == 0) {
                                        StopCheckStampedStatusInterval();
                                        FloatPanel_AyohaCardManagement_StampQrCodeHide(false);
                                    }
            
                                    console.log(StampedStatus);
                                }  
                                              
                             
                            } else {
                                FloatPanel_AyohaCardManagement_StampQrCodeHide(false);
                                swalFireInfo("QR Code Not generated!!");
                              
                            }
                            
                         
                        } else {
                            FloatPanel_AyohaCardManagement_StampQrCodeHide(false);
                                      swalFireInfo("QR Code Not generated!!");
            //       
                        }
                       // 
                    }
                });










            // Ext.getStore('AyohaUserStampCardCheckStampedStatusStore').getProxy().setExtraParams({
            //     TempStampQRCode: TempStampQRCode
            // });

            // Ext.StoreMgr.get('AyohaUserStampCardCheckStampedStatusStore').load();
            // var task = Ext.create('Ext.util.DelayedTask', function () {
            //     Ext.getStore('AyohaUserStampCardCheckStampedStatusStore').getProxy().setExtraParams({
            //         TempStampQRCode: TempStampQRCode
            //     });

            //     Ext.StoreMgr.get('AyohaUserStampCardCheckStampedStatusStore').load();
            //     var myStore = Ext.getStore('AyohaUserStampCardCheckStampedStatusStore');
            //     count = myStore.getCount();
            //     var modelRecord = myStore.getAt(0);
            //     var StampedStatus = modelRecord.get('StampedStatus');

            //     if (count >= 1) {


            //         globalOpenFloatPanel_AyohaCardManagement_StampSuccesAnimationShowSource = "Automated";
            //         if (StampedStatus == "YES") {



            //             StopCheckStampedStatusInterval();
            //             FloatPanel_AyohaCardManagement_StampQrCodeHide();
                      

            //             var strStampCampaignCode = GetCurrStampCampaignCode();
            //             var EnterpriseAccNo = GetEnterpriseHQAccNo();
            //             var SubscriberAccNo = GetCurrAyohaUserAccountNo()

            //             Scan_QRCode_StampCard_Reload(strStampCampaignCode, EnterpriseAccNo, SubscriberAccNo);
            //             // swalFireSuccess("Scan Succesfully!");

            //            // FloatPanel_AyohaCardManagement_StampSuccesAnimationShow();
            //         } else {
            //             CheckStampedStatusIntervalCount = 0;
            //             // Timer_CheckStampedStatus();

            //             if (CheckStampedStatusIntervalCountTimeOut == 0) {
            //                 StopCheckStampedStatusInterval();
            //                 FloatPanel_AyohaCardManagement_StampQrCodeHide();
            //             }

            //             console.log(StampedStatus);
            //         }



            //     }


            //     //else {
            //     //    CheckStampedStatusIntervalCount = 0;
            //     //    Timer_CheckStampedStatus();

            //     //    console.log(StampedStatus);
            //     //}
            // });
            // task.delay(1000);





        }

    }, intervals);
}













function Timer_CheckStampedStatusORI() {
    console.log("Start Checking Timer...");
    var intervals = parseInt(1500);
    CheckStampedStatusIntervalCount = 0;
    CheckStampedStatusIntervalCountTimeOut = 10;
    //  $("#divCardBgImg").css("background-image", "url(" + ArrCardBackgroundImg[i] + ")");
    CheckStampedStatusInterval = setInterval(function () {
        CheckStampedStatusIntervalCount++;
        CheckStampedStatusIntervalCountTimeOut--;
        console.log("CheckStampedStatusIntervalCount:" + CheckStampedStatusIntervalCount);



      
       Ext.getCmp('FloatPanel_AyohaCardManagement_StampQrCode_MsgTxt').setHtml('<div style="width:100%;color:white;vertical-align: middle; text-align:center;font-size: 12px;">*Show This Qr Code to Merchendiser and get card stamped!.(' + CheckStampedStatusIntervalCountTimeOut + ')</div>')
        if (CheckStampedStatusIntervalCount == 2) {
         
            console.log("Checking To Function Scan_QRCode_StampCard_Check_StampedStatus()...");
            //  Scan_QRCode_StampCard_Check_StampedStatus();



            var TempStampQRCode = GetCurrStampCardQrCode();
            console.log("Function Scan_QRCode_StampCard_Check_StampedStatus(), start process:" + TempStampQRCode);
            Ext.getStore('AyohaUserStampCardCheckStampedStatusStore').getProxy().setExtraParams({
                TempStampQRCode: TempStampQRCode
            });

            Ext.StoreMgr.get('AyohaUserStampCardCheckStampedStatusStore').load();
            var task = Ext.create('Ext.util.DelayedTask', function () {
                Ext.getStore('AyohaUserStampCardCheckStampedStatusStore').getProxy().setExtraParams({
                    TempStampQRCode: TempStampQRCode
                });

                Ext.StoreMgr.get('AyohaUserStampCardCheckStampedStatusStore').load();
                var myStore = Ext.getStore('AyohaUserStampCardCheckStampedStatusStore');
                count = myStore.getCount();
                var modelRecord = myStore.getAt(0);
                var StampedStatus = modelRecord.get('StampedStatus');

                if (count >= 1) {


                    globalOpenFloatPanel_AyohaCardManagement_StampSuccesAnimationShowSource = "Automated";
                    if (StampedStatus == "YES") {



                        StopCheckStampedStatusInterval();
                        FloatPanel_AyohaCardManagement_StampQrCodeHide();
                      

                        var strStampCampaignCode = GetCurrStampCampaignCode();
                        var EnterpriseAccNo = GetEnterpriseHQAccNo();
                        var SubscriberAccNo = GetCurrAyohaUserAccountNo()

                        Scan_QRCode_StampCard_Reload(strStampCampaignCode, EnterpriseAccNo, SubscriberAccNo);
                        // swalFireSuccess("Scan Succesfully!");

                       // FloatPanel_AyohaCardManagement_StampSuccesAnimationShow();
                    } else {
                        CheckStampedStatusIntervalCount = 0;
                        // Timer_CheckStampedStatus();

                        if (CheckStampedStatusIntervalCountTimeOut == 0) {
                            StopCheckStampedStatusInterval();
                            FloatPanel_AyohaCardManagement_StampQrCodeHide();
                        }

                        console.log(StampedStatus);
                    }



                }


                //else {
                //    CheckStampedStatusIntervalCount = 0;
                //    Timer_CheckStampedStatus();

                //    console.log(StampedStatus);
                //}
            });
            task.delay(1000);





        }

    }, intervals);
}




function StopCheckStampedStatusInterval() {
    clearInterval(CheckStampedStatusInterval);
    CheckStampedStatusIntervalCount = 0;
    console.log('StopCheckStampedStatusInterval')
}