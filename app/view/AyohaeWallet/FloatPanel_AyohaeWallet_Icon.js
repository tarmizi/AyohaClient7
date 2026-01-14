Ext.define('BuskartApp.view.AyohaeWallet.FloatPanel_AyohaeWallet_Icon', {

});







var _FloatPanel_AyohaeWallet_Icon;

function FloatPanel_AyohaeWallet_Icon() {

    _FloatPanel_AyohaeWallet_Icon = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaeWallet_IconID',
            xtype: 'panel',
            height: 1,
            width: 1,
          //  draggable: true,
         //  zIndex: -10,
            draggable: false,
            top: 50,
            // center: true,
            modal: false,
            right: 75,
            showAnimation: {
                //type: 'popIn',
                //duration: 450,
                //easing: 'ease-out'
                type: 'slideIn',
                direction: 'left',
                easing: 'cubic-bezier(.7,0,.7,1)',
                duration: 1500
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

               // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 50px 50px 50px 50px;',
                style: 'background-color: transparent;',
                height: 35,
                width: 100,





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
                             id: 'btnFloatPanel_AyohaeWallet_IconeWallet',
                             margin: '4 0 0 8',
                             height: 30,
                             width: 35,

                             // iconCls: 'list',
                             html: '<div ><img src="resources/icons/ayohaewallet01.png" width="25" height="20" alt="Company Name"></div>',
                             ui: 'plain',
                             handler: function () {
                                 Ayoha_eWallet();

                             }
                         },
                                                                       //{
                                                                       //    height: 30,
                                                                       //    margin: '10 0 0 0',
                                                                       //    width: 65,

                                                                       //    //html: '<button OnClick="Ayoha_eWallet()" class="buttonsHtmlBgTransparent"><div style="color:white;text-align: left;font-size:14px;width:100%;font-weight:bold" >RM00.00</div></button>',
                                                                       //},
                                                                       {
                                                                           xtype: 'button',
                                                                           id: 'btnFloatPanel_AyohaeWallet_IconeWalletValue',
                                                                           margin: '7 0 0 2',
                                                                           height: 30,
                                                                           width: 65,

                                                                           // iconCls: 'list',
                                                                           html: '<div style="color:black;text-align: left;font-size:14px;width:100%;font-weight:bold;margin:-1px 0px 0px -8px" >RM00.00</div>',
                                                                           ui: 'plain',
                                                                           handler: function () {
                                                                               Ayoha_eWallet();

                                                                           }
                                                                       },


                ]






            }




        });

    return _FloatPanel_AyohaeWallet_Icon;
}



function FloatPanel_AyohaeWallet_IconShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaeWallet_Icon);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet_Icon());
    this.overlay.show();
    isFloatPanel_AyohaeWallet_IconHide = 'Y';
}
var isFloatPanel_AyohaeWallet_IconHide = 'N';

function FloatPanel_AyohaeWallet_IconHide() {
    if (isFloatPanel_AyohaeWallet_IconHide == 'Y') {
        _FloatPanel_AyohaeWallet_Icon.hide();
        isFloatPanel_AyohaeWallet_IconHide = 'N';
    }

}


function Ayoha_eWallet() {
    event.preventDefault();
    Swal.fire({
        title: '<font size=5>Ayoha eWallet</font>',
        text: 'Ayoha eWallet will be available soon...Thank you for your support!.',
        imageUrl: "resources/icons/AyohaeWallet02.png",
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton:true,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
      //  footer: '<a href>Ayoha Reward v 1.0</a>'
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });
   
}