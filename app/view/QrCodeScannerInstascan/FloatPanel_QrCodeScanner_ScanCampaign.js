Ext.define('BuskartApp.view.QrCodeScannerInstascan.FloatPanel_QrCodeScanner_ScanCampaign', {
  
});






let scanner;
var _FloatPanel_QrCodeScanner_ScanCampaign;

function FloatPanel_QrCodeScanner_ScanCampaign() {

    _FloatPanel_QrCodeScanner_ScanCampaign = Ext.create('Ext.Container',
       

        {
           
            id: 'FloatPanel_QrCodeScanner_ScanCampaignID',
            // xtype: 'panel',
            //zIndex: 400,
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
            modal: false,
            // hideOnMaskTap: true,
            //left: 10,
            //top:10,
            layout: {
                type: 'fit'
            },
            showAnimation: {
                type: 'popIn',
                duration: 150,
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
           
           //  style: ' background-color:transparent;',
             style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',



             listeners: {
                 initialize: function (c) {
                     this.element.on({
                         swipe: function (e, node, options) {

                             if (e.direction == "left") {
                                 scanner.stop();
                                 Ext.getCmp('mainView').setHidden(false);
                                 FloatPanel_QrCodeScanner_CenterLineMessageHide();

                                 _FloatPanel_QrCodeScanner_ScanCampaign.hide(Ext.fx.Animation({
                                     type: 'slideOut',
                                     direction: 'left',
                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                     duration: 250

                                 }));

                                 is_FloatPanel_QrCodeScanner_ScanCampaignOpen = 'N';
                                 RemovePages("FloatPanel_QrCodeScanner_ScanCampaignHide()");
                             } if (e.direction == "right") {
                                 scanner.stop();
                                 Ext.getCmp('mainView').setHidden(false);
                                 FloatPanel_QrCodeScanner_CenterLineMessageHide();

                                 _FloatPanel_QrCodeScanner_ScanCampaign.hide(Ext.fx.Animation({
                                     type: 'slideOut',
                                     direction: 'left',
                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                     duration: 250

                                 }));

                                 is_FloatPanel_QrCodeScanner_ScanCampaignOpen = 'N';
                                 RemovePages("FloatPanel_QrCodeScanner_ScanCampaignHide()");
                             }

                         }
                     });
                 }
             },




             items: [
                 {

                     xtype: 'container',
                     width: '100%',
                     docked: 'top',
                     height: 40,
                     // width: 40,

                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_QrCodeScanner_ScanCampaignHeader',
                     style: 'background-color:black',
                    // style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                 
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
                                              id: 'btnFloatPanel_QrCodeScanner_ScanCampaignBack',
                                              height: 30,
                                              width: 55,
                                              margin: '0 0 0 10',
                                              // iconCls: 'list',
                                              html: '<div ><img src="resources/icons/backwhite03.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {
                                                  scanner.stop();
                                                  Ext.getCmp('mainView').setHidden(false);
                                                  FloatPanel_QrCodeScanner_CenterLineMessageHide();

                                                  _FloatPanel_QrCodeScanner_ScanCampaign.hide(Ext.fx.Animation({
                                                      type: 'slideOut',
                                                      direction: 'left',
                                                      easing: 'cubic-bezier(.7,0,.7,1)',
                                                      duration: 250

                                                  }));
                                                
                                                  is_FloatPanel_QrCodeScanner_ScanCampaignOpen = 'N';
                                                  RemovePages("FloatPanel_QrCodeScanner_ScanCampaignHide()");

                                                  //comment on 02112022 11:18pm
                                                  //window.QRScanner.destroy(function (status) {
                                                     
                                                  //});
                                                 
                                              }
                                          },

                                           {
                                               xtype: 'spacer',


                                           },

                                               {
                                                   margin: '0 15 0 0',
                                                   id: 'htmlFloatPanel_QrCodeScanner_ScanCampaign_TitleHeaderTxt',
                                                   html: '<font size=2 color=white><b>Scan Ayoha QR Code</b></font>'
                                               },


                                                         {
                                                             xtype: 'button',
                                                             id: 'btnFloatPanel_QrCodeScanner_ScanCampaign_CardIcon',
                                                             height: 30,
                                                             width: 35,
                                                             hidden:true,
                                                             // iconCls: 'list',
                                                             html: '<div ><img src="resources/icons/scanQRcodeGrey.png" width="25" height="20" alt="Company Name"></div>',
                                                             ui: 'plain',
                                                             handler: function () {
                                                                 Ext.getCmp('mainView').setHidden(false);
                                                                 FloatPanel_QrCodeScanner_CenterLineMessageHide();
                                                                 is_FloatPanel_QrCodeScanner_ScanCampaignOpen = 'N';
                                                                // FloatPanel_AyohaeWallet_IconShow();
                                                                 _FloatPanel_QrCodeScanner_ScanCampaign.hide(Ext.fx.Animation({
                                                                     type: 'slideOut',
                                                                     direction: 'right',
                                                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                                                     duration: 250

                                                                 }));
                                                                 RemovePages("FloatPanel_QrCodeScanner_ScanCampaignHide()");

                                                                 //comment on 2/11/2022
                                                                 //window.QRScanner.destroy(function (status) {
                                                                    
                                                                 //});
                                                                
                                                               
                                                             }
                                                         },








                 //                          {
                 //                              xtype: 'container',
                 //                              //  width: '100%',
                 //                              style: 'background-color:rgba(0, 0, 0, 0.1);border-radius: 0px 0px 0px 0px;',
                 //                              layout: {
                 //                                  type: 'vbox',
                 //                                  pack: 'start',
                 //                                  align: 'center',
                 //                              },
                 //                              items: [
                 //                                  {

                 //                                      xtype: 'image',
                 //                                      src: 'resources/icons/scanQRcodeGrey.png',
                 //                                      width: 55,
                 //                                      height: 55,
                 //                                      margin: '0 0 0 0'
                 //                                  },
                 //{
                 //    html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;margin:0px 0px 0px 0px" ><u>Scan Ayoha Reward Card</u></div>',
                 //},

                 //                              ]

                 //                          },










                            ]

                 },




                 /////////////////

                 {
                     xtype: 'container',
                     height: '100%',
                    // hidden:true,
                     width: '100%',
                     layout: {
                         type: 'vbox',
                         pack: 'center',
                         align: 'center'
                     },
                     style: ' background-color:transparent;',
                     items: [

                         {



                             xtype: 'container',
                             height: '33.3%',
                             //  height: '60%',
                             width: '100%',

                            // flex: 1,

                             // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                             name: 'clickableContainerFloatPanel_QrCodeScanner_ScanCampaign',
                             layout: {
                                 type: 'vbox',
                                 pack: 'start',
                                 align: 'center'
                             },
                             style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                             //style: ' background-color:transparent;',
                             items: [


                                                                                                      {
                                                                                                          margin: '0 0 0 -5',
                                                                                                          id:'FloatPanel_QrCodeScanner_ScanCampaign_AyohaRewardLogo',
                                                                                                          height: 160,
                                                                                                          width: 160,
                                                                                                          html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" alt="Image" style="width:160px;height:160px;">',
                                                                                                      },
                             {

                                 margin: '-10 0 0 0',
                                 // height: 20,
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 25px;font-weight:bold;color:white;">Ayoha Reward</div>'
                             },
                              {

                                  margin: '-3 0 0 0',
                                  // height: 20,
                                  html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:white;">One hub,Double Rewards !</div>'
                              },



                             ]



                         },








                 {



                     xtype: 'container',
                     height: '33.3%',
                     //  height: '60%',
                     width: '100%',

                     // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                     id: 'clickableContainerFloatPanel_QrCodeScanner_ScanCampaignID',
                     layout: {
                         type: 'vbox',
                         pack: 'center',
                         align: 'center'
                     },
                     style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;border-right:50px solid rgba(0, 0, 0, 0.5);border-top:2px none rgba(0, 0, 0, 0.5);border-left:50px solid rgba(0, 0, 0, 0.5);border-bottom:2px none rgba(0, 0, 0, 0.5);',
                     //style: ' background-color:transparent;',
                     items: [




//                         {
//    xtype: 'container',
//    width: '80%',
//    height: 100,
//    style: 'background-color:rgba(0, 0, 0, 0.1);border-radius: 5px 5px 5px 5px;border-right:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;',
//    layout: {
//        type: 'vbox',
//        pack: 'center',
//        align: 'center',
//    },

//},







                     ]



                 },
                       {



                           xtype: 'container',
                           height: '33.3%',
                           //  height: '60%',
                           width: '100%',

                        
                           // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                           id: 'ContainerFloatPanel_QrCodeScanner_ScanCampaignIDBottom',
                           layout: {
                               type: 'vbox',
                               pack: 'start',
                               align: 'center'
                           },
                           style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                           //style: ' background-color:transparent;',
                           items: [





                                {
                                    html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;background-color:transparent" >Place a QR Code inside the scan area</div>',
                                    margin: '40 0 0 0',
                                },






                           ]



                       },
                     ]
                 },

                 {

                    //  height: 884,
                    //  zIndex:-50,
                    //  //height: '60%',
                    //  width: '100%',
                     html: ' <video id="preview_scan"></video>',
                     //handler: function () {

                     ////    FloatPanel_QrCodeScanner_ScanLoyaltyStampCardHide();

                     //},

                 },

                 //////////////////


                       {

                           xtype: 'container',
                           width: '100%',

                           // width: 40,
                           docked: 'bottom',
                           height: 40,
                           style: 'background-color:black',
                          // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                           layout: {
                               type: 'vbox',
                               pack: 'center',
                               align: 'center',
                           },
                           items: [

                                {
                                    html: '<div style="color:white;text-align: center;font-size:11px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;background-color:transparent" >Developed by Versilani Technology Sdn bhd. Kuala Lumpur ,MALAYSIA</div>',
                                    margin: '0 0 0 0',
                                },

                           ]

                       },











             ],








        





        });

    return _FloatPanel_QrCodeScanner_ScanCampaign;
}

var QRCodeResult;

function FloatPanel_QrCodeScanner_ScanCampaignShow_ORI() {
    QRCodeResult = "";
    Ext.Viewport.remove(_FloatPanel_QrCodeScanner_ScanCampaign);
    this.overlay = Ext.Viewport.add(FloatPanel_QrCodeScanner_ScanCampaign());
    this.overlay.show();
    AddRoutePages("FloatPanel_QrCodeScanner_ScanCampaignHide()");
    is_FloatPanel_QrCodeScanner_ScanCampaignOpen = 'Y';
    FloatPanel_QrCodeScanner_CenterLineMessageShow();
   

    var x = screen.width;
    var y = screen.height;
    var xx = x - 28;


    if (y < 700) {
        Ext.getCmp('FloatPanel_QrCodeScanner_ScanCampaign_AyohaRewardLogo').setHeight(130);
        Ext.getCmp('FloatPanel_QrCodeScanner_ScanCampaign_AyohaRewardLogo').setWidth(130);
        Ext.getCmp('FloatPanel_QrCodeScanner_ScanCampaign_AyohaRewardLogo').setHtml('<img src="resources/icons/Logo/LogoOrangeSimplifed.png" alt="Image" style="width:130px;height:130px;">');
    }


 
}


function FloatPanel_QrCodeScanner_ScanAyohaStoreShow() {
    QRCodeResult = "";
    Ext.Viewport.remove(_FloatPanel_QrCodeScanner_ScanCampaign);
    this.overlay = Ext.Viewport.add(FloatPanel_QrCodeScanner_ScanCampaign());
    this.overlay.show();
    AddRoutePages("FloatPanel_QrCodeScanner_ScanCampaignHide()");
    is_FloatPanel_QrCodeScanner_ScanCampaignOpen = 'Y';
    FloatPanel_QrCodeScanner_CenterLineMessageShow();


    var x = screen.width;
    var y = screen.height;
    var xx = x - 28;

    console.log(y);
    if (y < 700) {
        Ext.getCmp('FloatPanel_QrCodeScanner_ScanCampaign_AyohaRewardLogo').setHeight(130);
        Ext.getCmp('FloatPanel_QrCodeScanner_ScanCampaign_AyohaRewardLogo').setWidth(130);
        Ext.getCmp('FloatPanel_QrCodeScanner_ScanCampaign_AyohaRewardLogo').setHtml('<img src="resources/icons/Logo/LogoOrangeSimplifed.png" alt="Image" style="width:130px;height:130px;">');
    }

    //Ext.getCmp('QrCodeInstaScan').setHtml('<video id="preview" style="width:' + x +'px;height:'+ y +'px;"></video>');

    scanner = new Instascan.Scanner({
        video: document.getElementById('preview_scan'),
        mirror: false,
       
    });


   

    scanner.addListener('scan', function (content) {
      
        //QRCodeResult = content;
        //Ext.getCmp('FloatPanel_QrCodeScanner_CenterLineMessageID').setStyle('background-color:black;');
        //Ext.getCmp('FloatPanel_QrCodeScanner_RedCenterLine').setHidden(true);
        //Ext.getCmp('FloatPanel_QrCodeScanner_ProcessImage').setHidden(false);
        //Ext.getCmp('FloatPanel_QrCodeScanner_ProcessLbl').setHidden(false);
        //var audio = new Audio();
        //audio.src = 'http://42.1.63.57/AyohaSoundExternal/store-scanner-beep.mp3';
        //audio.play();

        //var n = QRCodeResult.includes("Point");
        //if (n) {
        //    Scan_QRCode_VerifyQRCode_PointCampaign(QRCodeResult);
        //} else {
        //    Scan_QRCode_VerifyQRCodeStampCampaign(QRCodeResult);
        //}
        
        QRCodeResult = content;
        var audio = new Audio();
        audio.src = 'https://setkita.com/AyohaSoundExternal/store-scanner-beep.mp3';
        audio.play();


       
        Ext.getCmp('mainView').setHidden(false);
        FloatPanel_QrCodeScanner_CenterLineMessageHide();

        _FloatPanel_QrCodeScanner_ScanCampaign.hide(Ext.fx.Animation({
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'

        }));

        is_FloatPanel_QrCodeScanner_ScanCampaignOpen = 'N';
        RemovePages("FloatPanel_QrCodeScanner_ScanCampaignHide()");





        //is_FloatPanel_QrCodeScanner_ScanCampaignOpen = 'N';
        //RemovePages(_FloatPanel_QrCodeScanner_ScanCampaign, "is_FloatPanel_QrCodeScanner_ScanCampaignOpen");
      





//commented on 7/4/2024
        // var n = QRCodeResult.includes("Point");
        // if (n) {
           
        //     Scan_QRCode_VerifyQRCode_PointCampaign(QRCodeResult);
        // } else {
           
        //     Scan_QRCode_VerifyQRCode_StampCampaign(QRCodeResult);
        // }
        var text = QRCodeResult; 

        AppState.FloatPanel_QrCodeScanner_Scanned.QRCodeResult = QRCodeResult;
        AppState.FloatPanel_QrCodeScanner_Scanned.QRCodeResult_PageType = text.slice(-2);
        // FloatPanel_ScannedMerchantShow();







//commented on 20/9/2025
        var newString = text.slice(-2);

       
        if(newString=="EP"){
            FloatPanel_QrCodeScanner_ScanCampaign_LoadEnterprisePage(QRCodeResult);
           // FloatPanel_QrCodeScanner_ScanCampaign_LoadEnterprisePage(AppState.FloatPanel_QrCodeScanner_Scanned.QRCodeResult);
        }
        if(newString=="MC"){
            FloatPanel_QrCodeScanner_ScanCampaign_LoadMembershipCardPage(QRCodeResult);
        }
        
     
        scanner.stop();


       

    });
    //Instascan.Camera.getCameras().then(function (cameras) {
    //    if (cameras.length > 0) {
    //        scanner.start(cameras[1]);
    //    } else {
    //        console.error('No cameras found.');
    //    }
    //}).catch(function (e) {
    //    console.error(e);
    //});

    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[1]);
        } else {
            console.error('No cameras found.');
        }
    }).then(function (e) {
        console.error(e);
    });
}


function FloatPanel_QrCodeScanner_ScanCampaignShow() {
    QRCodeResult = "";
    Ext.Viewport.remove(_FloatPanel_QrCodeScanner_ScanCampaign);
    this.overlay = Ext.Viewport.add(FloatPanel_QrCodeScanner_ScanCampaign());
    this.overlay.show();
    AddRoutePages("FloatPanel_QrCodeScanner_ScanCampaignHide()");
    is_FloatPanel_QrCodeScanner_ScanCampaignOpen = 'Y';
    FloatPanel_QrCodeScanner_CenterLineMessageShow();


    var x = screen.width;
    var y = screen.height;
    var xx = x - 28;

    console.log(y);
    if (y < 700) {
        Ext.getCmp('FloatPanel_QrCodeScanner_ScanCampaign_AyohaRewardLogo').setHeight(130);
        Ext.getCmp('FloatPanel_QrCodeScanner_ScanCampaign_AyohaRewardLogo').setWidth(130);
        Ext.getCmp('FloatPanel_QrCodeScanner_ScanCampaign_AyohaRewardLogo').setHtml('<img src="resources/icons/Logo/LogoOrangeSimplifed.png" alt="Image" style="width:130px;height:130px;">');
    }

    //Ext.getCmp('QrCodeInstaScan').setHtml('<video id="preview" style="width:' + x +'px;height:'+ y +'px;"></video>');

    scanner = new Instascan.Scanner({
        video: document.getElementById('preview_scan'),
        mirror: false,
       
    });


   

    scanner.addListener('scan', function (content) {
      
        //QRCodeResult = content;
        //Ext.getCmp('FloatPanel_QrCodeScanner_CenterLineMessageID').setStyle('background-color:black;');
        //Ext.getCmp('FloatPanel_QrCodeScanner_RedCenterLine').setHidden(true);
        //Ext.getCmp('FloatPanel_QrCodeScanner_ProcessImage').setHidden(false);
        //Ext.getCmp('FloatPanel_QrCodeScanner_ProcessLbl').setHidden(false);
        //var audio = new Audio();
        //audio.src = 'http://42.1.63.57/AyohaSoundExternal/store-scanner-beep.mp3';
        //audio.play();

        //var n = QRCodeResult.includes("Point");
        //if (n) {
        //    Scan_QRCode_VerifyQRCode_PointCampaign(QRCodeResult);
        //} else {
        //    Scan_QRCode_VerifyQRCodeStampCampaign(QRCodeResult);
        //}
        
        QRCodeResult = content;
        var audio = new Audio();
        audio.src = 'https://setkita.com/AyohaSoundExternal/store-scanner-beep.mp3';
        audio.play();


       
        Ext.getCmp('mainView').setHidden(false);
        FloatPanel_QrCodeScanner_CenterLineMessageHide();

        _FloatPanel_QrCodeScanner_ScanCampaign.hide(Ext.fx.Animation({
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'

        }));

        is_FloatPanel_QrCodeScanner_ScanCampaignOpen = 'N';
        RemovePages("FloatPanel_QrCodeScanner_ScanCampaignHide()");





        //is_FloatPanel_QrCodeScanner_ScanCampaignOpen = 'N';
        //RemovePages(_FloatPanel_QrCodeScanner_ScanCampaign, "is_FloatPanel_QrCodeScanner_ScanCampaignOpen");
      





//commented on 7/4/2024
        // var n = QRCodeResult.includes("Point");
        // if (n) {
           
        //     Scan_QRCode_VerifyQRCode_PointCampaign(QRCodeResult);
        // } else {
           
        //     Scan_QRCode_VerifyQRCode_StampCampaign(QRCodeResult);
        // }
        var text = QRCodeResult; 

        AppState.FloatPanel_QrCodeScanner_Scanned.QRCodeResult = QRCodeResult;
        AppState.FloatPanel_QrCodeScanner_Scanned.QRCodeResult_PageType = text.slice(-2);
        FloatPanel_ScannedMerchantShow();







//commented on 20/9/2025
        // var newString = text.slice(-2);

       
        // if(newString=="EP"){
        //     FloatPanel_QrCodeScanner_ScanCampaign_LoadEnterprisePage(QRCodeResult);
        // }
        // if(newString=="MC"){
        //   FloatPanel_QrCodeScanner_ScanCampaign_LoadMembershipCardPage(QRCodeResult);
        // }
        
     
        scanner.stop();


       

    });
    //Instascan.Camera.getCameras().then(function (cameras) {
    //    if (cameras.length > 0) {
    //        scanner.start(cameras[1]);
    //    } else {
    //        console.error('No cameras found.');
    //    }
    //}).catch(function (e) {
    //    console.error(e);
    //});

    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[1]);
        } else {
            console.error('No cameras found.');
        }
    }).then(function (e) {
        console.error(e);
    });
}



var is_FloatPanel_QrCodeScanner_ScanCampaignOpen = 'N';

function FloatPanel_QrCodeScanner_ScanCampaignHide() {
    scanner.stop();
    Ext.getCmp('mainView').setHidden(false);
    FloatPanel_QrCodeScanner_CenterLineMessageHide();
    if (is_FloatPanel_QrCodeScanner_ScanCampaignOpen == 'Y') {
        _FloatPanel_QrCodeScanner_ScanCampaign.hide();
        is_FloatPanel_QrCodeScanner_ScanCampaignOpen = 'N';
        RemovePages("FloatPanel_QrCodeScanner_ScanCampaignHide()");
        //comment on 02112022
        //window.QRScanner.destroy(function (status) {
         
        //});
       
    }

}


function FloatPanel_QrCodeScanner_ScanCampaign_LoadEnterprisePage(ContentQR){
  //  var string = ContentQR;
  LoadingPanelShow(getLoadingIcon(),'Loading....');
  var EnterpriseAccNo = ContentQR.substring(0, ContentQR.length-3);


  var task = Ext.create('Ext.util.DelayedTask', function () {
           
    var objn = {
        "EnterpriseAccNo": EnterpriseAccNo,           
    };
    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl_Web() + '/Enterprises/EnterprisesLoadByEnterpriseAccNoEnterprisePageMerchant',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
                globalLogin_EnterpriseEmail=data.results[0].ID;

                globalFloatPanelMerchantDetailPage_ID = data.results[0].ID;
                globalFloatPanelMerchantDetailPage_EnterpriseAccNo = data.results[0].EnterpriseAccNo;
                globalFloatPanelMerchantDetailPage_EnterpriseLogo = data.results[0].EnterpriseLogoPath;
                globalFloatPanelMerchantDetailPage_EnterpriseName = data.results[0].EnterpriseName;
                globalFloatPanelMerchantDetailPage_EnterpriseTagLine = data.results[0].EnterpriseTagLine;
                globalFloatPanel_MerchantDetailPage_EnterpriseFacebook = data.results[0].EnterpriseFacebook;
                globalFloatPanel_MerchantDetailPage_EnterpriseWebsite = data.results[0].EnterpriseWebsite;
                globalFloatPanel_MerchantDetailPage_EnterpriseInstagram = data.results[0].EnterpriseInstagram;
                globalFloatPanel_MerchantDetailPage_EnterpriseTikTok = data.results[0].EnterpriseTikTok;
                globalFloatPanelMerchantDetailPage_EnterpriseCoordinate = data.results[0].EnterpriseCoordinate;
                globalFloatPanelMerchantDetailPage_BusinessMode = data.results[0].BusinessMode;
                globalFloatPanelMerchantDetailPage_WhatsAppNo = data.results[0].PICContactNo;
                EnterpriseDescriptions = data.results[0].EnterpriseDescriptions;
                EnterprisePhoneNo= data.results[0].EnterprisePhoneNo;              
                NamaJalan=data.results[0].NamaJalan;
                Postkod=data.results[0].Postkod;
                Bandar=data.results[0].Bandar;
                Negeri=data.results[0].Negeri;


//alert(globalFloatPanelMerchantDetailPage_EnterpriseName)


FloatPanel_MerchantDetailPageShow(data.results[0].ID, data.results[0].EnterpriseAccNo, data.results[0].EnterpriseLogoPath,
data.results[0].EnterpriseName, data.results[0].EnterpriseTagLine,data.results[0].NamaJalan, data.results[0].Postkod,
data.results[0].Bandar,data.results[0].Negeri, data.results[0].EnterpriseCoordinate, data.results[0].EnterpriseDescriptions, 
data.results[0].EnterprisePhoneNo, data.results[0].PICContactNo, data.results[0].EnterpriseFacebook, data.results[0].EnterpriseWebsite,
data.results[0].EnterpriseInstagram, data.results[0].EnterpriseTikTok, data.results[0].BusinessMode
);




FloatPanel_QrCodeScanner_ScanCampaign_InsertScanActivity(ContentQR,EnterpriseAccNo,"Scan_EnterprisePage");














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




function FloatPanel_QrCodeScanner_ScanCampaign_LoadMembershipCardPage(ContentQR){
    //  var string = ContentQR;
    LoadingPanelShow(getLoadingIcon(),'Loading....');
    var result = ContentQR.substring(0, ContentQR.length-3);
  
   

        _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', result);
        _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseHQAccNo', result);
        _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getProxy().setExtraParam('AyohaUserAccountNo', GetCurrAyohaUserAccountNo());
        _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNo');
       // _DataStore_MembershipCardLoadByEnterpriseAccNoStore.load();
    


        _DataStore_MembershipCardLoadByEnterpriseAccNoStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                  //  alert('Store loaded successfully, total records: ' + records.length);
        
                    var count = parseInt(_DataStore_MembershipCardLoadByEnterpriseAccNoStore.getCount());
            
                    var Store = records[0]; // Access only the first record
                  //  var planCode = record.get('PaymentPlanCode');
                var isMembershipCardSubscribed=Store.get('isMembershipCardSubscribed');
                var MembershipCardCode=Store.get('MembershipCardCode');
                    if(records.length==1){
                       // var  Store = _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getAt(0);
                      //  FloatPanel_MembershipCardList_UpgradeShow_FromFloatPanel_MerchantDetailPage(Store.get('MembershipCardCode'), result, Store.get('isMembershipCardSubscribed'));
                      //  FloatPanel_MembershipCardList_UpgradeShow_FromFloatPanel_MerchantDetailPage(MembershipCardCode, result, isMembershipCardSubscribed);
                       
                       if(isMembershipCardSubscribed=='NO'){
                        FloatPanel_MembershipCardList_UpgradeShow_FromFloatPanel_MerchantDetailPage(MembershipCardCode,result,'NO');
                       }else{
                       // FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard_FromScannedQR(result, result, MembershipCardCode,isMembershipCardSubscribed);
                      //  FloatPanel_MembershipCardList_MyMembershipCardOpenMembershiCardDetail
                        FloatPanel_MembershipCardList_MyMembershipCardOpenMembershiCardDetail(result, result, MembershipCardCode,AppState.FloatPanel_QrCodeScanner_Scanned.MerchantTagline, 0);
                       }
                       
                       
                       
                    }
                    if(count>1){
        
                    }
                    FloatPanel_QrCodeScanner_ScanCampaign_InsertScanActivity(ContentQR,result,"Scan_MembershipCardPage");
                    // for (i = 0; i < count; i++) {
                    //   var  Store = _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getAt(i);
                    //     ArrFloatPanelMerchantDetailPage_MembershipCardCode.push(Store.get('MembershipCardCode'))
                    // }
                   
                    LoadingPanelHide();
                } else {
                    console.error('Failed to load store data or no record found.');
                    LoadingPanelHide();
                }
            }
        });














        // var task = Ext.create('Ext.util.DelayedTask', function () {
    
        //     var count = parseInt(_DataStore_MembershipCardLoadByEnterpriseAccNoStore.getCount());
            
        //     //alert(count);
        //     if(count==1){
        //         var  Store = _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getAt(0);
        //         FloatPanel_MembershipCardList_UpgradeShow_FromFloatPanel_MerchantDetailPage(Store.get('MembershipCardCode'), result, Store.get('isMembershipCardSubscribed'));
        //     }
        //     if(count>1){

        //     }
        //     FloatPanel_QrCodeScanner_ScanCampaign_InsertScanActivity(ContentQR,result,"Scan_MembershipCardPage");
        //     // for (i = 0; i < count; i++) {
        //     //   var  Store = _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getAt(i);
        //     //     ArrFloatPanelMerchantDetailPage_MembershipCardCode.push(Store.get('MembershipCardCode'))
        //     // }
    
          
           
        // });
        // task.delay(500);
    
    
        Ext.Viewport.setMasked(false);




















  
//     var task = Ext.create('Ext.util.DelayedTask', function () {
             
//       var objn = {
//           "EnterpriseAccNo": result,           
//       };
//       console.log(objn);
//       var _value = Ext.Ajax.request({
  
//           type: "POST",
  
//           url: GetAPIurl_Web() + '/Enterprises/EnterprisesLoadByEnterpriseAccNoEnterprisePageMerchant',
  
//           dataType: "json",
//           data: JSON.stringify(objn),
//           headers: {
//               "Content-Type": "application/json; charset=utf-8"
//           },
  
//           success: function (result, request) {
  
//               //console.log(result.responseText);
  
  
//               data = Ext.decode(result.responseText.trim());
  
//               if (data.success == "true") {
//                   globalLogin_EnterpriseEmail=data.results[0].ID;
  
//                   globalFloatPanelMerchantDetailPage_ID = data.results[0].ID;
//                   globalFloatPanelMerchantDetailPage_EnterpriseAccNo = data.results[0].EnterpriseAccNo;
//                   globalFloatPanelMerchantDetailPage_EnterpriseLogo = data.results[0].EnterpriseLogoPath;
//                   globalFloatPanelMerchantDetailPage_EnterpriseName = data.results[0].EnterpriseName;
//                   globalFloatPanelMerchantDetailPage_EnterpriseTagLine = data.results[0].EnterpriseTagLine;
//                   globalFloatPanel_MerchantDetailPage_EnterpriseFacebook = data.results[0].EnterpriseFacebook;
//                   globalFloatPanel_MerchantDetailPage_EnterpriseWebsite = data.results[0].EnterpriseWebsite;
//                   globalFloatPanel_MerchantDetailPage_EnterpriseInstagram = data.results[0].EnterpriseInstagram;
//                   globalFloatPanel_MerchantDetailPage_EnterpriseTikTok = data.results[0].EnterpriseTikTok;
//                   globalFloatPanelMerchantDetailPage_EnterpriseCoordinate = data.results[0].EnterpriseCoordinate;
//                   globalFloatPanelMerchantDetailPage_BusinessMode = data.results[0].BusinessMode;
//                   globalFloatPanelMerchantDetailPage_WhatsAppNo = data.results[0].PICContactNo;
//                   EnterpriseDescriptions = data.results[0].EnterpriseDescriptions;
//                   EnterprisePhoneNo= data.results[0].EnterprisePhoneNo;              
//                   NamaJalan=data.results[0].NamaJalan;
//                   Postkod=data.results[0].Postkod;
//                   Bandar=data.results[0].Bandar;
//                   Negeri=data.results[0].Negeri;
  
  
  
//   FloatPanel_MerchantDetailPageShow(data.results[0].ID, data.results[0].EnterpriseAccNo, data.results[0].EnterpriseLogoPath,
//   data.results[0].EnterpriseName, data.results[0].EnterpriseTagLine,data.results[0].NamaJalan, data.results[0].Postkod,
//   data.results[0].Bandar,data.results[0].Negeri, data.results[0].EnterpriseCoordinate, data.results[0].EnterpriseDescriptions, 
//   data.results[0].EnterprisePhoneNo, data.results[0].PICContactNo, data.results[0].EnterpriseFacebook, data.results[0].EnterpriseWebsite,
//   data.results[0].EnterpriseInstagram, data.results[0].EnterpriseTikTok, data.results[0].BusinessMode
//   );
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//               }
//               else {
  
//                   swalFireFail("Fail!-->" + result.responseText.trim());
//                   Ext.Viewport.unmask();
//                   LoadingPanelHide();
//               }
//               Ext.Viewport.unmask();
//               LoadingPanelHide();
  
//           },
  
//           failure: function (result, request) {
//               swalFireFail("Fail!");
//               Ext.Viewport.unmask();
//               LoadingPanelHide();
//           }
  
//       });
    
//       Ext.Viewport.unmask();
//   });
//   task.delay(500);
  
  }





  function FloatPanel_QrCodeScanner_ScanCampaign_InsertScanActivity(QrCodeString,EnterpriseAccNo,Activity){
    var task = Ext.create('Ext.util.DelayedTask', function () {
      
        var objn = {
            "SubscriberAccNo":GetCurrAyohaUserAccountNo(),
            "QrCodeString":QrCodeString,
            "EnterpriseAccNo": EnterpriseAccNo,
            "Activity":Activity           
        };
        console.log(objn);
        var _value = Ext.Ajax.request({
    
            type: "POST",
    
            url: GetAPIurl() + '/AyohaScanQrCodeActivity/AyohaScanQrCodeActivityInsertUpdate',
    
            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
    
            success: function (result, request) {
    
                //console.log(result.responseText);
    
    
                data = Ext.decode(result.responseText.trim());
    
                if (data.success == "true") {
              
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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