Ext.define('BuskartApp.view.Menu.FloatPanel_ScannedMerchant', {

});

var isFloatPanel_ScannedMerchantOpen = 'N';
var _FloatPanel_ScannedMerchant;


function FloatPanel_ScannedMerchant() {
    _FloatPanel_ScannedMerchant = 
    Ext.create('Ext.Container', {
        // Configuration for the floating panel behavior
        centered: true,
        modal: true,
        hideOnMaskTap: true,
        xtype: 'container',
        height: 500,
       //height: '70%',
      // height: '95%',
        width: '90%',
        
        // Custom base CSS class for easy styling
       // cls: 'scanned-merchant-panel',
        //style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
       style: 'background-color:white;border-radius: 20px;',
       // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 20px;',
        // Animations for showing and hiding
        showAnimation: { type: 'popIn', duration: 250, easing: 'ease-out' },
        hideAnimation: { type: 'popOut', duration: 250, easing: 'ease-in' },

        // Layout configuration
        layout: {
            type: 'vbox',
            pack: 'start', // Center items vertically
            align: 'center'
        },
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {

                        if (e.direction == "left") {
                            _FloatPanel_ScannedMerchant.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isFloatPanel_ScannedMerchantOpen = 'N';
                            RemovePages("FloatPanel_ScannedMerchant()");
                        } if (e.direction == "right") {
                            _FloatPanel_ScannedMerchant.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isFloatPanel_ScannedMerchantOpen = 'N';
                            RemovePages("FloatPanel_ScannedMerchant()");
                        }
                       
                    }
                });
            }
        },
        // All items inside the panel
        items: [

            {

                xtype: 'container',
                width: '100%',
                docked: 'top',
                style: 'background-color: transparent;',
                id: 'containerFloatPanel_ScannedMerchantHeader',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center',
                },
                items:
                     [
                    //                  {
                    //                      xtype: 'button',
                    //                      id: 'btnFloatPanel_ScannedMerchantBack',
                    //                      height: 30,
                    //                      width: 35,
                    //                      margin: '10 0 0 0',
                    //                      // iconCls: 'list',
                    //                      html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                    //                      ui: 'plain',
                    //                      handler: function () {
                    //                          RemovePages("FloatPanel_ScannedMerchantHide()");
                    //                          _FloatPanel_ScannedMerchant.hide(Ext.fx.Animation({
                    //                              type: 'slideOut',
                    //                              direction: 'left',
                    //                              easing: 'cubic-bezier(.7,0,.7,1)',
                    //                              duration: 250

                    //                          }));
                                            

                    //                      }
                    //                  },
                                    //  {
                                    //      xtype: 'spacer',

                                    //  },





                                     {
                                        xtype: 'container',
                                        margin: '5 0 0 0',
                                        width: 250,
                                       // hidden: true,
                                        height: 35,                    
                                       // cls: 'scanned-info-chip',
                                     //  style: 'background-color:transparent;border-radius: 20px 20px 20px 20px;',
                                      style: 'background: linear-gradient(135deg, rgba(238,130,238,0.5), rgba(255,182,193,0.5)); border-radius: 20px;  ',
                                       layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center',
                                    },
                                    items:[
                                        {
                                            // xtype: 'component',
                                            
                                            // html: 'Developed by versilani.ai technology 2025',
                                             html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;background-color:transparent;color:black">MERCHANT QR CODE VERIFIED !</div>'
                                            // cls: 'footer-dev-text'
                                         }
                                    ]
                                     }  ,
                                    //  {
                                    //     margin: '10 0 0 0',
                                    //     xtype: 'component',
                                    //     html: 'QR VERIFIED',
                                    //     cls: 'qr-verified-chip'
                                    // },
                                        
                                          {
                                              xtype: 'panel',
                                              width:5
                                          }

                       ]

            },

{
    xtype: 'container',
    height: 100,
    width: '100%',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center',
    },
    items:[

        {
            xtype: 'container',
            height: 100,
            width: '30%',
            style: 'background-color: transparent;',
           // style: 'background-image: url("resources/icons/Logo/LogoOrangeSimplifed.png"); background-size: 100% 100px;background-repeat: no-repeat;',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center',
            },
            items:[

                {
                    xtype: 'container',
                    height: 70,
                    width: '70%',
                    margin: '0 0 0 10',
                    style: 'background-color: white;border-radius: 50%;border: 1px solid #f0f0f0;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);',
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items:[
                        {
                            html: '<div style="width:50px;height:50px;' +
                            '                background:#fff;display:flex;align-items:center;justify-content:center;' +
                            '                flex:0 0 54px;overflow:hidden;">' +
                            '      <img id="imgFloatPanel_ScannedMerchant_Merchantlogo" src="resources/icons/Logo/LogoOrangeSimplifed.png"' +
                            '           alt="Merchant Logo"' +
                            '           style="width:50px;height:50px;object-fit:cover;border-radius: 50%;">' +
                            '    </div>' 
                        }
                    ]
                },
//                 {
//                     height: 60,
//                     width: '60%',
// html: '    <div style="width:54px;height:54px;' +
// '                background:#fff;display:flex;align-items:center;justify-content:center;' +
// '                flex:0 0 54px;overflow:hidden;">' +
// '      <img src="resources/icons/Logo/LogoOrangeSimplifed.png"' +
// '           alt="Merchant Logo"' +
// '           style="width:100%;height:100%;object-fit:cover;">' +
// '    </div>' 
//                 },
                // {
                //     xtype: 'container',
                //     height: 70,
                //     width: '70%',
                //   //  style: 'background-color: yellow;',
                //     style: 'background-image: url("resources/icons/Logo/LogoOrangeSimplifed.png"); background-size: 70% 70px;background-repeat: no-repeat;',
                   
                // }
            ]
        },
        {
            xtype: 'container',
            height: 100,
            width: '70%',
            style: 'background-color: transparent;',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'left',
            },
            items:[
{
    margin: '0 0 0 -6',
    id: 'htmlFloatPanel_ScannedMerchant_MerchantName',
    html: '<div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;background-color:transparent;color:black">Kopi Surat Cinta - Putrajaya</div>'
},
{
    xtype: 'container',
    height: 1,
    width: '80%',
    margin: '0 0 0 -6',
    style: 'background-color: grey;',
},
{ margin: '0 0 0 -6',
id: 'htmlFloatPanel_ScannedMerchant_MerchantTagLine',
    html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;background-color:transparent;color:black">Kopi kenangan lalu</div>'
}
            ]
        }
    ]

},


           
            {
                xtype: 'container',
                height: 10,
                width: '100%',
            },
            {
               // xtype: 'component',
               // html: 'Choose Your Action',
                html: '<div style="font-size:20px;font-weight:bold;background-color:transparent;color:black">Choose Your Action</div>'
              //  cls: 'action-title'
            },

            {
                xtype: 'container',
                height: 330,
                margin: '0 0 0 0',
                width: '100%',
                style: 'background-color: transparent;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center',
                },
                items: [

{
                xtype: 'container',
                height: 150,
                width: '100%',
                style: 'background-color: transparent;',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center',
                },
                items: [

{
    xtype: 'container',
    height: '100%',
    width: '50%',
    style: 'background-color: transparent;',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'right',
    },
    items:[
        {
            xtype: 'container',
            height: '80%',
            width: '80%',
            name: 'nameFloatPanel_ScannedMerchant_merchantContainer',
           // style:'background: linear-gradient(135deg, #f9d6f9 0%, #e3a8f5 100%);border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);',
            style: 'background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px;  box-shadow: 0 4px 12px rgba(0,0,0,0.1);',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center',
            },
            items:[
                {
                    margin: '20 0 0 0',
                    xtype: 'image',
                    src: 'resources/icons/Enterprisepage.png',
                    height: 32,
                width: 32,
                },
                {
                   margin: '5 0 0 0',
                    html: '<div style="display:flex;align-items:center;justify-content:center;height:100%;width:100%;font-size:12px;font-weight:bold;background:transparent;color:#000;">Merchant Page</div>',
                    height: 32,
                width: '100%',
                }
            ]
        }
    ]
},
{
xtype: 'spacer',
width: 10
},
{
    xtype: 'container',
    height: '100%',
    width: '50%',
    style: 'background-color: transparent;',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'left',
    },
    items:[
        {
            xtype: 'container',
            height: '80%',
            width: '80%',
            name: 'nameFloatPanel_ScannedMerchant_membershipCardContainer',
            //style:'background: linear-gradient(135deg, #f9d6f9 0%, #e3a8f5 100%);border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);',
            style: 'background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px;  box-shadow: 0 4px 12px rgba(0,0,0,0.1);',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center',
            },
            items:[
                { margin: '20 0 0 0',
                    xtype: 'image',
                    src: 'resources/icons/membershipPurpleThree.png',
                    height: 32,
                    width: 32,
                },
                {
                   margin: '5 0 0 0',
                    html: '<div style="display:flex;align-items:center;justify-content:center;height:100%;width:100%;font-size:12px;font-weight:bold;background:transparent;color:#000;">Membership Card</div>',
                    height: 32,
                width: '100%',
                }
            ]
        }
    ]
},

                ]
},






{
    xtype: 'container',
    height: 150,
    margin: '-20 0 0 0',
    width: '100%',
    style: 'background-color: transparent;',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center',
    },
    items: [

{
xtype: 'container',
height: '100%',
width: '50%',
style: 'background-color: transparent;',
layout: {
type: 'vbox',
pack: 'center',
align: 'right',
},
items:[
    {
        xtype: 'container',
        height: '80%',
        width: '80%',
        name: 'nameFloatPanel_ScannedMerchant_ayohaEwalletContainer',
       // style:'background: linear-gradient(135deg, #f9d6f9 0%, #e3a8f5 100%);border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);',
        style: 'background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px;  box-shadow: 0 4px 12px rgba(0,0,0,0.1);',
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center',
        },
        items:[
            { margin: '20 0 0 0',
                xtype: 'image',
                src: 'resources/icons/ayohaewallet01.png',
                height: 32,
                width: 32,
            }
            ,
            {
                margin: '6 0 0 0',
                height: 44, // give space for 2 lines; use 32 if you want 1 line only
                width: '100%',
                html: `
                <div style="height:100%;width:100%;display:flex;align-items:center;justify-content:center;padding:0 8px;">
                  <div style="
                    text-align:center;
                    font-size:12px; font-weight:bold; line-height:1.25;
                    max-width:100%;
                    display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:2;
                    overflow:hidden; text-overflow:ellipsis;
                    word-break:break-word; hyphens:auto;
                    color:#000;">
                    Make Payment (Ayoha eWallet)
                  </div>
                </div>`
              }
            // ,
            //     {
            //        margin: '5 0 0 0',
            //         html: '<div style="display:flex;align-items:center;justify-content:center;height:100%;width:100%;font-size:12px;font-weight:bold;background:transparent;color:#000;">Make Payment(Ayoha eWallet)</div>',
            //         height: 32,
            //     width: '100%',
            //     }
        ]
    }
]
},
{
    xtype: 'spacer',
    width: 10
    },
{
xtype: 'container',
height: '100%',
width: '50%',
style: 'background-color: transparent;',
layout: {
type: 'vbox',
pack: 'center',
align: 'left',
},
items:[
    {
        xtype: 'container',
        height: '80%',
        width: '80%',
        name: 'nameFloatPanel_ScannedMerchant_reviewContainer',
        //style:'background: linear-gradient(135deg, #f9d6f9 0%, #e3a8f5 100%);border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);',
        style: 'background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px;  box-shadow: 0 4px 12px rgba(0,0,0,0.1);',
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center',
        },
        items:[
            {margin: '20 0 0 0',
                xtype: 'image',
                src: 'resources/icons/newreviewcomment.svg',
                height: 32,
                width: 32,
            },
            {
               margin: '5 0 0 0',
                html: '<div style="display:flex;align-items:center;justify-content:center;height:100%;width:100%;font-size:12px;font-weight:bold;background:transparent;color:#000;">Review&Comment</div>',
                height: 32,
            width: '100%',
            }
        ]
    }
]
},

    ]
},




{

    xtype: 'container',
    width: '100%',
    margin: '0 0 0 0',
   // hidden: true,
    height: 40,
   // docked: 'bottom',
   // cls: 'scanned-info-chip',
   style: ' background-color: transparent;',
    id: 'containerFloatPanel_ScannedMerchantInfoChip',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center',
    },
    items:
           [
                 {
                    xtype: 'container',
                    width: '80%',
                   // hidden: true,
                    height: 40,                    
                   // cls: 'scanned-info-chip',
                   style: 'background-color:transparent;border-radius: 20px 20px 20px 20px;',
                  // style: 'background: linear-gradient(135deg, rgba(238,130,238,0.5), rgba(255,182,193,0.5)); border-radius: 20px;  ',
                   layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center',
                },
                items:[
                    {
                        // xtype: 'component',
                        
                        // html: 'Developed by versilani.ai technology 2025',
                        id: 'htmlFloatPanel_ScannedMerchant_ScannedMerchantName',
                         html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;background-color:transparent;color:black"><span style=color:purple;font-size:14px;font-weight:bold>#Scanned :</span>Kopi Surat Cinta - Putrajaya</div>'
                        // cls: 'footer-dev-text'
                     }
                ]
                 }      
           
           ]

},





                    
                ]
            },

// {
//     xtype: 'container',
//     width: '100%',
//     height: 20,
//     style: ' background-color: transparent;',
//     layout: {
//         type: 'hbox',
//         pack: 'center',
//         align: 'center',
//     },
//     items:[
//         {
//             xtype: 'component',
//             html: '<font color="purple">#Scanned:</font> Surat Cinta Café',
//             cls: 'scanned-info-chip'
//         },
//     ]
// },
           
          

            {

                xtype: 'container',
                width: '100%',
             hidden: true,
                height: 20,
                docked: 'bottom',
                //cls: 'scanned-info-chip',
                style: ' background-color: transparent;',
                id: 'containerFloatPanel_ScannedMerchantFooter',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center',
                },
                items:
                       [
                                   
                        {
                           // xtype: 'component',
                            margin: '0 0 0 0',
                           // html: 'Developed by versilani.ai technology 2025',
                            html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;background-color:transparent;color:black">Developed by Versilani.ai 2025</div>'
                           // cls: 'footer-dev-text'
                        }
                       ]

            },
            
        ]
    });
    return _FloatPanel_ScannedMerchant;

}



  

function FloatPanel_ScannedMerchantShow() {
    Ext.Viewport.remove(_FloatPanel_ScannedMerchant);
    this.overlay = Ext.Viewport.add(FloatPanel_ScannedMerchant());
    this.overlay.show();
    isFloatPanel_ScannedMerchantOpen = 'Y';





    var containerViewnameFloatPanel_ScannedMerchant_merchantContainer = Ext.ComponentQuery.query('container[name=nameFloatPanel_ScannedMerchant_merchantContainer]')[0];
    var containerViewElnameFloatPanel_ScannedMerchant_merchantContainer = containerViewnameFloatPanel_ScannedMerchant_merchantContainer.element;
    containerViewElnameFloatPanel_ScannedMerchant_merchantContainer.on('tap',
      function (event, node, options, eOpts) {
          
        FloatPanel_QrCodeScanner_ScanCampaign_LoadEnterprisePage(AppState.FloatPanel_QrCodeScanner_Scanned.QRCodeResult);
       // FloatPanel_ScannedMerchantHide();



    }
    );




    var containerViewnameFloatPanel_ScannedMerchant_membershipCardContainer = Ext.ComponentQuery.query('container[name=nameFloatPanel_ScannedMerchant_membershipCardContainer]')[0];
    var containerViewElnameFloatPanel_ScannedMerchant_membershipCardContainer = containerViewnameFloatPanel_ScannedMerchant_membershipCardContainer.element;
    containerViewElnameFloatPanel_ScannedMerchant_membershipCardContainer.on('tap',
      function (event, node, options, eOpts) {
        FloatPanel_QrCodeScanner_ScanCampaign_LoadMembershipCardPage(AppState.FloatPanel_QrCodeScanner_Scanned.QRCodeResult);
       // FloatPanel_ScannedMerchantHide();
      }
    );



    var containerViewnameFloatPanel_ScannedMerchant_ayohaEwalletContainer = Ext.ComponentQuery.query('container[name=nameFloatPanel_ScannedMerchant_ayohaEwalletContainer]')[0];
    var containerViewElnameFloatPanel_ScannedMerchant_ayohaEwalletContainer = containerViewnameFloatPanel_ScannedMerchant_ayohaEwalletContainer.element;
    containerViewElnameFloatPanel_ScannedMerchant_ayohaEwalletContainer.on('tap',
      function (event, node, options, eOpts) {
          
        FloatPanel_AyohaeWallet_ScanAndPay_Payment_ProcessQRCode(AppState.FloatPanel_QrCodeScanner_Scanned.QRCodeResult);
        // FloatPanel_AyohaeWallet_ScanAndPay_UpgradeShow(); 
        // Ext.getCmp('mainView').setHidden(true);
        // FloatPanel_AyohaeWalletHide();
      }
    );




    var containerViewnameFloatPanel_ScannedMerchant_reviewContainer = Ext.ComponentQuery.query('container[name=nameFloatPanel_ScannedMerchant_reviewContainer]')[0];
    var containerViewElnameFloatPanel_ScannedMerchant_reviewContainer = containerViewnameFloatPanel_ScannedMerchant_reviewContainer.element;
    containerViewElnameFloatPanel_ScannedMerchant_reviewContainer.on('tap',
      function (event, node, options, eOpts) {
          
        FloatPanelMerchantDetailPage_OpenMerchantReview();
      }
    );


    FloatPanel_ScannedMerchant_EnterprisesLoadByEnterpriseAccNoScannedQR();

}

function FloatPanel_ScannedMerchantHide() {

    if (isFloatPanel_ScannedMerchantOpen == 'Y') {
      
        _FloatPanel_ScannedMerchant.hide();
        isFloatPanel_ScannedMerchantOpen = 'N';
        RemovePages("FloatPanel_ScannedMerchantHide()");
    }

 
}




function FloatPanel_ScannedMerchant_EnterprisesLoadByEnterpriseAccNoScannedQR() {
  


    var ContentQR = AppState.FloatPanel_QrCodeScanner_Scanned.QRCodeResult;
    var result = ContentQR.substring(0, ContentQR.length-3);

    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "EnterpriseAccNo": result
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseAccNoScannedQR',

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

                        AppState.FloatPanel_QrCodeScanner_Scanned.MerchantTagline= data.results[0].EnterpriseTagLine;
                        AppState.FloatPanel_QrCodeScanner_Scanned.EnterpriseAddress= data.results[0].EnterpriseAddress;
                       
                        globalFloatPanelMerchantDetailPage_EnterpriseAccNo=data.results[0].EnterpriseAccNo;
                        globalFloatPanelMerchantDetailPage_EnterpriseLogo= data.results[0].EnterpriseLogoPath;
                        globalFloatPanelMerchantDetailPage_EnterpriseName= data.results[0].EnterpriseName;
                       // globalEnterpriseAccNo_AyohaMerchantReview=result;
                       
                        const img = document.getElementById('imgFloatPanel_ScannedMerchant_Merchantlogo');

                        // Tukar src / alt / style
                        if (img) {
                          img.src = data.results[0].EnterpriseLogoPath;
                        
                        }
                        Ext.getCmp('htmlFloatPanel_ScannedMerchant_MerchantName').setHtml('<div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;background-color:transparent;color:black">'+data.results[0].EnterpriseName+'</div>');
                        Ext.getCmp('htmlFloatPanel_ScannedMerchant_MerchantTagLine').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;background-color:transparent;color:black">'+data.results[0].EnterpriseTagLine+'</div>');
                        Ext.getCmp('htmlFloatPanel_ScannedMerchant_ScannedMerchantName').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;background-color:transparent;color:black"><span style=color:purple;font-size:12px;font-weight:bold>#Scanned :</span>'+AppState.FloatPanel_QrCodeScanner_Scanned.QRCodeResult+'</div>');

                       
                    
                        


                     
                      
                      
                      
                      
                      
                      LoadingPanelHide();




                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {
                        FloatPanel_ScannedMerchantHide();
                        Ext.Viewport.unmask();

                    }





                }
                else {
                    FloatPanel_ScannedMerchantHide();

                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
                FloatPanel_ScannedMerchantHide();
            }

        });



    });

    //  Ext.Viewport.unmask();

    //   setDashBoardMerchantReviewRate(FiveStar, FourStar, ThreeStar, TwoStar, OneStar);
    task.delay(500);
}