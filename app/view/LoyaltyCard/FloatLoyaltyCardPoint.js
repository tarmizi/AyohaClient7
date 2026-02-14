


Ext.define('BuskartApp.view.LoyaltyCard.FloatLoyaltyCardPoint', {

});


var _FloatLoyaltyCardPoint=null;


var isFloatLoyaltyCardPointOpen = 'N';



var _FloatLoyaltyCardPoint_isFirstLoad = "N";

var globalFloatLoyaltyCardPointCarouselIndex=0;


function FloatLoyaltyCardPointCreateIfNeeded() {
    if (_FloatLoyaltyCardPoint && !_FloatLoyaltyCardPoint.destroyed) return;
    _FloatLoyaltyCardPoint =

    Ext.create('Ext.Container', {
        floated: true,
        centered: true,
        fullscreen: true,            // ✅ ganti height/width 100%
        closeAction: 'hide',
        draggable: false,
        modal: false,
        id: 'LoadingFloatLoyaltyCardPointID',
        zIndex: 200,
        styleHtmlContent: true,
        layout: 'fit',
        style: ayohaThemeColor_Hero(),
      
        showAnimation: {
          type: 'popIn',
          duration: 250,
          easing: 'ease-out'
        },
        hideAnimation: {
          type: 'popOut',
          duration: 250
        },
      
        listeners: {
          beforehide: function () {
            return true;
          }
        },
      
        items: [
          // =========================================================
          // WRAPPER (FULLSCREEN)
          // =========================================================
          {
            xtype: 'container',
            width: '100%',
            height: '100%',
            style: 'background-color: transparent;',
            layout: { type: 'fit' },
      
            items: [


 // =========================================================
                  // HEADER BAR (BACK + TITLE + AVATAR)
                  // =========================================================
                  {
                    xtype: 'container',
                    id: 'containerFloatLoyaltyCardPointHeader',
                    width: '100%',
                    docked:'top',
                    style: { background: 'transparent' },
                    layout: {
                      type: 'hbox',
                      pack: 'center',
                      align: 'center'
                    },
      
                    items: [
                      // BACK
                      {
                        xtype: 'button',
                        id: 'btnFloatLoyaltyCardPointBack',
                        height: 30,
                        width: 65,
                        html: '<div><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                        ui: 'plain',
                        handler: function () {
                          FloatLoyaltyCardPointHide(false);
                        }
                      },
      
                      { xtype: 'spacer' },
      
                      // TITLE BLOCK
                      {
                        xtype: 'container',
                        id: 'containerFloatLoyaltyCardPointTitle',
                        margin: '0 -18 0 0',
                        height: 25,
                        width: 135,
                        style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;',
                        layout: { type: 'vbox', pack: 'center', align: 'center' },
      
                        items: [
                          {
                            margin: '3 0 0 0',
                            id: 'htmlFloatLoyaltyCardPointPointTitle',
                            html: '<div style="width:130px;border-radius: 10px 0px 0px 10px;background-color: white;text-align:center;border: 1px solid grey;font-size: 11px;font-weight:bold;color:black;height:20px">Azrina Bt Rahim</div>'
                          },
                          {
                            margin: '-3 0 0 0',
                            id: 'htmlFloatLoyaltyCardPointisExpired',
                            html: '<div class="blink_me" style="width:100px;border-radius: 10px 10px 10px 10px;background-color: white;text-align:center;border: 1px solid red;font-size: 9px;font-weight:bold;color:red;height:15px">Campaign Expired!</div>',
                            hidden: true
                          },
      
                          // NFC BLOCK (Hidden)
                          {
                            xtype: 'container',
                            id: 'containerFloatLoyaltyCardPoint_PointIconImg',
                            hidden: true,
                            style: 'background-color: transparent;',
                            height: 25,
                            width: 100,
                            layout: { type: 'hbox', pack: 'left', align: 'left' },
      
                            items: [
                              {
                                xtype: 'button',
                                id: 'btnFloatLoyaltyCardPointNFCSign',
                                hidden: true,
                                margin: '7 0 0 8',
                                height: 30,
                                width: 65,
                                html: '<div class="blink_me"><img src="resources/icons/nfc-sign.png" width="25" height="20" alt="Company Name"></div>',
                                ui: 'plain',
                                handler: function () { }
                              },
                              {
                                xtype: 'button',
                                id: 'btnFloatLoyaltyCardPointNFC',
                                hidden: true,
                                margin: '7 0 0 2',
                                height: 30,
                                width: 100,
                                html: '<div class="blink_me" style="color:white;text-align: left;font-size:16px;width:100%;font-weight:bold;margin:-1px 0px 0px -8px" >NFC</div>',
                                ui: 'plain',
                                handler: function () { }
                              }
                            ]
                          }
                        ]
                      },
      
                      // AVATAR (RIGHT)
                      {
                        xtype: 'container',
                        id: 'containerFloatLoyaltyCardPointPicture',
                        margin: '1 0 0 0',
                        height: 40,
                        width: 70,
                        style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;border-radius: 0px 0px 0px 0px;',
                        layout: { type: 'hbox', pack: 'right', align: 'right' },
      
                        items: [
                          {
                            xtype: 'button',
                            id: 'btnFloatLoyaltyCardPoint_PointIcon',
                            height: 40,
                            width: 70,
                            margin: '0 0 0 0',
                            html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/hawa.jpg"  style="width: 30px; height: 30px; border:1px solid grey; border-radius: 50%;  margin:-1px 0px 0px 0px"></div>',
                            ui: 'plain',
                            handler: function () {
                              FloatLoyaltyCardPointHide(false);
                            }
                          }
                        ]
                      }
                    ]
                  },




              // =========================================================
              // MAIN STACK (VBOX)
              // =========================================================
              {
                xtype: 'container',
                width: '100%',
                layout: {
                  type: 'vbox',
                  pack: 'start',
                  align: 'center'
                },
      
                items: [
                 
      
                  // =========================================================
                  // HERO (LOGO + ENTERPRISE + CAMPAIGN + POINTS)
                  // =========================================================
                  {
                    xtype: 'container',
                    margin: '0 0 0 0',
                    width: '100%',
                    style: 'background-color: transparent',
                    layout: { type: 'vbox', pack: 'center', align: 'center' },
      
                    items: [
                      // Logo + Enterprise Name
                      {
                        xtype: 'container',
                        width: '100%',
                        height: 130,
                        layout: { type: 'vbox', pack: 'center', align: 'center' },
      
                        items: [
                          {
                            margin: '0 0 0 25',
                            height: 100,
                            width: 130,
                            id: 'htmlFloatLoyaltyCardPoint_Logo',
                          
                            html: '<img src="resources/icons/ccrlogo.png" width="130" height="130"/>'
                          },
                          {
                            xtype: 'container',
                            width: '100%',
                            layout: { type: 'vbox', pack: 'center', align: 'center' },
      
                            items: [
                              {
                                margin: '5 0 0 0',
                                id: 'htmlFloatLoyaltyCardPoint_EnterpriseName',
                                html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 16px;font-weight:bold;width:100%;" >Community Coffee Roastes Sdn Bhd</div>'
                              },
                              {
                                xtype: 'container',
                                style: 'background-color: white;border-bottom:1px solid white;',
                                height: 1,
                                width: '85%',
                                margin: '2 0 0 0'
                              }
                            ]
                          }
                        ]
                      },
      
                      // Campaign Info
                      {
                        xtype: 'container',
                        id: 'containerFloatLoyaltyCardPoint',
                        width: '100%',
                        style: 'background-color:transparent;',
                        layout: { type: 'vbox', pack: 'start', align: 'center' },
      
                        items: [
                          {
                            margin: '-5 0 0 0',
                            id: 'htmlFloatLoyaltyCardPoint_CampaignName',
                            html: '<font size=2 color=white><b>Ramadhan 2021!</b></font>'
                          },
                          {
                            margin: '-5 0 0 0',
                            id: 'htmlFloatLoyaltyCardPoint_CampaignEndDate',
                            html: '<font size=1 color=white>Campaign End Date:13/08/2022</font>'
                          },
      
                          // Stamp bottom placeholder (hidden)
                          {
                            xtype: 'container',
                            id: 'containerLoyaltyCardStampbottom',
                            hidden: true,
                            style: 'background-color: transparent',
                            layout: { type: 'vbox', pack: 'center', align: 'center' },
                            items: []
                          }
                        ]
                      },
      
                      // Points Summary
                      {
                        xtype: 'container',
                        height: 60,
                        width: '90%',
                        margin: '5 0 0 0',
                        style: { background: 'transparent' },
                        layout: { type: 'vbox', pack: 'center', align: 'center' },
      
                        items: [
                          {
                            margin: '-14 0 0 0',
                            id: 'htmlFloatLoyaltyCardPoint_SumPoint',
                            html: '<font size="15" color="white"><b>0</b></font>'
                          },
                          {
                            margin: '-10 0 0 0',
                            id: 'htmlFloatLoyaltyCardPoint_MerchantPointTxt',
                            html: '<font size=2 color=white><b>Merchant Points(MP)</b></font>'
                          },
      
                          // Redeem button block (hidden)
                          {
                            xtype: 'container',
                            hidden: true,
                            width: '100%',
                            margin: '-65 0 0 -7',
                            style: { background: 'transparent' },
                            layout: { type: 'hbox', pack: 'right', align: 'right' },
      
                            items: [
                              {
                                xtype: 'container',
                                width: '100%',
                                margin: '-2 0 0 0',
                                style: { background: 'transparent' },
                                layout: { type: 'vbox', pack: 'right', align: 'right' },
      
                                items: [
                                  {
                                    xtype: 'button',
                                    id: 'btnRedeem_FloatLoyaltyCardPoint',
                                    margin: '-5 15 0 0',
                                    height: 55,
                                    width: 55,
                                    html: '<div class="blink_me"><img src="resources/icons/gift-hearts-icon.png" width="45" height="45" alt="Company Name"></div>',
                                    ui: 'plain',
                                    handler: function () {
                                      LoyaltyCardRedeemListShow();
                                    }
                                  },
                                  {
                                    margin: '-11 15 0 0',
                                    id: 'htmlBtnFloatLoyaltyCardPointRedeem',
                                    html: '<button OnClick="LoyaltyCardRedeemListShow()" class="buttonLoyaltyCardPointRedeem">Redeem</button>'
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
      
                      {
                        xtype: 'container',
                        id: 'container_pointspacer',
                        width: '100%',
                        height: 5
                      }
                    ]
                  },
      
                  // =========================================================
                  // MASTER HEADER (Redeem Prize)
                  // =========================================================
                  {
                    xtype: 'container',
                    id: 'containerFloatLoyaltyCardPointMasterHeader',
                    width: '100%',
                    height: 25,
                    style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                    layout: { type: 'hbox', pack: 'left', align: 'left' },
      
                    items: [
                      {
                        width: 20,
                        height: 20,
                        margin: '0 0 0 8',
                        id: 'htmlFloatLoyaltyCardPointMasterHeaderIcon',
                        html: '<img src="resources/icons/AyohaStorePurple.png" width="20" height="20" alt="Company Name">'
                      },
                      {
                        margin: '0 0 0 5',
                        id: 'htmlFloatLoyaltyCardPointMasterHeaderTxt',
                        html: '<font size=2 color=black>Redeem Perks</font>'
                      }
                    ]
                  },
      
                  // =========================================================
                  // CONTENT (CAROUSEL + LISTS)
                  // =========================================================
                  {
                    xtype: 'container',
                    id: 'ContainerpanelFloatLoyaltyCardPoint',
                    style: 'background-color: transparent;',
                    //zIndex: 90,
                    height:'100%',
                    width: '100%',
                    layout: { type: 'vbox', pack: 'center', align: 'center' },
      
                    items: [
                      {
                        xtype: 'carousel',
                        id: 'carouselFloatLoyaltyCardPoint',
                        style: 'background-color:white',
                        width: '100%',
                        height: '100%',
                        indicator: false,
                        margin: '0 0 0 0',
      
                        listeners: {
                          activeitemchange: function (container, newCard, oldCard, index) {
                            globalFloatLoyaltyCardPointCarouselIndex = container.getActiveIndex();
      
                            if (_FloatLoyaltyCardPoint_isFirstLoad == "Y") {
                              console.log("activeitemchange");
                              console.log("isFloatLoyaltyCardPointOpen:" + isFloatLoyaltyCardPointOpen);
                              if (isFloatLoyaltyCardPointOpen == 'Y') {
                                FloatLoyaltyCardPoint_MoveCarousel(globalFloatLoyaltyCardPointCarouselIndex);
                                return;
                              }
                            }
                          }
                        },
      
                        items: [
                          // -----------------------------------------------------
                          // 0) Redeem Items
                          // -----------------------------------------------------
                          {
                            xtype: 'container',
                            id: 'carouselFloatLoyaltyCardPoint_RedeemItem',
                            style: ' background-color: transparent',
                            height: '100%',
                            width: '100%',
                            layout: { type: 'vbox', pack: 'start', align: 'left' },
      
                            items: [
                              {
                                xtype: 'list',
                                id: 'List_FloatLoyaltyCardPoint_RedeemPrize',
                                height: '100%',
                                width: '100%',
                                store: _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore,
                                style: 'background-color:rgba(255,255,255, 0.9);border-radius: 0px;',
                                mode: 'SINGLE',
                                disableSelection: true,
                              
                                scrollable: {
                                  direction: 'vertical',
                                  indicators: {
                                    y: { autoHide: true },
                                    x: { autoHide: true }
                                  }
                                },
                              
                                // ✅ EMPTY LIST MESSAGE
                                deferEmptyText: false,
                                emptyText:
                                  '<div class="ayohaEmptyWrap">' +
                                    '<div class="ayohaEmptyCard">' +
                                      '<div class="ayohaEmptyIcon">' +
                                        '<img src="resources/icons/Logo/icon_ayoha_gradient_vertical.png" style="width:44px;height:44px;" />' +
                                      '</div>' +
                                      '<div class="ayohaEmptyTitle">No Redeem Items Yet</div>' +
                                      '<div class="ayohaEmptyDesc">This campaign doesn’t have any redeemable perks right now. Please check again later.</div>' +
                                    '</div>' +
                                  '</div>',
                              
                                itemTpl:
                                  '<div class="myContent redeemItemWrap">' +
                                    '<table class="redeemItemTable" style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:0;">' +
                              
                                      '<tr>' +
                                        '<th style="font-family:Arial,sans-serif;font-size:12px;font-weight:bold;padding:0 5px;border:none;overflow:hidden;word-break:normal;color:#333;text-align:center" colspan="3">' +
                                          '<img src="{ImgPath}" style="width:100%;height:300px;display:block;" />' +
                                        '</th>' +
                                      '</tr>' +
                              
                                      '<tr>' +
                                        '<td style="font-family:Arial,sans-serif;font-size:11px;padding:0 5px;border:1px solid transparent;color:black;background-color:transparent;text-align:left" colspan="3">' +
                                          'Item Name:<br>' +
                                          '<div style="font-family:Arial,sans-serif;font-size:15px;font-weight:bold;margin:-1px 0 0 0;">{ItemName}</div>' +
                                        '</td>' +
                                      '</tr>' +
                              
                                      '<tr>' +
                                        '<td style="font-family:Arial,sans-serif;font-size:11px;padding:4px 5px;border:1px solid transparent;color:black;background-color:transparent;vertical-align:top;width:33.3%;text-align:left">' +
                                          'Item Code:<br><div style="font-family:Arial,sans-serif;font-size:15px;font-weight:bold;margin:-1px 0 0 0;">{ModifiedItemCode}</div>' +
                                        '</td>' +
                              
                                        '<td style="font-family:Arial,sans-serif;font-size:11px;padding:4px 5px;border:1px solid transparent;color:black;background-color:transparent;vertical-align:top;width:33.3%;text-align:center">' +
                                          'Entitled Point:<br><div style="font-family:Arial,sans-serif;font-size:15px;font-weight:bold;margin:-1px 0 0 0;">{ItemPoint}</div>' +
                                        '</td>' +
                              
                                        '<td style="font-family:Arial,sans-serif;font-size:11px;padding:4px 5px;border:1px solid transparent;color:black;background-color:transparent;vertical-align:top;width:33.3%;text-align:right">' +
                                          'Item Cost:<br><div style="font-family:Arial,sans-serif;font-size:15px;font-weight:bold;margin:-1px 0 0 0;">RM{ItemPrizePriceCost}</div>' +
                                        '</td>' +
                                      '</tr>' +
                              
                                      '<tr>' +
                                        '<td style="font-family:Arial,sans-serif;font-size:11px;padding:8px 12px;border:1px solid transparent;color:black;background-color:transparent;vertical-align:top;width:100%;" colspan="3">' +
                                          '{ModifiedButtonRedeemItem}' +
                                        '</td>' +
                                      '</tr>' +
                              
                                    '</table>' +
                                  '</div>',
                              


                                  listeners: {
                                    itemsingletap: function (dataview, index, target, record, e, eOpts) {
                                      // kalau expired jangan redeem
                                      if (globalPointCampaignIsExpired === "Expired") return;
                                  
                                      var id = record.get('ID');
                                      FloatLoyaltyCardPointCheckRedeemEntitle(id);
                                    }
                                  },
                                  
                              
                              }
                              
                          

  //                             {
  //                               xtype: 'list',
  //                               id: 'List_FloatLoyaltyCardPoint_RedeemPrize',
  //                               height: '100%',
  //                               width: '100%',
  //                               store: _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore,
  //                               style: 'background-color:rgba(255,255,255, 0.9);border-radius: 0px 0px 0px 0px;',
  //                               mode: 'SINGLE',
  //                               disableSelection: true,
                              
  //                               scrollable: {
  //                                 direction: 'vertical',
  //                                 indicators: {
  //                                   y: { autoHide: true },
  //                                   x: { autoHide: true }
  //                                 }
  //                               },
  //                               listeners: {
  //                                 tap: {
  //                                   element: 'element',
  //                                   delegate: '.redeemActionBtn',
  //                                   fn: function (e, t) {
  //                                     e.stopEvent(); // ✅ stop bubbling ke list/item
  //                                     var id = parseInt(t.getAttribute('data-id'), 10);
                                
  //                                     // optional safety blur kalau browser fokus element lain
  //                                     if (document.activeElement && document.activeElement.blur) {
  //                                       document.activeElement.blur();
  //                                     }
                                
  //                                     if (!isNaN(id)) {
  //                                       FloatLoyaltyCardPointCheckRedeemEntitle(id);
  //                                     }
  //                                   }
  //                                 }
  //                               },
                                
  //                               // ✅ EMPTY LIST MESSAGE
  // deferEmptyText: false,
  // emptyText:
  //   '<div class="ayohaEmptyWrap">' +
  //     '<div class="ayohaEmptyCard">' +
  //       '<div class="ayohaEmptyIcon">' +
  //         '<img src="resources/icons/Logo/icon_ayoha_gradient_vertical.png" style="width:44px;height:44px;" />' +
  //       '</div>' +
  //       '<div class="ayohaEmptyTitle">No Redeem Items Yet</div>' +
  //       '<div class="ayohaEmptyDesc">This campaign doesn’t have any redeemable perks right now. Please check again later.</div>' +
  //     '</div>' +
  //   '</div>',
  //                               itemTpl:
  //                                 '<div class="myContent redeemItemWrap">' +
  //                                   '<table class="redeemItemTable" style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:0;">' +
                              
  //                                     // ===== IMAGE ROW (FIX: colspan 3) =====
  //                                     '<tr>' +
  //                                       '<th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="3">' +
  //                                         '<img src="{ImgPath}" style="width:100%;height:300px;display:block;" />' +
  //                                       '</th>' +
  //                                     '</tr>' +
                              
  //                                     // ===== ITEM NAME ROW =====
  //                                     '<tr>' +
  //                                       '<td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3">' +
  //                                         'Item Name:<br>' +
  //                                         '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemName}</div>' +
  //                                       '</td>' +
  //                                     '</tr>' +
                              
  //                                     // ===== 3 COLUMNS ROW =====
  //                                     '<tr>' +
  //                                       '<td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:33.3%;text-align:left">' +
  //                                         'Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ModifiedItemCode}</div>' +
  //                                       '</td>' +
                              
  //                                       '<td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:33.3%;text-align:center">' +
  //                                         'Entitled Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemPoint}</div>' +
  //                                       '</td>' +
                              
  //                                       '<td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:33.3%;text-align:right">' +
  //                                         'Item Cost:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">RM{ItemPrizePriceCost}</div>' +
  //                                       '</td>' +
  //                                     '</tr>' +
                              
  //                                     // ===== BUTTON ROW (FULL WIDTH) =====
  //                                     '<tr>' +
  //                                       '<td style="font-family:Arial, sans-serif;font-size:11px;padding:8px 12px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:100%;" colspan="3">' +
  //                                       //   '<div class="blink_me redeemBtnWrap" style="width:100%;text-align:center;margin:0;">' +
  //                                       //     '<button onclick="FloatLoyaltyCardPointCheckRedeemEntitle(\'{ID}\')" class="buttonLoyaltyCardPointRedeemList">Redeem Perk!</button>' +
  //                                       //   '</div>' +
  //                                       '{ModifiedButtonRedeemItem}' +
  //                                       '</td>' +
  //                                     '</tr>' +
                              
  //                                   '</table>' +
  //                                 '</div>',
                              
  //                               listeners: {
  //                                 itemdoubletap: function (dataview, index, target, record, e, eOpts) { },
  //                                 itemsingletap: function (dataview, index, target, record, e, eOpts) { }
  //                               }
  //                             }
                              
                            ]
                          },
      
                          // -----------------------------------------------------
                          // 1) Redeem History
                          // -----------------------------------------------------
                          {
                            xtype: 'container',
                            id: 'carouselFloatLoyaltyCardPoint_RedeemPrizeHistory',
                            style: ' background-color: transparent',
                            height: '100%',
                            width: '100%',
                            layout: { type: 'vbox', pack: 'start', align: 'left' },
      
                            items: [
                              {
                                xtype: 'list',
                                id: 'List_FloatLoyaltyCardPoint_RedeemPrizeHistory',
                                height: '100%',
                                width: '100%',
                                store: _DataStore_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore,
                                style: 'background-color: #fff !important;',
                              //  cls: 'ayohaRedeemHistoryList',   // ✅ tambah ini
                                cls: 'ayohaRedeemHistoryList',
                                mode: 'SINGLE',
                                disableSelection: true,
      
                                scrollable: {
                                  direction: 'vertical',
                                  indicators: {
                                    y: { autoHide: true },
                                    x: { autoHide: true }
                                  }
                                },
      
                                deferEmptyText: false,
                                emptyText:
                                  '<div class="ayohaEmptyWrap">' +
                                    '<div class="ayohaEmptyCard">' +
                                      '<div class="ayohaEmptyIcon">' +
                                        '<img src="resources/icons/myredeemption.png" style="width:44px;height:44px;" />' +
                                      '</div>' +
                                      '<div class="ayohaEmptyTitle">No Redeemed History Yet</div>' +
                                      '<div class="ayohaEmptyDesc">You doesn’t have any redeemable history right now. Please check again later.</div>' +
                                    '</div>' +
                                  '</div>',

                                  itemTpl:
  '<div class="myContent" style="width:100%;display:block;">' +
    '<div class="ayohaRedeemHistoryItem" style="width:100%;display:block;">' +   // ✅ wrapper baru
      '<table style="border-collapse:collapse;border-spacing:0;width:100%">' +
        '<thead>' +
          '<tr>' +
            '<th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2">' +
              '<img src="{ImgPath}" style="width: 120px; height: 120px; border:1px none white;max-width:120px;" />' +
            '</th>' +
            '<th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 7px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2">' +
              '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Redeem Item Name:</div><br>' +
              '<div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{ItemName}-({ModifiedItemCode})</div><br>' +
              '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Redeem Point:</div><br>' +
              '<div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;"><b>{RedeemPoint}</b></div><br>' +
              '<div style="width:100%;text-align:left;margin:-13px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;">Redeem Status:<br>{ModifiedRedeemHistoryStatus}</div>' +
            '</th>' +
          '</tr>' +
        '</thead>' +
      '</table>' +
    '</div>' +
  '</div>',

                                // itemTpl:
                                //   '<div class="myContent">' +
                                //     '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg">' +
                                //       '<thead>' +
                                //         '<tr>' +
                                //           '<th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2">' +
                                //             '<img src="{ImgPath}" style="width: 120px; height: 120px; border:1px none white;max-width:120px;" />' +
                                //           '</th>' +
                                //           '<th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 7px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2">' +
                                //             '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Redeem Item Name:</div><br>' +
                                //             '<div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{ItemName}-({ModifiedItemCode})</div><br>' +
                                //             // '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Redeem Item ID:</div><br>' +
                                //             // '<div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{ID}</div><br>' +
                                //             '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Redeem Point:</div><br>' +
                                //             '<div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;"><b>{RedeemPoint}</b></div><br>' +
                                //             '<div style="width:100%;text-align:left;margin:-13px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;">Redeem Status:<br>{ModifiedRedeemHistoryStatus}</div>' +
                                //           '</th>' +
                                //         '</tr>' +
                                //       '</thead>' +
                                //     '</table>' +
                                   
                                //   '</div>',
      
                                listeners: {
                                  itemdoubletap: function (dataview, index, target, record, e, eOpts) { },
                                  itemsingletap: function (dataview, index, target, record, e, eOpts) { 
                                    var id = record.get('ID');
                                    FloatLoyaltyCardPoint_RedeemPrizeHistoryLogShow(id);
                                  }
                                }
                              }
                            ]
                          },
      
                          // -----------------------------------------------------
                          // 2) Points History
                          // -----------------------------------------------------
                          {
                            xtype: 'container',
                            id: 'carouselFloatLoyaltyCardPoint_AyohaPointHistory',
                            style: ' background-color: transparent',
                            height: '100%',
                            width: '100%',
                            layout: { type: 'vbox', pack: 'start', align: 'left' },
      
                            items: [
                              {
                                xtype: 'list',
                                id: 'List_FloatLoyaltyCardPoint_PointHistory',
                                height: '100%',
                                width: '100%',
                                store: _DataStore_LoyaltyPointLoadByPointCampaignCodeUserStore,
                                mode: 'SINGLE',
                                cls: 'ayohaPointHistoryList',   // ✅ tambah                                
                                style: 'background-color: #fff !important;',
                                disableSelection: true,
                                grouped: true,
      
                                scrollable: {
                                  direction: 'vertical',
                                  indicators: {
                                    y: { autoHide: true },
                                    x: { autoHide: true }
                                  }
                                },
                                deferEmptyText: false,
                                emptyText:
                                  '<div class="ayohaEmptyWrap">' +
                                    '<div class="ayohaEmptyCard">' +
                                      '<div class="ayohaEmptyIcon">' +
                                        '<img src="resources/icons/HistoryPurple01.png" style="width:44px;height:44px;" />' +
                                      '</div>' +
                                      '<div class="ayohaEmptyTitle">No Point History Yet</div>' +
                                      '<div class="ayohaEmptyDesc">You doesn’t have any Point Collection/Redeemed history right now. Please check again later.</div>' +
                                    '</div>' +
                                  '</div>',
                                  itemTpl: 
                                  '<div class="myContent">' +
                                    '<table style="width:100%;table-layout:fixed;border-collapse:collapse;border-spacing:0;background:transparent;margin:0;">' +
                                      '<colgroup>' +
                                        '<col style="width:80%;">' +
                                        '<col style="width:20%;">' +
                                      '</colgroup>' +
                                      '<tbody>' +
                                        '<tr>' +
                                          '<td style="padding:0;vertical-align:top;font-family:Arial,sans-serif;font-size:14px;font-weight:normal;overflow-wrap:anywhere;word-break:break-word;">' +
                                            '{ModifiedAmount}<br>{ModifiedReceiptBillID}<br>' +
                                            '<div style="font-size:11px;font-weight:normal;margin:-23px 0 0 0;">{PointedByDate_DateOnly} {PointedByDate_TimeOnly}</div><br>' +
                                            '<div style="font-size:11px;font-weight:normal;margin:-23px 0 0 0;">{PointedBy}</div>' +
                                          '</td>' +
                                          '<td style="padding:0;vertical-align:middle;text-align:right;font-family:Arial,sans-serif;font-size:14px;font-weight:normal;white-space:nowrap;">' +
                                            '{ModifiedTypeCRDB}' +
                                          '</td>' +
                                        '</tr>' +
                                      '</tbody>' +
                                    '</table>' +
                                  '</div>'
                              
                                  


                                  // itemTpl:
                                  // '<div class="myContent">' +
                                  //   '<table style="width:100%;table-layout:fixed;border-collapse:collapse;border-spacing:0;background:transparent;margin:0;">' +
                                
                                  //     // ✅ kunci ratio column
                                  //     '<colgroup>' +
                                  //       '<col style="width:80%;">' +
                                  //       '<col style="width:20%;">' +
                                  //     '</colgroup>' +
                                
                                  //     '<tbody>' +
                                  //       '<tr>' +
                                
                                  //         // LEFT (80%)
                                  //         '<td style="padding:0;vertical-align:top;' +
                                  //             'font-family:Arial,sans-serif;font-size:14px;font-weight:normal;' +
                                  //             'overflow-wrap:anywhere;word-break:break-word;">' +
                                  //           '{ModifiedAmount}<br>{ModifiedReceiptBillID}<br>' +
                                  //           '<div style="font-size:11px;font-weight:normal;margin:-23px 0 0 0;">{PointedByDate_DateOnly} {PointedByDate_TimeOnly}</div><br>' +
                                  //           '<div style="font-size:11px;font-weight:normal;margin:-23px 0 0 0;">{PointedBy}</div>' +
                                  //         '</td>' +
                                
                                  //         // RIGHT (20%)
                                  //         '<td style="padding:0;vertical-align:middle;text-align:right;' +
                                  //             'font-family:Arial,sans-serif;font-size:14px;font-weight:normal;' +
                                  //             'white-space:nowrap;">' +
                                  //           '{ModifiedTypeCRDB}' +
                                  //         '</td>' +
                                
                                  //       '</tr>' +
                                  //     '</tbody>' +
                                  //   '</table>' +
                                  // '</div>',
                                



                                // itemTpl:
                                //   '<div class="myContent">' +
                                //     '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:0px 0px 0px 0px;">' +
                                //       '<thead>' +
                                //         '<tr>' +
                                //           '<th style="border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:80%;background-color:transparent;">' +
                                //             '{ModifiedAmount}<br>{ModifiedReceiptBillID}<br>' +
                                //             '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{PointedByDate_DateOnly} {PointedByDate_TimeOnly}</div><br>' +
                                //             '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{PointedBy}' +
                                //           '</th>' +
                                //           '<th style="border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:20%;background-color:transparent;">' +
                                //             '{ModifiedTypeCRDB}' +
                                //           '</th>' +
                                //         '</tr>' +
                                //       '</thead>' +
                                //     '</table>' +
                                //   '</div>',
      
                                // listeners: {
                                //   itemdoubletap: function (dataview, index, target, record, e, eOpts) { },
                                //   itemsingletap: function (dataview, index, target, record, e, eOpts) { }
                                // }
                              }
                            ]
                          },
      
                          // -----------------------------------------------------
                          // 3) QR CODE
                          // -----------------------------------------------------
                          {
                            xtype: 'container',
                            id: 'carouselFloatLoyaltyCardPoint_PointQRCode',
                            style: ' background-color: white',
                            height: '100%',
                            width: '100%',
                            layout: { type: 'vbox', pack: 'center', align: 'center' },
      
                            items: [
                              {
                                xtype: 'container',
                                id: 'carouselFloatLoyaltyCardPoint_PointQRCodeInnerTop',
                                docked: 'top',
                                height: 50,
                                width: '100%',
                                style: ' background-color: transparent',
                                layout: { type: 'vbox', pack: 'center', align: 'center' },
      
                                items: [
                                  {
                                    margin: '0 0 0 0',
                                    id: 'htmlFloatLoyaltyCardPoint_AccountName',
                                    html: '<div id="divFloatLoyaltyCardPoint_PointQRCodeInnerTop" style="width: 100%; border:2px none red;text-align:center;font-size:12px;color:purple;font-weight:bold;" >You are not subscribed to this Membership Program</div>'
                                  },
                                  {
                                    margin: '-2 0 0 0',
                                    id: 'htmlFloatLoyaltyCardPoint_MembershipNo',
                                    html: '<div id="divFloatLoyaltyCardPoint_PointQRCodeInnerTopMembershipNi" style="width: 100%; border:2px none red;text-align:center;font-size:12px;color:purple;font-weight:bold;" >Get The Membership Card Now!</div>'
                                  }
                                ]
                              },
      
                              {
                                width: '100%',
                                id: 'htmlFloatLoyaltyCardPoint_NoPointQRCode',
                                flex: 1,
html:
'<div class="ayohaEmptyWrap">' +
  '<div class="ayohaEmptyCard">' +
    '<div class="ayohaEmptyIcon">' +
      '<img src="resources/icons/qrcodetwo.png" style="width:44px;height:44px;" />' +
    '</div>' +
    '<div class="ayohaEmptyTitle">QR Code Not Generated</div>' +
    '<div class="ayohaEmptyDesc">You are not subcribed this membership loyalty program. Get the membership card Now!</div>' +
  '</div>' +
'</div>',
                              },
                              {
                                id: 'htmlFloatLoyaltyCardPoint_PointQRCode',
                                hidden:true,                             
                                margin: '0 0 0 0',
                                width: '100%',
                                flex: 1,
                              //  html: '<div id="myPointQRCodeImg" style="width: 100%; height: 100%; border:2px none red;" />'
                                html: '<div style="width:100%;height:100%;display:flex;align-items:flex-start;justify-content:center;padding-top:10px;">'+
                                '<div id="myPointQRCodeImgPad" style="background:#fff;padding:18px;border-radius:14px;">'+
                                  '<div id="myPointQRCodeImg"></div>'+
                                '</div>'+
                              '</div>'
                              },
      
                              {
                                xtype: 'container',
                                id: 'carouselFloatLoyaltyCardPoint_PointQRCodeInnerbottem',
                                docked: 'bottom',
                                height: 40,
                                width: '100%',
                                style: ' background-color: transparent',
                                layout: { type: 'vbox', pack: 'start', align: 'center' },
      
                                items: [
                                  {
                                    id: 'htmlFloatLoyaltyCardPoint_PointQRCodeInnerbottemTxt',
                                    html: '<div id="divFloatLoyaltyCardPoint_PointQRCodeInnerBottom" style="width: 100%; border:2px none red;text-align:center;font-size:11px;color:purple;font-weight:bold;" >Show this QR Code to Merchant and Earn Points!!!</div>'
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
      
                  // =========================================================
                  // BOTTOM MENU
                  // =========================================================
                  {
                    xtype: 'container',
                    id: 'containerFloatLoyaltyCardPoint_MenuBottom',
                    docked:'bottom',
                    width: '100%',
                    height: 55,
                    style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                    layout: { type: 'hbox', pack: 'start', align: 'center' },
      
                    items: [
                      {
                        xtype: 'container',
                        width: '100%',
                        height: 55,
                        style: 'background-color: transparent',
                        layout: { type: 'hbox', pack: 'center', align: 'center' },
      
                        items: [
                          {
                            xtype: 'container',
                            width: '100%',
                            height: 55,
                            style: 'background-color: transparent',
                            layout: { type: 'hbox', pack: 'center', align: 'center' },
      
                            items: [
                              // Redeem Prize
                              {
                                xtype: 'container',
                                id: 'containerFloatLoyaltyCardPoint_MenuBottom_RedeemPrize',
                                flex: 1,
                                margin: '0 0 0 0',
                                style: 'background-color: transparent',
                                layout: { type: 'vbox', pack: 'start', align: 'center' },
      
                                items: [
                                  {
                                    xtype: 'button',
                                    id: 'btn_FloatLoyaltyCardPoint_MenuBottom_RedeemPrize',
                                    margin: '-5 0 0 0',
                                    height: 30,
                                    width: 56,
                                    html: '<img src="resources/icons/AyohaStorePurple.png" width="22" height="22" alt="Company Name">',
                                    ui: 'plain',
                                    handler: function () {
                                      FloatLoyaltyCardPoint_MoveCarousel(0);
                                    }
                                  },
                                  {
                                    xtype: 'container',
                                    id: 'containerFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt',
                                    width: '100%',
                                    layout: { type: 'vbox', pack: 'start', align: 'center' },
      
                                    items: [
                                      {
                                        margin: '-8 0 0 0',
                                        id: 'htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt01',
                                        html: '<font size=1 color=purple><u><b>Redeem</b></u></font>'
                                      },
                                      {
                                        margin: '-8 0 0 0',
                                        id: 'htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt02',
                                        html: '<font size=1 color=purple><u><b>Perks</b></u></font>'
                                      }
                                    ]
                                  }
                                ]
                              },
      
                              // Redeem History
                              {
                                xtype: 'container',
                                id: 'containerFloatLoyaltyCardPoint_MenuBottom_RedeemHistory',
                                flex: 1,
                                margin: '0 0 0 0',
                                style: 'background-color: transparent',
                                layout: { type: 'vbox', pack: 'start', align: 'center' },
      
                                items: [
                                  {
                                    xtype: 'button',
                                    id: 'btn_FloatLoyaltyCardPoint_MenuBottom_RedeemHistory',
                                    margin: '-5 0 0 0',
                                    height: 30,
                                    width: 56,
                                    html: '<img src="resources/icons/myredeemption.png" width="22" height="22" alt="Company Name">',
                                    ui: 'plain',
                                    handler: function () {
                                      FloatLoyaltyCardPoint_MoveCarousel(1);
                                    }
                                  },
                                  {
                                    xtype: 'container',
                                    id: 'containerFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt',
                                    width: '100%',
                                    layout: { type: 'vbox', pack: 'start', align: 'center' },
      
                                    items: [
                                      {
                                        margin: '-8 0 0 0',
                                        id: 'htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt01',
                                        html: '<font size=1 color=grey>My</font>'
                                      },
                                      {
                                        margin: '-8 0 0 0',
                                        id: 'htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt02',
                                        html: '<font size=1 color=grey>Redemption</font>'
                                      }
                                    ]
                                  }
                                ]
                              },
      
                              // Points History
                              {
                                xtype: 'container',
                                id: 'containerFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistory',
                                flex: 1,
                                margin: '0 0 0 0',
                                style: 'background-color: transparent',
                                layout: { type: 'vbox', pack: 'start', align: 'center' },
      
                                items: [
                                  {
                                    xtype: 'button',
                                    id: 'btn_FloatLoyaltyCardPoint_MenuBottom_AyohaPointHistory',
                                    margin: '-5 0 0 0',
                                    height: 30,
                                    width: 56,
                                    html: '<img src="resources/icons/HistoryPurple01.png" width="22" height="22" alt="Company Name">',
                                    ui: 'plain',
                                    handler: function () {
                                      FloatLoyaltyCardPoint_MoveCarousel(2);
                                    }
                                  },
                                  {
                                    xtype: 'container',
                                    id: 'containerFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt',
                                    width: '100%',
                                    layout: { type: 'vbox', pack: 'start', align: 'center' },
      
                                    items: [
                                      {
                                        margin: '-8 0 0 0',
                                        id: 'htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt01',
                                        html: '<font size=1 color=grey>Points</font>'
                                      },
                                      {
                                        margin: '-8 0 0 0',
                                        id: 'htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt02',
                                        html: '<font size=1 color=grey>History</font>'
                                      }
                                    ]
                                  }
                                ]
                              },
      
                              // QR Code
                              {
                                xtype: 'container',
                                id: 'containerFloatLoyaltyCardPoint_MenuBottom_PointQRCode',
                                flex: 1,
                                margin: '0 0 0 0',
                                style: 'background-color: transparent',
                                layout: { type: 'vbox', pack: 'start', align: 'center' },
      
                                items: [
                                  {
                                    xtype: 'button',
                                    id: 'btn_FloatLoyaltyCardPoint_MenuBottom_PointQRCode',
                                    margin: '0 0 0 0',
                                    margin: '-5 0 0 0',
                                    height: 30,
                                    width: 56,
                                    html: '<img src="resources/icons/qrcodetwo.png" width="22" height="22" alt="Company Name">',
                                    ui: 'plain',
                                    handler: function () {
                                      FloatLoyaltyCardPoint_MoveCarousel(3);
                                    }
                                  },
                                  {
                                    xtype: 'container',
                                    id: 'containerFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt',
                                    width: '100%',
                                    layout: { type: 'vbox', pack: 'start', align: 'center' },
      
                                    items: [
                                      {
                                        margin: '-8 0 0 0',
                                        id: 'htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt01',
                                        html: '<font size=1 color=grey>Point</font>'
                                      },
                                      {
                                        margin: '-8 0 0 0',
                                        id: 'htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt02',
                                        html: '<font size=1 color=grey>QR Code</font>'
                                      }
                                    ]
                                  }
                                ]
                              },
      
                              // Cashback (hidden)
                              {
                                xtype: 'container',
                                id: 'containerFloatLoyaltyCardPoint_MenuBottom_CashBack',
                                hidden: true,
                                flex: 1,
                                margin: '0 0 0 0',
                                style: 'background-color: transparent',
                                layout: { type: 'vbox', pack: 'start', align: 'center' },
      
                                items: [
                                  {
                                    xtype: 'button',
                                    id: 'btn_FloatLoyaltyCardPoint_MenuBottom_CashBack',
                                    margin: '0 0 0 0',
                                    height: 36,
                                    width: 36,
                                    html: '<img src="resources/icons/cashback01.png" width="26" height="26" alt="Company Name">',
                                    ui: 'plain',
                                    handler: function () { }
                                  },
                                  {
                                    xtype: 'container',
                                    id: 'containerFloatLoyaltyCardPoint_MenuBottom_CashBackTxt',
                                    width: '100%',
                                    layout: { type: 'vbox', pack: 'start', align: 'center' },
      
                                    items: [
                                      {
                                        margin: '-12 0 0 0',
                                        id: 'htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt01',
                                        html: '<font size=1 color=grey>Ayoha Point</font>'
                                      },
                                      {
                                        margin: '-12 0 0 0',
                                        id: 'htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt02',
                                        html: '<font size=1 color=grey>Cash Back</font>'
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      });
      


}





var globalEnterpriseAccNo_FloatLoyaltyCardPoint;
var globalPointCampaignCode_FloatLoyaltyCardPoint;
var globalPointCampaignIsExpired = "NotExpired";
var globalPointCampaingName;
var globalPointCampaignEnterpriseName_FloatLoyaltyCardPoint;

function FloatLoyaltyCardPointShow(CampaingName, PointCampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo, EndDate, PointisRequiredStartEndDate, PointisCampaignExpired) {
   
   
    // Ext.Viewport.remove(_FloatLoyaltyCardPoint);
    // this.overlay = Ext.Viewport.add(FloatLoyaltyCardPoint());
    // this.overlay.show();
    // AddRoutePages("FloatLoyaltyCardPointHide()");
    globalPointCampaignIsExpired = "NotExpired";
    isFloatLoyaltyCardPointOpen = 'Y';
 




    FloatLoyaltyCardPointCreateIfNeeded();


    _FloatLoyaltyCardPoint.show();
    // ✅ push browser back (ikut style kau)
    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
      AyohaBrowserBack.push('FloatLoyaltyCardPoint', function () {
     
        FloatLoyaltyCardPointHide(true);
      });
    }











    FloatLoyaltyCardPointAdjustHeight();
    //FloatPanel_FloatingAdvertisementShow();
    //Ext.getCmp('htmlFloatLoyaltyCardPoint_Logo').setHtml('<img src="' + GetEnterpriseLogoPath() + '" width="130" height="130"/>');

  //  Ext.getCmp('htmlFloatLoyaltyCardPoint_Logo').setHtml('<img src="' + EnterpriseLogo + '" style = "width: 120px; height: 120px; border:1px none grey; border-radius: 50%; max-width:120px;max-height:120px;" />');
  
  
    Ext.getCmp('htmlFloatLoyaltyCardPoint_Logo').setHtml(
        '<div style="' +
          'width:100px;height:100px;' +
          'background:#fff;' +
          'border-radius:24px;' +
          'display:flex;align-items:center;justify-content:center;' +
          'box-shadow:0 10px 22px rgba(0,0,0,.18);' +
          'position:relative;' +
        '">' +
          // optional inner highlight (bagi nampak premium)
          '<div style="' +
            'position:absolute;inset:1px;' +
            'border-radius:23px;' +
            'box-shadow:inset 0 1px 0 rgba(255,255,255,.9), inset 0 -8px 18px rgba(0,0,0,.06);' +
            'pointer-events:none;' +
          '"></div>' +
      
          '<img src="' + EnterpriseLogo + '" style="' +
            'width:74px;height:74px;' +
            'object-fit:contain;' +
            'border-radius:14px;' +
            'display:block;' +
          '"/>' +
        '</div>'
      );
  
  
  
  
  
  
  
  
    globalPointCampaingName = CampaingName;
    globalPointCampaignEnterpriseName_FloatLoyaltyCardPoint=EnterpriseName;
    Ext.getCmp('htmlFloatLoyaltyCardPoint_EnterpriseName').setHtml('<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 16px;font-weight:bold;width:100%;" >' + EnterpriseName + '</div>');

    if (PointisRequiredStartEndDate == "YES") {
        Ext.getCmp('htmlFloatLoyaltyCardPoint_CampaignEndDate').setHidden(false);
        Ext.getCmp('htmlFloatLoyaltyCardPoint_CampaignEndDate').setHtml('<font size=1 color=white>Campaign End Date:' + EndDate + '</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_CampaignName').setMargin("-2 0 0 0");
        Ext.getCmp('htmlFloatLoyaltyCardPoint_CampaignName').setHtml('<font size=2 color=white><b>' + CampaingName + '</b></font>');
        Ext.getCmp('container_pointspacer').setHeight(5);
        if (PointisCampaignExpired == "Expired") {
            Ext.getCmp('htmlFloatLoyaltyCardPointisExpired').setHidden(false);
            Ext.getCmp('htmlFloatLoyaltyCardPoint_CampaignEndDate').setHtml('<font class="blink_me" size=1 color=white>Campaign End Date:' + EndDate + '</font>');
            globalPointCampaignIsExpired = "Expired";
        }
        


        
        


    }
    if (PointisRequiredStartEndDate == "NO") {
        Ext.getCmp('htmlFloatLoyaltyCardPoint_CampaignEndDate').setHidden(true);
        Ext.getCmp('htmlFloatLoyaltyCardPoint_CampaignName').setMargin("2 0 0 0");
        Ext.getCmp('htmlFloatLoyaltyCardPoint_CampaignName').setHtml('<font size=2 color=white><b>' + CampaingName + '</b></font>');
        Ext.getCmp('container_pointspacer').setHeight(10);

      //  Ext.getCmp('htmlFloatLoyaltyCardPoint_CampaignEndDate').setHtml('<font size=1 color=white>Campaign End Date:' + EndDate + '</font>');

    }
    
   
    
    globalEnterpriseAccNo_FloatLoyaltyCardPoint = EnterpriseAccNo;
    globalPointCampaignCode_FloatLoyaltyCardPoint = PointCampaignCode;


    

   // Ext.getCmp('btnFloatLoyaltyCardPoint_PointIcon').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="' + GetAyohaUserPicProfile() + '"  style="width: 30px; height: 30px; border:1px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px"></div>');
    Ext.getCmp('btnFloatLoyaltyCardPoint_PointIcon').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/WhitePointStamp.png"  style="width: 30px; height: 30px; border:1px none white; border-radius: 50%;  margin:-1px 0px 0px 0px"></div>');





   // Ext.getCmp('htmlFloatLoyaltyCardPointPointTitle').setHtml('<div style="width:130px;border-radius: 10px 0px 0px 10px;background-color: transparent;text-align:center;border: 1px none white;font-size: 11px;font-weight:bold;color:white;height:20px">' + GetAyohaUserAccountNames() + '</div>');
    ////Ext.getCmp('htmlFloatLoyaltyCardPointPointTitle').setHtml('<div style="width:130px;border-radius: 0px 0px 0px 0px;background-color: transparent;text-align:right;border: 1px none white;font-size: 11px;font-weight:bold;color:white;height:20px">' + GetAyohaUserAccountNames() + '</div>');
    Ext.getCmp('htmlFloatLoyaltyCardPointPointTitle').setHtml('<div style="width:130px;border-radius: 0px 0px 0px 0px;background-color: transparent;text-align:right;border: 1px none white;font-size: 14px;font-weight:bold;color:white;height:20px">Loyalty Point Card</div>');




    Load_FloatLoyaltyCardPoint_PointCampaignRedeemLoadByPointCampaignCodeStore(PointCampaignCode, EnterpriseAccNo);

    //  Ext.getCmp('htmlFloatLoyaltyCardPointPointsCollected').setHtml('<div style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>' + localStorage.getItem("AyohaPoint") + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Ayoha Point</b></div><br>');



    //  Ext.getCmp('containerRedeemListItems').setHeight(adjustHeight());
    // AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore();
    _FloatLoyaltyCardPoint_isFirstLoad = 'Y';
    
   
}


function Load_FloatLoyaltyCardPoint_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore(EnterpriseAccNo) {

   





    _DataStore_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore.getProxy().setExtraParam('EnterpriseHQAccNo', EnterpriseAccNo);
    _DataStore_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore.getProxy().setExtraParam('ModuleCode', 3);
    _DataStore_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore.getProxy().setUrl(GetAPIurl() + '/AdvertisementLinkModule/AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCode');
    
    _DataStore_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
                var record = records[0]; // Access only the first record              
                localStorage.setItem('FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow_AdvertismentCode', record.get('AdvertisementCode'));
                FloatPanel_Advertisement_FloatAdvertisementShow();
              // LoadingPanelHide();
               
               
            } else {
              //  LoadingPanelHide();
                console.error('Failed to load store data or no record found.');
               
            }
        }
    });







}


function FloatLoyaltyCardPointHide(fromBack, animCfg){


    // if (isFloatLoyaltyCardPointOpen == "Y") {
    //     _FloatLoyaltyCardPoint.hide();

    //     isFloatLoyaltyCardPointOpen = 'N';
    //     _FloatLoyaltyCardPoint_isFirstLoad = "N";
    //     RemovePages("FloatLoyaltyCardPointHide()");
    // }



    
    if (isFloatLoyaltyCardPointOpen == 'Y') {
       
        _FloatLoyaltyCardPoint.hide();

        if (animCfg) {
            _FloatLoyaltyCardPoint.hide(Ext.fx.Animation(animCfg));
          } else {
            _FloatLoyaltyCardPoint.hide();
          }
          isFloatLoyaltyCardPointOpen = 'N';
          _FloatLoyaltyCardPoint_isFirstLoad = "N";                            
       
         // RemovePages("FloatPanel_ForgotPasswordHide()");
        
          // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
          if (fromBack !== true) {
            AyohaBrowserBack.close('FloatLoyaltyCardPoint');
          }
    }
  
}




function FloatLoyaltyCardPointAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);
    var headerHeight = parseInt(251);
    //alert(y);
    //alert(x);
    // var headerHeight = parseInt(218);
    var adjustedHeight = x - headerHeight;
    //var newHeight = adjustedHeight - 99;
    var newHeight = adjustedHeight - 83;

    //alert(newHeight)

    Ext.getCmp('ContainerpanelFloatLoyaltyCardPoint').setHeight(newHeight);
    //Ext.getCmp('containerFloatLoyaltyCardPointMaster').setHeight(newHeight);






}






function FloatLoyaltyCardPointCheckRedeemEntitle(val) {

 // alert('FloatLoyaltyCardPointCheckRedeemEntitle:'+ val)
    if(is_prompt_setMessage_NotYetMembershipMessage()){
        return
     }
    if (globalPointCampaignIsExpired == "Expired") {
        Swal.fire({
            title: "",
            text:globalPointCampaingName + " campaign has been Expired.Unable to redeem!",
            showConfirmButton: false,
            imageUrl: "resources/icons/campaignExpired.png",
            imageWidth: 300,
            imageHeight: 250,
            //   imageAlt: 'Cloud-Reward Pro v 1.0',
            footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
        })
        return;
    }



    globalItemIDFloatLoyaltyCardPoint_RedeemPrize = val;
    
    var ItemPoint = _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.findRecord('ID', val, 0, false, false, true);
    globalItemPointFloatLoyaltyCardPoint_RedeemPrize = ItemPoint.get('ItemPoint'); 

    if (globalFloatLoyaltyCardPoint_SumPoint >= globalItemPointFloatLoyaltyCardPoint_RedeemPrize) {
        FloatLoyaltyCardPoint_RedeemPrizeShow(val);

    } else
    {
        Swal.fire({
            title: 'Insufficient Point',
            text: "Unable to redeem perks!",
            showConfirmButton: false,
            imageUrl: "resources/icons/UnableRedeem01.png",
            imageWidth: 300,
            imageHeight: 200,
            //   imageAlt: 'Cloud-Reward Pro v 1.0',
            footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
        })

    }


    

}





function FloatLoyaltyCardPoint_MoveCarousel(Idx) {
   
    console.log(Idx)
    if (Idx == 0) {
        Ext.getCmp('carouselFloatLoyaltyCardPoint').setActiveItem(0);
        Ext.getCmp('htmlFloatLoyaltyCardPointMasterHeaderIcon').setHtml('<img src="resources/icons/AyohaStorePurple.png" width="20" height="20" alt="Company Name">');
        Ext.getCmp('htmlFloatLoyaltyCardPointMasterHeaderTxt').setHtml('<font size=1 color=black>Redeem Perk</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt01').setHtml('<font size=1 color=purple><b><u>Redeem</u></b></font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt02').setHtml('<font size=1 color=purple><b><u>Perk</u></b></font>');
        //////////////////////////////////////////
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt01').setHtml('<font size=1 color=grey>My</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt02').setHtml('<font size=1 color=grey>Redemption</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt01').setHtml('<font size=1 color=grey>Points</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt02').setHtml('<font size=1 color=grey>History</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt01').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt02').setHtml('<font size=1 color=grey>QR Code</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt01').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt02').setHtml('<font size=1 color=grey>QR Code</font>');
    }
    if (Idx == 1) {
        Ext.getCmp('carouselFloatLoyaltyCardPoint').setActiveItem(1);
        Ext.getCmp('htmlFloatLoyaltyCardPointMasterHeaderIcon').setHtml('<img src="resources/icons/myredeemption.png" width="20" height="20" alt="Company Name">');
        Ext.getCmp('htmlFloatLoyaltyCardPointMasterHeaderTxt').setHtml('<font size=1 color=black>My Redemptions</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt01').setHtml('<font size=1 color=purple><b><u>My</u></b></font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt02').setHtml('<font size=1 color=purple><b><u>Redemption</u></b></font>');
        //////////////////////////////////////////
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt01').setHtml('<font size=1 color=grey>Redeem</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt02').setHtml('<font size=1 color=grey>Perk</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt01').setHtml('<font size=1 color=grey> Points</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt02').setHtml('<font size=1 color=grey>History</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt01').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt02').setHtml('<font size=1 color=grey>QR Code</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt01').setHtml('<font size=1 color=grey> Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt02').setHtml('<font size=1 color=grey>QR Code</font>');


    }
    if (Idx == 2) {

        Ext.getCmp('carouselFloatLoyaltyCardPoint').setActiveItem(2);
        Ext.getCmp('htmlFloatLoyaltyCardPointMasterHeaderIcon').setHtml('<img src="resources/icons/HistoryPurple01.png" width="20" height="20" alt="Company Name">');
        Ext.getCmp('htmlFloatLoyaltyCardPointMasterHeaderTxt').setHtml('<font size=1 color=black>Points History</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt01').setHtml('<font size=1 color=purple><b><u>Points</u></b></font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt02').setHtml('<font size=1 color=purple><b><u>History</u></b></font>');
        //////////////////////////////////////////
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt01').setHtml('<font size=1 color=grey>Redeem</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt02').setHtml('<font size=1 color=grey>Perk</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt01').setHtml('<font size=1 color=grey>My</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt02').setHtml('<font size=1 color=grey>Redemption</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt01').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt02').setHtml('<font size=1 color=grey>QR Code</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt01').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt02').setHtml('<font size=1 color=grey>QR Code Back</font>');
    }
    if (Idx == 3) {

        Ext.getCmp('carouselFloatLoyaltyCardPoint').setActiveItem(3);
        Ext.getCmp('htmlFloatLoyaltyCardPointMasterHeaderIcon').setHtml('<img src="resources/icons/qrcodetwo.png" width="20" height="20" alt="Company Name">');
        Ext.getCmp('htmlFloatLoyaltyCardPointMasterHeaderTxt').setHtml('<font size=1 color=black>Points QR Code</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt01').setHtml('<font size=1 color=purple><b><u>Points</u></b></font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt02').setHtml('<font size=1 color=purple><b><u>QR Code</u></b></font>');
        //////////////////////////////////////////
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt01').setHtml('<font size=1 color=grey>Redeem</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt02').setHtml('<font size=1 color=grey>Perk</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt01').setHtml('<font size=1 color=grey>My</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt02').setHtml('<font size=1 color=grey>Redemption</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt01').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt02').setHtml('<font size=1 color=grey>QR Code Back</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt01').setHtml('<font size=1 color=grey><b>Points</b></font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt02').setHtml('<font size=1 color=grey><b>History</b></font>');


        if(is_prompt_setMessage_NotYetMembershipMessage()){

            return
           }
           Ext.getCmp('htmlFloatLoyaltyCardPoint_NoPointQRCode').setHidden(true);
           Ext.getCmp('htmlFloatLoyaltyCardPoint_PointQRCode').setHidden(false);
        if (globalPointCampaignIsExpired == "NotExpired") {
         
            var val = GetCurrAyohaUserAccountNo() + "|" + _FloatLoyaltyCardPoint_PointCampaignCode;
            //var val = GetCurrAyohaUserAccountNo()+ "|Point";            
            FloatLoyaltyCardPoint_CreateQrCode(val);
        }
        if (globalPointCampaignIsExpired == "Expired") {
            Ext.getCmp('htmlFloatLoyaltyCardPoint_PointQRCode').setMargin('0 0 0 3');
            Ext.getCmp('htmlFloatLoyaltyCardPoint_PointQRCode').setHtml('<img src="resources/icons/campaignExpired.png" style="width: 100%; height: 100%; border:1px solid white;" />');
            var val = GetCurrAyohaUserAccountNo().split('-');
            Ext.getCmp('htmlFloatLoyaltyCardPoint_AccountName').setHtml('<div id="divFloatLoyaltyCardPoint_PointQRCodeInnerTop"  style="width: 100%;  border:2px none red;text-align:center;font-size:12px;color:purple;font-weight:bold;" >' + GetAyohaUserAccountNames() + '</div>');
            Ext.getCmp('htmlFloatLoyaltyCardPoint_MembershipNo').setHtml('<div id="divFloatLoyaltyCardPoint_PointQRCodeInnerTopMembershipNi"  style="width: 100%;  border:2px none red;text-align:center;font-size:12px;color:purple;font-weight:bold;" >' + val[1] + '-' + val[2] + '</div>');
            Ext.getCmp('htmlFloatLoyaltyCardPoint_PointQRCodeInnerbottemTxt').setHtml('<div  id="divFloatLoyaltyCardPoint_PointQRCodeInnerBottom"  style="width: 100%;  border:2px none red;text-align:center;font-size:11px;color:grey;font-weight:bold;" >Campaign Expired,unable to generate Point QR Code</div>');
            
           
        }
       
        //id: 'htmlFloatLoyaltyCardPoint_PointQRCode',
        //html: '<div id="myPointQRCodeImg"  style="width: 100%; height: 100%; border:2px none red;" />',
    }






}
//var _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore;
var _FloatLoyaltyCardPoint_PointCampaignCode;
function Load_FloatLoyaltyCardPoint_PointCampaignRedeemLoadByPointCampaignCodeStore(PointCampaignCode, EnterpriseAccNo) {





    _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.getProxy().setExtraParam('PointCampaignCode', PointCampaignCode);
    _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccNo);
    _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.getProxy().setUrl(GetAPIurl() + '/PointCampaignRedeemItemSetting/PointCampaignRedeemLoadByPointCampaignCode');
    _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('record found.'+ records.length);
                _FloatLoyaltyCardPoint_PointCampaignCode = PointCampaignCode;
                Load_FloatLoyaltyCardPoint_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore(PointCampaignCode,EnterpriseAccNo);
            } else {
                console.error('Failed to load store data or no record found.');
                Load_FloatLoyaltyCardPoint_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore(PointCampaignCode,EnterpriseAccNo);
                
            }
        }
    });







}
//var _DataStore_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore;
function Load_FloatLoyaltyCardPoint_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore(PointCampaignCode,EnterpriseAccNo) {

    _DataStore_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore.getProxy().setExtraParam('RedeemHistoryStatusBy', GetCurrAyohaUserAccountNo());
    _DataStore_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccNo);
    _DataStore_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore.getProxy().setUrl(GetAPIurl() + '/LoyaltyPointRedeemPrizeHistory/LoyaltyPointRedeemPrizeHistoryLoadRedeemHistory');
    _DataStore_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
              //  console.log('record found.'+ records.length);
                Load_FloatLoyaltyCardPoint_LoyaltyPointLoadByPointCampaignCodeUserStore(PointCampaignCode, EnterpriseAccNo);
                        } else {
               // console.error('Failed to load store data or no record found.');
                Load_FloatLoyaltyCardPoint_LoyaltyPointLoadByPointCampaignCodeUserStore(PointCampaignCode, EnterpriseAccNo);
                
            }
        }
    });






    
    // Ext.getStore('LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore').getProxy().setExtraParams({
    //     RedeemHistoryStatusBy: GetCurrAyohaUserAccountNo(),
    //     EnterpriseAccNo: EnterpriseAccNo
    // });
    // Ext.StoreMgr.get('LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore').load();
    // var task = Ext.create('Ext.util.DelayedTask', function () {
    //     Ext.getStore('LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore').getProxy().setExtraParams({
    //         RedeemHistoryStatusBy: GetCurrAyohaUserAccountNo(),
    //         EnterpriseAccNo: EnterpriseAccNo
    //     });
    //     _DataStore_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore = Ext.StoreMgr.get('LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore').load();

    //     Ext.StoreMgr.get('LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore').load();
    //     var myStore = Ext.getStore('LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore');
    //     var count = myStore.getCount();
        

    //     //if (count >= 1) {
    //     //    var modelRecord = myStore.getAt(0);
    //     //    var SumPoint = modelRecord.get('SumPoint');
    //     //    Ext.getCmp('htmlFloatLoyaltyCardPoint_SumPoint').setHtml('<font size="15" color="white"><b>' + SumPoint + '</b></font>');
    //     //}



    //     //var TotalItemPrizePriceCost = modelRecord.get('TotalItemPrizePriceCost');
    //     //var result01 = TotalItemPrizePriceCost / TotalItemPoint;

    //     //var num = result01;
    //     //var n = num.toFixed(2);

    //     //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_TotalItemPoint').value = TotalItemPoint;
    //     //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_TotalItemCost').value = TotalItemPrizePriceCost;
    //     //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_CalculationMethod').value = "Total Item Cost=(" + TotalItemPrizePriceCost + ") /" + "Total Item Point=(" + TotalItemPoint + ")";
    //     //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_CalculationResult01').value = n;

    //     //PointCount = myStore.getCount();
    //     //Ext.getCmp('htmlSubscriberMaster_TotalPointCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + PointCount + '</div>');
    //     // adjustHeight();
    //     Load_FloatLoyaltyCardPoint_LoyaltyPointLoadByPointCampaignCodeUserStore(PointCampaignCode, EnterpriseAccNo);
    //     Ext.Viewport.setMasked(false);

    // });
    // task.delay(500);
}


var globalFloatLoyaltyCardPoint_SumPoint;
//LoyaltyPoint History
function Load_FloatLoyaltyCardPoint_LoyaltyPointLoadByPointCampaignCodeUserStore(PointCampaignCode, EnterpriseAccNo) {




_DataStore_LoyaltyPointLoadByPointCampaignCodeUserStore.getProxy().setExtraParam('PointCampaignCode', PointCampaignCode);
_DataStore_LoyaltyPointLoadByPointCampaignCodeUserStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
_DataStore_LoyaltyPointLoadByPointCampaignCodeUserStore.getProxy().setUrl(GetAPIurl() + '/LoyaltyPoint/LoyaltyPointLoadByPointCampaignCodeUser');
_DataStore_LoyaltyPointLoadByPointCampaignCodeUserStore.load({
    callback: function (records, operation, success) {       
        if (success && records.length > 0) {                       
                var record = records[0]; // Access only the first record
                var SumPoint = record.get('SumPoint');               
                globalFloatLoyaltyCardPoint_SumPoint = SumPoint;
                Ext.getCmp('htmlFloatLoyaltyCardPoint_SumPoint').setHtml('<font size="15" color="white"><b>' + SumPoint + '</b></font>');
           
            Load_FloatLoyaltyCardPoint_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore(EnterpriseAccNo);
        
        } else {
           // console.error('Failed to load store data or no record found.');
           Load_FloatLoyaltyCardPoint_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore(EnterpriseAccNo);
            
        }
    }
});





}






function FloatLoyaltyCardPoint_CreateQrCode(TmpQrCodeTxt) {
 

    var val = GetCurrAyohaUserAccountNo().split('-');

    Ext.getCmp('htmlFloatLoyaltyCardPoint_AccountName').setHtml('<div id="divFloatLoyaltyCardPoint_PointQRCodeInnerTop"  style="width: 100%;  border:2px none red;text-align:center;font-size:12px;color:purple;font-weight:bold;" >' + GetAyohaUserAccountNames() + '</div>');
    Ext.getCmp('htmlFloatLoyaltyCardPoint_MembershipNo').setHtml('<div id="divFloatLoyaltyCardPoint_PointQRCodeInnerTopMembershipNi"  style="width: 100%;  border:2px none red;text-align:center;font-size:12px;color:purple;font-weight:bold;" >' + val[1] + '-' + val[2] + '</div>');

  



    var qrCmp = Ext.getCmp('htmlFloatLoyaltyCardPoint_PointQRCode');
    qrCmp.setHidden(false);
  
    qrCmp.on('painted', function () {
      var wrap = document.getElementById("myPointQRCodeImg");
      if (!wrap) return;
  
      wrap.innerHTML = ""; // clear lama
  
      // ✅ Error correction tinggi bantu lagi senang scan
      new window.QRCode(wrap, {
        text: TmpQrCodeTxt,
        width: 260,
        height: 260,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: window.QRCode.CorrectLevel.H
      });
  

     
    }, null, { single: true });









    

    // var x = screen.width;
    // var xx = x - 28;
    // qrcode = new QRCode(document.getElementById("myPointQRCodeImg"), {
    //     //width: 330,
    //     width: xx,
    //     height: 360
    // });



    // qrcode.clear();

    // qrcode.makeCode(TmpQrCodeTxt);

    

}

// function makeCodePoint () {		
//     var elText = document.getElementById("text");
	
//     if (!elText.value) {
//         alert("Input a text");
//         elText.focus();
//         return;
//     }
	
//     qrcode.makeCodePoint(elText.value);
// }