Ext.define('BuskartApp.view.MyAccount.FloatPanel_ShoppingBagOrder', {
});

var isFloatPanel_ShoppingBagOrderOpen = "N";








var _FloatPanel_ShoppingBagOrder;

function FloatPanel_ShoppingBagOrder() {

    _FloatPanel_ShoppingBagOrder = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_ShoppingBagOrderID',
            xtype: 'container',
            height: 100,
            width: 100,
           // bottom: 90,
            zIndex: 20,
            draggable: true,
          // top: 100,
        //centered: true,
            modal: false,
          // bottom:110,
         //  left: -20,
           // right: -40,
            showAnimation: {
                // type: 'popIn',
                // duration: 1050,
                // easing: 'ease-in'
                type: 'slideIn',
                direction: 'right',
                easing: 'cubic-bezier(.7,0,.7,1)',
                duration: 700
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
                easing: 'ease-out'

            },
           // style: 'background-color: transparent;',
            style: 'background-color: rgba(0, 0, 0, 0);',
            //layout: {
            //    type: 'vbox',
            //    pack: 'center',
            //    align: 'center'
            //},


            items: [

                {
                    xtype: 'container',
                    // height: 115,
                    // width: 120,
                     height: 0,
                     width: 0,
                    margin:'50 0 0 40',
                   // style: 'background-color: white;',
                   style: 'border:2px solid #ECF0F1; background:white; border-radius: 50%; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);',
                   // style: 'background-color: rgba(0, 0, 0, 0);',
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'center'
                    },
                    items: [
                        {
                           // html: '<div class="blink_me"><img src="resources/icons/floatAdvertisement03.png" width="100" height="105" alt="Company Name"  OnClick="FloatPanel_FloatingAdvertisementShow()"></div>',
                           margin:'5 0 0 5',
                           html: '<div class="shake-bag" style="background-color:transparent"><img src="resources/icons/shoppingbag02.png" width="65" height="65" alt="Company Name" ></img></div>',
                            
                           
                           
                           // name:'nameHtmlFloatPanel_ShoppingBagOrderIcon',
                            height:70,
                            width: 70,
                        },
                           {
                            //    xtype: 'button',
                            //    id: 'btnFloatPanel_ShoppingBagOrderClose',
                               margin: '-45 0 0 10',
                               height: 35,
                               width: 35,
                              // hidden:true,

                               // iconCls: 'list',
                               html: '<div style="text-align:center;font-size:14px;color:white;background-color:red;width:25px;height:25px;border-radius:50%;font-weight:bold;padding:4px 0px">1</div>',
                               ui: 'plain',
                               handler: function () {
                                   FloatPanel_ShoppingBagOrderHide();
                                //   Ext.getCmp('Dashboard_FloatingAdvertisement_Txt').setHidden(false);
                                  // Ext.getCmp('Dashboard_FloatingAdvertisement_Icon').setHidden(false);
                                  
                               }
                           },
                         

                    ]
                },
               
            ]

           


        });

    return _FloatPanel_ShoppingBagOrder;
}

var globalFloatPanel_AyohaCardManagement_AdvertisementButton;

function FloatPanel_ShoppingBagOrderShow() {
    Ext.Viewport.remove(_FloatPanel_ShoppingBagOrder);
    this.overlay = Ext.Viewport.add(FloatPanel_ShoppingBagOrder());
    this.overlay.show();
    isFloatPanel_ShoppingBagOrderOpen = 'Y';
   // globalFloatPanel_AyohaCardManagement_AdvertisementButton="FloatPanel_AyohaCardManagement_AdvertisementButton_Point";
}


function FloatPanel_ShoppingBagOrderHide() {
    if (isFloatPanel_ShoppingBagOrderOpen == 'Y') {
        _FloatPanel_ShoppingBagOrder.hide();
        isFloatPanel_ShoppingBagOrderOpen = 'N';
    }

}


