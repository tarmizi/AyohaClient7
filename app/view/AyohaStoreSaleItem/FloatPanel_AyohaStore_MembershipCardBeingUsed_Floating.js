Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_MembershipCardBeingUsed_Floating', {
});

var isFloatAdvertisementOpen = "N";








var _FloatPanel_AyohaStore_MembershipCardBeingUsed_Floating;

function FloatPanel_AyohaStore_MembershipCardBeingUsed_Floating() {

    _FloatPanel_AyohaStore_MembershipCardBeingUsed_Floating = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingID',
            xtype: 'container',
            height: 100,
            width: 100,
            //  draggable: true,
            zIndex: 400,
            draggable: true,
            // top: 100,
            //  centered: true,
            modal: false,
            //bottom:100,
            // left: 40,
            // right: -40,
            showAnimation: {
                type: 'popIn',
                duration: 250,
                easing: 'ease-out'
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
                    // margin:'-50 0 0 -50',
                    style: 'background-color: transparent;',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center'
                    },
                    items: [
                        {
                            id: 'htmlFloatPanel_AyohaStore_MembershipCardBeingUsed_Floating_CardImage',
                            html: '<div class="blink_me"><img src="resources/icons/floatAdvertisement03.png" width="100" height="105" alt="Company Name"  OnClick="FloatPanel_FloatingAdvertisementShow()"></div>',
                            name: 'nameHtmlFloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingIcon',
                            height: 105,
                            width: 100,
                        },
                           {
                               xtype: 'button',
                               id: 'btnFloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingClose',
                               margin: '-70 0 0 -20',
                               height: 35,
                               width: 35,

                               // iconCls: 'list',
                               html: '<div ><img src="resources/icons/xsigncircle04.png" width="25" height="25" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                   FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingHide();
                                   Ext.getCmp('Dashboard_FloatingAdvertisement_Txt').setHidden(false);
                                   Ext.getCmp('Dashboard_FloatingAdvertisement_Icon').setHidden(false);
                                   RemovePages("FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingHide()");
                                   //var QrCode = "56923-4468-0123456789-NoEnterprise-4468-0123456789-Point";
                                   //Scan_QRCode_VerifyQRCode_PointCampaign(QrCode);

                               }
                           },


                    ]
                },

            ]




        });

    return _FloatPanel_AyohaStore_MembershipCardBeingUsed_Floating;
}



function FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingShow(CardImg) {
    Ext.Viewport.remove(_FloatPanel_AyohaStore_MembershipCardBeingUsed_Floating);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_MembershipCardBeingUsed_Floating());
    this.overlay.show();
    isFloatAdvertisementOpen = 'Y';
    AddRoutePages("FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingHide()");
  Ext.getCmp('htmlFloatPanel_AyohaStore_MembershipCardBeingUsed_Floating_CardImage').setHtml('<div class="blink_me"><img src="' + CardImg + '" width="105" height="105" alt="Company Name"  OnClick="FloatPanel_AyohaStore_MembershipCardBeingUsedShow()"></div>');

   
}


function FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingHide() {
    if (isFloatAdvertisementOpen == 'Y') {
        _FloatPanel_AyohaStore_MembershipCardBeingUsed_Floating.hide();
        isFloatAdvertisementOpen = 'N';
        RemovePages("FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingHide()");
    }

}


