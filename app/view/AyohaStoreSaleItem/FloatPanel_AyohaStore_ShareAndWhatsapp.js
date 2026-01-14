Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_ShareAndWhatsapp', {

});






var _FloatPanel_AyohaStore_ShareAndWhatsapp;

function FloatPanel_AyohaStore_ShareAndWhatsapp() {

    _FloatPanel_AyohaStore_ShareAndWhatsapp = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaStore_ShareAndWhatsappID',
            xtype: 'panel',
            height: 1,
            width: 1,
            //zIndex: 340,
            zIndex: 290,
            // draggable: true,
           // hideOnMaskTap: true,
            bottom: 150,
            // top: 260,
           // modal: true,
            right: 30,
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


                




                    






                   

                    ///////////////////

                    {

                        xtype: 'container',
                        margin: '-20 0 0 -25',

                        style: 'background: transparent;',
                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;',
                        //height: 25,
                        //width: 170,
                        // margin: '70 0 0 0',
                        id: 'containerFloatPanel_AyohaStore_ShareAndWhatsappFilterxt',
                        layout: {

                            type: 'hbox',
                            pack: 'start',
                            align: 'right'
                        },
                        items: [
                              
                             


                              {
                                  xtype: 'container',
                                  margin: '0 0 0 0',
                                  // hidden: true,
                                  //style: 'background-color: white;',
                                  style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;',
                                  height: 50,
                                  width: 50,
                                  // margin: '70 0 0 0',
                                  id: 'containerFloatPanel_AyohaStore_ShareAndWhatsappWsBtn',
                                  layout: {

                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center'
                                  },
                                  items: [
                                      {
                                          xtype: 'button',
                                          height: 50,
                                          width: 50,
                                          margin: '0 0 0 0',
                                          id: 'btnFloatPanel_AyohaStore_ShareAndWhatsappWsBtn',
                                          //badgeText: "2",
                                          html: '<img src="resources/icons/whatsapp01.png" style="width:25px;height:25px;margin:0px 0px 0px -5px;" alt="Company Name">',
                                          ui: 'plain',
                                          handler: function () {
                                            
                                              var WhatsAppLink = FloatPanel_AyohaStore_getWhatsAppLink();
                                              if (WhatsAppLink.length > 4) {
                                                  // var ModifiedMediaFileName = globalMediaFileName.replace(".", "") + ".html?ImgId=" + globalMediaFileName;
                                                  //  window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=Hi");
                                                  window.open("https://api.whatsapp.com/send?phone=" + WhatsAppLink + "&text=Hi,i want to know more about this product-*%0a*" + globalFloatPanel_AyohaStore_SaleItemDetail_ItemName + "*%0a*", '_system'); return false;
                                                  // window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=https://BuskartApp.com/ayohaimg/" + ModifiedMediaFileName);
                                              } else {
                                                  swalFireInfoMerchantButtonLink("Merchant Might be Not Set WhatsApp No.,Help merchant to know this Message!", "WhatsApp");
                                              }

                                          }
                                      },



                                  ]
                              },
                               {
                                   xtype: 'panel',
                                   width: 18,
                               },

                        ]
                    },



                    ///



                    {

                        xtype: 'container',
                        margin: '10 0 0 -25',

                        style: 'background: transparent;',

                        //height: 25,
                        //width: 170,
                        // margin: '70 0 0 0',
                        id: 'containerFloatPanel_AyohaStore_ShareAndWhatsappShareTxt',
                        layout: {

                            type: 'hbox',
                            pack: 'start',
                            align: 'right'
                        },
                        items: [
                              

                              

                              {
                                  xtype: 'container',
                                  margin: '0 0 0 0',
                                  // hidden: true,
                                  //style: 'background-color: white;',
                                  style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;',
                                  height: 50,
                                  width: 50,
                                  // margin: '70 0 0 0',
                                  id: 'containerFloatPanel_AyohaStore_ShareAndWhatsappShareBtn',
                                  layout: {

                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center'
                                  },
                                  items: [
                                      {
                                          xtype: 'button',
                                          height: 50,
                                          width: 50,
                                          margin: '0 0 0 0',
                                          id: 'btnFloatPanel_AyohaStore_ShareAndWhatsappShareBtn',
                                          //badgeText: "2",
                                          html: '<img src="resources/icons/share01.png" style="width:25px;height:25px;margin:0px 0px 0px -5px;" alt="Company Name">',
                                          ui: 'plain',
                                          handler: function () {
                                              FloatPanel_AyohaStore_ShareAndWhatsappHide();
                                              //Ext.getCmp('tableFloatPanel_AyohaStore_SaleItemListColThree').setHidden(false);
                                              //Ext.getCmp('FloatPanel_AyohaStore_SaleItemList').setHidden(true);
                                              // FloatPanel_AyohaStore_setSaleListItemColStyle();
                                          }
                                      },



                                  ]
                              },
                              {
                                  xtype: 'panel',
                                  width: 18,
                              },


                        ]
                    },



            ]




        });

    return _FloatPanel_AyohaStore_ShareAndWhatsapp;
}



function FloatPanel_AyohaStore_ShareAndWhatsappShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaStore_ShareAndWhatsapp);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_ShareAndWhatsapp());
    this.overlay.show();
    is_FloatPanel_AyohaStore_ShareAndWhatsappOpen = 'Y';

}
var is_FloatPanel_AyohaStore_ShareAndWhatsappOpen = 'N';

function FloatPanel_AyohaStore_ShareAndWhatsappHide() {
    if (is_FloatPanel_AyohaStore_ShareAndWhatsappOpen == 'Y') {
        _FloatPanel_AyohaStore_ShareAndWhatsapp.hide();
        is_FloatPanel_AyohaStore_ShareAndWhatsappOpen = 'N';
    }

}

