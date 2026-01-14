Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_ItemCategory', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_AyohaStore_ItemCategory;


var isFloatPanel_AyohaStore_ItemCategoryOpen = 'N';





function FloatPanel_AyohaStore_ItemCategory() {

    _FloatPanel_AyohaStore_ItemCategory =
     Ext.create('Ext.Panel', {
         zIndex: 350,
         xtype: 'container',
         // height: '50%',
         width: '85%',
         height: 400,
         //width: 280,
         id: 'LoadingFloatPanel_AyohaStore_ItemCategoryID',
         name: 'nameFloatPanel_AyohaStore_ItemCategoryID',
         draggable: false,
         requires: [
      'Ext.util.DelayedTask'
         ],


         centered: true,
         //bottom: 64,         
         modal: true,
        // hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 150,
             easing: 'ease-out'
         },
         hideAnimation: {
             //type: 'slideOut',
             //direction: 'down',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250

             type: 'popOut',
             duration: 150,
             easing: 'ease-out'
         },
        
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px none;background-color:white;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',

        

         

         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaStore_ItemCategory.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaStore_ItemCategoryOpen = 'N';
                             RemovePages("FloatPanel_AyohaStore_ItemCategoryHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaStore_ItemCategory.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaStore_ItemCategoryOpen = 'N';
                             RemovePages("FloatPanel_AyohaStore_ItemCategoryHide()");
                         }
                         
                     },

                   

                 }



                 );
                
             },
             
          
             
         },
        

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,

             height: '100%',
             width: '100%',
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             style: 'border-bottom:0px solid;background-color:transparent;',

             // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'

             },

             items: [








            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_AyohaStore_ItemCategoryBorderBg',
                docked: 'top',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: '100%',
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'left'
                },
                items: [

                         {

                             xtype: 'container',
                             width: '100%',
                             docked: 'top',
                             // width: 40,
                             style: ' background-color:transparent;',
                             //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                             //  title: '<font size="3" color="white">Live Tracking Map</font>',
                             //hidden: true,

                             id: 'containerFloatPanel_AyohaStore_ItemCategoryHeader',
                             //style: {
                             //    // background: '#D25959',
                             //    background: 'transparent',
                             //    // border: '2px'
                             //},
                             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                             // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                             layout: {
                                 type: 'hbox',
                                 pack: 'left',
                                 align: 'left',
                             },
                             // hidden:true,
                             items:
                                    [


                                                  {
                                                      xtype: 'button',
                                                      id: 'btnFloatPanel_AyohaStore_ItemCategoryBack',
                                                      height: 30,
                                                      width: 35,
                                                      // iconCls: 'list',
                                                      html: '<div ><img src="resources/icons/backblack02.png" width="25" height="20" alt="Company Name"></div>',
                                                      ui: 'plain',
                                                      handler: function () {

                                                          _FloatPanel_AyohaStore_ItemCategory.hide(Ext.fx.Animation({
                                                              type: 'slideOut',
                                                              direction: 'left',
                                                              easing: 'cubic-bezier(.7,0,.7,1)',
                                                              duration: 250

                                                          }));
                                                          isFloatPanel_AyohaStore_ItemCategoryOpen = 'N';
                                                          RemovePages("FloatPanel_AyohaStore_ItemCategoryHide()");

                                                      }
                                                  },

                                                  {
                                                      xtype: 'spacer'
                                                  },


                                                   {
                                                       margin: '0 0 0 0',
                                                       id: 'htmlFloatPanel_AyohaStore_ItemCategory_TitleHeaderTxt',
                                                     //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Filter Product Category</div>',

                                                       //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                                   },

                                            //{
                                            //    xtype: 'button',

                                            //    //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                            //    height: 40,
                                            //    width: 40,
                                            //    // iconCls: 'list',
                                            //    id: 'btnFloatPanel_AyohaStore_ItemCategory_PicProfile',
                                            //    html: '<div ><img src="resources/icons/likeOn.png" width="30" height="30" alt="Company Name"></div>',
                                            //    ui: 'plain',
                                            //    handler: function () {
                                            //        _FloatPanel_AyohaStore_ItemCategory.hide(Ext.fx.Animation({
                                            //            type: 'slideOut',
                                            //            direction: 'right',
                                            //            easing: 'cubic-bezier(.7,0,.7,1)',
                                            //            duration: 250

                                            //        }));

                                            //        isFloatPanel_AyohaStore_ItemCategoryOpen = "N";
                                            //        RemovePages(_FloatPanel_AyohaStore_ItemCategory, "isFloatPanel_AyohaStore_ItemCategoryOpen");
                                            //    }
                                            //},












                                    ]

                         },


                   {
                       xtype: 'list',
                       width: '100%',
                       height: '100%',
                       // height: '98%',
                       // flex: 1,
                       store: _DataStore_AyohaStoreSaleItemloadItemCategoryStore,
                       id: 'FloatPanel_AyohaStore_ItemCategoryListID',
                       mode: 'SINGLE',
                       // width: '100%',
                       disableSelection: true,
                       itemTpl: '<div class="myContent" style="background-color:white;width:104%">' +


                         ///ori'<table style="border-collapse:collapse;border-spacing:0;width:107%;background-color:white;margin:-10px 0px 0px -17px;height:40px;"><tr onclick="FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore(' + "'" + '{ItemCategoryCode}' + "'" + ')"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:1%;vertical-align:center"><div style="border:1px solid white; width:1px;height:40px;background-color:transparent;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:99%;vertical-align:center">{ItemCategoryCode} ({CountItemCategory} - Items)</td></tr></table>' +

                         '<table onclick="FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore(' + "'" + '{ItemCategoryCode}' + "'" + ');" style="border-collapse:collapse;border-spacing:0;width:107%;background-color:white;margin:-10px 0px 0px -17px;height:40px;"><tr><td onclick="FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore(' + "'" + '{ItemCategoryCode}' + "'" + ');" style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:1%;vertical-align:center"><div onclick="FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore(' + "'" + '{ItemCategoryCode}' + "'" + ');" style="border:1px solid white; width:1px;height:40px;background-color:transparent;" /></td><td onclick="FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore(' + "'" + '{ItemCategoryCode}' + "'" + ');" style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:99%;vertical-align:center">{ProductCategoryName} ({CountItemCategory} - Items)</td></tr></table>' +

                     '<br>' +
                           '<div onclick="FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore(' + "'" + '{ItemCategoryCode}' + "'" + ');"  style="width:104%;text-align:left;margin:-64px 0px 0px 10px;background-color:transparent;"><button  class="buttonsHtmlBgTransparent"><div style="width: 23px; height: 23px; margin:0px 0px 0px 40px;background-color:transparent" /></button></div>',





                       emptyText: '<div class="myContent">No Product Category!</div>',
                       //listeners: {
                       //    itemsingletap: function (list, idx, target, records, evt) {

                       //        var ItemCategoryCode = records.get('ItemCategoryCode');
                       //        FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore(ItemCategoryCode);
                       //       // document.getElementById("input-htmlFloatPanel_AyohaStor_ProductCategoryTxt").value = ItemCategoryCode;
                              


                       //    },
                       //    deselect: function (list, records) {

                       //    }
                       //},
                       ////listeners: {
                       ////    itemswipe: function (list, idx, target, record, evt) {
                       ////        //  To get the selection you should use getSelection() instead
                       ////        //////var selected = list.getActiveItem();
                       ////        //////alert(list.getActiveItem());
                       ////        //////if (!selected) { return; }

                       ////        //////var selectedIndex = selected[0];
                       ////        //////alert([selectedIndex, idx]);
                       ////        //Ext.Msg.alert('itemswipe', idx);


                       ////    } // itemswipe
                       ////}

                   },


  {

      xtype: 'container',
      width: '100%',
      docked: 'bottom',
      height: 30,
      // width: 40,
      style: ' background-color:transparent;',
      //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
      //  title: '<font size="3" color="white">Live Tracking Map</font>',
      //hidden: true,

      id: 'containerFloatPanel_AyohaStore_ItemCategoryFooter',
      //style: {
      //    // background: '#D25959',
      //    background: 'transparent',
      //    // border: '2px'
      //},
      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
      // style: 'border-bottom:2px solid #D25959;background-color:transparent',
      layout: {
          type: 'hbox',
          pack: 'left',
          align: 'center',
      },
      // hidden:true,
      items:
             [


                           

                          {
                              xtype: 'panel',
                              width: 3
                          },

                            {
                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaStore_ItemCategory_CountLoveTxt',
                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:4px 0px 0px 0px">0</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },














             ]

  },



                ]


            },



             ]




         }







     });
    return _FloatPanel_AyohaStore_ItemCategory;





}



function FloatPanel_AyohaStore_ItemCategoryShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_ItemCategory);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_ItemCategory());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_ItemCategoryHide()");
    isFloatPanel_AyohaStore_ItemCategoryOpen = 'Y';
    FloatPanel_AyohaStore_AyohaStoreSaleItemloadItemCategory();



    //Ext.getCmp('htmlFloatPanel_AyohaStore_ItemCategory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">' + FloatPanel_AyohaStore_getEnterpriseName() + '</div>');
    //Ext.getCmp('btnFloatPanel_AyohaStore_ItemCategory_PicProfile').setHtml('<div ><img src="' + FloatPanel_AyohaStore_getEnterpriseLogo() + '" width="30" height="30" alt="Company Name"></div>');


    




}





function FloatPanel_AyohaStore_AyohaStoreSaleItemloadItemCategory() {


    _DataStore_AyohaStoreSaleItemloadItemCategoryStore.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
    _DataStore_AyohaStoreSaleItemloadItemCategoryStore.getProxy().setExtraParam('MembershipCardCode', globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode);
    _DataStore_AyohaStoreSaleItemloadItemCategoryStore.getProxy().setUrl(GetAPIurl() + '/AyohaStore_SaleItem/AyohaStoreSaleItemloadItemCategory');
    _DataStore_AyohaStoreSaleItemloadItemCategoryStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = _DataStore_AyohaStoreSaleItemloadItemCategoryStore.getCount();
       Ext.getCmp('htmlFloatPanel_AyohaStore_ItemCategory_CountLoveTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:4px 0px 0px 0px">' + count + ' Record found</div>');


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}





function FloatPanel_AyohaStore_ItemCategoryHide() {
    if (isFloatPanel_AyohaStore_ItemCategoryOpen == 'Y') {
        _FloatPanel_AyohaStore_ItemCategory.hide(); isFloatPanel_AyohaStore_ItemCategoryOpen = 'N';
        RemovePages("FloatPanel_AyohaStore_ItemCategoryHide()");
    }
}













