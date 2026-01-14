Ext.define('BuskartApp.view.RewardStore.FloatPanel_RewardStoreCategoryFilter', {

});







var _FloatPanel_RewardStoreCategoryFilter;

function FloatPanel_RewardStoreCategoryFilter() {

    _FloatPanel_RewardStoreCategoryFilter = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_RewardStoreCategoryFilterID',
            xtype: 'panel',
            height: 1,
            width: 1,
            zIndex: 860,
            // draggable: true,
            hideOnMaskTap: true,
            bottom: 200,
            // center: true,
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
           width: 250,
           height: 400,
           zIndex:200,
           id: 'containerFloatPanel_RewardStoreCategoryFilter_Main',
           margin: '-40 0 0 -170',
           //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
          // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 40px 40px 40px 40px;',
           style: 'background-color:transparent;',
           layout: {
               type: 'vbox',
               pack: 'center',
               align: 'right'
           },
           scrollable: {
               direction: 'vertical',
               directionLock: true,
               indicators: false
           },
           items: [
               {

                   xtype: 'container',
                   margin: '-40 0 0 -170',

                   style: 'background: transparent;',

                   //height: 25,
                   //width: 170,
                   // margin: '70 0 0 0',
                   id: 'containerFloatPanel_RewardStoreCategoryFilter_FandBMaster',
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
                             id: 'containerFloatPanel_RewardStoreCategoryFilter_FandBTxt',
                             layout: {

                                 type: 'vbox',
                                 pack: 'center',
                                 align: 'center'
                             },
                             items: [


                                 //{
                                 //    margin: '0 0 0 0',
                                 //    id: 'htmlFloatPanel_RewardStoreCategoryFilterStampCardTxt',
                                 //    html: '<font size=2 color=black><b>Stamp Card</b></font>'
                                 //},

                                   {
                                       xtype: 'button',
                                       height: 35,
                                       width: 150,
                                       margin: '-1 0 0 0',
                                       id: 'btnFloatPanel_RewardStoreCategoryFilter_FandBTxt',
                                       //badgeText: "2",
                                       html: '<font size=2 color=black><b>F & B</b></font>',
                                       ui: 'plain',
                                       handler: function () {


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
                             id: 'containerFloatPanel_RewardStoreCategoryFilter_FandBIcon',
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
                                     id: 'btnFloatPanel_RewardStoreCategoryFilter_FandBIcon',
                                     //badgeText: "2",
                                     html: '<img src="resources/icons/StampQRCodePurple.png" width="30" height="30" alt="Company Name">',
                                     ui: 'plain',
                                     handler: function () {

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
                        id: 'containerFloatPanel_RewardStoreCategoryFilter_FashionMaster',
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
                                  id: 'containerFloatPanel_RewardStoreCategory_FashionTxt',
                                  layout: {

                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center'
                                  },
                                  items: [


                                      //{
                                      //    margin: '0 0 0 0',
                                      //    id: 'htmlFloatPanel_RewardStoreCategoryFilterAddNewCustomerTxt',
                                      //    html: '<font size=2 color=black><b>Add New Customer</b></font>'
                                      //},

                                          {
                                              xtype: 'button',
                                              height: 35,
                                              width: 150,
                                              margin: '-1 0 0 0',
                                              id: 'btnFloatPanel_RewardStoreCategory_FashionTxt',
                                              //badgeText: "2",
                                              html: '<font size=2 color=black><b>Fashion</b></font>',
                                              ui: 'plain',
                                              handler: function () {

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
                                  id: 'containerFloatPanel_RewardStoreCategory_FashionIcon',
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
                                          id: 'btnFloatPanel_RewardStoreCategory_FashionIcon',
                                          //badgeText: "2",
                                          html: '<img src="resources/icons/AddNewCustomerTwo.png" width="30" height="30" alt="Company Name">',
                                          ui: 'plain',
                                          handler: function () {

                                              //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                              //  setupMovementMap(2);
                                              FloatPanel_RewardStoreCategoryFilterHide();
                                              FloatPanel_SubscriberAddNewQrCodeShow();



                                              //Ext.getCmp('mainView').setActiveItem(16);
                                              //loadNotificationSummary();
                                          }
                                      },



                                  ]
                              }

                        ]
                    },
                    //////////////////////////



                    {

                        xtype: 'container',
                        margin: '10 0 0 -170',

                        style: 'background: transparent;',

                        //height: 25,
                        //width: 170,
                        // margin: '70 0 0 0',
                        id: 'containerFloatPanel_RewardStoreCategoryFilter_ElectronicMaster',
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
                                  id: 'containerFloatPanel_RewardStoreCategory_ElectronicTxt',
                                  layout: {

                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center'
                                  },
                                  items: [


                                      //{
                                      //    margin: '0 0 0 0',
                                      //    id: 'htmlFloatPanel_RewardStoreCategoryFilterAddNewCustomerTxt',
                                      //    html: '<font size=2 color=black><b>Add New Customer</b></font>'
                                      //},

                                          {
                                              xtype: 'button',
                                              height: 35,
                                              width: 150,
                                              margin: '-1 0 0 0',
                                              id: 'btnFloatPanel_RewardStoreCategory_ElectronicTxt',
                                              //badgeText: "2",
                                              html: '<font size=2 color=black><b>Electronic</b></font>',
                                              ui: 'plain',
                                              handler: function () {

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
                                  id: 'containerFloatPanel_RewardStoreCategory_ElectronicIcon',
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
                                          id: 'btnFloatPanel_RewardStoreCategory_ElectronicIcon',
                                          //badgeText: "2",
                                          html: '<img src="resources/icons/AddNewCustomerTwo.png" width="30" height="30" alt="Company Name">',
                                          ui: 'plain',
                                          handler: function () {

                                          }
                                      },



                                  ]
                              }

                        ]
                    }

           ]
       },

                



            ]




        });

    return _FloatPanel_RewardStoreCategoryFilter;
}



function FloatPanel_RewardStoreCategoryFilterShow() {
    Ext.Viewport.remove(_FloatPanel_RewardStoreCategoryFilter);
    this.overlay = Ext.Viewport.add(FloatPanel_RewardStoreCategoryFilter());
    this.overlay.show();
    isRewardStoreCategoryFilterOpen = 'Y';
}
var isRewardStoreCategoryFilterOpen = 'N';

function FloatPanel_RewardStoreCategoryFilterHide() {
    if (isRewardStoreCategoryFilterOpen == 'Y') {
        _FloatPanel_RewardStoreCategoryFilter.hide();
        isRewardStoreCategoryFilterOpen = 'N';
    }

}

