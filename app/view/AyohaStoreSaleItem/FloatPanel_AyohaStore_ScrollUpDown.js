Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_ScrollUpDown', {

});







var _FloatPanel_AyohaStore_ScrollUpDown;

function FloatPanel_AyohaStore_ScrollUpDown() {

    _FloatPanel_AyohaStore_ScrollUpDown = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaStore_ScrollUpDownID',
            xtype: 'panel',
            height: 1,
            width: 1,
            //  draggable: true,
            zIndex: 400,
            draggable: false,
            bottom: 50,
            // center: true,
            modal: false,
            right: 25,
            showAnimation: {
                //type: 'popIn',
                //duration: 450,
                //easing: 'ease-out'
                type: 'slideIn',
                direction: 'left',
                easing: 'cubic-bezier(.7,0,.7,1)',
                duration: 500
            },
            hideAnimation: {
                type: null,
                duration: null,
                easing: null

            },
            style: 'background-color: transparent;',

            items: {

                xtype: 'container',
                margin: '-20 0 0 -30',

                //  style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 50px 50px 50px 50px;',

                style: 'border-right:1px none #ECF0F1;border-left:1px none #ECF0F1;border-bottom:1px none #ECF0F1;border-top:2px none #ECF0F1;background-color:white;',
               // style: 'background-color: transparent;',
                height: 45,
                width: 40,





                layout: {
                    type: 'hbox',
                    pack: 'left',
                    align: 'left'
                },
                height: 30,
                width: 100,
                items: [
                         {
                             xtype: 'button',
                             id: 'btnFloatPanel_AyohaStore_ScrollUpDowneWallet',
                             margin: '-10 0 0 8',
                             height: 45,
                             width: 35,

                             // iconCls: 'list',
                             html: '<div ><img src="resources/icons/scrollup01.png" width="25" height="20" alt="Company Name"></div>',
                             ui: 'plain',
                             handler: function () {
                                 var panel = Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_MasterOuter');
                                 panel.getScrollable().getScroller().scrollTo(0, 0, true);

                             }
                         },


                ]






            }




        });

    return _FloatPanel_AyohaStore_ScrollUpDown;
}



function FloatPanel_AyohaStore_ScrollUpDownShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaStore_ScrollUpDown);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_ScrollUpDown());
    this.overlay.show();
    isFloatPanel_AyohaStore_ScrollUpDownHide = 'Y';
}
var isFloatPanel_AyohaStore_ScrollUpDownHide = 'N';

function FloatPanel_AyohaStore_ScrollUpDownHide() {
    if (isFloatPanel_AyohaStore_ScrollUpDownHide == 'Y') {
        _FloatPanel_AyohaStore_ScrollUpDown.hide();
        isFloatPanel_AyohaStore_ScrollUpDownHide = 'N';
    }

}


