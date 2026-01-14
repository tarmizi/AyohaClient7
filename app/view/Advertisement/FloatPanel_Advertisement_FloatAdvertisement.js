Ext.define('BuskartApp.view.Advertisement.FloatPanel_Advertisement_FloatAdvertisement', {
});

var isFloatAdvertisementOpen = "N";








var _FloatPanel_Advertisement_FloatAdvertisement;

function FloatPanel_Advertisement_FloatAdvertisement() {

    _FloatPanel_Advertisement_FloatAdvertisement = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_Advertisement_FloatAdvertisementID',
            xtype: 'container',
            height: 100,
            width: 100,
            //  draggable: true,
            //zIndex: 410,
            zIndex: 360,
            draggable: false,
          // top: 100,
        //centered: true,
            modal: false,
          // bottom:110,
         //  left: -20,
           // right: -40,
            showAnimation: {
                type: 'popIn',
                duration: 50,
                easing: 'ease-in'
                //type: 'slideIn',
                //direction: 'left',
                //easing: 'cubic-bezier(.7,0,.7,1)',
                //duration: 1500
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
                easing: 'ease-out'

            },
            style: 'background-color: transparent;',
            //layout: {
            //    type: 'vbox',
            //    pack: 'center',
            //    align: 'center'
            //},


            items: [

                {
                    xtype: 'container',
                    height: 115,
                    width: 120,
                    
                    //margin:'-50 0 0 20',
                    style: 'background-color: transparent;',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center'
                    },
                    items: [
                        {
                           // html: '<div class="blink_me"><img src="resources/icons/floatAdvertisement03.png" width="100" height="105" alt="Company Name"  OnClick="FloatPanel_FloatingAdvertisementShow()"></div>',
                            html: '<div><img src="resources/icons/SaleThree.gif" width="100" height="105" alt="Company Name"  OnClick="FloatPanel_PreviewAdvertisementShow_PointCard()"></div>',
                            
                           
                           
                           // name:'nameHtmlFloatPanel_Advertisement_FloatAdvertisementIcon',
                            height: 105,
                            width: 100,
                        },
                           {
                               xtype: 'button',
                               id: 'btnFloatPanel_Advertisement_FloatAdvertisementClose',
                               margin: '-70 0 0 -20',
                               height: 35,
                               width: 35,

                               // iconCls: 'list',
                               html: '<div ><img src="resources/icons/xsigncircle04.png" width="25" height="25" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                   FloatPanel_Advertisement_FloatAdvertisementHide();
                                //   Ext.getCmp('Dashboard_FloatingAdvertisement_Txt').setHidden(false);
                                  // Ext.getCmp('Dashboard_FloatingAdvertisement_Icon').setHidden(false);
                                  
                               }
                           },
                         

                    ]
                },
               
            ]

           


        });

    return _FloatPanel_Advertisement_FloatAdvertisement;
}

var globalFloatPanel_AyohaCardManagement_AdvertisementButton;

function FloatPanel_Advertisement_FloatAdvertisementShow() {
    Ext.Viewport.remove(_FloatPanel_Advertisement_FloatAdvertisement);
    this.overlay = Ext.Viewport.add(FloatPanel_Advertisement_FloatAdvertisement());
    this.overlay.show();
    isFloatAdvertisementOpen = 'Y';
   // globalFloatPanel_AyohaCardManagement_AdvertisementButton="FloatPanel_AyohaCardManagement_AdvertisementButton_Point";
}


function FloatPanel_Advertisement_FloatAdvertisementHide() {
    if (isFloatAdvertisementOpen == 'Y') {
        _FloatPanel_Advertisement_FloatAdvertisement.hide();
        isFloatAdvertisementOpen = 'N';
    }

}


