
Ext.define('BuskartApp.view.AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseRewardItem', {

});

var _FloatPanel_AyohaEnterpriseRewardItem;


var isFloatPanel_AyohaEnterpriseRewardItemOpen = 'N';






function FloatPanel_AyohaEnterpriseRewardItem() {

    _FloatPanel_AyohaEnterpriseRewardItem =
    Ext.create('Ext.Panel', {
      
        //zIndex: 310,
        zIndex: 20,
        xtype: 'container',
        //height: 465,
      //  height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaEnterpriseRewardItemID',
        draggable: false,

        styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
        modal: true,
        // hideOnMaskTap: true,
        layout: {
            type: 'fit'
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
            //type: 'slideOut',
            //direction: 'left',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            //duration: 250
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        style: 'background-color:white;',
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
       // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_AyohaEnterpriseRewardItem.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            RemovePages("FloatPanel_AyohaEnterpriseRewardItemHide()");
                            isFloatPanel_AyohaEnterpriseRewardItemOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_AyohaEnterpriseRewardItem.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            RemovePages("FloatPanel_AyohaEnterpriseRewardItemHide()");
                            isFloatPanel_AyohaEnterpriseRewardItemOpen = 'N';
                        }
                      
                    }
                });
            }
        },

        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
               style: ' background-color:transparent;',
               // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                layout: {
                    type: 'fit',

                },
                items: [
                    {
                        xtype: 'container',


                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        items: [
                            {

                                xtype: 'container',
                                width: '100%',
                                docked: 'top',
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_AyohaEnterpriseRewardItemHeader',
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
                                                         id: 'btnFloatPanel_AyohaEnterpriseRewardItemBack',
                                                         height: 30,
                                                         width: 35,
                                                         margin: '0 0 0 10',
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             // FloatPanel_AyohaEnterpriseRewardItemHide();
                                                             // FloatPanel_AyohaEnterpriseRewardItem_AddCardHide();
                                                             isFloatPanel_AyohaEnterpriseRewardItemOpen = 'N';
                                                             _FloatPanel_AyohaEnterpriseRewardItem.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             RemovePages("FloatPanel_AyohaEnterpriseRewardItemHide()");

                                                         }
                                                     },

                                                      {
                                                          xtype: 'spacer',

                                                      },


                                                      {
                                                          margin: '0 10 0 0',
                                                          id: 'htmlFloatPanel_AyohaEnterpriseRewardItem_TitleHeaderTxt',
                                                          html: '<font size=2 color=black><b>Merchant Loyalty Perks</b></font>'
                                                      },


                                                            {
                                                                xtype: 'button',
                                                                hidden:true,
                                                                id: 'btnFloatPanel_AyohaEnterpriseRewardItem_CardIcon',
                                                                height: 30,
                                                                width: 35,
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/membershicardwhite.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                    isFloatPanel_AyohaEnterpriseRewardItemOpen = 'N';

                                                                    _FloatPanel_AyohaEnterpriseRewardItem.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    RemovePages(_FloatPanel_AyohaEnterpriseRewardItem, "isFloatPanel_AyohaEnterpriseRewardItemOpen");
                                                                    //FloatPanel_AyohaEnterpriseRewardItem_AddCardHide();
                                                                }
                                                            },









                                       ]

                            },




























                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaEnterpriseRewardItemStampCardList',
                                // margin: '-10 0 0 0',
                                width: '100%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_AyohaEnterpriseRewardItemCardLis',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                //listeners: {
                                //    initialize: function (c) {

                                //        this.element.on({
                                //            swipe: function (e, node, options) {
                                //                if (e.direction == "left") {
                                //                    //  alert("Hey! I swipe left");

                                //                } else {
                                //                    //  alert("Hey! I swipe right");
                                //                    Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseRewardItem').setActiveItem(0);
                                //                }
                                //            }
                                //        });
                                //    }
                                //},

                                items: [
                                    {
                                        xtype: 'panel',
                                        height: 5
                                    },

                                  {
                                      xtype: 'container',
                                      width: '100%',
                                      height: '100%',
                                      style: "background-color: transparent;",
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'left'

                                      },
                                      items: [
                                        
                                        
                                        {
                                        xtype: 'list',
                                        id: 'RewardList',
                                        width: '100%',
                                        height: '100%',
                                        variableHeights: true,
                                        mode: 'SINGLE',
                                        ui: 'plain',        // removes theme borders
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
                                        store:_DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStore,
                                        // store: {
                                        //     fields: [
                                        //         'image','title','merchant','channel',
                                        //         'discount','rebate','price','oldPrice',
                                        //         'tag1','tag2','viewHref'
                                        //     ],
                                        //     data: [
                                        //         {
                                        //             image: 'https://setkita.com/AyohaImgCard/AdvertisementImage/95154-95943-258-NoEnterprise/KopiSuratCinta.jpg',
                                        //             merchant: 'Kopi Surat Cinta - Putrajaya',
                                        //             subtitle: 'makan kenangan lalu',
                                        //             rating: 5.0,
                                        //             reviews: 2,
                                        //             merchantIcon: 'https://…/merchant-badge.png',
                                        //             shopIcon: 'https://…/shop.png',
                                        //             discount: '-18%',
                                        //             title: '100 Point Untuk Teh ais Mantapppp percuma',
                                        //             oldPrice: 5.30,
                                        //             tag1: 'Food & Beverage',
                                        //             tag2: 'Kedai kopi Hipster',
                                        //             viewHref: '#'
                                        //           }
                                        
                                        
                                        // ]
                                        // },
                                
                                        // itemTpl: new Ext.XTemplate([
                                        //     '<div style="display:flex;justify-content:center;">',
                                        //     '  <div style="width:100%;max-width:100%;">',
                                        //     '    <div style="background:#fff;border-radius:18px;box-shadow:0 6px 24px rgba(16,24,40,.08);border:1px solid #e9e9ee;overflow:hidden;">',
                                        //     '      <div style="position:relative;height:220px;overflow:hidden;">',
                                        //     '        <img src="{image}" alt="{title}" style="width:100%;height:100%;object-fit:cover;display:block;" />',
                                        //     '        <div style="position:absolute;left:12px;top:12px;background:#10b981;color:#fff;font-size:12px;font-weight:800;padding:6px 10px;border-radius:999px;box-shadow:0 2px 6px rgba(16,185,129,.4);">{discount}</div>',
                                        //     '        <div style="position:absolute;right:12px;top:12px;background:#4f46e5;color:#fff;font-size:12px;font-weight:700;padding:6px 12px;border-radius:999px;box-shadow:0 2px 6px rgba(79,70,229,.4);">{rebate}</div>',
                                        //     '        <button aria-label="Save" style="position:absolute;left:12px;bottom:12px;background:#fff;border:none;border-radius:999px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 14px rgba(16,24,40,.18);cursor:pointer;">',
                                        //     '          <span style="font-size:16px;color:#e11d48;">❤</span>',
                                        //     '        </button>',
                                        //     '        <div style="position:absolute;left:0;right:0;bottom:0;height:70px;background:linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,0));"></div>',
                                        //     '      </div>',
                                        //     '      <div style="padding:16px 16px 14px 16px;border-bottom:1px solid #f0f1f5;">',
                                        //     '        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">',
                                        //     '          <div style="font-size:13px;font-weight:600;color:#3f3f46;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{merchant}</div>',
                                        //     '          <div style="font-size:12px;color:#8e8e99;">{channel}</div>',
                                        //     '        </div>',
                                        //     '        <div style="margin-top:4px;font-size:18px;line-height:1.25;font-weight:800;color:#111827;">{title}</div>',
                                        //     '        <div style="margin-top:6px;display:flex;align-items:flex-end;gap:8px;">',
                                        //     // '          <div style="font-size:22px;font-weight:900;color:#111827;">RM {price}</div>',
                                        //     '          <div style="font-size:13px;color:#9ca3af;text-decoration:line-through;">{oldPrice}</div>',
                                        //     '        </div>',
                                        //     '        <div style="margin-top:10px;display:flex;flex-wrap:wrap;gap:8px;">',
                                        //     '          <span style="font-size:12px;border:1px solid #e5e7eb;background:#f3f4f6;color:#374151;padding:6px 10px;border-radius:999px;">{tag1}</span>',
                                        //     '          <span style="font-size:12px;border:1px solid #e5e7eb;background:#f3f4f6;color:#374151;padding:6px 10px;border-radius:999px;">{tag2}</span>',
                                        //     '        </div>',
                                        //     '      </div>',
                                        //     '      <div style="display:flex;gap:12px;padding:14px 16px 16px 16px;">',
                                        //     '        <a href="{viewHref}" style="flex:1;text-align:center;text-decoration:none;background:linear-gradient(90deg,#FF7A00,#FFC24D);color:#fff;font-weight:800;font-size:14px;padding:12px 14px;border-radius:14px;box-shadow:0 6px 16px rgba(255,122,0,.25);">View Reward</a>',
                                                
                                        //     '      </div>',
                                        //     '    </div>',
                                        //     '  </div>',
                                        //     '</div>' // ✅ the missing closing wrapper
                                        // ].join(''))








                                        // Drop this into your list's itemTpl
itemTpl: new Ext.XTemplate([
    '    <!-- Main Card Container -->',
   // '   <div style="background-color:#ffffff; width:105%; border-radius:5px; overflow:hidden; margin:0 0 0 -10px; border:0; -webkit-box-shadow:0 18px 48px rgba(0,0,0,.28), 0 8px 20px rgba(0,0,0,.22); box-shadow:0 18px 48px rgba(0,0,0,.28), 0 8px 20px rgba(0,0,0,.22);">',
    '<div style="background:#fff; width:103%; border-radius:12px; overflow:hidden; margin:0px 0px 0px -5px; border:0; box-shadow:0 12px 30px rgba(24,39,75,.14), 0 3px 10px rgba(24,39,75,.10);">',
    '',
    '        <!-- Image Section -->',
    '        <div style="position: relative;">',
    '            <!-- Placeholder for the main image -->',
  //  '            <img src="{ImagePath}" alt="Pandan Butter Latte" style="width: 100%; height: auto; display: block;">',
    '{ModifiedImagePath}',
    '            ',
    '            <!-- Discount Tag -->',
    '            <div style="display:block;position: absolute; top: 12px; left: 12px; background-color: {ModifiedCampaignColor}; color: white; padding: 5px 12px; border-radius: 8px; font-size: 12px; font-weight: bold;">',
    '                {ItemType}',
    '            </div>',
    '            ',
    '            <!-- Price Tag -->',

    '<div style="display:{ModifiedVoucherDisplay}',
  ';position:absolute; bottom:-25px; right:20px !important; left:auto !important',
  'display:flex; flex-direction:column; align-items:center; justify-content:center;',
  'width:50px; height:50px;',
  'background:{ModifiedCampaignColor}; color:#fff; border-radius:50%;',
  'box-shadow:0 4px 8px rgba(0,0,0,0.2); border:2px solid #fff;',
 ' font-weight:bold; line-height:1; gap:2px;z-index:10;">{ModifiedAmount}</div>',

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
    '                {Name}',
    '            </h2>',
    '            <h2 style="font-size: 14px; font-weight: 700; margin: 3px 0 4px 0; color: #2c3e50; line-height: 1.4;">',
    '                {ModifiedTermAndDescription}',
    '            </h2>',
    '            ',
    '            <!-- Original Price -->',
    '            <p style="margin: 0 0 16px 0; color: #95a5a6; font-size: 12px;">',
    '                End Date: {EndDate}',
    '            </p>',
    '',
    '            <!-- Tags -->',
    '            <div style="display: flex; gap: 8px; margin-bottom: 24px;">',
    '                <span style="background-color: #ecf0f1; color: #7f8c8d; padding: 6px 14px; border-radius: 16px; font-size: 13px; font-weight: 500;">{BusinessMode}</span>',
    '                <span style="background-color: #ecf0f1; color: #7f8c8d; padding: 6px 14px; border-radius: 16px; font-size: 13px; font-weight: 500;">{EnterpriseDescription}</span>',
    '            </div>',
    '            ',
    '        </div>',
    '        ',
    '        <!-- Action Button -->',
    '        <div style="margin: -20px 0px 0px 10px;">',
    '{ModifiedButtonBottomDisplay}',
    // '             <button style="width: 97%; background-image: linear-gradient(#ff00de75, #c800ffc9);background-color: #fac; color: white; border: none; padding: 15px; border-radius: 12px; font-size: 14px; font-weight: bold; cursor: pointer; text-shadow: 0 1px 1px rgba(0,0,0,0.2); box-shadow: 0 4px 10px rgba(247, 151, 30, 0.4); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform=\'translateY(-2px)\'; this.style.boxShadow=\'0 6px 12px rgba(247, 151, 30, 0.5)\';" onmouseout="this.style.transform=\'translateY(0)\'; this.style.boxShadow=\'0 4px 10px rgba(247, 151, 30, 0.4)\';">',
    // '                View Membership Card',
    // '            </button>',
    '        </div><br>',
    '',
    '    </div>'
    ].join(''),
  
    )}
                                
                                
                                
                                
                                ]
                                  },

                                ]

                            },




                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaEnterpriseRewardItemTitleOutter',
                                width: '100%',
                                docked: 'bottom',
                                // hidden:true,
                                height: 40,
                                // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid grey;',
                                // style: "background-color: #EAEEF3;",

                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                items: [




                                      {
                                          xtype: 'button',
                                          id: 'btnFloatPanel_AyohaEnterpriseRewardItemListSearch',
                                          hidden: true,
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
                                         id: 'FloatPanel_AyohaEnterpriseRewardItem_SearchTxt',
                                         margin: '0 0 0 -10',
                                         width: '78%',
                                         height: 20,
                                         html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseRewardItem_SearchTxt" placeHolder="Search Merchant Loyalty Perks" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                                     },



                                     {
                                         id: 'FloatPanel_AyohaEnterpriseRewardItem_CountSearchTxt',
                                         margin: '0 0 0 0',
                                         // width: '75%',
                                         height: 20,
                                         html: '<font size=3 color=black>(0)</font>'
                                     },
                                     {
                                         xtype: 'button',
                                         id: 'btnFloatPanel_AyohaEnterpriseRewardItemFilter',
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


                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                              //{
                              //    xtype: 'tabpanel',
                              //    // hidden: true,
                              //    //  hidden:true,
                              //    id: 'tabpanelFloatPanel_AyohaEnterpriseRewardItem',
                              //    // style: 'border-top:2px solid #ECF0F1;background: white;',
                              //    // style: 'background-color: black;',
                              //    // margin: '-20 0 0 -26',
                              //    // margin: '25 0 0 0',

                              //    //width: 200,
                              //    width: '96%',
                              //    height: '100%',
                              //    //height: 120,
                              //    //height: 50,
                              //    //  zIndex: 200,
                              //    //  docked: 'bottom',
                              //    tabBarPosition: 'top',
                              //    ui: 'plain',
                              //    // docked: 'bottom',

                              //    initialize: function (c) {
                              //        //this.getTabBar().hide();


                              //    },



                              //    items: [










































                              //    ]

                              //    //}
                              //},










                        ]
                    },





















                    



























                ]
            },












        ]





    });
    return _FloatPanel_AyohaEnterpriseRewardItem;



}








function FloatPanel_AyohaEnterpriseRewardItemShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaEnterpriseRewardItem);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaEnterpriseRewardItem());
    this.overlay.show();
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    AddRoutePages("FloatPanel_AyohaEnterpriseRewardItemHide()");
    isFloatPanel_AyohaEnterpriseRewardItemOpen = 'Y';
    // FloatPanel_AyohaEnterpriseRewardItem_AddCardShow();

    //Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseRewardItem').getTabBar().hide();
    //Load_FloatPanel_AyohaEnterpriseRewardItem_StampCampaignLoadByEnterpriseAccNoStore();
    //FloatPanel_AyohaEnterpriseRewardItem_AddCardShow();
    //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>Customer Info</u></b></font>');
   
  
    FloatPanel_AyohaEnterpriseRewardItem_VIEW_merchantperk_View_LoadbySubscriberAccNoStore();
    document.getElementById("input-FloatPanel_AyohaEnterpriseRewardItem_SearchTxt").addEventListener("keyup", VIEW_merchantperk_View_LoadbySubscriberAccNoStoreOnKeyUp);
   // document.getElementById("ext-element-914").addEventListener("onclick", Dashboard_SearchMerchantListShow);
   
   // FloatPanel_AyohaEnterpriseRewardItem_MembershipsLoadBySubscriberAccNoStore();
    FloatPanel_AyohaEnterpriseRewardItemAdjustHeight();




    // var containerViewnamecontainer_FloatPanel_AyohaEnterpriseRewardItemListID_no_membershipcard = Ext.ComponentQuery.query('container[name=namecontainer_FloatPanel_AyohaEnterpriseRewardItemListID_no_membershipcard]')[0];
    // var containerViewElnamecontainer_FloatPanel_AyohaEnterpriseRewardItemListID_no_membershipcard = containerViewnamecontainer_FloatPanel_AyohaEnterpriseRewardItemListID_no_membershipcard.element;
    // containerViewElnamecontainer_FloatPanel_AyohaEnterpriseRewardItemListID_no_membershipcard.on('tap',
    //   function (event, node, options, eOpts) {
    //       Dashboard_SearchMerchantListShow();
    //       // FloatPanel_RewardStoreShow();
    //   }
    // );


    LoadingPanelHide();

    
}





function FloatPanel_AyohaEnterpriseRewardItemHide() {
    // FloatPanel_AyohaEnterpriseRewardItem_AddCardHide();
    if (isFloatPanel_AyohaEnterpriseRewardItemOpen == "Y") {
        _FloatPanel_AyohaEnterpriseRewardItem.hide(); isFloatPanel_AyohaEnterpriseRewardItemOpen = 'N';
        RemovePages("FloatPanel_AyohaEnterpriseRewardItemHide()");
    }
   
}



function FloatPanel_AyohaEnterpriseRewardItem_VIEW_merchantperk_View_LoadbySubscriberAccNoStore() {
  



    
    _DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/VIEW_merchantperk_View/VIEW_merchantperk_View_LoadbySubscriberAccNo');




    _DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('_DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStore loaded successfully, total records: ' + records.length);
    
                count_DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStoreFirst=records.length;
                Ext.getCmp('FloatPanel_AyohaEnterpriseRewardItem_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + count_DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStoreFirst + ')</b></font>');
               
                LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });




}








function FloatPanel_AyohaEnterpriseRewardItem_VIEW_merchantperk_ViewStore() {
  



    
 
    _DataStore_VIEW_merchantperk_ViewStore.getProxy().setUrl(GetAPIurl() + '/VIEW_merchantperk_View/VIEW_merchantperk_View');




    _DataStore_VIEW_merchantperk_ViewStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
    
             
               
                LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });




}








//var _DataStore_MembershipsLoadBySubscriberAccNoStore;
function FloatPanel_AyohaEnterpriseRewardItem_MembershipsLoadBySubscriberAccNoStore() {


    //console.log(GetCurrAyohaUserAccountNo());

    //Ext.getStore('MembershipsLoadBySubscriberAccNoStore').getProxy().setExtraParams({
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo()
    //});
    //Ext.StoreMgr.get('MembershipsLoadBySubscriberAccNoStore').load();

   // alert(GetCurrAyohaUserAccountNo())
    _DataStore_MembershipsLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipsLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/Memberships/MembershipsLoadBySubscriberAccNo');
    _DataStore_MembershipsLoadBySubscriberAccNoStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {
      
        //Ext.getStore('MembershipsLoadBySubscriberAccNoStore').getProxy().setExtraParams({
        //    SubscriberAccNo: GetCurrAyohaUserAccountNo()
        //});

        ////  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
        ////  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
        ////console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)


        //Ext.StoreMgr.get('MembershipsLoadBySubscriberAccNoStore').load();

        //var myStore = Ext.getStore('MembershipsLoadBySubscriberAccNoStore');
        //_DataStore_MembershipsLoadBySubscriberAccNoStore = Ext.getStore('MembershipsLoadBySubscriberAccNoStore');

        var count = parseInt(_DataStore_MembershipsLoadBySubscriberAccNoStore.getCount());

        if (count>0) {
            Ext.getCmp('container_FloatPanel_AyohaEnterpriseRewardItemListID_no_membershipcard').setHidden(true);
            Ext.getCmp('FloatPanel_AyohaEnterpriseRewardItemListID').setHidden(false);
        }

        countMembershipsLoadBySubscriberAccNoStoreFirst = _DataStore_MembershipsLoadBySubscriberAccNoStore.getCount();
        Ext.getCmp('FloatPanel_AyohaEnterpriseRewardItem_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipsLoadBySubscriberAccNoStoreFirst + ')</b></font>');
        //alert(countMembershipsLoadBySubscriberAccNoStoreFirst)
      
        //   for (i = 0; i < count; i++) {
        //       var modelRecorded = myStore.getAt(i);
        //       var MembershipCardBackgroundImg = modelRecorded.get('MembershipCardBackgroundImg');
        //       var ModifiedHeaderHeight = modelRecorded.get('ModifiedHeaderHeight');
        //       var ModifiedEnterprisesLogo = modelRecorded.get('ModifiedEnterprisesLogo');
        //       var ModifiedEnterprisesName = modelRecorded.get('ModifiedEnterprisesName');
        //       var MembershipCardType = modelRecorded.get('MembershipCardType');
        //       var ModifiedAyohaUserAccountNo = modelRecorded.get('ModifiedAyohaUserAccountNo');
        //       var AyohaUserAccountName = modelRecorded.get('AyohaUserAccountName');
        //       var AyohaUserPhoto = modelRecorded.get('AyohaUserPhoto');

        //       Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHidden(false);
        //       Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;height: 250px;width:100%;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
        //                                    //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
        //                                                     //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
        //// '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
        //                                     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;' + ModifiedHeaderHeight + '" colspan="3">' + ModifiedEnterprisesLogo + ' ' + ModifiedEnterprisesName + '</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">' + MembershipCardType + '</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedAyohaUserAccountNo + '</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + AyohaUserAccountName + ' </div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
        //                                       '</div>' +
        //                                      '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="' + AyohaUserPhoto + '" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>');

        //   }
        //   FloatPanel_MembershipCardList_Upgrade_StampCampaignLoadByEnterpriseAccNoStore(EnterpriseAccountNo);
        LoadingPanelHide();
        Ext.Viewport.setMasked(false);










    });
    task.delay(1000);




}

var count_DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStoreFirst;
function VIEW_merchantperk_View_LoadbySubscriberAccNoStoreOnKeyUp() {






    console.log('SearchEnterpriseOnKeyUp');
    var countMembershipsLoadBySubscriberAccNoStoreSequence = 0;


    _DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaEnterpriseRewardItem_SearchTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
                console.log('ada0');

                countMembershipsLoadBySubscriberAccNoStoreSequence = _DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStore.getCount();
                Ext.getCmp('FloatPanel_AyohaEnterpriseRewardItem_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipsLoadBySubscriberAccNoStoreSequence + ')</b></font>');
                // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countMembershipsLoadBySubscriberAccNoStoreSequence = _DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStore.getCount();
        Ext.getCmp('FloatPanel_AyohaEnterpriseRewardItem_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipsLoadBySubscriberAccNoStoreSequence + ')</b></font>');

        //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStore.clearFilter();
        Ext.getCmp('FloatPanel_AyohaEnterpriseRewardItem_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + count_DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStoreFirst + ')</b></font>');
        // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}








function FloatPanel_AyohaEnterpriseRewardItemAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 80;
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;
    Ext.getCmp('FloatPanel_AyohaEnterpriseRewardItemID').setHeight(x + 7);
    //Ext.getCmp('FloatPanel_AyohaEnterpriseRewardItemID').setHeight(x + 40);
 // Ext.getCmp('FloatPanel_AyohaEnterpriseRewardItemListID').setHeight(newHeights);


}
var globalFloatPanel_AyohaEnterpriseRewardItemOpenMembershiCard_EnterpriseTagLine;
function FloatPanel_AyohaEnterpriseRewardItemOpenMembershiCardDetail(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode,EnterpriseTagLine, ID) {
  
///comment 29/9/2024
    // _isFloatPanel_Membership_MembershipCardSaleDetail_loadFirstTime='N';
    // FloatPanel_Membership_MembershipCardSaleDetailShow(EnterpriseAccountNo,MembershipCardCode);
    // return;





//   alert(EnterpriseHQAccountNo)
//   alert(EnterpriseAccountNo)
//   alert(MembershipCardCode)
//   alert(EnterpriseTagLine)
//   alert(ID)
    //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
    //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
    //var MembershipCardCode = records.get('MembershipCardCode');
    //var ID = records.get('ID');
    //var isMembershipCardSubscribed = records.get('isMembershipCardSubscribed');

    globalFloatPanel_AyohaEnterpriseRewardItemOpenMembershiCard_EnterpriseTagLine=EnterpriseTagLine;
//alert(globalFloatPanel_AyohaEnterpriseRewardItemOpenMembershiCard_EnterpriseTagLine)
    globalOpenMembershipCardList_Upgrade_From = "FloatPanel_AyohaEnterpriseRewardItem";
    FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID);
    setTimeout(function () {
        
        Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=black><b>My Membership Card</b></font>');
    }, 2000);

}



function FloatPanel_AyohaEnterpriseRewardItem_MembershipCardLoadByMembershipCardCodeStore(MembershipCardCode,EnterpriseCountStar,EnterpriseAccNo,TotalReviewer) {
   
   //alert(MembershipCardCode)
   
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "MembershipCardCode": MembershipCardCode,
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/MembershipCard/MembershipCardLoadByMembershipCardCode',

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
                       // MembershipCardName= data.results[0].MembershipCardName;
                      //  MembershipCardFeePaymentCycle= data.results[0].MembershipCardFeePaymentCycle;

                     FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(MembershipCardCode,EnterpriseAccNo
                            ,`NO`,data.results[0].MembershipCardFeePaymentCycle,EnterpriseCountStar,TotalReviewer)
                      
                      //  '<div OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)" style="min-width:88vw; max-width:88vw; margin-right:5vw; box-sizing:border-box; border-radius:15px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.3); display:inline-block;">',


//                       AppState.FloatPanel_AyohaRewardVoucherDetail.MembershipCardCode=MembershipCardCode;
// AppState.FloatPanel_AyohaRewardVoucherDetail.EnterpriseCountStar=EnterpriseCountStar;
// AppState.FloatPanel_AyohaRewardVoucherDetail.EnterpriseAccNo=EnterpriseAccNo;
// AppState.FloatPanel_AyohaRewardVoucherDetail.TotalReviewer=TotalReviewer;
// AppState.FloatPanel_AyohaRewardVoucherDetail.MembershipCardName=MembershipCardName;
// AppState.FloatPanel_AyohaRewardVoucherDetail.MembershipCardFeePaymentCycle=MembershipCardFeePaymentCycle;
                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {
                      
                        Ext.Viewport.unmask();

                    }





                }
                else {


                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
            }

        });



    });

    //  Ext.Viewport.unmask();

    //   setDashBoardMerchantReviewRate(FiveStar, FourStar, ThreeStar, TwoStar, OneStar);
    task.delay(500);
}