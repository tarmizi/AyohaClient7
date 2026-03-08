Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_DeliveryChargeList', {

});

var _FloatPanel_AyohaStore_DeliveryChargeList=null;


var isFloatPanel_AyohaStore_DeliveryChargeListOpen = 'N';

var _FloatPanel_AyohaStore_DeliveryChargeList_isFirstLoad = "N";



function FloatPanel_AyohaStore_DeliveryChargeListCreateIfNeeded() {
    if (_FloatPanel_AyohaStore_DeliveryChargeList && !_FloatPanel_AyohaStore_DeliveryChargeList.destroyed) return;
    _FloatPanel_AyohaStore_DeliveryChargeList =
     Ext.create('Ext.Container', {
       
 id: 'FloatPanel_AyohaStore_DeliveryChargeListID',
  floated: true,
        centered: true,
        fullscreen: true,
        closeAction: 'hide',
      // closeAction: 'destroy',
        draggable: false,
        modal: false,
        styleHtmlContent: true,
        layout: 'fit',





        //  xtype: 'container',
        //  //height: 465,
        //  height: '100%',
        //  width: '100%',
        
        //  draggable: false,
        //  zIndex: 380,


        //  centered: true,
        //  //bottom: 64,
        //  // zIndex: 100,
        //  modal: false,
        //  // hideOnMaskTap: true,
        //  layout: {
        //      type: 'fit'
        //  },
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
      height: ayoha_HeaderHeight(),
       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
       style: ayohaThemeColor_Header(),
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
                                                xtype: 'spacer',
                                                width:10

                                            },




                  {
                      xtype: 'button',
                      id: 'btnFloatPanel_AyohaStore_DeliveryChargeListBack',
                      height: 30,
                      width: 65,
                      margin: '0 0 0 0',
                      // iconCls: 'list',
                      html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {
                        FloatPanel_AyohaStore_DeliveryChargeListHide(false);
                      
                      }
                  },

                             {
                                 xtype: 'spacer',

                             },

                            {
                             //   margin: '-10 -2 0 0',
                                id: 'htmlFloatPanel_AyohaStore_DeliveryChargeList_TitleTxt',
                                html: ayohaTheme_HeaderText('Delivery Charge List'),

                                //  html: '<div style="margin:-3px 0px 0px 0px;font-size:12px;color:white;font-weight:bold;">Product List</div>'
                                // html: '<font size=2 color=white><b>Product List</b></font>'
                            },


  {
                                                            xtype: 'spacer',
                                                            width:15
  
                                                        },





              ]

   },
                     {


                         xtype: 'list',
                        
                         store: _DataStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore,
                         id: 'FloatPanel_AyohaStore_DeliveryChargeList_List',
                         mode: 'SINGLE',
                         disableSelection: true,
                       style: 'background:#fff;',
cls: 'ayohaDeliveryList',
itemCls: 'ayohaDeliveryListItem',
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
                       



                         itemTpl:
    '<div onclick="FloatPanel_AyohaStore_DeliveryChargeList_List(' +
        "'" + '{DeliveryName}' + "'" + ',' +
        "'" + '{DeliveryRate_Charge}' + "'" + ',' +
        "'" + '{ChargeTypes}' + "'" + ',' +
        "'" + '{ChargeTypeCode}' + "'" + ');" ' +
    'style="width:100%;box-sizing:border-box;background:#fff;padding:14px 14px 12px 14px;border-bottom:1px solid #f0f2f5;cursor:pointer;">' +

        '<div style="font-family:Arial,sans-serif;font-size:10px;font-weight:700;color:#7a7a7a;text-transform:uppercase;letter-spacing:.3px;">Delivery Name</div>' +
        '<div style="font-family:Arial,sans-serif;font-size:16px;font-weight:700;color:#111;line-height:1.3;margin:4px 0 10px 0;word-break:break-word;">{DeliveryName}</div>' +

        '<div style="font-family:Arial,sans-serif;font-size:10px;font-weight:700;color:#7a7a7a;text-transform:uppercase;letter-spacing:.3px;">Location</div>' +
        '<div style="font-family:Arial,sans-serif;font-size:15px;font-weight:700;color:#111;line-height:1.3;margin:4px 0 10px 0;word-break:break-word;">{Locations}</div>' +

        '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-top:4px;">' +
            '<div style="flex:1;min-width:0;">' +
                '<div style="font-family:Arial,sans-serif;font-size:10px;font-weight:700;color:#7a7a7a;text-transform:uppercase;letter-spacing:.3px;">Charge Type</div>' +
                '<div style="font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#6a00ff;line-height:1.3;margin-top:4px;word-break:break-word;">{ChargeTypes}</div>' +
            '</div>' +

            '<div style="text-align:right;min-width:90px;">' +
                '<div style="font-family:Arial,sans-serif;font-size:10px;font-weight:700;color:#7a7a7a;text-transform:uppercase;letter-spacing:.3px;">Charge</div>' +
                '<div style="font-family:Arial,sans-serif;font-size:15px;font-weight:800;color:#111;line-height:1.3;margin-top:4px;">{DeliveryRate_Charge}</div>' +
            '</div>' +
        '</div>' +

    '</div>',
            //              itemTpl: '<div class="myContent" style="background-color:white;width:108%;height:138px;">' +

                                                                                                   
            //                                                                                                 '<table onClick="FloatPanel_AyohaStore_DeliveryChargeList_List(' + "'" + '{DeliveryName}' + "'" + ',' + "'" + '{DeliveryRate_Charge}' + "'" + ',' + "'" + '{ChargeTypes}' + "'" + ',' + "'{ChargeTypeCode}'" + ');" style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:148px;"><thead><tr><th style="background-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:100%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:10px 0px 0px 0px;height:35px" ><u>Delivery Name</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;">{DeliveryName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-10px 0px 0px 0px;height:35px" ><u>Location</u></div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:break-all;margin:-37px 0px 0px 0px;">{Locations}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:break-all;margin:-10px 0px 0px 0px;height:35px" ><u>Charge Type:<b>{ChargeTypes}</b></u></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-37px 0px 0px 0px;">{DeliveryRate_Charge}</div></th></tr></thead></table>'

            // + '</div>',

                   

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
                   



         ]















     });

}





function FloatPanel_AyohaStore_DeliveryChargeListShow() {

    // Ext.Viewport.remove(_FloatPanel_AyohaStore_DeliveryChargeList);
    // this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_DeliveryChargeList());
    // this.overlay.show();
    // AddRoutePages("FloatPanel_AyohaStore_DeliveryChargeListHide()");





FloatPanel_AyohaStore_DeliveryChargeListCreateIfNeeded();



_FloatPanel_AyohaStore_DeliveryChargeList.show();

// ✅ push browser back (ikut style kau)
if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
  AyohaBrowserBack.push('FloatPanel_AyohaStore_DeliveryChargeList', function () {
 
    FloatPanel_AyohaStore_DeliveryChargeListHide(true);
  });
}









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
       // Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryChargeList_recordFound').setHtml('<div style="margin:-3px 0px 0px 0px;font-size:16px;color:black;font-weight:bold;">' + Count + '</div>');


        // alert(Count);


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}




function FloatPanel_AyohaStore_DeliveryChargeListHide(animCfg, fromBack) {
    // _FloatPanel_AyohaStore_DeliveryChargeList.hide(); isFloatPanel_AyohaStore_DeliveryChargeListOpen = 'N';
    // _FloatPanel_AyohaStore_DeliveryChargeList_isFirstLoad = "N";
    // RemovePages("FloatPanel_AyohaStore_DeliveryChargeListHide()");




    
    if (isFloatPanel_AyohaStore_DeliveryChargeListOpen == 'Y') {
       
      

        if (animCfg) {
            _FloatPanel_AyohaStore_DeliveryChargeList.hide(Ext.fx.Animation(animCfg));
          } else {
            _FloatPanel_AyohaStore_DeliveryChargeList.hide();
          }
         
          isFloatPanel_AyohaStore_DeliveryChargeListOpen = 'N';
          _FloatPanel_AyohaStore_DeliveryChargeList_isFirstLoad = "N";
        // FloatPanel_AyohaStore_DeliveryChargeList_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo_isUsed = 'N';
          //  FloatPanel_MerchantDetailPageHide();
          //  Dashboard_SearchMerchantListHide();
          // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
          if (fromBack !== true) {
            AyohaBrowserBack.close('FloatPanel_AyohaStore_DeliveryChargeList');
          }
    }







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
    FloatPanel_AyohaStore_DeliveryChargeListHide(false);

    // var result = parseFloat(globalFloatPanel_AyohaStore_Cart_TotalSumPrice) + parseFloat(globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge);
   
   
    // var result = (globalFloatPanel_AyohaStore_Cart_TotalSumPrice + parseFloat(globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge)) - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher);
    // globalFloatPanel_AyohaStore_Cart_GrandTotal = result.toFixed(2);
 
    FloatPanel_AyohaStore_CheckOut_SetDeliveryCharge();
    FloatPanel_AyohaStore_CheckOutSetHeightOrderList();
    //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_Delivery').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge + '</div>');
    //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + result .toFixed(2)+ '</div>');


}