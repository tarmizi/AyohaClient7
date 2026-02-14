Ext.define('BuskartApp.view.LoyaltyCard.FloatLoyaltyCardPoint_RedeemPrize', {

});

var _FloatLoyaltyCardPoint_RedeemPrize=null;


var isFloatLoyaltyCardPoint_RedeemPrizeOpen = 'N';





// function FloatLoyaltyCardPoint_RedeemPrizeCreateIfNeeded() {
//     if (_FloatLoyaltyCardPoint_RedeemPrize && !_FloatLoyaltyCardPoint_RedeemPrize.destroyed) return;
  
//     _FloatLoyaltyCardPoint_RedeemPrize = Ext.create('Ext.Container', {
//       id: 'LoadingFloatLoyaltyCardPoint_RedeemPrizeID',
//       zIndex: 250,
//       floated: true,
//       centered: true,
//       fullscreen: true,
//       closeAction: 'hide',
//       draggable: false,
//       modal: true,
//       styleHtmlContent: true,
//       layout: 'fit',
//       style: ayohaThemeColor_Hero(),
  
//       showAnimation: { type: 'popIn', duration: 250, easing: 'ease-out' },
//       hideAnimation: { type: 'popOut', duration: 250 },
  
//       listeners: {
//         beforehide: function () { return true; }
//       },
  
//       items: [
//         {
//           xtype: 'container',
//           width: '100%',
//           height: '100%',
//           style: 'background-color: transparent;',
//           layout: {
//             type: 'vbox',
//             pack: 'start',
//             align: 'stretch'
//           },
  
//           items: [
//             // =====================================================
//             // HEADER (kekal macam kau)
//             // =====================================================
//             {
//               xtype: 'container',
//               width: '100%',
//               height: 50,
//               docked: 'top',
//               id: 'containerFloatLoyaltyCardPoint_RedeemPrizeHeader1',
//               style: 'background-color: transparent;',
//               layout: { type: 'hbox', pack: 'center', align: 'center' },
  
//               items: [
//                 {
//                   xtype: 'button',
//                   id: 'btnFloatLoyaltyCardPoint_RedeemPrizeBack',
//                   height: 30,
//                   width: 65,
//                   margin: '0 0 0 0',
//                   html: '<div><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
//                   ui: 'plain',
//                   handler: function () {
//                     FloatLoyaltyCardPoint_RedeemPrizeHide(false);
//                   }
//                 },
//                 { xtype: 'spacer' },
//                 { margin: '-10 -5 0 0', html: '<font size=2 color=white><b>Redeem Prize</b></font>' },
//                 {
//                   xtype: 'button',
//                   id: 'btnFloatLoyaltyCardPoint_RedeemPrize_backright',
//                   height: 30,
//                   width: 65,
//                   margin: '-5 1 0 0',
//                   html: '<div><img src="resources/icons/AyohaRedeemPrize02.png" width="25" height="25" alt="Company Name"></div>',
//                   ui: 'plain',
//                   handler: function () {
//                     FloatLoyaltyCardPoint_RedeemPrizeHide(false);
//                   }
//                 }
//               ]
//             },
  
//             // =====================================================
//             // CONTENT AREA (GAMBAR FULL + OVERLAY INFO)
//             // =====================================================
//             {
//               xtype: 'container',
//               id: 'containerRedeemPrize',
//               flex: 1,                 // ✅ bagi content ambil semua ruang
//               width: '100%',
//               style: 'background-color: transparent;',
//               layout: 'fit',
  
//               items: [
//                 {
//                   xtype: 'container',
//                   id: 'redeemPrizeStage',
//                   width: '100%',
//                   height: '100%',
//                   style: 'background: transparent; position: relative;',
//                   layout: 'fit',
  
//                   items: [
//                     // -----------------------------------------------------
//                     // GAMBAR FULL (background-image ✅ confirm fill)
//                     // -----------------------------------------------------
//                     {
//                       xtype: 'container',
//                       id: 'FloatLoyaltyCardPoint_RedeemPrize_PrizeImg',
//                       width: '100%',
//                       height: '100%',
//                       style:
//                         'background-color:transparent;' +
//                         'background-size:cover;' +
//                         'background-position:center;' +
//                         'background-repeat:no-repeat;' +
//                         'border-radius:0px;'
//                       // background-image akan set masa runtime (setStyle)
//                     },
  
//                     // -----------------------------------------------------
//                     // OVERLAY INFO BAWAH (atas gambar)
//                     // -----------------------------------------------------
//                     {
//                       xtype: 'container',
//                       id: 'redeemPrizeInfoOverlay',
//                       width: '100%',
//                       height: 190,
//                       style:
//                         'position:absolute;left:0;right:0;bottom:0;' +
//                         'background-color: rgba(0, 0, 0, 0.55);' +
//                         'padding:12px 14px;',
  
//                       layout: { type: 'vbox', pack: 'start', align: 'stretch' },
  
//                       items: [
//                         {
//                           id: 'FloatLoyaltyCardPoint_RedeemPrize_PrizeLbl',
//                           html:
//                             '<div style="font-family:Arial, sans-serif;font-size:10px;margin:0;color:#fff;">Item Name:</div>' +
//                             '<div style="font-family:Arial, sans-serif;font-size:17px;margin:2px 0 8px 0;color:#fff;"><b>Sony External Hardisk 1TB</b></div>' +
  
//                             '<div style="font-family:Arial, sans-serif;font-size:10px;margin:0;color:#fff;">Item Code:</div>' +
//                             '<div style="font-family:Arial, sans-serif;font-size:17px;margin:2px 0 8px 0;color:#fff;"><b>79957-02</b></div>' +
  
//                             '<div style="font-family:Arial, sans-serif;font-size:10px;margin:0;color:#fff;">Entitled Point:</div>' +
//                             '<div style="font-family:Arial, sans-serif;font-size:19px;margin:2px 0 0 0;color:#fff;"><b>2000</b></div>'
//                         }
//                       ]
//                     }
//                   ]
//                 }
//               ]
//             },
  
//             // =====================================================
//             // BOTTOM BAR (kekal)
//             // =====================================================
//             {
//               xtype: 'container',
//               id: 'containerFloatLoyaltyCardPoint_RedeemPrize_MenuBottom',
//               width: '100%',
//               height: 50,
//               docked: 'bottom',
//               style: 'border-top:1px solid #D25959;background-color:white;',
//               layout: { type: 'hbox', pack: 'center', align: 'center' },
  
//               items: [
//                 {
//                   xtype: 'button',
//                   ui: 'plain',
//                   width: '95%',
//                   height: 45,
//                   margin: '0 0 0 0',
//                   id: 'btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCardss',
//                   html: '<div><button class="button3viewloyaltycard" style="width:100%;">Redeem Now</button></div>',
//                   handler: function () {
//                     FloatLoyaltyCardPoint_RedeemPrize_RedeemNow();
//                   }
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     });
//   }
  
  

/* =========================================================
   Redeem Prize (Blur Background Version)
   - Layer belakang: cover + blur (fill screen)
   - Layer depan: contain (image sebenar full, tak crop)
   ========================================================= */

   function FloatLoyaltyCardPoint_RedeemPrizeCreateIfNeeded() {
    if (_FloatLoyaltyCardPoint_RedeemPrize && !_FloatLoyaltyCardPoint_RedeemPrize.destroyed) return;
  
    _FloatLoyaltyCardPoint_RedeemPrize = Ext.create('Ext.Container', {
      id: 'LoadingFloatLoyaltyCardPoint_RedeemPrizeID',
      zIndex: 210,
      floated: true,
      centered: true,
      fullscreen: true,
      closeAction: 'hide',
      draggable: false,
      modal: true,
      styleHtmlContent: true,
      layout: 'fit',
      style: ayohaThemeColor_Hero(),
  
      showAnimation: { type: 'popIn', duration: 250, easing: 'ease-out' },
      hideAnimation: { type: 'popOut', duration: 250 },
  
      items: [
        {
          xtype: 'container',
          width: '100%',
          height: '100%',
          style: 'background-color: transparent;',
          layout: { type: 'vbox', pack: 'start', align: 'stretch' },
  
          items: [
            // ================= HEADER =================
            {
              xtype: 'container',
              width: '100%',
              height: 50,
              docked: 'top',
              id: 'containerFloatLoyaltyCardPoint_RedeemPrizeHeader1',
              style: 'background-color: transparent;',
              layout: { type: 'hbox', pack: 'center', align: 'center' },
  
              items: [
                {
                  xtype: 'button',
                  id: 'btnFloatLoyaltyCardPoint_RedeemPrizeBack',
                  height: 30,
                  width: 65,
                  html: '<div><img src="resources/icons/backwhite03Ori.png" width="25" height="20"></div>',
                  ui: 'plain',
                  handler: function () { FloatLoyaltyCardPoint_RedeemPrizeHide(false); }
                },
                { xtype: 'spacer' },
                { margin: '0 0 0 0', html: '<div style="width:130px;border-radius: 0px 0px 0px 0px;background-color: transparent;text-align:right;border: 1px none white;font-size: 14px;font-weight:bold;color:white;height:20px">Redeem Perk</div>' },
                {
                  xtype: 'button',
                  id: 'btnFloatLoyaltyCardPoint_RedeemPrize_backright',
                  height: 30,
                  width: 55,
                  margin: '0 0 0 -10',
                  html: '<div><img src="resources/icons/AyohaRedeemPrize02.png" width="25" height="25"></div>',
                  ui: 'plain',
                  handler: function () { FloatLoyaltyCardPoint_RedeemPrizeHide(false); }
                }
              ]
            },
  
            // ================= CONTENT (BLUR BG + FULL IMAGE) =================
            {
              xtype: 'container',
              id: 'containerRedeemPrize',
              flex: 1,
              width: '100%',
              style: 'background-color: transparent;',
              layout: 'fit',
  
              items: [
                {
                  xtype: 'container',
                  id: 'redeemPrizeStage',
                  width: '100%',
                  height: '100%',
                  cls: 'redeemStageBlur',
                  style: 'background: transparent; position: relative;',
                  layout: 'fit',
  
                  items: [
                    // --- 1) BLUR BACKGROUND LAYER (cover + blur) ---
                    {
                      xtype: 'container',
                      id: 'FloatLoyaltyCardPoint_RedeemPrize_PrizeImgBlur',
                      cls: 'redeemBgBlur',
                      width: '100%',
                      height: '100%',
                      style:
                        'position:absolute;left:0;top:0;right:0;bottom:0;' +
                        'background-color:#12061f;' +
                        'background-size:cover;' +
                        'background-position:center;' +
                        'background-repeat:no-repeat;' +
                        'filter: blur(16px);' +       // ✅ blur
                        'transform: scale(1.08);' +  // ✅ elak tepi kosong lepas blur
                        'opacity: 0.9;'
                    },
  
                    // --- 2) DARK OVERLAY supaya text jelas ---
                    {
                      xtype: 'container',
                      id: 'redeemBgDim',
                      width: '100%',
                      height: '100%',
                      style:
                        'position:absolute;left:0;top:0;right:0;bottom:0;' +
                        'background: linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.35));'
                    },
  
                    // --- 3) FOREGROUND IMAGE (contain, full image sebenar) ---
                    {
                      xtype: 'container',
                      id: 'FloatLoyaltyCardPoint_RedeemPrize_PrizeImg',
                      cls: 'redeemImgContain',
                      width: '100%',
                      height: '100%',
                      style:
                        'position:absolute;left:0;top:0;right:0;bottom:0;' +
                        'background-color:transparent;' +
                        'background-size:contain;' +
                        'background-position:center;' +
                        'background-repeat:no-repeat;'
                    },
  
                    // --- 4) INFO OVERLAY (bottom) ---
                    {
                      xtype: 'container',
                      id: 'redeemPrizeInfoOverlay',
                      width: '100%',
                      height: 190,
                      style:
                        'position:absolute;left:0;right:0;bottom:0;' +
                        'background-color: rgba(0, 0, 0, 0.45);' +
                        'padding:6px 14px;',
  
                      layout: { type: 'vbox', pack: 'start', align: 'stretch' },
  
                      items: [
                        {
                          id: 'FloatLoyaltyCardPoint_RedeemPrize_PrizeLbl',
                         // margin:'0 0 0 0',
                          html:
                            '<div style="font-family:Arial, sans-serif;font-size:10px;margin:0;color:#fff;">Item Name:</div>' +
                            '<div style="font-family:Arial, sans-serif;font-size:17px;margin:2px 0 8px 0;color:#fff;"><b>-</b></div>' +
                          //  '<div style="font-family:Arial, sans-serif;font-size:10px;margin:0;color:#fff;">Item Code:</div>' +
                          //  '<div style="font-family:Arial, sans-serif;font-size:17px;margin:2px 0 8px 0;color:#fff;"><b>-</b></div>' +
                            '<div style="font-family:Arial, sans-serif;font-size:10px;margin:0;color:#fff;">Entitled Point:</div>' +
                            '<div style="font-family:Arial, sans-serif;font-size:19px;margin:2px 0 0 0;color:#fff;"><b>-</b></div>'
                        },
                        {
                            xtype: 'container',
                            margin:'10 0 0 0',
                            cls: 'ayohaPillCTA',
                            html:
                              '<div class="pill">' +
                                '<div class="left">' +
                                  '<div class="iconCircle">' +
                                    '<img src="resources/icons/myredeemption.png" alt="Redeem" />' +
                                  '</div>' +
                                  '<div class="text">' +
                                    '<div class="title">Redeem Now</div>' +
                                  '</div>' +
                                '</div>' +
                                '<div class="rightCircle">' +
                                  '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true">' +
                                    '<path d="M10 6l6 6-6 6" />' +
                                  '</svg>' +
                                '</div>' +
                              '</div>',
                          
                            listeners: {
                              element: 'element',
                              tap: function () {
                                FloatLoyaltyCardPoint_RedeemPrize_RedeemNow();
                              }
                            }
                          },
                      ]
                    }
                  ]
                }
              ]
            },
  
            // ================= BOTTOM BAR =================
            {
              xtype: 'container',
              hidden:true,
              id: 'containerFloatLoyaltyCardPoint_RedeemPrize_MenuBottom',
              width: '100%',
              height: 60,
              docked: 'bottom',
              style: 'border-top:1px solid #D25959;background-color:white;',
              layout: { type: 'hbox', pack: 'center', align: 'center' },
  
              items: [

              
                  

                {
                  xtype: 'button',
                  ui: 'plain',
                  hidden:true,
                  width: '95%',
                  height: 45,
                  id: 'btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCardss',
                  html: '<div><button class="button3viewloyaltycard" style="width:100%;">Redeem Now</button></div>',
                  handler: function () {
                    FloatLoyaltyCardPoint_RedeemPrize_RedeemNow();
                  }
                }
              ]
            }
          ]
        }
      ]
    });
  }




var globalItemCodeFloatLoyaltyCardPoint_RedeemPrize;
var globalItemPointFloatLoyaltyCardPoint_RedeemPrize;
var globalRemarksFloatLoyaltyCardPoint_RedeemPrize;
var globalItemIDFloatLoyaltyCardPoint_RedeemPrize;
function FloatLoyaltyCardPoint_RedeemPrizeShow(val) {

    // Ext.Viewport.remove(_FloatLoyaltyCardPoint_RedeemPrize);
    // this.overlay = Ext.Viewport.add(FloatLoyaltyCardPoint_RedeemPrize());
    // this.overlay.show();
    // AddRoutePages("FloatLoyaltyCardPoint_RedeemPrizeHide()");
    // isFloatLoyaltyCardPoint_RedeemPrizeOpen = 'Y';



    
    FloatLoyaltyCardPoint_RedeemPrizeCreateIfNeeded();


    _FloatLoyaltyCardPoint_RedeemPrize.show();
    // ✅ push browser back (ikut style kau)
    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
      AyohaBrowserBack.push('FloatLoyaltyCardPoint_RedeemPrize', function () {
     
        FloatLoyaltyCardPoint_RedeemPrizeHide(true);
      });
    }
    isFloatLoyaltyCardPoint_RedeemPrizeOpen = 'Y';


    globalItemIDFloatLoyaltyCardPoint_RedeemPrize = val;
    var ImgPath = _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.findRecord('ID', val, 0, false, false, true);
    var ItemName = _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.findRecord('ID', val, 0, false, false, true);
    var ItemCode = _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.findRecord('ID', val, 0, false, false, true);
    var ItemPoint = _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.findRecord('ID', val, 0, false, false, true);
    var Remarks = _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.findRecord('ID', val, 0, false, false, true);
    var ModifiedItemCode = _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.findRecord('ID', val, 0, false, false, true);
    globalItemCodeFloatLoyaltyCardPoint_RedeemPrize = ItemCode.get('ItemCode');
    globalItemPointFloatLoyaltyCardPoint_RedeemPrize = ItemPoint.get('ItemPoint');
    globalRemarksFloatLoyaltyCardPoint_RedeemPrize = Remarks.get('Remarks');
   // Ext.getCmp('FloatLoyaltyCardPoint_RedeemPrize_PrizeImg').setHtml('<img src="' + ImgPath.get('ImgPath') + '"   style="width:100%;height:100%;zIndex:-100px;">');
   
   //Ext.getCmp('FloatLoyaltyCardPoint_RedeemPrize_PrizeLbl').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;width:100%;color:white;text-align:left;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;word-break:normal;margin:-16px 0px 0px 0px;;width:100%;color:white;text-align:left;"><b>' + ItemName.get('ItemName') + '</b></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;;width:100%;color:white;text-align:left;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;word-break:normal;margin:-16px 0px 0px 0px;;width:100%;color:white;text-align:left;"><b>' + ModifiedItemCode.get('ModifiedItemCode') + '</b></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;;width:100%;color:white;text-align:left;">Entitled Point:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;word-break:normal;margin:-16px 0px 0px 0px;;width:100%;color:white;text-align:left;"><b>' + ItemPoint.get('ItemPoint') + '</b></div>');

   // Ext.getCmp('FloatLoyaltyCardPoint_RedeemPrize_PrizeImg').setHtml('<img src="' + ImgPath.get('ImgPath') +'"  style="width:100%;height:100%;object-fit:cover;display:block;" />')



 // --- Background blur (cover) ---







    var imgUrl = ImgPath.get('ImgPath'); // pastikan field ni betul
    var itemName =ItemName.get('ItemName')|| '';
    var itemCode = ItemCode.get('ItemCode');
    var point = ItemPoint.get('ItemPoint') || '';






    var bgBlur = Ext.getCmp('FloatLoyaltyCardPoint_RedeemPrize_PrizeImgBlur');
    if (bgBlur && imgUrl) {
      bgBlur.setStyle({
        'background-image': 'url("' + imgUrl + '")',
        'background-size': 'cover',
        'background-position': 'center',
        'background-repeat': 'no-repeat'
      });
    }
   


  
    var imgCt = Ext.getCmp('FloatLoyaltyCardPoint_RedeemPrize_PrizeImg');
    if (imgCt && imgUrl) {
      imgCt.setStyle({
        'background-image': 'url("' + imgUrl + '")',
        'background-size': 'contain',
        'background-position': 'center',
        'background-repeat': 'no-repeat'

      });
    }
  

    var lbl = Ext.getCmp('FloatLoyaltyCardPoint_RedeemPrize_PrizeLbl');
    if (lbl) {
      lbl.setHtml(
        '<div style="font-family:Arial, sans-serif;font-size:10px;margin:0;color:#fff;">Item Name:</div>' +
        '<div style="font-family:Arial, sans-serif;font-size:17px;margin:2px 0 8px 0;color:#fff;"><b>' + itemName + '</b></div>' +
  
     //   '<div style="font-family:Arial, sans-serif;font-size:10px;margin:0;color:#fff;">Item Code:</div>' +
      //  '<div style="font-family:Arial, sans-serif;font-size:17px;margin:2px 0 8px 0;color:#fff;"><b>' + itemCode + '</b></div>' +
  
        '<div style="font-family:Arial, sans-serif;font-size:10px;margin:0;color:#fff;">Entitled Point:</div>' +
        '<div style="font-family:Arial, sans-serif;font-size:19px;margin:2px 0 0 0;color:#fff;"><b>' + point + '</b></div>'
      );
    }







}





function FloatLoyaltyCardPoint_RedeemPrizeHide(fromBack,animCfg) {
    // if (isFloatLoyaltyCardPoint_RedeemPrizeOpen == "Y") {
    //     _FloatLoyaltyCardPoint_RedeemPrize.hide(); isFloatLoyaltyCardPoint_RedeemPrizeOpen = 'N';
    //     RemovePages("FloatLoyaltyCardPoint_RedeemPrizeHide()");
    // }
   


    if (isFloatLoyaltyCardPoint_RedeemPrizeOpen == 'Y') {
       
        _FloatLoyaltyCardPoint_RedeemPrize.hide();

        if (animCfg) {
            _FloatLoyaltyCardPoint_RedeemPrize.hide(Ext.fx.Animation(animCfg));
          } else {
            _FloatLoyaltyCardPoint_RedeemPrize.hide();
          }
          isFloatLoyaltyCardPoint_RedeemPrizeOpen = 'N';
         
        
          // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
          if (fromBack !== true) {
            AyohaBrowserBack.close('FloatLoyaltyCardPoint_RedeemPrize');
          }
    }
}



function FloatLoyaltyCardPoint_RedeemPrize_RedeemNow() {
   
    var obj = {
        "ID": 0,
        "ItemCode": globalItemCodeFloatLoyaltyCardPoint_RedeemPrize,
        "RedeemHistoryCode": globalItemCodeFloatLoyaltyCardPoint_RedeemPrize,
        "RedeemHistoryStatus": "Submitted",
        "RedeemHistoryStatusBy": GetCurrAyohaUserAccountNo(),
        "RedeemPoint": globalItemPointFloatLoyaltyCardPoint_RedeemPrize,
        "Remarks": globalRemarksFloatLoyaltyCardPoint_RedeemPrize,
        "RowStatus": 'Active',
        "EnterpriseAccNo": globalEnterpriseAccNo_FloatLoyaltyCardPoint,
        "PointCampaignCode": globalPointCampaignCode_FloatLoyaltyCardPoint,
        "RedeemHistoryApprovalStatusBy": GetCurrAyohaUserAccountNo()

    };
    console.log(obj);
    Ext.Ajax.request({

        // method: "POST",

        // url: GetAPIurl() + '/LoyaltyPointRedeemPrizeHistory/LoyaltyPointRedeemPrizeHistoryInsertUpdate',

        // dataType: "json",
        // data: JSON.stringify(obj),
        // headers: {
        //     "Content-Type": "application/json; charset=utf-8"
        // },

        url: GetAPIurl() + '/LoyaltyPointRedeemPrizeHistory/LoyaltyPointRedeemPrizeHistoryInsertUpdate',
        method: 'POST',                 // ✅ betul
        jsonData: obj,                 // ✅ auto encode JSON + set body
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

             //   swalFireSuccess("Redeem Submitted Successfully!");
             FloatLoyaltyCardPoint_RedeemPrize_SubmitRedeemPerk();
                FloatLoyaltyCardPoint_RedeemPrizeHide(false);
                Load_FloatLoyaltyCardPoint_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore(globalPointCampaignCode_FloatLoyaltyCardPoint, globalEnterpriseAccNo_FloatLoyaltyCardPoint);
                FloatLoyaltyCardPoint_MoveCarousel(1);
               // Dashboard_AyohaRewardSummary();

            }
            else {

                swalFireFail("Redeem Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");


            }

            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            // swalFireFail("Scan Failed!!");

        }

    });


}

//GetCurrAyohaUserGroupCode()







function FloatLoyaltyCardPoint_RedeemPrize_SubmitRedeemPerkORI() {
    // ✅ fix: string -> number
   
   
    let subText = "Redeem Perks Submitted Successful!";

   
    // kalau ada swal sedang buka, tutup dulu
    if (window.Swal && Swal.isVisible && Swal.isVisible()) Swal.close();
   
    // ✅ elak "tap event yang sama" buat modal rasa pelik dalam ExtJS
  
      Swal.fire({
        title: '',
        html: `
          <div class="ayohaSwalCard">
            <div class="ayohaSwalTitle">:

            🎁 Redeem Perks</div>
   
            <div class="ayohaSwalPoints">
              <span class="ayohaSwalCoin">🪙</span>
              
            </div>
   
            <div class="ayohaSwalSub">${escapeHtml(subText)}</div>
   
            <div class="ayohaSwalConfettiWrap"></div>
          </div>
        `,
        confirmButtonText: 'OK',
        showConfirmButton: true,
        buttonsStyling: false,
   
        // IMPORTANT utk elak layout/scroll issue
        heightAuto: false,
        position: 'center',
        // auto close optional (boleh buang kalau tak nak)
       // timer: 1800,
        timerProgressBar: false,
   
        allowOutsideClick: true,
   
        customClass: {
          container: 'ayohaRewardSwalContainer',
          popup: 'ayohaRewardSwalPopup',
          backdrop: 'ayohaRewardSwalBackdrop',
          htmlContainer: 'ayohaRewardSwalHtml',
          confirmButton: 'ayohaRewardSwalBtn'
        },
   
        didOpen: () => {
          // hide Ext scroll indicator / lock scroll bawah
          document.body.classList.add('ayohaRewardOverlayOn');
          document.documentElement.classList.add('ayohaRewardOverlayOn');
   
        //   const popup = Swal.getPopup();
        //   if (popup) spawnConfettiFromCoin(popup, 30);
        },
   
        willClose: () => {
          document.body.classList.remove('ayohaRewardOverlayOn');
          document.documentElement.classList.remove('ayohaRewardOverlayOn');
        }
      });
   }





   function FloatLoyaltyCardPoint_RedeemPrize_SubmitRedeemPerkORI2() {
    let subText = "Redeem Perks Submitted Successful!";
  
    // kalau ada swal sedang buka, tutup dulu
    if (window.Swal && Swal.isVisible && Swal.isVisible()) Swal.close();
  
    Swal.fire({
      title: '',
      html: `
        <div class="ayohaSwalCard">
          <div class="ayohaSwalTitle">🎁 Redeem Perks</div>
  
          <div class="ayohaSwalPoints">
            <span class="ayohaSwalCoin">🪙</span>
          </div>
  
          <div class="ayohaSwalSub">${escapeHtml(subText)}</div>
  
          <div class="ayohaSwalConfettiWrap"></div>
        </div>
      `,
      confirmButtonText: 'OK',
      showConfirmButton: true,
      buttonsStyling: false,
  
      // ✅ JANGAN AUTO CLOSE
      timer: undefined,
      timerProgressBar: false,
  
      // ✅ boleh tutup bila tekan luar / ESC
      allowOutsideClick: true,
      allowEscapeKey: true,
  
      // IMPORTANT utk elak layout/scroll issue
      heightAuto: false,
      position: 'center',
  
      customClass: {
        container: 'ayohaRewardSwalContainer',
        popup: 'ayohaRewardSwalPopup',
        backdrop: 'ayohaRewardSwalBackdrop',
        htmlContainer: 'ayohaRewardSwalHtml',
        confirmButton: 'ayohaRewardSwalBtn'
      },
  
      didOpen: () => {
        document.body.classList.add('ayohaRewardOverlayOn');
        document.documentElement.classList.add('ayohaRewardOverlayOn');
      },
  
      willClose: () => {
        document.body.classList.remove('ayohaRewardOverlayOn');
        document.documentElement.classList.remove('ayohaRewardOverlayOn');
      }
    });
  }
  

  function FloatLoyaltyCardPoint_RedeemPrize_SubmitRedeemPerk() {
    let subText = "Redeem Perks Submitted Successful!";
  
    if (window.Swal && Swal.isVisible && Swal.isVisible()) Swal.close();
  
    Swal.fire({
      target: document.body, // ✅ pastikan attach ke body (bukan dalam Ext container/transform)
  
      title: '',
      html: `
        <div class="ayohaSwalCard">
          <div class="ayohaSwalTitle">🎁 Redeem Perks</div>
          <div class="ayohaSwalPoints"><span class="ayohaSwalCoin">🪙</span></div>
          <div class="ayohaSwalSub">${escapeHtml(subText)}</div>
        </div>
      `,
      confirmButtonText: 'OK',
      showConfirmButton: true,
      buttonsStyling: false,
  
      // ✅ jangan auto close
      timer: undefined,
      allowOutsideClick: true,
      allowEscapeKey: true,
  
      heightAuto: false,
      position: 'center',
  
      customClass: {
        container: 'ayohaRewardSwalContainer',
        popup: 'ayohaRewardSwalPopup',
        backdrop: 'ayohaRewardSwalBackdrop',
        htmlContainer: 'ayohaRewardSwalHtml',
        confirmButton: 'ayohaRewardSwalBtn'
      },
  
      didOpen: () => {
        document.body.classList.add('ayohaRewardOverlayOn');
        document.documentElement.classList.add('ayohaRewardOverlayOn');
    //  const popup = Swal.getPopup();
    //       if (popup) spawnConfettiFromCoin(popup, 1000);
        // ✅ paksa z-index runtime (kalau ExtJS override)
        const c = Swal.getContainer();
        if (c) c.style.zIndex = '99999999';
      },
  
      willClose: () => {
        document.body.classList.remove('ayohaRewardOverlayOn');
        document.documentElement.classList.remove('ayohaRewardOverlayOn');
      }
    });
  }
  