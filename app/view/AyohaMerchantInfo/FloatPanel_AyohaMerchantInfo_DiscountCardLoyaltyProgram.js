
Ext.define('BuskartApp.view.AyohaMerchantInfo.FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram', {

});

var _FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram;


var isFloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramOpen = 'N';






function FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram() {

    _FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram =
    Ext.create('Ext.Container', {
        zIndex: 50,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramID',
        draggable: false,

        styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
        modal: true,
        // hideOnMaskTap: true,
        layout: {
          type: 'fit'
        //   type: 'vbox',
        //   pack: 'start',
        //   align: 'center'
        },
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            //type: 'slideOut',
            //direction: 'left',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            //duration: 250


            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        style: 'background-color:white;',
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            RemovePages("FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramHide()");
                            isLoyaltyCardRedeemListOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isLoyaltyCardRedeemListOpen = 'N';
                            RemovePages("FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramHide()");
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

                id: 'containerFloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramHeader',
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
                                         id: 'btnFloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramBack',
                                         margin: '10 0 0 5',
                                         height: 30,
                                         width: 35,
                                         // iconCls: 'list',
                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                             // FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramHide();
                                             // FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_AddCardHide();
                                             isFloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramOpen = 'N';
                                             _FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram.hide(Ext.fx.Animation({
                                                 type: 'slideOut',
                                                 direction: 'left',
                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                 duration: 250

                                             }));
                                             RemovePages("FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramHide()");
                                             //  FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_AddCardHide();

                                         }
                                     },

                                      {
                                          xtype: 'spacer',

                                      },
                                      {
                                        margin: '10 10 0 0',
                                        id: 'htmlFloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_TitleHeaderTxt',

                                        html: '<div style="color:black;text-align: right;font-size:14px;width:100%;"><b>Membership Discount</b></div>'
                                    },
                                      {
                                        xtype: 'button',
                                        margin: '10 0 0 -10',
                                        id: 'btnFloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_CardIcon',
                                        height: 35,
                                        width: 35,
                                       // hidden:true,
                                        // iconCls: 'list',
                                        html: '<div ><img src="resources/icons/MembershipFeature01.png" width="25" height="25" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {

                                        }
                                    },
                                      

                                    {
                                        xtype: 'spacer',
                                        width: 10,
                                    },
                                          









                       ]

            },


           
            {
                xtype: 'container',
                width: '100%',
                height: '100%',
                id: 'FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramListContentID',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'

                },
                style: 'background-color:transparent',

                items: [
                  // {
                  //     xtype: 'list',
                  //     width: '100%',
                  //     store: _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore,
                  //     grouped: true,
                  //     id: 'FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramListListID',
                  //     mode: 'SINGLE',
                  //     scrollable: {
                  //         direction: 'vertical',
                  //         indicators: {
                  //             y: {
                  //                 autoHide: true
                  //             },
                  //             x: {
                  //                 autoHide: true
                  //             }
                  //         }
                  //     },
                  //     style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                  //     disableSelection: true,
                  //     // UPDATED itemTpl to display 3 stamps per row
                  //     itemTpl: '<div class="myContent" style="background-color:white;width:108%;padding: 5px 0;">' +
                  //         '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;">' +
                  //         // Row 1: Three columns for stamps
                  //         '<tr>' +
                  //         // Stamp 1
                  //         '<td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:5px 7px;border-style:none;overflow:hidden;word-break:normal;width:33.33%;vertical-align:top;text-align:center;" onclick="FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_OpenMerchantLoyaltyProgram({ID1})">{ModifiedStampContent1}</td>' +
                  //         // Stamp 2
                  //         '<td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:5px 7px;border-style:none;overflow:hidden;word-break:normal;width:33.33%;vertical-align:top;text-align:center;" onclick="FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_OpenMerchantLoyaltyProgram({ID2})">{ModifiedStampContent2}</td>' +
                  //         // Stamp 3
                  //         '<td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:5px 7px;border-style:none;overflow:hidden;word-break:normal;width:33.33%;vertical-align:top;text-align:center;" onclick="FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_OpenMerchantLoyaltyProgram({ID3})">{ModifiedStampContent3}</td>' +
                  //         '</tr>' +
                  //         // Row 2: One column for the note, spanning the other three
                  //         '<tr>' +
                  //         '<td colspan="3" style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:5px 10px;border-style:none;overflow:hidden;word-break:normal;vertical-align:middle;">{StampContentNote}</td>' +
                  //         '</tr>' +
                  //         '</table>' +
                  //         '</div>',
                  
                  //     emptyText: '<div style="background-color:transparent;width:100%;height100%;">Hai!, you have no redemption items yet.Go to Ayoha Mechant Menu ,get their Membership card and then collect your redemptions items!</div>',
                  // },
                    
                    
                    // {
                    //     xtype: 'list',
                    //     width: '93%',
                    //     height: '100%',
                    //     store: _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore,
                    //     grouped:true,
                    //     id: 'FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramListListID',
                    //     mode: 'SINGLE',
                    //     pinHeaders: true,                 // optional: sticky header
                    //    cls: 'gapped-grouped-list', // <-- ADD THIS CLASS             // <-- scope styles
                    //     scrollable: {
                    //         direction: 'vertical',
                    //         indicators: {
                    //             y: {
                    //                 autoHide: true
                    //             },
                    //             x: {
                    //                 autoHide: true
                    //             }
                    //         }
                    //     },
                    //     style: 'background-color:rgba(255,255,255, 0.9);border-radius: 0px 0px 0px 0px;',
                    //     // width: '100%',
                    //     disableSelection: true,
                    //     itemTpl: '<div class="myContent" style="background-color:white;width:101%;height:100px;">' +


                    //      //'<table style="border-collapse:collapse;border-spacing:0;width:108%;background-color:white;margin:-37px 0px 0px -15px;height:100px; border-left: 2px solid rgba(0,0,0,0.3) ;border-right: 2px solid rgba(0,0,0,0.3);box-shadow: 0px 10px 10px rgba(0,0,0,0.5)"><tr onclick="FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_OpenMerchantLoyaltyProgram({ID})"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:0px;overflow:hidden;word-break:normal;width:25%;vertical-align:center">{ModifiedStampContent}</td><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 0px;border-style:none;border-width:0px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{StampContentNote}</td></tr></table>'
                    //      '<table style="border-collapse:collapse;border-spacing:0;width:108%;background-color:white;margin:-37px 0px 0px -15px;height:100px; border-left: 2px solid rgba(0,0,0,0.3) ;border-right: 2px solid rgba(0,0,0,0.3);box-shadow: 0px 10px 10px rgba(0,0,0,0.5)"><tr onclick="FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_OpenDiscountCard(`{MembershipCardCode}`)"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:0px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="{DiscountImgPath}" width="70px" height="70px" alt="Company Name"></td><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:10px 3px;border-style:none;border-width:0px;overflow:hidden;word-break:normal;width:80%;vertical-align:top">{DiscountName}<br><div style="background-color: #9b59b6; color: white; padding: 5px 10px; border-radius: 16px; font-size: 10px; font-weight: bold;margin:5px 0px 0px 0px;width:100px">Discount:{DiscountPercent}%</div></td></tr></table>'
                        
                        
                         
                        
                    //      + '</div>',
                      
                     
                      
                    //     emptyText: '<div  style="background-color:transparent;width:100%;height100%;">Hai!, you have no redemption items yet.Go to Ayoha Mechant Menu ,get their Membership card and then collect your redemptions items!</div>',
                

                    // },









                    {
                        xtype: 'list',
                        id: 'FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramListListID',
                        width: '95%',
                        height: '100%',
                        variableHeights: true,
                        grouped: true,
                        mode: 'SINGLE',
                      //  ui: 'plain',        // removes theme borders
inset: false,       // make sure inset styling isn’t applied
//cls: 'list--flat',
// cls: 'card-list list--centered',
                                         
                                          //grouped: true,
                                          disableSelection: true,
                                          scrollable: {
                                              direction: 'vertical',
                                              indicators: {
                                                  y: {
                                                      autoHide: true
                                                  },
                                                  x: {
                                                      autoHide: true
                                                  }
                                              }
                                          },
                                          style: 'background-color:rgba(255,255,255, 0);border-radius: 0px 0px 0px 0px;',
                
                        // Minimal inline store so you can see it render
                        store:_DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore,




                        //'<table style="border-collapse:collapse;border-spacing:0;width:108%;background-color:white;margin:-37px 0px 0px -15px;height:100px; border-left: 2px solid rgba(0,0,0,0.3) ;border-right: 2px solid rgba(0,0,0,0.3);box-shadow: 0px 10px 10px rgba(0,0,0,0.5)"><tr onclick="FloatPanel_AyohaMerchantInfo_ContestCardLoyaltyProgram_OpenContestCard(`{ContestCode}`)"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:0px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="{AdvertisementImgPath}" width="70px" height="70px" alt="Company Name"></td><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:10px 3px;border-style:none;border-width:0px;overflow:hidden;word-break:normal;width:80%;vertical-align:top">{ContestName}<br><div style="background-color: #5F9EA0; color: white; padding: 5px 10px; border-radius: 16px; font-size: 10px; font-weight: bold;margin:5px 0px 0px 0px;width:130px">End Date:{EndDate}</div></td></tr></table>'
                       // '<table style="border-collapse:collapse;border-spacing:0;width:108%;background-color:white;margin:-37px 0px 0px -15px;height:100px; border-left: 2px solid rgba(0,0,0,0.3) ;border-right: 2px solid rgba(0,0,0,0.3);box-shadow: 0px 10px 10px rgba(0,0,0,0.5)"><tr onclick="FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_OpenDiscountCard(`{MembershipCardCode}`)"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:0px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="{DiscountImgPath}" width="70px" height="70px" alt="Company Name"></td><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:10px 3px;border-style:none;border-width:0px;overflow:hidden;word-break:normal;width:80%;vertical-align:top">{DiscountName}<br><div style="background-color: #9b59b6; color: white; padding: 5px 10px; border-radius: 16px; font-size: 10px; font-weight: bold;margin:5px 0px 0px 0px;width:100px">Discount:{DiscountPercent}%</div></td></tr></table>'
                        
                        
                      emptyText: '<div  style="background-color:transparent;width:100%;height100%;">No Membership Discount at This Moment!</div>',
                       
// itemTpl: new Ext.XTemplate([
    itemTpl: new Ext.XTemplate([
'    <!-- Main Card Container -->',
// '   <div style="background-color:#ffffff; width:105%; border-radius:5px; overflow:hidden; margin:0 0 0 -10px; border:0; -webkit-box-shadow:0 18px 48px rgba(0,0,0,.28), 0 8px 20px rgba(0,0,0,.22); box-shadow:0 18px 48px rgba(0,0,0,.28), 0 8px 20px rgba(0,0,0,.22);">',
'<div onclick="FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_OpenDiscountCard(`{MembershipCardCode}`)" style="background:#fff; width:107%; border-radius:12px; overflow:hidden; margin:0px 0px 0px -12px; border:0; box-shadow:0 12px 30px rgba(24,39,75,.14), 0 3px 10px rgba(24,39,75,.10);">',
'',
'        <!-- Image Section -->',
'        <div style="position: relative;">',
'            <!-- Placeholder for the main image -->',
'            <img src="{DiscountImgPath}" alt="Pandan Butter Latte" style="width: 100%; height: auto; display: block;">',
//'{VoucherImgPath}',
'            ',
'            <!-- Discount Tag -->',
'            <div style="display:flex;position: absolute; top: 12px; left: 12px; background-color: #9b59b6; color: white; padding: 5px 12px; border-radius: 8px; font-size: 12px; font-weight: bold;">',
'                Discount',
'            </div>',
'            ',
'            <!-- Price Tag -->',

'<div style="display:flex',
';position:absolute; bottom:-25px; right:20px !important; left:auto !important',
'display:flex; flex-direction:column; align-items:center; justify-content:center;',
'width:60px; height:60px;',
'background:#9b59b6; color:#fff; border-radius:50%;',
'box-shadow:0 4px 8px rgba(0,0,0,0.2); border:2px solid #fff;',
' font-weight:bold; line-height:1; gap:2px;z-index:10;"><span style="font-size:14px; margin:0;">{ModifiedDiscountPercent}%</span><span style="font-size:8px; margin:0;">Discount</span></div>',

// '            <div style="display:{ModifiedVoucherDisplay};position: absolute; bottom: -25px; right: 20px; background-color: #e74c3c; color: white; width: 50px; height: 50px; border-radius: 50%;align-items: center; justify-content: center; font-size: 13px; font-weight: bold; box-shadow: 0 4px 8px rgba(0,0,0,0.2); border: 2px solid white;">',
// '                {ModifiedAmount}',
// '            </div>',
'        </div>',
'',
'        <!-- Content Section -->',
'        <div style="padding: 16px; margin-top: 10px;">',
'            <!-- Store Info -->',
'            <div style="display: flex; align-items: center; margin-bottom: 12px; gap: 12px;border-bottom:1px solid #e9e9ee">',
'                <!-- Store Icon -->',
'                <div style="min-width: 48px; height: 48px; border-radius: 8px; border: 1px solid #eee; display:flex; align-items:center; justify-content:center; background-color: #f9f9f9;">',
'                    <img style="width: 28px; height: 28px;" src="{EnterpriseLogo}" alt="Store Icon">',
'                </div>',
'                ',
'                <!-- Store Name and Subtitle -->',
'                <div style="flex-grow: 1;">',
'                    <p style="font-weight: 600; font-size: 15px; margin: 0; color: #333;">{EnterpriseName}</p>',
'                    <p style="font-size: 12px; color: #777; margin: 2px 0 0 0;">{EnterpriseTagLine}</p>',
'                </div>',
'                ',
'                <!-- Rating and Reward Icon Container -->',
'                <div style="display: flex; align-items: center; gap: 12px;">',
'                    <!-- Rating -->',
'                    <div style="text-align: right; white-space: nowrap;">',
'                        <div style="font-size: 14px; display: flex; align-items: center; gap: 4px;">',
'                            <span style="font-weight: bold; color: #333;">{CountStar}</span>',
'                            <span style="color: #f1c40f;">★</span>',
'                        </div>',
'                        <div style="font-size: 11px; color: #999;">{CountReviewer} Reviews</div>',
'                    </div>',    
'                </div>',
'            </div>',
'',
//'            <div style:border:1px solid #e9e9ee;width:100%;height:5px;background-color:#e9e9ee/>',
'            <h2 style="font-size: 20px; font-weight: 700; margin: 16px 0 4px 0; color: #2c3e50; line-height: 1.4;">',
'             {DiscountNote}',
'            </h2>',
// '            <h2 style="font-size: 12px; font-weight: 700; margin: 3px 0 4px 0; color: #2c3e50; line-height: 1.4;">',
// '               Campaign Name: {DiscountName}',
// '            </h2>',
'            ',
'            <!-- Original Price -->',
'            <p style="margin: 0 0 16px 0; color: #95a5a6; font-size: 12px;">',
'                End Date: {DiscountEndDate}',
'            </p>',
'',
'            <!-- Tags -->',
'            <div style="display: flex; gap: 8px; margin-bottom: 4px;">',
'                <span style="background-color: #ecf0f1; color: #7f8c8d; padding: 6px 14px; border-radius: 16px; font-size: 13px; font-weight: 500;">{BusinessMode}</span>',
'                <span style="background-color: #ecf0f1; color: #7f8c8d; padding: 6px 14px; border-radius: 16px; font-size: 13px; font-weight: 500;">{EnterpriseDescription}</span>',
'            </div>',
'            ',
'        </div>',
'        ',
'        <!-- Action Button -->',
'        <div style="margin: -20px 0px 0px 0px;display:none"  >',
//'{ButtonBottomDisplay}',
 '             <button  style="margin:0px 0px 0px 8px;width: 95%; background-image: linear-gradient(#ff00de75, #c800ffc9);background-color: #fac; color: white; border: none; padding: 15px; border-radius: 12px; font-size: 14px; font-weight: bold; cursor: pointer; text-shadow: 0 1px 1px rgba(0,0,0,0.2); box-shadow: 0 4px 10px rgba(247, 151, 30, 0.4); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform=\'translateY(-2px)\'; this.style.boxShadow=\'0 6px 12px rgba(247, 151, 30, 0.5)\';" onmouseout="this.style.transform=\'translateY(0)\'; this.style.boxShadow=\'0 4px 10px rgba(247, 151, 30, 0.4)\';">',
 '                View Membership Discount',
'            </button>',
'        </div>',
'',
'    </div>'
].join(''),




)},
                ]
            },







            {
                xtype: 'container',
                id: 'containerFloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramTitleOutter',
                width: '100%',
                docked: 'bottom',
               // hidden: true,
                height: 40,
                // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #EAEEF3;',
                // style: "background-color: #EAEEF3;",

                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [




                      {
                          xtype: 'button',
                          id: 'btnFloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramListSearch',
                          // hidden: true,
                          //  badgeText: '1',
                          margin: '2 0 0 -5',
                          height: 40,
                          width: 40,
                          html: '<img src="resources/icons/searchPurpleOne.png" width="28" height="28" alt="Company Name">',
                          ui: 'plain',
                          handler: function () {
                              // NotificationsPanelShow();

                              // LoyaltyCardRedeemListShow();


                              //  LoyaltyCardRedeemListShow();
                          }
                      },



                     {
                         id: 'FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_SearchTxt',
                         margin: '0 0 0 -10',
                         width: '78%',
                         height: 20,
                         html: '<input type="text" id="input-FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_SearchTxt" placeHolder="Search" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                     },



                     {
                         id: 'FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_CountSearchTxt',
                         margin: '0 0 0 0',
                       //  hidden: true,
                         height: 20,
                         html: '<font size=3 color=black>(0)</font>'
                     },
                     {
                         xtype: 'button',
                         id: 'btnFloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramFilter',
                         hidden: true,
                         //  badgeText: '1',
                         margin: '2 0 0 15',
                         height: 25,
                         width: 35,
                         html: '<img src="resources/icons/filterPurpleThree.png" width="25" height="25" alt="Company Name">',
                         ui: 'plain',
                         handler: function () {
                             // NotificationsPanelShow();

                             // LoyaltyCardRedeemListShow();


                             //  LoyaltyCardRedeemListShow();
                         }
                     },





                ]

            },



        ]





    });
    return _FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram;



}








function FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramHide()");
    isFloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramOpen = 'Y';

    

  //  FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramAdjustHeight();
    //FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramList_AyohaUserStampCardNearestRedeemItemStore();
    FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore();
    document.getElementById("input-FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_SearchTxt").addEventListener("keyup", MerchantLoyaltyCampaign_LoadDiscountStoreStoreOnKeyUp);

}





function FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramHide() {
    // FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_AddCardHide();
    if (isFloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramOpen == "Y") {
        _FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram.hide(); isFloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramOpen = 'N';
        RemovePages("FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramHide()");
    }
  
}

var countMerchantLoyaltyCampaign_LoadDiscountCardStoreFirst=0;
function MerchantLoyaltyCampaign_LoadDiscountStoreStoreOnKeyUp(){
   






        console.log('SearchEnterpriseOnKeyUp');
        var countMerchantLoyaltyCampaign_LoadDiscountStore = 0;
    
    
        _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.clearFilter();
    
        var queryString = document.getElementById('input-FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_SearchTxt').value;
    
    
    
        if (queryString) {
            console.log(queryString.length);
    
            var thisRegEx = new RegExp(queryString, "i");
            _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.filterBy(function (record) {
                if (thisRegEx.test(record.get('SearchCol'))) {
                    console.log('ada0');
    
                    countMerchantLoyaltyCampaign_LoadDiscountStore = _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.getCount();
                    Ext.getCmp('FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMerchantLoyaltyCampaign_LoadDiscountStore + ')</b></font>');
                    // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                    return true;
    
                };
                return false;
                console.log('tiada1');
    
                //  return false;
            });
            console.log('tiada3');
            countMerchantLoyaltyCampaign_LoadDiscountStore = _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.getCount();
            Ext.getCmp('FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMerchantLoyaltyCampaign_LoadDiscountStore + ')</b></font>');
    
            //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
        }
    
    
        else {
            console.log('tiada2');
            _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.clearFilter();
            Ext.getCmp('FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMerchantLoyaltyCampaign_LoadDiscountCardStoreFirst + ')</b></font>');
            // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
            // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
            return false;
        }
    
    
    
    
  
}


function FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_MembershipCardCode(val){
    globalsetMessage_toBeAyohaMember_tag="MerchantLoyaltyCampaign";

    

    var EnterpriseAccNo = _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var DiscountCode = _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var MembershipCardCode = _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var CountStar = _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var CountReviewer = _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var MembershipCardFeePaymentCycle = _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.findRecord('MembershipCardCode', val, 0, false, false, true);



    var EnterpriseAccNos= EnterpriseAccNo.get('EnterpriseAccNo');
    var DiscountCodes= DiscountCode.get('DiscountCode');
     var MembershipCardCodes= MembershipCardCode.get('MembershipCardCode');
     var CountStars= CountStar.get('CountStar');
     var CountReviewers= CountReviewer.get('CountReviewer');
     var MembershipCardFeePaymentCycles= MembershipCardFeePaymentCycle.get('MembershipCardFeePaymentCycle');




    globalLatestPointCampaignCode = DiscountCodes;    

    MembershipTag="NO";
    globalFloatPanelMerchantDetailPage_MembershipCardCode=MembershipCardCodes;
    globalFloatPanelMerchantDetailPage_EnterpriseAccNo=EnterpriseAccNos;
    globalFloatPanelMerchantDetailPage_CountStar=CountStars;
    globalFloatPanelMerchantDetailPage_CountReviewer=CountReviewers;



    


    FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(val, EnterpriseAccNos, MembershipTag,MembershipCardFeePaymentCycles,CountStars,CountReviewers);
        
        
}


function FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_OpenDiscountCard(val){
    globalsetMessage_toBeAyohaMember_tag="MerchantLoyaltyCampaign";
  

   

    var EnterpriseAccNo = _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var DiscountCode = _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var MembershipCardCode = _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var CountStar = _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var CountReviewer = _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var MembershipCardFeePaymentCycle = _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var EnterpriseName = _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var EnterpriseLogo = _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.findRecord('MembershipCardCode', val, 0, false, false, true);

var EnterpriseNames= EnterpriseName.get('EnterpriseName');
var EnterpriseLogos= EnterpriseLogo.get('EnterpriseLogo');
    var EnterpriseAccNos= EnterpriseAccNo.get('EnterpriseAccNo');
    var DiscountCodes= DiscountCode.get('DiscountCode');
     var MembershipCardCodes= MembershipCardCode.get('MembershipCardCode');
     var CountStars= CountStar.get('CountStar');
     var CountReviewers= CountReviewer.get('CountReviewer');
     var MembershipCardFeePaymentCycles= MembershipCardFeePaymentCycle.get('MembershipCardFeePaymentCycle');

     globalFloatPanel_AyohaStore_CheckOut_EnterpriseName= EnterpriseNames;
     globalFloatPanel_AyohaStore_CheckOut_EnterpriseLogo= EnterpriseLogos;


    globalLatestPointCampaignCode = DiscountCodes;    

    MembershipTag="NO";
    globalFloatPanelMerchantDetailPage_MembershipCardCode=MembershipCardCodes;
    globalFloatPanelMerchantDetailPage_EnterpriseAccNo=EnterpriseAccNos;
    globalFloatPanelMerchantDetailPage_CountStar=CountStars;
    globalFloatPanelMerchantDetailPage_CountReviewer=CountReviewers;



    setMessage_NotYetMembershipMessage();
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    FloatPanel_MerchantDiscountLoyaltyDescriptionShow(DiscountCodes,EnterpriseAccNos); 
}





function FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore() {

    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanel_AyohaMerchantInfo_LoyaltyProgram";

    //Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore').getProxy().setExtraParams({
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //});
    //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemListStore').load();

    _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.getProxy().setUrl(GetAPIurl() + '/MerchantLoyaltyCampaign/MerchantLoyaltyCampaign_LoadDiscount');
 

    _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
    
               // var record = records[0]; // Access only the first record
              //  var planCode = record.get('PaymentPlanCode');
              countMerchantLoyaltyCampaign_LoadDiscountCardStoreFirst=records.length;
              Ext.getCmp('FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMerchantLoyaltyCampaign_LoadDiscountCardStoreFirst + ')</b></font>');
               // LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });







}





