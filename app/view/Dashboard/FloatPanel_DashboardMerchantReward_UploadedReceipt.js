Ext.define('BuskartApp.view.Dashboard.FloatPanel_DashboardMerchantReward_UploadedReceipt', {

});




var is_FloatPanel_DashboardMerchantReward_UploadedReceiptOpen = "N";


var _FloatPanel_DashboardMerchantReward_UploadedReceipt=null;


function FloatPanel_DashboardMerchantReward_UploadedReceiptCreateIfNeeded() {
    if (_FloatPanel_DashboardMerchantReward_UploadedReceipt && !_FloatPanel_DashboardMerchantReward_UploadedReceipt.destroyed) return;

    _FloatPanel_DashboardMerchantReward_UploadedReceipt = Ext.create('Ext.Container',


    {
        id: 'FloatPanel_DashboardMerchantReward_UploadedReceiptID',
       // name: 'clickableContainerFloatPanel_DashboardMerchantReward_UploadedReceipt',
        zIndex: 66,
        floated: true,
        centered: true,
        fullscreen: true,
        closeAction: 'hide',
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
        style: 'background-color:white;',           
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
                height: ayoha_HeaderHeight(),
                style:ayohaThemeColor_Header(),


                id: 'containeFloatPanel_DashboardMerchantReward_UploadedReceiptHeader',
              
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
                                         id: 'btnFloatPanel_DashboardMerchantReward_UploadedReceiptBack',
                                         height: 30,
                                         width: 65,
                                         margin: '0 0 0 10',
                                         // iconCls: 'list',
                                         html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                           // _FloatPanel_DashboardMerchantReward_UploadedReceipt.hide();
                                            FloatPanel_DashboardMerchantReward_UploadedReceiptHide(false);
                                         }
                                     },

                                      {
                                          xtype: 'spacer',

                                      },


                                      {
                                          margin: '0 15 0 0',
                                          id: 'htmlFloatPanel_DashboardMerchantReward_UploadedReceipt_TitleHeaderTxt',
                                        //  html: '<font size=2 color=black><b>Uploaded Receipt</b></font>'
                                          html:ayohaTheme_HeaderText('Uploaded Receipt'),
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
                                  //   xtype: 'pinchzoomimage',
                                     xtype: 'image',
                                     src: 'resources/icons/selfieIcon.png',
                                     width: '100%',
                                     height: 600,
                                    // indicators: false,
                                     mode: 'image',
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

       





    });
}













//function FloatPanel_DashboardMerchantReward_UploadedReceiptShow(VoucherName, VoucherImage, VoucherEndDate, VoucherDayLeft, VoucherCode, VoucherAmount) {
function FloatPanel_DashboardMerchantReward_UploadedReceiptShow() {
 

// alert(globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage)
// const win = window.open(globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage, '_blank', 'noopener,noreferrer');
// if (!win) window.location.assign(url);

// return;
    FloatPanel_DashboardMerchantReward_UploadedReceiptCreateIfNeeded();


    _FloatPanel_DashboardMerchantReward_UploadedReceipt.show();
    // ✅ push browser back (ikut style kau)
    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
      AyohaBrowserBack.push('FloatPanel_DashboardMerchantReward_UploadedReceipt', function () {
     
        FloatPanel_DashboardMerchantReward_UploadedReceiptHide(true);
      });
    }
   







    if (isFloatPanel_MembershipCardList_UpgradeOpen=="Y"){
        
        
        Ext.getCmp('FloatPanel_DashboardMerchantReward_UploadedReceiptID').setZIndex(80);
    }
    is_FloatPanel_DashboardMerchantReward_UploadedReceiptOpen = 'Y';
    var _innerHeight = parseInt(window.innerHeight) - 90;
    Ext.getCmp('ContainerFloatPanel_DashboardMerchantReward_UploadedReceiptImage').setHeight(_innerHeight);
    Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_UploadedReceiptImage').setHeight(_innerHeight);
    Ext.getCmp('htmlFloatPanel_DashboardMerchantReward_UploadedReceiptImage').setSrc(globalFloatPanel_DashboardMerchantReward_MembershipContestSelfieForm_UploadReceiptImage);
    
    
}



function FloatPanel_DashboardMerchantReward_UploadedReceiptHidebARU(fromBack, animCfg) {

    console.log('[ReceiptHide] open=', is_FloatPanel_DashboardMerchantReward_UploadedReceiptOpen);
  
    var pnl = _FloatPanel_DashboardMerchantReward_UploadedReceipt
           || Ext.getCmp('FloatPanel_DashboardMerchantReward_UploadedReceiptID');
  
    if (!pnl || pnl.destroyed) {
      is_FloatPanel_DashboardMerchantReward_UploadedReceiptOpen = 'N';
      return;
    }
  
    if (is_FloatPanel_DashboardMerchantReward_UploadedReceiptOpen !== 'Y') return;
  
    // ✅ set state dulu (elak recursion kalau AyohaBrowserBack.close trigger callback)
    is_FloatPanel_DashboardMerchantReward_UploadedReceiptOpen = 'N';
  
    // ✅ hide sekali sahaja
    if (animCfg) {
      pnl.hide(animCfg);           // ExtJS modern biasanya accept object terus
    } else {
      pnl.hide();
    }
  
    // ✅ sync history LAST (atau test, tengok note bawah)
    if (fromBack !== true && window.AyohaBrowserBack && AyohaBrowserBack.close) {
      AyohaBrowserBack.close('FloatPanel_DashboardMerchantReward_UploadedReceipt');
    }
  }
  

function FloatPanel_DashboardMerchantReward_UploadedReceiptHide(fromBack,animCfg) {

     
    if (is_FloatPanel_DashboardMerchantReward_UploadedReceiptOpen == 'Y') {
       
        _FloatPanel_DashboardMerchantReward_UploadedReceipt.hide();

        if (animCfg) {
            _FloatPanel_DashboardMerchantReward_UploadedReceipt.hide(Ext.fx.Animation(animCfg));
          } else {
            _FloatPanel_DashboardMerchantReward_UploadedReceipt.hide();
          }
          is_FloatPanel_DashboardMerchantReward_UploadedReceiptOpen = 'N';
         
        
          // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
          if (fromBack !== true) {
            AyohaBrowserBack.close('FloatPanel_DashboardMerchantReward_UploadedReceipt');
          }
    }

}


