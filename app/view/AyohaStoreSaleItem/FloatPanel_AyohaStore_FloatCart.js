Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_FloatCart', {

});







var _FloatPanel_AyohaStore_FloatCart;

function FloatPanel_AyohaStore_FloatCart() {

    _FloatPanel_AyohaStore_FloatCart = Ext.create('Ext.Panel',



        {
            id: 'FloatPanel_AyohaStore_FloatCartID',
            xtype: 'panel',
            height: 120,
            width: 100,
            //  draggable: true,
            zIndex: 310,
            draggable: true,
          //  bottom: 30,
            // center: true,
            modal: false,
          //  left: 55,
            showAnimation: {
                type: 'popIn',
                duration: 450,
                easing: 'ease-out'
                //type: 'slideIn',
                //direction: 'up',
                //easing: 'cubic-bezier(.7,0,.7,1)',
                //duration: 1500
            },
            hideAnimation: {
                type: null,
                duration: null,
                easing: null

            },
            style: 'background-color: transparent;',

            
                items: [
                    {
                        xtype: 'container',
                        //id: 'containerFloatPanel_AyohaStore_FloatCartMyCart',
                        //name: 'namecontainerFloatPanel_AyohaStore_FloatCartMyCart',
                        width: 110,
                        height: 30,
                      //  margin: '0 0 0 0',
                        // hidden: true,
                        // style: "background-color: transparent",
                        style: "background-color: #F35B57;",
                       // style: 'border-right:1px solid purple;border-left:1px solid purple;border-bottom:1px solid purple;border-top:1px solid purple ;background: white;border-radius: 10px 10px 10px 10px;',
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'

                        },
                        items: [

                             {
                                 html: '<div class="blink_me"><img src="resources/icons/floatAdvertisement03.png" width="100" height="105" alt="Company Name"></div>',
                                 height: 105,
                                 width: 100,
                             },


                            //{
                            //    margin: '7 0 0 11',
                            //    html: '<div style="background: transparent;height:30px;font-size: 11px;font-weight:bold;color:purple;text-align:center;" >My Cart</div>'
                            //},
                            //  {
                            //      margin: '0 0 0 2',
                            //      // hidden: true,
                            //      width: 24,
                            //      height: 24,
                            //      html: '<img src="resources/icons/myCart02.png" alt="Image" style="width:24px;height:24px;">'
                            //  },

                            //  {
                            //      xtype: 'container',
                            //      height: 35,
                            //      width: 35,
                            //      margin: '-5 0 0 5',

                            //      style: 'border-right:1px solid purple;border-left:1px solid purple;border-bottom:1px solid purple;border-top:1px solid purple ;background-color: red;border-radius: 50%;',
                            //      layout: {
                            //          type: 'vbox',
                            //          pack: 'center',
                            //          align: 'center'

                            //      },
                            //      items: [

                            //{
                            //    margin: '-5 0 0 0',
                            //    id: 'htmlFloatPanel_AyohaStore_FloatCartCountbadgeText',
                            //    html: '<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:white;text-align:center;" ><b>0</b></div>'
                            //},
                            //      ]
                            //  },




                        ]
                    },

                ]


        

        }












        );

    return _FloatPanel_AyohaStore_FloatCart;
}



function FloatPanel_AyohaStore_FloatCartShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaStore_FloatCart);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_FloatCart());
    this.overlay.show();
    isFloatPanel_AyohaStore_FloatCartHide = 'Y';
    AddRoutePages("FloatPanel_AyohaStore_FloatCartHide()");
}
var isFloatPanel_AyohaStore_FloatCartHide = 'N';

function FloatPanel_AyohaStore_FloatCartHide() {
    if (isFloatPanel_AyohaStore_FloatCartHide == 'Y') {
        _FloatPanel_AyohaStore_FloatCart.hide();
        isFloatPanel_AyohaStore_FloatCartHide = 'N';
        RemovePages("FloatPanel_AyohaStore_FloatCartHide()");
    }

}


