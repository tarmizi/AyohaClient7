
Ext.define('BuskartApp.view.AyohaMerchantInfo.FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram', {

});

var _FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram;


var isFloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramOpen = 'N';






function FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram() {

    _FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram =
    Ext.create('Ext.Container', {
        zIndex: 40,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramID',
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
                            _FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            RemovePages("FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramHide()");
                            isLoyaltyCardRedeemListOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isLoyaltyCardRedeemListOpen = 'N';
                            RemovePages("FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramHide()");
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

                id: 'containerFloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramHeader',
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
                                         id: 'btnFloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramBack',
                                         margin: '10 0 0 5',
                                         height: 30,
                                         width: 35,
                                         // iconCls: 'list',
                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                             // FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramHide();
                                             // FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_AddCardHide();
                                             isFloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramOpen = 'N';
                                             _FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram.hide(Ext.fx.Animation({
                                                 type: 'slideOut',
                                                 direction: 'left',
                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                 duration: 250

                                             }));
                                             RemovePages("FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramHide()");
                                             //  FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_AddCardHide();

                                         }
                                     },

                                      {
                                          xtype: 'spacer',

                                      },
                                      {
                                        margin: '10 10 0 0',
                                        id: 'htmlFloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_TitleHeaderTxt',

                                        html: '<div style="color:black;text-align: right;font-size:14px;width:100%;"><b>Membership Voucher</b></div>'
                                    },
                                      {
                                        xtype: 'button',
                                        margin: '10 0 0 -10',
                                        id: 'btnFloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_CardIcon',
                                        height: 35,
                                        width: 35,
                                       // hidden:true,
                                        // iconCls: 'list',
                                        html: '<div ><img src="resources/icons/VoucherFeature01.png" width="25" height="25" alt="Company Name"></div>',
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
                id: 'FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramListContentID',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'

                },
                style: 'background-color:transparent',

                items: [
                
                    
                    
                    {
                        xtype: 'list',
                        id: 'FloatPanel_AyohaRewardVoucherList_MerchantLoyaltyCampaignlistID',
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
                        store:_DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore,





                       
// itemTpl: new Ext.XTemplate([
    itemTpl: new Ext.XTemplate([
'    <!-- Main Card Container -->',
// '   <div style="background-color:#ffffff; width:105%; border-radius:5px; overflow:hidden; margin:0 0 0 -10px; border:0; -webkit-box-shadow:0 18px 48px rgba(0,0,0,.28), 0 8px 20px rgba(0,0,0,.22); box-shadow:0 18px 48px rgba(0,0,0,.28), 0 8px 20px rgba(0,0,0,.22);">',
'<div onclick="FloatPanel_AyohaRewardVoucherDetailShow_MerchantPerks(`{VoucherName}`,`{VoucherImgPath}`,`{EntitledVoucherEndDate}`,`{DayLeft}`,`{VoucherCode}`,`{VoucherAmount}`,`{VoucherTermAndCondition}`,`{MembershipCardCode}`,`{EnterpriseCountStar}`,`{EnterpriseAccNo}`,`{TotalReviewer}`);" style="background:#fff; width:107%; border-radius:12px; overflow:hidden; margin:0px 0px 0px -12px; border:0; box-shadow:0 12px 30px rgba(24,39,75,.14), 0 3px 10px rgba(24,39,75,.10);">',
'',
'        <!-- Image Section -->',
'        <div style="position: relative;">',
'            <!-- Placeholder for the main image -->',
'            <img src="{VoucherImgPath}" alt="Pandan Butter Latte" style="width: 100%; height: auto; display: block;">',
//'{VoucherImgPath}',
'            ',
'            <!-- Discount Tag -->',
'            <div style="display:flex;position: absolute; top: 12px; left: 12px; background-color: orange; color: white; padding: 5px 12px; border-radius: 8px; font-size: 12px; font-weight: bold;">',
'                Voucher',
'            </div>',
'            ',
'            <!-- Price Tag -->',

'<div style="display:flex',
';position:absolute; bottom:-25px; right:20px !important; left:auto !important',
'display:flex; flex-direction:column; align-items:center; justify-content:center;',
'width:60px; height:60px;',
'background:orange; color:#fff; border-radius:50%;',
'box-shadow:0 4px 8px rgba(0,0,0,0.2); border:2px solid #fff;',
' font-weight:bold; line-height:1; gap:2px;z-index:10;"><span style="font-size:14px; margin:0;">{VoucherAmount}</span> <span style="font-size:14px; margin:0;">RM</span></div>',

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
'                            <span style="font-weight: bold; color: #333;">{EnterpriseCountStar}</span>',
'                            <span style="color: #f1c40f;">★</span>',
'                        </div>',
'                        <div style="font-size: 11px; color: #999;">{TotalReviewer} Reviews</div>',
'                    </div>',    
'                </div>',
'            </div>',
'',
//'            <div style:border:1px solid #e9e9ee;width:100%;height:5px;background-color:#e9e9ee/>',
'            <h2 style="font-size: 20px; font-weight: 700; margin: 16px 0 4px 0; color: #2c3e50; line-height: 1.4;">',
'                {VoucherName}',
'            </h2>',
// '            <h2 style="font-size: 14px; font-weight: 700; margin: 3px 0 4px 0; color: #2c3e50; line-height: 1.4;">',
// '                {VoucherTermAndCondition}',
// '            </h2>',
'            ',
'            <!-- Original Price -->',
'            <p style="margin: 0 0 16px 0; color: #95a5a6; font-size: 12px;">',
'                End Date: {EntitledVoucherEndDate}',
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
'        <div style="margin: -20px 0px 0px 10px;display:none">',
'{ButtonBottomDisplay}',
// '             <button style="width: 97%; background-image: linear-gradient(#ff00de75, #c800ffc9);background-color: #fac; color: white; border: none; padding: 15px; border-radius: 12px; font-size: 14px; font-weight: bold; cursor: pointer; text-shadow: 0 1px 1px rgba(0,0,0,0.2); box-shadow: 0 4px 10px rgba(247, 151, 30, 0.4); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform=\'translateY(-2px)\'; this.style.boxShadow=\'0 6px 12px rgba(247, 151, 30, 0.5)\';" onmouseout="this.style.transform=\'translateY(0)\'; this.style.boxShadow=\'0 4px 10px rgba(247, 151, 30, 0.4)\';">',
// '                View Membership Voucher',
// '            </button>',
'        </div>',
'',
'    </div>'
].join(''),

)},



                    // {
                    //     xtype: 'list',
                    //     store: _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore,
                    //     id: 'FloatPanel_AyohaRewardVoucherList_MerchantLoyaltyCampaignlistID',
                    //     mode: 'SINGLE',
                    //             width: '93%',
                    //     height: '100%',
                    //     style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                    //     disableSelection: true,
                    //     grouped: true,
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
                    //     itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:240px;background-color: transparent;">'+
                    //     '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:196px;background-color: #fac;background-image: url({VoucherImgPath});background-size: 100% 100%;border-radius: 0px 0px 0px 0px;border:3px dashed grey;">' +                                 

                    //                                 '</div>' +
                                        
                    //     '<br><div onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_Staging(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{TotalQuantity}' + "'" + ',' + "'" + '{EntitledVoucherStatus}' + "'" + ',' + "'" + '{PaymentAtEnterpriseAccNo}' + "'" + ');" style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Voucher Campaign</div><div onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_Staging(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{TotalQuantity}' + "'" + ',' + "'" + '{EntitledVoucherStatus}' + "'" + ',' + "'" + '{PaymentAtEnterpriseAccNo}' + "'" + ');" style="width:100%;text-align:right;margin:-15px 0px 0px -20px">Expired:</div></div>' +
                    //     '<br><div onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_Staging(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{TotalQuantity}' + "'" + ',' + "'" + '{EntitledVoucherStatus}' + "'" + ',' + "'" + '{PaymentAtEnterpriseAccNo}' + "'" + ');" style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:70%;text-align:left;overflow-wrap: break-word;">{VoucherName}</div><div onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_Staging(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{TotalQuantity}' + "'" + ',' + "'" + '{EntitledVoucherStatus}' + "'" + ',' + "'" + '{PaymentAtEnterpriseAccNo}' + "'" + ');" style="width:100%;text-align:right;margin:-22px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;">{EntitledVoucherEndDate}</div></div>' +

                    //     '<br><div onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_Staging(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{TotalQuantity}' + "'" + ',' + "'" + '{EntitledVoucherStatus}' + "'" + ',' + "'" + '{PaymentAtEnterpriseAccNo}' + "'" + ');" style="margin:-15px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;"></div>{VoucherUsedStatus}</div>' +
                     
                    //     '<br><div style="width:100%;text-align:center;margin:-118px 0px 0px 0px;color:transparent;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;">*Tab to view details</div></div>',
                    //     width: '100%',

                    // },
                ]
            },







            {
                xtype: 'container',
                id: 'containerFloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramTitleOutter',
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
                          id: 'btnFloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramListSearch',
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
                         id: 'FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_SearchTxt',
                         margin: '0 0 0 -10',
                         width: '78%',
                         height: 20,
                         html: '<input type="text" id="input-FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_SearchTxt" placeHolder="Search" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                     },



                     {
                         id: 'FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_CountSearchTxt',
                         margin: '0 0 0 0',
                       //  hidden: true,
                         height: 20,
                         html: '<font size=3 color=black>(0)</font>'
                     },
                     {
                         xtype: 'button',
                         id: 'btnFloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramFilter',
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
    return _FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram;



}





var countMerchantLoyaltyCampaign_LoadVoucherCardStoreFirst=0;


function FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramHide()");
    isFloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramOpen = 'Y';

    

  //  FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramAdjustHeight();
    //FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramList_AyohaUserStampCardNearestRedeemItemStore();
    FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_MerchantLoyaltyCampaign_LoadVoucherCardLoyaltyStore();
    document.getElementById("input-FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_SearchTxt").addEventListener("keyup", MerchantLoyaltyCampaign_LoadVoucherStoreStoreOnKeyUp);

}


function FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_MerchantLoyaltyCampaign_LoadVoucherCardLoyaltyStore() {


   
    _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
    _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaign');
      
    
    _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    console.log('Store loaded successfully, total records: ' + records.length);
                    countMerchantLoyaltyCampaign_LoadVoucherCardStoreFirst = records.length;
                    Ext.getCmp('FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMerchantLoyaltyCampaign_LoadVoucherCardStoreFirst + ')</b></font>');
                  
                } else {
                    console.error('Failed to load store data or no record found.');
                    LoadingPanelHide();
                }
            }
        });
    
    
    
    
    }



function FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramHide() {
    // FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_AddCardHide();
    if (isFloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramOpen == "Y") {
        _FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram.hide(); isFloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramOpen = 'N';
        RemovePages("FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramHide()");
    }
  
}


function MerchantLoyaltyCampaign_LoadVoucherStoreStoreOnKeyUp(){
   






        console.log('SearchEnterpriseOnKeyUp');
        var countMerchantLoyaltyCampaign_LoadVoucherStore = 0;
    
    
        _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.clearFilter();
    
        var queryString = document.getElementById('input-FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_SearchTxt').value;
    
    
    
        if (queryString) {
            console.log(queryString.length);
    
            var thisRegEx = new RegExp(queryString, "i");
            _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.filterBy(function (record) {
                if (thisRegEx.test(record.get('SearchCol'))) {
                    console.log('ada0');
    
                    countMerchantLoyaltyCampaign_LoadVoucherStore = _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.getCount();
                    Ext.getCmp('FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMerchantLoyaltyCampaign_LoadVoucherStore + ')</b></font>');
                    // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                    return true;
    
                };
                return false;
                console.log('tiada1');
    
                //  return false;
            });
            console.log('tiada3');
            countMerchantLoyaltyCampaign_LoadVoucherStore = _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.getCount();
            Ext.getCmp('FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMerchantLoyaltyCampaign_LoadVoucherStore + ')</b></font>');
    
            //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
        }
    
    
        else {
            console.log('tiada2');
            _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.clearFilter();
            Ext.getCmp('FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMerchantLoyaltyCampaign_LoadVoucherCardStoreFirst + ')</b></font>');
            // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
            // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
            return false;
        }
    
    
    
    
  
}




function FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_OpenVoucherCard(val){
    globalsetMessage_toBeAyohaMember_tag="MerchantLoyaltyCampaign";
  

   

    var EnterpriseAccNo = _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var VoucherCode = _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var MembershipCardCode = _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var CountStar = _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var CountReviewer = _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var MembershipCardFeePaymentCycle = _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var EnterpriseName = _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var EnterpriseLogo = _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.findRecord('MembershipCardCode', val, 0, false, false, true);

var EnterpriseNames= EnterpriseName.get('EnterpriseName');
var EnterpriseLogos= EnterpriseLogo.get('EnterpriseLogo');
    var EnterpriseAccNos= EnterpriseAccNo.get('EnterpriseAccNo');
    var VoucherCodes= VoucherCode.get('VoucherCode');
     var MembershipCardCodes= MembershipCardCode.get('MembershipCardCode');
     var CountStars= CountStar.get('CountStar');
     var CountReviewers= CountReviewer.get('CountReviewer');
     var MembershipCardFeePaymentCycles= MembershipCardFeePaymentCycle.get('MembershipCardFeePaymentCycle');

     globalFloatPanel_AyohaStore_CheckOut_EnterpriseName= EnterpriseNames;
     globalFloatPanel_AyohaStore_CheckOut_EnterpriseLogo= EnterpriseLogos;


    globalLatestPointCampaignCode = VoucherCodes;    

    MembershipTag="NO";
    globalFloatPanelMerchantDetailPage_MembershipCardCode=MembershipCardCodes;
    globalFloatPanelMerchantDetailPage_EnterpriseAccNo=EnterpriseAccNos;
    globalFloatPanelMerchantDetailPage_CountStar=CountStars;
    globalFloatPanelMerchantDetailPage_CountReviewer=CountReviewers;



    setMessage_NotYetMembershipMessage();
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    FloatPanel_MerchantVoucherLoyaltyDescriptionShow(VoucherCodes,EnterpriseAccNos); 
}







function FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_OpenMembershipCard(val){
    globalsetMessage_toBeAyohaMember_tag="MerchantLoyaltyCampaign";



    var EnterpriseAccNo = _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var PointCampaignCode = _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var MembershipCardCode = _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var CountStar = _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var CountReviewer = _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var MembershipCardFeePaymentCycle = _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore.findRecord('MembershipCardCode', val, 0, false, false, true);



    var EnterpriseAccNos= EnterpriseAccNo.get('EnterpriseAccNo');
    var PointCampaignCodes= PointCampaignCode.get('VoucherCode');
     var MembershipCardCodes= MembershipCardCode.get('MembershipCardCode');
     var CountStars= CountStar.get('EnterpriseCountStar');
     var CountReviewers= CountReviewer.get('TotalReviewer');
     var MembershipCardFeePaymentCycles= MembershipCardFeePaymentCycle.get('MembershipCardFeePaymentCycle');




    globalLatestPointCampaignCode = PointCampaignCodes;    

    MembershipTag="NO";
    globalFloatPanelMerchantDetailPage_MembershipCardCode=MembershipCardCodes;
    globalFloatPanelMerchantDetailPage_EnterpriseAccNo=EnterpriseAccNos;
    globalFloatPanelMerchantDetailPage_CountStar=CountStars;
    globalFloatPanelMerchantDetailPage_CountReviewer=CountReviewers;



    


    FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(val, EnterpriseAccNos, MembershipTag,MembershipCardFeePaymentCycles,CountStars,CountReviewers);
        
        
}



