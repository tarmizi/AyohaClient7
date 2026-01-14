Ext.define('BuskartApp.view.AyohaeWallet.FloatPanel_AyohaeWallet_ScanAndPay_Upgrade', {

});





let scanner_eWallet;

var _FloatPanel_AyohaeWallet_ScanAndPay_Upgrade;

function FloatPanel_AyohaeWallet_ScanAndPay_Upgrade() {

    _FloatPanel_AyohaeWallet_ScanAndPay_Upgrade = Ext.create('Ext.Container',


        {

            id: 'FloatPanel_AyohaeWallet_ScanAndPay_UpgradeID',
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








            items: [
                {

                    xtype: 'container',
                    width: '100%',
                    docked: 'top',
                    height: 40,
                    // width: 40,

                    //  title: '<font size="3" color="white">Live Tracking Map</font>',
                    //hidden: true,

                    id: 'containerFloatPanel_AyohaeWallet_ScanAndPay_UpgradeHeader',
                    style: 'background-color:black',
                   // style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                    //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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
                                id: 'btnFloatPanel_AyohaeWallet_ScanAndPay_UpgradeBack',
                                height: 30,
                                width: 35,
                                margin: '0 0 0 10',
                                // iconCls: 'list',
                                html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                ui: 'plain',
                                handler: function () {
                                    scanner_eWallet.stop()
                                    Ext.getCmp('mainView').setHidden(false);
                                    FloatPanel_QrCodeScanner_CenterLineMessageHide();

                                    _FloatPanel_AyohaeWallet_ScanAndPay_Upgrade.hide(Ext.fx.Animation({
                                        type: 'slideOut',
                                        direction: 'left',
                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                        duration: 250

                                    }));
                                    // FloatPanel_AyohaeWallet_IconShow();
                                    is_FloatPanel_AyohaeWallet_ScanAndPay_UpgradeOpen = 'N';
                                    RemovePages("FloatPanel_AyohaeWallet_ScanAndPay_UpgradeHide()");
                                    FloatPanel_AyohaeWalletShow();
                                    //comment on 3112022
                                    //window.QRscanner_eWallet.destroy(function (status) {

                                    //});

                                }
                            },

                            {
                                xtype: 'spacer',


                            },

                            {
                                margin: '0 15 0 0',
                                id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_Upgrade_TitleHeaderTxt',
                                html: '<font size=2 color=white><b>Scan Ayoha QR Code</b></font>'
                            },


                            {
                                xtype: 'button',
                                id: 'btnFloatPanel_AyohaeWallet_ScanAndPay_Upgrade_CardIcon',
                                height: 30,
                                width: 35,
                                hidden: true,
                                // iconCls: 'list',
                                html: '<div ><img src="resources/icons/scanQRcodeGrey.png" width="25" height="20" alt="Company Name"></div>',
                                ui: 'plain',
                                handler: function () {
                                    scanner_eWallet.stop()
                                    Ext.getCmp('mainView').setHidden(false);
                                    FloatPanel_QrCodeScanner_CenterLineMessageHide();
                                    is_FloatPanel_AyohaeWallet_ScanAndPay_UpgradeOpen = 'N';
                                    // FloatPanel_AyohaeWallet_IconShow();
                                    _FloatPanel_AyohaeWallet_ScanAndPay_Upgrade.hide(Ext.fx.Animation({
                                        type: 'slideOut',
                                        direction: 'right',
                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                        duration: 250

                                    }));
                                    RemovePages("FloatPanel_AyohaeWallet_ScanAndPay_UpgradeHide()");

                                    //comment on 3/11/2022
                                    //window.QRscanner_eWallet.destroy(function (status) {

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
                            name: 'clickableContainerFloatPanel_AyohaeWallet_ScanAndPay_Upgrade',
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
                                    id: 'FloatPanel_AyohaeWallet_ScanAndPay_Upgrade_AyohaRewardLogo',
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
                            id: 'clickableContainerFloatPanel_AyohaeWallet_ScanAndPay_UpgradeID',
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
                            id: 'ContainerFloatPanel_AyohaeWallet_ScanAndPay_UpgradeIDBottom',
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

                    
                     html: '<video id="preview_scan_eWallet"></video>',
                     //handler: function () {

                     ////    FloatPanel_QrCodescanner_eWallet_ScanLoyaltyStampCardHide();

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
                    //style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [

                        {
                            html: '<div style="color:white;text-align: center;font-size:11px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;background-color:transparent" >Developed by BuskartApp Advanced Technology.</div>',
                            margin: '0 0 0 0',
                        },

                    ]

                },











            ],














        });

    return _FloatPanel_AyohaeWallet_ScanAndPay_Upgrade;
}



//function FloatPanel_AyohaeWallet_ScanAndPay_UpgradeShow_ORI() {
//    QRCodeResult = "";
//    Ext.Viewport.remove(_FloatPanel_AyohaeWallet_ScanAndPay_Upgrade);
//    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet_ScanAndPay_Upgrade());
//    this.overlay.show();
//    AddRoutePages("FloatPanel_AyohaeWallet_ScanAndPay_UpgradeHide()");
//    is_FloatPanel_AyohaeWallet_ScanAndPay_UpgradeOpen = 'Y';
//    FloatPanel_QrCodescanner_eWallet_CenterLineMessageShow();


//    var x = screen.width;
//    var y = screen.height;
//    var xx = x - 28;


//    if (y < 700) {
//        Ext.getCmp('FloatPanel_AyohaeWallet_ScanAndPay_Upgrade_AyohaRewardLogo').setHeight(130);
//        Ext.getCmp('FloatPanel_AyohaeWallet_ScanAndPay_Upgrade_AyohaRewardLogo').setWidth(130);
//        Ext.getCmp('FloatPanel_AyohaeWallet_ScanAndPay_Upgrade_AyohaRewardLogo').setHtml('<img src="resources/icons/Logo/LogoOrangeSimplifed.png" alt="Image" style="width:130px;height:130px;">');
//    }


//    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
//        Ext.getCmp('FloatPanel_AyohaeWallet_ScanAndPay_UpgradeID').setZIndex(400);
//    }


//}




function FloatPanel_AyohaeWallet_ScanAndPay_UpgradeShow() {
    QRCodeResult = "";
    Ext.Viewport.remove(_FloatPanel_AyohaeWallet_ScanAndPay_Upgrade);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet_ScanAndPay_Upgrade());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaeWallet_ScanAndPay_UpgradeHide()");
    is_FloatPanel_AyohaeWallet_ScanAndPay_UpgradeOpen = 'Y';
    //FloatPanel_QrCodescanner_eWallet_CenterLineMessageShow();
    FloatPanel_QrCodeScanner_CenterLineMessageShow();

    var x = screen.width;
    var y = screen.height;
    var xx = x - 28;


    if (y < 700) {
        Ext.getCmp('FloatPanel_AyohaeWallet_ScanAndPay_Upgrade_AyohaRewardLogo').setHeight(130);
        Ext.getCmp('FloatPanel_AyohaeWallet_ScanAndPay_Upgrade_AyohaRewardLogo').setWidth(130);
        Ext.getCmp('FloatPanel_AyohaeWallet_ScanAndPay_Upgrade_AyohaRewardLogo').setHtml('<img src="resources/icons/Logo/LogoOrangeSimplifed.png" alt="Image" style="width:130px;height:130px;">');
    }


    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
        Ext.getCmp('FloatPanel_AyohaeWallet_ScanAndPay_UpgradeID').setZIndex(400);
    }


    scanner_eWallet = new Instascan.Scanner({
        video: document.getElementById('preview_scan_eWallet'),
        mirror: false,
       
    });




    scanner_eWallet.addListener('scan', function (content) {

        QRCodeResult = content;
        var audio = new Audio();
        audio.src = 'https://setkita.com/AyohaSoundExternal/store-scanner_eWallet-beep.mp3';
        audio.play();



        scanner_eWallet.stop()
        Ext.getCmp('mainView').setHidden(false);
        FloatPanel_QrCodeScanner_CenterLineMessageHide();

        _FloatPanel_AyohaeWallet_ScanAndPay_Upgrade.hide(Ext.fx.Animation({
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'

        }));
        // FloatPanel_AyohaeWallet_IconShow();
        is_FloatPanel_AyohaeWallet_ScanAndPay_UpgradeOpen = 'N';
        RemovePages("FloatPanel_AyohaeWallet_ScanAndPay_UpgradeHide()");
        FloatPanel_AyohaeWalletShow();




        FloatPanel_AyohaeWallet_ScanAndPay_Payment_ProcessQRCode(QRCodeResult);

        scanner_eWallet.stop();




    });
    //Instascan.Camera.getCameras().then(function (cameras) {
    //    if (cameras.length > 0) {
    //        scanner_eWallet.start(cameras[1]);
    //    } else {
    //        console.error('No cameras found.');
    //    }
    //}).catch(function (e) {
    //    console.error(e);
    //});


    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner_eWallet.start(cameras[1]);
        } else {
            console.error('No cameras found.');
        }
    }).then(function (e) {
        console.error(e);
    });
}
var is_FloatPanel_AyohaeWallet_ScanAndPay_UpgradeOpen = 'N';

function FloatPanel_AyohaeWallet_ScanAndPay_UpgradeHide() {
    scanner_eWallet.stop();
    Ext.getCmp('mainView').setHidden(false);
    FloatPanel_QrCodeScanner_CenterLineMessageHide();
    if (is_FloatPanel_AyohaeWallet_ScanAndPay_UpgradeOpen == 'Y') {
        _FloatPanel_AyohaeWallet_ScanAndPay_Upgrade.hide();
        is_FloatPanel_AyohaeWallet_ScanAndPay_UpgradeOpen = 'N';
        RemovePages("FloatPanel_AyohaeWallet_ScanAndPay_UpgradeHide()");
        FloatPanel_AyohaeWalletShow();
        //comment on 03112022
        //window.QRscanner_eWallet.destroy(function (status) {
           
        //});
      
    }

}







