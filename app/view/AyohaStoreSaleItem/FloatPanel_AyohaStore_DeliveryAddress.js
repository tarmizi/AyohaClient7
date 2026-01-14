Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_DeliveryAddress', {
    requires: [
'Ext.carousel.Carousel',
'Ext.util.DelayedTask',
'Ext.Video'
    ],
});

var _FloatPanel_AyohaStore_DeliveryAddress;


var isFloatPanel_AyohaStore_DeliveryAddressOpen = 'N';





function FloatPanel_AyohaStore_DeliveryAddress() {

    _FloatPanel_AyohaStore_DeliveryAddress =
     Ext.create('Ext.Panel', {
         zIndex: 360,
         xtype: 'container',
         // height: '50%',
         width: '95%',
         height: 490,
         //width: 280,
         id: 'LoadingFloatPanel_AyohaStore_DeliveryAddressID',
        // name: 'nameFloatPanel_AyohaStore_DeliveryAddressID',
         draggable: false,
         hideOnMaskTap: true,
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
                             _FloatPanel_AyohaStore_DeliveryAddress.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaStore_DeliveryAddressOpen = 'N';
                             RemovePages("FloatPanel_AyohaStore_DeliveryAddressHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaStore_DeliveryAddress.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaStore_DeliveryAddressOpen = 'N';
                             RemovePages("FloatPanel_AyohaStore_DeliveryAddressHide()");
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
                id: 'FloatPanel_AyohaStore_DeliveryAddressBorderBg',
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

                             id: 'containerFloatPanel_AyohaStore_DeliveryAddressHeader',
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
                                                      id: 'btnFloatPanel_AyohaStore_DeliveryAddressBack',
                                                      height: 30,
                                                      width: 35,
                                                      // iconCls: 'list',
                                                      html: '<div ><img src="resources/icons/backblack02.png" width="25" height="20" alt="Company Name"></div>',
                                                      ui: 'plain',
                                                      handler: function () {

                                                          _FloatPanel_AyohaStore_DeliveryAddress.hide(Ext.fx.Animation({
                                                              type: 'slideOut',
                                                              direction: 'left',
                                                              easing: 'cubic-bezier(.7,0,.7,1)',
                                                              duration: 250

                                                          }));
                                                          isFloatPanel_AyohaStore_DeliveryAddressOpen = 'N';
                                                          RemovePages("FloatPanel_AyohaStore_DeliveryAddressHide()");

                                                      }
                                                  },

                                                  {
                                                      xtype: 'spacer'
                                                  },


                                                   {
                                                       margin: '0 0 0 0',
                                                       id: 'htmlFloatPanel_AyohaStore_DeliveryAddress_TitleHeaderTxt',
                                                       //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                                       html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Shipping Address</div>',

                                                       //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                                   },

                                            //{
                                            //    xtype: 'button',

                                            //    //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                            //    height: 40,
                                            //    width: 40,
                                            //    // iconCls: 'list',
                                            //    id: 'btnFloatPanel_AyohaStore_DeliveryAddress_PicProfile',
                                            //    html: '<div ><img src="resources/icons/likeOn.png" width="30" height="30" alt="Company Name"></div>',
                                            //    ui: 'plain',
                                            //    handler: function () {
                                            //        _FloatPanel_AyohaStore_DeliveryAddress.hide(Ext.fx.Animation({
                                            //            type: 'slideOut',
                                            //            direction: 'right',
                                            //            easing: 'cubic-bezier(.7,0,.7,1)',
                                            //            duration: 250

                                            //        }));

                                            //        isFloatPanel_AyohaStore_DeliveryAddressOpen = "N";
                                            //        RemovePages(_FloatPanel_AyohaStore_DeliveryAddress, "isFloatPanel_AyohaStore_DeliveryAddressOpen");
                                            //    }
                                            //},












                                    ]

                         },



                         {
                             xtype: 'container',
                             width: '100%',
                             height: 520,
                             id: 'containerFloatPanel_AyohaStore_DeliveryAddress_RecentlyUsedAddressDetail',
                             layout: {
                                 type: 'vbox',
                                 pack: 'start',
                                 align: 'left',
                             }, scrollable: {
                                 // direction: 'vertical',
                                 directionLock: true,
                                 indicators: false,
                             },
                             items: [
                                 {
                                     xtype: 'container',
                                     width: '100%',
                                     margin: '0 0 0 0',
                                     height: 55,
                                     layout: {
                                         type: 'vbox',
                                         pack: 'start',
                                         align: 'left'

                                     },
                                     items: [

                                         {
                                             xtype: 'container',
                                             width: '100%',
                                             // height: 30,
                                             layout: {
                                                 type: 'vbox',
                                                 pack: 'center',
                                                 align: 'left'

                                             },
                                             items: [
                                                  {
                                                      margin: '10 0 0 10',
                                                      html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:Left;color:black;">Street Address<font size=2 color=red>*</font></div>'
                                                  },
                                                  {
                                                      id: 'htmlFloatPanel_AyohaStore_DeliveryAddress_StreetName',
                                                      margin: '0 0 0 10',

                                                      // zIndex: -10,
                                                      width: '95%',
                                                      // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                      // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                      html: '<input type="text" id="input-FloatPanel_AyohaStore_DeliveryAddress_StreetName"   style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px"  placeholder="House No And Street Name">',
                                                  },

                                             ]
                                         },

                                     ]
                                 },
                                 {
                                     xtype: 'container',
                                     width: '100%',
                                     margin: '0 0 0 0',
                                     height: 55,
                                     layout: {
                                         type: 'vbox',
                                         pack: 'start',
                                         align: 'left'

                                     },
                                     items: [

                                         {
                                             xtype: 'container',
                                             width: '100%',
                                             // height: 30,
                                             layout: {
                                                 type: 'vbox',
                                                 pack: 'center',
                                                 align: 'left'

                                             },
                                             items: [
                                                  {
                                                      margin: '10 0 0 10',
                                                      html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:Left;color:black;">Town/City<font size=2 color=red>*</font></div>'
                                                  },
                                                  {
                                                      id: 'htmlFloatPanel_AyohaStore_DeliveryAddress_TownCity',
                                                      margin: '0 0 0 10',

                                                      // zIndex: -10,
                                                      width: '95%',
                                                      // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                      // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                      html: '<input type="text" id="input-FloatPanel_AyohaStore_DeliveryAddress_TownCity"   style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px"  placeholder="Town / City">',
                                                  },

                                             ]
                                         },

                                     ]
                                 },
                                 {
                                     xtype: 'container',
                                     width: '100%',
                                     margin: '0 0 0 0',
                                     height: 55,
                                     layout: {
                                         type: 'vbox',
                                         pack: 'start',
                                         align: 'left'

                                     },
                                     items: [

                                         {
                                             xtype: 'container',
                                             width: '100%',
                                             // height: 30,
                                             layout: {
                                                 type: 'vbox',
                                                 pack: 'center',
                                                 align: 'left'

                                             },
                                             items: [
                                                  {
                                                      margin: '10 0 0 10',
                                                      html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:Left;color:black;">PostCode<font size=2 color=red>*</font></div>'
                                                  },
                                                  {
                                                      id: 'htmlFloatPanel_AyohaStore_DeliveryAddress_PostCode',
                                                      margin: '0 0 0 10',

                                                      // zIndex: -10,
                                                      width: '95%',
                                                      // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                      // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                      html: '<input type="number" id="input-FloatPanel_AyohaStore_DeliveryAddress_PostCode"   style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px"  placeholder="Postcode">',
                                                  },

                                             ]
                                         },

                                     ]
                                 },
                                 {
                                     xtype: 'container',
                                     width: '100%',
                                     margin: '0 0 0 0',
                                     height: 55,
                                     layout: {
                                         type: 'vbox',
                                         pack: 'start',
                                         align: 'left'

                                     },
                                     items: [

                                         {
                                             xtype: 'container',
                                             width: '100%',
                                             // height: 30,
                                             layout: {
                                                 type: 'vbox',
                                                 pack: 'center',
                                                 align: 'left'

                                             },
                                             items: [
                                                  {
                                                      margin: '10 0 0 10',
                                                      html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:Left;color:black;">State<font size=2 color=red>*</font></div>'
                                                  },
                                                  {
                                                      id: 'htmlFloatPanel_AyohaStore_DeliveryAddress_State',
                                                      margin: '0 0 0 10',

                                                      // zIndex: -10,
                                                      width: '95%',
                                                      // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                      // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                      html: '<input type="text" id="input-FloatPanel_AyohaStore_DeliveryAddress_State" readOnly onclick="FloatPanel_StateShow()" style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px"  placeholder="---Select State---">',
                                                  },

                                             ]
                                         },

                                     ]
                                 },
                                    {
                                        xtype: 'container',
                                        width: '100%',
                                        margin: '0 0 0 0',
                                        height: 55,
                                        layout: {
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'left'

                                        },
                                        items: [

                                            {
                                                xtype: 'container',
                                                width: '100%',
                                                // height: 30,
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'center',
                                                    align: 'left'

                                                },
                                                items: [
                                                     {
                                                         margin: '10 0 0 10',
                                                         html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:Left;color:black;">Country<font size=2 color=red>*</font></div>'
                                                     },
                                                     {
                                                         id: 'htmlFloatPanel_AyohaStore_DeliveryAddress_Country',
                                                         margin: '0 0 0 10',

                                                         // zIndex: -10,
                                                         width: '95%',
                                                         // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                         // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                         html: '<input type="text" id="input-FloatPanel_AyohaStore_DeliveryAddress_Country" readOnly onclick="FloatPanel_CountryShow()" style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px"  placeholder="---Select Country---">',
                                                     },

                                                ]
                                            },

                                        ]
                                    },

                                 {
                                     xtype: 'container',
                                     width: '100%',
                                     margin: '0 0 0 0',
                                     height: 55,
                                     layout: {
                                         type: 'vbox',
                                         pack: 'start',
                                         align: 'left'

                                     },
                                     items: [

                                         {
                                             xtype: 'container',
                                             width: '100%',
                                             // height: 30,
                                             layout: {
                                                 type: 'vbox',
                                                 pack: 'center',
                                                 align: 'left'

                                             },
                                             items: [
                                                  {
                                                      margin: '10 0 0 10',
                                                      html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:Left;color:black;">Contact Person<font size=2 color=red>*</font></div>'
                                                  },
                                                  {
                                                      id: 'htmlFloatPanel_AyohaStore_DeliveryAddress_ContactPerson',
                                                      margin: '0 0 0 10',

                                                      // zIndex: -10,
                                                      width: '95%',
                                                      // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                      // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                      html: '<input type="text" id="input-FloatPanel_AyohaStore_DeliveryAddress_ContactPerson"   style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px"  placeholder="eg:BuskartApp,Sabastian">',
                                                  },

                                             ]
                                         },

                                     ]
                                 },
                                 {
                                     xtype: 'container',
                                     width: '100%',
                                     margin: '0 0 0 0',
                                     height: 55,
                                     layout: {
                                         type: 'vbox',
                                         pack: 'start',
                                         align: 'left'

                                     },
                                     items: [

                                         {
                                             xtype: 'container',
                                             width: '100%',
                                             // height: 30,
                                             layout: {
                                                 type: 'vbox',
                                                 pack: 'center',
                                                 align: 'left'

                                             },
                                             items: [
                                                  {
                                                      margin: '10 0 0 10',
                                                      html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:Left;color:black;">Phone No<font size=2 color=red>*</font></div>'
                                                  },
                                                  {
                                                      id: 'htmlFloatPanel_AyohaStore_DeliveryAddress_PhoneNo',
                                                      margin: '0 0 0 10',

                                                      // zIndex: -10,
                                                      width: '95%',
                                                      // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                      // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                      html: '<input type="number" id="input-FloatPanel_AyohaStore_DeliveryAddress_PhoneNo"   style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px"  placeholder="Mobile Phone/Office Phone">',
                                                  },

                                             ]
                                         },

                                     ]
                                 },
                             ]
                         },


                         {
                             xtype: 'container',
                             width: '100%',
                             height: 450,
                             hidden:true,
                             id: 'containerFloatPanel_AyohaStore_DeliveryAddress_RecentlyUsedAddressList',
                             style: 'border-bottom:2px none #D25959;background-color:transparent',
                             layout: {
                                 type: 'vbox',
                                 pack: 'start',
                                 align: 'left',
                             },
                             items: [
                                 {
                                     xtype: 'list',
                                     //  flex: 1,
                                     store: _DataStore_AyohaStoreShippingAddressLoadBySubscriberAccNoStore,
                                     id: 'FloatPanel_AyohaStore_DeliveryAddress_RecentlyUsedAddressList',
                                     mode: 'SINGLE',
                                     disableSelection: false,

                                     //itemTpl: '<div class="myContent">' +
                                     //   '<div><b>{ID}</b></div>' +
                                     //   '<div>{ReceiptName}</div>' +
                                     //   '<div style="float:right;width:3%;margin:-35px 10px 0px 0px"><img src="resources/icons/editresititem.png" height="22" width="30"></div>' +
                                     //   '<div><b>{Amount}</b></div>' +
                                     //    '<div style="display: none;">{ID}</div>' +
                                     //   '</div>',

                                     itemTpl: '<div class="myContent">' +


                                               // '<table style="border-collapse:collapse;border-spacing:0;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:20px">{No}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:120px">{SubscriberAccountName}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberPhoneNumber}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberEmail}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:100px">{SubscribedDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:50px">{PhonePlatform}</th></tr></table>' +


                                           //jadi// '<div style="overflow:auto;width:100%;height:100%;font-size: 65%"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:13%"><b>{ID}</b></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%"><b>{ReceiptName}</b><br>{CreatedDate}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div>' +

                                         '<div onclick="FloatPanel_AyohaStore_DeliveryAddress_SetRecentlyUsedAddress(' + "'" + '{StreetName}' + "'" + ',' + "'" + '{PostCode}' + "'" + ',' + "'" + '{Town}' + "'" + ',' + "'" + '{StateCode}' + "'" + ',' + "'" + '{CountryCode}' + "'" + ',' + "'" + '{ContactPersonName}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ')" style="overflow:auto;width:100%;height:100%;text-align:left"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:100%;text-align:left;color:black"><b>{StreetName},{PostCode} {Town},{StateCode},{CountryCode}.</b></div>' +

                                          //edit only/ '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +


                                  // '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 35px 0px 0px"><button class="buttonssDelete button14" OnClick="DeleteReceiptImageFromList({ID})"><img src="resources/icons/UogradeAutismeIcon/deletedustbin.png" height="30" width="30"></button></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageParkingShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +

                                                '</div>',

                                     width: '100%',
                                     height: 450,
                                     disableSelection: true,

                                     listeners: {


                                         itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                                                    


                                         },

                                         itemsingletap: function (dataview, index, target, record, e, eOpts) {
                                             //var StreetName = record.get('StreetName');
                                             //var PostCode = record.get('PostCode');
                                             //var TownCity = record.get('Town');
                                             //var State = record.get('StateCode');
                                             //var Country = record.get('CountryCode');
                                             //var ContactPerson = record.get('ContactPersonName');
                                             //var PhoneNo = record.get('PhoneNo');
                                             //document.getElementById('input-FloatPanel_AyohaStore_Cart_DeliveryAddress').value = StreetName + '\n' + PostCode + ' ' + TownCity + '\n' + State + '.' + Country + '\n\n' + 'Contact Person:' + ContactPerson + '\n' + 'Phone No:' + PhoneNo;
                                             //FloatPanel_AyohaStore_DeliveryAddressHide();

                                         }
                                     }





                                 },
                             ]
                         },
                         //{
                         //    xtype: 'carousel',
                         //    //hidden:true,
                         //    id: 'FloatPanel_AyohaStore_DeliveryAddress_Carousel',
                         //  //  name: 'nameFloatPanel_AyohaStore_SaleItemDetail_Carousel',
                         //    //width: '100%',
                         //    //height: '100%',
                         //    width: '100%',
                         //    height: 525,
                         //    style: 'background-color:white',
                         //    //height: '100%',
                         //    indicator: false,
 
                         //     items: [
                                  

                                  

                         //      ]
                         //},
                   


  {

      xtype: 'container',
      width: '100%',
      docked: 'bottom',
      height: 45,
     // style: 'background-color:white;border-top:1px solid #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
      style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #f0f2f5;',
      id: 'containerFloatPanel_AyohaStore_DeliveryAddressFooter',
      //style: {
      //    // background: '#D25959',
      //    background: 'transparent',
      //    // border: '2px'
      //},
      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
      // style: 'border-bottom:2px solid #D25959;background-color:transparent',
      layout: {
          type: 'hbox',
          pack: 'center',
          align: 'right',
      },
      // hidden:true,
      items:
             [
                
                  {
                      id: 'htmFloatPanel_AyohaStore_DeliveryAddress_OK',
                      //margin: '-27 0 0 0',
                      margin: '3 0 0 0',
                      html: '<button OnClick="FloatPanel_AyohaStore_DeliveryAddressOK()" class="buttonPayNow">OK</button>'



                  },

                  //        {
                  //            xtype: 'panel',
                  //            width: 5
                  //        },
                 

                  //{
                  //    id: 'htmFloatPanel_AyohaStore_DeliveryAddress_RecentlyAddress',
                  //    //margin: '-27 0 0 0',
                  //    margin: '0 0 0 0',
                  //    html: '<button OnClick="FloatPanel_AyohaStore_CheckOutShows()" class="buttonRecentlyUsedAddress"><u>Recently use address</u></button>'



                  //},
                          {
                              xtype: 'panel',
                              width: 10
                          },

                            














             ]

  },



                ]


            },



             ]




         }







     });
    return _FloatPanel_AyohaStore_DeliveryAddress;





}



function FloatPanel_AyohaStore_DeliveryAddressShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_DeliveryAddress);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_DeliveryAddress());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_DeliveryAddressHide()");
    isFloatPanel_AyohaStore_DeliveryAddressOpen = 'Y';
    Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryAddress_RecentlyUsedAddressList').setHidden(true);
    Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryAddress_RecentlyUsedAddressDetail').setHidden(false);
    Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryAddressFooter').setHidden(false);
    
   // FloatPanel_AyohaStore_DeliveryAddress_AyohaStoreShippingAddressLoadBySubscriberAccNoStore();


    //Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryAddress_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">' + FloatPanel_AyohaStore_getEnterpriseName() + '</div>');
    //Ext.getCmp('btnFloatPanel_AyohaStore_DeliveryAddress_PicProfile').setHtml('<div ><img src="' + FloatPanel_AyohaStore_getEnterpriseLogo() + '" width="30" height="30" alt="Company Name"></div>');







}



function FloatPanel_AyohaStore_DeliveryAddressShow_FromCheckOut() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_DeliveryAddress);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_DeliveryAddress());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_DeliveryAddressHide()");
    isFloatPanel_AyohaStore_DeliveryAddressOpen = 'Y';
    Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryAddress_RecentlyUsedAddressList').setHidden(true);
    Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryAddress_RecentlyUsedAddressDetail').setHidden(false);
    Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryAddressFooter').setHidden(false);



    document.getElementById('input-FloatPanel_AyohaStore_DeliveryAddress_StreetName').value = globalFloatPanel_AyohaStore_DeliveryAddress_StreetName;
    document.getElementById('input-FloatPanel_AyohaStore_DeliveryAddress_TownCity').value = globalFloatPanel_AyohaStore_DeliveryAddress_TownCity;
    document.getElementById('input-FloatPanel_AyohaStore_DeliveryAddress_PostCode').value = globalFloatPanel_AyohaStore_DeliveryAddress_PostCode;
    document.getElementById('input-FloatPanel_AyohaStore_DeliveryAddress_State').value = globalFloatPanel_AyohaStore_DeliveryAddress_State;
    document.getElementById('input-FloatPanel_AyohaStore_DeliveryAddress_Country').value = globalFloatPanel_AyohaStore_DeliveryAddress_Country;
    document.getElementById('input-FloatPanel_AyohaStore_DeliveryAddress_ContactPerson').value = globalFloatPanel_AyohaStore_DeliveryAddress_ContactPerson;
    document.getElementById('input-FloatPanel_AyohaStore_DeliveryAddress_PhoneNo').value = globalFloatPanel_AyohaStore_DeliveryAddress_PhoneNo;




}


function FloatPanel_AyohaStore_DeliveryAddressShow_History() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_DeliveryAddress);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_DeliveryAddress());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_DeliveryAddressHide()");
    isFloatPanel_AyohaStore_DeliveryAddressOpen = 'Y';
    FloatPanel_AyohaStore_DeliveryAddress_AyohaStoreShippingAddressLoadBySubscriberAccNoStore();
    Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryAddress_RecentlyUsedAddressList').setHidden(false);
    Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryAddress_RecentlyUsedAddressDetail').setHidden(true);
    Ext.getCmp('containerFloatPanel_AyohaStore_DeliveryAddressFooter').setHidden(true);
    Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryAddress_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Recently Used Shipping Address</div>');
    
   




}




function FloatPanel_AyohaStore_DeliveryAddressHide() {
    if (isFloatPanel_AyohaStore_DeliveryAddressOpen == 'Y') {
        _FloatPanel_AyohaStore_DeliveryAddress.hide(); isFloatPanel_AyohaStore_DeliveryAddressOpen = 'N';
        RemovePages("FloatPanel_AyohaStore_DeliveryAddressHide()");
    }
}


var globalFloatPanel_AyohaStore_DeliveryAddress_ID = 0;

var globalFloatPanel_AyohaStore_DeliveryAddress_StreetName;
var globalFloatPanel_AyohaStore_DeliveryAddress_TownCity;
var globalFloatPanel_AyohaStore_DeliveryAddress_PostCode;
var globalFloatPanel_AyohaStore_DeliveryAddress_State;
var globalFloatPanel_AyohaStore_DeliveryAddress_Country;
var globalFloatPanel_AyohaStore_DeliveryAddress_ContactPerson;
var globalFloatPanel_AyohaStore_DeliveryAddress_PhoneNo;
function FloatPanel_AyohaStore_DeliveryAddressOK() {

    var StreetName= document.getElementById('input-FloatPanel_AyohaStore_DeliveryAddress_StreetName').value;
    var TownCity = document.getElementById('input-FloatPanel_AyohaStore_DeliveryAddress_TownCity').value;
    var PostCode = document.getElementById('input-FloatPanel_AyohaStore_DeliveryAddress_PostCode').value;
    var State = document.getElementById('input-FloatPanel_AyohaStore_DeliveryAddress_State').value;
    var Country = document.getElementById('input-FloatPanel_AyohaStore_DeliveryAddress_Country').value;
    var ContactPerson = document.getElementById('input-FloatPanel_AyohaStore_DeliveryAddress_ContactPerson').value;
    var PhoneNo = document.getElementById('input-FloatPanel_AyohaStore_DeliveryAddress_PhoneNo').value;

    if (StreetName.length < 3) {
        swalFireFail("StreetName required!");
        return;
    }
    if (TownCity.length < 3) {
        swalFireFail("Town/City required!");
        return;
    }
    if (PostCode.length < 3) {
        swalFireFail("PostCode required!");
        return;
    }
    if (State.length < 3) {
        swalFireFail("State required!");
        return;
    }
    if (Country.length < 3) {
        swalFireFail("Country required!");
        return;
    }
    if (ContactPerson.length < 3) {
        swalFireFail("Contact Person required!");
        return;
    }
    if (PhoneNo.length < 3) {
        swalFireFail("Phone No required!");
        return;
    }
    var task = Ext.create('Ext.util.DelayedTask', function () {
       

        var objn = {
            "ID": globalFloatPanel_AyohaStore_DeliveryAddress_ID,
            "StreetName": StreetName,
            "Town": TownCity,
            "PostCode": PostCode,
            "StateCode": State,
            "CountryCode": Country,
            "ContactPersonName": ContactPerson,
            "PhoneNo": PhoneNo,
            "ItemCartCode": globalFloatPanel_AyohaStore_Cart_ItemCartCode,
            "OrderCode":"NotOrder-"+ globalFloatPanel_AyohaStore_Cart_ItemCartCode,
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(), 
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaStore_ShippingAddress/AyohaStoreShippingAddressInsertUpdate',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    FloatPanel_AyohaStore_DeliveryAddressHide();

                    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
                        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_ShippingAddress').value = StreetName + '\n' + PostCode + ' ' + TownCity + '\n' + State + '.' + Country;
                        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_ContactPerson').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Contact Person:' + ContactPerson + '</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_PhoneNo').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Phone No:' + PhoneNo + '</div>');


                        // document.getElementById('input-FloatPanel_AyohaStore_CheckOut_ShippingAddress').value = StreetName + '\n' + PostCode + ' ' + TownCity + '\n' + State + '.' + Country + '\n\n' + 'Contact Person:' + ContactPerson + '\n' + 'Phone No:' + PhoneNo;

                    }



                    if (isFloatPanel_AyohaStore_CheckOutOpen == 'N') {
                        document.getElementById('input-FloatPanel_AyohaStore_Cart_DeliveryAddress').value = StreetName + '\n' + PostCode + ' ' + TownCity + '\n' + State + '.' + Country + '\n\n' + 'Contact Person:' + ContactPerson + '\n' + 'Phone No:' + PhoneNo;

                    }

                    
                    globalFloatPanel_AyohaStore_DeliveryAddress_StreetName = StreetName;
                    globalFloatPanel_AyohaStore_DeliveryAddress_TownCity = TownCity;
                    globalFloatPanel_AyohaStore_DeliveryAddress_PostCode = PostCode;
                    globalFloatPanel_AyohaStore_DeliveryAddress_State = State;
                    globalFloatPanel_AyohaStore_DeliveryAddress_Country = Country;
                    globalFloatPanel_AyohaStore_DeliveryAddress_ContactPerson = ContactPerson;
                    globalFloatPanel_AyohaStore_DeliveryAddress_PhoneNo = PhoneNo;
                   // LoadingPanelHide();

                }
                else {

                    swalFireFail("Fail!");
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail!");
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(10);

}







function FloatPanel_AyohaStore_DeliveryAddress_AyohaStoreShippingAddressLoadBySubscriberAccNoStore() {
    
    _DataStore_AyohaStoreShippingAddressLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaStoreShippingAddressLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaStore_ShippingAddress/AyohaStoreShippingAddressLoadBySubscriberAccNo');
    _DataStore_AyohaStoreShippingAddressLoadBySubscriberAccNoStore.load();


    _DataStore_AyohaStoreShippingAddressLoadBySubscriberAccNoStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                var Count = _DataStore_AyohaStoreShippingAddressLoadBySubscriberAccNoStore.getCount();
                if (Count <= 0) {
           
                    return;
                }
                var Store = records[0]; // Access only the first record
                if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y' && isFloatPanel_AyohaStore_CartOpen == 'Y') {
                    document.getElementById('input-FloatPanel_AyohaStore_CheckOut_ShippingAddress').value = Store.get('StreetName') + '\n' + Store.get('PostCode') + ' ' + Store.get('Town') + '\n' + Store.get('StateCode') + '.' + Store.get('CountryCode');
                    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_ContactPerson').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Contact Person:' + Store.get('ContactPersonName') + '</div>');
                    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_PhoneNo').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Phone No:' + Store.get('PhoneNo') + '</div>');
        
                    globalFloatPanel_AyohaStore_DeliveryAddress_StreetName = Store.get('StreetName');
                    globalFloatPanel_AyohaStore_DeliveryAddress_TownCity = Store.get('Town');
                    globalFloatPanel_AyohaStore_DeliveryAddress_PostCode = Store.get('PostCode');
                    globalFloatPanel_AyohaStore_DeliveryAddress_State = Store.get('StateCode');
                    globalFloatPanel_AyohaStore_DeliveryAddress_Country = Store.get('CountryCode');
                    globalFloatPanel_AyohaStore_DeliveryAddress_ContactPerson = Store.get('ContactPersonName');
                    globalFloatPanel_AyohaStore_DeliveryAddress_PhoneNo = Store.get('PhoneNo');
                    // document.getElementById('input-FloatPanel_AyohaStore_CheckOut_ShippingAddress').value = StreetName + '\n' + PostCode + ' ' + TownCity + '\n' + State + '.' + Country + '\n\n' + 'Contact Person:' + ContactPerson + '\n' + 'Phone No:' + PhoneNo;
        
                }
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });







  
}


function FloatPanel_AyohaStore_DeliveryAddress_SetRecentlyUsedAddress(StreetName, PostCode, TownCity, State, Country, ContactPerson, PhoneNo) {
    globalFloatPanel_AyohaStore_DeliveryAddress_StreetName = StreetName;
    globalFloatPanel_AyohaStore_DeliveryAddress_TownCity = TownCity;
    globalFloatPanel_AyohaStore_DeliveryAddress_PostCode = PostCode;
    globalFloatPanel_AyohaStore_DeliveryAddress_State = State;
    globalFloatPanel_AyohaStore_DeliveryAddress_Country = Country;
    globalFloatPanel_AyohaStore_DeliveryAddress_ContactPerson = ContactPerson;
    globalFloatPanel_AyohaStore_DeliveryAddress_PhoneNo = PhoneNo;



    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_ShippingAddress').value = StreetName + '\n' + PostCode + ' ' + TownCity + '\n' + State + '.' + Country;
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_ContactPerson').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Contact Person:' + ContactPerson + '</div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_PhoneNo').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Phone No:' + PhoneNo + '</div>');

    }



    if (isFloatPanel_AyohaStore_CheckOutOpen == 'N') {
        document.getElementById('input-FloatPanel_AyohaStore_Cart_DeliveryAddress').value = StreetName + '\n' + PostCode + ' ' + TownCity + '\n' + State + '.' + Country + '\n\n' + 'Contact Person:' + ContactPerson + '\n' + 'Phone No:' + PhoneNo;
    }
   
    FloatPanel_AyohaStore_DeliveryAddressHide();
}

