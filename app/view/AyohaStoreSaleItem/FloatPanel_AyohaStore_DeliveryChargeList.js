Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_DeliveryChargeList', {

});

var _FloatPanel_AyohaStore_DeliveryChargeList;


var isFloatPanel_AyohaStore_DeliveryChargeListOpen = 'N';

var _FloatPanel_AyohaStore_DeliveryChargeList_isFirstLoad = "N";









function FloatPanel_AyohaStore_DeliveryChargeList() {

    _FloatPanel_AyohaStore_DeliveryChargeList =
     Ext.create('Ext.Panel', {
         requires: [
       'Ext.util.DelayedTask',
         ],
         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'FloatPanel_AyohaStore_DeliveryChargeListID',
         draggable: false,
         zIndex: 380,


         centered: true,
         //bottom: 64,
         // zIndex: 100,
         modal: false,
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
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         // style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'background-color:white;',
         // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',

         //listeners: {
         //    initialize: function (c) {
         //        this.element.on({
         //            swipe: function (e, node, options) {
         //                //if (e.direction == "up") {
         //                //    FloatPanel_AyohaStore_DeliveryChargeListHide();
         //                //}
         //                if (e.direction == "left") {
         //                    FloatPanel_AyohaStore_DeliveryChargeList_CartShow();

         //                }
         //            }
         //        });
         //    }
         //},


         items: [

   {

       xtype: 'container',
       width: '100%',
       // width: 40,
       //zIndex:-10,
       //  title: '<font size="3" color="white">Live Tracking Map</font>',
       //hidden: true,
       docked: 'top',
       id: 'containerFloatPanel_AyohaStore_DeliveryChargeListHeader1',
       // style: "background-color: transparent;",
       //style: {
       //    // background: '#D25959',
       //    background: 'transparent',
       //    // border: '2px'
       //},
       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
       style: 'background-color:transparent',
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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
                      id: 'btnFloatPanel_AyohaStore_DeliveryChargeListBack',
                      height: 30,
                      width: 35,
                      margin: '0 0 0 0',
                      // iconCls: 'list',
                      html: '<div ><img src="resources/icons/backblack.png" width="25" height="20" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {
                          _FloatPanel_AyohaStore_DeliveryChargeList.hide(Ext.fx.Animation({
                              type: 'slideOut',
                              direction: 'left',
                              easing: 'cubic-bezier(.7,0,.7,1)',
                              duration: 250

                          }));
                          isFloatPanel_AyohaStore_DeliveryChargeListOpen = 'N';
                          _FloatPanel_AyohaStore_DeliveryChargeList_isFirstLoad = "N";
                          RemovePages("FloatPanel_AyohaStore_DeliveryChargeListHide()");
                      }
                  },

                             {
                                 xtype: 'spacer',

                             },

                            {
                                margin: '-10 -2 0 0',
                                id: 'htmlFloatPanel_AyohaStore_DeliveryChargeList_TitleTxt',
                                html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Delivery Charge List</div>',

                                //  html: '<div style="margin:-3px 0px 0px 0px;font-size:12px;color:white;font-weight:bold;">Product List</div>'
                                // html: '<font size=2 color=white><b>Product List</b></font>'
                            },


                                       //{
                                       //    xtype: 'button',
                                       //    id: 'btnFloatPanel_AyohaStore_DeliveryChargeListIcon',
                                       //    height: 30,
                                       //    margin: '-5 0 0 0',
                                       //    width: 35,
                                       //    // iconCls: 'list',
                                       //    html: '<div ><img src="resources/icons/deliverypurple01.png" width="25" height="20" alt="Company Name"></div>',
                                       //    ui: 'plain',
                                       //    handler: function () {
                                       //        isFloatPanel_AyohaStore_DeliveryChargeListOpen = 'N';
                                       //        _FloatPanel_AyohaStore_DeliveryChargeList.hide(Ext.fx.Animation({
                                       //            type: 'slideOut',
                                       //            direction: 'right',
                                       //            easing: 'cubic-bezier(.7,0,.7,1)',
                                       //            duration: 250

                                       //        }));
                                       //        RemovePages(_FloatPanel_AyohaStore_DeliveryChargeList, "isFloatPanel_AyohaStore_DeliveryChargeListOpen");

                                       //        //  RemovePages(_FloatPanel_AyohaNotification, "isFloatPanel_AyohaNotificationOpen");
                                       //        //FloatPanel_AyohaNotification_AddCardHide();
                                       //    }
                                       //},







              ]

   },
                     {


                         xtype: 'list',
                         // height: '64%',
                         // height: '100%',
                         // height: 200,
                         //   flex: 2,
                         store: _DataStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore,
                         id: 'FloatPanel_AyohaStore_DeliveryChargeList_List',
                         mode: 'SINGLE',
                         disableSelection: true,
                         style: 'background-color:rgba(255, 255, 255, 10);border-radius: 0px 0px 0px 0px;',
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
                         grouped: true,
                         //itemTpl: '<div class="myContent" style="background-color:white;width:108%;height:148px;">' +
                         //                                                 ///ori  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStore_DeliveryChargeList_SaleItem_Detail({ID});" src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;max-width:200px;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:5px 0px 0px 0px;" onclick="FloatPanel_AyohaStore_DeliveryChargeList_SaleItem_Detail({ID});">{ItemName}</div><br><div onclick="FloatPanel_AyohaStore_DeliveryChargeList_SaleItem_Detail({ID});" style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;">RM{ItemPrice}</div><br> <div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="0.05 Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*0.05 Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;height:45px" onclick="FloatPanel_AyohaStore_DeliveryChargeList_DetailsShow({ID});">{ItemDescriptions}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;" onclick="FloatPanel_AyohaStore_DeliveryChargeList_DetailsShow({ID});"><input type="number" value="1" style="border-radius: 5px;border: 1px solid purple;padding: 2px; width: 40px;height: 27px;font-family:Arial, sans-serif;font-size:15px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_RewardStore_OpenStore()" class="buttonAddToCart" style="margin:0px 0px 0px 2px;">Add to Cart<img src="resources/icons/myCart03.png" alt="Image" style="width:13px;height:13px;margin:0px 0px 0px 0px;"></button></div></th></tr></thead></table>'
                         //                                                     '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStore_DeliveryChargeList_SaleItem_Detail({ID});" src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;max-width:200px;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:break-all;margin:5px 0px 0px 0px;height:auto;" onclick="FloatPanel_AyohaStore_DeliveryChargeList_SaleItem_Detail({ID});">{ItemName}xx</div><br><div onclick="FloatPanel_AyohaStore_DeliveryChargeList_SaleItem_Detail({ID});" style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;">RM{ItemPrice}</div><br>{Pointlabel}<br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-15px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_DeliveryChargeList_DetailsShow({ID});">{ItemDescriptions}ldksfdskfklskdfjksjdfksdkfkdsfkldsfkdsfkdskfsdfkdsfkldsfksdjkfsfgdgjkdfgfdkfdjgfdjkfdkjghjgfhdhgfdjghfjdhgjfdhgfdjghfdjghfjghfdjhgfjghdjfghdfjghfj</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;"><input type="number" id="input-FloatPanel_AyohaStore_DeliveryChargeList_Qty{ID}" value="1" style="border-radius: 5px;border: 1px solid purple;padding: 2px; width: 40px;height: 27px;font-family:Arial, sans-serif;font-size:15px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_AyohaStore_DeliveryChargeList_AddToCart({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{CampaignType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ')" class="buttonAddToCart" style="margin:0px 0px 0px 2px;">Add to Cart<img src="resources/icons/myCart03.png" alt="Image" style="width:13px;height:13px;margin:0px 0px 0px 0px;"></button></div></th></tr></thead></table>'
                         //                                                   + '</div>',

                         itemTpl: '<div class="myContent" style="background-color:white;width:108%;height:138px;">' +

                                                                                                            //'<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')" src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break: break-all;margin:5px 0px 0px 0px;height:auto;width:100%;" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')">{ItemName}</div><br><div onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')"  style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;">RM{ItemPrice}</div><br>{Pointlabel}<br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-15px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemDescriptions}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ')">{ModifiedItemDescriptions}</div></th></tr></thead></table>'
                                                                                                           /// '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:188px;"><thead><tr><th style="background-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:100%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:10px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')"><u>Delivery Name</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')">{DeliveryName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-10px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')"><u>Location</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')">{Locations}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-10px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ')"><u>Charge Type:<b>{ChargeTypes}</b></u></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-37px 0px 0px 0px;" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')">{DeliveryRate_Charge}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-7px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')"><u>Show Delivery Charge?(Y=Yes,N=No)</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;" onclick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ')">{IsEnableDeliveryChargeSetting}</div></th></tr></thead></table>'
                                                                                                            '<table onClick="FloatPanel_AyohaStore_DeliveryChargeList_List(' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'{ChargeTypeCode}'" + ');" style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:148px;"><thead><tr><th style="background-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:100%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:10px 0px 0px 0px;height:35px" ><u>Delivery Name</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;">{DeliveryName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-10px 0px 0px 0px;height:35px" ><u>Location</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;">{Locations}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-10px 0px 0px 0px;height:35px" ><u>Charge Type:<b>{ChargeTypes}</b></u></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-37px 0px 0px 0px;">{DeliveryRate_Charge}</div></th></tr></thead></table>'

            + '</div>',

                                                       //  + '<div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:-28px 0px 0px 0px;width:100%;text-align:right;color:#c800ffc9;height:22px;"><button OnClick="FloatPanel_DialogBoxShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{CreatedBy}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'DeliveryChargeSetting'" + ')" class="buttonsHtmlBgTransparentListBtn" style="margin:0px -35px 0px 0px;"><img src="resources/icons/DeletePurple.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px 0px;"></button>&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button OnClick="FloatPanel_AyohaStore_DeliveryChargeEditShow({ID},' + "'" + '{ChargeSettingCode}' + "'" + ',' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{ChargeTypeCode}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{Over_Or_Equal}' + "'" + ',' + "'" + '{IsEnableDeliveryChargeSetting}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{Locations}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'" + '{FreeDeliveryConditionCode}' + "'" + ',' + "'" + '{FreeCondition}' + "'" + ')"  class="buttonsHtmlBgTransparentListBtn" style="margin:0px -25px 0px 0px;"><img src="resources/icons/editReview.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px 0px;"></button>&nbsp;&nbsp;&nbsp;</div>',

                         emptyText: '<div class="myContent">No Delivery Charge Setting</div>',
                         width: '100%',
                         height: '100%',
                         // height: '100%',

                         listeners: {


                             itemdoubletap: function (dataview, index, target, record, e, eOpts) {


                             },

                             itemsingletap: function (dataview, index, target, record, e, eOpts) {

                             }
                         }


                     },
                     {
                         xtype: 'container',
                         docked: 'bottom',
                         hidden:true,
                         width: '100%',
                         height: 40,
                         style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:2px solid #EAEEF3;',
                         layout: {
                             type: 'hbox',
                             pack: 'center',
                             align: 'center'
                         },
                         items: [
                             {
                                 xtype: 'panel',
                                 width: 5
                             },
                            {
                                xtype: 'container',
                                //  width: '100%',
                                margin: '3 0 0 0',
                                layout: {
                                    type: 'hbox',
                                    pack: 'left',
                                    align: 'left'
                                },
                                items: [
                                     {
                                         html: '<div style="margin:0px 0px 0px 0px;font-size:12px;color:black;font-weight:normal;">Record Found:</div>'
                                     },
                                    {
                                        id: 'htmlFloatPanel_AyohaStore_DeliveryChargeList_recordFound',
                                        html: '<div style="margin:-1px 0px 0px 0px;font-size:16px;color:black;font-weight:bold;">0</div>'
                                    },

                                ]
                            },


                        {
                            xtype: 'spacer',


                        },
                      {
                          id: 'htmlFloatPanel_AyohaStore_DeliveryChargeList_AddNewProduct',
                          //margin: '-27 0 0 0',
                          margin: '0 0 -4 0',
                          html: '<button OnClick=" FloatPanel_AyohaStore_DeliveryChargeShow()" class="buttonAddNewDeliveryCharge">Add New Delivery Charge</button>'



                      },


                         ]

                     },



         ]















     });
    return _FloatPanel_AyohaStore_DeliveryChargeList;



}



function FloatPanel_AyohaStore_DeliveryChargeListShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_DeliveryChargeList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_DeliveryChargeList());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_DeliveryChargeListHide()");
    isFloatPanel_AyohaStore_DeliveryChargeListOpen = 'Y';
    FloatPanel_AyohaStore_DeliveryChargeListAdjustHeight();
    FloatPanel_AyohaStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore();





    // FloatPanel_AyohaStore_DeliveryChargeList_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore("firstload");
    //FloatPanel_AyohaStore_DeliveryChargeListAdjustHeight();



}












function FloatPanel_AyohaStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore() {

    _DataStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
    _DataStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '//ChargeDeliverySetting/ChargeDeliverySettingLoadByEnterpriseAccNo');
    _DataStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore.load();


    // 
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var Count = _DataStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryChargeList_recordFound').setHtml('<div style="margin:-3px 0px 0px 0px;font-size:16px;color:black;font-weight:bold;">' + Count + '</div>');


        // alert(Count);


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}




function FloatPanel_AyohaStore_DeliveryChargeListHide() {
    _FloatPanel_AyohaStore_DeliveryChargeList.hide(); isFloatPanel_AyohaStore_DeliveryChargeListOpen = 'N';
    _FloatPanel_AyohaStore_DeliveryChargeList_isFirstLoad = "N";
    RemovePages("FloatPanel_AyohaStore_DeliveryChargeListHide()");
}



function FloatPanel_AyohaStore_DeliveryChargeListAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 96;
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;

    //Ext.getCmp('FloatPanel_AyohaStore_DeliveryChargeListID').setHeight(x + 20);
    //Ext.getCmp('FloatPanel_AyohaStore_DeliveryChargeList_SaleItemList').setHeight(newHeights);


}

var globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge=0.00;
var globalFloatPanel_AyohaStore_DeliveryChargeList_ChargeTypeCode;
var globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryName;
//(' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'{ChargeTypeCode}'" + ')
function FloatPanel_AyohaStore_DeliveryChargeList_List(DeliveryName, Rate, ChargeTypes, ChargeTypeCode) {
   // alert(DeliveryName);
    globalFloatPanel_AyohaStore_DeliveryChargeList_ChargeTypeCode = ChargeTypeCode;
    //document.getElementById('input-FloatPanel_AyohaStore_Cart_DeliveryChargeType').value = DeliveryName;
    document.getElementById('input-FloatPanel_AyohaStore_CheckOut_DeliveryChargeType').value = DeliveryName;
    globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryName = DeliveryName;
    globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge = 0.00;
    Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ShippingAddress_Main').setHidden(false);
    if (ChargeTypeCode == "1-FOC") {
        //swalFireSuccess("Save Successfully");
        //FloatPanel_AyohaStore_DeliveryChargeHide();
        globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge = 0.00;
    }else

    if (ChargeTypeCode == "2-FR") {
        var decimal = Rate.replace("<font size=3>", "");
        var decimalStart = decimal.slice(decimal.search(/(\d+)/));
        var decimalEnd = decimalStart.search(/[^.0-9]/);
        var ExtractedNumber = decimalStart.slice(0, decimalEnd);
        globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge = ExtractedNumber;
       // document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_FlatRate_S').value = ExtractedNumber;
    }else
    if (ChargeTypeCode == "3-WR") {
        var decimals = Rate.replace("<font size=2.5>", "");
        var ArrDecimal = decimals.split("|");


        var decimalStart0 = ArrDecimal[0].slice(ArrDecimal[0].search(/(\d+)/));
        var decimalEnd0 = decimalStart0.search(/[^.0-9]/);
        var ExtractedNumber0 = decimalStart0.slice(0, decimalEnd0);

        var decimalStart1 = ArrDecimal[1].slice(ArrDecimal[1].search(/(\d+)/));
        var decimalEnd1 = decimalStart1.search(/[^.0-9]/);
        var ExtractedNumber1 = decimalStart1.slice(0, decimalEnd1);


        var decimalStart2 = ArrDecimal[2].slice(ArrDecimal[2].search(/(\d+)/));
        var decimalEnd2 = decimalStart2.search(/[^.0-9]/);
        var ExtractedNumber2 = decimalStart2.slice(0, decimalEnd2);


        var decimalStart3 = ArrDecimal[3].slice(ArrDecimal[3].search(/(\d+)/));
        var decimalEnd3 = decimalStart3.search(/[^.0-9]/);
        var ExtractedNumber3 = decimalStart3.slice(0, decimalEnd3);

        //document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_BaseRate_S').value = ExtractedNumber0;
        //document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_BaseWeigth_S').value = ExtractedNumber1;
        //document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_ExtraChargeRate_S').value = ExtractedNumber2;
        //document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_ForEveryKGRate_S').value = ExtractedNumber3;
        globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge = ExtractedNumber0;

        // FloatPanel_AyohaStore_DeliveryCharge_ChargeDelivery_WeightRate_Save();
    }else
    if (ChargeTypeCode == "4-QB") {
        var decimalss = Rate.replace("<font size=3>", "");
        var decimalStart11 = decimalss.slice(decimalss.search(/(\d+)/));
        var decimalEnd11 = decimalStart11.search(/[^.0-9]/);
        var ExtractedNumber11 = decimalStart11.slice(0, decimalEnd11);
       // document.getElementById('input-FloatPanel_AyohaStore_DeliveryCharge_ChargePerUnit_S').value = ExtractedNumber11;
        globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge =  ExtractedNumber11;
    }else{
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ShippingAddress_Main').setHidden(true);
    }



    if(DeliveryName.includes('DINE')){
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ShippingAddress_Main').setHidden(true);
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_ShippingAddress').value ="DINE-IN";
         
    }
    FloatPanel_AyohaStore_DeliveryChargeListHide();

    // var result = parseFloat(globalFloatPanel_AyohaStore_Cart_TotalSumPrice) + parseFloat(globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge);
   
   
    // var result = (globalFloatPanel_AyohaStore_Cart_TotalSumPrice + parseFloat(globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge)) - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher);
    // globalFloatPanel_AyohaStore_Cart_GrandTotal = result.toFixed(2);
 
    FloatPanel_AyohaStore_CheckOut_SetDeliveryCharge();
    
    //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_Delivery').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge + '</div>');
    //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + result .toFixed(2)+ '</div>');


}