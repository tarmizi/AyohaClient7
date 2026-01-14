Ext.define('BuskartApp.view.Master.FloatPanel_GraphicConfeti', {

});







var _FloatPanel_GraphicConfeti;

function FloatPanel_GraphicConfeti() {

    _FloatPanel_GraphicConfeti = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_GraphicConfetiID',
            // xtype: 'panel',
            zIndex: 100,
            xtype: 'container',
            //height: 475,
            height: '100%',
            //  height: '60%',
            width: '100%',
            draggable: false,

           // styleHtmlContent: true,

           // centered: true,
            //bottom: 64,
            // zIndex: 100,
            modal: true,
            //   hideOnMaskTap: true,
            //left: 10,
            //top:10,
            layout: {
                type: 'fit'
            },
            showAnimation: {
                type: 'popIn',
                duration: 150,
                easing: 'ease-out'
                //type: 'slideIn',
                //direction:'down',
                //duration: 1000,
                //easing: 'ease-in'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
                easing: 'ease-out'
                //type: 'slideOut',
                //direction: 'down',
                //duration: 3000,
                //easing: 'ease-in'
            },
          //  style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
           // style: 'background-image: url("resources/icons/LatestConfetiTwo.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
          style: ' background-color:transparent;',

            //style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',

            items: {
                //zIndex: 40,
                xtype: 'container',
               // style: ' background-color:transparent;',
               style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                name: 'clickableContainerFloatPanel_GraphicConfeti',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
                //  margin:'-10 0 0 -7',
                items: [

                    {
                        xtype: 'button',
                        //  align: 'stretch',
                        // hidden:true,
                        id: 'btnFloatPanel_GraphicConfeti_Success',
                        ui: 'plain',
                        width: '100%',
                        height: 50,
                        margin: '-25 0 0 0',
                        // width: '80%',
                        //style: {
                        //    background: '#FA8072',
                        //},
                        // padding: '10px',
                        html: '<font size=5px color=white><center><b>Welcome!!</center></font>',
                        //html: '<div style="background: transparent;width:80%;font-size: 13px;font-weight:normal;color:white;text-align:center;" >*<i>Dear contestant, please maintain your rank until the end of contest for entitlement to redeem the prize.</i></div>',
                        // text: '<button class="button3">OK</button>',

                        handler: function () {

                            FloatPanel_GraphicConfetiHide();

                        },


                    },
                    {
                        height: 250,
                        width: 250,

                        xtype: 'button',
                        ui: 'plain',
                        id:'htmlFloatPanel_GraphicConfeti_Success_ImgProfile',
                        //margin: '0 0 0 0',
                        //id: 'btnFloatPanel_AyohaCardManagement_PreviewCardbottomFB',
                        //badgeText: "2",
                        html: '<img src="resources/icons/founder.jpg" style="width: 240px; height: 240px; border:1px solid white; border-radius: 50%; " alt="Company Name">',
                        //  html: '<img src="resources/icons/AyohaRankingRewardContest.png" style="width:99%;height:710px" alt="Company Name">',
                        handler: function () {

                            FloatPanel_GraphicConfetiHide();

                        },

                    },
                      {
                          //  xtype: 'button',
                          //  align: 'stretch',
                          // hidden:true,
                          id: 'btnFloatPanel_GraphicConfeti_Success_textName',
                          //ui: 'plain',
                          width: '100%',
                          //height: 50,
                          margin: '10 0 0 40',
                          // width: '80%',
                          //style: {
                          //    background: '#FA8072',
                          //},
                          // padding: '10px',
                          // html: '<font size=3px color=white><center>*<i>Dear Contestant ,you need to maintaince your ranking until end of this contest to entitle redeem the prize</i></center></font>',
                          html: '<div style="background: transparent;width:80%;font-size: 20px;font-weight:bold;color:white;text-align:center;" ><b>Muhammad Syazmer Bin Mustapha</b></div>',
                          // text: '<button class="button3">OK</button>',

                          //handler: function () {

                          //    FloatPanel_GraphicConfetiHide();

                          //},


                      },
                        
                        {
                          //  xtype: 'button',
                            //  align: 'stretch',
                            // hidden:true,
                            id: 'btnFloatPanel_GraphicConfeti_Success_text',
                            //ui: 'plain',
                            width: '100%',
                            //height: 50,
                            margin: '25 0 0 40',
                            // width: '80%',
                            //style: {
                            //    background: '#FA8072',
                            //},
                            // padding: '10px',
                           // html: '<font size=3px color=white><center>*<i>Dear Contestant ,you need to maintaince your ranking until end of this contest to entitle redeem the prize</i></center></font>',
                            html: '<div style="background: transparent;width:80%;font-size: 16px;font-weight:bold;color:white;text-align:center;" >Ayoha Account Created Successfully !<img src="resources/icons/successregister.gif" style="width: 40px; height: 40px;  " alt="Company Name"></div>',
                            // text: '<button class="button3">OK</button>',

                            //handler: function () {

                            //    FloatPanel_GraphicConfetiHide();

                            //},


                        },
                         


                ]

            },






        });

    return _FloatPanel_GraphicConfeti;
}



function FloatPanel_GraphicConfetiShow() {
    Ext.Viewport.remove(_FloatPanel_GraphicConfeti);
    this.overlay = Ext.Viewport.add(FloatPanel_GraphicConfeti());
    this.overlay.show();
    is_FloatPanel_GraphicConfetiHide = 'Y';
    AddRoutePages("FloatPanel_GraphicConfetiHide()");
    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_GraphicConfeti]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_GraphicConfetiHide();
      }
    );
    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    FloatPanel_GraphicConfetiHide();
    //});
    //task.delay(2000);


}
var is_FloatPanel_GraphicConfetiHide = 'N';

function FloatPanel_GraphicConfetiHide() {

    if (is_FloatPanel_GraphicConfetiHide == 'Y') {
        _FloatPanel_GraphicConfeti.hide();
        is_FloatPanel_GraphicConfetiHide = 'N';
        RemovePages("FloatPanel_GraphicConfetiHide()");
        // swalFireSuccessStampedCardMsg("Stamped Success!!");
    }

}







