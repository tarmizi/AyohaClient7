
Ext.define('BuskartApp.view.AyohaMerchantReview.AyohaMerchantReview', {

});

var _AyohaMerchantReview;
var _AyohaMerchantReview_EnterpriseAccNo;
var _AyohaMerchantReview_MembershipCode;
var Index = 0;
var isAyohaMerchantReviewOpen = 'N';

var CarouselIndex = 0;

var _AyohaMerchantReview_isFirstLoad = "N";







function AyohaMerchantReview() {

    _AyohaMerchantReview =
    Ext.create('Ext.Container', {
        zIndex: 200,
        xtype: 'container',
        //height: 465,
       height: '100%',
        width: '100%',
        id: 'AyohaMerchantReviewID',
      ///  styleHtmlContent: true,
        centered: true,
        
        // --- START: Key Changes for Backdrop ---
        modal: false, // Use Sencha's modal handling
        hideOnMaskTap: false, // Prevent closing on tap
        layout: {
            type: 'vbox',
            pack: 'start',  // Center the white box vertically
            align: 'center'  // Center the white box horizontally
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
        // scrollable: {
        //     direction: 'vertical',
        //     directionLock: true,
        //     indicators: false,
        //     bounces: false,
        //     outOfBoundRestrictFactor: 0,
        //     //threshold: 20,
           
        // },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        style:ayohaThemeColor_Body(),
       //style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
      /// style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {

                        if (e.direction == "left") {
                            _AyohaMerchantReview.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isAyohaMerchantReviewOpen = 'N';
                            _AyohaMerchantReview_isFirstLoad = "N";
                            RemovePages("AyohaMerchantReviewHide()");
                        } if (e.direction == "right") {
                            _AyohaMerchantReview.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isAyohaMerchantReviewOpen = 'N';
                            _AyohaMerchantReview_isFirstLoad = "N";
                            RemovePages("AyohaMerchantReviewHide()");
                        }
                       

                    }
                });
            }
        },


        items: [
            
            {

                xtype: 'container',
                width: '100%',
                margin: '0 0 0 0',
                docked: 'top',
                height: ayoha_HeaderHeight(),
                style:ayohaThemeColor_Header(),
                id: 'containerAyohaMerchantReviewHeader',
                
              
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
                                         id: 'btnAyohaMerchantReviewBack',
                                         height: 30,
                                         margin: '5 0 0 10',
                                         width: 35,
                                         // iconCls: 'list',
                                         html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                             _AyohaMerchantReview.hide(Ext.fx.Animation({
                                                 type: 'slideOut',
                                                 direction: 'left',
                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                 duration: 250

                                             }));
                                             isAyohaMerchantReviewOpen = 'N';
                                             _AyohaMerchantReview_isFirstLoad = "N";
                                           
   
                                             RemovePages("AyohaMerchantReviewHide()");

                                         }
                                     },

                                      {
                                          xtype: 'spacer',

                                      },

                                       {
                                           margin: '0 15 0 0',
                                           id: 'htmlAyohaMerchantReview_TitleHeaderTxt',
                                          html:ayohaTheme_HeaderText('Ayoha Merchant Review'),
                                          // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-weight:700;font-size:18px;color:white">Ayoha Merchant Review</div>',
                                       },                                


                       ]

            },


           
            



                    {
                        xtype: 'container',
                        width: '95%',
                       // height:'100%',
                        flex: 1, // ✅
                        id:'Scrollable_containerAyohaMerchantReviewMainContentID',
                       // height:2000,
                        //    margin: '0 0 0 0',
                       style: 'background-color: transparent',
                        //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                       // style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                        scrollable: {
            direction: 'vertical',
            directionLock: true,
            indicators: false,
           
        },
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'stretch'

                        },
                        items: [


{
    xtype: 'container',
    width: '100%',
    //height:0,
    id: 'containerAyohaMerchantReviewMainContentID',
   style: 'background-color: transparent',
   layout: {
    type: 'vbox',
    pack: 'start',
    align: 'stretch'

},
items:[
{
        xtype: 'container',
        width: '100%',
        height: 15,
        //margin:'0 0 0 0',
       // hidden: true,
      style: "background-color: transparent;",
    },
    {
        xtype: 'container',
        id: 'containerAyohaMerchantReview_ReviewCompanyInfo',
        width: '100%',
        height: 130,
        margin:'0 0 0 0',
        style: "background-color: transparent",
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'center'

        },
        items:[
            {
                xtype: 'container',
               // id: 'containerAyohaMerchantReview_ReviewCompanyInfo',
                width: 90,
                height: 90,
                margin:'0 0 0 0',
                style: "background-color: white;border-radius:20px;"+ayoha_BorderColor(),
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'

                },
                items:[
                    {
                        width: 65,
                        height:65,
                       // margin:'110 0 0 0',
                         id: 'containerAyohaMerchantReview_ReviewCompanyInfo_Logo',                                         
                         html: '<img src="resources/icons/ccrlogo.png" alt="Image" style="width:90px;height:90px;">',

                     },
                ]
            },
            {
                xtype: 'container',
                width: '100%',
                height:4,
                // id: 'containerAyohaMerchantReview_ReviewCompanyInfo_Name',
                // html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;">Community Coffea Sdn Bhd</div>',

             },
           
            {
              
               width: '100%',
               height:18,
                id: 'containerAyohaMerchantReview_ReviewCompanyInfo_Name',
                html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;">Community Coffea Sdn Bhd</div>',

            },
            {
                xtype: 'container',
                width: '100%',
                height:4,
                // id: 'containerAyohaMerchantReview_ReviewCompanyInfo_Name',
                // html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;">Community Coffea Sdn Bhd</div>',

             },
            {
              
                width: '100%',
                height:12,
                 id: 'containerAyohaMerchantReview_ReviewCompanyInfo_Location',
                // <div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-weight:700;font-size:12px;color:#6B7280;">Permatang Tok Mahat, Perak</div>
                 html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-weight:700;font-size:12px;color:#6B7280;">Permatang Tok Mahat, Perak</div>',

             },
        ]
    },

   
    // {
    //     xtype: 'container',
    //     width: '100%',
    //     height: 5,
    //     //margin:'0 0 0 0',
    //    // hidden: true,
    //   style: "background-color: transparent;",
    // },
   
{
xtype: 'container',
width: '100%',
height: 20,
//margin:'0 0 0 0',
// hidden: true,
style: "background-color: transparent;",
layout: {
type: 'vbox',
pack: 'center',
align: 'center'

},
items:[
{
xtype: 'container',
width: '95%',
height: 1,
//margin:'20 0 0 0',
// hidden: true,
style: ayoha_BorderColor_1px(),
}
]
},
    {
        xtype: 'container',
        id: 'containerAyohaMerchantReview_ReviewMaster',
        width: '100%',
        height: 115,
      //  margin:'0 0 0 0',
       // hidden: true,
      style: "background-color: transparent",
        //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;',
    
        layout: {
            type: 'hbox',
            pack: 'left',
            align: 'left'

        },
        items: [
              //{
              //    xtype: 'container',
              //    id: 'containerAyohaMerchantReview_LoadingInner',
              //    width: '100%',
              //    height: 140,
              //    //hidden:true,
              //    // style: "background-color: transparent",
              //    //style: "background-color: #F35B57;",
              //    style: 'background-image: url("resources/icons/reviewImgSample.png"); background-size: 100% 140px;background-repeat: no-repeat;',

              //},
              {
                  xtype: 'container',
                  width: '66%',
                  height: 120,
                  style: "background-color: transparent",
                  //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;',
                  layout: {
                      type: 'vbox',
                      pack: 'start',
                      align: 'left'
                  },
                  items: [

                       {
                          // margin: '-30 0 0 -37',
                           margin: '-10 0 0 0',
                          // html: '<div id="barchartAyohaMerchanReview" style="width: 300px; height: 140px;"></div>'
                     html:'<canvas id="barchartAyohaMerchanReview" width="200" height="140"></canvas>'
                        },

                  ]

              },

                    {
                        xtype: 'container',
                        width: '34%',
                        height: 120,
                        style: "background-color: transparent",
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center'
                        },
                        items: [

                             {
                                // margin: '-30 0 0 6',
                                width: '100%',
                                height: 45,
                                 id:'htmlAyohaMerchantReview_Rate',
                                 html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 60px;font-weight:bold;color:black;">0.0</div>',
                             },

                               {
                                   xtype: 'container',
                                   width: '100%',
                                   height: 28,
                                   margin:'0 0 0 -10',
                                   style: "background-color: transparent",
                                   layout: {
                                       type: 'hbox',
                                       pack: 'start',
                                       align: 'left'
                                   },
                                   items: [

                                        {
                                            xtype: 'button',
                                            id: 'btnAyohaMerchantReview_Star1',
                                            height: 28,
                                            width: 28,
                                            // iconCls: 'list',
                                            html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {
                                            

                                            }
                                        },
{
xtype: 'button',
id: 'btnAyohaMerchantReview_Star2',
height: 28,
width: 28,
margin:'0 0 0 -5',
// iconCls: 'list',
html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
ui: 'plain',
handler: function () {

}
},
{
xtype: 'button',
id: 'btnAyohaMerchantReview_Star3',
height: 28,
width: 28,
margin: '0 0 0 -5',
// iconCls: 'list',
html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
ui: 'plain',
handler: function () {


}
},
{
xtype: 'button',
id: 'btnAyohaMerchantReview_Star4',
height: 28,
width: 28,
margin: '0 0 0 -5',
// iconCls: 'list',
html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
ui: 'plain',
handler: function () {

}
},
{
xtype: 'button',
id: 'btnAyohaMerchantReview_Star5',
height: 28,
width: 28,
margin: '0 0 0 -5',
// iconCls: 'list',
html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
ui: 'plain',
handler: function () {

}
},
                                   ]

                               },




                               {
                                   margin: '17 0 0 10',
                                  width: '100%',
                                  height: 10,
                                   id: 'htmlAyohaMerchantReview_TotalReviews',
                                   html: '<div style="width100%;text-align:center;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;0 Reviews</div>'
                               }




                        ]

                    },


               

        ]

    },
       
    {
        xtype: 'container',
        width: '100%',
        //height:  '100%',
        id: 'AyohaMerchantReviewContentID',
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'stretch'

        },
       // style: 'background-color:transparent',
        style: 'background: transparent;',

        items: [
            {
                xtype: 'list',
                width: '100%',
               /// height: '100%',
              //  scrollable: false,      // ✅ list tak scroll
                infinite: false,        // ✅ render semua items (penting!)
                variableHeights: true ,  // ✅ kalau review/reply panjang
                store:_DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoStore,
                id: 'AyohaMerchantReviewListID',
                mode: 'SINGLE',
                // width: '100%',
                disableSelection: true,
                scrollable:false,
               style: 'background-color:rgba(255, 255, 255, 0);border-radius: 0px 0px 0px 0px;',
              //  style: 'background-color:transparent !important;border-radius:0;',
                // scrollable: {
                //     direction: 'vertical',
                //     indicators: {
                //         y: {
                //             autoHide: true
                //         },
                //         x: {
                //             autoHide: true
                //         }
                //     }
                //},

                itemTpl: '<div class="review-item-container" style="background-color:transparent; width:100%; border-bottom:1px solid rgba(124,58,237,.14); padding: 15px 10px; display: flex; flex-direction: column;">' +

                // --- BAHAGIAN ATAS: GAMBAR & NAMA ---
                '<div style="display: flex; flex-direction: row; align-items: flex-start; margin-bottom: 10px;">' +
                    // Avatar Image
                    '<div style="margin-right: 12px;">' +
                        '<img src="{Photo}" style="width:50px; height:50px; border-radius:50%; border:1px solid #ccc; object-fit: cover;" />' +
                    '</div>' +
    
                    // User Info & Rating
                    '<div style="flex: 1;">' +
                        '<div style="font-family:Arial, sans-serif; font-size:14px; font-weight:bold; color:#333; margin-bottom: 2px;">{AccountName}</div>' +
                        '<div style="font-family:Arial, sans-serif; font-size:12px; color:#666;">{ModifiedStarReview} <span style="margin: 0 5px;">•</span> {ReviewDate}</div>' +
                    '</div>' +
                '</div>' +
    
                // --- BAHAGIAN TENGAH: TEKS REVIEW ---
                // "word-wrap: break-word" penting supaya teks tak melimpah keluar
                '<div style="font-family:Century Gothic, sans-serif; font-size:13px; color:#333; line-height: 1.4; margin-bottom: 0px; word-wrap: break-word;">' +
                    '{ModifiedReviewTxt}' +
                '</div>' +
    
                // --- BAHAGIAN BAWAH: BUTTONS (EDIT/DELETE) ---
                // Ruang ini akan auto-expand jika button wujud
                '<div style="width: 100%; display: flex; justify-content: flex-end;">' +
                    '{ModifiedBottomButton}' +
                '</div>' +
    
             '</div>',



              

                emptyText: '<div class="myContent">No Review Yet</div>',
              
               

            },
        ]
    },
    {
        xtype: 'container',
        width: '100%',
        height: 20,              // ✅ lebih kurang height bottom bar (90) + gap
        style: 'background:transparent;'
      }
]
},

                        ]
                    },


                    {
                       
                        xtype: 'container',
                        margin: '0 0 0 0',
                       docked:'bottom',                    
                        height: 90,
                        width: '100%',
                        style: 'border-top:2px solid rgba(124,58,237,.14);border-bottom:2px none #D25959;border-left:2px none #D25959;border-right:2px none #D25959;background-color:transparent;',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'
                        },
                        items:[
                           {
                               width: '90%',
                               //height: 30,
                               html:
                             '<div class="ayohaMActions">' +
                               '<button class="ayohaCheckOutBtn" onclick="AyohaMerchantReview_AddEditReview();">Write a review and rate us</button>' +
                              
                            '</div>' 
                             
                             
                             
                             },
                             
                        ]
                   }






































        ]





    });
    return _AyohaMerchantReview;



}








//function AyohaMerchantReviewShow(ID) {
var MembershipTag;
var globalEnterpriseAccNo_AyohaMerchantReview;
function AyohaMerchantReviewShow(ID) {
    AddRoutePages("AyohaMerchantReviewHide()");
    Ext.Viewport.remove(_AyohaMerchantReview);
    this.overlay = Ext.Viewport.add(AyohaMerchantReview());
    this.overlay.show();   
    AyohaMerchantReviewAdjustHeight();
    console.log("2:" + _AyohaMerchantReview_isFirstLoad);
    isAyohaMerchantReviewOpen = 'Y';
    globalAyohaMerchantReview_AddEdit_PostReview_isSave = "N";
    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseLogoPath = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseName = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    var EnterpriseAccNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseLogoPath = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseName = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    globalEnterpriseAccNo_AyohaMerchantReview = EnterpriseAccNo.get('EnterpriseAccNo');
    AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore();

   
    Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Logo').setHtml('<div style="width:80px;height:80px;background-color:white;border-radius:20px"><img src="' + EnterpriseLogoPath + '" alt="Image" style="width:70px;height:70px;"></div>');
    Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Name').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;">' + EnterpriseName + '</div>');

}



function AyohaMerchantReviewShow_FromOther(EnterpriseLogoPath,EnterpriseName,EnterpriseAccNo) {
    AddRoutePages("AyohaMerchantReviewHide()");
    Ext.Viewport.remove(_AyohaMerchantReview);
    this.overlay = Ext.Viewport.add(AyohaMerchantReview());
    this.overlay.show();   
    AyohaMerchantReviewAdjustHeight();
   // isAyohaMerchantReviewOpen = 'Y';
    globalAyohaMerchantReview_AddEdit_PostReview_isSave = "N";
    globalEnterpriseAccNo_AyohaMerchantReview = EnterpriseAccNo;
    AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore();

    Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Logo').setHtml('<div style="width:80px;height:80px;background-color:white;border-radius:20px"><img src="' + EnterpriseLogoPath + '" alt="Image" style="width:70px;height:70px;"></div>');
    Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Name').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;">' + EnterpriseName + '</div>');

   // Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Logo').setHtml('<img src="' + EnterpriseLogoPath + '" alt="Image" style="width:90px;height:90px;">');
   // Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Name').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;">' + EnterpriseName + '</div>');

}




function AyohaMerchantReviewShow_FromFloatPanel_MerchantDetailPage() {
    AddRoutePages("AyohaMerchantReviewHide()");
    Ext.Viewport.remove(_AyohaMerchantReview);
    this.overlay = Ext.Viewport.add(AyohaMerchantReview());
    this.overlay.show();
    //AyohaMerchantReviewAdjustHeight();
    console.log("2:" + _AyohaMerchantReview_isFirstLoad);
    isAyohaMerchantReviewOpen = 'Y';
    globalAyohaMerchantReview_AddEdit_PostReview_isSave = "N";



    var accNo  = globalFloatPanelMerchantDetailPage_EnterpriseAccNo;
var logo   = globalFloatPanelMerchantDetailPage_EnterpriseLogo;
var name   = globalFloatPanelMerchantDetailPage_EnterpriseName;

Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Logo')
  .setHtml('<img src="'+logo+'" style="width:65px;height:65px;">');

Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Name')
  .setHtml('<div style="text-align:center;font-weight:900;font-size:18px;color:#111827;">'+name+'</div>');

var task = Ext.create('Ext.util.DelayedTask', function () {
  // guna accNo local, bukan global
  globalEnterpriseAccNo_AyohaMerchantReview = accNo;
  AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore_FixForCheckInPage(accNo);
});
task.delay(0); // tak perlu 500ms kalau sekadar nak trigger selepas render


   
    

    // Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Logo').setHtml('<img src="' + globalFloatPanelMerchantDetailPage_EnterpriseLogo + '" alt="Image" style="width:65px;height:65px;">');
    // Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Name').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-weight:900;font-size:18px;color:#111827;">' + globalFloatPanelMerchantDetailPage_EnterpriseName + '</div>');
  
  
    // var task = Ext.create('Ext.util.DelayedTask', function () {
    //     globalEnterpriseAccNo_AyohaMerchantReview = globalFloatPanelMerchantDetailPage_EnterpriseAccNo;
    //     AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore();
    // });

    // task.delay(500);
  
  
  
   // Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Logo').setHtml('<img src="' + globalFloatPanelMerchantDetailPage_EnterpriseLogo + '" alt="Image" style="width:90px;height:90px;">');
   // Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Name').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;">' + globalFloatPanelMerchantDetailPage_EnterpriseName + '</div>');







}



function AyohaMerchantReviewShow_FromMerchantListSearchResult(ID) {
    AddRoutePages("AyohaMerchantReviewHide()");
    Ext.Viewport.remove(_AyohaMerchantReview);
    this.overlay = Ext.Viewport.add(AyohaMerchantReview());
    this.overlay.show();
   // AyohaMerchantReviewAdjustHeight();
    console.log("2:" + _AyohaMerchantReview_isFirstLoad);
    isAyohaMerchantReviewOpen = 'Y';
    globalAyohaMerchantReview_AddEdit_PostReview_isSave = "N";
    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseLogoPath = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseName = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    var EnterpriseAccNo = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseLogoPath = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseName = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    globalEnterpriseAccNo_AyohaMerchantReview = EnterpriseAccNo.get('EnterpriseAccNo');
    AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore();

    Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Logo').setHtml('<div style="width:80px;height:80px;background-color:white;border-radius:20px"><img src="' + EnterpriseLogoPath.get('EnterpriseLogoPath') + '" alt="Image" style="width:70px;height:70px;"></div>');
    Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Name').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;">' + EnterpriseName.get('EnterpriseName') + '</div>');

   // Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Logo').setHtml('<img src="' + EnterpriseLogoPath.get('EnterpriseLogoPath') + '" alt="Image" style="width:90px;height:90px;">');
   // Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Name').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;">' + EnterpriseName.get('EnterpriseName') + '</div>');







}




function AyohaMerchantReviewShow_FromAyohaStore() {
    AddRoutePages("AyohaMerchantReviewHide()");
    Ext.Viewport.remove(_AyohaMerchantReview);
    this.overlay = Ext.Viewport.add(AyohaMerchantReview());
    this.overlay.show();   
   // AyohaMerchantReviewAdjustHeight();
    console.log("2:" + _AyohaMerchantReview_isFirstLoad);
    isAyohaMerchantReviewOpen = 'Y';
    globalAyohaMerchantReview_AddEdit_PostReview_isSave = "N";
    var logo;
    var Name;

    if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
        globalEnterpriseAccNo_AyohaMerchantReview = globalDashboardVIAAdvertisement_EnterpriseAccNo;
        logo = globalDashboardVIAAdvertisement_EnterpriseLogoPath;
        Name = globalDashboardVIAAdvertisement_EnterpriseName;
        

    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
        globalEnterpriseAccNo_AyohaMerchantReview = globalFloatPanel_PreviewAdvertisement_EnterpriseAccNo;
        logo = globalFloatPanel_PreviewAdvertisement_EnterpriseLogoPath;
        Name = globalFloatPanel_PreviewAdvertisement_EnterpriseName;
    }
   
    if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
        globalEnterpriseAccNo_AyohaMerchantReview = globalStampCampaignEnterpriseAccNo;
        logo = globalStampCampaignEnterpriseLogo;
        Name = globalStampCampaignEnterpriseName;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
        globalEnterpriseAccNo_AyohaMerchantReview = globalFloatPanel_RewardStore_EnterpriseAccNo;
        logo = globalFloatPanel_RewardStore_EnterpriseLogoPath;
        Name = globalFloatPanel_RewardStore_EnterpriseName;
    }
   

    if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
        globalEnterpriseAccNo_AyohaMerchantReview = globalFloatPanel_FloatingAdvertisement_EnterpriseAccNo;
        logo = globalFloatPanel_FloatingAdvertisement_CompanyLogo;
        Name = globalFloatPanel_FloatingAdvertisement_CompanyName;
    }

    if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
        globalEnterpriseAccNo_AyohaMerchantReview = globalFloatPanel_AyohaNotification_Notification_EnterpriseAccNo;
        logo = globalFloatPanel_AyohaNotification_Notification_EnterpriseLogo;
        Name = globalFloatPanel_AyohaNotification_Notification_EnterpriseName;
    }



    if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanelMerchantDetailPage") {
        globalEnterpriseAccNo_AyohaMerchantReview = globalFloatPanelMerchantDetailPage_EnterpriseAccNo;
        logo = globalFloatPanelMerchantDetailPage_EnterpriseLogo;
        Name = globalFloatPanelMerchantDetailPage_EnterpriseName;
    }
alert('dfd')
    Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Logo').setHtml('<div style="width:80px;height:80px;background-color:white;border-radius:20px"><img src="' + logo + '" alt="Image" style="width:70px;height:70px;"></div>');
    Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Name').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;">' + Name + '</div>');

   // Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Logo').setHtml('<img src="' + logo + '" alt="Image" style="width:90px;height:90px;">');
   // Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Name').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;">' + Name + '</div>');
    AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore();






}







function AyohaMerchantReviewAdjustHeight() {
    // var y = parseInt(screen.height);
    // var x = parseInt(window.innerHeight);


    // var newHeights = x - 270;
    // console.log(newHeights);
    // // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;

    // Ext.getCmp('AyohaMerchantReviewID').setHeight(x + 20);
    // Ext.getCmp('AyohaMerchantReviewListID').setHeight(newHeights);
    // AyohaMerchantReview_initializedTapEvent();

    //542
 

}



function AyohaMerchantReviewHide() {
    if (isAyohaMerchantReviewOpen == "Y") {

        RemovePages("AyohaMerchantReviewHide()");
        _AyohaMerchantReview.hide(); isAyohaMerchantReviewOpen = 'N'; _AyohaMerchantReview_isFirstLoad = "N";
       
    }
 
}



function AyohaMerchantReview_AddEditReview() {
    if(isFloatPanel_MembershipCardList_NotYetSubscribedOpen=='Y'){

        swalFireCannotReviewDueToNotMember();
        return
    }
    if( MembershipTag == 'NO'){
        swalFireCannotReviewDueToNotMember();
        return
    }
              globalAyohaMerchantReview_ItemCodeReview = 'AyohaStoreReview';
              AyohaMerchantReview_AddEditShow_Add();
    
    // var containerView = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchantReview_ReviewCompanyInfo_AddNewReviewPanel]')[0];
    // var containerViewEl = containerView.element;
    // containerViewEl.on('tap',
    //   function (event, node, options, eOpts) {

    //       //setDashBoardMerchantReviewRate();
    //   }
    // );
}




var globalAyohaMerchantReview_ItemCodeReview;
var defaultlistHeight=180;
var increaseListHeight=0;
function AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore() {


    var store = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoStore;
          
    store.getProxy().setExtraParam('EnterpriseAccNo', globalEnterpriseAccNo_AyohaMerchantReview);
    store.getProxy().setExtraParam('ItemCodeReview', 'AyohaStoreReview');
    store.getProxy().setUrl(GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewLoadByEnterpriseAccNo');
  
    store.load({
      callback: function(records, op, success){
  
        if(success){

            var list = Ext.getCmp('AyohaMerchantReviewListID');

            // bila list siap render items
            list.on('refresh', AyohaReviewList_AutoFitHeight, null, { single:true });
            list.refresh && list.refresh();
      
            // ✅ kalau gambar lambat load (ubah height item), fit semula
            Ext.defer(function(){
              if(!list || !list.element) return;
              var imgs = list.element.dom.querySelectorAll('img');
              for (var i=0;i<imgs.length;i++){
                if(!imgs[i].complete){
                  imgs[i].onload = imgs[i].onerror = AyohaReviewList_AutoFitHeight;
                }
              }
            }, 500);





         
        
          AyohaMerchantReview_AyohaMerchantReview_CalculateRating();
        }
  
        LoadingPanelHide();
      }
    });







    return
increaseListHeight=0;
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', globalEnterpriseAccNo_AyohaMerchantReview);
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoStore.getProxy().setExtraParam('ItemCodeReview', 'AyohaStoreReview');
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewLoadByEnterpriseAccNo');
    
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                increaseListHeight=(defaultlistHeight * records.length)-170;
                Ext.getCmp('containerAyohaMerchantReviewMainContentID').setHeight(increaseListHeight);
               // alert('Store loaded successfully, total records: ' + records.length);
    
                AyohaMerchantReview_AyohaMerchantReview_CalculateRating();
                LoadingPanelHide();
            } else {
               // alert('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });




    


}


function AyohaReviewList_AutoFitHeight(){
    var list = Ext.getCmp('AyohaMerchantReviewListID');
    if(!list || !list.element) return;
  
    Ext.defer(function(){
      // ✅ cari inner list element (ikut ST/Ext version)
      var inner =
        list.element.down('.x-list-inner') ||
        list.element.down('.x-list-container') ||
        list.element;
  
      var h = inner && inner.dom ? inner.dom.scrollHeight : 0;
  
      // fallback: sum each item height
      if(!h){
        var items = list.element.dom.querySelectorAll('.x-list-item, .x-list-header-wrap');
        h = 0;
        for (var i=0;i<items.length;i++) h += (items[i].offsetHeight || 0);
      }
  
      list.setHeight(h + 100); // ✅ buffer sikit
      list.updateLayout && list.updateLayout();
  
      var sc = Ext.getCmp('Scrollable_containerAyohaMerchantReviewMainContentID');
      if(sc && sc.getScrollable && sc.getScrollable()){
        sc.getScrollable().getScroller().refresh();
      }
    }, 500);
  }
  



        
          

          function AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore_FixForCheckInPage(accNo){

            var store = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoStore;
          
            store.getProxy().setExtraParam('EnterpriseAccNo', accNo);
            store.getProxy().setExtraParam('ItemCodeReview', 'AyohaStoreReview');
            store.getProxy().setUrl(GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewLoadByEnterpriseAccNo');
          
            store.load({
              callback: function(records, op, success){
          
                if(success){

                    var list = Ext.getCmp('AyohaMerchantReviewListID');

                    // bila list siap render items
                    list.on('refresh', AyohaReviewList_AutoFitHeight, null, { single:true });
                    list.refresh && list.refresh();
              
                    // ✅ kalau gambar lambat load (ubah height item), fit semula
                    Ext.defer(function(){
                      if(!list || !list.element) return;
                      var imgs = list.element.dom.querySelectorAll('img');
                      for (var i=0;i<imgs.length;i++){
                        if(!imgs[i].complete){
                          imgs[i].onload = imgs[i].onerror = AyohaReviewList_AutoFitHeight;
                        }
                      }
                    }, 500);





                 
                
                  AyohaMerchantReview_AyohaMerchantReview_CalculateRating();
                }
          
                LoadingPanelHide();
              }
            });
          }
          
          
          function FitReviewListHeight(){
            var list = Ext.getCmp('AyohaMerchantReviewListID');
            if (!list || !list.element) return;
          
            Ext.defer(function () {
          
              // ✅ include item + header wrap
              var nodes = list.element.dom.querySelectorAll('.x-list-item, .x-list-header-wrap');
              var h = 0;
          
              for (var i = 0; i < nodes.length; i++) {
                h += (nodes[i].offsetHeight || 0);
              }
          
              // fallback kalau masih 0 (kadang DOM belum settle)
              if (!h) {
                h = list.element.dom.scrollHeight || 0;
              }
          alert(h)
              list.setHeight(h);
          
              var sc = Ext.getCmp('Scrollable_containerAyohaMerchantReviewMainContentID');
              if (sc && sc.getScrollable && sc.getScrollable()) {
                sc.getScrollable().getScroller().refresh();
              }
             
            }, 50);
          }
          
          







var FiveStar;
var FourStar;
var ThreeStar;
var TwoStar;
var OneStar;
var TotalStar;
var TotalVoter;
var VoteFiveStar;
var VoteFourStar;
var VoteThreeStar;
var VoteTwoStar;
var VoteOneStar;
var globalAyohaMerchantReview_Star;
function AyohaMerchantReview_AyohaMerchantReview_CalculateRating() {
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Calculate Rating....' });

    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "EnterpriseAccNo": globalEnterpriseAccNo_AyohaMerchantReview
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewCalculateRating',

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
                        FiveStar = data.results[0].FiveStar;
                        FourStar = data.results[0].FourStar;
                        ThreeStar = data.results[0].ThreeStar;
                        TwoStar = data.results[0].TwoStar;
                        OneStar = data.results[0].OneStar;
                        TotalStar = data.results[0].TotalStar;
                        TotalVoter = data.results[0].TotalVoter;
                        VoteFiveStar = data.results[0].VoteFiveStar;
                        VoteFourStar = data.results[0].VoteFourStar;
                        VoteThreeStar = data.results[0].VoteThreeStar;
                        VoteTwoStar = data.results[0].VoteTwoStar;
                        VoteOneStar = data.results[0].VoteOneStar;


                        var TotalAvg = (VoteFiveStar + VoteFourStar + VoteThreeStar + VoteTwoStar + VoteOneStar) / TotalVoter;
                        //width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-weight:900;font-size:16px;color:#111827;
                        if (TotalAvg) {
                            Ext.getCmp('htmlAyohaMerchantReview_Rate').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 40px;font-weight:bold;color:black;">' + TotalAvg.toFixed(1) + '</div>');

                        } else
                        {
                            Ext.getCmp('htmlAyohaMerchantReview_Rate').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 40px;font-weight:bold;color:black;">0.0</div>');

                        }
                       

                        Ext.getCmp('htmlAyohaMerchantReview_TotalReviews').setHtml('<div style="width100%;text-align:center;background-color: transparent;font-family:Century Gothic;;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalVoter + ' Reviews</div>');

                        var RateReviews = TotalAvg.toFixed(1);

                        globalAyohaMerchantReview_Star = TotalAvg.toFixed(1);
                       

                        if (RateReviews == 5) {
                           
                            Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');


                        }
                        if ((RateReviews >= 4) && (RateReviews < 5)) {
                            Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');


                            if ((RateReviews >= 4.2) && (RateReviews <= 4.4)) {

                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');

                            }
                            if (RateReviews == 4.5) {
                               
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if ((RateReviews >= 4.6) && (RateReviews <= 4.8)) {
                               
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if (RateReviews == 4.9) {                               
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
                            }



                        }
                        if ((RateReviews >= 3) && (RateReviews < 4)) {
                            
                            Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');





                            if ((RateReviews >= 3.2) && (RateReviews <= 3.4)) {
                               
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');

                            }
                            if (RateReviews == 3.5) {
                              
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');





                            }
                            if ((RateReviews >= 3.6) && (RateReviews <= 3.8)) {
                               
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if (RateReviews == 3.9) {                               
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }



                        }
                        if ((RateReviews >= 2) && (RateReviews < 3)) {
                          

                            Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');


                            if ((RateReviews >= 2.2) && (RateReviews <= 2.4)) {
                               
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if (RateReviews == 2.5) {
                              
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if ((RateReviews >= 2.6) && (RateReviews <= 2.8)) {                               
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if (RateReviews == 2.9) {                               
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');

                            }





                        }
                        if ((RateReviews >= 1) && (RateReviews < 2)) {
                          
                            Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');

                            if ((RateReviews >= 1.2) && (RateReviews <= 1.4)) {
                               

                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');


                            }
                            if (RateReviews == 1.5) {
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');

                            }
                            if ((RateReviews >= 1.6) && (RateReviews <= 1.8)) {
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if (RateReviews == 1.9) {
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }

                        }
                        if ((RateReviews >= 0) && (RateReviews < 1)) {
                          
                            Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');


                        }













                      












                        var task = Ext.create('Ext.util.DelayedTask', function () {

                            setDashBoardMerchantReviewRate();
                        });

                        task.delay(100);





                       // globalAyohaMerchantReviewRating = Math.round(TotalAvg);
                       // globalAyohaMerchantReviewRating = TotalAvg.toFixed(1);
                      


                       // console.log(globalAyohaMerchantReviewRating);
                       // --20 + 8 + 9 + 2 + 1 / 11
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
    task.delay(100);

  
}





const valueLabels = {
    id: 'valueLabels',
    afterDatasetsDraw(chart) {
      const { ctx } = chart;
      const ds = chart.data.datasets[0];
      const meta = chart.getDatasetMeta(0);
  
      ctx.save();
      ctx.font = 'bold 10px system-ui, -apple-system, Segoe UI, Roboto, Arial';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#000';
  
      meta.data.forEach((bar, i) => {
        const v = ds.data[i];
        if (!v) return;                 // skip zeros/nulls
        const { x, y } = bar.tooltipPosition();
        ctx.fillText(String(v), x - 6, y);
      });
      ctx.restore();
    }
  };
  
  function setDashBoardMerchantReviewRate() {
    const labels = ['5', '4', '3', '2', '1'];
  const values = [FiveStar, FourStar, ThreeStar, TwoStar, OneStar];

  const el = document.getElementById('barchartAyohaMerchanReview');
  const ctx = el.getContext('2d');

  // Destroy previous instance if re-drawing
  if (window.ayohaReviewChart) {
    window.ayohaReviewChart.destroy();
  }

  window.ayohaReviewChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: 'orange',
        borderWidth: 0,
        borderRadius: 8,
        barPercentage: 0.95,
        categoryPercentage: 0.8
      }]
    },
    options: {
      responsive: false,             // respect 320x185
      maintainAspectRatio: false,
      indexAxis: 'y',                // horizontal bars
      animation: {
        duration: 1200,
        easing: 'easeOutCubic',
        delay(ctx) {
          return ctx.type === 'data' && ctx.mode === 'default'
            ? ctx.dataIndex * 120    // staggered bar animation
            : 0;
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true }
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: { display: false },
          border: { display: false },
          ticks: { display: false }   // <-- hides 0.5, 1, 1.5, 2, etc.
        },
        y: {
          type: 'category',
          offset: true,
          grid: { display: false },
          border: { display: false }
        }
      }
    },
    plugins: [valueLabels]
  });

 













    
    if (globalAyohaMerchantReview_AddEdit_PostReview_isSave === 'Y') {
      AyohaMerchantReview_UpdateEnterpriseCountStar();
    }
  }






function setDashBoardMerchantReviewRateOld() {


   // google.charts.load('current', { 'packages': ['bar'] });
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawStuff);

    function drawStuff() {

        console.log(FiveStar);



        var data = google.visualization.arrayToDataTable([
        ["Rate", "Count", { role: "style" }],
        ["5", FiveStar, "orange"],
        ["4", FourStar, "orange"],
        ["3", ThreeStar, "orange"],
        ["2", TwoStar, "color: orange"],
         ["1", OneStar, "color: orange"]
        ]);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                         {
                             calc: "stringify",
                             sourceColumn: 1,
                             type: "string",
                             role: "annotation"
                         },
                         2]);

        var options = {
            title: "",
                         width: 320,
                         height: 185,
                         bar: { groupWidth: "80%" },
                         vAxis: { minValue: 0 },
                         hAxis: {
                             textStyle: { color: 'transparent' },
                             gridlines: {
                                 color: "transparent"
                             },
                             baselineColor: '#FFFFFF'
                         },
                         vAxis: {                           
                             title: '',                          
                         },
                         animation: {
                             duration: 2500,
                             easing: 'out',
                             startup: false,
                         },
                         legend: { position: "none" }, backgroundColor: 'transparent',
          
        };
        var chart = new google.visualization.BarChart(document.getElementById("barchartAyohaMerchanReview"));
        chart.draw(view, options);



    };


    if (globalAyohaMerchantReview_AddEdit_PostReview_isSave == "Y") {
        AyohaMerchantReview_UpdateEnterpriseCountStar();
    }


}




function AyohaMerchantReview_UpdateEnterpriseCountStar() {
    var objn = {
       
        "EnterpriseAccNo": globalEnterpriseAccNo_AyohaMerchantReview,
        "CountStar": globalAyohaMerchantReview_Star,
    };

 
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/Enterprises/EnterprisesUpdateCountStar',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

               
                globalAyohaMerchantReview_AddEdit_PostReview_isSave = "N";



            }
            else {

                swalFireFail("Fail!" + result.responseText.trim());
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            swalFireFail("Fail!-->" + result.responseText.trim());
            Ext.Viewport.unmask();
        }

    });
}