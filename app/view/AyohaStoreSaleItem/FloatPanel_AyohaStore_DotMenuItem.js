Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_DotMenuItem', {

});





var globalFloatPanel_AyohaStore_DotMenuItemExpandShrinkBtn;
var globalFloatPanel_AyohaStore_DotMenuItemColListViewBtn;
var _FloatPanel_AyohaStore_DotMenuItem;

function FloatPanel_AyohaStore_DotMenuItem() {

    _FloatPanel_AyohaStore_DotMenuItem = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaStore_DotMenuItemID',
            xtype: 'panel',
            height: 1,
            width: 1,
            zIndex: 300,
            // draggable: true,
            hideOnMaskTap: true,
            bottom: 360,
            // top: 260,
            modal: true,
            right: 58,
            showAnimation: {
                //type: 'slide',
                //direction: 'left',
                //duration: 700,
                //easing: 'ease-in'
                type: 'popIn',
                duration: 150,
                easing: 'ease-out'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 150,
                easing: 'ease-in'

            },
            style: 'background-color: transparent;',
            layout: {

                type: 'vbox',
            },

            items: [


                {

                    xtype: 'container',
                    margin: '-40 0 0 -170',

                    style: 'background: transparent;',

                    //height: 25,
                    //width: 170,
                    // margin: '70 0 0 0',
                    id: 'containerFloatPanel_AyohaStore_DotMenuItem_Txt',
                    layout: {

                        type: 'hbox',
                        pack: 'start',
                        align: 'left'
                    },
                    items: [
                          {
                              xtype: 'container',
                              margin: '15 0 0 0',
                              // hidden:true,
                              //style: 'background-color: white;',
                              //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                              style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',

                              height: 35,
                              width: 150,
                              // margin: '70 0 0 0',
                              id: 'containerFloatPanel_AyohaStore_DotMenuItem_InnerTxt',
                              layout: {

                                  type: 'vbox',
                                  pack: 'center',
                                  align: 'center'
                              },
                              items: [


                                  //{
                                  //    margin: '0 0 0 0',
                                  //    id: 'htmlFloatPanel_AyohaStore_DotMenuItem_Txt',
                                  //    html: '<font size=2 color=black><b>Stamp Card</b></font>'
                                  //},

                                    {
                                        xtype: 'button',
                                        height: 35,
                                        width: 150,
                                        margin: '-1 0 0 0',
                                        id: 'btnFloatPanel_AyohaStore_DotMenuItem_AddNewSaleItemTxt',
                                        //badgeText: "2",
                                        html: '<font size=2 color=black><b>Purchase History</b></font>',
                                        ui: 'plain',
                                        handler: function () {
                                            FloatPanel_AyohaStore_DotMenuItemHide();
                                            FloatPanel_AyohaStore_OrderHistoryShow();
                                         //   FloatPanel_AyohaStoreMerchant_AddEditItemShow();




                                        }
                                    },

                              ]
                          },

                          {
                              xtype: 'panel',
                              width: 18,
                          },


                          {
                              xtype: 'container',
                              margin: '0 0 0 -7',
                              // hidden: true,
                              //style: 'background-color: white;',
                              style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 30px 30px 30px 30px;',
                              height: 60,
                              width: 60,
                              // margin: '70 0 0 0',
                              id: 'containerFloatPanel_AyohaStore_DotMenuItem',
                              layout: {

                                  type: 'hbox',
                                  pack: 'left',
                                  align: 'left'
                              },
                              items: [
                                  {
                                      xtype: 'button',
                                      height: 70,
                                      width: 70,
                                      margin: '-3 0 0 -5',
                                      id: 'btnFloatPanel_AyohaStore_DotMenuItem_AddNewSaleItem',
                                      //badgeText: "2",
                                      html: '<img src="resources/icons/purchase01.png" width="30" height="30" alt="Company Name">',
                                      ui: 'plain',
                                      handler: function () {
                                          FloatPanel_AyohaStore_DotMenuItemHide();
                                          FloatPanel_AyohaStore_OrderHistoryShow();
                                         // FloatPanel_AyohaStoreMerchant_AddEditItemShow();

                                      }
                                  },



                              ]
                          }

                    ]
                },




                    {

                        xtype: 'container',
                        margin: '10 0 0 -170',

                        style: 'background: transparent;',

                        //height: 25,
                        //width: 170,
                        // margin: '70 0 0 0',
                        id: 'containerFloatPanel_AyohaStore_DotMenuItemListViewTxt',
                        layout: {

                            type: 'hbox',
                            pack: 'start',
                            align: 'left'
                        },
                        items: [
                              {
                                  xtype: 'container',
                                  margin: '15 0 0 0',
                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',
                                  height: 35,
                                  width: 150,
                                  // margin: '70 0 0 0',
                                  id: 'containerFloatPanel_AyohaStore_DotMenuItemListViewTxtInner',
                                  layout: {

                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center'
                                  },
                                  items: [


                                          {
                                              xtype: 'button',
                                              height: 35,
                                              width: 150,
                                              margin: '-1 0 0 0',
                                              id: 'btnFloatPanel_AyohaStore_DotMenuItemListViewTxt',
                                              //badgeText: "2",
                                              html: '<font size=2 color=black><b>List View</b></font>',
                                              ui: 'plain',
                                              handler: function () {
                                                  FloatPanel_AyohaStore_DotMenuItemHide();
                                                  if (globalFloatPanel_AyohaStore_DotMenuItemColListViewBtn == "ColView") {
                                                      Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemListViewTxt').setHtml('<font size=2 color=black><b>Colum View</b></font>');
                                                      Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemListViewBtn').setHtml('<img src="resources/icons/BoxMenu.png" width="30" height="30" alt="Company Name">');
                                                      Ext.getCmp('tableFloatPanel_AyohaStore_SaleItemListColThree').setHidden(true);
                                                      Ext.getCmp('FloatPanel_AyohaStore_SaleItemList').setHidden(false);
                                                      Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemListColThreeScroll').setHeight('100%');
                                                      globalFloatPanel_AyohaStore_DotMenuItemColListViewBtn = "ListView";
                                                      return;
                                                  } else {
                                                      Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemListViewTxt').setHtml('<font size=2 color=black><b>List View</b></font>');
                                                      Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemListViewBtn').setHtml('<img src="resources/icons/ListMenu.png" width="30" height="30" alt="Company Name">');
                                                      Ext.getCmp('tableFloatPanel_AyohaStore_SaleItemListColThree').setHidden(false);
                                                      Ext.getCmp('FloatPanel_AyohaStore_SaleItemList').setHidden(true);
                                                      globalFloatPanel_AyohaStore_DotMenuItemColListViewBtn = "ColView";
                                                      FloatPanel_AyohaStoreAdjustHeight();
                                                      return;
                                                  }

                                              }
                                          },


                                  ]
                              },

                              {
                                  xtype: 'panel',
                                  width: 18,
                              },


                              {
                                  xtype: 'container',
                                  margin: '0 0 0 -7',
                                  // hidden: true,
                                  //style: 'background-color: white;',
                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 30px 30px 30px 30px;',
                                  height: 60,
                                  width: 60,
                                  // margin: '70 0 0 0',
                                  id: 'containerFloatPanel_AyohaStore_DotMenuItemListViewBtn',
                                  layout: {

                                      type: 'hbox',
                                      pack: 'left',
                                      align: 'left'
                                  },
                                  items: [
                                      {
                                          xtype: 'button',
                                          height: 70,
                                          width: 70,
                                          margin: '-3 0 0 -5',
                                          id: 'btnFloatPanel_AyohaStore_DotMenuItemListViewBtn',
                                          //badgeText: "2",
                                          html: '<img src="resources/icons/ListMenu.png" width="30" height="30" alt="Company Name">',
                                          ui: 'plain',
                                          handler: function () {
                                              FloatPanel_AyohaStore_DotMenuItemHide();
                                              //Ext.getCmp('tableFloatPanel_AyohaStore_SaleItemListColThree').setHidden(true);
                                              //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemListColThreeScroll').setHeight('100%');
                                              //Ext.getCmp('FloatPanel_AyohaStore_SaleItemList').setHidden(false);
                                              if (globalFloatPanel_AyohaStore_DotMenuItemColListViewBtn == "ColView") {
                                                  Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemListViewTxt').setHtml('<font size=2 color=black><b>List View</b></font>');
                                                  Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemListViewBtn').setHtml('<img src="resources/icons/ListMenu.png" width="30" height="30" alt="Company Name">');
                                                  Ext.getCmp('tableFloatPanel_AyohaStore_SaleItemListColThree').setHidden(true);
                                                  Ext.getCmp('FloatPanel_AyohaStore_SaleItemList').setHidden(false);
                                                  Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemListColThreeScroll').setHeight('100%');
                                                  globalFloatPanel_AyohaStore_DotMenuItemColListViewBtn = "ListView";
                                                  return;
                                              } else {

                                                  Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemListViewTxt').setHtml('<font size=2 color=black><b>Colum View</b></font>');
                                                  Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemListViewBtn').setHtml('<img src="resources/icons/BoxMenu.png" width="30" height="30" alt="Company Name">');
                                                  Ext.getCmp('tableFloatPanel_AyohaStore_SaleItemListColThree').setHidden(false);
                                                  Ext.getCmp('FloatPanel_AyohaStore_SaleItemList').setHidden(true);
                                                  globalFloatPanel_AyohaStore_DotMenuItemColListViewBtn = "ColView";
                                                  FloatPanel_AyohaStoreAdjustHeight();
                                                  return;
                                              }
                                          }
                                      },



                                  ]
                              }

                        ]
                    },






                   {

                       xtype: 'container',
                       margin: '10 0 0 -170',

                       style: 'background: transparent;',

                       //height: 25,
                       //width: 170,
                       // margin: '70 0 0 0',
                       id: 'containerFloatPanel_AyohaStore_DotMenuItemSearchTxt',
                       layout: {

                           type: 'hbox',
                           pack: 'start',
                           align: 'left'
                       },
                       items: [
                             {
                                 xtype: 'container',
                                 margin: '15 0 0 0',
                                 style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',
                                 height: 35,
                                 width: 150,
                                 // margin: '70 0 0 0',
                                 id: 'containerFloatPanel_AyohaStore_DotMenuItemSearchTxtInner',
                                 layout: {

                                     type: 'vbox',
                                     pack: 'center',
                                     align: 'center'
                                 },
                                 items: [


                                         {
                                             xtype: 'button',
                                             height: 35,
                                             width: 150,
                                             margin: '-1 0 0 0',
                                             id: 'btnFloatPanel_AyohaStore_DotMenuItemExpandShrinkTxt',
                                             //badgeText: "2",
                                             html: '<font size=2 color=black><b>Expand View</b></font>',
                                             ui: 'plain',
                                             handler: function () {
                                                 FloatPanel_AyohaStore_DotMenuItemHide();
                                                 // FloatPanel_AyohaStore_SearchProductShow();
                                             }
                                         },


                                 ]
                             },

                             {
                                 xtype: 'panel',
                                 width: 18,
                             },


                             {
                                 xtype: 'container',
                                 margin: '0 0 0 -7',
                                 // hidden: true,
                                 //style: 'background-color: white;',
                                 style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 30px 30px 30px 30px;',
                                 height: 60,
                                 width: 60,
                                 // margin: '70 0 0 0',
                                 id: 'containerFloatPanel_AyohaStore_DotMenuItemColViewBtn',
                                 layout: {

                                     type: 'hbox',
                                     pack: 'left',
                                     align: 'left'
                                 },
                                 items: [
                                     {
                                         xtype: 'button',
                                         height: 70,
                                         width: 70,
                                         margin: '-3 0 0 -5',
                                         id: 'btnFloatPanel_AyohaStore_DotMenuItemExpandShrinkBtn',
                                         //badgeText: "2",
                                         html: '<img src="resources/icons/expandpurple03.png" width="30" height="30" alt="Company Name">',
                                         ui: 'plain',
                                         handler: function () {
                                             FloatPanel_AyohaStore_DotMenuItemHide();
                                             // alert(Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemSearchBtn').getHtml())
                                             var val = Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemExpandShrinkBtn').getHtml();
                                             //  alert(val);
                                             if (val == '<img src="resources/icons/expandpurple03.png" width="30" height="30" alt="Company Name">') {
                                                 globalFloatPanel_AyohaStore_DotMenuItemExpandShrinkBtn = "Expand";
                                                 var h = globalFloatPanel_AyohaStoreAdjustHeight + 50;
                                                 Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemExpandShrinkBtn').setHtml('<img src="resources/icons/shrink01.png" width="30" height="30" alt="Company Name">')
                                                 Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemExpandShrinkTxt').setHtml('<font size=2 color=black><b>Shrink View</b></font>');
                                                 Ext.getCmp('containerFloatPanel_AyohaStoreCompanyLogoHeaderMaster').setHidden(true);
                                                 Ext.getCmp('containerFloatPanel_AyohaStoreMasterHeaderTop').setHeight(55);
                                                 Ext.getCmp('FloatPanel_AyohaStore_SaleItemList').setHeight(h);
                                                 Ext.getCmp('htmlFloatPanel_AyohaStore_SearchProduct').setMargin('2 0 0 0');
                                                 Ext.getCmp('htmlFloatPanel_AyohaStore_SearchProduct').setWidth('90%');
                                                 Ext.getCmp('htmlFloatPanel_AyohaStore_SearchProduct').setHtml('<input type="text" id="input-FloatPanel_AyohaStore_SearchProduct" style="width:100%;height: 42px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 20px;background-color: #f0f2f5;font-size: 16px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 3px" placeholder="Search Product">');
                                                 document.getElementById("input-FloatPanel_AyohaStore_SearchProduct").addEventListener("keyup", OnKeyUpFloatPanel_AyohaStore_SearchProduct);

                                             } else {
                                                 globalFloatPanel_AyohaStore_DotMenuItemExpandShrinkBtn = "Shrink";


                                                 Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemExpandShrinkBtn').setHtml('<img src="resources/icons/expandpurple03.png" width="30" height="30" alt="Company Name">')
                                                 Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemExpandShrinkTxt').setHtml('<font size=2 color=black><b>Expand View</b></font>');
                                                 Ext.getCmp('containerFloatPanel_AyohaStoreCompanyLogoHeaderMaster').setHidden(false);
                                                 Ext.getCmp('containerFloatPanel_AyohaStoreMasterHeaderTop').setHeight(25);
                                                 Ext.getCmp('FloatPanel_AyohaStore_SaleItemList').setHeight(globalFloatPanel_AyohaStoreAdjustHeight);
                                                 Ext.getCmp('htmlFloatPanel_AyohaStore_SearchProduct').setMargin('0 0 0 0');
                                                 Ext.getCmp('htmlFloatPanel_AyohaStore_SearchProduct').setWidth('85%');
                                                 Ext.getCmp('htmlFloatPanel_AyohaStore_SearchProduct').setHtml('<input type="text" id="input-FloatPanel_AyohaStore_SearchProduct" style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 10px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 3px" placeholder="Search Product">');
                                                 document.getElementById("input-FloatPanel_AyohaStore_SearchProduct").addEventListener("keyup", OnKeyUpFloatPanel_AyohaStore_SearchProduct);
                                             }













                                             //  FloatPanel_AyohaStore_SearchProductShow();
                                         }
                                     },



                                 ]
                             }

                       ]
                   },

                    ///////////////////

                    {

                        xtype: 'container',
                        margin: '10 0 0 -170',

                        style: 'background: transparent;',
                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;',
                        //height: 25,
                        //width: 170,
                        // margin: '70 0 0 0',
                        id: 'containerFloatPanel_AyohaStore_DotMenuItemFilterxt',
                        layout: {

                            type: 'hbox',
                            pack: 'start',
                            align: 'left'
                        },
                        items: [
                              {
                                  xtype: 'container',
                                  margin: '15 0 0 0',
                                  // hidden:true,
                                  //style: 'background-color: white;',
                                  //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',

                                  height: 35,
                                  width: 150,
                                  // margin: '70 0 0 0',
                                  id: 'containerFloatPanel_AyohaStore_DotMenuItemFilterTxtInner',
                                  layout: {

                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center'
                                  },
                                  items: [


                                      //{
                                      //    margin: '0 0 0 0',
                                      //    id: 'htmlFloatPanel_AyohaStore_DotMenuItemAddNewCustomerTxt',
                                      //    html: '<font size=2 color=black><b>Add New Customer</b></font>'
                                      //},

                                          {
                                              xtype: 'button',
                                              height: 35,
                                              width: 150,
                                              margin: '-1 0 0 0',
                                              id: 'btnFloatPanel_AyohaStore_DotMenuItemFilterTxt',
                                              //badgeText: "2",
                                              html: '<font size=2 color=black><b>Filter Category</b></font>',
                                              ui: 'plain',
                                              handler: function () {

                                                  //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                  //  setupMovementMap(2);

                                                  // FloatPanel_AyohaStore_DotMenuItemHide();
                                                  FloatPanel_AyohaStore_ItemCategoryShow();

                                              }
                                          },


                                  ]
                              },

                              {
                                  xtype: 'panel',
                                  width: 18,
                              },


                              {
                                  xtype: 'container',
                                  margin: '0 0 0 -7',
                                  // hidden: true,
                                  //style: 'background-color: white;',
                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 30px 30px 30px 30px;',
                                  height: 60,
                                  width: 60,
                                  // margin: '70 0 0 0',
                                  id: 'containerFloatPanel_AyohaStore_DotMenuItemFilterTxtBtn',
                                  layout: {

                                      type: 'hbox',
                                      pack: 'left',
                                      align: 'left'
                                  },
                                  items: [
                                      {
                                          xtype: 'button',
                                          height: 70,
                                          width: 70,
                                          margin: '-3 0 0 -5',
                                          id: 'btnFloatPanel_AyohaStore_DotMenuItemFilterTxtBtn',
                                          //badgeText: "2",
                                          html: '<img src="resources/icons/filterPurpleThree.png" width="30" height="30" alt="Company Name">',
                                          ui: 'plain',
                                          handler: function () {

                                              //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                              //  setupMovementMap(2);
                                              //  FloatPanel_AyohaStore_DotMenuItemHide();
                                              FloatPanel_AyohaStore_ItemCategoryShow();

                                          }
                                      },



                                  ]
                              }

                        ]
                    },



                    ///



                    {

                        xtype: 'container',
                        margin: '10 0 0 -170',

                        style: 'background: transparent;',

                        //height: 25,
                        //width: 170,
                        // margin: '70 0 0 0',
                        id: 'containerFloatPanel_AyohaStore_DotMenuItemShareTxt',
                        layout: {

                            type: 'hbox',
                            pack: 'start',
                            align: 'left'
                        },
                        items: [
                              {
                                  xtype: 'container',
                                  margin: '15 0 0 0',
                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',
                                  height: 35,
                                  width: 150,
                                  // margin: '70 0 0 0',
                                  id: 'containerFloatPanel_AyohaStore_DotMenuItemShareTxtInner',
                                  layout: {

                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center'
                                  },
                                  items: [


                                          {
                                              xtype: 'button',
                                              height: 35,
                                              width: 150,
                                              margin: '-1 0 0 0',
                                              id: 'btnFloatPanel_AyohaStore_DotMenuItemShareTxt',
                                              //badgeText: "2",
                                              html: '<font size=2 color=black><b>Share Ayoha Store</b></font>',
                                              ui: 'plain',
                                              handler: function () {
                                                  FloatPanel_AyohaStore_DotMenuItemHide();
                                                  //Ext.getCmp('tableFloatPanel_AyohaStore_SaleItemListColThree').setHidden(false);
                                                  //Ext.getCmp('FloatPanel_AyohaStore_SaleItemList').setHidden(true);
                                                  //FloatPanel_AyohaStore_setSaleListItemColStyle();
                                              }
                                          },


                                  ]
                              },

                              {
                                  xtype: 'panel',
                                  width: 18,
                              },


                              {
                                  xtype: 'container',
                                  margin: '0 0 0 -7',
                                  // hidden: true,
                                  //style: 'background-color: white;',
                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 30px 30px 30px 30px;',
                                  height: 60,
                                  width: 60,
                                  // margin: '70 0 0 0',
                                  id: 'containerFloatPanel_AyohaStore_DotMenuItemShareBtn',
                                  layout: {

                                      type: 'hbox',
                                      pack: 'left',
                                      align: 'left'
                                  },
                                  items: [
                                      {
                                          xtype: 'button',
                                          height: 70,
                                          width: 70,
                                          margin: '-3 0 0 -5',
                                          id: 'btnFloatPanel_AyohaStore_DotMenuItemShareBtn',
                                          //badgeText: "2",
                                          html: '<img src="resources/icons/share01.png" width="30" height="30" alt="Company Name">',
                                          ui: 'plain',
                                          handler: function () {
                                              FloatPanel_AyohaStore_DotMenuItemHide();
                                              //Ext.getCmp('tableFloatPanel_AyohaStore_SaleItemListColThree').setHidden(false);
                                              //Ext.getCmp('FloatPanel_AyohaStore_SaleItemList').setHidden(true);
                                              // FloatPanel_AyohaStore_setSaleListItemColStyle();
                                          }
                                      },



                                  ]
                              }

                        ]
                    },



            ]




        });

    return _FloatPanel_AyohaStore_DotMenuItem;
}



function FloatPanel_AyohaStore_DotMenuItemShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaStore_DotMenuItem);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_DotMenuItem());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_DotMenuItemHide()");
    is_FloatPanel_AyohaStore_DotMenuItemOpen = 'Y';

    if (globalFloatPanel_AyohaStore_DotMenuItemExpandShrinkBtn == "Expand") {
        Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemExpandShrinkBtn').setHtml('<img src="resources/icons/shrink01.png" width="30" height="30" alt="Company Name">')
        Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemExpandShrinkTxt').setHtml('<font size=2 color=black><b>Shrink View</b></font>');
    } else {
        Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemExpandShrinkBtn').setHtml('<img src="resources/icons/expandpurple03.png" width="30" height="30" alt="Company Name">')
        Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemExpandShrinkTxt').setHtml('<font size=2 color=black><b>Expand View</b></font>');
    }
    if (globalFloatPanel_AyohaStore_DotMenuItemColListViewBtn == "ColView") {
        Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemListViewTxt').setHtml('<font size=2 color=black><b>List View</b></font>');
        Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemListViewBtn').setHtml('<img src="resources/icons/ListMenu.png" width="30" height="30" alt="Company Name">');
        //Ext.getCmp('tableFloatPanel_AyohaStore_SaleItemListColThree').setHidden(true);
        //Ext.getCmp('FloatPanel_AyohaStore_SaleItemList').setHidden(false);
        ////  Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemListColThreeScroll').setHeight('100%');
        //globalFloatPanel_AyohaStore_DotMenuItemColListViewBtn = "ListView";
        return;
    } else {
        Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemListViewTxt').setHtml('<font size=2 color=black><b>Colum View</b></font>');
        Ext.getCmp('btnFloatPanel_AyohaStore_DotMenuItemListViewBtn').setHtml('<img src="resources/icons/BoxMenu.png" width="30" height="30" alt="Company Name">');
        //Ext.getCmp('tableFloatPanel_AyohaStore_SaleItemListColThree').setHidden(false);
        //Ext.getCmp('FloatPanel_AyohaStore_SaleItemList').setHidden(true);
        //globalFloatPanel_AyohaStore_DotMenuItemColListViewBtn = "ColView";
        return;
    }
}
var is_FloatPanel_AyohaStore_DotMenuItemOpen = 'N';

function FloatPanel_AyohaStore_DotMenuItemHide() {
    if (is_FloatPanel_AyohaStore_DotMenuItemOpen == 'Y') {
        _FloatPanel_AyohaStore_DotMenuItem.hide();
        is_FloatPanel_AyohaStore_DotMenuItemOpen = 'N';
        RemovePages("FloatPanel_AyohaStore_DotMenuItemHide()");
    }

}

