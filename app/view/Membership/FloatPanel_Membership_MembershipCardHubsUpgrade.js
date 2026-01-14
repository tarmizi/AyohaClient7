Ext.define('BuskartApp.view.Membership.FloatPanel_Membership_MembershipCardHubsUpgrade', {

});

var _FloatPanel_Membership_MembershipCardHubsUpgrade;


var isFloatPanel_Membership_MembershipCardHubsUpgradeOpen = 'N';

var AyohaHeroDockHtml =
  '<div class="ayohaHeroDockRowTop" ' +
    'onclick="if(event&&event.stopPropagation){event.stopPropagation();} event.cancelBubble=true;">' +

    '<div class="ayohaHeroDockPanelTop">' +

      '<div class="ayohaDockLeftTop" ' +
        'onclick="if(event&&event.stopPropagation){event.stopPropagation();} event.cancelBubble=true; FloatPanel_Filter && FloatPanel_Filter();">' +
        '<span class="lbl">Radius:</span>' +
        '<b class="val ayohaRadiusValTop">Any</b>' +
      '</div>' +

      '<div class="ayohaDockRightTop" role="tablist" aria-label="View mode">' +

        '<button class="ayohaViewSegBtnTop isActive" type="button" ' +
          'onclick="if(event&&event.stopPropagation){event.stopPropagation();} event.cancelBubble=true; AyohaHub_SetViewMode && AyohaHub_SetViewMode(\'default\', this);">' +
          '<span class="ico" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.8h12v-.8a.5.5 0 0 0-.5-.5h-11ZM18 10H6v7.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5V10Z"/></svg>' +
          '</span>' +
          '<span class="txt">Default</span>' +
        '</button>' +

        '<button class="ayohaViewSegBtnTop" type="button" ' +
          'onclick="if(event&&event.stopPropagation){event.stopPropagation();} event.cancelBubble=true; AyohaHub_SetViewMode && AyohaHub_SetViewMode(\'simple\', this);">' +
          '<span class="ico" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24"><path d="M6 7h12v2H6V7Zm0 4h12v2H6v-2Zm0 4h12v2H6v-2Z"/></svg>' +
          '</span>' +
          '<span class="txt">Simple</span>' +
        '</button>' +

        '<button class="ayohaViewSegBtnTop" type="button" ' +
          'onclick="if(event&&event.stopPropagation){event.stopPropagation();} event.cancelBubble=true; AyohaHub_SetViewMode && AyohaHub_SetViewMode(\'fav\', this);">' +
          '<span class="ico" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24"><path d="M12 21s-7-4.35-9.33-8.36C.94 9.3 2.2 6.5 5.2 5.6c1.7-.5 3.4.05 4.55 1.3L12 9.12l2.25-2.22c1.15-1.25 2.85-1.8 4.55-1.3 3 .9 4.26 3.7 2.53 7.04C19 16.65 12 21 12 21z"/></svg>' +
          '</span>' +
          '<span class="txt">Fav</span>' +
        '</button>' +

      '</div>' +

    '</div>' +
  '</div>';




  
  function AyohaHub_SetViewMode(mode, btn){
    try{
      if(!btn) return;
  
      // ✅ find group container (robust untuk WebView lama)
      var group = null;
      var el = btn;
  
      while(el && el.nodeType === 1){
        var cls = ' ' + (el.className || '') + ' ';
        if(cls.indexOf(' ayohaDockRightTop ') > -1){ group = el; break; }
        el = el.parentNode;
      }
  
      // fallback (kalau structure berubah)
      if(!group) group = btn.parentNode;
  
      if(group){
        // ✅ remove active from all buttons in same group
        var all = group.querySelectorAll('.ayohaViewSegBtnTop');
        for(var i=0;i<all.length;i++){
          all[i].classList.remove('isActive');
          all[i].setAttribute('aria-selected','false');
          all[i].setAttribute('aria-pressed','false');
        }
  
        // ✅ set active
        btn.classList.add('isActive');
        btn.setAttribute('aria-selected','true');
        btn.setAttribute('aria-pressed','true');
      }
  
      // optional: simpan state (kalau kau nak guna later)
      window.AyohaHub_ViewMode = mode;
  
    }catch(e){}
  
    // TODO: tukar view list ikut mode
    // mode: 'default' | 'simple' | 'fav'
  }
  

function FloatPanel_Membership_MembershipCardHubsUpgrade() {

    _FloatPanel_Membership_MembershipCardHubsUpgrade =
    Ext.create('Ext.Container', {
        zIndex: 20,
        xtype: 'container',
        height: '100%',
        width: '100%',
        id: 'FloatPanel_Membership_MembershipCardHubsUpgradeID',
        draggable: false,
        centered: true,
        modal: false, // Use Sencha's modal handling
        hideOnMaskTap: false, // Prevent closing on tap        
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'center'

        },
        showAnimation: {
            type: 'popIn',
            duration: 150,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
           
        },
       style:ayohaThemeColor_Body(),
        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
              style: ' background-color:transparent;',
               layout: {
                type: 'vbox',
                pack: 'start',  // Center the white box vertically
                align: 'center'  // Center the white box horizontally
            },
              
                items: [
                    {

                        xtype: 'container',
                        width: '100%',
                        docked: 'top',
                        height: ayoha_HeaderHeight(),
                        style:ayohaThemeColor_Header(),
                        id: 'containerFloatPanel_Membership_MembershipCardHubsUpgradeHeader',
                       
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
                                                 id: 'btnFloatPanel_Membership_MembershipCardHubsUpgradeBack',
                                                 height: 30,
                                                 width: 35,
                                                 margin: '5 0 0 10',
                                                 // iconCls: 'list',
                                                 html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                                // html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                 ui: 'plain',
                                                 handler: function () {
                                                     // FloatPanel_Membership_MembershipCardHubsUpgradeHide();
                                                     // FloatPanel_Membership_MembershipCardHubsUpgrade_AddCardHide();
                                                     isFloatPanel_Membership_MembershipCardHubsUpgradeOpen = 'N';
                                                     _FloatPanel_Membership_MembershipCardHubsUpgrade.hide(Ext.fx.Animation({
                                                         type: 'slideOut',
                                                         direction: 'left',
                                                         easing: 'cubic-bezier(.7,0,.7,1)',
                                                         duration: 250

                                                     }));
                                                     RemovePages("FloatPanel_Membership_MembershipCardHubsUpgradeHide()");

                                                 }
                                             },

                                              {
                                                  xtype: 'spacer',

                                              },
                                              {
                                                margin: '0 15 0 0',
                                                id: 'htmlFloatPanel_Membership_MembershipCardHubsUpgrade_TitleHeaderTxt',
                                               html:ayohaTheme_HeaderText('Merchant Membership Cards'),
                                               // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-weight:700;font-size:18px;color:white">Ayoha Merchant Review</div>',
                                            },                                
     

                                             


                                                    {
                                                        xtype: 'button',
                                                        hidden:true,
                                                        id: 'btnFloatPanel_Membership_MembershipCardHubsUpgrade_CardIcon',
                                                        height: 30,
                                                        width: 35,
                                                        // iconCls: 'list',
                                                        html: '<div ><img src="resources/icons/membershicardwhite.png" width="25" height="20" alt="Company Name"></div>',
                                                        ui: 'plain',
                                                        handler: function () {

                                                            isFloatPanel_Membership_MembershipCardHubsUpgradeOpen = 'N';

                                                            _FloatPanel_Membership_MembershipCardHubsUpgrade.hide(Ext.fx.Animation({
                                                                type: 'slideOut',
                                                                direction: 'right',
                                                                easing: 'cubic-bezier(.7,0,.7,1)',
                                                                duration: 250

                                                            }));
                                                            RemovePages(_FloatPanel_Membership_MembershipCardHubsUpgrade, "isFloatPanel_Membership_MembershipCardHubsUpgradeOpen");
                                                            //FloatPanel_Membership_MembershipCardHubsUpgrade_AddCardHide();
                                                        }
                                                    },









                               ]

                    },
                    


                 

                    {
                        xtype: 'container',
                        width: '100%',
                        height: '100%',
                        layout: 'fit', // Layout Fit memastikan item bertindih
                        items: [
                    
                            // --- 1. HEADER (Floating/Docked Top) ---
                            // Ini kekal di atas. Kita tambah Z-Index supaya dia duduk ATAS list.
                            {
                                xtype: 'container',
                              docked: 'top',
                              //top: 0, // Paksa duduk atas
                               width: '100%',
                                height: 0, // Trick height 0 supaya dia overlay
                                style: 'background-color:transparent; z-index: 99; position: absolute; top: 0; left: 0;', 
                                cls: 'ayohaDockTop',
                                html: AyohaHeroDockHtml




                          
                            },
                    
                            // --- 2. LIST (Content) ---
                            {
                                xtype: 'list',
                                id: 'FloatPanel_Membership_MembershipCardHubsUpgradeList',
                                cls: 'ayohaHubList ayohaListReserveBottom',
                                margin: '0 0 0 0',
                    
                                // Flex tak perlu dalam layout fit, tapi takpe biar je
                                flex: 1, 
                                
                                style: 'background-color:rgba(255, 255, 255, 0); border-radius:0;',
                                
                                // Scrollable settings
                                scrollable: {
                                    direction: 'vertical',
                                    indicators: false
                                },
                    
                                disableSelection: true,
                                itemHeight: 'auto', // Auto height calculation
                                useSimpleItems: true,
                                bufferSize: 5,
                                
                                store: 'MembershipCardStore', // Pastikan store ada di sini
                    
                                // --- INI RAHSIANYA (SPACER DALAM LIST) ---
                                // Kita masukkan item dalam list dengan scrollDock: 'top'.
                                // Ia akan jadi sebahagian daripada scroll, menolak item pertama ke bawah.
                                items: [
                                    {
                                        xtype: 'component',
                                        scrollDock: 'top', // PENTING: Ini letak dia dalam scroll area
                                        docked: 'top',     // Sencha Touch 2.x kadang perlu ini juga
                                        height: 68,       // Ubah ikut ketinggian sebenar Header anda
                                        style: 'background: transparent;',
                                        html: '&nbsp;'
                                    }
                                ],
                    
                                itemTpl: [
                                    '<div class="ayohaHubRow">',
                                     // '<div class="ayohaHubCard" OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)">',
                                      '<div class="ayohaHubCard" OnClick="FloatPanel_Membership_MembershipCardHubsUpgrade_CheckInPageShow(`{EnterprisesLogo}`,`{EnterprisesName}`,`{EnterpriseAddress}`,`{TodayCheckInCount}`,`{EnterpriseAccNo}`)">',
                                  
                                        '<div class="ayohaHubHero" style="background-image:url(\'{MembershipCardBackgroundImg_back}\');">',
                                            '{ModifiedTodayCheckInCount}',
                                          '<div class="ayohaMiniCard" style="background-image:url({MembershipCardBackgroundImg});">',
                                            '<div class="ayohaMiniTop">{ModifiedEnterprisesLogoDesignOneTwo}{ModifiedEnterprisesNameDesignOneTwo}</div>',
                                  
                                            '<div class="ayohaMiniMid">',
                                              '<div class="ayohaMiniType">{MembershipCardType}</div>',
                                              '<div class="ayohaMiniNo">{ModifiedMembershipNo}</div>',
                                              '<div class="ayohaMiniName">{ModifiedAyohaUserAccountName}</div>',
                                            '</div>',
                                  
                                            '<div class="ayohaMiniBottom">',
                                              '<div class="ayohaMiniCol">',
                                                '<div class="k">Member Since</div>',
                                                '<div class="v">{ModifiedMembershipDate}</div>',
                                              '</div>',
                                              '<div class="ayohaMiniCol right">',
                                                '<div class="k">Valid Until</div>',
                                                '<div class="v">{ValidUntilDateMonthYearOnly}</div>',
                                              '</div>',
                                            '</div>',
                                          '</div>',
                                  
                                          '<div class="ayohaHubOverlay">',
                                          '{ModifiedCTA}',                                     
                                          '</div>',
                                  
                                        '</div>',
                                  
                                        '<div class="ayohaHubInfo">',
                                          '<div class="ayohaHubInfoTop">',
                                            '<div class="ayohaHubName">{EnterprisesName}</div>',
                                            '<div class="ayohaHubType">{BusinessTypeGroup}</div>',
                                          '</div>',
                                  
                                          '<div class="ayohaHubAddr">{ModifiedEnterpriseAddress}</div>',
                                  
                                          '<div class="ayohaHubRating">',
                                            '{ModifiedCountStarCountStar}',
                                            '<a class="ayohaHubReviews" href="javascript:void(0)">{CountReviewer} Reviews</a>',
                                          '</div>',
                                        '</div>',
                                  
                                      '</div>',
                                    '</div>'
                                ].join('')
                            },
                    



                            {
                       
                                xtype: 'container',
                                margin: '0 0 0 0',
                               docked:'bottom',                    
                                height: 82,
                                width: '100%',
                                style: 'border-top:2px solid rgba(124,58,237,.14);border-bottom:2px none #D25959;border-left:2px none #D25959;border-right:2px none #D25959;background-color:transparent;',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center'
                                },
                                items:[
                                    {
                                        height: 82,
                                        //margin:'-5 0 0 0',
                                        width: '100%',
                                        html:'<div class="ayohaSearchWrap">' +
                                        '<div class="ayohaSearchBar">' +
                                    
                                          '<span class="ayohaSearchIco" aria-hidden="true">' +
                                            '<svg viewBox="0 0 24 24">' +
                                              '<path d="M10.5 3a7.5 7.5 0 1 0 4.6 13.4l3.2 3.2a1 1 0 0 0 1.4-1.4l-3.2-3.2A7.5 7.5 0 0 0 10.5 3Zm0 2a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11Z"></path>' +
                                            '</svg>' +
                                          '</span>' +
                                    
                                          '<input id="ayohaSearchInput" class="ayohaSearchInput" type="search" ' +
                                            'placeholder="Search merchants or cards…" autocomplete="off" />' +
                                    
                                          '<button class="ayohaIconBtn ayohaIconBtnQr" aria-label="Scan QR" ' +
                                            'onclick="if(event.stopPropagation){event.stopPropagation();} event.cancelBubble=true; ' +
                                            'FloatPanel_ScanQR && FloatPanel_ScanQR();">' +
                                            '<svg viewBox="0 0 24 24">' +
                                              '<path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm12 0h2v2h-2v-2zm-4 0h2v4h-2v-4zm6 0h2v6h-2v-6zm-4 4h6v2h-6v-2z"></path>' +
                                            '</svg>' +
                                          '</button>' +
                                    
                                          '<button class="ayohaIconBtn ayohaIconBtnFilter" aria-label="Filter" ' +
                                            'onclick="if(event.stopPropagation){event.stopPropagation();} event.cancelBubble=true; ' +
                                            'FloatPanel_Filter && FloatPanel_Filter();">' +
                                            '<svg viewBox="0 0 24 24">' +
                                              '<path d="M4 6h16v2H4V6zm3 5h10v2H7v-2zm3 5h4v2h-4v-2z"></path>' +
                                            '</svg>' +
                                          '</button>' +
                                    
                                        '</div>' +
                                      '</div>',
                                    }
                              
                                     
                                ]
                           },








                            // --- 3. SEARCH BAR (Docked Bottom) ---
//                             {
                           
//                                 xtype: 'container',
//                                 // JANGAN GUNA DOCKED: 'BOTTOM'. 
//                                 // Kita guna positioning absolute supaya dia terapung atas list.
                                
//                                 height: 90, 
//                                 width: '100%',
//                                 docked:'bottom',
//                                 // CSS Magic:
//                                 // bottom: 20px -> Terapung sikit dari bawah skrin (Nampak floating)
//                                 // pointer-events: none -> Supaya kalau user tekan ruang kosong tepi bar, tembus ke list belakang
//                                // style: 'position: absolute; bottom: 20px; left: 0; z-index: 100; background: transparent; pointer-events: none; padding: 0 15px;',
//                              //  style: 'background-color:rgba(255, 255, 255, 0);border-radius: 0px 0px 0px 0px;',
                               
//                                style: 'position: absolute; bottom: 20px; left: 0; width: 100%; z-index: 100; background-color: transparent !important; background: transparent !important; box-shadow: none !important; border: none !important; pointer-events: none; padding: 0 15px;',
//                             //   style: 'position: absolute; bottom: 20px; left: 0; width: 100%; z-index: 100; background-color: transparent !important; background: transparent !important; box-shadow: none !important; border: none !important; pointer-events: none; padding: 0 15px;',
                               
//                                layout: {
//                                     type: 'vbox',
//                                     pack: 'center',
//                                     align: 'stretch' // Stretch supaya lebar ikut skrin
//                                 },



//                                 items: [
//                                     {
//                                         xtype: 'component',
//             height: 65, // Tinggi bar putih
            
//             // PENTING: pointer-events: auto supaya boleh klik input/button
//             // Shadow yang lawa & Rounded corner besar (Capsule shape)
//             // Background putih/blur sikit (Glassmorphism)
          
//            // style: 'pointer-events: auto; background: rgba(255,255,255,0.95); border-radius: 999px; box-shadow: 0 10px 25px rgba(0,0,0,0.15); border: 3px solid rgba(255,255,255,0.3);',
                                      
//             // Tukar style pada items -> component -> style
// style: 'pointer-events: auto; ' +
// 'background: #FFFFFF; ' + // Solid White (Jangan transparent)
// 'border-radius: 50px; ' +

// // 1. BORDER HALUS (Penting untuk define shape)
// 'border: 1px solid rgba(81, 45, 168, 0.2); ' + 

// // 2. SHADOW BERWARNA (Lebih premium dari shadow hitam)
// // Shadow ni warna ungu gelap, opacity rendah. Nampak timbul betul.
// 'box-shadow: 0 8px 25px rgba(81, 45, 168, 0.25); ' + 

// 'display: flex; align-items: center; padding: 0 5px;',
//             html:'<div class="ayohaSearchWrap">' +
//                                         '<div class="ayohaSearchBar">' +
                                      
                                    
//                                           '<span class="ayohaSearchIco" aria-hidden="true">' +
//                                             '<svg viewBox="0 0 24 24">' +
//                                               '<path d="M10.5 3a7.5 7.5 0 1 0 4.6 13.4l3.2 3.2a1 1 0 0 0 1.4-1.4l-3.2-3.2A7.5 7.5 0 0 0 10.5 3Zm0 2a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11Z"></path>' +
//                                             '</svg>' +
//                                           '</span>' +
                                    
//                                           '<input id="ayohaSearchInput" class="ayohaSearchInput" type="search" ' +
//                                             'placeholder="Search merchants or cards…" autocomplete="off" />' +
                                    
//                                           '<button class="ayohaIconBtn ayohaIconBtnQr" aria-label="Scan QR" ' +
//                                             'onclick="if(event.stopPropagation){event.stopPropagation();} event.cancelBubble=true; ' +
//                                             'FloatPanel_ScanQR && FloatPanel_ScanQR();">' +
//                                             '<svg viewBox="0 0 24 24">' +
//                                               '<path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm12 0h2v2h-2v-2zm-4 0h2v4h-2v-4zm6 0h2v6h-2v-6zm-4 4h6v2h-6v-2z"></path>' +
//                                             '</svg>' +
//                                           '</button>' +
                                    
//                                           '<button class="ayohaIconBtn ayohaIconBtnFilter" aria-label="Filter" ' +
//                                             'onclick="if(event.stopPropagation){event.stopPropagation();} event.cancelBubble=true; ' +
//                                             'FloatPanel_Filter && FloatPanel_Filter();">' +
//                                             '<svg viewBox="0 0 24 24">' +
//                                               '<path d="M4 6h16v2H4V6zm3 5h10v2H7v-2zm3 5h4v2h-4v-2z"></path>' +
//                                             '</svg>' +
//                                           '</button>' +
                                    
//                                         '</div>' +
//                                       '</div>',
//                                     }
//                                 ]
//                             }
                        ]
                    },






                   
                ]
            },

        ]

    });
    return _FloatPanel_Membership_MembershipCardHubsUpgrade;



}








function FloatPanel_Membership_MembershipCardHubsUpgradeShow() {

    Ext.Viewport.remove(_FloatPanel_Membership_MembershipCardHubsUpgrade);
    this.overlay = Ext.Viewport.add(FloatPanel_Membership_MembershipCardHubsUpgrade());
    this.overlay.show();
   // LoadingPanelShow(getLoadingIcon(), 'Loading....');
    AddRoutePages("FloatPanel_Membership_MembershipCardHubsUpgradeHide()");
    isFloatPanel_Membership_MembershipCardHubsUpgradeOpen = 'Y';
   // Dashboard_MembershipCardHub();

   FloatPanel_Membership_MembershipCardHubsUpgrade_MembershipCardLoadBySubscriberAccNoDashboardMainStore();
    //document.getElementById("input-FloatPanel_Membership_MembershipCardHubsUpgrade_SearchTxt").addEventListener("keyup", MembershipsLoadBySubscriberAccNoStoreOnKeyUp);
 




    
    
}


function  FloatPanel_Membership_MembershipCardHubsUpgrade_MembershipCardLoadBySubscriberAccNoDashboardMainStore() {
   
        globalOpenMembershipCardList_Upgrade_From = 'DashboardMain';
        globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed = 'NO';
        _DataStore_MembershipCard_LoadforCheck_InStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_MembershipCard_LoadforCheck_InStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCard_LoadforCheck_In');
        
        _DataStore_MembershipCard_LoadforCheck_InStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    // var allData = records;
        
                    // // Store - MembershipCardFee > 0
                    // var storeWithFee = Ext.create('Ext.data.Store', {
                    //     model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
                    //     data: allData.filter(function (record) {
                    //         return record.get('MembershipCardFee') > 0;
                    //     })
                    // });
        
                    // // Store - MembershipCardFee <= 0
                    // var storeFOC = Ext.create('Ext.data.Store', {
                    //     model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
                    //     data: allData.filter(function (record) {
                    //         return record.get('MembershipCardFee') <= 0;
                    //     })
                    // });
        
                    // // Store - Top Rated (3.5 stars and above, sorted descending)
                    // var storeTopRated = Ext.create('Ext.data.Store', {
                    //     model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
                    //     data: allData
                    //         .filter(function (record) {
                    //             var star = record.get('CountStar');
                    //             return star !== null && star !== undefined && star >= 3.5;
                    //         })
                    //         .sort(function (a, b) {
                    //             return b.get('CountStar') - a.get('CountStar');
                    //         })
                    // });
        
                    // Set stores to list components
                 
                    Ext.getCmp('FloatPanel_Membership_MembershipCardHubsUpgradeList').setStore(_DataStore_MembershipCard_LoadforCheck_InStore);

        
                    console.log('Stores updated based on loaded membership card data.');
                } else {
                    console.log('Failed to load membership card data or no records returned.');
                }
            }
        });
        
    
    
    
    
    
    
    
    
    
    
    }
    


function FloatPanel_Membership_MembershipCardHubsUpgradeHide() {
    // FloatPanel_Membership_MembershipCardHubsUpgrade_AddCardHide();
    if (isFloatPanel_Membership_MembershipCardHubsUpgradeOpen == "Y") {
        _FloatPanel_Membership_MembershipCardHubsUpgrade.hide(); isFloatPanel_Membership_MembershipCardHubsUpgradeOpen = 'N';
        RemovePages("FloatPanel_Membership_MembershipCardHubsUpgradeHide()");
    }
   
}


function FloatPanel_Membership_MembershipCardHubsUpgrade_CheckInPageShow(logoUrl,EnterpriseName,EnterpriseTagline,StrCheckInCount,EnterpiseAccNo) {
    // Create a new div element to hold our custom HTML

  var CheckInCount=parseInt(StrCheckInCount);
    if(CheckInCount <=2){
        const popupContent = document.createElement('div');
        // This HTML is unchanged
        popupContent.innerHTML = `
            <div class="checkin-popup">
                <div class="checkin-icon-top">🎁</div>
                <div class="checkin-header">Ayoha Reward Membership</div>
                <h2 class="checkin-title">Check-In Point Loyalty</h2>
                <hr class="checkin-divider">
                <div class="checkin-stamp">
                   
                    <img src="${logoUrl}" alt="${EnterpriseName} Logo" style="width:78px;height:78px; object-fit: contain; border-radius: 10px;">
                </div>
                
          
                <p class="checkin-subtitle">${EnterpriseName}</p>
               
                <span class="checkin-subtitle-small">${EnterpriseTagline}</span>
                <div class="checkin-info">
                    <p>Get <strong>10 FREE Ayoha Points</strong> just for visiting our ayoha merchant -<strong> ${EnterpriseName}</strong> today. You can collect this<strong>10 point </strong>up to <strong>3 times per day!</strong></p>
                </div>
            </div>
        `;
    
        // --- THIS IS THE UPDATED SweetAlert2 CODE ---
        Swal.fire({
            // Use 'html' to pass the DOM element
            html: popupContent,
    
            // Use 'customClass' to apply ALL our custom styles
            customClass: {
                popup: 'ayoha-checkin-swal', // The main modal
                confirmButton: 'swal-button--confirm-custom', // The confirm button
                cancelButton: 'swal-button--cancel-custom'   // The cancel button
            },
            allowOutsideClick: false, // Prevents closing on overlay click
            allowEscapeKey: false,    // Prevents closing with the Esc key
            // --- Button configuration ---
            showCancelButton: true,
            confirmButtonText: "Tap to Check-In",
            cancelButtonText: "Maybe Later",
    
            // --- Remove default SweetAlert2 elements ---
            showCloseButton: false,
            showConfirmButton: true,
            title: ' ', // Hides the title but keeps the space
            padding: 0, // We will control padding with CSS
            
        }).then((result) => {
            // --- THIS IS THE UPDATED .then() LOGIC ---
            // Handle the button clicks
            if (result.isConfirmed) {
                
                // The "Tap to Check-In" popup has now closed automatically.
                // Now, run your Sencha AJAX request to save the check-in.
    
                var objn = {
                    "EnterpriseHQAccNo": EnterpiseAccNo,
                    "EnterpriseAccNo":EnterpiseAccNo,
                    "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
                    "CheckInCode": "CIC-" + GenerateRandomNo() + '-' + GetCurrAyohaUserAccountNo(),
                    "CheckInMethod": "Online",
                    "CheckInPage": "MerchantList"
                };
                var _value = Ext.Ajax.request({
                    type: "POST",
                    url: GetAPIurl() + '/EnterprisesCheckIn/EnterprisesCheckIn_Insert',
                    dataType: "json",
                    data: JSON.stringify(objn),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    },
                    success: function (result, request) {
                        data = Ext.decode(result.responseText.trim());
    
                        if (data.success == "true") {
                            
                          CheckInCount=CheckInCount+1;
                            // After the save is successful,
                            // show your animation and the *new* "Confirmed" popup.

                         //   FloatPanel_AyohaStore_AyohaPointCollectedAnimShow();
                          //  FloatPanel_Membership_CheckInPage_ConfirmedShow(CheckInCount + 1); // This is correct.
                          Ayoha_CelebrationReward(CheckInCount);
                            CoreFunction_DashboardAyohaUser();
                            FloatPanel_Membership_MembershipCardHubsUpgradeHide();
                          //  Ayoha_WelcomeBackFans();
                           // Dashboard_MerchantDetailPageShow();
                        } else {
                            swalFireFail("Fail!->" + result.responseText.trim());
                            LoadingPanelHide();
                            Ext.Viewport.unmask();
                        }
                        Ext.Viewport.unmask();
                    },
                    failure: function (result, request) {
                        swalFireFail("Fail!" + result.responseText.trim());
                        Ext.Viewport.unmask();
                        LoadingPanelHide();
                    }
                });
    
                // --- I HAVE REMOVED THE OLD PLACEHOLDER FUNCTION CALL FROM HERE ---
    
            } else if (result.isDismissed) {
                // User clicked "Maybe Later" or closed the modal
                // The popup also closes automatically here.
            }
        });
    }else{
      var objn = {
        "EnterpriseHQAccNo": EnterpiseAccNo,
        "EnterpriseAccNo":EnterpiseAccNo,
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        "CheckInCode": "CIC-" + GenerateRandomNo() + '-' + GetCurrAyohaUserAccountNo(),
        "CheckInMethod": "Online",
        "CheckInPage": "MerchantList"
    };
    var _value = Ext.Ajax.request({
        type: "POST",
        url: GetAPIurl() + '/EnterprisesCheckIn/EnterprisesCheckIn_Insert',
        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        success: function (result, request) {
            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
                
                // After the save is successful,
                // show your animation and the *new* "Confirmed" popup.

               // FloatPanel_AyohaStore_AyohaPointCollectedAnimShow();
               // FloatPanel_Membership_CheckInPage_ConfirmedShow(CheckInCount + 1); // This is correct.
                CoreFunction_DashboardAyohaUser();
                FloatPanel_Membership_MembershipCardHubsUpgradeHide();
                Ayoha_WelcomeBackFans();
               // Dashboard_MerchantDetailPageShow();
            } else {
                swalFireFail("Fail!->" + result.responseText.trim());
                LoadingPanelHide();
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();
        },
        failure: function (result, request) {
            swalFireFail("Fail!" + result.responseText.trim());
            Ext.Viewport.unmask();
            LoadingPanelHide();
        }
    });
    }
  
}
   
